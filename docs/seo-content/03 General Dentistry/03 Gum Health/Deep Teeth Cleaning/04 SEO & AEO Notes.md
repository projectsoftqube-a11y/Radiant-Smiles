# Deep Teeth Cleaning: SEO, Local and AEO/GEO Notes

Final v1, 7 Oct 2026. Explains why the copy in `02 Content.md` is built the way it is.

## 1. Keyword map: which section targets what

| Keyword | Role | Vol / mo | KD | Where it's used | Notes |
|---|---|---|---|---|---|
| deep cleaning yardley | Primary | pending | pending | Title, H1, H2 "How Deep Cleaning in Yardley Works", first 100 words | 4 uses including title/meta. Required placements (H1, title, first 100 words, one H2): all present. |
| scaling and root planing near me | Near-me | 2,900 | 7 | not used verbatim (on purpose) | Not written as a phrase. "Near me" ranking comes from proximity, the Google Business Profile, NAP and reviews; the page supports it with NAP, the service name and Yardley in the title and H1. |
| deep cleaning teeth near me | Near-me | 720 | 6 | not used verbatim (on purpose) | Not written as a phrase. "Near me" ranking comes from proximity, the Google Business Profile, NAP and reviews; the page supports it with NAP, the service name and Yardley in the title and H1. |
| deep cleaning teeth cost | Long-tail | pending | pending | H2 "Deep Cleaning Teeth Cost and Insurance" | H2 "Deep Cleaning Teeth Cost and Insurance" plus a cost FAQ. |
| is deep cleaning necessary | Question | pending | pending | H2 "Is Deep Cleaning Necessary?", H3 "Is deep cleaning necessary?" | Exact question as an H2 and as the first FAQ. |
| scaling and root planing | National (context) | 14,800 | 59 | Meta, H1, first 100 words | Natural mention only; this page won't rank nationally for it. |
| deep cleaning teeth | National (context) | 9,900 | 33 | H2 "Deep Cleaning Teeth Cost and Insurance" | Natural mention only; this page won't rank nationally for it. |

"Pending" volumes are verified when Semrush units are available.

**Kept off this page on purpose (one keyword, one page):**
- Gum surgery and advanced periodontal treatment terms → `/restorative-dentistry/periodontal-services/`
- Regular cleaning terms → `/preventative-care/teeth-cleaning-and-check-ups/`
- Arestin terms → `/preventative-care/arestin/`
- Laser gum terms → `/preventative-care/gum-disease-laser-therapy/`

## 2. Role of the page and local visibility

Owns "deep cleaning yardley" and supports two low-competition near-me terms (scaling and root planing near me 2.9K at KD 7; deep cleaning teeth near me 720 at KD 6). It's the entry point to the gum-health cluster: it explains why a deep cleaning is recommended, what happens, and what comes next (periodontal maintenance, Arestin, laser therapy, periodontal services). It handles the cost and "do I really need this?" objections without inventing prices.

## 3. AEO and GEO (AI answers and citations)

**Answer-first sentences written to be quoted:**
- "A deep cleaning, also called scaling and root planing, removes plaque and tartar from below the gumline and smooths the root surfaces so your gums can heal."
- "If you have gum disease, yes. A deep cleaning removes the plaque and tartar below the gumline that are causing the infection, which helps stop gum disease from getting worse and protects against tooth loss."
- "With the area numbed by local anesthetic, you'll usually feel pressure and vibration rather than sharp discomfort."

**Checkable facts on the page:** Pockets deeper than 3 mm; ultrasonic scaler; antimicrobial irrigation; local anesthesia may be used; antibiotic placement; benefits from the current page; gum disease risk factors; membership 15% off; CareCredit.

**Entities:** Radiant Smiles @ Floral Vale (`#dentist`), scaling and root planing, ultrasonic scaler, Arestin, periodontal maintenance, gum disease.

**NAP placement:** practice name in the opening paragraph and practice-specific FAQ answers; full NAP in the final CTA, matching the homepage schema and the Google Business Profile.

**FAQ approach:** 5 real patient questions, each answered in its first sentence (40 to 51 words), with the practice named where the answer is practice-specific. The FAQPage JSON-LD repeats them word for word.

## 4. Quality checks run

| Check | Result |
|---|---|
| Fact check against the fact sheet and site extracts | Steps and benefits from the current deep-cleaning page (refetched). "Even severe cases start non-surgical" and "surgery only where necessary" from the periodontal treatment-methods page. Numbing hedged to "can be numbed" / "may be used". Aftercare kept general (tender for a short time, gentle brushing, follow-up) with no timelines. |
| Claims and banned words | Scripted scan: no "best", "painless", "pain-free", "guaranteed", "specialist", "24/7", "state-of-the-art" or specialty titles; no em dashes; no unsourced statistics from the old site. |
| Internal links | 7 links, all to live URLs in the URL map; none to on-hold town pages, LPs or 301'd URLs. |
| Schema validity | Both JSON-LD blocks parse; every @type and property checked against the schema.org vocabulary (schema-dts) with no errors. |
| Schema ↔ visible content | WebPage name/description = title/meta; entity description copied word for word from the hero; FAQ questions and answers verbatim; NAP present. No mismatches. |
| Independent fact-check (7 Oct 2026) | 1 findings (0 errors, 1 warnings); all resolved: fixed, or verified against the current site, or moved to section 5. WARN fixed: "including deep cleanings" removed from the membership line. |
| Stats | words 1024 | Flesch 70 | title 53 | meta 149 | H1 "Deep Cleaning in Yardley, PA: Scaling and Root Planing" |

## 5. Information still needed from the practice

1. **Antimicrobial irrigation:** which agent is used, and is it routine?
2. **Visits:** is a full-mouth deep cleaning usually split into more than one visit?
3. **Sedation options** available for gum treatment (copy says "ask about sedation options").
4. **Price** for patients without insurance, if the practice wants it published.
5. **Membership discount on SRP:** does the plan's 15% off apply to scaling and root planing? If yes, the membership line can say so.

## Sources

- Site extracts: /preventative-care/deep-teeth-cleaning/ (refetched), /preventative-care/periodontal-maintenance/ (refetched), /restorative-dentistry/periodontal-services/treatment-methods/ (refetched), /patient-information/why-choose-us/
- Practice facts: `fact_sheet.md` (radiant-smiles.com crawled 7 Oct 2026) and the per-URL site extracts listed above
- [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- [Google: FAQPage structured data (FAQ rich results removed 7 May 2026)](https://developers.google.com/search/docs/appearance/structured-data/faqpage)
