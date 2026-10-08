import puppeteer from "puppeteer-core";
// Viewport-sized shots at given scroll offsets: PAGE, W, Y (comma list)
const path = process.env.PAGE, w = +process.env.W, ys = process.env.Y.split(",").map(Number), h = +(process.env.H || 900);
const b = await puppeteer.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: true, args: ["--force-prefers-reduced-motion"] });
const p = await b.newPage(); await p.setViewport({ width: w, height: h });
await p.goto("http://localhost:3300/" + path, { waitUntil: "load", timeout: 120000 });
await p.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 600) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 50)); } });
await p.addStyleTag({ content: "nextjs-portal{display:none!important}" });
for (const y of ys) {
  await p.evaluate((y) => window.scrollTo(0, y), y); await new Promise(r => setTimeout(r, 700));
  const name = `crop-${w}-${y}.jpg`; await p.screenshot({ path: name, quality: 70 }); console.log(name);
}
console.log("height", await p.evaluate(() => document.body.scrollHeight));
await b.close();
