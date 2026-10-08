# Arestin: SEO, Local and AEO/GEO Notes

Final v1, 7 Oct 2026. Explains why the copy in `02 Content.md` is built the way it is.

## 1. Keyword map: which section targets what

| Keyword | Role | Vol / mo | KD | Where it's used | Notes |
|---|---|---|---|---|---|
| arestin yardley | Primary | pending | pending | Title, Meta, H1, H2 "Ask About Arestin in Yardley", first 100 words | 5 uses including title/meta. Required placements (H1, title, first 100 words, one H2): all present. |
| arestin treatment | Secondary | 320 | 17 | H2 "When Arestin Treatment Is Used", H3 "Does Arestin treatment hurt?" | 3 exact or close-variant use(s). |
| antibiotic in gum pocket | Long-tail | 40 | n/a | not used verbatim | Close variant: "an antibiotic in the gum pocket" in "What Arestin Is". |
| arestin | National (context) | 4,400 | 10 | Title, Meta, H1, H2 "What Arestin Is", H2 "When Arestin Treatment Is Used", H2 "Who Shouldn't Have Arestin" | Natural mention only; this page won't rank nationally for it. |

"Pending" volumes are verified when Semrush units are available.

**Kept off this page on purpose (one keyword, one page):**
- Deep cleaning terms → `/preventative-care/deep-teeth-cleaning/`
- Gum surgery and advanced periodontal treatment terms → `/restorative-dentistry/periodontal-services/`
- "arestin" national term (4.4K, KD 10): natural mentions only

## 2. Role of the page and local visibility

Owns "arestin yardley" and "arestin treatment" (320, KD 17). It describes Arestin exactly as the practice uses it: minocycline microspheres placed in gum pockets after a deep cleaning, never as a stand-alone treatment. Safety information (allergy, pregnancy, children under 8) and aftercare are attributed to Memorial Sloan Kettering's patient information, so the page is accurate health content.

## 3. AEO and GEO (AI answers and citations)

**Answer-first sentences written to be quoted:**
- "Arestin® is an antibiotic made of tiny minocycline microspheres that the dentist places directly into infected gum pockets after a deep cleaning."
- "Arestin is an antibiotic made of minocycline hydrochloride microspheres."
- "Arestin is placed at the end of a deep cleaning, when the area may already be numbed with local anesthetic."

**Checkable facts on the page:** Minocycline hydrochloride microspheres; placed after scaling and root planing; aftercare (no hard, crunchy or sticky foods on treated teeth for 1 week) and who shouldn't have it, both attributed to MSKCC.

**Entities:** Radiant Smiles @ Floral Vale (`#dentist`), Arestin, minocycline hydrochloride (Drug), scaling and root planing, Memorial Sloan Kettering Cancer Center.

**NAP placement:** practice name in the opening paragraph and practice-specific FAQ answers; full NAP in the final CTA, matching the homepage schema and the Google Business Profile.

**FAQ approach:** 4 real patient questions, each answered in its first sentence (43 to 52 words), with the practice named where the answer is practice-specific. The FAQPage JSON-LD repeats them word for word.

## 4. Quality checks run

| Check | Result |
|---|---|
| Fact check against the fact sheet and site extracts | Definition and timing from the current Arestin page. Not used: "fights infection for 30 days", "significantly better results for up to 90 days" and the study citations (product claims the practice can't stand behind on its own page). Aftercare and contraindications checked against MSKCC patient information; brushing and flossing timing left to "follow the dentist's instructions" because published sources differ. Removed "priced per site" and "nothing to remove later" (not in the facts). |
| Claims and banned words | Scripted scan: no "best", "painless", "pain-free", "guaranteed", "specialist", "24/7", "state-of-the-art" or specialty titles; no em dashes; no unsourced statistics from the old site. |
| Internal links | 4 links, all to live URLs in the URL map; none to on-hold town pages, LPs or 301'd URLs. |
| Schema validity | Both JSON-LD blocks parse; every @type and property checked against the schema.org vocabulary (schema-dts) with no errors. |
| Schema ↔ visible content | WebPage name/description = title/meta; entity description copied word for word from the hero; FAQ questions and answers verbatim; NAP present. No mismatches. |
| Independent fact-check (7 Oct 2026) | 2 findings (0 errors, 2 warnings); all resolved: fixed, or verified against the current site, or moved to section 5. WARN fixed: "usually already been numbed" changed to "may already be numbed" (deep-cleaning extract: anesthesia "may be applied") in FAQ and schema; the bullet on use during periodontal maintenance visits was deleted (site describes Arestin only after scaling and root planing). |
| Stats | words 743 | Flesch 66 | title 49 | meta 144 | H1 "Arestin in Yardley, PA: Antibiotic Gum Treatment" |

## 5. Information still needed from the practice

1. **Still offered:** confirm Arestin is still stocked and used.
2. **Aftercare sheet:** what brushing and flossing instructions does the practice give after placement? Adding them would make the page more useful.
3. **Price:** cost per site for patients without insurance, if the practice wants it published.
4. **Arestin at maintenance visits:** is Arestin also used at periodontal maintenance visits, or only after scaling and root planing? Copy describes after-deep-cleaning use only.

## Sources

- Site extract: /preventative-care/arestin/
- [MSKCC: Minocycline hydrochloride periodontal microspheres](https://www.mskcc.org/cancer-care/patient-education/medications/adult/minocycline-hydrochloride-periodontal-microspheres) (aftercare, who shouldn't use it)
- Practice facts: `fact_sheet.md` (radiant-smiles.com crawled 7 Oct 2026) and the per-URL site extracts listed above
- [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- [Google: FAQPage structured data (FAQ rich results removed 7 May 2026)](https://developers.google.com/search/docs/appearance/structured-data/faqpage)
