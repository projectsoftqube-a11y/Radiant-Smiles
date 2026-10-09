# Dentist near Trenton, NJ: SEO, Local and AEO/GEO Notes

Final v1, 7 Oct 2026. Explains why the copy in `02 Content.md` is built the way it is. Internal only.

## 1. Keyword map

Volumes and KD are pending (Semrush balance ran out; see the workspace README). Town terms are matched with honest phrasing ("near", "patients from"): the practice has one office, in Lower Makefield Township with a Yardley, PA address, and no page claims an office in the town.

| Keyword | Vol / mo | KD | Where it's used | Notes |
|---|---|---|---|---|
| dentist trenton nj (primary) | pending | pending | H1/title "Dentist near Trenton, NJ"; H2 "A Trenton, NJ Dentist That's Clear About Cost"; meta; first sentence | Close variant; the office is in PA and the copy says so. |
| dentist near trenton nj | pending | pending | H1, title | Exact. The hub brief also listed this; the hub now passes it here via anchor text (see hub notes). |
| dentist in trenton nj | pending | pending | Hero: "Looking for a dentist in Trenton, NJ who's open Saturdays?" | Used honestly: the hero's first sentence already says the office is in Lower Makefield Township, PA. |
| trenton nj dentist | pending | pending | Covered by the H2 variant | Not forced. |
| family dentist trenton nj | pending | pending | "As a family dentist for Trenton, NJ households" → `/family-dentistry/` | Service mention. |
| emergency dentist trenton nj | pending | pending | Link anchor only → `/emergency-dentist-trenton-nj/` (conditional) | Owned by the service+location page; not targeted here. |
| dental implants trenton nj | pending | pending | Link only → `/dental-implants-mercer-county-nj/` (conditional) | Owned by the service+location page. |

**Kept off this page on purpose:**
- Service+town terms (emergency, implants, Invisalign + Trenton): linked only.
- "Bucks County" and the on-hold towns: not used.
- No Trenton ZIP codes printed (the city has several; none adds value).

## 2. Role of the page and local visibility

1. Largest-population NJ page with an access-and-cost angle: bridges, published prices for self-pay patients, NJ PPO plans, and a plain answer on NJ Medicaid (FAQ only, per the 7 Oct conversion review).
2. One of three pages allowed to link the conditional service+location pages (with the hub and Mercer County).
3. Safety line included because emergencies are featured.

Shared signals on every location page: one H1, identical NAP text in the final CTA and footer, `tel:` links, the shared Dentist `@id` with `areaServed` for this area only, a link back to `/areas-we-serve/`, and a unique angle, route, local section and FAQ set (see `/home/claude/rs/location_uniqueness.md`).

## 3. AEO / GEO

**Answer-first sentences written to be quoted:**
- "Radiant Smiles @ Floral Vale is about 15 minutes from Trenton, NJ, depending on traffic, just across the Delaware in Lower Makefield Township, PA."
- "The Trenton-Morrisville Toll Bridge charges in the Pennsylvania-bound direction, so the drive home is free."
- "NJ Medicaid and NJ FamilyCare are not on our list of accepted plans."

**Local proof used:** directly across from Morrisville; three bridges: US-1 toll bridge (PA-bound toll only), Calhoun Street (toll-free; weight/height limits and the "capital" sentence cut in the conversion review), Lower Trenton ("Trenton Makes", toll-free).

**Drive time:** printed as the fact-sheet range with "depending on traffic"; flagged in the handoff for a Google Maps check.

**FAQ approach:** four questions specific to this page (Do I pay a toll to get to your office from Trenton?; Do you accept NJ Medicaid or NJ FamilyCare?; What does a first visit cost without insurance?; Which languages do your dentists speak?). Each answer opens with the direct answer and runs 40 to 60 words.

**NAP placement:** hero (address and phone in the opening paragraph or buttons), final CTA, footer.

