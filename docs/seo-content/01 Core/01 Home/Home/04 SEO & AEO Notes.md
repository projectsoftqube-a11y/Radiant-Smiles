# Home: SEO, Local and AEO/GEO Notes

Final v1, 7 Oct 2026. Explains why the copy in `02 Content.md` is built the way it is.

## 1. Keyword map: which section targets what

| Keyword | Vol / mo | KD | Where it's used | Notes |
|---|---|---|---|---|
| **dentist yardley pa** (primary) | 480 | n/a | Title tag, meta description, H1 ("Dentist in Yardley, PA for…"), first sentence of the hero, closing H2 "Book a Visit With Your Dentist in Yardley, PA" | **Not ranking today** (agency report, Sep 2026, -19% YoY demand). The biggest local term, so it sits in every high-weight slot. 3 exact uses in the body plus title and meta: clear without stuffing. |
| dentist in yardley pa | pending | pending | Same phrasing as the primary ("Dentist in Yardley, PA") | Google treats the "in" and the comma as the same query. |
| dentist yardley | pending | pending | Covered by the primary and "Dental Services at Our Yardley Office" | Same intent; not forced as an exact phrase. |
| yardley dentist | pending | pending | "Family Dentistry in Yardley…": "As a Yardley dentist for the whole family" | 1 exact use. |
| dentist 19067 | pending | pending | Quick-facts strip, hours/location NAP, areas section ("If you live or work in the 19067 ZIP code"), FAQ, schema `postalCode` | 6 ZIP mentions. The exact phrase "dentist 19067" isn't forced. |
| radiant smiles yardley (brand) | pending | pending | Reviews H2 "What Patients Say About Radiant Smiles in Yardley", hero entity sentence, FAQs, NAP, schema `name` | Brand plus place in one heading ties the brand to Yardley for search and AI tools. |
| family and cosmetic dentist yardley | pending | pending | H1 ("Dentist in Yardley, PA for Family, Cosmetic and Restorative Care"); hero says "family dentist in Yardley, PA" | Long-tail, reinforced by the H1. |
| dentist near me | 823,000 | 67 | **Not written as a phrase** | "Near me" results come from proximity, the Google Business Profile, NAP consistency and reviews, not the words on the page. The page supports it with NAP, hours, map, `areaServed` and Dentist schema. |

