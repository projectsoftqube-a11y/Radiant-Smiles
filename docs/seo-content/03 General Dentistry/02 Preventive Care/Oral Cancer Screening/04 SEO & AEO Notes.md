# Oral Cancer Screening: SEO, Local and AEO/GEO Notes

Final v1, 7 Oct 2026. Explains why the copy in `02 Content.md` is built the way it is.

## 1. Keyword map: which section targets what

| Keyword | Role | Vol / mo | KD | Where it's used | Notes |
|---|---|---|---|---|---|
| oral cancer screening yardley | Primary | pending | pending | Title, H1, H2 "Book an Oral Cancer Screening in Yardley", first 100 words | 4 uses including title/meta. Required placements (H1, title, first 100 words, one H2): all present. |
| oral cancer screening near me | Near-me | 590 | 19 | not used verbatim (on purpose) | Not written as a phrase. "Near me" ranking comes from proximity, the Google Business Profile, NAP and reviews; the page supports it with NAP, the service name and Yardley in the title and H1. |
| oral cancer screening | National (context) | 4,400 | 53 | Title, Meta, H1, H2 "Why Oral Cancer Screening Matters", H2 "Oral Cancer Screening FAQs", H2 "Book an Oral Cancer Screening in Yardley" | Natural mention only; this page won't rank nationally for it. |

"Pending" volumes are verified when Semrush units are available.

**Kept off this page on purpose (one keyword, one page):**
- Cleaning and checkup terms → `/preventative-care/teeth-cleaning-and-check-ups/`
- Oral surgery and biopsy treatment terms: not targeted (the practice doesn't claim oral surgery)

## 2. Role of the page and local visibility

Owns "oral cancer screening yardley" and supports "oral cancer screening near me" (590, KD 19). Its local differentiator is simple and checkable: the screening is part of every checkup, with no separate appointment. Warning signs and risk factors are attributed to the NIDCR so the page is citable health information rather than marketing.

## 3. AEO and GEO (AI answers and citations)

**Answer-first sentences written to be quoted:**
- "An oral cancer screening is a quick check of your mouth, neck and throat for sores, patches or lumps that could be an early sign of cancer."
- "An oral cancer screening takes just a few minutes."
- "No. The screening is a visual check plus gentle pressure with the dentist's fingers on your mouth, neck and throat to feel for lumps."

**Checkable facts on the page:** Screening at every checkup (current site); what's checked (sores, red or white patches, lumps, neck and throat, follow-up, biopsy); NIDCR's two-week rule, signs and risk factors.

**Entities:** Radiant Smiles @ Floral Vale (`#dentist`), National Institute of Dental and Craniofacial Research (NIDCR), HPV type 16, oral cavity, biopsy.

**NAP placement:** practice name in the opening paragraph and practice-specific FAQ answers; full NAP in the final CTA, matching the homepage schema and the Google Business Profile.

**FAQ approach:** 4 real patient questions, each answered in its first sentence (44 to 55 words), with the practice named where the answer is practice-specific. The FAQPage JSON-LD repeats them word for word.

## 4. Quality checks run

| Check | Result |
|---|---|
| Fact check against the fact sheet and site extracts | Screening steps from the current page; warning signs, the two-week rule and risk factors checked against the NIDCR oral cancer page. Removed "53,000 Americans" (unsourced) and "most changes turn out not to be cancer" (unsourced). Billing wording kept neutral: the screening doesn't need its own appointment; coverage depends on the plan. "Painless" from the brief's meta was not used. |
| Claims and banned words | Scripted scan: no "best", "painless", "pain-free", "guaranteed", "specialist", "24/7", "state-of-the-art" or specialty titles; no em dashes; no unsourced statistics from the old site. |
| Internal links | 2 links, all to live URLs in the URL map; none to on-hold town pages, LPs or 301'd URLs. |
| Schema validity | Both JSON-LD blocks parse; every @type and property checked against the schema.org vocabulary (schema-dts) with no errors. |
| Schema ↔ visible content | WebPage name/description = title/meta; entity description copied word for word from the hero; FAQ questions and answers verbatim; NAP present. No mismatches. |
| Independent fact-check (7 Oct 2026) | 3 findings (0 errors, 3 warnings); all resolved: fixed, or verified against the current site, or moved to section 5. WARN fixed: "good light and magnification" removed; FAQ now says "no needles, and nothing is cut or removed" (body, FAQ, schema); NIDCR symptom wording corrected to "hoarseness or loss of your voice". |
| Stats | words 825 | Flesch 77 | title 53 | meta 147 | H1 "Oral Cancer Screening in Yardley, PA" |

## 5. Information still needed from the practice

1. **Screening tools:** is any screening device or light used, or is it a visual and hands-on exam only? (Copy describes look-and-feel only.)
2. **Biopsies:** taken in-house or referred? Copy says "the next step may be a biopsy" without saying where.
3. **"Every visit":** confirm screening happens at every checkup (the current site says "with every visit").

## Sources

- Site extract: /preventative-care/oral-cancer-screening/
- [NIDCR: Oral Cancer](https://www.nidcr.nih.gov/health-info/oral-cancer) (signs, two-week rule, risk factors)
- Practice facts: `fact_sheet.md` (radiant-smiles.com crawled 7 Oct 2026) and the per-URL site extracts listed above
- [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- [Google: FAQPage structured data (FAQ rich results removed 7 May 2026)](https://developers.google.com/search/docs/appearance/structured-data/faqpage)
