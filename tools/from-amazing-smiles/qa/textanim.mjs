import puppeteer from "puppeteer-core";
// Every text element below the hero must sit inside something that animates on scroll
// (data-reveal, data-reveal-media, data-word, or a component-driven reveal). Lists the ones that don't.
const w = +(process.env.W || 1440);
const b = await puppeteer.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: true });
const p = await b.newPage(); await p.setViewport({ width: w, height: 900 });
await p.goto("http://localhost:3300/" + (process.env.PAGE ?? ""), { waitUntil: "networkidle2" });
const res = await p.evaluate(() => {
  const ANIM = "[data-reveal],[data-reveal-media],[data-word],[data-print],[data-rise],[data-grow],[data-mouth-floor],[data-anim]";
  const hero = document.querySelector("main section");
  const out = [];
  for (const el of document.querySelectorAll("main *, footer *")) {
    if (![...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim())) continue;
    if (hero && hero.contains(el)) continue;
    if (el.closest(".visually-hidden, [hidden], script, style, noscript")) continue;
    const r = el.getBoundingClientRect(); if (!r.width || !r.height) continue;
    if (getComputedStyle(el).visibility === "hidden") continue;
    if (el.closest(ANIM)) continue;
    const sec = el.closest("section, footer");
    const id = sec?.getAttribute("aria-labelledby") || sec?.tagName.toLowerCase() || "?";
    out.push(`${id} | <${el.tagName.toLowerCase()} class="${(el.className?.baseVal ?? el.className).toString().slice(0, 40)}"> ${el.textContent.trim().slice(0, 50)}`);
  }
  return out;
});
console.log(`${w}px: ${res.length} text elements without a scroll animation`);
res.forEach((l) => console.log("  " + l));
await b.close();
