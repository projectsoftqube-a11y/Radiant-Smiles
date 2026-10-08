import puppeteer from "puppeteer-core";
// Element screenshots of sections by heading id (SEL = comma list of section selectors), animations played.
const out = process.env.OUT || ".";
const widths = (process.env.W || "1440,374").split(",").map(Number);
const sels = (process.env.SEL || "").split(",").filter(Boolean);
const b = await puppeteer.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: true, args: ["--hide-scrollbars"] });
for (const w of widths) {
  const p = await b.newPage(); await p.setViewport({ width: w, height: 900 });
  await p.goto("http://localhost:3300/", { waitUntil: "networkidle2" });
  for (const sel of sels) {
    const el = await p.$(sel); if (!el) { console.log("missing", sel); continue; }
    // scroll through so the reveals play
    await p.evaluate(async (s, off) => { const e = document.querySelector(s); const r = e.getBoundingClientRect(); const top = scrollY + r.top; for (let y = top - innerHeight; y < top + r.height; y += 200) { scrollTo(0, y); await new Promise((r) => setTimeout(r, 60)); } scrollTo(0, top - off); }, sel, +(process.env.OFFSET || 100));
    await new Promise((r) => setTimeout(r, +(process.env.WAIT || 1800)));
    const name = sel.replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "");
    await el.screenshot({ path: `${out}/${name}-${w}.png` });
  }
  await p.close();
}
await b.close();
