# Dental Implants: SEO, Local and AEO/GEO Notes

Final v1, 7 Oct 2026.

## 1. Keyword map

| Keyword | Role | Vol / mo | KD | Source | Where used on the page | Notes |
|---|---|---|---|---|---|---|
| dental implants yardley pa | Primary | 10 | n/a | Agency report (Google Ads) | title, meta, H1, first 100 words, H2/H3, FAQ (phrase or close variant ×4) | Primary: H1, title, meta, first 100 words and one H2. |
| dental implants yardley | Local secondary | pending | pending | Pending Semrush | title, meta, H1, first 100 words, H2/H3, FAQ (phrase or close variant ×4) | Covered by the primary phrase in H1, title, opener and H2. |
| implant dentist yardley | Local secondary | pending | pending | Pending Semrush | body (phrase or close variant ×1) | Used once in 'What You Get With an Implant at Our Yardley Office' ('Your implant dentist in Yardley'). |
| dental implants near me | Near-me | 110,000 | 32 | Semrush verified | not used as a phrase | Not forced. Matched by local signals and close variants. |
| dental implant cost | Long-tail | pending | pending | Pending Semrush | H2/H3, FAQ (phrase or close variant ×2) | H2 'Dental Implant Cost in Yardley, PA' and H3 'What affects your dental implant cost'. |
| single tooth implant | Long-tail | pending | pending | Pending Semrush | H2/H3 (phrase or close variant ×2) | H3 'Single tooth implant'. |
| how long do dental implants last | Question | pending | pending | Pending Semrush | FAQ (phrase or close variant ×1) | FAQ 2 (verbatim question). |
| are dental implants painful | Question | pending | pending | Pending Semrush | FAQ (phrase or close variant ×1) | FAQ 3 (verbatim question). |
| dental implants | National (context) | 450,000 | 82 | Semrush verified | title, meta, H1, first 100 words, H2/H3, FAQ (phrase or close variant ×12) | Natural use throughout; national term, not a ranking target. |

"Near-me" and national terms are matched by local signals (NAP, Yardley in the H1/title, internal links from the hub and location pages) and close variants, not by forcing exact phrases. Pending keywords are verified when Semrush units are available.

**Kept off this page on purpose**

- All-on-4 and 'teeth in a day': not offered (fact sheet).
- Bone grafting as an in-house service: not confirmed; copy only says the dentist will explain options.
- Zirconia implants: site names titanium only.
- 'implant dentures yardley': owned by Implant-Retained Dentures (linked).
- 'dental implants mercer county nj': owned by the conditional service+location page; not linked from here.
- Implant lifespan figures or success rates: none on the current site, so none published.

## 2. Role of the page and local visibility

