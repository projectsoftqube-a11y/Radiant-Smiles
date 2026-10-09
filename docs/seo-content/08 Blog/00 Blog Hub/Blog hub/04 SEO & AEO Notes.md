# Blog hub: SEO, Local and AEO/GEO Notes

Final v1, 7 Oct 2026. Explains why the copy in `02 Content.md` is built the way it is. Internal only.

## 1. Keyword map

The blog hub is a navigation page; no keyword is assigned to it in the keyword clusters, and it must not compete with the service pages the posts support.

| Keyword | Vol / mo | KD | Where it's used | Notes |
|---|---|---|---|---|
| dental health blog (brand/navigational) | - | - | Title, H1 | Describes the page; not a ranking target. |
| Yardley + service terms | - | - | Not targeted | Owned by the service pages linked in 'Browse by Topic'. |

**Kept off this page on purpose:**
- The 13 posts recommended for a 301 (they compete with the implant, crown and cleaning pages).
- "near me" phrasing in new copy (only inside existing post titles).

## 2. Role of the page

1. Moves the blog index from `/about-us/blog/` to `/blog/` with a 301 and gives it a clean, crawlable list of the 10 posts that stay.
2. Routes readers to the money pages first ('Browse by Topic' links to implants, crowns, cleaning, whitening, emergency, insurance and offers), so posts support those pages instead of competing with them.
3. Gives future posts a home: the blog-post-writer stage adds new posts to the feed.

## 3. AEO / GEO

- The intro states who writes the blog and where the practice is (name and full street address).
- Each post title says plainly what it answers; post pages carry their own answer-first summaries and BlogPosting schema.
- No FAQ block on the hub (not useful on an index page).

## 4. Quality checks run

| Check | Result |
|---|---|
| Title / meta length | 49 / 142 characters (limits 60 / 120-155) |
| H1 | One: "Dental Health Blog" |
| Word count (02 body, incl. lists and FAQs) | 250 |
| Readability | Flesch reading ease about 58 (script estimate) |
| Banned words and em dashes | None found |
| Post list | 10 posts = 23 in the current post sitemap minus the 13 recommended 301s; every slug checked against `post-sitemap.xml` (crawled 7 Oct 2026). |
| Fact check | Patient education topics (brushing, gum disease, implants, whitening) and home-care topics (crowns, fillings, extractions) checked against the current pages. |
| Internal links | 21 unique; all in `url_map.md` except the 10 live blog post URLs (posts are outside the page map) |
| Schema validity | Every JSON-LD block parses (json.loads). Types and properties are standard schema.org: CollectionPage, BreadcrumbList, Blog. |
| Schema ↔ visible content | Generated from `02 Content.md` by script: WebPage name/description equal the title/meta exactly; NAP identical. |
| Independent fact-check (7 Oct 2026) | 2 findings (0 errors, 2 warnings); all resolved: fixed, or verified against the current site, or moved to section 5. "From the dentists and team" → "Plain answers to common dental questions from Radiant Smiles @ Floral Vale" (authorship of the existing posts not confirmed; item 2 in section 5). "Links to the treatment page" clause removed; a pre-launch task in the handoff adds a treatment-page link to each of the 10 posts. |

## 5. Information still needed from the practice

1. **Post review:** approve the 13 recommended 301s (or keep any post that still earns traffic, after the Semrush rerun).
2. **Post authorship:** who wrote the 10 kept posts, and who reviews posts clinically, so each post can show a named dentist reviewer. Until confirmed, the hub doesn't say the posts are written by the dentists.
3. **Old titles:** whether to retitle the kept posts that use "near me" (e.g. "Affordable Toothache Relief & Treatment Near Me, Yardley").

## Sources

- `post-sitemap.xml` extract (`/home/claude/rs/site/post-sitemap.xml.md`), 'Redirects (301)' tab of the keyword map, `fact_sheet.md`.
