import puppeteer from "puppeteer-core";
// Areas map geometry: routes under name pills, pills overlapping, pills/dots in the river, pills outside the map.
const widths = (process.env.W || "1920,1440,1200,1024,768").split(",").map(Number);
const b = await puppeteer.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: true, args: ["--force-prefers-reduced-motion"] });
for (const w of widths) {
  const p = await b.newPage(); await p.setViewport({ width: w, height: 900 });
  await p.goto("http://localhost:3300/", { waitUntil: "networkidle2" });
  const res = await p.evaluate(() => {
    const sec = document.querySelector("section[aria-labelledby=home-areas-title]");
    sec.scrollIntoView();
    const svg = sec.querySelector("svg[viewBox='0 0 1000 700']"); const m = svg.getScreenCTM();
    const pt = (x, y) => { const q = svg.createSVGPoint(); q.x = x; q.y = y; return q.matrixTransform(m); };
    const sample = (path, step = 4) => { const L = path.getTotalLength(); const out = []; for (let l = 0; l <= L; l += step) { const a = path.getPointAtLength(l); out.push(pt(a.x, a.y)); } return out; };
    const mapBox = sec.querySelector("[class*=map]").getBoundingClientRect();
    const labels = [...sec.querySelectorAll("li[class*=label]")].map((li) => { const pill = li.querySelector("[class*=pill]").getBoundingClientRect(); const d = (li.querySelector("[class*=dot]") || sec.querySelector("[class*=officePin]")).getBoundingClientRect(); return { name: li.textContent.trim(), pill, dot: { x: d.x + d.width / 2, y: d.y + d.height / 2 } }; });
    const routes = [...svg.querySelectorAll("path[class*=route]")];
    const riverBand = svg.querySelector("path[class*=riverBank]");
    const bandHalf = 13 * m.a + 6; // band half-width in px + margin
    const river = sample(riverBand, 3);
    const inside = (r, p, pad = 2) => p.x > r.left - pad && p.x < r.right + pad && p.y > r.top - pad && p.y < r.bottom + pad;
    const issues = [];
    routes.forEach((route) => {
      const pts = sample(route); const end = pts[pts.length - 1];
      labels.forEach((l) => { if (Math.hypot(l.dot.x - end.x, l.dot.y - end.y) < 3) return; if (pts.some((q) => inside(l.pill, q))) issues.push(`route to (${Math.round(end.x)},${Math.round(end.y)}) under "${l.name}"`); });
      labels.forEach((l) => { if (Math.hypot(l.dot.x - end.x, l.dot.y - end.y) < 3) { if (pts.slice(0, -4).some((q) => inside(l.pill, q, 0))) issues.push(`own route under "${l.name}"`); } });
    });
    labels.forEach((a, i) => labels.slice(i + 1).forEach((c) => { const r1 = a.pill, r2 = c.pill; if (r1.left < r2.right + 4 && r2.left < r1.right + 4 && r1.top < r2.bottom + 4 && r2.top < r1.bottom + 4) issues.push(`"${a.name}" overlaps "${c.name}"`); }));
    labels.forEach((l) => {
      if (river.some((q) => Math.hypot(q.x - l.dot.x, q.y - l.dot.y) < bandHalf)) issues.push(`dot "${l.name}" in river`);
      if (river.some((q) => q.x > l.pill.left - bandHalf + 6 && q.x < l.pill.right + bandHalf - 6 && q.y > l.pill.top - bandHalf + 6 && q.y < l.pill.bottom + bandHalf - 6)) issues.push(`pill "${l.name}" on river`);
      if (l.pill.left < mapBox.left + 6 || l.pill.right > mapBox.right - 6 || l.pill.top < mapBox.top + 6 || l.pill.bottom > mapBox.bottom - 6) issues.push(`pill "${l.name}" outside map`);
    });
    const office = sec.querySelector("[class*=officePin]").getBoundingClientRect();
    labels.forEach((l) => { const r = l.pill; if (!l.pill || l.name === "Yardley") return; if (r.left < office.right && office.left < r.right && r.top < office.bottom && office.top < r.bottom) issues.push(`"${l.name}" over office pin`); });
    return { visible: getComputedStyle(sec.querySelector("ul[class*=labels]")).display !== "none", issues };
  });
  console.log(`${w}px:`, res.visible ? (res.issues.length ? "\n  " + res.issues.join("\n  ") : "ok") : "labels hidden");
  await p.close();
}
await b.close();
