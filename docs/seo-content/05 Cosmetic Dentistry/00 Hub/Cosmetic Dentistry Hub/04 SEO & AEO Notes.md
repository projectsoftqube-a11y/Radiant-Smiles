# Cosmetic Dentistry Hub: SEO, Local and AEO/GEO Notes

Final v1, 7 Oct 2026. Explains why the copy in `02 Content.md` is built the way it is.

## 1. Keyword map: which section targets what

| Keyword | Vol / mo | KD | Where it's used | Notes |
|---|---|---|---|---|
| **cosmetic dentist yardley pa** (primary) | pending | pending | Title tag, meta description, H1, answer block (first sentence), closing H2 "Book a Visit With a Cosmetic Dentist in Yardley, PA" | Currently #16. Written as "cosmetic dentist in Yardley, PA", which Google treats as the same query. |
| cosmetic dentist yardley | pending | pending | Covered by the primary in H1/title; body "At our Yardley office…" | Same intent as the primary; not repeated to avoid stuffing. |
| cosmetic dentist near me | 49,500 | 33 | **Not written as a phrase** | Near-me rankings come from proximity, the Google Business Profile and NAP consistency. The page supports it with NAP, the Yardley address in the answer block and the `#dentist` entity. |
| best cosmetic dentist near me | 3,600 | 46 | **Not written as a phrase** | "Best" is banned in copy (claims rule). Matched by local signals only. |
| smile makeover | 5,400 | 6 | H2 "Smile Makeovers: Several Treatments, One Plan", H3 "How we plan your smile makeover", FAQ "What is a smile makeover?", meta description | Low KD. Kept as a section on the hub, not a separate page (one keyword, one page; avoids a thin page). |
| cosmetic dentistry procedures | 8,100 | 25 | H2 "Cosmetic Dentistry Procedures at Radiant Smiles" + the five-item linked list | The list doubles as the hub's internal-link block. |
| what is cosmetic dentistry | 1,000 | 13 | H2 "What Is Cosmetic Dentistry?" and FAQ of the same name | Both start with a one-sentence definition. |
| how much does cosmetic dentistry cost | 140 | 13 | H2 "Cosmetic Dentistry Cost and Financing" and FAQ "How much does cosmetic dentistry cost?" | Answers with the two published offers; no invented price ranges. |
| cosmetic dentistry / cosmetic dentist | 165,000 / 33,100 | 70 / 19 | Natural mentions only | National context terms; not a ranking target. |

**Kept off this page on purpose (one keyword, one page):**
- "porcelain veneers yardley pa", "veneers near me" → `/cosmetic-dentistry/dental-veneers-dentistry/`
- "teeth whitening yardley pa" → `/cosmetic-dentistry/teeth-whitening/`
- "invisalign yardley pa", "invisalign cost" → the Invisalign pages
- "dental bonding", "inlays and onlays" → their own pages
The hub summarises each in two short paragraphs and links down; it doesn't compete for their terms.

## 2. Role of the page

1. **Category hub.** Links to all seven cosmetic child pages (five procedure links plus Invisalign Teen and Invisalign Cost), with descriptive anchors. The ItemList in the schema mirrors those links.
2. **Smile makeover owner.** The only page that targets "smile makeover" (5,400, KD 6), with a real explanation of sequencing (straighten → whiten → match restorations), which is the useful, citable part competitors usually skip.
3. **Conversion.** Three CTA placements (hero, after the makeover plan, final). The two published offers (whitening, Invisalign) appear in the relevant sections and in the cost section.
4. **Local signals.** Full NAP in the answer block (address and phone) and the final CTA, plus service-area towns in the closing line (Yardley, Lower Makefield, Morrisville, Washington Crossing, Trenton, Ewing). No on-hold towns are named or linked.

## 3. AEO/GEO (AI answers and citations)

The page ranks #16 and the SERP shows an AI Overview that doesn't cite us. The fix is a quotable, self-contained answer block directly under the H1:

> "Radiant Smiles @ Floral Vale is a cosmetic dentist in Yardley, PA, at 117 Floral Vale Boulevard. Dr. Urvishkumar Bhalala and Dr. Jaspreet Gadria offer porcelain veneers, teeth whitening, dental bonding, inlays and onlays, and Invisalign clear aligners, and plan smile makeovers that combine them. Call (215) 860-4600 to book." (50 words)

It names the entity, place, address, both dentists, the full service list and the phone in one paragraph. The developer handoff requires it to be the first `<p>` in the main content.

Other answer-first sentences written to be quoted:
- "Cosmetic dentistry is dental treatment that improves how your teeth look: their color, shape, size, alignment and the spaces between them."
- "A smile makeover is a plan that combines two or more cosmetic treatments to change your whole smile, rather than fixing one tooth at a time."
- "Whitening only changes the color of natural teeth; it does not change veneers, crowns or fillings." (consistent with ADA MouthHealthy)

