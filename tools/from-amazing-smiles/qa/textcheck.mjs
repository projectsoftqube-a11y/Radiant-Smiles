import { readFileSync } from "node:fs";
import puppeteer from "puppeteer-core";
// Wording check: every line of a content file (02 Content.md) must appear on the page.
// Reads the rendered text of <main> (textContent, so screen-reader-only joins count).
// Comparison ignores case, whitespace, curly vs straight quotes, and "&" vs "and"
// (house style swaps "and" for "&" in headings and labels).
// Usage: PAGE="" MD="docs/seo-content/.../02 Content.md" node textcheck.mjs
const md = readFileSync(process.env.MD, "utf8");
const start = md.indexOf("## [HERO]");
const body = start >= 0 ? md.slice(start) : md.split(/\n---\n/).slice(2).join("\n");

const norm = (t) =>
  t
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/&/g, "and")
    .replace(/before-and-after/g, "before and after")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();

const lines = [];
for (let line of body.split("\n")) {
  line = line.trim();
  if (!line || /^(-{3,}|\|[-| ]+\|)$/.test(line)) continue;
  if (/^\*\*\[(Map embed|Quick facts strip)\]/.test(line)) continue;
  line = line
    .replace(/\[CONFIRM:[^\]]*\]/g, "")
    .replace(/^\*\*\[(Button|Link|Text link)\]\s*/, "")
    .replace(/\*\*\s*→.*$/, "")
    .replace(/→\s*`[^`]*`/g, "")
    .replace(/^#+\s*(\[[A-Z ]+\])?\s*/, "")
    .replace(/^>\s*/, "")
    .replace(/^- /, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\*\*/g, "")
    .replace(/`/g, "");
  const parts = line.startsWith("|") ? line.split("|").map((c) => c.trim()) : [line];
  for (const part of parts) {
    const p = part.replace(/^[\s,]+|[\s,]+$/g, "");
    if (p && !/^\[.*\]$/.test(p)) lines.push(p);
  }
}

const b = await puppeteer.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: true });
const page = await b.newPage();
await page.goto("http://localhost:3300/" + (process.env.PAGE ?? ""), { waitUntil: "load" });
const text = norm(await page.evaluate(() => document.querySelector("main").textContent));
await b.close();

const missing = lines.filter((l) => !text.includes(norm(l)));
console.log(`checked ${lines.length} lines, missing ${missing.length}`);
for (const m of missing) console.log(" -", m.slice(0, 160));
