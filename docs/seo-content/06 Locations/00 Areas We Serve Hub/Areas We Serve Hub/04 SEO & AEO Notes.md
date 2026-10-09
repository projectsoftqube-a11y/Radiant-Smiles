# Areas We Serve: SEO, Local and AEO/GEO Notes

Final v1, 7 Oct 2026. Explains why the copy in `02 Content.md` is built the way it is. Internal only.

## 1. Keyword map

| Keyword | Vol / mo | KD | Where it's used | Notes |
|---|---|---|---|---|
| dentist pa nj border | pending | pending | H2 "Getting Here Across the River", first sentence: "A dentist on the PA and NJ border…" | The hub's real topic: one office serving both states. Used once as a natural phrase. |
| dentist near trenton nj (brief primary) | pending | pending | Once, as the anchor text of the link to `/dentist-trenton-nj/` | **Reassigned.** The brief lists this as the hub's primary, but the Trenton page's H1 and title ("Dentist near Trenton, NJ") are the exact match, and the keyword map also lists it as a Trenton secondary. Two pages targeting it would split signals. The hub passes it to the Trenton page through anchor text instead. Recommend updating the Keyword Map so the hub's primary is "areas we serve" / "dentist pa nj border". |
| areas we serve (brand navigation) | n/a | n/a | H1, title, FAQ H2 | Navigational; matches the menu label. |
| town names (Morrisville, Lower Makefield, Washington Crossing, New Hope, Trenton, Ewing, Hopewell, Hamilton, Lawrenceville, Pennington, Mercer County) | pending | pending | One card each, with the town page as the link | Each town term belongs to its own page; the hub only links. |

**Kept off this page on purpose:**
- "yardley" and ZIP 19067: owned by the homepage. "Yardley" appears only inside the NAP, and the title from the brief ("Yardley, PA & Trenton, NJ Dentist") was changed to "PA & NJ Dentist" for this reason.
- "Bucks County" terms: owned by another client's hub. Not used anywhere on the page or in the schema (the PA places sit in `State: Pennsylvania`).
- Newtown, Langhorne, Levittown, Fairless Hills: on hold. Not named, not linked.
- Service+town terms (emergency dentist trenton nj, invisalign trenton nj, dental implants mercer county nj): owned by the conditional service+location pages; the hub links to them only.

## 2. Role of the page

