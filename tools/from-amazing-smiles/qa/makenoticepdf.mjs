import puppeteer from "puppeteer-core";
import { mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
// HIPAA Notice of Privacy Practices → public/downloads/radiant-smiles-notice-of-privacy-practices.pdf
// Printed from the live page (print stylesheet: no header, footer, menu or buttons), so the PDF
// text matches the page word for word, effective date included. Re-run after any change to the
// notice (handoff: replace the page text and the PDF together).
// Usage (dev server on 3300): node makenoticepdf.mjs
const here = dirname(fileURLToPath(import.meta.url));
const out = resolve(here, "../../../public/downloads/radiant-smiles-notice-of-privacy-practices.pdf");
mkdirSync(dirname(out), { recursive: true });

const b = await puppeteer.launch({
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: true,
  args: ["--force-prefers-reduced-motion"],
});
const p = await b.newPage();
await p.setViewport({ width: 1000, height: 1300 });
await p.goto("http://localhost:3300/hipaa-notice-of-privacy-practices/", { waitUntil: "networkidle2", timeout: 120000 });
await p.emulateMediaType("print");
await new Promise((r) => setTimeout(r, 800));
const effective = await p.evaluate(() => document.querySelector("[data-legal-doc] p[class*=dated]")?.textContent?.trim() ?? "");
const small = "font-family: Arial, sans-serif; font-size: 8px; color: #555; width: 100%; padding: 0 0.6in;";
await p.pdf({
  path: out,
  format: "Letter",
  printBackground: true,
  margin: { top: "0.6in", bottom: "0.7in", left: "0.5in", right: "0.5in" },
  displayHeaderFooter: true,
  headerTemplate: "<span></span>",
  footerTemplate: `<div style="${small} display: flex; justify-content: space-between;"><span>Radiant Smiles @ Floral Vale · HIPAA Notice of Privacy Practices · ${effective}</span><span>Page <span class="pageNumber"></span> of <span class="totalPages"></span></span></div>`,
});
await b.close();
console.log("written:", out, "|", effective);
