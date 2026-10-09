# Dentist near Hamilton, NJ: SEO, Local and AEO/GEO Notes

Final v1, 7 Oct 2026. Explains why the copy in `02 Content.md` is built the way it is. Internal only.

## 1. Keyword map

Volumes and KD are pending (Semrush balance ran out; see the workspace README). Town terms are matched with honest phrasing ("near", "patients from"): the practice has one office, in Lower Makefield Township with a Yardley, PA address, and no page claims an office in the town.

| Keyword | Vol / mo | KD | Where it's used | Notes |
|---|---|---|---|---|
| dentist hamilton nj (primary) | pending | pending | H1/title "Dentist near Hamilton, NJ"; H2 "A Hamilton, NJ Dentist Open on Saturdays"; meta; first sentence | Close variant. Always "Hamilton, NJ" (several Hamiltons exist). |
| dentist hamilton township nj | pending | pending | "…whether you need a dentist for Hamilton Township, NJ as a whole…" | Exact. |
| hamilton nj dentist | pending | pending | "If you're comparing Hamilton, NJ dentist options…" | Exact. |
| dentist hamilton square nj | pending | pending | "if you're looking for a dentist in Hamilton Square, NJ…" | Exact; Hamilton Square is a section. |
| family dentist hamilton nj | pending | pending | "As a family dentist for Hamilton, NJ…" → `/family-dentistry/` | Service mention. |

**Kept off this page on purpose:**
- Mercerville and Yardville: covered as sections with ZIPs, not targeted as separate pages.
- Conditional service+location pages: not linked.

## 2. Role of the page and local visibility

1. Most-populous-township page with a Saturday angle for working households, plus dentures, relines and same-day denture repairs.
2. Sections for Hamilton Square, Mercerville and Yardville avoid thin neighbourhood pages.

Shared signals on every location page: one H1, identical NAP text in the final CTA and footer, `tel:` links, the shared Dentist `@id` with `areaServed` for this area only, a link back to `/areas-we-serve/`, and a unique angle, route, local section and FAQ set (see `/home/claude/rs/location_uniqueness.md`).

## 3. AEO / GEO

**Answer-first sentences written to be quoted:**
- "Radiant Smiles @ Floral Vale is about 20 to 25 minutes from Hamilton, NJ, depending on traffic, via US-1 or I-295 and one Delaware River crossing."
- "We offer same-day denture repairs, so a cracked or broken denture can usually be fixed without a long wait."
- "Delta Dental is one of the many PPO plans we accept."

**Local proof used:** Most populous municipality in Mercer County (92,297 in 2020); Hamilton Square (08690), Mercerville (08619, Five Points), Yardville (08620, US-130), White Horse, Groveville; Veterans Park, Grounds For Sculpture.

**Drive time:** printed as the fact-sheet range with "depending on traffic"; flagged in the handoff for a Google Maps check.

**FAQ approach:** four questions specific to this page (Which parts of Hamilton do you serve?; Are you open on Saturdays?; Can you repair a broken denture the same day?; Do you accept Delta Dental?). Each answer opens with the direct answer and runs 40 to 60 words.

**NAP placement:** hero (address and phone in the opening paragraph or buttons), final CTA, footer.

## 4. Quality checks run

<!--QC-->
| Check | Result |
|---|---|
| Title / meta length | 42 / 144 characters (limits 60 / 120-155) |
| H1 | One: "Your Dentist near Hamilton, NJ" |
| Word count (02 body, incl. lists and FAQs) | 879 |
| Readability | Flesch reading ease about 56 (script estimate) |
| FAQ answer lengths | 48, 46, 48, 43 words (target 40-60) |
| Banned words, em dashes, on-hold town links, "Bucks County" | None found |
| Internal links | 12 unique; all in `url_map.md`; no conditional service+location links |
| Schema validity | Both JSON-LD blocks parse (json.loads). Types and properties are standard schema.org (WebPage/CollectionPage, BreadcrumbList, ItemList, Dentist, PostalAddress, Place/City/AdministrativeArea/State, FAQPage, Question, Answer). |
| Schema ↔ visible content | Generated from `02 Content.md` by script: WebPage name/description equal the title/meta exactly; 4 FAQ questions and answers verbatim; NAP identical. |
| Independent fact-check (7 Oct 2026) | 2 findings (0 errors, 2 warnings); all resolved: fixed, or verified against the current site, or moved to section 5. Details: X-rays now "when they're due"; "every Saturday" softened to "Saturdays" (FAQPage JSON-LD regenerated). |
<!--/QC-->

Local facts were verified with web sources on 7 Oct 2026 (listed below). Anything that could not be verified (toll amounts, exact distances, parking, commuting patterns) was left out.

## 5. Information still needed from the practice

1. **Same-day denture repairs** (rebase-repairs page): confirm still offered and whether lab work can delay some repairs.
2. **Reline intervals** (hard reline every two years; soft reline one to two years) are the site's figures: confirm.
3. **Drive time:** the range on this page is a fact-sheet estimate; the developer handoff has the Google Maps check row.
4. **Tuesday hours** [CONFIRM]: the site prints "8:00 AM - 5:00 AM". This page avoids printing Tuesday hours.
5. **Google Business Profile URL and place ID** for the map embed and schema.
6. **Saturday hours** (QA 7 Oct 2026): are 8 am to 2 pm kept every week, including holiday weekends? The copy says "Saturdays", not "every Saturday".

## Sources

- Practice facts: `fact_sheet.md` and the site extracts in `/home/claude/rs/site/` (radiant-smiles.com, crawled 7 Oct 2026).
- [Hamilton Township](https://en.wikipedia.org/wiki/Hamilton_Township,_Mercer_County,_New_Jersey)
- [Hamilton Square](https://en.wikipedia.org/wiki/Hamilton_Square,_New_Jersey)
- [Mercerville](https://en.wikipedia.org/wiki/Mercerville,_New_Jersey)
- [Yardville](https://en.wikipedia.org/wiki/Yardville,_New_Jersey)
- [Yardville ZIP 08620](https://zipcodes-us.com/zip/nj/yardville)
