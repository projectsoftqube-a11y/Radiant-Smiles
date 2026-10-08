import puppeteer from "puppeteer-core";
// Browser console errors and warnings (hydration, React, failed requests) while loading and scrolling a page.
const b = await puppeteer.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: true });
for (const w of [1440, 390]) {
  const p = await b.newPage(); await p.setViewport({ width: w, height: 900 });
  const logs = [];
  p.on("console", (m) => { if (["error", "warning"].includes(m.type())) logs.push(m.type() + ": " + m.text().slice(0, 200)); });
  p.on("pageerror", (e) => logs.push("pageerror: " + e.message));
  p.on("requestfailed", (r) => logs.push("failed: " + r.url().slice(0, 120)));
  await p.goto("http://localhost:3300/" + (process.env.PAGE ?? ""), { waitUntil: "networkidle2" });
  for (let y = 0; y < 16000; y += 500) { await p.evaluate((y) => scrollTo(0, y), y); await new Promise((r) => setTimeout(r, 60)); }
  await new Promise((r) => setTimeout(r, 1500));
  console.log(w + "px:", logs.length ? "\n  " + [...new Set(logs)].join("\n  ") : "no errors or warnings");
  await p.close();
}
await b.close();
