# Dentist near Ewing, NJ: SEO, Local and AEO/GEO Notes

Final v1, 7 Oct 2026. Explains why the copy in `02 Content.md` is built the way it is. Internal only.

## 1. Keyword map

Volumes and KD are pending (Semrush balance ran out; see the workspace README). Town terms are matched with honest phrasing ("near", "patients from"): the practice has one office, in Lower Makefield Township with a Yardley, PA address, and no page claims an office in the town.

| Keyword | Vol / mo | KD | Where it's used | Notes |
|---|---|---|---|---|
| dentist ewing nj (primary) | pending | pending | H1/title "Dentist near Ewing, NJ"; H2 "An Ewing, NJ Dentist for Healthy Gums"; meta; first sentence | Close variant. |
| ewing nj dentist | pending | pending | Covered by the H2 variant | Not forced. |
| dentist ewing township nj | pending | pending | Hero: "For Ewing Township and West Trenton patients…" | Partial; township named in hero and section H2. |
| dentist west trenton nj | pending | pending | "If you're searching for a dentist in West Trenton, NJ…" under H2 "West Trenton and the Rest of Ewing Township" | West Trenton is a section of this page. |
| family dentist ewing nj | pending | pending | "we're also a family dentist for Ewing, NJ" → `/family-dentistry/` | Service mention. |

**Kept off this page on purpose:**
- Trenton terms: owned by the Trenton page (linked for US-1/Calhoun routes).
- Conditional service+location pages: not linked.

## 2. Role of the page and local visibility

1. Scudder Falls commuter page with a gum-health angle (deep cleaning, Arestin, laser therapy, periodontal maintenance) and the Wed/Thu 6 pm close.
2. Covers West Trenton, Scudders Falls and Glendale as sections, so no thin neighbourhood pages.

Shared signals on every location page: one H1, identical NAP text in the final CTA and footer, `tel:` links, the shared Dentist `@id` with `areaServed` for this area only, a link back to `/areas-we-serve/`, and a unique angle, route, local section and FAQ set (see `/home/claude/rs/location_uniqueness.md`).

## 3. AEO / GEO

**Answer-first sentences written to be quoted:**
- "Radiant Smiles @ Floral Vale is about 15 to 20 minutes from Ewing, NJ, depending on traffic, straight across the Scudder Falls Bridge on I-295."
- "The Scudder Falls Bridge has all-electronic tolls (E-ZPass or Toll-by-Plate, no cash booths), charged only in the Pennsylvania-bound direction."
- "A deep cleaning treats gum disease below the gum line."

**Local proof used:** Ewing Township neighbourhoods West Trenton (ZIP 08628; SEPTA West Trenton station, Trenton-Mercer Airport; Bear Tavern Road to I-295), Scudders Falls, Glendale; The College of New Jersey; Scudder Falls Bridge rebuilt 2019/2021.

**Drive time:** printed as the fact-sheet range with "depending on traffic"; flagged in the handoff for a Google Maps check.

**FAQ approach:** four questions specific to this page (Is there a toll on the Scudder Falls Bridge?; Do you see patients from West Trenton?; Can I book an appointment after work?; What happens at a deep cleaning?). Each answer opens with the direct answer and runs 40 to 60 words.

**NAP placement:** hero (address and phone in the opening paragraph or buttons), final CTA, footer.

## 4. Quality checks run

<!--QC-->
| Check | Result |
|---|---|
| Title / meta length | 39 / 138 characters (limits 60 / 120-155) |
| H1 | One: "Your Dentist near Ewing, NJ" |
| Word count (02 body, incl. lists and FAQs) | 876 |
| Readability | Flesch reading ease about 62 (script estimate) |
| FAQ answer lengths | 49, 47, 47, 49 words (target 40-60) |
| Banned words, em dashes, on-hold town links, "Bucks County" | None found |
| Internal links | 12 unique; all in `url_map.md`; no conditional service+location links |
| Schema validity | Both JSON-LD blocks parse (json.loads). Types and properties are standard schema.org (WebPage/CollectionPage, BreadcrumbList, ItemList, Dentist, PostalAddress, Place/City/AdministrativeArea/State, FAQPage, Question, Answer). |
| Schema ↔ visible content | Generated from `02 Content.md` by script: WebPage name/description equal the title/meta exactly; 4 FAQ questions and answers verbatim; NAP identical. |
<!--/QC-->

Local facts were verified with web sources on 7 Oct 2026 (listed below). Anything that could not be verified (toll amounts, exact distances, parking, commuting patterns) was left out.

## 5. Information still needed from the practice

1. **Laser gum therapy and Arestin** [CONFIRM in-house and current].
2. **Periodontal maintenance interval:** not published, so no interval is stated.
3. **"Pockets over 3 mm"** comes from the deep-cleaning page; confirm the practice is happy to publish it.
4. **Drive time:** the range on this page is a fact-sheet estimate; the developer handoff has the Google Maps check row.
5. **Tuesday hours** [CONFIRM]: the site prints "8:00 AM - 5:00 AM". This page avoids printing Tuesday hours.
6. **Google Business Profile URL and place ID** for the map embed and schema.

## Sources

- Practice facts: `fact_sheet.md` and the site extracts in `/home/claude/rs/site/` (radiant-smiles.com, crawled 7 Oct 2026).
- [Ewing Township](https://en.wikipedia.org/wiki/Ewing_Township,_New_Jersey)
- [West Trenton](https://en.wikipedia.org/wiki/West_Trenton,_New_Jersey)
- [Scudder Falls Bridge](https://en.wikipedia.org/wiki/Scudder_Falls_Bridge)
- [West Trenton ZIP 08628](https://data.mongabay.com/igapo/states/nj/west_trenton,_new_jersey.html)
