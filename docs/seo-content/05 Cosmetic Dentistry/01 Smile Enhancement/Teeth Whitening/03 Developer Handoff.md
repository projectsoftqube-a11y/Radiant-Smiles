# Teeth Whitening: Developer Handoff

**URL:** `/cosmetic-dentistry/teeth-whitening/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Teeth Whitening in Yardley, PA | $100 Off | Radiant Smiles</title>
<meta name="description" content="Professional teeth whitening in Yardley, PA with custom trays ready in a day or two. Now $100 off the regular $550 price. Call (215) 860-4600.">
<link rel="canonical" href="https://www.radiant-smiles.com/cosmetic-dentistry/teeth-whitening/">
<meta property="og:type" content="website">
<meta property="og:title" content="Teeth Whitening in Yardley, PA | $100 Off | Radiant Smiles">
<meta property="og:description" content="Professional teeth whitening in Yardley, PA with custom trays ready in a day or two. Now $100 off the regular $550 price. Call (215) 860-4600.">
<meta property="og:url" content="https://www.radiant-smiles.com/cosmetic-dentistry/teeth-whitening/">
<meta property="og:site_name" content="Radiant Smiles @ Floral Vale">
```

## 2. Page build rules

- **One H1:** "Professional Teeth Whitening in Yardley, PA". Breadcrumb: Home › Cosmetic Dentistry › Teeth Whitening.
- **Offer above the fold:** "$100 off the regular $550 price" appears in the hero paragraph, the cost section and the final CTA. Keep the wording identical to `/special-offers/`. No expiry date or 'limited time' wording until the practice confirms terms.
- **Take-home trays only.** The site describes custom take-home trays; don't add in-office or laser whitening copy or images unless the practice confirms it offers them.
- **Steps** in "How Our Take-Home Whitening Works" as an ordered list `<ol>`.
- **ADA attribution:** the sensitivity sentence cites the American Dental Association; link "American Dental Association" to https://www.mouthhealthy.org/all-topics-a-z/teeth-whitening (`rel="noopener"`, opens in same tab is fine).
- **Images:** real photos of this office or this practice's patients only, with written consent; no stock smiles presented as patient results. Descriptive alt text (e.g. "Porcelain veneers on upper front teeth, Radiant Smiles @ Floral Vale").
- **Always:** server-render all text (no client-only rendering of copy or FAQs); FAQ questions and answers in the DOM on load (an accordion is fine if the text is in the HTML); crawlable `<a href>` links; phone as `tel:+12158604600`; NAP text identical to the homepage and footer: Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067, (215) 860-4600. No `sms:` link until texting is confirmed.
- **Tracking:** fire `click_call` on every `tel:` link and `click_book` on every button that links to `/patient-information/scheduling/` (GTM, per the tracking plan).

## 3. Structured data (JSON-LD)

### 3a. Core (required)

Same `#dentist` `@id` as the homepage. The MedicalProcedure description is copied word for word from the page's first sentence.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.radiant-smiles.com/cosmetic-dentistry/teeth-whitening/#webpage",
      "url": "https://www.radiant-smiles.com/cosmetic-dentistry/teeth-whitening/",
      "name": "Teeth Whitening in Yardley, PA | $100 Off | Radiant Smiles",
      "description": "Professional teeth whitening in Yardley, PA with custom trays ready in a day or two. Now $100 off the regular $550 price. Call (215) 860-4600.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/cosmetic-dentistry/teeth-whitening/#breadcrumb"
      },
      "about": [
        {
          "@id": "https://www.radiant-smiles.com/cosmetic-dentistry/teeth-whitening/#procedure"
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
      "@id": "https://www.radiant-smiles.com/cosmetic-dentistry/teeth-whitening/#breadcrumb",
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
          "name": "Teeth Whitening",
          "item": "https://www.radiant-smiles.com/cosmetic-dentistry/teeth-whitening/"
        }
      ]
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://www.radiant-smiles.com/cosmetic-dentistry/teeth-whitening/#procedure",
      "name": "Professional teeth whitening (custom take-home trays)",
      "description": "Professional teeth whitening in Yardley, PA at Radiant Smiles @ Floral Vale uses custom-made trays and a whitening gel you wear at home for about 3 to 4 hours a night, for one to two weeks.",
      "procedureType": "https://schema.org/NoninvasiveProcedure"
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
      "@id": "https://www.radiant-smiles.com/cosmetic-dentistry/teeth-whitening/#faq",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/cosmetic-dentistry/teeth-whitening/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does teeth whitening cost in Yardley?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Teeth whitening at Radiant Smiles @ Floral Vale in Yardley, PA is currently $100 off the regular price of $550. Treatment uses custom trays and gel you wear at home. Most dental insurance doesn't cover whitening, but CareCredit offers no interest if paid in full within 6 months on qualifying purchases of $200 or more, subject to credit approval."
          }
        },
        {
          "@type": "Question",
          "name": "Does teeth whitening hurt?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Teeth whitening isn't painful for most people. Some feel tooth sensitivity while whitening, and the American Dental Association notes this is usually temporary. If it happens, tell us; taking a short break before starting again often helps, and with take-home trays you can easily adjust how often you whiten."
          }
        },
        {
          "@type": "Question",
          "name": "How long does professional teeth whitening take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Your custom trays are ready in a day or two. You then wear them with the whitening gel for about 3 to 4 hours each night, for one to two weeks. Significant whitening usually shows within that time, and we take \"after\" photos at your next appointment to compare."
          }
        },
        {
          "@type": "Question",
          "name": "How long do teeth whitening results last?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Results vary from person to person and depend mostly on habits. Coffee, tea, red wine and tobacco stain teeth again over time. Keep your custom trays: an occasional maintenance treatment refreshes your shade, and regular cleanings remove new surface stains between treatments."
          }
        },
        {
          "@type": "Question",
          "name": "Can I whiten crowns, veneers or fillings?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Whitening only lightens natural teeth. Crowns, veneers, fillings and bonding keep the shade they were made in, so whitening can leave them looking darker than the teeth around them. If you have dental work on your front teeth, we'll check before you start and talk through options."
          }
        },
        {
          "@type": "Question",
          "name": "Is professional teeth whitening safe?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, when it's done under a dentist's guidance. We check that your teeth and gums are healthy first, and custom trays keep the gel on your teeth. Over-the-counter products can harm gums and teeth when used without guidance, which is why we recommend whitening with products from your dental office."
          }
        }
      ]
    }
  ]
}
```

### 3c. Optional additions later

- **Add `Offer` nodes** only after the practice confirms the offer terms (start/end dates, eligibility). Until then the offers stay as visible text only. Example once confirmed: `{"@type":"Offer","name":"$100 off teeth whitening (regular $550)"}`. Never add a derived after-offer price.

### 3d. Keep in sync

The schema is generated from the page copy. If the title, meta description, FAQs, offers or procedure description change on the page, update the schema in the same commit. **Validate with** Google's Rich Results Test and validator.schema.org after deploy.
