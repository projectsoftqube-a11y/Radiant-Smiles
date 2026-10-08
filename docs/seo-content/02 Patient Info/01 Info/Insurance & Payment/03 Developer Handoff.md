# Insurance & Payment: Developer Handoff

**URL:** `/patient-information/insurance-payment-options/` | **Status:** Final v1, 7 Oct 2026. Ready to build.

## 1. Head tags

```html
<title>Yardley Dentist That Accepts PPO | Insurance & Payment</title>
<meta name="description" content="Radiant Smiles @ Floral Vale is a Yardley dentist that accepts PPO insurance, with 40+ dental plans, a $150 membership plan and CareCredit financing.">
<link rel="canonical" href="https://www.radiant-smiles.com/patient-information/insurance-payment-options/">
<meta property="og:type" content="website">
<meta property="og:title" content="Yardley Dentist That Accepts PPO | Insurance & Payment">
<meta property="og:description" content="Radiant Smiles @ Floral Vale is a Yardley dentist that accepts PPO insurance, with 40+ dental plans, a $150 membership plan and CareCredit financing.">
<meta property="og:url" content="https://www.radiant-smiles.com/patient-information/insurance-payment-options/">
<!-- og:image: add once a real office/team photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Insurance & Payment at a Yardley Dentist That Accepts PPO Plans". Keep heading levels exactly as in `02 Content.md` (H2 sections, H3 sub-sections, H3 per FAQ question). Visible breadcrumb: Home › Patient Information › Insurance & Payment.
- **Plan list:** the 42 PPO plans as a real `<ul>` (CSS columns: 3 on desktop, 2 on tablet, 1 on mobile), as text, never as a logo image. Keep the spelling exactly as written. Lead-in must stay "We accept many PPO plans, including:". **Never** label any carrier "in-network" and don't add Medicaid or NJ FamilyCare.
- **Membership table** as a real HTML `<table>` with a header row. Don't add the "(adults $65, children $60)" text from the old page: it is unexplained and awaiting confirmation.
- **Primary button** on this page is the call button ("Call to Check Your Coverage"), because coverage questions need a conversation.
- **CTA targets:** "Request an Appointment" goes to `/patient-information/scheduling/`; call buttons use `tel:+12158604600`. At most one CTA per section, as written.
- **FAQs:** visible on the page. If you use an accordion, the answer text must be in the DOM on load (`<details>`/`<summary>` is ideal).
- **Server-render all text** (Next.js SSG/SSR). Headings, lists, tables, FAQs and the NAP line must be in the initial HTML, not injected by client-side JS or shown only inside images.
- **NAP:** show as text exactly `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067, (215) 860-4600` (final CTA block and site footer), character for character the same as the homepage and Google Business Profile.
- **Phone:** every call button and phone mention is a `tel:+12158604600` link. No `sms:` link until the practice confirms the number accepts texts.
- **Links:** every internal link in `02 Content.md` is a crawlable `<a href>` with the anchor text as written (no onClick-only navigation). Link only to URLs in the live URL map.
- **Images:** real photos of the office, team or equipment only, each with descriptive alt text (e.g. "Treatment room at Radiant Smiles @ Floral Vale in Yardley, PA"). No stock images presented as this office.
- **Tracking:** fire separate events for call clicks (`click_call`) and appointment button clicks (`click_request_appointment`); also track the CareCredit link (`click_financing`) and the special-offers link (`click_offer`).

## 3. Structured data (JSON-LD)

Business `@id` is `https://www.radiant-smiles.com/#dentist`: the full Dentist node lives on the homepage only, so this page references it by `@id`. The WebPage `name` and `description` equal the title tag and meta description exactly.

### 3a. Core: WebPage + BreadcrumbList + Offer (required)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.radiant-smiles.com/patient-information/insurance-payment-options/#webpage",
      "url": "https://www.radiant-smiles.com/patient-information/insurance-payment-options/",
      "name": "Yardley Dentist That Accepts PPO | Insurance & Payment",
      "description": "Radiant Smiles @ Floral Vale is a Yardley dentist that accepts PPO insurance, with 40+ dental plans, a $150 membership plan and CareCredit financing.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/patient-information/insurance-payment-options/#breadcrumb"
      },
      "about": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.radiant-smiles.com/patient-information/insurance-payment-options/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.radiant-smiles.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Patient Information",
          "item": "https://www.radiant-smiles.com/patient-information/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Insurance & Payment",
          "item": "https://www.radiant-smiles.com/patient-information/insurance-payment-options/"
        }
      ]
    },
    {
      "@type": "Offer",
      "@id": "https://www.radiant-smiles.com/patient-information/insurance-payment-options/#membership-plan",
      "name": "In-office membership plan",
      "description": "Yearly membership: 2 cleanings, exams and X-rays. Each additional family member $75 a year; additional cleanings or periodontal maintenance $75 each; emergency exam with X-ray $65 per visit; 15% off all other dental treatment.",
      "price": "150.00",
      "priceCurrency": "USD",
      "offeredBy": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      },
      "url": "https://www.radiant-smiles.com/patient-information/insurance-payment-options/"
    }
  ]
}
```

### 3b. FAQPage (required by the brief)

Google stopped showing FAQ rich results on 7 May 2026. The markup is still valid and keeps the Q&A machine-readable for other search and AI systems. The question and answer text below is copied word for word from the visible FAQs; include it only while they stay identical.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": "https://www.radiant-smiles.com/patient-information/insurance-payment-options/#faq",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/patient-information/insurance-payment-options/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you accept my dental insurance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Radiant Smiles @ Floral Vale accepts many PPO plans, including Aetna, Cigna PPO, Delta Dental, Guardian, Horizon Blue Cross, MetLife and UnitedHealthcare. What your plan covers depends on its terms, so call (215) 860-4600 with your member details and our team will help you check before your visit."
          }
        },
        {
          "@type": "Question",
          "name": "Does insurance cover dental implants?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on your plan. Some PPO plans pay toward part of an implant and others don't, so we check your benefits before treatment. Our current offer takes $500 off an implant, abutment and crown (regular price $3,500), and CareCredit can spread the remaining cost."
          }
        },
        {
          "@type": "Question",
          "name": "Does insurance cover crowns?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on your plan. Crown coverage varies with your plan's terms and how much of your yearly benefit you've already used. Call us with your member details and we'll help you understand your coverage before your crown appointment, so the cost isn't a surprise."
          }
        },
        {
          "@type": "Question",
          "name": "What if I don't have dental insurance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can join our in-office membership plan for $150 a year, plus $75 for each additional family member. It includes two cleanings, exams and X-rays, an emergency exam with X-ray for $65 and 15% off all other dental treatment. CareCredit financing is available too."
          }
        },
        {
          "@type": "Question",
          "name": "When is payment due?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Payment is due at the time of service. We accept cash, check, Visa, MasterCard, Discover, American Express and CareCredit. We explain the cost of your treatment before any work begins, so you can choose how to pay, whether that's insurance, membership savings or CareCredit financing."
          }
        }
      ]
    }
  ]
}
```

### 3c. Not included on purpose

- No Review or AggregateRating markup.
- No `priceRange` and no `paymentAccepted` here: payment methods sit on the homepage Dentist node only.
- Only one Offer node (the $150 membership plan, the one fixed price shown as a plan). The $89 visit and the procedure offers are marked up on `/special-offers/`, not here.

### 3d. Keep in sync

The schema is generated from the page copy. If the title, meta description, FAQs, plan list, membership prices or payment methods change on the page, update the JSON-LD in the same commit. **Validate** with Google's Rich Results Test and validator.schema.org after deploy.