**Checkable facts:** whitening trays ready in 1-2 days, worn 3-4 hours nightly for 1-2 weeks; bonding lasts 3-5 years; inlays/onlays 10-30 years; Invisalign 20-22 hours a day, new aligners about every 2 weeks, check-ups about every 6 weeks, about 1 year for adults; offers with regular prices; membership $150/yr with 15% off; named technology (dental microscopes, iTero, digital X-rays, intraoral camera); both dentists' school.

**Entities:** Radiant Smiles @ Floral Vale (`#dentist`), Dr. Urvishkumar Bhalala, Dr. Jaspreet Gadria, Temple University Kornberg School of Dentistry, Invisalign, iTero, CareCredit, Yardley PA.

**FAQ approach:** seven real questions, each answered in its first sentence in 44-55 words; practice-specific answers name the practice.

## 4. Quality checks run

| Check | Result |
|---|---|
| Fact-check against the fact sheet and site extracts | Every price, timeline and credential traced to `fact_sheet.md` or `site/` extracts. Removed during review: a "free consult" in the brief's meta (free consultation applies only to Invisalign and implants), a pronoun for Dr. Gadria (not confirmed), a "patients come to us from…" behaviour claim. |
| Claims rules | No "best", "painless", "guaranteed", specialist titles or 24/7. Sedation not mentioned. |
| Title / meta length | 48 / 142 characters (limits 60 / 120-155) |
| Primary keyword placement | Title, meta, H1, first 100 words, one H2: all present |
| Answer block | 50 words (target 40-60), directly under the H1 |
| Length | 1,971 words including lists, table and FAQs (brief: 1,500-2,000) |
| Readability | Flesch about 64 |
| Internal links | 15 unique, all in `url_map.md`; no on-hold or merged URLs |
| Schema validity | Both JSON-LD blocks parse; every `@type` and property passes the schema.org vocabulary check (website-content-engine validator; a deliberately wrong property was rejected) |
| Schema ↔ visible content | WebPage name/description equal the title/meta; all 7 FAQs verbatim; ItemList URLs all linked on the page |
| Duplicate copy across the section | Sentence-level check across all 8 cosmetic pages: no shared sentences (shared facts rephrased) |
| Independent fact-check (7 Oct 2026) | 2 findings (0 errors, 2 warnings); all resolved: fixed, or verified against the current site, or moved to section 5. Dr. Bhalala bio rewritten to the bio's facts ("worked at several practices before opening his own, with skills gained here and abroad… stays up to date on the latest procedures"). Invisalign iTero line → "X-rays, photos and a scan or impressions" (same wording on every Invisalign page); iTero use moved to section 5. |

## 5. Information still needed from the practice

1. **[CONFIRM certified provider]** Is the practice a current Invisalign provider? The site markets Invisalign by name with an offer; confirm before launch (trademark use).
2. **[CONFIRM offer terms]** Whitening $100 off (regular $550) and Invisalign $1,000 off (regular $5,800): any expiry date, eligibility or exclusions? Can they combine with the membership plan's 15% discount?
3. **[CONFIRM membership discount applies to cosmetic treatment]** The insurance page says "15% off all dental treatment"; confirm it includes veneers, bonding and whitening.
4. **[CONFIRM before-and-after gallery]** Are the gallery photos this practice's own patients, with written consent? If not, drop the "See Our Results" section.
5. **[CONFIRM technology]** Dental microscopes, iTero scanner, intraoral camera and digital X-rays are current and in-house.
6. **[CONFIRM in-office whitening]** The site only describes take-home trays. If in-office whitening is offered, it can be added to the whitening page and the hub.
7. Dr. Gadria's preferred pronouns, so bios and hub copy can read more naturally.
8. **[CONFIRM Tuesday hours]** Not on this page, but the Saturday FAQ relies on the same hours table (site prints "5:00 AM" for Tuesday).
9. **[CONFIRM iTero for Invisalign]** Are Invisalign records taken with the iTero scanner instead of impressions? Until confirmed, every Invisalign page uses "photos, X-rays and a scan or impressions"; switch all six pages together once confirmed.

## Sources

- Practice facts: `/home/claude/rs/fact_sheet.md`; site extracts for /cosmetic-dentistry/, /special-offers/, teeth-whitening, Invisalign pages and `_refetched.md` (veneers, porcelain veneers, bonding, inlays/onlays, CareCredit), crawled 7 Oct 2026
- [ADA MouthHealthy: Teeth Whitening](https://www.mouthhealthy.org/all-topics-a-z/teeth-whitening) ("Whitening will not work on caps, veneers, crowns or fillings")
- [ADA MouthHealthy: Veneers](https://www.mouthhealthy.org/all-topics-a-z/veneers) (enamel removal; treatment not reversible)
- [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
