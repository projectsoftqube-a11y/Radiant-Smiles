# Dentist near New Hope, PA: SEO, Local and AEO/GEO Notes

Final v1, 7 Oct 2026. Explains why the copy in `02 Content.md` is built the way it is. Internal only.

## 1. Keyword map

Volumes and KD are pending (Semrush balance ran out; see the workspace README). Town terms are matched with honest phrasing ("near", "patients from"): the practice has one office, in Lower Makefield Township with a Yardley, PA address, and no page claims an office in the town.

| Keyword | Vol / mo | KD | Where it's used | Notes |
|---|---|---|---|---|
| dentist new hope pa (primary) | pending | pending | H1/title "Dentist near New Hope, PA"; meta; first sentence | Close variant. |
| new hope dentist | pending | pending | H2 "A New Hope Dentist Visit Planned Around the Drive" | Exact in H2. |
| dentist near new hope pa | pending | pending | H1, title | Exact. |

**Kept off this page on purpose:**
- Lambertville, NJ and Solebury Township: named once for orientation, not targeted.
- "Bucks County": not used. ZIP 18938 not printed (not needed).
- Conditional service+location pages: not linked.

## 2. Role of the page and local visibility

1. Edge-of-catchment page with a cosmetic, few-trips angle (take-home whitening, one-visit bonding, veneers) and Saturday/late weekday access.
2. Honest about the 25 to 30 minute drive rather than hiding it. Expect slower results than the closer towns (brief note).

Shared signals on every location page: one H1, identical NAP text in the final CTA and footer, `tel:` links, the shared Dentist `@id` with `areaServed` for this area only, a link back to `/areas-we-serve/`, and a unique angle, route, local section and FAQ set (see `/home/claude/rs/location_uniqueness.md`).

## 3. AEO / GEO

**Answer-first sentences written to be quoted:**
- "Radiant Smiles @ Floral Vale is about 25 to 30 minutes from New Hope, PA, depending on traffic, via River Road (PA-32) and I-295."
- "You wear them at home for about 3 to 4 hours each night for one to two weeks."
- "Bonding is often finished in a single visit and typically lasts three to five years before it needs repair."

**Local proof used:** Borough on the west bank of the Delaware, bordered by Solebury Township, facing Lambertville, NJ; PA-32 is Main Street, PA-179 is Bridge Street, US-202 on the edge of town; Delaware Canal towpath.

**Drive time:** printed as the fact-sheet range with "depending on traffic"; flagged in the handoff for a Google Maps check.

**FAQ approach:** four questions specific to this page (Is a 25 to 30 minute drive practical for cosmetic work?; How many visits does take-home whitening need?; Which route should I take from New Hope?; Can I get a cosmetic consultation on a Saturday?). Each answer opens with the direct answer and runs 40 to 60 words.

**NAP placement:** hero (address and phone in the opening paragraph or buttons), final CTA, footer.

## 4. Quality checks run

<!--QC-->
| Check | Result |
|---|---|
| Title / meta length | 42 / 143 characters (limits 60 / 120-155) |
| H1 | One: "Your Dentist near New Hope, PA" |
| Word count (02 body, incl. lists and FAQs) | 894 |
| Readability | Flesch reading ease about 62 (script estimate) |
| FAQ answer lengths | 55, 50, 45, 48 words (target 40-60) |
| Banned words, em dashes, on-hold town links, "Bucks County" | None found |
| Internal links | 10 unique; all in `url_map.md`; no conditional service+location links |
| Schema validity | Both JSON-LD blocks parse (json.loads). Types and properties are standard schema.org (WebPage/CollectionPage, BreadcrumbList, ItemList, Dentist, PostalAddress, Place/City/AdministrativeArea/State, FAQPage, Question, Answer). |
| Schema ↔ visible content | Generated from `02 Content.md` by script: WebPage name/description equal the title/meta exactly; 4 FAQ questions and answers verbatim; NAP identical. |
| Independent fact-check (7 Oct 2026) | 3 findings (0 errors, 3 warnings); all resolved: fixed, or verified against the current site, or moved to section 5. Details: bonding hedged to "often done in one visit" in the hero; the FAQ now says take-home whitening usually takes a couple of short visits (impression, then collecting the trays), matching the whitening FAQ; the unsourced "know every appointment in advance" promise became "a veneer consultation sets out each step and how many visits to expect" (FAQPage JSON-LD regenerated). |
<!--/QC-->

Local facts were verified with web sources on 7 Oct 2026 (listed below). Anything that could not be verified (toll amounts, exact distances, parking, commuting patterns) was left out.

## 5. Information still needed from the practice

1. **Catchment:** confirm the practice wants patients from New Hope (brief note).
2. **Whitening offer** ($100 off, regular $550) and veneer/bonding details: confirm current; no expiry published.
3. **Wednesday/Thursday until 6 pm** printed here: keep in sync with the homepage.
4. **Drive time:** the range on this page is a fact-sheet estimate; the developer handoff has the Google Maps check row.
5. **Tuesday hours** [CONFIRM]: the site prints "8:00 AM - 5:00 AM". This page avoids printing Tuesday hours.
6. **Google Business Profile URL and place ID** for the map embed and schema.
7. **Veneers** (QA 7 Oct 2026): how many visits does a typical case take, and is the full schedule set at the consultation? The copy only promises that the consultation explains the steps.
8. **Take-home whitening** (QA 7 Oct 2026): confirm there is a separate visit to collect and fit the trays.

## Sources

- Practice facts: `fact_sheet.md` and the site extracts in `/home/claude/rs/site/` (radiant-smiles.com, crawled 7 Oct 2026).
- [New Hope, Pennsylvania](https://en.wikipedia.org/wiki/New_Hope,_Pennsylvania)
