import puppeteer from "puppeteer-core";
// Screenshots with motion ON: hero after its entrance, the map section after scrolling
// to it, the Services mega menu on hover, and the mobile menu open.
const out = process.env.OUT || ".";
const b = await puppeteer.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: true, args: ["--hide-scrollbars"] });
const p = await b.newPage();
await p.setViewport({ width: 1440, height: 900 });
await p.goto("http://localhost:3300/", { waitUntil: "networkidle2" });
await new Promise((r) => setTimeout(r, 400));
await p.screenshot({ path: `${out}/motion-hero-early.png` });
await new Promise((r) => setTimeout(r, 2600));
await p.screenshot({ path: `${out}/motion-hero.png` });
const y = await p.evaluate(() => document.querySelector("#home-hours-title").getBoundingClientRect().top + scrollY - 160);
for (let s = 0; s <= y; s += 300) { await p.evaluate((s) => window.scrollTo(0, s), s); await new Promise((r) => setTimeout(r, 50)); }
await new Promise((r) => setTimeout(r, 3500));
await p.screenshot({ path: `${out}/motion-hours.png` });
await p.evaluate(() => window.scrollTo(0, 0)); await new Promise((r) => setTimeout(r, 800));
const services = await p.$("nav[aria-label='Main'] > ul > li:nth-child(2)");
await services.hover(); await new Promise((r) => setTimeout(r, 700));
await p.screenshot({ path: `${out}/motion-mega.png` });
await p.setViewport({ width: 390, height: 844 });
await p.goto("http://localhost:3300/", { waitUntil: "networkidle2" });
await p.click("button[aria-controls='mobile-menu']"); await new Promise((r) => setTimeout(r, 800));
await p.evaluate(() => document.querySelector("#mobile-menu details:nth-of-type(1)")?.setAttribute("open", ""));
await new Promise((r) => setTimeout(r, 300));
await p.screenshot({ path: `${out}/motion-mobile-menu.png` });
await b.close();
