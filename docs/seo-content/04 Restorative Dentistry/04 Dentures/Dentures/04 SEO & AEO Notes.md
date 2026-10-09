# Dentures: SEO, Local and AEO/GEO Notes

Final v1, 7 Oct 2026.

## 1. Keyword map

| Keyword | Role | Vol / mo | KD | Source | Where used on the page | Notes |
|---|---|---|---|---|---|---|
| dentures yardley pa | Primary | pending | pending | Pending Semrush | title, meta, H1, first 100 words, H2/H3 (phrase or close variant ×5) | Primary: H1, title, meta, first 100 words and one H2. |
| dentures near me | Near-me | 60,500 | 58 | Semrush verified | not used as a phrase | Not forced (KD 58). Local signals and links from location pages. |
| denture care | Long-tail | pending | pending | Pending Semrush | H2/H3 (phrase or close variant ×2) | H2 'Denture Care: Keeping Your Dentures Clean and in Shape' (absorbs /denture-care/). |
| how long do dentures last | Question | pending | pending | Pending Semrush | FAQ (phrase or close variant ×1) | FAQ 1 (verbatim question). |
| dentures | National (context) | 165,000 | 91 | Semrush verified | title, meta, H1, first 100 words, H2/H3, FAQ (phrase or close variant ×40) | Natural use; national term. |

"Near-me" and national terms are matched by local signals (NAP, Yardley in the H1/title, internal links from the hub and location pages) and close variants, not by forcing exact phrases. Pending keywords are verified when Semrush units are available.

**Kept off this page on purpose**

- 'Most dental insurance covers new dentures every 5 years' (old denture-care page): unsourced generalization, replaced with 'many plans limit how often they pay'.
- 'same day dentures': brief says only if confirmed; immediate dentures are described instead.
- Denture prices: none published.
- Relines, implant dentures and partials as targets: each owned by its child page.

## 2. Role of the page and local visibility

Owns 'dentures yardley pa' and acts as the denture sub-hub. It absorbs the old denture-care and exams-maintenance pages, so care instructions and the annual denture exam now live on one strong URL, and routes to the four denture child pages.

- "Yardley, PA" appears in the H1, title, meta description and opening paragraph, and the full NAP sits in the final CTA as text matching the Google Business Profile.
- Breadcrumb: Home › Restorative Dentistry › Dentures. Linked from the Restorative Dentistry hub and the Dentures page.
- Business entity referenced by `@id` (`/#dentist`) so the page inherits the Home page's Dentist node.

## 3. AEO/GEO

**Answer-first sentences written to be quoted:**

- "Dentures are replacement teeth, most of them removable, that fill in for missing teeth and support your cheeks and lips, so you can eat, speak and smile with confidence."
- "The right denture depends on how many teeth you're missing, the health of any remaining teeth and how secure you want the denture to feel."
- "Getting dentures starts with an exam, and your dentist will explain each step before you commit."
- "Good denture care keeps your dentures clean, comfortable and free of damage."

**Entities covered:** Radiant Smiles @ Floral Vale (name, address, phone); Yardley, PA; Dr. Urvishkumar Bhalala and Dr. Jaspreet Gadria; CareCredit; in-office membership plan.

**FAQ approach:** 5 questions phrased the way people search, each answer 42-52 words and starting with the direct answer. Practice-specific answers name Radiant Smiles @ Floral Vale; general answers stay general.

**Checkable facts:** every number on the page (prices, timeframes, visit counts) comes from the current site or the fact sheet; no unsourced statistics are used.

## 4. Quality checks run

| Check | Result |
|---|---|
| Title tag | 57 characters (max 60): pass |
| Meta description | 148 characters (target 120-155): pass |
| H1 | exactly one: "Dentures in Yardley, PA" |
| Word count | 1239 words (brief target 1,200-1,500 words) |
| Readability | Flesch reading ease 77 |
| Primary keyword placement | 'dentures yardley pa' (or close variant) in: H1, title, meta, first 100 words, an H2 |
| Banned / AI-sounding phrases | none |
| Internal links | 8 links, all in the live URL map; no on-hold towns, old merged URLs or LPs |
| FAQ answers | 5 answers, 42-52 words each (target 40-60), each opens with a direct answer |
| Schema parses | JSON valid; types Answer, BreadcrumbList, FAQPage, ListItem, MedicalProcedure, MedicalWebPage, Question |
| Schema vocabulary | every @type and property checked against schema.org (schema-dts vocabulary): no errors |
| Schema ↔ visible content | WebPage name/description equal title/meta; FAQ text verbatim; procedure description verbatim from the first sentence |
| Fact check (against the fact sheet and current-site extracts) | Types, materials, upper/lower design, overdentures, care rules and the annual exam checklist are from the current dentures, denture-care and exams-maintenance pages. The process steps are general and hedged ('usually'). Dropped the unsourced '5 years' insurance claim. The glue warning is general safety advice. |
| Independent fact-check (7 Oct 2026) | 1 finding (0 errors, 1 warning); all resolved: fixed, or verified against the current site, or moved to section 5. Hero definition 'Dentures are removable replacement teeth' contradicted the page's fixed (screw-retained) implant option; now 'replacement teeth, most of them removable', and the MedicalProcedure schema description updated to match word for word. |
| Copy rules | No 'best', 'painless', 'guaranteed', specialist titles, 24/7 or Sunday claims; one CTA per section; NAP exact; US English; no em dashes |

## 5. Information still needed from the practice

- [CONFIRM: Same-day denture repairs: in-house or via an outside lab, any drop-off cut-off time, and which repairs qualify.]
- [CONFIRM: Membership plan terms are current ($150/yr, $75 each additional family member, 15% off treatment).]
- [CONFIRM: Named PPO carriers are still accepted; copy says 'we accept many PPO plans, including ...' and never 'in-network'.]

## Sources

- `/home/claude/rs/fact_sheet.md` (approved fact sheet, 7 Oct 2026)
- Current site: https://www.radiant-smiles.com/restorative-dentistry/dentures/ (crawled 7 Oct 2026)
- Current site: https://www.radiant-smiles.com/restorative-dentistry/dentures/denture-care/ (crawled 7 Oct 2026)
- Current site: https://www.radiant-smiles.com/restorative-dentistry/dentures/exams-maintenance/ (crawled 7 Oct 2026)
- Current site: https://www.radiant-smiles.com/restorative-dentistry/rebase-repairs/ (crawled 7 Oct 2026)
- `01 Keyword Brief.md` in this folder (keyword volumes, KD and ranking notes)
