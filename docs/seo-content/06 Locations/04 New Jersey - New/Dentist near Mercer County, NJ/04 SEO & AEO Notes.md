# Dentist near Mercer County, NJ: SEO, Local and AEO/GEO Notes

Final v1, 7 Oct 2026. Explains why the copy in `02 Content.md` is built the way it is. Internal only.

## 1. Keyword map

Volumes and KD are pending (Semrush balance ran out; see the workspace README). Town terms are matched with honest phrasing ("near", "patients from"): the practice has one office, in Lower Makefield Township with a Yardley, PA address, and no page claims an office in the town.

| Keyword | Vol / mo | KD | Where it's used | Notes |
|---|---|---|---|---|
| dentist mercer county nj (primary) | pending | pending | H1 "A Dentist for Mercer County, NJ Families"; title; H2 "A Mercer County, NJ Dentist for the Whole Family"; meta; first sentence | Close variants in H1 and H2. |
| mercer county nj dentist | pending | pending | Covered by the H2 variant | Not forced. |
| family dentist mercer county nj | pending | pending | "As a family dentist for Mercer County, NJ households" → `/family-dentistry/` | Service mention. |
| emergency dentist mercer county nj | pending | pending | "If you need an emergency dentist from Mercer County, NJ…" → `/emergency-dentistry/` | Service mention. |
| dental implants mercer county nj | pending | pending | Link only → `/dental-implants-mercer-county-nj/` (conditional) | Owned by the service+location page. |

**Kept off this page on purpose:**
- **All NJ town names and ZIPs:** used only as link anchors in the "Mercer County Town Pages" list and the two conditional link anchors. A script check confirmed no town term appears elsewhere in the body (the NAP aside).
- The Washington Crossing Bridge is not named (its name is a town term); the table lists the three crossings that need no town name.
- "Bucks County": not used.

## 2. Role of the page and local visibility

1. Regional page: sends county-level searches down to the six NJ town pages and to the conditional implant, emergency and Invisalign pages.
2. The brief says "links the 5 NJ town pages"; six exist (Trenton, Ewing, Hopewell, Hamilton, Lawrenceville, Pennington), so all six are linked.
3. Safety line included because emergencies are featured.

Shared signals on every location page: one H1, identical NAP text in the final CTA and footer, `tel:` links, the shared Dentist `@id` with `areaServed` for this area only, a link back to `/areas-we-serve/`, and a unique angle, route, local section and FAQ set (see `/home/claude/rs/location_uniqueness.md`).

## 3. AEO / GEO

**Answer-first sentences written to be quoted:**
- "Radiant Smiles @ Floral Vale is a family, cosmetic and restorative dentist just across the Delaware River from Mercer County, NJ."
- "Because the toll bridges charge only in the Pennsylvania-bound direction, every trip home to New Jersey is toll-free."
- "Mercer County has 12 municipalities and about 387,000 residents (2020 census)."

**Local proof used:** Mercer County borders Pennsylvania along the Delaware; 12 municipalities; 387,340 residents (2020); I-295 and US-1; Scudder Falls, US-1 toll and Calhoun Street crossings.

**Drive time:** printed as the fact-sheet range with "depending on traffic"; flagged in the handoff for a Google Maps check.

**FAQ approach:** four questions specific to this page (How far is your office from Mercer County?; Does every part of Mercer County have its own page?; Do you see dental emergencies from Mercer County?; Do you offer dental implants for Mercer County patients?). Each answer opens with the direct answer and runs 40 to 60 words.

**NAP placement:** hero (address and phone in the opening paragraph or buttons), final CTA, footer.

## 4. Quality checks run

<!--QC-->
| Check | Result |
|---|---|
| Title / meta length | 47 / 149 characters (limits 60 / 120-155) |
| H1 | One: "A Dentist for Mercer County, NJ Families" |
| Word count (02 body, incl. lists and FAQs) | 924 |
| Readability | Flesch reading ease about 52 (script estimate) |
| FAQ answer lengths | 60, 50, 57, 50 words (target 40-60) |
| Banned words, em dashes, on-hold town links, "Bucks County" | None found |
| Internal links | 22 unique; all in `url_map.md`; conditional links present (allowed on this page, see handoff) |
| Schema validity | Both JSON-LD blocks parse (json.loads). Types and properties are standard schema.org (WebPage/CollectionPage, BreadcrumbList, ItemList, Dentist, PostalAddress, Place/City/AdministrativeArea/State, FAQPage, Question, Answer). |
| Schema ↔ visible content | Generated from `02 Content.md` by script: WebPage name/description equal the title/meta exactly; 4 FAQ questions and answers verbatim; NAP identical. |
| Independent fact-check (7 Oct 2026) | 5 findings (1 error, 4 warnings); all resolved: fixed, or verified against the current site, or moved to section 5. Details: the conditional-link ERROR is overridden by the project decision that this page may link the three conditional service+location pages (links and handoff note kept; `url_map.md` owner to add this page to the rule); microscopes tied to crowns only, with root canal therapy listed separately; bridge FAQ now "most often" rather than an exhaustive list; "40 carriers" became "40 plans"; drive range now "from most … towns" in the meta, hero, Getting Here and FAQ 1 (FAQPage JSON-LD regenerated). |
<!--/QC-->

Local facts were verified with web sources on 7 Oct 2026 (listed below). Anything that could not be verified (toll amounts, exact distances, parking, commuting patterns) was left out.

## 5. Information still needed from the practice

1. **NJ Medicaid / NJ FamilyCare:** copy says they aren't among the accepted plans. Confirm.
2. **Conditional pages:** confirm which will be built before launch.
3. **Invisalign** [CONFIRM certified provider].
4. **Drive time:** the range on this page is a fact-sheet estimate; the developer handoff has the Google Maps check row.
5. **Tuesday hours** [CONFIRM]: the site prints "8:00 AM - 5:00 AM". This page avoids printing Tuesday hours.
6. **Google Business Profile URL and place ID** for the map embed and schema.
7. **URL map rule** (QA 7 Oct 2026): `url_map.md` says conditional pages may be linked only from the hub and the Trenton page, but the project decision allows this page too. The URL map owner should add `/dentist-mercer-county-nj/` to that rule.
8. **Microscope use** (QA 7 Oct 2026): confirm whether the dentists use the microscope for root canal treatment; the copy currently ties it to crowns only.
9. **Hopewell Borough drive time** (QA 7 Oct 2026): not in the fact sheet, so the 15 to 25 minute range is worded "from most" towns.

## Sources

- Practice facts: `fact_sheet.md` and the site extracts in `/home/claude/rs/site/` (radiant-smiles.com, crawled 7 Oct 2026).
- [Mercer County, New Jersey](https://en.wikipedia.org/wiki/Mercer_County,_New_Jersey)
- [Scudder Falls Bridge](https://en.wikipedia.org/wiki/Scudder_Falls_Bridge)
- [Calhoun Street Bridge](https://en.wikipedia.org/wiki/Calhoun_Street_Bridge)
