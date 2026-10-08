# Dental Sealants: SEO, Local and AEO/GEO Notes

Final v1, 7 Oct 2026. Explains why the copy in `02 Content.md` is built the way it is.

## 1. Keyword map: which section targets what

| Keyword | Role | Vol / mo | KD | Where it's used | Notes |
|---|---|---|---|---|---|
| dental sealants yardley | Primary | pending | pending | Title, Meta, H1, H2 "Ask About Dental Sealants in Yardley", first 100 words | 5 uses including title/meta. Required placements (H1, title, first 100 words, one H2): all present. |
| dental sealants near me | Near-me | 6,600 | 7 | not used verbatim (on purpose) | Not written as a phrase. "Near me" ranking comes from proximity, the Google Business Profile, NAP and reviews; the page supports it with NAP, the service name and Yardley in the title and H1. |
| are dental sealants worth it | Question | pending | pending | H3 "Are dental sealants worth it?" | Exact question as the first FAQ, answered "yes" with conditions. |
| dental sealants | National (context) | 18,100 | 63 | Title, Meta, H1, H2 "Who Needs Dental Sealants", H2 "Ask About Dental Sealants in Yardley", H3 "Are dental sealants worth it?" | Natural mention only; this page won't rank nationally for it. |

"Pending" volumes are verified when Semrush units are available.

**Kept off this page on purpose (one keyword, one page):**
- Children's dentist terms → `/preventative-care/child-dentistry/`
- Fluoride terms → `/preventative-care/fluoride/`
- Filling and cavity treatment terms → `/restorative-dentistry/dental-fillings/`

## 2. Role of the page and local visibility

Owns "dental sealants yardley" and supports "dental sealants near me" (6.6K, KD 7) through Yardley in the title, H1 and NAP. It answers the researcher question "are dental sealants worth it?" directly and cross-links to fluoride and children's dentistry, which share the same cavity-prevention audience.

## 3. AEO and GEO (AI answers and citations)

**Answer-first sentences written to be quoted:**
- "A dental sealant is a thin, tooth-colored coating painted onto the chewing surfaces of the back teeth to seal the deep grooves where cavities often start."
- "For many children and adults with deep grooves in their back teeth, yes."
- "Dental sealants usually last several years before they need to be reapplied."

**Checkable facts on the page:** Tooth-colored acrylic coating; a few minutes per tooth; lasts several years before reapplication; for children and adults (all from the current sealant and child-dentistry pages).

**Entities:** Radiant Smiles @ Floral Vale (`#dentist`), dental sealants, molars and premolars, fluoride treatment.

**NAP placement:** practice name in the opening paragraph and practice-specific FAQ answers; full NAP in the final CTA, matching the homepage schema and the Google Business Profile.

**FAQ approach:** 4 real patient questions, each answered in its first sentence (42 to 53 words), with the practice named where the answer is practice-specific. The FAQPage JSON-LD repeats them word for word.

## 4. Quality checks run

| Check | Result |
|---|---|
| Fact check against the fact sheet and site extracts | Material, timing and lifespan from the current sealant page. "Space-age plastics" (child page) rewritten as "tooth-colored acrylic". Steps written in general terms (clean, prepare, paint on, set, check bite) without naming a curing light, since the site doesn't describe the equipment. Insurance written as "many plans cover sealants for children", with no promise. |
| Claims and banned words | Scripted scan: no "best", "painless", "pain-free", "guaranteed", "specialist", "24/7", "state-of-the-art" or specialty titles; no em dashes; no unsourced statistics from the old site. |
| Internal links | 4 links, all to live URLs in the URL map; none to on-hold town pages, LPs or 301'd URLs. |
| Schema validity | Both JSON-LD blocks parse; every @type and property checked against the schema.org vocabulary (schema-dts) with no errors. |
| Schema ↔ visible content | WebPage name/description = title/meta; entity description copied word for word from the hero; FAQ questions and answers verbatim; NAP present. No mismatches. |
| Independent fact-check (7 Oct 2026) | 2 findings (0 errors, 2 warnings); all resolved: fixed, or verified against the current site, or moved to section 5. WARN fixed: candidacy reworded to "are meant for teeth without cavities; very early weak spots can sometimes be sealed" (ADA/AAPD 2016 guideline), and "checks at every checkup" softened to "can be checked at your regular checkups" in body, FAQ and schema. |
| Stats | words 732 | Flesch 79 | title 47 | meta 153 | H1 "Dental Sealants in Yardley, PA" |

## 5. Information still needed from the practice

1. **Sealant material:** the site says acrylic; confirm.
2. **Adults:** confirm sealants are offered to adults as well as children.
3. **Price** for patients without insurance, if the practice wants it published.
4. **Sealant checks:** confirm sealants are routinely checked at each checkup; copy says they "can be checked at your regular checkups".

## Sources

- Site extracts: /preventative-care/dental-sealants/ (refetched), /preventative-care/child-dentistry/
- Practice facts: `fact_sheet.md` (radiant-smiles.com crawled 7 Oct 2026) and the per-URL site extracts listed above
- [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- [Google: FAQPage structured data (FAQ rich results removed 7 May 2026)](https://developers.google.com/search/docs/appearance/structured-data/faqpage)
