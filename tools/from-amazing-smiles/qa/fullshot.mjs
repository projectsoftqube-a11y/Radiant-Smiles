import puppeteer from "puppeteer-core";
// Full-page screenshots of one page at several widths, cut into viewport-tall slices.
// Reduced motion is forced so every reveal shows its final state.
// Usage: PAGE="" W="1440,374" OUT="<dir>" node fullshot.mjs
const path = process.env.PAGE ?? "";
const widths = (process.env.W || "1440,374").split(",").map(Number);
const out = process.env.OUT || ".";
const sliceH = Number(process.env.SLICE || 1800);
const b = await puppeteer.launch({
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: true,
  args: ["--force-prefers-reduced-motion", "--hide-scrollbars"],
});
for (const w of widths) {
  const p = await b.newPage();
  await p.setViewport({ width: w, height: 900, deviceScaleFactor: 1 });
  await p.goto("http://localhost:3300/" + path, { waitUntil: "networkidle2", timeout: 120000 });
  // Scroll through once so lazy images load, then return to the top
  await p.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 600) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 60));
    }
    window.scrollTo(0, 0);
  });
  await new Promise((r) => setTimeout(r, 1200));
  const height = await p.evaluate(() => document.documentElement.scrollHeight);
  let i = 0;
  for (let y = 0; y < height; y += sliceH) {
    const h = Math.min(sliceH, height - y);
    await p.screenshot({ path: `${out}/shot-${w}-${String(i).padStart(2, "0")}.png`, clip: { x: 0, y, width: w, height: h }, captureBeyondViewport: true });
    i++;
  }
  console.log(`${w}px: ${height}px tall, ${i} slices`);
  await p.close();
}
await b.close();
