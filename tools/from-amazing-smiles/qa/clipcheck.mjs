import puppeteer from "puppeteer-core";
// Flags visible content that extends past the viewport edge, even when a parent
// clips it (overflow: clip/hidden hides it from scrollWidth checks).
const pages = (process.env.PAGES || ",about-us/,about-us/dr-keyur-dudhat/,about-us/patient-reviews/,smile-gallery/,specials/,contact-us/").split(",");
const widths = (process.env.W || "320,360,390").split(",").map(Number);
const b = await puppeteer.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: true, args: ["--force-prefers-reduced-motion"] });
for (const path of pages) {
  const out = [];
  for (const w of widths) {
    const p = await b.newPage(); await p.setViewport({ width: w, height: 800 });
    await p.goto("http://localhost:3300/" + path, { waitUntil: "load", timeout: 120000 }); await new Promise(r => setTimeout(r, 1500));
    const bad = await p.evaluate((w) => {
      const skip = (el) => {
        for (let a = el; a && a !== document.body; a = a.parentElement) {
          if (a.getAttribute("aria-hidden") === "true") return true;
          const cs = getComputedStyle(a);
          if (a !== el && (cs.overflowX === "auto" || cs.overflowX === "scroll")) return true;
          if (/marquee/i.test(a.className?.baseVal ?? a.className ?? "")) return true;
          if (cs.position === "fixed") return true;
        }
        return false;
      };
      return [...document.querySelectorAll("main *, footer *")]
        .filter((el) => { const r = el.getBoundingClientRect(); return r.width > 0 && r.height > 0 && (r.right > w + 1 || r.left < -1); })
        .filter((el) => !skip(el) && getComputedStyle(el).visibility !== "hidden")
        .slice(0, 4)
        .map((el) => el.tagName + "." + String(el.className?.baseVal ?? el.className).split(" ")[0].replace(/-module__\w+__/, ":") + " [" + Math.round(el.getBoundingClientRect().left) + "→" + Math.round(el.getBoundingClientRect().right) + "]");
    }, w);
    out.push(w + "px: " + (bad.length ? bad.join(", ") : "ok"));
    await p.close();
  }
  console.log("/" + path, "|", out.join(" | "));
}
await b.close();
