# Dentist near Hopewell, NJ: SEO, Local and AEO/GEO Notes

Final v1, 7 Oct 2026. Explains why the copy in `02 Content.md` is built the way it is. Internal only.

## 1. Keyword map

Volumes and KD are pending (Semrush balance ran out; see the workspace README). Town terms are matched with honest phrasing ("near", "patients from"): the practice has one office, in Lower Makefield Township with a Yardley, PA address, and no page claims an office in the town.

| Keyword | Vol / mo | KD | Where it's used | Notes |
|---|---|---|---|---|
| dentist hopewell nj (primary) | pending | pending | H1/title "Dentist near Hopewell, NJ"; H2 "A Hopewell, NJ Dentist for Replacing Missing Teeth"; meta; first sentence | Close variant. |
| dentist titusville nj | pending | pending | "If you're looking for a dentist in Titusville, NJ…" under H2 "Titusville and Washington Crossing, NJ" | Exact. |
| dentist washington crossing nj | pending | pending | Same sentence: "…or a dentist in Washington Crossing, NJ" | Exact. |
| hopewell nj dentist | pending | pending | Covered by the H2 variant | Not forced. |

**Kept off this page on purpose:**
- Washington Crossing, PA: owned by its own page (not linked here to keep NJ visitors on NJ content; the PA page links here).
- Pennington: owned by its page (linked).
- Conditional `/dental-implants-mercer-county-nj/`: not linked from this page, by rule.

## 2. Role of the page and local visibility

1. Upriver page with a tooth-replacement angle (implants, implant-retained dentures, dentures) and the free consultation/second opinion.
2. Covers Titusville and Washington Crossing, NJ as a section (the current site lists "Washington Crossing NJ").

Shared signals on every location page: one H1, identical NAP text in the final CTA and footer, `tel:` links, the shared Dentist `@id` with `areaServed` for this area only, a link back to `/areas-we-serve/`, and a unique angle, route, local section and FAQ set (see `/home/claude/rs/location_uniqueness.md`).

## 3. AEO / GEO

**Answer-first sentences written to be quoted:**
- "The Washington Crossing Bridge between Washington Crossing, NJ and Washington Crossing, PA is toll-free in both directions."
- "A single implant, abutment and crown is regularly $3,500, and our current offer takes $500 off."
- "An implant is a small titanium post placed in the jawbone, where the bone bonds to it and holds a crown."

**Local proof used:** Hopewell Township is Mercer County's largest municipality by area and surrounds Hopewell Borough (ZIP 08525) and Pennington; Titusville (ZIP 08560) on NJ-29 beside Washington Crossing State Park (acreage removed in QA: sources conflict, 800 vs 3,575 acres); Washington Crossing Bridge toll-free, 3-ton limit.

**Drive time:** printed as the fact-sheet range with "depending on traffic"; flagged in the handoff for a Google Maps check.

**FAQ approach:** four questions specific to this page (Is there a toll on the Washington Crossing Bridge?; How long is the drive from Hopewell Borough?; What does a dental implant cost here?; Can I get a second opinion on an implant plan?). Each answer opens with the direct answer and runs 40 to 60 words.

**NAP placement:** hero (address and phone in the opening paragraph or buttons), final CTA, footer.

## 4. Quality checks run

<!--QC-->
| Check | Result |
|---|---|
| Title / meta length | 42 / 143 characters (limits 60 / 120-155) |
| H1 | One: "Your Dentist near Hopewell, NJ" |
| Word count (02 body, incl. lists and FAQs) | 897 |
| Readability | Flesch reading ease about 56 (script estimate) |
| FAQ answer lengths | 44, 48, 47, 42 words (target 40-60) |
| Banned words, em dashes, on-hold town links, "Bucks County" | None found |
| Internal links | 12 unique; all in `url_map.md`; no conditional service+location links |
| Schema validity | Both JSON-LD blocks parse (json.loads). Types and properties are standard schema.org (WebPage/CollectionPage, BreadcrumbList, ItemList, Dentist, PostalAddress, Place/City/AdministrativeArea/State, FAQPage, Question, Answer). |
| Schema ↔ visible content | Generated from `02 Content.md` by script: WebPage name/description equal the title/meta exactly; 4 FAQ questions and answers verbatim; NAP identical. |
| Independent fact-check (7 Oct 2026) | 2 findings (2 errors, 0 warnings); all resolved: fixed, or verified against the current site, or moved to section 5. Details: Washington Crossing State Park acreage removed (sources conflict: 800 vs 3,575 acres); broken Markdown link repaired as [Dental implants](/restorative-dentistry/dental-implants/) and the stray URL deleted from the healing paragraph. |
<!--/QC-->

Local facts were verified with web sources on 7 Oct 2026 (listed below). Anything that could not be verified (toll amounts, exact distances, parking, commuting patterns) was left out.

## 5. Information still needed from the practice

1. **Implant surgery in-house or referred?** [CONFIRM] The copy describes the process and offer as on the current site; if implants are placed elsewhere, add a referral line.
2. **Hopewell Borough drive time:** not in the fact sheet. The page says it takes longer than from Titusville and prints no number; add one after a Google Maps check if wanted.
3. **Implant offer terms:** no expiry or fine print published.
4. **Drive time:** the range on this page is a fact-sheet estimate; the developer handoff has the Google Maps check row.
5. **Tuesday hours** [CONFIRM]: the site prints "8:00 AM - 5:00 AM". This page avoids printing Tuesday hours.
6. **Google Business Profile URL and place ID** for the map embed and schema.

## Sources

- Practice facts: `fact_sheet.md` and the site extracts in `/home/claude/rs/site/` (radiant-smiles.com, crawled 7 Oct 2026).
- [Hopewell Township](https://en.wikipedia.org/wiki/Hopewell_Township,_Mercer_County,_New_Jersey)
- [Hopewell, New Jersey](https://en.wikipedia.org/wiki/Hopewell,_New_Jersey)
- [Titusville, New Jersey](https://en.wikipedia.org/wiki/Titusville,_New_Jersey)
- [Washington Crossing Bridge](https://en.wikipedia.org/wiki/Washington_Crossing_Bridge)
