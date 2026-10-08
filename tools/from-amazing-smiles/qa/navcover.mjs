import puppeteer from "puppeteer-core";
import fs from "fs";
// Pages (published routes) vs links present in the header (desktop + mobile menus) and footer
const routesSrc = fs.readFileSync("E:/Wordpress Project Backup/Amazing Smiles/src/content/routes.ts", "utf8");
const routes = [...routesSrc.matchAll(/r\("([^"]+)",\s*"([^"]+)",\s*"([^"]+)"(?:,\s*(true|false))?(?:,\s*(true|false))?\)/g)]
  .map(m => ({ path: m[1], label: m[2], group: m[3], published: m[4] === "true", noindex: m[5] === "true" }))
  .filter(r => r.published);
const b = await puppeteer.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: true });
const collect = async (w) => {
  const p = await b.newPage(); await p.setViewport({ width: w, height: 900 });
  await p.goto("http://localhost:3300/", { waitUntil: "load" });
  const out = await p.evaluate(() => {
    const norm = (h) => { try { const u = new URL(h, location.href); return u.origin === location.origin ? u.pathname : null; } catch { return null; } };
    const get = (sel) => [...document.querySelectorAll(sel)].map(a => norm(a.getAttribute("href"))).filter(Boolean);
    return { header: get("header a[href], [class*=MobileMenu] a[href], [class*=mobileMenu] a[href], dialog a[href]"), footer: get("footer a[href]") };
  });
  await p.close(); return out;
};
const d = await collect(1440), m = await collect(390);
await b.close();
const header = new Set([...d.header, ...m.header]), footer = new Set([...d.footer, ...m.footer]);
const missing = routes.filter(r => !header.has(r.path) && !footer.has(r.path));
console.log("published pages:", routes.length, "| in header:", routes.filter(r => header.has(r.path)).length, "| in footer:", routes.filter(r => footer.has(r.path)).length, "| in neither:", missing.length);
const byGroup = {};
for (const r of missing) (byGroup[r.group] ??= []).push(r);
for (const [g, list] of Object.entries(byGroup)) { console.log(`\n${g} (${list.length})`); for (const r of list) console.log(`  ${r.path}  ${r.label}${r.noindex ? "  [noindex]" : ""}`); }
