# Invisalign Cost: Developer Handoff

**URL:** `/cosmetic-dentistry/invisalign/invisalign-cost/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Invisalign Cost in Yardley, PA | Pricing & Financing</title>
<meta name="description" content="Invisalign cost in Yardley, PA: regular price $5,800, now $1,000 off with a free consultation. Insurance, FSA and CareCredit options explained.">
<link rel="canonical" href="https://www.radiant-smiles.com/cosmetic-dentistry/invisalign/invisalign-cost/">
<meta property="og:type" content="website">
<meta property="og:title" content="Invisalign Cost in Yardley, PA | Pricing & Financing">
<meta property="og:description" content="Invisalign cost in Yardley, PA: regular price $5,800, now $1,000 off with a free consultation. Insurance, FSA and CareCredit options explained.">
<meta property="og:url" content="https://www.radiant-smiles.com/cosmetic-dentistry/invisalign/invisalign-cost/">
<meta property="og:site_name" content="Radiant Smiles @ Floral Vale">
```

## 2. Page build rules

- **One H1:** "How Much Does Invisalign Cost in Yardley?". Breadcrumb: Home › Cosmetic Dentistry › Invisalign › Invisalign Cost.
- **Price table:** the four-row price table (regular price, current offer, consultation, second opinion) as a real HTML `<table>`, pulled from the same data source as `/special-offers/` and the Invisalign page so all three always match.
- **Answer block first:** the paragraph under the H1 is the first text in the main content, in a plain `<p>`.
- **Don't state an after-offer net price** anywhere (copy, meta or schema). Keep "$1,000 off the regular $5,800". Don't publish CareCredit APRs; link to `/patient-information/carecredit/` for terms.
- **Don't add** the old site's "insurance may cover up to $3,500" or "same cost as braces" lines; they're unconfirmed.
- **Trademark line** in the page footer as on the Invisalign page.
- **Always:** server-render all text (no client-only rendering of copy or FAQs); FAQ questions and answers in the DOM on load (an accordion is fine if the text is in the HTML); crawlable `<a href>` links; phone as `tel:+12158604600`; NAP text identical to the homepage and footer: Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067, (215) 860-4600. No `sms:` link until texting is confirmed.
- **Tracking:** fire `click_call` on every `tel:` link and `click_book` on every button that links to `/patient-information/scheduling/` (GTM, per the tracking plan).

## 3. Structured data (JSON-LD)

### 3a. Core (required)

Same `#dentist` `@id` as the homepage. This is a cost page, so the WebPage is `about` the Invisalign procedure node defined on `/cosmetic-dentistry/invisalign/` (referenced by `@id`).

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.radiant-smiles.com/cosmetic-dentistry/invisalign/invisalign-cost/#webpage",
      "url": "https://www.radiant-smiles.com/cosmetic-dentistry/invisalign/invisalign-cost/",
      "name": "Invisalign Cost in Yardley, PA | Pricing & Financing",
      "description": "Invisalign cost in Yardley, PA: regular price $5,800, now $1,000 off with a free consultation. Insurance, FSA and CareCredit options explained.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/cosmetic-dentistry/invisalign/invisalign-cost/#breadcrumb"
      },
      "about": [
        {
          "@id": "https://www.radiant-smiles.com/cosmetic-dentistry/invisalign/#procedure"
        },
        {
          "@id": "https://www.radiant-smiles.com/#dentist"
        }
      ],
      "provider": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.radiant-smiles.com/cosmetic-dentistry/invisalign/invisalign-cost/#breadcrumb",
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
          "name": "Cosmetic Dentistry",
          "item": "https://www.radiant-smiles.com/cosmetic-dentistry/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Invisalign",
          "item": "https://www.radiant-smiles.com/cosmetic-dentistry/invisalign/"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Invisalign Cost",
          "item": "https://www.radiant-smiles.com/cosmetic-dentistry/invisalign/invisalign-cost/"
        }
      ]
    }
  ]
}
```

### 3b. FAQPage (optional)

No Google rich result since May 2026. Harmless, and keeps the Q&A machine-readable for AI tools. The text below is copied word for word from the visible FAQs.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": "https://www.radiant-smiles.com/cosmetic-dentistry/invisalign/invisalign-cost/#faq",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/cosmetic-dentistry/invisalign/invisalign-cost/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does Invisalign cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "At Radiant Smiles @ Floral Vale in Yardley, PA, Invisalign has a regular price of $5,800 and is currently $1,000 off, with a free consultation and second opinion. The cost for your case depends on how much your teeth need to move and how long treatment takes, and you'll know your price before you decide."
          }
        },
        {
          "@type": "Question",
          "name": "Does insurance cover Invisalign?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Some dental plans cover part of Invisalign through an orthodontic benefit, which often has its own lifetime maximum and may have age limits. Coverage depends on your plan. Radiant Smiles @ Floral Vale accepts many PPO plans; call (215) 860-4600 and we'll help you check what your plan pays toward clear aligners."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use my FSA for Invisalign?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Flexible spending account funds can be used toward Invisalign treatment at Radiant Smiles @ Floral Vale. Using FSA money means you pay with pre-tax dollars. Check your account balance and your plan's deadlines, and combine FSA funds with insurance or CareCredit financing if you need to."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer Invisalign payment plans?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Monthly payment options are available, and CareCredit offers no interest if paid in full within six months on qualifying purchases of $200 or more, subject to credit approval. You can prequalify for CareCredit with no impact to your credit score. Ask us which option suits your treatment plan."
          }
        },
        {
          "@type": "Question",
          "name": "Is the Invisalign consultation free?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The Invisalign consultation and second opinion are free at Radiant Smiles @ Floral Vale. We examine your teeth and gums, take the records we need, explain whether Invisalign suits you and give you the cost of your treatment, with no obligation to start that day."
          }
        }
      ]
    }
  ]
}
```

### 3c. Optional additions later

- **Add `Offer` nodes** only after the practice confirms the offer terms (start/end dates, eligibility). Until then the offers stay as visible text only.

### 3d. Keep in sync

The schema is generated from the page copy. If the title, meta description, FAQs, offers or procedure description change on the page, update the schema in the same commit. **Validate with** Google's Rich Results Test and validator.schema.org after deploy.
