import io, re, json
D = r"E:/Wordpress Project Backup/Amazing Smiles/docs/seo-content/10 Utility/01 HTML Sitemap/HTML Sitemap/02 Content.md"
t = io.open(D, encoding="utf-8").read()
title = re.search(r"\*\*Title tag:\*\* (.*)", t).group(1).strip()
desc = re.search(r"\*\*Meta description:\*\* (.*)", t).group(1).strip()
chunks = [c.strip() for c in re.split(r"\n---\n", t)]
hero = next(c for c in chunks if c.startswith("## [HERO]")).splitlines()
intro = " ".join(l for l in hero if l.strip() and not l.startswith("#"))
GROUPS = {"Main Pages": "core", "Patient Information": "patient-info", "General Dentistry": "general", "Restorative Dentistry": "restorative",
          "Cosmetic Dentistry": "cosmetic", "Areas We Serve": "location", "Services by Area": "service-location", "Blog": "content",
          "Legal and Accessibility": "legal"}
groups = []
for c in chunks:
    if not c.startswith("## ") or c.startswith("## ["):
        continue
    h2 = c.splitlines()[0][3:].strip()
    if h2 not in GROUPS:
        continue
    links = [{"label": m.group(1), "path": m.group(2)} for m in re.finditer(r"^- \[(.+?)\]\((.+?)\)$", c, re.M)]
    slug = re.sub(r"[^a-z0-9]+", "-", h2.lower()).strip("-")
    groups.append({"id": slug + "-title", "title": re.sub(r"\band\b", "&", h2), "group": GROUPS[h2], "links": links})
nap = chunks[-1]
js = lambda v: json.dumps(v, ensure_ascii=False, indent=2)
out = f'''import type {{ RouteGroup }} from "@/content/routes";

/**
 * HTML sitemap copy, verbatim from docs/seo-content/10 Utility/01 HTML Sitemap/HTML Sitemap/02 Content.md
 * (Final v1). Group headings use "&" (client rule). The page merges these labels with the
 * route list, so pages published later appear automatically (handoff).
 */

export const sitemapMeta = {js({"path": "/sitemap/", "title": title, "description": desc})};

export const sitemapBreadcrumb = [
  {{ name: "Home", path: "/" }},
  {{ name: "Sitemap", path: "/sitemap/" }},
];

export const sitemapHero = {js({"title": {"lead": "Site", "accent": "map"}, "intro": intro})};

export type SitemapGroup = {{ id: string; title: string; group: RouteGroup; links: {{ label: string; path: string }}[] }};

export const sitemapGroups: SitemapGroup[] = {js(groups)};

export const sitemapNap = {js(nap)};
'''
io.open(r"E:/Wordpress Project Backup/Amazing Smiles/src/content/pages/sitemap.ts", "w", encoding="utf-8", newline="\n").write(out)
print(title, "|", intro, "|", [(g["title"], len(g["links"])) for g in groups], "|", nap)
