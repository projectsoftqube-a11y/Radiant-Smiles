# Patient Education: SEO, Local and AEO/GEO Notes

Final v1, 7 Oct 2026. Explains why the copy in `02 Content.md` is built the way it is.

## 1. Keyword map: which section targets what

| Keyword | Vol / mo | KD | Where it's used | Notes |
|---|---|---|---|---|
| (none assigned) | n/a | n/a | n/a | The brief assigns no primary keyword. The page is an index, not a ranking target. "Patient education" and "dental health guides" appear naturally in the title, meta and hero. |

**Kept off this page on purpose:** every topic keyword belongs to the blog post or service page that covers it. This page only links to them, so it never competes with them.

## 2. Role of the page

A short index that points readers to `/blog/` (with a build-time feed of the 6 latest posts) and to five on-site guides: home care instructions, oral hygiene, children's dentistry, emergency dentistry and new patients. It replaces the old page's embedded RevenueWell Patient Education Library, which was third-party content, not the practice's own. The brief allows merging this page into `/blog/` instead; the handoff asks the team to pick one before launch so the site doesn't carry two near-duplicate indexes.

## 3. AEO/GEO

Answer-first sentence: "This page gathers the guides and articles from the team at Radiant Smiles @ Floral Vale in Yardley, PA."

The page's AEO value is in what it links to: each linked guide has its own answer-first copy and FAQs. The CollectionPage + ItemList schema lists those static links. No FAQ block (nothing to answer on an index page).

## 4. Quality checks run on this draft

| Check | Result |
|---|---|
| Fact-check | Link descriptions match the target pages' scope (fact sheet services). No individual blog post URLs linked (not in the URL map; the feed handles them). |
| Banned words / em dashes | None found (script check). |
| Internal links | 7 unique internal URLs, all in the live URL map. |
| Schema validity | JSON-LD parses; CollectionPage, ItemList and BreadcrumbList exist in schema.org. |
| Schema ↔ visible content | Name/description equal title/meta; ItemList entries match the visible links. |
| Stats | words 212 (index page) · Flesch 70 · title 48 · meta 152 (the brief's 94-character meta was extended to the 120–155 range) · H1 "Patient Education" |

## 5. Information still needed from the practice

1. **Keep or merge:** keep this index page, or 301 it to `/blog/`?
2. **RevenueWell library:** does the practice still pay for it and want a link to it? (Not embedded in the new design.)
3. **Blog review:** 13 duplicate blog posts are recommended for 301s (Redirects tab). The feed should only show posts that stay live.

## Sources

- radiant-smiles.com extract `/patient-information/patient-education/` (7 Oct 2026)
- `00 Reference/Radiant Smiles - Keyword Map & Sitemap.xlsx`, Redirects (301) tab (blog moves and duplicates)
- Blog hub brief: `08 Blog/00 Blog Hub/Blog hub/01 Keyword Brief.md`
