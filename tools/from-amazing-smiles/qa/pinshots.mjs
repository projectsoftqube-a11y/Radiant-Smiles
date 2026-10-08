import puppeteer from "puppeteer-core";
// Scroll-driven Services tabs: shots and the active tab at steps through the pinned scroll.
const out = process.env.OUT || ".";
const w = +(process.env.W || 1440), h = +(process.env.H || 900);
const b = await puppeteer.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: true, args: ["--hide-scrollbars"] });
const p = await b.newPage(); await p.setViewport({ width: w, height: h });
await p.goto("http://localhost:3300/", { waitUntil: "networkidle2" });
await p.addStyleTag({ content: "nextjs-portal{display:none!important}" });
await p.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 500) { scrollTo(0, y); await new Promise((r) => setTimeout(r, 40)); } scrollTo(0, 0); });
await new Promise((r) => setTimeout(r, 800));
const top = await p.evaluate(() => { const s = document.querySelector("section[aria-labelledby=home-services-title]"); return scrollY + s.getBoundingClientRect().top; });
for (let i = 0; i <= 12; i++) {
  const y = top + i * (h * 0.3);
  await p.evaluate((y) => scrollTo(0, y), y); await new Promise((r) => setTimeout(r, 700));
  const info = await p.evaluate(() => {
    const t = document.querySelector("[role=tab][aria-selected=true]"); const tabs = t.closest("[role=tablist]").parentElement;
    return { active: t.textContent.trim().slice(0, 30), tabsTop: Math.round(tabs.getBoundingClientRect().top), progress: tabs.style.getPropertyValue("--tab-progress") };
  });
  console.log(i, Math.round(y), JSON.stringify(info));
  if (process.env.SHOTS && [1, 4, 8].includes(i)) await p.screenshot({ path: `${out}/pin-${w}-${i}.png` });
}
await b.close();
