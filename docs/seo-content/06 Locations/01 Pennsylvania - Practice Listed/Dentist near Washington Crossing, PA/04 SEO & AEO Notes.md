# Dentist near Washington Crossing, PA: SEO, Local and AEO/GEO Notes

Final v1, 7 Oct 2026. Explains why the copy in `02 Content.md` is built the way it is. Internal only.

## 1. Keyword map

Volumes and KD are pending (Semrush balance ran out; see the workspace README). Town terms are matched with honest phrasing ("near", "patients from"): the practice has one office, in Lower Makefield Township with a Yardley, PA address, and no page claims an office in the town.

| Keyword | Vol / mo | KD | Where it's used | Notes |
|---|---|---|---|---|
| dentist washington crossing pa (primary) | pending | pending | H1/title "Dentist near Washington Crossing, PA"; H2 "A Washington Crossing, PA Dentist for the Whole Family"; meta; first sentence | Close variant with "near". |
| dentist upper makefield pa | pending | pending | H2 "A Dentist for Upper Makefield, PA Households" | Exact in H2; Upper Makefield is a section of this page. |
| dentist near washington crossing | pending | pending | H1 | Exact. |
| family dentist washington crossing pa | pending | pending | "As a family dentist for Washington Crossing, PA households" → `/family-dentistry/` | Service mention. |

**Kept off this page on purpose:**
- Washington Crossing, NJ / Titusville: owned by the Hopewell, NJ page (linked, not targeted).
- "Bucks County": not used. ZIP 18977 is printed once (it is not the homepage's ZIP).
- Conditional service+location pages: not linked.

## 2. Role of the page and local visibility

1. River Road page with a precision restorative angle (crowns, inlays/onlays fitted under microscopes, plus root canals) and the crowns review as proof.
2. Covers all Upper Makefield villages so no thin village pages are needed.
3. Hands NJ-side visitors to the Hopewell page.

Shared signals on every location page: one H1, identical NAP text in the final CTA and footer, `tel:` links, the shared Dentist `@id` with `areaServed` for this area only, a link back to `/areas-we-serve/`, and a unique angle, route, local section and FAQ set (see `/home/claude/rs/location_uniqueness.md`).

## 3. AEO / GEO

**Answer-first sentences written to be quoted:**
- "Radiant Smiles @ Floral Vale is about 15 to 20 minutes from Washington Crossing, PA, depending on traffic, via River Road (PA-32) and I-295."
- "At the first visit, the dentist removes decay, shapes the tooth and fits a temporary crown. At the second, the final crown is fitted, adjusted and cemented."
- "Inlays and onlays … take two appointments and typically last 10 to 30 years."

**Local proof used:** Village in Upper Makefield (ZIP 18977), formerly Taylorsville, departure point of Washington's 25 Dec 1776 crossing, home of the Washington Crossing Historic Park HQ; villages Buckmanville, Dolington, Jericho, Lizette, Lurgan, Woodhill; PA-32, PA-532, PA-232; toll-free Washington Crossing Bridge.

**Drive time:** printed as the fact-sheet range with "depending on traffic"; flagged in the handoff for a Google Maps check.

**FAQ approach:** four questions specific to this page (Do you serve all of Upper Makefield Township?; How many trips does a crown take?; I live on the New Jersey side of Washington Crossing. Which page is mine?; Why do you use a dental microscope?). Each answer opens with the direct answer and runs 40 to 60 words.

**NAP placement:** hero (address and phone in the opening paragraph or buttons), final CTA, footer.

## 4. Quality checks run

<!--QC-->
| Check | Result |
|---|---|
| Title / meta length | 53 / 152 characters (limits 60 / 120-155) |
| H1 | One: "Your Dentist near Washington Crossing, PA" |
| Word count (02 body, incl. lists and FAQs) | 888 |
| Readability | Flesch reading ease about 54 (script estimate) |
| FAQ answer lengths | 49, 49, 47, 48 words (target 40-60) |
| Banned words, em dashes, on-hold town links, "Bucks County" | None found |
| Internal links | 12 unique; all in `url_map.md`; no conditional service+location links |
| Schema validity | Both JSON-LD blocks parse (json.loads). Types and properties are standard schema.org (WebPage/CollectionPage, BreadcrumbList, ItemList, Dentist, PostalAddress, Place/City/AdministrativeArea/State, FAQPage, Question, Answer). |
| Schema ↔ visible content | Generated from `02 Content.md` by script: WebPage name/description equal the title/meta exactly; 4 FAQ questions and answers verbatim; NAP identical. |
| Independent fact-check (7 Oct 2026) | 3 findings (0 errors, 3 warnings); all resolved: fixed, or verified against the current site, or moved to section 5. Details: microscopes now tied to crowns, inlays and onlays (root canal therapy listed separately) in the hero and meta; "Every restoration" softened to "Restorations"; H2 "Worth a 15-Minute Drive" became "Worth the Drive Down River Road". |
<!--/QC-->

Local facts were verified with web sources on 7 Oct 2026 (listed below). Anything that could not be verified (toll amounts, exact distances, parking, commuting patterns) was left out.

## 5. Information still needed from the practice

1. **Technology** [CONFIRM all current and in-house]: microscopes, cone beam CT, iTero.
2. **Review use:** confirm permission to quote Candice Coverdale's review (quoted verbatim, including typos).
3. **Inlay/onlay lifespan** (10 to 30 years) is the site's own figure; keep or soften on approval.
4. **Drive time:** the range on this page is a fact-sheet estimate; the developer handoff has the Google Maps check row.
5. **Tuesday hours** [CONFIRM]: the site prints "8:00 AM - 5:00 AM". This page avoids printing Tuesday hours.
6. **Google Business Profile URL and place ID** for the map embed and schema.
7. **Microscope use** (QA 7 Oct 2026): the site ties microscopes to the fit and finish of restorations. Confirm whether the dentists also use the microscope for root canal treatment before the copy says so.

## Sources

- Practice facts: `fact_sheet.md` and the site extracts in `/home/claude/rs/site/` (radiant-smiles.com, crawled 7 Oct 2026).
- [Washington Crossing, Pennsylvania](https://en.wikipedia.org/wiki/Washington_Crossing,_Pennsylvania)
- [Upper Makefield Township](https://en.wikipedia.org/wiki/Upper_Makefield_Township,_Bucks_County,_Pennsylvania)
- [Washington Crossing Bridge](https://en.wikipedia.org/wiki/Washington_Crossing_Bridge)
