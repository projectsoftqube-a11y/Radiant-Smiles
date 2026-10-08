import puppeteer from "puppeteer-core";
const b = await puppeteer.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: true });
const p = await b.newPage(); await p.setViewport({ width: 1440, height: 900 });
await p.goto("http://localhost:3300/blog/how-long-do-porcelain-veneers-last/", { waitUntil: "load" });
console.log(await p.evaluate(() => [...document.querySelectorAll("section[aria-labelledby=post-title] *")]
  .filter(e => getComputedStyle(e).animationName !== "none")
  .map(e => String(e.className).split(" ")[0].replace(/-module__\w+__/, ":") + "=" + getComputedStyle(e).animationName).join("\n")));
await b.close();
