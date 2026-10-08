# Emergency Dentistry: SEO, Local and AEO/GEO Notes

Final v1, 7 Oct 2026. Explains why the copy in `02 Content.md` is built the way it is.

## 1. Keyword map: which section targets what

| Keyword | Role | Vol / mo | KD | Where it's used | Notes |
|---|---|---|---|---|---|
| emergency dentist yardley | Primary | pending | pending | Title, H1, H2 "Same-Day Emergency Dentist in Yardley: Call Us First", first 100 words | 4 uses including title/meta. Required placements (H1, title, first 100 words, one H2): all present. |
| emergency dentist yardley pa | Local secondary | pending | pending | Title, H1, first 100 words | "Emergency Dentist in Yardley, PA" in the H1 and title. |
| emergency dentist near me | Near-me | 135,000 | 11 | not used verbatim (on purpose) | Not written as a phrase. Supported by "emergency dentist" + Yardley in the title, H1 and opening, the same-day promise, NAP and the call button. 135K/mo at KD 11: the biggest local opportunity on the site. |
| same day emergency dentist | Near-me | 260 | 4 | H2 "Same-Day Emergency Dentist in Yardley: Call Us First" | Close variant in the H2 "Same-Day Emergency Dentist in Yardley: Call Us First" and the title ("Same-Day Appointments"). |
| emergency tooth extraction near me | Near-me | 12,100 | 23 | not used verbatim (on purpose) | H2 "Emergency Tooth Extraction" with a link to the extractions page; no same-day extraction promise. |
| toothache relief | Long-tail | pending | pending | body | In the Toothache section ("toothache relief may come from..."). |
| broken tooth | Long-tail | pending | pending | first 100 words | 2 exact or close-variant use(s). |
| knocked out tooth | Long-tail | pending | pending | Meta, H2 "Knocked-Out Tooth", H3 "What should I do with a knocked-out tooth?", first 100 words | 6 exact or close-variant use(s). |
| cracked tooth | Long-tail | pending | pending | H2 "Broken or Cracked Tooth" | 2 exact or close-variant use(s). |
| tooth abscess | Long-tail | pending | pending | not used verbatim | H2 "Abscess or Swelling" (close variant). |
| emergency dentist no insurance | Long-tail | pending | pending | not used verbatim | H2 "Emergency Care Without Insurance" and the FAQ "Do you treat dental emergencies for patients without insurance?". |
| what is a dental emergency | Question | pending | pending | not used verbatim | FAQ "What counts as a dental emergency?" (close variant, answer-first). |
| emergency dental appointment | National (context) | 1,000 | 44 | body | Natural mention only; this page won't rank nationally for it. |
| emergency dentist | National (context) | 165,000 | 12 | Title, H1, H2 "Same-Day Emergency Dentist in Yardley: Call Us First", first 100 words | Natural mention only; this page won't rank nationally for it. |

"Pending" volumes are verified when Semrush units are available.

