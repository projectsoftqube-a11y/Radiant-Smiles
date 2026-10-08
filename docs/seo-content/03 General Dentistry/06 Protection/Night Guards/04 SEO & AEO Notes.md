# Night Guards: SEO, Local and AEO/GEO Notes

Final v1, 7 Oct 2026. Explains why the copy in `02 Content.md` is built the way it is.

## 1. Keyword map: which section targets what

| Keyword | Role | Vol / mo | KD | Where it's used | Notes |
|---|---|---|---|---|---|
| night guard yardley | Primary | pending | pending | Title, Meta, H1, H2 "How We Make Your Night Guard in Yardley", first 100 words | 5 uses including title/meta. Required placements (H1, title, first 100 words, one H2): all present. |
| night guard near me | Near-me | 260 | 44 | not used verbatim (on purpose) | Not written as a phrase. "Near me" ranking comes from proximity, the Google Business Profile, NAP and reviews; the page supports it with NAP, the service name and Yardley in the title and H1. |
| night guard dentist near me | Near-me | 40 | 0 | not used verbatim (on purpose) | Not written as a phrase. "Near me" ranking comes from proximity, the Google Business Profile, NAP and reviews; the page supports it with NAP, the service name and Yardley in the title and H1. |
| night guard for teeth grinding | Secondary | 8,100 | 56 | H2 "A Night Guard for Teeth Grinding Protects Your Dental Work" | Used in the H2 "A Night Guard for Teeth Grinding Protects Your Dental Work" and the first sentence under it. |
| custom night guard cost | Long-tail | pending | pending | H2 "Custom Night Guard Cost" | H2 "Custom Night Guard Cost" (no price published; cost given before the impression). |
| night guard | National (context) | 22,200 | 45 | Title, Meta, H1, H2 "Custom vs. Store-Bought Night Guards", H2 "How We Make Your Night Guard in Yardley", H2 "A Night Guard for Teeth Grinding Protects Your Dental Work" | Natural mention only; this page won't rank nationally for it. |

"Pending" volumes are verified when Semrush units are available.

**Kept off this page on purpose (one keyword, one page):**
- TMJ treatment terms: not targeted (TMJ treatment isn't a confirmed service)
- Sports mouthguard terms: not targeted (not a confirmed service)
- Crown terms → `/restorative-dentistry/dental-crowns/` (linked)

## 2. Role of the page and local visibility

Owns "night guard yardley" and supports "night guard near me" (260) and "night guard dentist near me" (40, KD 0). Its angle is the comparison visitors are making: custom lab-made versus store-bought, set out in a table, then the two-visit process and care tips.

## 3. AEO and GEO (AI answers and citations)

**Answer-first sentences written to be quoted:**
- "A custom night guard is a thin, lab-made mouthguard you wear while you sleep to protect your teeth from grinding and clenching."
- "You may need a night guard if you wake up with jaw pain or headaches, your teeth look worn or chipped, or someone hears you grinding at night."
- "A custom night guard fits more closely, because it's made in a dental lab from an impression of your teeth."

**Checkable facts on the page:** Custom guards are lab-made from an impression of your teeth (current site); the three guard types; bruxism signs from the current page (jaw pain, headaches, sleep disruption, damage).

**Entities:** Radiant Smiles @ Floral Vale (`#dentist`), bruxism, TMJ (as a symptom link only), dental crowns.

**NAP placement:** practice name in the opening paragraph and practice-specific FAQ answers; full NAP in the final CTA, matching the homepage schema and the Google Business Profile.

**FAQ approach:** 4 real patient questions, each answered in its first sentence (47 to 53 words), with the practice named where the answer is practice-specific. The FAQPage JSON-LD repeats them word for word.

## 4. Quality checks run

| Check | Result |
|---|---|
| Fact check against the fact sheet and site extracts | Bruxism signs and the three guard types from the current night-guard page. Two visits stated because the guards are lab-made from an impression; no turnaround time given. TMJ mentioned only as a possible cause of jaw pain. No price. |
| Claims and banned words | Scripted scan: no "best", "painless", "pain-free", "guaranteed", "specialist", "24/7", "state-of-the-art" or specialty titles; no em dashes; no unsourced statistics from the old site. |
| Internal links | 4 links, all to live URLs in the URL map; none to on-hold town pages, LPs or 301'd URLs. |
| Schema validity | Both JSON-LD blocks parse; every @type and property checked against the schema.org vocabulary (schema-dts) with no errors. |
| Schema ↔ visible content | WebPage name/description = title/meta; entity description copied word for word from the hero; FAQ questions and answers verbatim; NAP present. No mismatches. |
| Independent fact-check (7 Oct 2026) | 1 findings (0 errors, 1 warnings); all resolved: fixed, or verified against the current site, or moved to section 5. WARN fixed: "takes two visits" softened to "usually takes two visits" in body, FAQ and schema. |
| Stats | words 943 | Flesch 88 | title 51 | meta 146 | H1 "Custom Night Guards in Yardley, PA" |

## 5. Information still needed from the practice

1. **Price** for a custom night guard, if the practice wants it published (cost is one of the main searches).
2. **Impression or scan:** is the guard made from a traditional impression or an iTero digital scan?
3. **Turnaround:** how long does the lab take? Adding it would answer a common question.
4. **Guard types:** hard, soft or dual-laminate options?
5. **Night guard process:** confirm two visits, and whether impressions are physical or iTero digital scans.

## Sources

- Site extract: /preventative-care/professional-night-guards/ (refetched)
- Practice facts: `fact_sheet.md` (radiant-smiles.com crawled 7 Oct 2026) and the per-URL site extracts listed above
- [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- [Google: FAQPage structured data (FAQ rich results removed 7 May 2026)](https://developers.google.com/search/docs/appearance/structured-data/faqpage)
