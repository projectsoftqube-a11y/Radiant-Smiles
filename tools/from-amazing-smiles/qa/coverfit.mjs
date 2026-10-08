import puppeteer from "puppeteer-core";
// For every card photo: rendered box ratio vs the image's natural 3:2 (any difference = cropping)
const b = await puppeteer.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: true });
for (const path of process.env.PAGES.split(","))
for (const w of process.env.W.split(",").map(Number)) {
  const p = await b.newPage(); await p.setViewport({ width: w, height: 900 });
  await p.goto("http://localhost:3300/" + path, { waitUntil: "load" }); await new Promise(r => setTimeout(r, 800));
  const res = await p.evaluate(() => [...document.querySelectorAll("main li img, main [class*=coverPhoto] img")].map((img) => {
    const r = img.getBoundingClientRect(); return (r.width / r.height).toFixed(3);
  }));
  const bad = res.filter((x) => Math.abs(x - 1.5) > 0.02);
  console.log(path, w, "photos", res.length, bad.length ? "CROPPED " + bad.join(" ") : "all 3:2 (uncropped)");
  await p.close();
}
await b.close();