1. **Hub for all 11 location pages.** Every town page is one click from here, and each town page links back. This gives the location pages a crawl path and internal authority without the homepage having to carry 11 town links.
2. **Two-state entity signal.** The page states plainly that one Pennsylvania office serves New Jersey patients, names the bridges, and carries `areaServed` for 12 places in the Dentist node (the 10 town pages' areas, Upper Makefield Township and Mercer County).
3. **Conditional service+location links.** This is one of three pages (with Trenton and Mercer County) allowed to link `/emergency-dentist-trenton-nj/`, `/invisalign-trenton-nj/` and `/dental-implants-mercer-county-nj/`. They go live only if those pages are built (see handoff).
4. **Conversion.** Call and appointment buttons at the top and bottom, with a "your town isn't listed" FAQ so no visitor is turned away.

## 3. AEO / GEO

**Answer-first sentences written to be quoted:**
- "Radiant Smiles @ Floral Vale is a family, cosmetic and restorative dental practice at 117 Floral Vale Boulevard in Lower Makefield Township, a short drive from the river crossings into New Jersey."
- "The Scudder Falls (I-295) and Trenton-Morrisville (US-1) toll bridges charge in the Pennsylvania-bound direction, so you pay on the way to us and not on the way home."
- "We accept many PPO plans, including Horizon Blue Cross and Delta Dental, whether you live in Pennsylvania or New Jersey."

**Entities covered:** the practice, both dentists (with school), five named DRJTBC bridges, 11 towns plus Mercer County.

**Checkable facts:** bridge toll direction, weight and height limits (Wikipedia / DRJTBC), published prices ($89, $150, $500 off $3,500, $1,000 off $5,800), drive ranges marked "depending on traffic".

**NAP placement:** hero (address, phone), final CTA (full NAP and hours), footer. Tuesday hours are not printed (see section 5); the hours line says Monday to Saturday with the confirmed late and Saturday hours.

**FAQ approach:** four questions that only a cross-river hub can answer (which bridge, tolls, unlisted towns, NJ insurance at a PA office). Each starts with the direct answer.

## 4. Quality checks run

<!--QC-->
| Check | Result |
|---|---|
| Title / meta length | 49 / 144 characters (limits 60 / 120-155) |
| H1 | One: "Areas We Serve on Both Sides of the Delaware" |
| Word count (02 body, incl. lists and FAQs) | 1001 |
| Readability | Flesch reading ease about 57 (script estimate) |
| FAQ answer lengths | 56, 43, 45, 47 words (target 40-60) |
| Banned words, em dashes, on-hold town links, "Bucks County" | None found |
| Internal links | 22 unique; all in `url_map.md`; conditional links present (allowed on this page, see handoff) |
| Schema validity | Both JSON-LD blocks parse (json.loads). Types and properties are standard schema.org (WebPage/CollectionPage, BreadcrumbList, ItemList, Dentist, PostalAddress, Place/City/AdministrativeArea/State, FAQPage, Question, Answer). |
| Schema ↔ visible content | Generated from `02 Content.md` by script: WebPage name/description equal the title/meta exactly; 4 FAQ questions and answers verbatim; NAP identical. |
| Independent fact-check (7 Oct 2026) | 3 findings (0 errors, 3 warnings); all resolved: fixed, or verified against the current site, or moved to section 5. Details: Scudder Falls FAQ and bullet now name Ewing, Pennington and Lawrenceville, with the Washington Crossing Bridge for Titusville and Washington Crossing, NJ (FAQPage JSON-LD regenerated); "five crossings" became "five road bridges"; the NJ drive range now reads "from most towns … depending on traffic". |
<!--/QC-->

## 5. Information still needed from the practice

1. **Tuesday hours** [CONFIRM]: the site prints "8:00 AM - 5:00 AM". Not shown on this page until confirmed.
2. **Drive times:** every range on this page is a fact-sheet estimate. Developer handoff has the Google Maps check table.
3. **Conditional pages:** confirm which of `/emergency-dentist-trenton-nj/`, `/invisalign-trenton-nj/` and `/dental-implants-mercer-county-nj/` will be built. Invisalign also needs [CONFIRM certified provider].
4. **Offer terms** [CONFIRM]: no expiry dates or fine print are published for the $89, implant and Invisalign offers.
5. **New Hope:** confirm the practice wants patients from the 25 to 30 minute edge of the catchment.
6. **Google Business Profile URL and place ID** for the map embed and schema `hasMap` / `sameAs`.
7. **Hopewell Borough drive time** (QA 7 Oct 2026): not in the fact sheet. The New Jersey intro now says "from most towns"; add a number to the fact sheet after a Google Maps check if wanted.

## Sources

- Practice facts: `fact_sheet.md` (radiant-smiles.com, crawled 7 Oct 2026).
- Bridges: [Scudder Falls Bridge](https://en.wikipedia.org/wiki/Scudder_Falls_Bridge), [Trenton-Morrisville Toll Bridge](https://en.wikipedia.org/wiki/Trenton%E2%80%93Morrisville_Toll_Bridge), [Calhoun Street Bridge](https://en.wikipedia.org/wiki/Calhoun_Street_Bridge), [Washington Crossing Bridge](https://en.wikipedia.org/wiki/Washington_Crossing_Bridge), [Trenton, NJ (Lower Trenton Bridge)](https://en.wikipedia.org/wiki/Trenton,_New_Jersey), [DRJTBC bridge list](https://www.drjtbc.org/bridges/).
- Uniqueness table: `/home/claude/rs/location_uniqueness.md`.
