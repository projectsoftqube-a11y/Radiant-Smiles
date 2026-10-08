# Insurance & Payment: SEO, Local and AEO/GEO Notes

Final v1, 7 Oct 2026. Explains why the copy in `02 Content.md` is built the way it is.

## 1. Keyword map: which section targets what

| Keyword | Vol / mo | KD | Where it's used | Notes |
|---|---|---|---|---|
| **dentist that accepts ppo yardley** (primary) | pending | pending | Written as "Yardley dentist that accepts PPO": title, meta, H1, first sentence, final CTA H2 | Natural word order; same query to Google. |
| dentist that accepts ppo | 20 | 0 | Inside every primary use (5) | National context only. |
| ppo dental insurance | pending | pending | Hero sentence and H2 "PPO Dental Insurance Plans We Accept" | 2 uses. |
| does insurance cover dental implants | pending | pending | FAQ "Does insurance cover dental implants?" | Exact question. |
| does insurance cover crowns | pending | pending | FAQ "Does insurance cover crowns?" | Exact question. |
| dental insurance accepted near me | 20 | 0 | Not written as a phrase | Matched by the named plan list, NAP and local signals. |

**Kept off this page on purpose:** CareCredit and "dental financing" terms → `/patient-information/carecredit/` (one short section and a link here); offer keywords → `/special-offers/`.

## 2. Role of the page

Answers the two money questions people ask before they book: "Is my plan accepted?" and "What if I don't have insurance?". The full 42-plan list is the strongest asset: carrier-name searches (e.g. "Horizon Blue Cross dentist Yardley") can only match a page that names the carrier in text. The page names every carrier in the fact sheet's list without claiming in-network status, and tells patients to call to check coverage. The membership table gives uninsured patients a real price. New Jersey commuters are addressed with Horizon Blue Cross as the example.

## 3. AEO/GEO

Answer-first sentences written to be quoted:
- "Radiant Smiles @ Floral Vale is a Yardley dentist that accepts more than 40 dental plans, including many PPO plans."
- "Our in-office membership plan covers routine care for one yearly fee." (with the table)
- "Payment is due at the time of service."

Extractable structures: a 42-item plan list, a 5-row price table, a payment-method list.

Checkable facts: every plan name, $150 / $75 / $75 / $65 / 15%, $89 visit, the $500 implant offer with its $3,500 regular price, payment methods, CareCredit's 6-month / $200 promotion.

FAQs: five, 44–48 words each. The coverage FAQs say "it depends on your plan" first, which is the honest direct answer.

## 4. Quality checks run on this draft

| Check | Result |
|---|---|
| Fact-check | Plan list copied from the fact sheet (spelling normalised: "MetLife", "Mutual of Omaha", "Teamsters", "UnitedHealthcare"). No "in-network" claims; no Medicaid or NJ FamilyCare. The unexplained "(adults $65, children $60)" text is left out. The brief's note "No plan names on current site" is out of date: the insurance page does list them (fact sheet), so they are used with the "we accept many PPO plans, including" rule. The brief's suggestion that plans "work across state lines if in-network" is not used (not a published fact). |
| Banned words / em dashes | None found (script check). |
| Internal links | 3 unique internal URLs (CareCredit, special offers, scheduling), all in the live URL map. |
| Schema validity | Both JSON-LD blocks parse; WebPage, BreadcrumbList, Offer (price, priceCurrency, offeredBy) and FAQPage exist in schema.org. |
| Schema ↔ visible content | Name/description equal title/meta; 5 FAQs match word for word (script check); the Offer's price and inclusions are all in the visible table. |
| Stats | words about 725 after the QA pass (was 716) incl. the 42 plan names (brief 500–700) · Flesch 51 · title 54 · meta 149 · H1 "Insurance & Payment at a Yardley Dentist That Accepts PPO Plans" |
| Independent fact-check (7 Oct 2026) | 1 finding (0 errors, 1 warning); all resolved: fixed, or verified against the current site, or moved to section 5. "PPO dental insurance from more than 40 carriers" / meta "(40+ plans)" → "more than 40 dental plans, including many PPO plans"; the list intro now says it also includes some dental discount plans (Dental Discount Plans, Careington, EZ Dental Care) and union health and welfare funds (IBEW Local Union 1158, Steamfitters Local 475, Teamsters Health and Welfare Fund). Meta now 149 characters. |

## 5. Information still needed from the practice

1. **Plan list:** is it current? Can any carriers be called in-network (e.g. Delta Dental, Horizon Blue Cross)? Is "Dental Discount Plans" a specific company or a category?
2. **"(adults $65, children $60)"** on the old page: what does it refer to? (Not used.)
3. **Membership plan terms:** age limits for family members, renewal, cancellation, and whether the 15% discount excludes any treatment (e.g. implants or Invisalign offers).
4. **Claims:** does the office file claims with the insurer for patients? (Not published, so not stated.)
5. **FSA/HSA cards:** accepted? (Mentioned only on the Invisalign cost page.)
6. **Offer terms:** expiry dates for the $89 visit and $500 implant offer.

## Sources

- Fact sheet `/home/claude/rs/fact_sheet.md` (insurance list and wording rule, membership plan, payment, offers)
- radiant-smiles.com extracts, 7 Oct 2026: `/patient-information/insurance-payment-options/`, `/special-offers/`, `/patient-information/carecredit/` (re-fetched)
- [Google: FAQPage structured data](https://developers.google.com/search/docs/appearance/structured-data/faqpage)
