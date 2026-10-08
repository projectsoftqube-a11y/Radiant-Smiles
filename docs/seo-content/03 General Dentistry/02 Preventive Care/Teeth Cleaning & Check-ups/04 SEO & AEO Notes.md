# Teeth Cleaning & Checkups: SEO, Local and AEO/GEO Notes

Final v1, 7 Oct 2026. Explains why the copy in `02 Content.md` is built the way it is.

## 1. Keyword map: which section targets what

| Keyword | Role | Vol / mo | KD | Where it's used | Notes |
|---|---|---|---|---|---|
| dental cleaning yardley | Primary | pending | pending | Title, H1, H2 "Book Your Dental Cleaning in Yardley", first 100 words | 4 uses including title/meta. Required placements (H1, title, first 100 words, one H2): all present. |
| dental exam yardley | Local secondary | pending | pending | body | 1 exact or close-variant use(s). |
| teeth cleaning near me | Near-me | 60,500 | 6 | not used verbatim (on purpose) | Not written as a phrase. "Near me" ranking comes from proximity, the Google Business Profile, NAP and reviews; the page supports it with NAP, the service name and Yardley in the title and H1. |
| dental checkup near me | Near-me | 480 | 56 | not used verbatim (on purpose) | Not written as a phrase. "Near me" ranking comes from proximity, the Google Business Profile, NAP and reviews; the page supports it with NAP, the service name and Yardley in the title and H1. |
| dental x ray near me | Near-me | 320 | 8 | not used verbatim (on purpose) | Not written as a phrase. "Near me" ranking comes from proximity, the Google Business Profile, NAP and reviews; the page supports it with NAP, the service name and Yardley in the title and H1. |
| dental exam and cleaning | Long-tail | pending | pending | not used verbatim | Covered by close variants; not forced. |
| teeth cleaning cost | Long-tail | pending | pending | H2 "Teeth Cleaning Cost and Insurance" | Matched by the H2 "Teeth Cleaning Cost and Insurance" and the FAQ "How much is a teeth cleaning without insurance?". |
| digital dental x rays | Long-tail | pending | pending | H2 "Digital Dental X-Rays" | 2 exact or close-variant use(s). |
| how often should you get your teeth cleaned | Question | pending | pending | H3 "How often should you get your teeth cleaned?" | 1 exact or close-variant use(s). |
| are dental x rays safe | Question | pending | pending | H3 "Are dental X-rays safe?" | 1 exact or close-variant use(s). |
| dental cleaning | National (context) | 27,100 | 52 | Title, Meta, H1, H2 "Dental Cleaning and Checkup FAQs", H2 "Book Your Dental Cleaning in Yardley", H3 "How long does a dental cleaning take?" | Natural mention only; this page won't rank nationally for it. |
| dental checkup | National (context) | 5,400 | 46 | not used verbatim | Natural mention only; this page won't rank nationally for it. |

"Pending" volumes are verified when Semrush units are available.

**Kept off this page on purpose (one keyword, one page):**
- Deep cleaning and scaling and root planing terms → `/preventative-care/deep-teeth-cleaning/`
- Oral cancer screening terms → `/preventative-care/oral-cancer-screening/` (summarised and linked here)
- Preventive dentistry hub term → `/preventative-care/`
- New patient offer landing terms → paid LP `/lp/new-patient-special/` (not linked from site pages)

## 2. Role of the page and local visibility

Owns "dental cleaning yardley" and absorbs `/preventative-care/dental-exam/` (301). It's the most valuable preventive page: "teeth cleaning near me" is 60.5K searches a month at KD 6. The page answers the cost question with the published $89 new patient visit for uninsured patients and the $150 membership plan, explains the visit step by step, and routes gum-disease cases to the deep cleaning and periodontal maintenance pages. Local signals: Yardley in title, H1, opening sentence and the cost section; NAP in the final CTA.

## 3. AEO and GEO (AI answers and citations)