**Kept off this page on purpose (one keyword, one page):**
- "emergency dentist trenton nj" → `/emergency-dentist-trenton-nj/` (conditional page; not linked from here until it's built)
- Paid emergency LP → `/lp/emergency-dentist/` (noindex, never linked from site pages)
- Root canal, extraction and crown terms → their own pages (linked)
- "24 hour emergency dentist" terms: never targeted (the practice isn't open 24/7)

## 2. Role of the page and local visibility

The highest-opportunity page in this section: it owns "emergency dentist yardley" and is the practice's page for "emergency dentist near me" (135K, KD 11). It absorbs `/emergency-dentistry/emergency-dentist/` with a 301. The page uses a problem-first layout: call first, then what to do for each emergency, then when to go to the ER, then cost without insurance. Every promise is one the practice publishes: same-day slots every business day, Saturday 8 to 2, a focused 30-minute exam, and $65 emergency exams for members. Local signals: Yardley in the title, H1, opening and H2; full hours table; NAP in the final CTA.

## 3. AEO and GEO (AI answers and citations)

**Answer-first sentences written to be quoted:**
- "As an emergency dentist in Yardley, we reserve same-day emergency appointments every business day and also see patients on Saturdays from 8 am to 2 pm."
- "A dental emergency is anything that causes severe pain, bleeding, swelling or damage to a tooth."
- "Usually, yes. Radiant Smiles @ Floral Vale reserves same-day emergency appointments every business day and sees patients on Saturdays from 8 am to 2 pm."
- "A knocked-out tooth is most likely to be saved if a dentist sees you as soon as possible, ideally within 30 minutes."

**Checkable facts on the page:** Same-day emergency slots reserved every business day; Saturday 8 am to 2 pm; focused 30-minute exam; knocked-out tooth in milk or saliva (site) and the AAE's 30-minute guidance; $65 emergency exam with X-ray for members; closed Sunday; full weekly hours.

**Entities:** Radiant Smiles @ Floral Vale (`#dentist`), Dr. Urvishkumar Bhalala, Dr. Jaspreet Gadria, American Association of Endodontists, American Dental Association, root canal, tooth extraction, dental crown.

**NAP placement:** practice name in the opening paragraph and practice-specific FAQ answers; full NAP in the final CTA, matching the homepage schema and the Google Business Profile.

**FAQ approach:** 6 real patient questions, each answered in its first sentence (39 to 54 words), with the practice named where the answer is practice-specific. The FAQPage JSON-LD repeats them word for word.

## 4. Quality checks run

| Check | Result |
|---|---|
| Fact check against the fact sheet and site extracts | Emergency facts from the current emergency pages and the fact sheet. Not used: "walk-in accommodations attempted" (not in the fact sheet; call-first instead), "5-Star Rated Emergency Dentist" (no source), any 24/7 or Sunday claim. First-aid steps checked against the ADA (toothache, broken tooth, knocked-out tooth) and the AAE (pick up by the crown, 30 minutes). Timing promises softened ("usually, yes", "whenever possible"); no same-day extraction promise. The $65 exam is stated as members-only. |
| Claims and banned words | Scripted scan: no "best", "painless", "pain-free", "guaranteed", "specialist", "24/7", "state-of-the-art" or specialty titles; no em dashes; no unsourced statistics from the old site. No 24/7, Sunday or walk-in wording. |
| Internal links | 7 links, all to live URLs in the URL map; none to on-hold town pages, LPs or 301'd URLs. |
| Schema validity | Both JSON-LD blocks parse; every @type and property checked against the schema.org vocabulary (schema-dts) with no errors. |
| Schema ↔ visible content | WebPage name/description = title/meta; entity description copied word for word from the hero; FAQ questions and answers verbatim; NAP present. No mismatches. |
| Independent fact-check (7 Oct 2026) | 2 findings (1 errors, 1 warnings); all resolved: fixed, or verified against the current site, or moved to section 5. ERROR fixed (safety): the knocked-out tooth step and FAQ (and FAQPage schema) now say only adult (permanent) teeth go back in the socket and never a baby tooth (Smiles for Life / AAPD-IADT: avulsed primary teeth are not re-implanted). WARN fixed: the new-patient emergency FAQ answer now reads "Call (215) 860-4600 and we'll tell you how soon we can see you" and the question moved to section 5. Conversion review applied: "focused 30-minute exam" everywhere; $65 labelled members-only with "what you need and what it costs before anything starts"; mid-page call CTAs after the knocked-out tooth steps and the abscess section; Avni D. review quote above the final CTA (plain text, no Review markup). |
| Stats | words 1395 | Flesch 78 | title 56 | meta 136 | H1 "Emergency Dentist in Yardley, PA" |

## 5. Information still needed from the practice

1. **Tuesday hours:** the current site prints "8:00 AM - 5:00 AM". Confirm 8:00 am to 5:00 pm; the hours table carries a [CONFIRM] note until then.
2. **Emergency fee for non-members:** what does a new patient without insurance or membership pay for the focused 30-minute exam and X-ray? Publishing it would strengthen the "no insurance" section.
3. **Walk-ins:** the old page says walk-ins are accommodated when possible. Left out (call first). Confirm whether to mention.
4. **After hours and Sundays:** is there a voicemail message or on-call option? Copy makes no after-hours promise.
5. **Same-day extractions:** can simple extractions be done at the emergency visit? Copy only says treatment begins at the visit whenever possible.
6. **Saturday emergency slots:** confirm emergencies are seen on Saturdays (copy says "see emergencies on Saturday mornings").
7. **New patients for emergencies:** confirm new patients are seen for same-day emergencies. Copy only says "call and we'll tell you how soon we can see you".

## Sources

- Site extracts: /emergency-dentistry/, /emergency-dentistry/emergency-dentist/, /contact-us/, /patient-information/insurance-payment-options/
- [ADA MouthHealthy: Dental emergencies](https://www.mouthhealthy.org/all-topics-a-z/dental-emergencies) (toothache, broken and knocked-out tooth first aid)
- [AAE: Knocked-out teeth](https://www.aae.org/patients/dental-symptoms/knocked-out-teeth/) (hold by the crown, see a dentist within 30 minutes)
- [Smiles for Life: Avulsion of primary teeth](https://www.smilesforlifeoralhealth.org/topic/avulsion-of-primary-teeth) (knocked-out baby teeth are not put back)
- Practice facts: `fact_sheet.md` (radiant-smiles.com crawled 7 Oct 2026) and the per-URL site extracts listed above
- [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- [Google: FAQPage structured data (FAQ rich results removed 7 May 2026)](https://developers.google.com/search/docs/appearance/structured-data/faqpage)
