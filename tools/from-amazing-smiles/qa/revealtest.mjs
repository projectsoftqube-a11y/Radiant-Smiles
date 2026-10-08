import puppeteer from "puppeteer-core";
// Below-fold content must start hidden, then every section must be visible after scrolling through
const b = await puppeteer.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: true });
for (const path of process.env.PAGES.split(",")) {
  const p = await b.newPage(); await p.setViewport({ width: 1440, height: 900 });
  await p.goto("http://localhost:3300/" + path, { waitUntil: "load" }); await new Promise(r => setTimeout(r, 1500));
  const before = await p.evaluate(() => {
    const els = [...document.querySelectorAll("main [data-reveal]")];
    return { total: els.length, hidden: els.filter(e => getComputedStyle(e).opacity === "0").length };
  });
  // Top-level blocks of the article / sections that are NOT animated
  const unanimated = await p.evaluate(() => {
    const out = [];
    document.querySelectorAll("main section > *, main article > *, main article section > *, main aside > *").forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < innerHeight) return; // above the fold (hero): CSS entrance instead
      if (el.closest("[data-reveal]") || el.querySelector("[data-reveal]")) return;
      out.push(el.tagName + "." + String(el.className).split(" ")[0].slice(0, 40));
    });
    return [...new Set(out)];
  });
  for (let y = 0; y < 20000; y += 400) { await p.evaluate((y) => window.scrollTo(0, y), y); await new Promise(r => setTimeout(r, 40)); }
  await new Promise(r => setTimeout(r, 1500));
  const after = await p.evaluate(() => [...document.querySelectorAll("main [data-reveal]")].filter(e => getComputedStyle(e).opacity !== "1").length);
  const heroAnim = await p.evaluate(() => [...document.querySelectorAll("main section:first-child *")].filter(e => getComputedStyle(e).animationName !== "none").length);
  console.log(path, "| reveal els", before.total, "hidden at load", before.hidden, "| still hidden after scroll", after, "| hero animated els", heroAnim, "| not animated:", unanimated.join(", ") || "none");
  await p.close();
}
await b.close();
