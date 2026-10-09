# Dentist near Lawrenceville, NJ: SEO, Local and AEO/GEO Notes

Final v1, 7 Oct 2026. Explains why the copy in `02 Content.md` is built the way it is. Internal only.

## 1. Keyword map

Volumes and KD are pending (Semrush balance ran out; see the workspace README). Town terms are matched with honest phrasing ("near", "patients from"): the practice has one office, in Lower Makefield Township with a Yardley, PA address, and no page claims an office in the town.

| Keyword | Vol / mo | KD | Where it's used | Notes |
|---|---|---|---|---|
| dentist lawrenceville nj (primary) | pending | pending | H1/title "Dentist near Lawrenceville, NJ"; H2 "A Lawrenceville, NJ Dentist for the Rest of Your Care"; meta; first sentence | Close variant. |
| dentist lawrence township nj | pending | pending | "If you've been searching for a dentist in Lawrence Township, NJ…" | Exact. |
| lawrenceville nj dentist | pending | pending | Covered by the H2 variant | Not forced. |

**Kept off this page on purpose:**
- "invisalign trenton nj": owned by the conditional page; not linked from here.
- Princeton and other neighbours: not named.
- Conditional service+location pages: not linked.

## 2. Role of the page and local visibility

1. Lawrence Township page with an Invisalign angle (adults and teens): the six-week check-up rhythm suits a 20 to 25 minute drive.
2. Explains the Lawrenceville / Lawrence Township naming so both searches land here.

Shared signals on every location page: one H1, identical NAP text in the final CTA and footer, `tel:` links, the shared Dentist `@id` with `areaServed` for this area only, a link back to `/areas-we-serve/`, and a unique angle, route, local section and FAQ set (see `/home/claude/rs/location_uniqueness.md`).

## 3. AEO / GEO

**Answer-first sentences written to be quoted:**
- "You switch to a new set at home about every two weeks."
- "Invisalign is regularly $5,800, and our current offer takes $1,000 off, with a free consultation and second opinion."
- "Lawrenceville is an unincorporated community within Lawrence Township in Mercer County."

**Local proof used:** Lawrenceville CDP within Lawrence Township, ZIP 08648; US-1, I-295, US-206 (Lawrence Road); Rider University, The Lawrenceville School, Quaker Bridge Mall.

**Drive time:** printed as the fact-sheet range with "depending on traffic"; flagged in the handoff for a Google Maps check.

**FAQ approach:** four questions specific to this page (Is Lawrenceville part of Lawrence Township?; How often are Invisalign check-ups?; How much is Invisalign here?; Can teens use Invisalign?). Each answer opens with the direct answer and runs 40 to 60 words.

**NAP placement:** hero (address and phone in the opening paragraph or buttons), final CTA, footer.

## 4. Quality checks run

<!--QC-->
| Check | Result |
|---|---|
| Title / meta length | 47 / 146 characters (limits 60 / 120-155) |
| H1 | One: "Your Dentist near Lawrenceville, NJ" |
| Word count (02 body, incl. lists and FAQs) | 859 |
| Readability | Flesch reading ease about 51 (script estimate) |
| FAQ answer lengths | 48, 44, 51, 51 words (target 40-60) |
| Banned words, em dashes, on-hold town links, "Bucks County" | None found |
| Internal links | 10 unique; all in `url_map.md`; no conditional service+location links |
| Schema validity | Both JSON-LD blocks parse (json.loads). Types and properties are standard schema.org (WebPage/CollectionPage, BreadcrumbList, ItemList, Dentist, PostalAddress, Place/City/AdministrativeArea/State, FAQPage, Question, Answer). |
| Schema ↔ visible content | Generated from `02 Content.md` by script: WebPage name/description equal the title/meta exactly; 4 FAQ questions and answers verbatim; NAP identical. |
| Independent fact-check (7 Oct 2026) | 1 finding (0 errors, 1 warning); all resolved: fixed, or verified against the current site, or moved to section 5. Details: "village" changed to "unincorporated community" in the section text and FAQ (FAQPage JSON-LD regenerated), matching Wikipedia and `location_uniqueness.md`. |
<!--/QC-->

Local facts were verified with web sources on 7 Oct 2026 (listed below). Anything that could not be verified (toll amounts, exact distances, parking, commuting patterns) was left out.

## 5. Information still needed from the practice

1. **Certified Invisalign provider** [CONFIRM]. The brand is named because the current site names it.
2. **Insurance figure "up to $3,500"** for orthodontic coverage is from the Invisalign cost page: confirm.
3. **Monthly payment option** for Invisalign (cost page) and replacement aligners for Invisalign Teen: confirm terms.
4. **Drive time:** the range on this page is a fact-sheet estimate; the developer handoff has the Google Maps check row.
5. **Tuesday hours** [CONFIRM]: the site prints "8:00 AM - 5:00 AM". This page avoids printing Tuesday hours.
6. **Google Business Profile URL and place ID** for the map embed and schema.

## Sources

- Practice facts: `fact_sheet.md` and the site extracts in `/home/claude/rs/site/` (radiant-smiles.com, crawled 7 Oct 2026).
- [Lawrence Township](https://en.wikipedia.org/wiki/Lawrence_Township,_Mercer_County,_New_Jersey)
