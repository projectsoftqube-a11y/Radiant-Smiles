import puppeteer from "puppeteer-core";
// Text clipped inside its own box (overflow hidden/clip ancestors), which the page-edge
// overflow check cannot see: flags any text element wider than its clipping ancestor.
const widths = (process.env.W || "1024,1200,1440,1920").split(",").map(Number);
const b = await puppeteer.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: true, args: ["--force-prefers-reduced-motion"] });
for (const w of widths) {
  const p = await b.newPage(); await p.setViewport({ width: w, height: 900 });
  await p.goto("http://localhost:3300/" + (process.env.PAGE ?? ""), { waitUntil: "load" }); await new Promise((r) => setTimeout(r, 1200));
  const bad = await p.evaluate(() => {
    const out = [];
    for (const el of document.querySelectorAll("main *")) {
      if (![...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim())) continue;
      if (el.closest(".visually-hidden")) continue;
      // Decorative text that bleeds off its card on purpose (aria-hidden, marked data-decor-bleed)
      if (el.closest("[data-decor-bleed]")) continue;
      const r = el.getBoundingClientRect(); if (!r.width) continue;
      for (let a = el.parentElement; a && a !== document.body; a = a.parentElement) {
        const cs = getComputedStyle(a);
        if (cs.overflowX === "hidden" || cs.overflowX === "clip") {
          const ar = a.getBoundingClientRect();
          if (r.right > ar.right + 1 || r.left < ar.left - 1) out.push(el.textContent.trim().slice(0, 40));
          break;
        }
      }
    }
    return [...new Set(out)];
  });
  console.log(w + "px:", bad.length ? bad.join(" | ") : "ok");
  await p.close();
}
await b.close();