**Conversion review (7 Oct 2026) applied:** hero sentence 2 now leads with Saturday hours, PPO plans and the $89 price; H2 "Care for Trenton Patients" became "Family, Emergency and Implant Care for Trenton, NJ"; bridge weight/height limits and the "capital" sentence cut; Medicaid line kept in the FAQ only; Avni D.'s review (fact sheet, 13 May 2026, excerpt) placed after the cost table as plain text, no Review markup; Request an Appointment button added after the cost section; final CTA gained a call button and "including Saturday mornings".

## 4. Quality checks run

<!--QC-->
| Check | Result |
|---|---|
| Title / meta length | 41 / 146 characters (limits 60 / 120-155) |
| H1 | One: "Your Dentist near Trenton, NJ" |
| Word count (02 body, incl. lists and FAQs) | 858 |
| Readability | Flesch reading ease about 55 (script estimate) |
| FAQ answer lengths | 52, 54, 48, 44 words (target 40-60) |
| Banned words, em dashes, on-hold town links, "Bucks County" | None found |
| Internal links | 18 unique; all in `url_map.md`; conditional links present (allowed on this page, see handoff) |
| Schema validity | Both JSON-LD blocks parse (json.loads). Types and properties are standard schema.org (WebPage/CollectionPage, BreadcrumbList, ItemList, Dentist, PostalAddress, Place/City/AdministrativeArea/State, FAQPage, Question, Answer). |
| Schema ↔ visible content | Generated from `02 Content.md` by script: WebPage name/description equal the title/meta exactly; 4 FAQ questions and answers verbatim; NAP identical. |
| Independent fact-check (7 Oct 2026) | 2 findings (0 errors, 2 warnings); all resolved: fixed, or verified against the current site, or moved to section 5. Details: microscopes tied to crowns and fillings, with root canal therapy listed separately; the languages FAQ now names Dr. Gadria's languages only (FAQPage JSON-LD regenerated); Dr. Bhalala's languages and microscope use moved to section 5. Conversion review rewrites also applied (see section 3). |
<!--/QC-->

Local facts were verified with web sources on 7 Oct 2026 (listed below). Anything that could not be verified (toll amounts, exact distances, parking, commuting patterns) was left out.

## 5. Information still needed from the practice

1. **NJ Medicaid / NJ FamilyCare:** the copy says they are not on the accepted list. Confirm the practice does not accept them (fact sheet: not mentioned; do not claim).
2. **Insurance wording:** "accept many PPO plans, including Horizon Blue Cross, Delta Dental, Aetna, Cigna PPO, MetLife". Do not say "in-network" until confirmed.
3. **Invisalign** [CONFIRM certified provider] before `/invisalign-trenton-nj/` goes live.
4. **Languages:** Dr. Gadria's English, Punjabi and some Hindi are from the bio page; confirm. Which languages does Dr. Urvishkumar Bhalala speak? The fact sheet is silent, so the FAQ now names Dr. Gadria's languages only; add Dr. Bhalala's once confirmed (and update the FAQPage JSON-LD).
8. **Microscope use:** the copy ties microscopes to crowns and fillings only and lists root canal therapy separately. Confirm whether the dentists also use the microscope for root canal treatment.
5. **Drive time:** the range on this page is a fact-sheet estimate; the developer handoff has the Google Maps check row.
6. **Tuesday hours** [CONFIRM]: the site prints "8:00 AM - 5:00 AM". This page avoids printing Tuesday hours.
7. **Google Business Profile URL and place ID** for the map embed and schema.

## Sources

- Practice facts: `fact_sheet.md` and the site extracts in `/home/claude/rs/site/` (radiant-smiles.com, crawled 7 Oct 2026).
- [Trenton, New Jersey](https://en.wikipedia.org/wiki/Trenton,_New_Jersey)
- [Trenton-Morrisville Toll Bridge](https://en.wikipedia.org/wiki/Trenton%E2%80%93Morrisville_Toll_Bridge)
- [Calhoun Street Bridge](https://en.wikipedia.org/wiki/Calhoun_Street_Bridge)