**Answer-first sentences written to be quoted:**
- "A dental cleaning and checkup removes the plaque and tartar that brushing misses and checks your teeth and gums for problems while they're still small."
- "Most people should have their teeth cleaned twice a year."
- "A regular dental cleaning and checkup at Radiant Smiles @ Floral Vale takes about an hour."

**Checkable facts on the page:** Visit about an hour (new patients longer); 7-step first visit from the current site; X-rays from another office accepted if taken in the past 12 months; prophy paste polish; twice-yearly recommendation; $89 new patient visit (cleaning, X-rays, exam, uninsured); $150/yr membership with 2 cleanings, exams, X-rays, $75 per additional family member and 15% off; named PPO carriers.

**Entities:** Radiant Smiles @ Floral Vale (`#dentist`), Yardley PA, dental cleaning, dental exam, digital X-rays, oral cancer screening, full mouth debridement, scaling and root planing, periodontal maintenance.

**NAP placement:** practice name in the opening paragraph and practice-specific FAQ answers; full NAP in the final CTA, matching the homepage schema and the Google Business Profile.

**FAQ approach:** 5 real patient questions, each answered in its first sentence (41 to 51 words), with the practice named where the answer is practice-specific. The FAQPage JSON-LD repeats them word for word.

## 4. Quality checks run

| Check | Result |
|---|---|
| Fact check against the fact sheet and site extracts | Visit steps, timings and benefits come from the current teeth-cleaning and dental-exam pages. "The ADA recommends twice a year" (old exam page) changed to the practice's own recommendation, because the ADA doesn't set one interval for everyone. Digital X-ray radiation written as "a fraction of the radiation of older film X-rays" rather than the unsourced "1/6". "Most insurances cover two visits" softened to "many plans cover two cleanings a year". |
| Claims and banned words | Scripted scan: no "best", "painless", "pain-free", "guaranteed", "specialist", "24/7", "state-of-the-art" or specialty titles; no em dashes; no unsourced statistics from the old site. |
| Internal links | 7 links, all to live URLs in the URL map; none to on-hold town pages, LPs or 301'd URLs. |
| Schema validity | Both JSON-LD blocks parse; every @type and property checked against the schema.org vocabulary (schema-dts) with no errors. |
| Schema ↔ visible content | WebPage name/description = title/meta; entity description copied word for word from the hero; FAQ questions and answers verbatim; NAP present. No mismatches. |
| Independent fact-check (7 Oct 2026) | 0 findings (0 errors, 0 warnings). Conversion review (7 Oct 2026) applied: hero now leads with what the visit includes and the explain-first promise (no magnification claim, which the fact-check flagged as unsourced on other pages); the "Regular cleanings help you" list fixed; "plaque, tartar and calculus" changed to "plaque and tartar"; Avni D. review quote added after "no pressure to decide that day" (plain text, no Review markup). MedicalProcedure description updated to the new first hero sentence. |
| Stats | words 1112 | Flesch 72 | title 50 | meta 144 | H1 "Dental Cleaning in Yardley, PA: Checkups, Exams and X-Rays" |

## 5. Information still needed from the practice

1. **$89 new patient visit:** expiry date or conditions? Is it for adults and children?
2. **Membership plan pricing note** "(adults $65, children $60)" on the insurance page: what does it refer to?
3. **Full mouth debridement:** still offered as a separate visit?
4. **Existing X-rays:** confirm the office accepts X-rays taken elsewhere in the past 12 months.

## Sources

- Site extracts: /preventative-care/teeth-cleaning-and-check-ups/, /preventative-care/dental-exam/, /preventative-care/, /special-offers/, /patient-information/insurance-payment-options/
- Practice facts: `fact_sheet.md` (radiant-smiles.com crawled 7 Oct 2026) and the per-URL site extracts listed above
- [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- [Google: FAQPage structured data (FAQ rich results removed 7 May 2026)](https://developers.google.com/search/docs/appearance/structured-data/faqpage)