**Kept off this page on purpose (one keyword, one page):**
- Town terms (Lower Makefield, Morrisville, Washington Crossing, New Hope, Trenton, Ewing, Hopewell, Pennington, Lawrenceville, Hamilton, Mercer County) → each location page. Home only links to them.
- Service terms (implants, Invisalign, whitening, emergency, family dentist yardley pa, cosmetic dentist yardley pa) → each service or hub page. "Family dentist yardley pa" (#14, slipping) belongs to `/family-dentistry/`; the H2 here says "Family Dentistry in Yardley" without the "pa" form to avoid competing for the exact phrase.
- Offer and no-insurance terms ("affordable dentist yardley", "new patient dental special", "dentist without insurance") → `/special-offers/`.
- Newtown, Langhorne, Levittown and Fairless Hills: on hold (client overlap). Not named, not linked, not in schema.
- "best dentist yardley" (About brief): never used. "Best" is a banned claim.

## 2. How this page supports local visibility

1. **Unmistakable location signals.** "Yardley, PA", ZIP 19067, Floral Vale Boulevard and Lower Makefield Township sit in the hero, the hours/location block, the areas section, the FAQs and the schema, all with identical NAP.
2. **Full Dentist entity.** The most specific LocalBusiness subtype, `Dentist`, carries the address, phone, hours (including Saturday), offers, membership plan, payment methods, both dentists and the full service catalog. Every other page references it by `@id`, so there is one entity for Google and AI tools to resolve.
3. **Saturday hours up front.** Saturday 8–2 is in the hero facts strip, the hours section intro, a highlighted table row, an FAQ and the final CTA. It is a real differentiator for commuters and a frequent "open Saturday" query modifier.
4. **Service hub.** 32 service links tell Google the full scope of the practice and pass homepage authority to every service page. That matters for "[service] near me" searches, where the homepage and service pages are the candidates.
5. **Hub for the location pages.** "Serving Yardley, Morrisville and Nearby New Jersey Towns" links the 11 live location pages and `/areas-we-serve/`. Authority flows down, and the homepage doesn't compete with those pages for town terms.
6. **Conversion signals.** Click-to-call in the hero, emergency block and close; a directions button; and the appointment request link. These also turn local traffic into patients.
7. **Real reviews** with first name, initial and month add trust for people. Review volume and rating on the Google Business Profile carry the ranking weight.

**Off-page work this page depends on** (not part of the copy):
- **Google Business Profile:** primary category "Dentist", identical NAP and hours (fix Tuesday first), website URL pointing to `/`, services and offers listed, regular photos and review replies.
- **Consistent listings:** WebMD lists the city as Morrisville, older hours, "DDS" and two dentists not on the practice site (Dr. Nikuni R Zalavadia; AEDIT lists August Metz, DMD). Correct those listings, plus Yelp, Healthgrades, Zocdoc, Bing Places, Apple Business Connect and insurance-carrier directories.
- **Bing Webmaster Tools + IndexNow:** ChatGPT search and Copilot draw on Bing's index.

## 3. How this page supports AEO and GEO (AI answers and citations)

Google's guidance says there is no special markup for AI Overviews or AI Mode: the page must be indexable, text-based, well linked, with structured data that matches the visible text. On top of that, the page is built so any single sentence can be quoted accurately.

**Answer-first sentences written to be quoted:**
- "Radiant Smiles @ Floral Vale is a family dentist in Yardley, PA, where two Temple-trained dentists use dental microscopes and 3D imaging so repairs fit right, and explain what they found, and what it costs, before anything starts."
- "We're open six days a week, including Saturday from 8 am to 2 pm."
- "Our membership plan covers your routine care for one yearly fee and takes 15% off your treatment."
- "We reserve same-day emergency openings every business day, and we're open Saturday mornings."

**Entities covered:** the practice (name, address, phone, hours), both dentists (degree, school, languages, memberships), named technology (dental microscopes, cone beam CT, iTero, digital X-rays, lasers, intraoral camera), named insurers (Aetna, Cigna PPO, Delta Dental, Guardian, Horizon Blue Cross, MetLife, UnitedHealthcare), CareCredit, and 12 served areas.

**Checkable facts:** exact offer prices and inclusions, the membership table line by line, the 30-minute emergency exam, the CareCredit 6-month / $200 terms, and the hours by day. AI systems prefer concrete, attributable facts over marketing language.

**NAP placement:** quick-facts strip (address), hours/location block, FAQ 1, footer (site-wide), schema.

**FAQ approach:** 9 real patient questions (location, Saturday hours, dentists, insurance, no insurance, same-day emergencies, children, implants, New Jersey patients). Each answer is 42–48 words and starts with the direct answer. Practice-specific answers name the practice.

**No invented claims.** Nothing on the page is unverifiable ("best", "painless", "24/7", success rates, review stars). Health content (YMYL) is held to a higher standard, and AI tools are less likely to repeat claims that conflict with other sources.

## 4. Quality checks run on this draft

| Check | Result |
|---|---|
| Title / meta length | 53 / 143 characters (limits 60 / 155) |
| Primary keyword placement | H1, title, meta, first 100 words (first sentence), one H2 (final CTA): all pass |
| Length | About 1,760 words after the QA pass (hero shortened to the conversion-review version; Candice C. review moved next to the microscope claim). Before the QA pass: about 1,770 words including service lists, tables and FAQs; about 1,530 without the link lists and tables (brief: 900–1,200). The overage is the 32-link service list, the offers, membership and hours tables and 9 FAQs, all requested and all useful as internal links or extractable facts. |
| Readability | Flesch reading ease about 59 (grade 8–9). Fine for a healthcare page. |
| Banned words and claims | None found (scripted scan: best, painless, guaranteed, specialist, 24/7, state-of-the-art, comprehensive, specialty titles, "in-network" and the AI-tell list). No em dashes. |
| Internal links | All links are in the live URL map. No on-hold towns, no old merged URLs, no `/lp/` pages. |
| Schema validity | All JSON parses. Every `@type` and property checked against the schema.org vocabulary (schema-dts, via the content engine's validator): no errors. No Review/AggregateRating. |
| Schema ↔ visible content | Script check: WebPage name/description equal the title/meta; all 9 FAQ questions and answers verbatim; catalog built from the visible lists (5 groups, 32 services); hours, 5 offer entries and 12 areas match the page. |
| Independent fact-check (7 Oct 2026) | 8 findings (0 errors, 8 warnings); all resolved: fixed, or verified against the current site, or moved to section 5. Fixed: "under magnification" removed from the first-visit exam; "all happen in one office" → "Most…"; "more than 40 PPO plans" → "more than 40 dental plans, including many PPO plans" (body, FAQ, schema); metal-free → "options are available"; intraoral camera clause → "for clear, enlarged images of your teeth"; first visit → "around their first birthday" (body and FAQ); FAQ rich-results note → "stopped on 7 May 2026". Tuesday: hours FAQ answer and schema added to the handoff's Tuesday sign-off checklist. |
| Conversion review (7 Oct 2026) | Applied: new problem-first hero (microscopes worded as "so repairs fit right", not as an exam tool, to stay within the fact-check); H2 "Technology for Precise, Comfortable Care" → "Microscopes and 3D Imaging, So Repairs Fit Right"; offers section moved directly after Office Hours; Candice C. quote placed under the technology list with the lead-in "What that looks like in practice:" (plain text, no Review markup). Not applied: replacing the 32-link service list with category cards (optional in the review; kept for internal linking, can be done in design). |
| Fact check (writer) | Every fact traced to the fact sheet. Softened: "1/6 the radiation" → "less radiation than traditional film" (unsourced figure); IV sedation not named ("ask about sedation options"); implants worded as "we offer" (placement in-house not confirmed); the "4.14 / 50 reviews" figure left out. |

## 5. Information still needed from the practice

1. **Tuesday hours [CONFIRM].** The site prints "8:00 AM - 5:00 AM". Copy and schema assume 8:00 am – 5:00 pm. Confirm and match the Google Business Profile.
2. **"Since 2009" [CONFIRM].** No longer in the copy (the conversion-review hero dropped it). Add `foundingDate` to schema once confirmed.
3. **Dr. Bhalala's degree [CONFIRM].** Site says DMD; WebMD says DDS.
4. **Current team [CONFIRM].** WebMD and AEDIT name other dentists. Confirm only Dr. Bhalala and Dr. Gadria treat patients.
5. **Offer terms [CONFIRM].** No expiry dates or fine print are published for the $89 visit or the implant, Invisalign and whitening discounts. Can offers be combined with insurance or the membership plan?
6. **Technology in-house [CONFIRM].** Microscopes, cone beam CT, iTero, lasers, intraoral camera, electric hand-pieces: all current and in-house?
7. **Mercury-free.** The current homepage claims "biocompatible, mercury-free treatments". The new copy says only "tooth-colored, metal-free materials". Confirm before adding "mercury-free".
8. **Sedation [CONFIRM].** Which options are offered (nitrous oxide is mentioned on the root canal page; IV sedation on the wisdom-teeth page)?
9. **Implants and wisdom teeth [CONFIRM].** Placed and removed in-house, or referred for surgical steps?
10. **Invisalign [CONFIRM certified provider].** The trademark is used because the current site uses it.
11. **Texting.** Does (215) 860-4600 accept texts? If yes, add a "Call or Text" button and `sms:` link.
12. **Reviews.** Source of the quotes (Google?) and permission to show names. Is a live Google review widget wanted?
13. **For schema:** Google Business Profile URL and place ID, social profile URLs, map coordinates, logo file, real office and team photos.
14. **Insurance wording.** Confirm the PPO names used on the page (Aetna, Cigna PPO, Delta Dental, Guardian, Horizon Blue Cross, MetLife, UnitedHealthcare) are current. The page says "accept", never "in-network".
15. **Intraoral camera.** Is it used to show patients their images chairside? If yes, "so you can see what we see" can come back.
16. **Crowns.** Are all crowns metal-free, or is porcelain-bonded-to-gold still offered? Copy says "options are available".

## Sources

- [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- [Google: LocalBusiness structured data](https://developers.google.com/search/docs/appearance/structured-data/local-business)
- [Google: Review snippet guidelines (self-serving reviews)](https://developers.google.com/search/docs/appearance/structured-data/review-snippet)
- Practice facts: `00 Reference/00 Fact Sheet.md` (radiant-smiles.com homepage, contact-us, about-us, both doctor bios, patient-reviews, special-offers, insurance-payment-options, carecredit, why-choose-us, technology and emergency pages, crawled 7 Oct 2026). Keyword data: previous agency rank report (Sep 2026) and the Keyword Map & Sitemap workbook.