Owns 'dental implants yardley pa' (currently #12, close to page 1) and is the highest-value page on the site. It leads with the published offer ($500 off the regular $3,500 for an implant, abutment and crown, free consultation and second opinion), opens the first section with a quotable definition, then answers the buyer's questions in order: am I a candidate, how does it work and how long, what imaging and precision tools are used (cone beam CT where needed, dental microscopes), what does it cost, and how does it compare with bridges and dentures.

- "Yardley, PA" appears in the H1, title, meta description and opening paragraph, and the full NAP sits in the final CTA as text matching the Google Business Profile.
- Breadcrumb: Home › Restorative Dentistry › Dental Implants. Linked from the Restorative Dentistry hub.
- Business entity referenced by `@id` (`/#dentist`) so the page inherits the Home page's Dentist node.

## 3. AEO/GEO

**Answer-first sentences written to be quoted:**

- "A dental implant is a small titanium post placed in the jawbone to replace the root of a missing tooth, then topped with an abutment and a custom crown."
- "An implant replaces the whole tooth, root and crown, so it stands on its own without leaning on the teeth beside it."
- "Most adults with one or more missing teeth can be considered for implants, and the only way to know for sure is an evaluation."
- "Implant treatment happens in stages, and the entire process usually takes six to eight months from placement to final crown."

**Entities covered:** Radiant Smiles @ Floral Vale (name, address, phone); Yardley, PA; Dr. Urvishkumar Bhalala and Dr. Jaspreet Gadria; high-power dental microscopes; cone beam CT; CareCredit; implant offer ($500 off, regular $3,500); Temple University Kornberg School of Dentistry.

**FAQ approach:** 6 questions phrased the way people search, each answer 41-51 words and starting with the direct answer. Practice-specific answers name Radiant Smiles @ Floral Vale; general answers stay general.

**Checkable facts:** every number on the page (prices, timeframes, visit counts) comes from the current site or the fact sheet; no unsourced statistics are used.

## 4. Quality checks run

| Check | Result |
|---|---|
| Title tag | 58 characters (max 60): pass |
| Meta description | 149 characters (target 120-155): pass |
| H1 | exactly one: "Dental Implants in Yardley, PA" |
| Word count | about 1765 words after the 7 Oct QA edits (brief target 1,500-2,000 words) |
| Readability | Flesch reading ease 72 |
| Primary keyword placement | 'dental implants yardley pa' (or close variant) in: H1, title, meta, first 100 words, an H2 |
| Banned / AI-sounding phrases | none |
| Internal links | 12 links, all in the live URL map; no on-hold towns, old merged URLs or LPs |
| FAQ answers | 6 answers, 41-51 words each (target 40-60), each opens with a direct answer |
| Schema parses | JSON valid; types Answer, BreadcrumbList, FAQPage, ListItem, MedicalProcedure, MedicalWebPage, Question |
| Schema vocabulary | every @type and property checked against schema.org (schema-dts vocabulary): no errors |
| Schema ↔ visible content | WebPage name/description equal title/meta; FAQ text verbatim; procedure description verbatim from the first sentence |
| Fact check (against the fact sheet and current-site extracts) | Process stages, six-to-eight-month total, same-visit placement with extraction, titanium posts and bone preservation all from the current implant page. Price and offer from /special-offers/. Softened 'patients do not experience any disruption in their daily life' to 'healing rarely disrupts daily life'. Insurance worded as 'some PPO plans pay toward part'. No lifespan numbers or success rates published. |
| Independent fact-check (7 Oct 2026) | 6 findings (0 errors, 6 warnings); all resolved: fixed, or verified against the current site, or moved to section 5. Fixed: CBCT now 'where needed' and described as office technology used to assess bone (not a fixed planning step); 'bone density' claim removed; invented 'crown checked under the microscope before it's secured' replaced with 'aided by high-power dental microscopes for fit and finish' (supported by patient-information__technology.md / home.md); derived net price (regular minus discount) removed; 'full cost at the consultation, before anything is scheduled' softened to 'before treatment begins' (patient-information__why-choose-us.md: 'transparent pricing before any treatment'). Trenton drive time kept with a Google Maps verify-and-date note in the handoff. |
| Conversion review (7 Oct 2026) | Applied: hero now leads with '$500 off the regular $3,500 for an implant, abutment and crown, plus a free consultation and second opinion', then imaging and microscopes; definition moved to the first section (schema MedicalProcedure description unchanged, still word for word); H2 'Why Patients Choose Radiant Smiles for Implants' renamed 'What You Get With an Implant at Our Yardley Office'; single-stage healing-collar detail cut (process steps and FAQ 4); Candice C. review (Sept 2026) added as plain text next to the microscope/precision claim, no Review markup; no derived net price anywhere, including schema. |
| Copy rules | No 'best', 'painless', 'guaranteed', specialist titles, 24/7 or Sunday claims; one CTA per section; NAP exact; US English; no em dashes |

## 5. Information still needed from the practice

- [CONFIRM: Implant offer terms: expiry date, eligibility, and whether a net price (regular price less the $500) may ever be published; until then the page says only "$500 off the regular $3,500". Whether the offer combines with insurance or the membership discount.]
- [CONFIRM: Whether the membership plan's 15% discount applies to implants and to treatment already on offer (left off the implant pages).]
- [CONFIRM: Is every implant case planned with an in-house cone beam CT scan? Copy currently says only 'where needed' and that the office has CBCT to assess bone; can be strengthened if confirmed.]
- [CONFIRM: Are lab crowns actually inspected under the microscope before fitting? Copy now says only that microscopes aid precise fit and finish (current-site wording); add the inspection step back only if confirmed.]
- [CONFIRM: Trenton drive time ('about 15 minutes by bridge') checked in Google Maps before launch, with date.]
- [CONFIRM: Permission to quote Candice C.'s Google review (Sept 2026) on the page, shown as 'Candice C.'.]
- [CONFIRM: Whether bone grafting is done in-house (copy doesn't claim it; it says the dentist will explain options if bone is thin).]
- [CONFIRM: Which dentist places implants and whether all implant surgery is done in-house.]
- [CONFIRM: Which sedation options are offered. Copy says only 'ask about sedation options' (why-choose-us mentions 'dental sedation options').]
- [CONFIRM: Named PPO carriers are still accepted; copy says 'we accept many PPO plans, including ...' and never 'in-network'.]

## Sources

- `/home/claude/rs/fact_sheet.md` (approved fact sheet, 7 Oct 2026)
- Current site: https://www.radiant-smiles.com/restorative-dentistry/dental-implants/ (crawled 7 Oct 2026)
- Current site: https://www.radiant-smiles.com/special-offers/ (crawled 7 Oct 2026)
- Current site: https://www.radiant-smiles.com/ (crawled 7 Oct 2026)
- Current site: https://www.radiant-smiles.com/patient-information/carecredit/ (crawled 7 Oct 2026)
- Current site: https://www.radiant-smiles.com/restorative-dentistry/dentures/implant-retained-dentures/ (crawled 7 Oct 2026)
- `01 Keyword Brief.md` in this folder (keyword volumes, KD and ranking notes)
