import puppeteer from "puppeteer-core";
// Run: VP=1440x900 MAXOP=0.6 node revealseen.mjs  (an element counts as still animating while its clip or transform is set)
// For every [data-reveal] element: is it still animating (opacity < 1) at the moment it first becomes
// visible to the user (inside the viewport, under the header, and not covered by something else)?
const [w, h] = (process.env.VP || "1440x900").split("x").map(Number);
const b = await puppeteer.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: true });
const p = await b.newPage(); await p.setViewport({ width: w, height: h });
await p.goto("http://localhost:3300/" + (process.env.PAGE ?? ""), { waitUntil: "networkidle2" });
await p.evaluate(() => { window.__seen = new Map(); });
const total = await p.evaluate(() => document.body.scrollHeight);
for (let y = 0; y < total; y += 60) {
  await p.evaluate((y) => window.scrollTo(0, y), y);
  await new Promise((r) => setTimeout(r, 40));
  await p.evaluate(() => {
    const headerB = document.querySelector("header").getBoundingClientRect().bottom;
    document.querySelectorAll("[data-reveal]").forEach((el, i) => {
      if (window.__seen.has(i)) return;
      const r = el.getBoundingClientRect(); if (!r.width || !r.height) return;
      // centre point of the element's first line
      const x = r.left + Math.min(r.width / 2, 40), y = r.top + Math.min(r.height / 2, 14);
      if (y < headerB || y > innerHeight - 4) return;
      const hit = document.elementFromPoint(x, y);
      if (!hit || !(el.contains(hit) || hit.contains(el))) return; // covered by something
      const cs = getComputedStyle(el); const moving = (cs.clipPath && cs.clipPath !== "none") || (cs.transform && cs.transform !== "none"); const op = moving ? Math.min(+cs.opacity, 0.5) : +cs.opacity;
      window.__seen.set(i, { tag: el.tagName + (el.className ? "." + String(el.className).split(" ")[0] : ""), text: el.textContent.trim().slice(0, 45), op, sec: el.closest("section")?.getAttribute("aria-labelledby") });
    });
  });
}
const seen = await p.evaluate(() => [...window.__seen.values()]);
const already = seen.filter((s) => s.op > +(process.env.MAXOP || 0.95));
console.log(`${w}x${h}: ${seen.length} reveal elements seen; ${already.length} were already fully shown when first visible:`);
already.forEach((s) => console.log(`  ${s.op.toFixed(2)} ${s.tag} | ${s.text}`));
await b.close();
