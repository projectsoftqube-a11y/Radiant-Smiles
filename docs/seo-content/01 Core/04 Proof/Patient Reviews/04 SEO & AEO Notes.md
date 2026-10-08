# Patient Reviews: SEO, Local and AEO/GEO Notes

Final v1, 7 Oct 2026.

## 1. Keyword map

| Keyword | Vol / mo | KD | Where it's used | Notes |
|---|---|---|---|---|
| **radiant smiles floral vale reviews** (primary) | pending | pending | Title, meta, H1 "Radiant Smiles @ Floral Vale Reviews", first sentence, H2 "Recent Radiant Smiles @ Floral Vale Reviews" | Branded. People searching it are close to booking. The brief's H1 ("Patient Reviews") was changed to carry the keyword. |
| yardley dentist reviews | pending | pending | H3 "Yardley Dentist Reviews and Why They Help" | Long-tail. |
| dentist reviews | 8,100 | 41 | Body: "Dentist reviews help you choose…" | National context only; not a ranking target. |

**Kept off this page on purpose:** service and town terms; "dentist yardley pa" (homepage).

## 2. Role of the page

The page does two jobs: shows prospective patients real reviews in a format search engines can read, and asks current patients to leave Google reviews, which carry the real local-ranking weight (review count, rating and recency on the Google Business Profile). It keeps the current root URL to protect rankings.

**Why no review markup:** Google treats reviews a business publishes about itself as self-serving; they aren't eligible for review stars and can trigger a manual action. The "4.14 out of 5 / 50 reviews" figure is also left out until its source is confirmed.

## 3. AEO/GEO

**Answer-first sentence written to be quoted:** "These Radiant Smiles @ Floral Vale reviews are in our patients' own words, shared after visits to our dental office at 117 Floral Vale Boulevard in Yardley, PA."

**Proof placed next to a claim:** Candice C.'s review (crowns sent back to the lab until they were right) is the single best proof point for the practice's "precision" message. It's tagged "Treatment: dental crowns" and linked to the crowns page.

**Entities:** the practice, NAP, dental crowns. Reviews are quoted verbatim with first name, last initial, star rating and month.

**Leave-a-review block:** 3 numbered steps, a privacy note, and a "call us" route for unhappy patients (so complaints come to the practice first).

## 4. Quality checks

| Check | Result |
|---|---|
| Title / meta length | 50 / 137 characters |
| Primary keyword | Title, meta, H1, first 100 words, one H2: pass |
| Length | About 380 words including the 3 reviews (brief: 300–500 + reviews) |
| Readability | Flesch about 70 |
| Banned words / claims | None. No ratings or review counts claimed. No em dashes. |
| Links | All in the live URL map |
| Schema | WebPage + BreadcrumbList only; parses and validates; no Review/AggregateRating |
| Reviews used | Only the 3 usable 5-star reviews with text from the fact sheet. StephDuddy (no text, attribution unclear) and Mike Nite (1 star, no text) are not quoted. |
| Independent fact-check (7 Oct 2026) | 1 finding (0 errors, 1 warning); all resolved: fixed, or verified against the current site, or moved to section 5. The unconfirmed review-reply policy ("we won't discuss your treatment in a public reply") was cut; the softer line "Please don't include health details you'd rather keep private." stays. Policy question kept in section 5. |

## 5. Information still needed from the practice

1. **Source of the reviews and of the "4.14 / 50 reviews" figure [CONFIRM].** Google? Another platform? Permission to show reviewer names (first name + initial used).
2. **Google Business Profile place ID / write-a-review link [CONFIRM: required for the review button].**
3. **Public replies [CONFIRM].** The line "we won't discuss your treatment in a public reply" was removed from the copy in the QA pass (unconfirmed commitment). If the practice confirms this as its review-response policy (it is the HIPAA-safe approach), it can be added back.
4. Is a live Google review widget wanted, and which vendor?
5. More recent reviews with text, ideally mentioning specific treatments (implants, Invisalign, emergency visits), to refresh the page over time.

## Sources

- Fact sheet (`00 Reference/00 Fact Sheet.md`), Reviews section; current /patient-reviews/ page (crawled 7 Oct 2026).
- [Google: Review snippet structured data (self-serving reviews)](https://developers.google.com/search/docs/appearance/structured-data/review-snippet)
- [Google: Prohibited and restricted content for reviews (incentives, selective solicitation)](https://support.google.com/contributionpolicy/answer/7400114)
