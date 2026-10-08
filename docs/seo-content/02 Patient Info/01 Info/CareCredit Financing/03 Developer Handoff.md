# CareCredit Financing: Developer Handoff

**URL:** `/patient-information/carecredit/` | **Status:** Final v1, 7 Oct 2026. Ready to build.

## 1. Head tags

```html
<title>Dental Financing in Yardley, PA | CareCredit</title>
<meta name="description" content="Dental financing in Yardley, PA: spread the cost of implants, Invisalign and more with CareCredit at Radiant Smiles @ Floral Vale. Subject to approval.">
<link rel="canonical" href="https://www.radiant-smiles.com/patient-information/carecredit/">
<meta property="og:type" content="website">
<meta property="og:title" content="Dental Financing in Yardley, PA | CareCredit">
<meta property="og:description" content="Dental financing in Yardley, PA: spread the cost of implants, Invisalign and more with CareCredit at Radiant Smiles @ Floral Vale. Subject to approval.">
<meta property="og:url" content="https://www.radiant-smiles.com/patient-information/carecredit/">
<!-- og:image: add once a real office/team photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Dental Financing in Yardley With CareCredit". Keep heading levels exactly as in `02 Content.md` (H2 sections, H3 sub-sections, H3 per FAQ question). Visible breadcrumb: Home › Patient Information › CareCredit Financing.
- **No APR figures.** The old page printed purchase and penalty APRs dated 5/30/2024. Don't publish any rate; link to CareCredit's terms instead (`https://www.carecredit.com/cardholderagreement/`).
- **External links** (`https://www.carecredit.com/apply/` and the cardholder agreement) open in a new tab with `rel="noopener"` and an external-link icon plus visually hidden "(opens in a new tab)" text. If the practice has a CareCredit provider-specific apply link (it routes approvals to this office), use that instead of the generic apply URL. **Before launch, open both external URLs in a browser and confirm they load** (`https://www.carecredit.com/apply/` and `https://www.carecredit.com/cardholderagreement/`). Both appear in search-engine results as of 7 Oct 2026, but carecredit.com couldn't be fetched directly from the QA environment. If the cardholder-agreement path no longer works, link `https://www.carecredit.com/` and note the change here.
- **Disclosure wording** in "How Dental Financing in Yardley Works With CareCredit" (deferred interest, minimum payments, subject to credit approval) must stay on the page whenever the 6-month promotion is mentioned. Don't shorten it into a footnote.
- **CareCredit logo:** only the official artwork from CareCredit's provider marketing materials, used per their brand guidelines.
- **CTA targets:** "Request an Appointment" goes to `/patient-information/scheduling/`; call buttons use `tel:+12158604600`. At most one CTA per section, as written.
- **FAQs:** visible on the page. If you use an accordion, the answer text must be in the DOM on load (`<details>`/`<summary>` is ideal).
- **Server-render all text** (Next.js SSG/SSR). Headings, lists, tables, FAQs and the NAP line must be in the initial HTML, not injected by client-side JS or shown only inside images.
- **NAP:** show as text exactly `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067, (215) 860-4600` (final CTA block and site footer), character for character the same as the homepage and Google Business Profile.
- **Phone:** every call button and phone mention is a `tel:+12158604600` link. No `sms:` link until the practice confirms the number accepts texts.
- **Links:** every internal link in `02 Content.md` is a crawlable `<a href>` with the anchor text as written (no onClick-only navigation). Link only to URLs in the live URL map.
- **Images:** real photos of the office, team or equipment only, each with descriptive alt text (e.g. "Treatment room at Radiant Smiles @ Floral Vale in Yardley, PA"). No stock images presented as this office.
- **Tracking:** fire separate events for call clicks (`click_call`) and appointment button clicks (`click_request_appointment`); also track the CareCredit apply button (`click_carecredit_apply`, outbound) and the terms link (`click_carecredit_terms`, outbound).

## 3. Structured data (JSON-LD)

Business `@id` is `https://www.radiant-smiles.com/#dentist`: the full Dentist node lives on the homepage only, so this page references it by `@id`. The WebPage `name` and `description` equal the title tag and meta description exactly.

### 3a. Core: WebPage + BreadcrumbList (required)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.radiant-smiles.com/patient-information/carecredit/#webpage",
      "url": "https://www.radiant-smiles.com/patient-information/carecredit/",
      "name": "Dental Financing in Yardley, PA | CareCredit",
      "description": "Dental financing in Yardley, PA: spread the cost of implants, Invisalign and more with CareCredit at Radiant Smiles @ Floral Vale. Subject to approval.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/patient-information/carecredit/#breadcrumb"
      },
      "about": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.radiant-smiles.com/patient-information/carecredit/#breadcrumb",
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
          "name": "CareCredit Financing",
          "item": "https://www.radiant-smiles.com/patient-information/carecredit/"
        }
      ]
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
      "@id": "https://www.radiant-smiles.com/patient-information/carecredit/#faq",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/patient-information/carecredit/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does Radiant Smiles @ Floral Vale accept CareCredit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Radiant Smiles @ Floral Vale in Yardley, PA accepts CareCredit for dental treatment. On qualifying purchases of $200 or more, there's no interest if you pay in full within 6 months. Approval and terms are set by CareCredit, not by our office."
          }
        },
        {
          "@type": "Question",
          "name": "Will checking if I prequalify affect my credit score?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. CareCredit lets you see whether you prequalify with no impact to your credit score. Prequalifying is not the same as approval: if you go on to apply, CareCredit reviews your application and decides whether to approve it and on what terms."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if I don't pay off the balance within 6 months?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Interest is charged from the original purchase date, not from the end of the promotion. That's how deferred interest works. To avoid it, pay the full promotional balance before the period ends, and check CareCredit's current terms for the rates that would apply."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use CareCredit together with my dental insurance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. CareCredit is one of the payment methods we accept, so you can use it for the part of your bill that your insurance doesn't cover. Payment is due at the time of service, and we explain the cost before treatment begins."
          }
        }
      ]
    }
  ]
}
```

### 3c. Not included on purpose

- No Review or AggregateRating markup for the practice's own reviews (self-serving reviews aren't eligible and risk a manual action).
- No `priceRange`, `award` or `hasCredential` values: the current site doesn't publish them.

### 3d. Keep in sync

The schema is generated from the page copy. If the title, meta description, FAQs, promotion terms or offers change on the page, update the JSON-LD in the same commit. **Validate** with Google's Rich Results Test and validator.schema.org after deploy.
