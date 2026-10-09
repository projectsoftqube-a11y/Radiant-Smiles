# Dentist near Pennington, NJ: SEO, Local and AEO/GEO Notes

Final v1, 7 Oct 2026. Explains why the copy in `02 Content.md` is built the way it is. Internal only.

## 1. Keyword map

Volumes and KD are pending (Semrush balance ran out; see the workspace README). Town terms are matched with honest phrasing ("near", "patients from"): the practice has one office, in Lower Makefield Township with a Yardley, PA address, and no page claims an office in the town.

| Keyword | Vol / mo | KD | Where it's used | Notes |
|---|---|---|---|---|
| dentist pennington nj (primary) | pending | pending | H1/title "Dentist near Pennington, NJ"; H2 "A Pennington, NJ Dentist for Nervous Patients"; meta; first sentence | Close variant. |
| pennington nj dentist | pending | pending | Covered by the H2 variant | Not forced. |
| dentist near pennington nj | pending | pending | H1, title | Exact. |

**Kept off this page on purpose:**
- Hopewell Township terms: owned by the Hopewell page (linked).
- Conditional service+location pages: not linked.

## 2. Role of the page and local visibility

1. Small-borough page kept short by design (brief note), with a comfort-and-technology angle for nervous and first-time patients.
2. Word count sits below the brief's 900 because the brief also says "keep the page short and genuinely local"; no padding added.

Shared signals on every location page: one H1, identical NAP text in the final CTA and footer, `tel:` links, the shared Dentist `@id` with `areaServed` for this area only, a link back to `/areas-we-serve/`, and a unique angle, route, local section and FAQ set (see `/home/claude/rs/location_uniqueness.md`).

## 3. AEO / GEO

**Answer-first sentences written to be quoted:**
- "Our digital X-rays use about one-sixth the radiation of conventional film X-rays."
- "For crowns and clear aligners we use an iTero intraoral scanner, a small wand that records a digital 3D model of your teeth."
- "Pennington is a borough of just under one square mile, ZIP 08534."

**Local proof used:** Borough of 0.97 sq mi, 2,802 residents (2020), ZIP 08534, surrounded by Hopewell Township; NJ-31 to I-295 exit 72; Scotch Road at exit 73.

**Drive time:** printed as the fact-sheet range with "depending on traffic"; flagged in the handoff for a Google Maps check.

**FAQ approach:** four questions specific to this page (Which way do I drive from Pennington?; I'm nervous about the dentist. What helps?; Do you take impressions with putty?; How much radiation do your X-rays use?). Each answer opens with the direct answer and runs 40 to 60 words.

**NAP placement:** hero (address and phone in the opening paragraph or buttons), final CTA, footer.

## 4. Quality checks run

<!--QC-->
| Check | Result |
|---|---|
| Title / meta length | 44 / 144 characters (limits 60 / 120-155) |
| H1 | One: "Your Dentist near Pennington, NJ" |
| Word count (02 body, incl. lists and FAQs) | 743 |
| Readability | Flesch reading ease about 58 (script estimate) |
| FAQ answer lengths | 48, 53, 54, 48 words (target 40-60) |
| Banned words, em dashes, on-hold town links, "Bucks County" | None found |
| Internal links | 9 unique; all in `url_map.md`; no conditional service+location links |
| Schema validity | Both JSON-LD blocks parse (json.loads). Types and properties are standard schema.org (WebPage/CollectionPage, BreadcrumbList, ItemList, Dentist, PostalAddress, Place/City/AdministrativeArea/State, FAQPage, Question, Answer). |
| Schema ↔ visible content | Generated from `02 Content.md` by script: WebPage name/description equal the title/meta exactly; 4 FAQ questions and answers verbatim; NAP identical. |
<!--/QC-->

Local facts were verified with web sources on 7 Oct 2026 (listed below). Anything that could not be verified (toll amounts, exact distances, parking, commuting patterns) was left out.

## 5. Information still needed from the practice

1. **Technology** [CONFIRM all current and in-house]: iTero, digital X-rays, intraoral camera, electric hand-pieces, lasers.
2. **Sedation:** copy says "ask about the sedation options we offer". Do not name IV sedation until confirmed.
3. **Radiation figure** (about one-sixth of film; exposure about half) is the practice site's claim: keep, or attribute to the equipment maker once known.
4. **Drive time:** the range on this page is a fact-sheet estimate; the developer handoff has the Google Maps check row.
5. **Tuesday hours** [CONFIRM]: the site prints "8:00 AM - 5:00 AM". This page avoids printing Tuesday hours.
6. **Google Business Profile URL and place ID** for the map embed and schema.

## Sources

- Practice facts: `fact_sheet.md` and the site extracts in `/home/claude/rs/site/` (radiant-smiles.com, crawled 7 Oct 2026).
- [Pennington, New Jersey](https://en.wikipedia.org/wiki/Pennington,_New_Jersey)
