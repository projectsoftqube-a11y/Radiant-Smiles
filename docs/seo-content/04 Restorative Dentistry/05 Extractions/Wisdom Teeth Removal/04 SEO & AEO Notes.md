# Wisdom Teeth Removal: SEO, Local and AEO/GEO Notes

Final v1, 7 Oct 2026.

## 1. Keyword map

| Keyword | Role | Vol / mo | KD | Source | Where used on the page | Notes |
|---|---|---|---|---|---|---|
| wisdom teeth removal yardley | Primary | pending | pending | Pending Semrush | title, meta, H1, first 100 words, H2/H3 (phrase or close variant ×4) | Primary: H1, title, meta, first 100 words and one H2. |
| wisdom teeth removal near me | Near-me | 27,100 | 52 | Semrush verified | not used as a phrase | Not forced (KD 52). Local signals. |
| wisdom teeth removal cost | Long-tail | pending | pending | Pending Semrush | H2/H3 (phrase or close variant ×1) | H2 'Wisdom Teeth Removal Cost in Yardley'. |
| wisdom tooth extraction | National (context) | 18,100 | 50 | Semrush verified | body (phrase or close variant ×1) | Used once in 'What to Expect' ('Wisdom tooth extraction is an outpatient procedure'); national term. |

"Near-me" and national terms are matched by local signals (NAP, Yardley in the H1/title, internal links from the hub and location pages) and close variants, not by forcing exact phrases. Pending keywords are verified when Semrush units are available.

**Kept off this page on purpose**

- 'IV sedation' and 'sleep dentistry': unconfirmed.
- 'oral surgeon': never implied.
- Old page's antibiotics/birth-control and ibuprofen guidance: medication advice left to the dentist's instructions.
- Prices: none published.

## 2. Role of the page and local visibility

Owns 'wisdom teeth removal yardley'. Speaks to parents of teens and young adults: signs, whether removal is needed, the age window from the current site, what the visit involves and recovery.

- "Yardley, PA" appears in the H1, title, meta description and opening paragraph, and the full NAP sits in the final CTA as text matching the Google Business Profile.
- Breadcrumb: Home › Restorative Dentistry › Wisdom Teeth Removal. Linked from the Restorative Dentistry hub.
- Business entity referenced by `@id` (`/#dentist`) so the page inherits the Home page's Dentist node.

## 3. AEO/GEO

**Answer-first sentences written to be quoted:**

- "Wisdom teeth removal takes out the third molars at the back of the mouth when they're trapped, crowded or causing infection."
- "Wisdom teeth often cause trouble because there isn't enough room for them to come in straight."
- "Wisdom teeth are usually easiest to remove between the mid-teens and the early twenties, while the roots are still forming."
- "Wisdom tooth extraction is an outpatient procedure done here in the office."

**Entities covered:** Radiant Smiles @ Floral Vale (name, address, phone); Yardley, PA; CareCredit; in-office membership plan.

**FAQ approach:** 4 questions phrased the way people search, each answer 46-50 words and starting with the direct answer. Practice-specific answers name Radiant Smiles @ Floral Vale; general answers stay general.

**Checkable facts:** every number on the page (prices, timeframes, visit counts) comes from the current site or the fact sheet; no unsourced statistics are used.

## 4. Quality checks run

| Check | Result |
|---|---|
| Title tag | 52 characters (max 60): pass |
| Meta description | 140 characters (target 120-155): pass |
| H1 | exactly one: "Wisdom Teeth Removal in Yardley, PA" |
| Word count | 1023 words (brief target 900-1,200 words) |
| Readability | Flesch reading ease 72 |
| Primary keyword placement | 'wisdom teeth removal yardley' (or close variant) in: H1, title, meta, first 100 words, an H2 |
| Banned / AI-sounding phrases | none |
| Internal links | 5 links, all in the live URL map; no on-hold towns, old merged URLs or LPs |
| FAQ answers | 4 answers, 44-51 words each (target 40-60), each opens with a direct answer |
| Schema parses | JSON valid; types Answer, BreadcrumbList, FAQPage, ListItem, MedicalProcedure, MedicalWebPage, Question |
| Schema vocabulary | every @type and property checked against schema.org (schema-dts vocabulary): no errors |
| Schema ↔ visible content | WebPage name/description equal title/meta; FAQ text verbatim; procedure description verbatim from the first sentence |
| Fact check (against the fact sheet and current-site extracts) | Problems (pericoronitis, cysts, crowding, second-molar damage), the age guidance, clear liquids first and cost factors are from the current page (via the refetch). IV sedation, fasting hours and named medications were deliberately left out. |
| Independent fact-check (7 Oct 2026) | 2 findings (0 errors, 2 warnings); all resolved: fixed, or verified against the current site, or moved to section 5. Sedation lines that implied IV/deep sedation (eating and drinking instructions, responsible adult) cut to 'ask about sedation options when you book; you'll get any preparation instructions in advance' (fact sheet: IV sedation unconfirmed). Template timings from the old page (30-60 minutes, about 90 minutes in office, stitches dissolve in three to five days) replaced with 'most removals take under an hour; plan extra time at the office' and 'dissolving stitches usually disappear on their own within a week or two'. |
| Copy rules | No 'best', 'painless', 'guaranteed', specialist titles, 24/7 or Sunday claims; one CTA per section; NAP exact; US English; no em dashes |

## 5. Information still needed from the practice

- [CONFIRM: IV sedation is NOT named (current wisdom-teeth page reads like template copy). Confirm whether IV sedation is offered in-house before adding it.]
- [CONFIRM: Which wisdom-tooth cases are done in-house and which are referred (impacted/surgical). Copy says complex cases are discussed before scheduling.]
- [CONFIRM: Which sedation options are offered. Copy says only 'ask about sedation options' (why-choose-us mentions 'dental sedation options').]
- [CONFIRM: Membership plan terms are current ($150/yr, $75 each additional family member, 15% off treatment).]
- [CONFIRM: Named PPO carriers are still accepted; copy says 'we accept many PPO plans, including ...' and never 'in-network'.]
- [CONFIRM: The practice's own wisdom-tooth appointment lengths and suture type; copy now says 'under an hour' and 'a week or two' for dissolving stitches.]

## Sources

- `/home/claude/rs/fact_sheet.md` (approved fact sheet, 7 Oct 2026)
- Current site: https://www.radiant-smiles.com/restorative-dentistry/wisdom-teeth-removal/ (crawled 7 Oct 2026)
- Current site: https://www.radiant-smiles.com/patient-information/why-choose-us/ (crawled 7 Oct 2026)
- `01 Keyword Brief.md` in this folder (keyword volumes, KD and ranking notes)
