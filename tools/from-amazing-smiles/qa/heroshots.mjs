import puppeteer from "puppeteer-core";
// Screenshot of each page's hero (first section), animations finished. PAGES, W, OUT.
const out = process.env.OUT || ".";
const pages = (process.env.PAGES || "").split(",");
const widths = (process.env.W || "1440").split(",").map(Number);
const b = await puppeteer.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: true, args: ["--hide-scrollbars"] });
for (const w of widths) for (const page of pages) {
  const p = await b.newPage(); await p.setViewport({ width: w, height: 900 });
  await p.goto("http://localhost:3300/" + page, { waitUntil: "networkidle2" });
  await p.addStyleTag({ content: "nextjs-portal{display:none!important}" });
  await new Promise((r) => setTimeout(r, 2600));
  const el = await p.$("main section");
  const name = (page.replace(/\//g, "_") || "home") + "-" + w;
  await el.screenshot({ path: `${out}/hero-${name}.png` });
  await p.close();
}
await b.close();
