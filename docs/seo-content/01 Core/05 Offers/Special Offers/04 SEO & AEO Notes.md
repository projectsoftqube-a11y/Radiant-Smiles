# Special Offers: SEO, Local and AEO/GEO Notes

Final v1, 7 Oct 2026.

## 1. Keyword map

| Keyword | Vol / mo | KD | Where it's used | Notes |
|---|---|---|---|---|
| **affordable dentist yardley** (primary) | pending | pending | Title, meta, H1 "Affordable Dentist in Yardley, PA: Current Dental Specials", first sentence, H2 "Seeing an Affordable Dentist in Yardley Without Insurance" | The brief's H1 ("Dental Specials in Yardley, PA") was changed to carry the primary keyword. "Affordable" is backed by real prices on the same screen, not used as a vague claim. |
| dentist no insurance near me | 320 | 24 | Not written as a phrase; covered by "dentist without insurance", the $89 offer and the membership plan | "Near me" is answered by local signals (NAP, GBP), not by the words. |
| new patient dental special | 50 | 0 | H2 "$89 New Patient Dental Special" and its first sentence | Exact phrase once in a heading, once in body. |
| $89 new patient special dentist | pending | pending | H2, hero, summary strip, FAQ 1 | |
| dentist without insurance | 2,400 | 41 | H2 section first sentence: "You can see a dentist without insurance…"; FAQ "Can I see a dentist without insurance?" | National context; natural mentions only. |

**Kept off this page on purpose:** "dental implants yardley pa" (#12), "invisalign yardley pa" (#14) and "teeth whitening yardley pa" (#11) all belong to their service pages, which are close to page 1. This page links to them with descriptive anchors and doesn't use the "[service] yardley pa" phrasing, to avoid cannibalising them.

## 2. Role of the page

The conversion page for price-sensitive visitors, especially uninsured patients. Every offer is a card with the exact price, what's included, who it's for and one link to the service page. The membership plan and CareCredit answer "I can't afford treatment" honestly. It also feeds the homepage offers table and the homepage `makesOffer` schema; both must stay identical.

## 3. AEO/GEO

**Answer-first sentences written to be quoted:**
- "New patients without insurance pay $89 for a cleaning, X-rays and an exam."
- "Take $500 off a dental implant, abutment and crown, which together replace one missing tooth. The regular price is $3,500."
- "For $150 a year, plus $75 for each additional family member, you get 2 cleanings, exams and X-rays each year and 15% off all other dental treatment."

**Checkable facts:** all 4 offers with regular prices, the membership plan line by line, CareCredit's 6-month / $200 terms, payment methods. AI tools answering "how much does a new patient visit cost at Radiant Smiles?" can lift these directly.

**FAQ approach:** 5 questions (who qualifies for $89, what the implant offer includes, consultations, no insurance, payment plans), 43–45 words each.

**Schema:** five `Offer` nodes `offeredBy` `#dentist`, in an ItemList. No computed sale prices (e.g. no "$3,000 implant"), because the site publishes only the discount and the regular price.

## 4. Quality checks

| Check | Result |
|---|---|
| Title / meta length | 53 / 153 characters |
| Primary keyword | Title, meta, H1, first 100 words, one H2: pass |
| Length | About 890 words after the QA pass (was about 835; added the Avni D. review and three offer buttons). Brief: 500–800. The overage is the membership and CareCredit details and 5 FAQs. |
| Independent fact-check (7 Oct 2026) | 0 page findings, plus 1 shared Core-handoff warning (FAQ rich-results note); resolved: handoff now says "Google stopped showing FAQ rich results on 7 May 2026." For consistency with the Home and Insurance fixes, "more than 40 PPO plans" → "more than 40 dental plans, including many PPO plans". |
| Conversion review (7 Oct 2026) | Applied: price-first hero opener ("An affordable dentist in Yardley, PA should show you the price first. Ours are below."); Avni D. review (plain text) in the $89 section; a button under the $89, implant and Invisalign offers; final H2 "Claim Your Offer" → "Book Your $89 Visit or Free Consultation". No derived net prices published (only "$X off the regular $Y"). |
| Readability | Flesch about 61 |
| Banned words / claims | None. No "limited time", expiry dates or fine print invented. Invisalign insurance figure ("up to $3,500") from the old cost page not used; the copy says insurance "may cover part" of orthodontic treatment. No CareCredit APRs. No em dashes. |
| Links | All in the live URL map; the noindex `/lp/new-patient-special/` page is not linked |
| Schema | WebPage + ItemList + 5 Offers + BreadcrumbList + FAQPage; parses and validates; FAQ text verbatim; name/description equal title/meta |
| Consistency | Prices match the homepage table and homepage `makesOffer` |

## 5. Information still needed from the practice

1. **Offer terms [CONFIRM].** Expiry dates, whether offers combine with insurance, the membership plan or each other, and whether the $89 visit covers a standard cleaning only (not a deep cleaning).
2. **"Free consultation and 2nd opinion" [CONFIRM].** Is the second opinion also free? The copy reads "free consultation and second opinion", matching the site.
3. **Invisalign certified provider [CONFIRM].** Required before using the trademark in an offer.
4. **Membership plan detail [CONFIRM].** The insurance page also shows "(adults $65, children $60)" with no context. Not used. What does it refer to?
5. Does the membership plan have any exclusions (e.g. implants, Invisalign) or a waiting period?

## Sources

- Fact sheet (`00 Reference/00 Fact Sheet.md`): Offers, In-office membership plan, Payment and financing; current /special-offers/ page (crawled 7 Oct 2026).
- Keyword data: Semrush (US database) and the previous agency rank report, via the Keyword Map & Sitemap workbook.
