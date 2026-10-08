import puppeteer from "puppeteer-core";
// Element screenshots of the footer at several widths (reduced motion: final state).
const out = process.env.OUT || ".";
const widths = (process.env.W || "1440,1024,374").split(",").map(Number);
const b = await puppeteer.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: true, args: ["--force-prefers-reduced-motion", "--hide-scrollbars"] });
for (const w of widths) {
  const p = await b.newPage(); await p.setViewport({ width: w, height: 900 });
  await p.goto("http://localhost:3300/", { waitUntil: "networkidle2" });
  const f = await p.$("footer"); await f.scrollIntoView(); await new Promise((r) => setTimeout(r, 800));
  await f.screenshot({ path: `${out}/footer-${w}.png` });
  await p.close();
}
await b.close();
