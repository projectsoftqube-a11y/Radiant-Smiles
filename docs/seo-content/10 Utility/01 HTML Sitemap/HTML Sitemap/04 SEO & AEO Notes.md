# HTML Sitemap: SEO, Local and AEO/GEO Notes

Final v1, 7 Oct 2026. Explains why the copy in `02 Content.md` is built the way it is. Internal only.

## 1. Keyword map

No keyword target: navigation page.

| Keyword | Vol / mo | KD | Where it's used | Notes |
|---|---|---|---|---|
| radiant smiles sitemap (navigational) | - | - | Title, H1 | Brand + page name only. |

**Kept off this page on purpose:** `/lp/` pages, conditional service + location pages, on-hold town pages and individual blog posts (the blog hub is listed instead).

## 2. Role of the page

1. Keeps the `/sitemap/` URL and gives people (and crawlers) one page that links to every indexable page, grouped the same way as the main navigation.
2. Link text is descriptive ("Dental insurance and payment options", "Dentist near Ewing, NJ") rather than bare page names, so each link tells the reader where it goes.

## 3. AEO / GEO

Not a target for AI answers. The full list of service and town pages helps crawlers discover every page and understand the site's structure.

## 4. Quality checks run

| Check | Result |
|---|---|
| Title / meta length | 50 / 148 characters (limits 60 / 120-155) |
| H1 | One: "Sitemap" |
| Word count (02 body, incl. lists and FAQs) | 445 |
| Readability | Flesch reading ease about 52 (script estimate) |
| Banned words and em dashes | None found |
| Coverage | 75 page links. Script check: every live URL in `url_map.md` is listed except `/sitemap/` itself, the 4 `/lp/` pages and the 3 conditional pages; none of the excluded or on-hold URLs appears. |
| Scheduling link | `/patient-information/scheduling/` is listed as "Request an appointment". |
| Internal links | 75 unique; all in `url_map.md` |
| Schema validity | Every JSON-LD block parses (json.loads). Types and properties are standard schema.org: WebPage, BreadcrumbList. |
| Schema ↔ visible content | Generated from `02 Content.md` by script: WebPage name/description equal the title/meta exactly; NAP identical. |

## 5. Information still needed from the practice

None for this page. It changes only when pages are added or removed (for example, if a conditional page is built or the on-hold town pages are released).

## Sources

- `url_map.md` (live URL map, 7 Oct 2026).
