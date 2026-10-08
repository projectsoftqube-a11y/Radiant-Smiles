import puppeteer from "puppeteer-core";
const b = await puppeteer.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: true });
for (const w of [374, 1440]) {
  const p = await b.newPage(); await p.setViewport({ width: w, height: 900 });
  await p.goto("http://localhost:3300/" + (process.env.PAGE ?? ""), { waitUntil: "load" });
  const small = await p.evaluate(() => {
    const out = new Set();
    for (const el of document.querySelectorAll("body *")) {
      if (!el.childNodes.length || ![...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim())) continue;
      if (el.closest(".visually-hidden, [aria-hidden='true'] svg")) continue;
      const fs = parseFloat(getComputedStyle(el).fontSize);
      if (fs < 13) out.add(el.tagName + " " + fs + "px: " + el.textContent.trim().slice(0, 30));
    }
    return [...out];
  });
  console.log(w + "px text under 13px:", small.length ? small : "none");
  await p.close();
}
await b.close();
