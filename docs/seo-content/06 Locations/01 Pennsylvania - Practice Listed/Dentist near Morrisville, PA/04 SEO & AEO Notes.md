# Dentist near Morrisville, PA: SEO, Local and AEO/GEO Notes

Final v1, 7 Oct 2026. Explains why the copy in `02 Content.md` is built the way it is. Internal only.

## 1. Keyword map

Volumes and KD are pending (Semrush balance ran out; see the workspace README). Town terms are matched with honest phrasing ("near", "patients from"): the practice has one office, in Lower Makefield Township with a Yardley, PA address, and no page claims an office in the town.

| Keyword | Vol / mo | KD | Where it's used | Notes |
|---|---|---|---|---|
| dentist morrisville pa (primary) | pending | pending | H1 and title as "Dentist near Morrisville, PA"; H2 "A Morrisville, PA Dentist for Same-Day Problems"; first sentence; meta | Close variant with "near": the practice is not in Morrisville and the copy never says it is. |
| morrisville pa dentist | pending | pending | Meta ("Morrisville, PA dentist 5-10 minutes away") and the H2 above | Word-order variant. |
| dentist near morrisville pa | pending | pending | H1, title | Exact. |
| family dentist morrisville pa | pending | pending | "As a family dentist for Morrisville, PA…" linking to `/family-dentistry/` | Service mention. |
| emergency dentist morrisville pa | pending | pending | Anchor "emergency dentist care for Morrisville patients" → `/emergency-dentistry/` | Service mention; no Morrisville emergency page exists. |

**Kept off this page on purpose:**
- ZIP 19067 and "yardley": homepage-owned. Morrisville shares the ZIP, so it is not printed outside the NAP.
- "Bucks County": another client's term; not used.
- Falls Township and the on-hold towns: not named or linked.
- Conditional service+location pages: not linked from this page.

## 2. Role of the page and local visibility

1. Closest-town page with an emergency and quick-repair angle: the 5 to 10 minute drive is the selling point for same-day problems.
2. Links up to the hub and across to the Trenton page (for patients who work across the river).
3. Carries `areaServed: Morrisville, PA` on the shared Dentist `@id`; the address stays the real one.

Shared signals on every location page: one H1, identical NAP text in the final CTA and footer, `tel:` links, the shared Dentist `@id` with `areaServed` for this area only, a link back to `/areas-we-serve/`, and a unique angle, route, local section and FAQ set (see `/home/claude/rs/location_uniqueness.md`).

## 3. AEO / GEO

**Answer-first sentences written to be quoted:**
- "Radiant Smiles @ Floral Vale is about 5 to 10 minutes from Morrisville, PA, depending on traffic, at 117 Floral Vale Boulevard in neighbouring Lower Makefield Township."
- "We hold same-day emergency appointments every business day and see patients on Saturday mornings from 8 am to 2 pm."
- "A lost filling is usually replaced with a tooth-colored composite filling."

**Local proof used:** Borough on the Delaware opposite Trenton; Lower Makefield as its northern neighbour; Summerseat (National Historic Landmark); Delaware Canal State Park. Route US-1 / Pennsylvania Ave, no bridge or toll.

**Drive time:** printed as the fact-sheet range with "depending on traffic"; flagged in the handoff for a Google Maps check.

**FAQ approach:** four questions specific to this page (Is your office in Morrisville?; Can I be seen the same day for a broken tooth?; What should I do if a tooth is knocked out?; Can you replace a lost filling quickly?). Each answer opens with the direct answer and runs 40 to 60 words.

**NAP placement:** hero (address and phone in the opening paragraph or buttons), final CTA, footer.

## 4. Quality checks run

<!--QC-->
| Check | Result |
|---|---|
| Title / meta length | 45 / 140 characters (limits 60 / 120-155) |
| H1 | One: "Your Dentist near Morrisville, PA" |
| Word count (02 body, incl. lists and FAQs) | 918 |
| Readability | Flesch reading ease about 57 (script estimate) |
| FAQ answer lengths | 53, 50, 50, 50 words (target 40-60) |
| Banned words, em dashes, on-hold town links, "Bucks County" | None found |
| Internal links | 14 unique; all in `url_map.md`; no conditional service+location links |
| Schema validity | Both JSON-LD blocks parse (json.loads). Types and properties are standard schema.org (WebPage/CollectionPage, BreadcrumbList, ItemList, Dentist, PostalAddress, Place/City/AdministrativeArea/State, FAQPage, Question, Answer). |
| Schema ↔ visible content | Generated from `02 Content.md` by script: WebPage name/description equal the title/meta exactly; 4 FAQ questions and answers verbatim; NAP identical. |
| Independent fact-check (7 Oct 2026) | 4 findings (0 errors, 4 warnings); all resolved: fixed, or verified against the current site, or moved to section 5. Details: towpath no longer described as "along the river"; X-rays now "when they're due"; free consultation and second opinion tied to the implant only; drive time hedged with "about" in the final CTA heading and body. |
<!--/QC-->

Local facts were verified with web sources on 7 Oct 2026 (listed below). Anything that could not be verified (toll amounts, exact distances, parking, commuting patterns) was left out.

## 5. Information still needed from the practice

1. **Same-day emergency wording:** fact sheet says slots are reserved every business day; confirm Saturday emergency availability is the same.
2. **Membership emergency exam ($65)** and CareCredit terms: confirm current.
3. **Drive time:** the range on this page is a fact-sheet estimate; the developer handoff has the Google Maps check row.
4. **Tuesday hours** [CONFIRM]: the site prints "8:00 AM - 5:00 AM". This page avoids printing Tuesday hours.
5. **Google Business Profile URL and place ID** for the map embed and schema.

## Sources

- Practice facts: `fact_sheet.md` and the site extracts in `/home/claude/rs/site/` (radiant-smiles.com, crawled 7 Oct 2026).
- [Morrisville, Bucks County, Pennsylvania](https://en.wikipedia.org/wiki/Morrisville,_Bucks_County,_Pennsylvania)
