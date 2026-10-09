# Dentist near Lower Makefield, PA: SEO, Local and AEO/GEO Notes

Final v1, 7 Oct 2026. Explains why the copy in `02 Content.md` is built the way it is. Internal only.

## 1. Keyword map

Volumes and KD are pending (Semrush balance ran out; see the workspace README). Town terms are matched with honest phrasing ("near", "patients from"): the practice has one office, in Lower Makefield Township with a Yardley, PA address, and no page claims an office in the town.

| Keyword | Vol / mo | KD | Where it's used | Notes |
|---|---|---|---|---|
| dentist lower makefield pa (primary) | pending | pending | H1/title "Dentist near Lower Makefield, PA"; meta; hero | The office is inside the township, so "near" is literal and honest. |
| lower makefield dentist | pending | pending | First sentence: "a Lower Makefield dentist on Floral Vale Boulevard" | Exact. |
| dentist lower makefield township | pending | pending | H2 "A Dentist in Lower Makefield Township for Every Age" | Exact in H2. |
| family dentist lower makefield | pending | pending | "As a family dentist in Lower Makefield…" → `/family-dentistry/` | Service mention. |

**Kept off this page on purpose:**
- "yardley" and ZIP 19067: homepage-owned. "Yardley" appears only in the NAP and once in the FAQ that explains the mailing address. Yardley Borough is not described.
- "Bucks County": not used.
- Conditional service+location pages: not linked.

## 2. Role of the page and local visibility

1. Home-township page with a preventive and children's-care angle, plus the membership plan for families without insurance.
2. Separates the township keyword from the homepage's "yardley" keyword so the two pages don't compete.

Shared signals on every location page: one H1, identical NAP text in the final CTA and footer, `tel:` links, the shared Dentist `@id` with `areaServed` for this area only, a link back to `/areas-we-serve/`, and a unique angle, route, local section and FAQ set (see `/home/claude/rs/location_uniqueness.md`).

## 3. AEO / GEO

**Answer-first sentences written to be quoted:**
- "Radiant Smiles @ Floral Vale is a Lower Makefield dentist on Floral Vale Boulevard, inside the township itself."
- "A child's first dental visit should happen just after their first birthday."
- "It costs $150 a year for the first member and $75 for each additional family member."

**Local proof used:** Township crossed by I-295, PA-332 and PA-32, with the Scudder Falls Bridge at its edge; Macclesfield Park, Shady Brook Farm, Garden of Reflection (Pennsylvania's official 9/11 memorial). Mailing addresses use Yardley.

**Drive time:** printed as the fact-sheet range with "depending on traffic"; flagged in the handoff for a Google Maps check.

**FAQ approach:** four questions specific to this page (Is your office in Lower Makefield Township?; When should my child have a first dental visit?; Is there a dental plan for a family without insurance?; Can my children be seen on a Saturday?). Each answer opens with the direct answer and runs 40 to 60 words.

**NAP placement:** hero (address and phone in the opening paragraph or buttons), final CTA, footer.

## 4. Quality checks run

<!--QC-->
| Check | Result |
|---|---|
| Title / meta length | 49 / 146 characters (limits 60 / 120-155) |
| H1 | One: "Your Dentist near Lower Makefield, PA" |
| Word count (02 body, incl. lists and FAQs) | 867 |
| Readability | Flesch reading ease about 56 (script estimate) |
| FAQ answer lengths | 47, 49, 47, 49 words (target 40-60) |
| Banned words, em dashes, on-hold town links, "Bucks County" | None found |
| Internal links | 14 unique; all in `url_map.md`; no conditional service+location links |
| Schema validity | Both JSON-LD blocks parse (json.loads). Types and properties are standard schema.org (WebPage/CollectionPage, BreadcrumbList, ItemList, Dentist, PostalAddress, Place/City/AdministrativeArea/State, FAQPage, Question, Answer). |
| Schema ↔ visible content | Generated from `02 Content.md` by script: WebPage name/description equal the title/meta exactly; 4 FAQ questions and answers verbatim; NAP identical. |
<!--/QC-->

Local facts were verified with web sources on 7 Oct 2026 (listed below). Anything that could not be verified (toll amounts, exact distances, parking, commuting patterns) was left out.

## 5. Information still needed from the practice

1. **Membership plan terms** ($150 / $75 additional member; additional cleanings $75; emergency exam $65; 15% off): confirm current. The site's "(adults $65, children $60)" note is not used.
2. **Children's first visit content** (exam, possible X-rays, cleaning, topical fluoride, home-care review) is from the child-dentistry page: confirm still accurate.
3. **Drive time:** the range on this page is a fact-sheet estimate; the developer handoff has the Google Maps check row.
4. **Tuesday hours** [CONFIRM]: the site prints "8:00 AM - 5:00 AM". This page avoids printing Tuesday hours.
5. **Google Business Profile URL and place ID** for the map embed and schema.

## Sources

- Practice facts: `fact_sheet.md` and the site extracts in `/home/claude/rs/site/` (radiant-smiles.com, crawled 7 Oct 2026).
- [Lower Makefield Township](https://en.wikipedia.org/wiki/Lower_Makefield_Township,_Bucks_County,_Pennsylvania)
