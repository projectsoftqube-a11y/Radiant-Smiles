# CareCredit Financing: SEO, Local and AEO/GEO Notes

Final v1, 7 Oct 2026. Explains why the copy in `02 Content.md` is built the way it is.

## 1. Keyword map: which section targets what

| Keyword | Vol / mo | KD | Where it's used | Notes |
|---|---|---|---|---|
| **dental financing yardley** (primary) | pending | pending | Written as "dental financing in Yardley": title, meta, H1, first sentence, H2 "How Dental Financing in Yardley Works With CareCredit" | Natural phrasing; same query. |
| dental financing near me | 170 | 9 | Not written as a phrase | Matched by the Yardley signals, NAP and the GBP. |
| dentist payment plans near me | 70 | 5 | Not written as a phrase | Supported by the "payment plans" H2 below. |
| dentist that takes payment plans | 110 | 6 | H2 "A Dentist That Takes Payment Plans: Other Ways to Pay" | Exact phrase once. The H2 is honest: it lists CareCredit, insurance and the membership plan, not an in-house payment plan (none is confirmed). |
| carecredit dentist | pending | pending | FAQ "Does Radiant Smiles @ Floral Vale accept CareCredit?" | Close variant; answered in the first word ("Yes."). |
| dental financing | 6,600 | 64 | 5 uses inside the primary | National context only. |

**Kept off this page on purpose:** insurance and membership terms → Insurance & Payment (short list and link only); implant and Invisalign keywords → their service pages (linked from "What You Can Finance").

## 2. Role of the page

Removes the cost objection for larger treatment (implants, Invisalign, crowns). It explains the CareCredit promotion with its full disclosures (deferred interest, minimum payments, credit approval) next to the offer, never as small print. It deliberately publishes **no APR**: the old page showed rates dated 5/30/2024, which go stale and create compliance risk. Instead it links to CareCredit's own cardholder terms and apply page.

## 3. AEO/GEO

Answer-first sentences written to be quoted:
- "Radiant Smiles @ Floral Vale offers dental financing in Yardley through CareCredit, a health and wellness credit card."
- "On qualifying purchases of $200 or more, there's no interest if you pay the full amount within 6 months."
- "Interest is charged from the original purchase date, not from the end of the promotion."

Extractable structures: a 3-item disclosure list, a 4-step "how to apply", a "what you can finance" list with real offer prices.

Checkable facts: $200 minimum, 6 months, deferred interest, prequalification with no credit-score impact, $500 off implants (regular $3,500), $1,000 off Invisalign (regular $5,800), free consultation and second opinion.

FAQs: four, 42–43 words each.

## 4. Quality checks run on this draft

| Check | Result |
|---|---|
| Fact-check | Promotion terms from the fact sheet and the re-fetched old CareCredit page. Deferred-interest wording and the apply/terms URLs checked against CareCredit's own site (fair financing principles page, 7 Oct 2026). "Accepted at over 260,000 locations" (old page) left out: a third-party figure that changes. No APRs. |
| Banned words / em dashes | None found (script check). |
| Links | 4 unique internal URLs (implants, Invisalign, insurance, scheduling), all in the live URL map; 2 external CareCredit URLs. |
| Schema validity | Both JSON-LD blocks parse; WebPage, BreadcrumbList and FAQPage exist in schema.org. No FinancialProduct markup (CareCredit's product, not the practice's). |
| Schema ↔ visible content | Name/description equal title/meta; 4 FAQs match word for word (script check). |
| Stats | words 697 (brief 500–700) · Flesch 60 · title 44 · meta 151 · H1 "Dental Financing in Yardley With CareCredit" |
| Independent fact-check (7 Oct 2026) | 1 finding (0 errors, 1 warning); all resolved: fixed, or verified against the current site, or moved to section 5. The two carecredit.com URLs couldn't be fetched (proxy block) but both appear in search-engine results; kept, with a pre-launch "open both links" step added to the handoff and section 5 (item 6). |

## 5. Information still needed from the practice

1. **Promotional periods offered:** CareCredit offers 6, 12, 18 and 24-month promotions, but each practice chooses which to accept. The old site shows 6 months only. Does the office offer longer ones?
2. **Provider-specific apply link:** the practice's own CareCredit link or QR code (routes applications to this office).
3. **In-office payment options:** the old Why Choose Us page mentions "in-office payment options". Is there an in-house payment plan? If yes, it should be added here (it would also strengthen the "payment plans" keywords).
4. **Other lenders:** any besides CareCredit (e.g. Cherry, Sunbit)? None are mentioned on the site, so none are named.
5. **Offer terms and expiry** for the implant and Invisalign discounts.
6. **External links check (developer, before launch).** Open `https://www.carecredit.com/apply/` and `https://www.carecredit.com/cardholderagreement/`. Both are listed in search-engine results (checked 7 Oct 2026); a direct fetch was blocked. Prefer the practice's provider-specific apply link (item 2).

## Sources

- Fact sheet `/home/claude/rs/fact_sheet.md` (payment and financing, offers)
- radiant-smiles.com extract `_refetched.md`, `/patient-information/carecredit/` (7 Oct 2026)
- [CareCredit: fair financing principles](https://www.carecredit.com/fair-financing-principles/) (deferred interest wording; links to [cardholder agreement](https://www.carecredit.com/cardholderagreement/) and [apply](https://www.carecredit.com/apply/)), checked 7 Oct 2026
- [Google: FAQPage structured data](https://developers.google.com/search/docs/appearance/structured-data/faqpage)
