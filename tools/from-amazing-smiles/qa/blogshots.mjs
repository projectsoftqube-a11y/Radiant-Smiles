import puppeteer from "puppeteer-core";
const pages = (process.env.PAGES || "blog/how-long-do-porcelain-veneers-last/").split(",");
const widths = (process.env.W || "1440,374").split(",").map(Number);
const b = await puppeteer.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: true, args: ["--force-prefers-reduced-motion"] });
for (const path of pages) for (const w of widths) {
  const p = await b.newPage(); await p.setViewport({ width: w, height: 900 });
  await p.goto("http://localhost:3300/" + path, { waitUntil: "load", timeout: 120000 });
  await p.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 600) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 60)); } window.scrollTo(0, 0); });
  await new Promise(r => setTimeout(r, 1200));
  // hide the fixed mobile bar and header so full-page shots don't repeat them mid-page
  await p.addStyleTag({ content: "header, [class*=MobileBar], [class*=mobileBar], nextjs-portal { position: absolute !important; }" });
  const name = (path.replace(/\//g, "_") || "home") + "-" + w + ".jpg";
  await p.screenshot({ path: name, fullPage: true, quality: 60 });
  console.log(name);
  await p.close();
}
await b.close();
