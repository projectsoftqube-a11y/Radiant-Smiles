import puppeteer from "puppeteer-core";
const b = await puppeteer.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: true });
for (const [w, h] of [[1920, 1080], [1440, 900], [1366, 768], [390, 844]]) {
  const p = await b.newPage(); await p.setViewport({ width: w, height: h });
  await p.goto("http://localhost:3300/", { waitUntil: "networkidle2" });
  const r = await p.evaluate(() => {
    const hero = document.querySelector("main section");
    const anim = (el) => { for (let a = el; a && a !== hero.parentElement; a = a.parentElement) { const cs = getComputedStyle(a); if (cs.animationName && cs.animationName !== "none") return true; } return false; };
    const noHero = [];
    for (const el of hero.querySelectorAll("*")) {
      if (![...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim())) continue;
      const rr = el.getBoundingClientRect(); if (!rr.width) continue;
      if (!anim(el) && !el.closest("[data-reveal]")) noHero.push(`<${el.tagName.toLowerCase()} ${String(el.className).slice(0, 30)}> ${el.textContent.trim().slice(0, 40)}`);
    }
    // reveal items already on screen at load (skipped by MotionController's below-fold rule)
    const fold = innerHeight * 0.92;
    const onLoad = [...document.querySelectorAll("[data-reveal]")].filter((e) => !hero.contains(e) && e.getBoundingClientRect().top <= fold).map((e) => e.textContent.trim().slice(0, 40));
    return { noHero, onLoad };
  });
  console.log(`${w}x${h} hero text without entrance: ${r.noHero.length}`); r.noHero.forEach((l) => console.log("   " + l));
  console.log(`   below-hero reveals already on screen at load: ${r.onLoad.length}`); r.onLoad.forEach((l) => console.log("   - " + l));
  await p.close();
}
await b.close();
