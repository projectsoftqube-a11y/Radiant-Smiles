# Invisalign Teen: Developer Handoff

**URL:** `/cosmetic-dentistry/invisalign/invisalign-teen/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Invisalign Teen in Yardley, PA | Radiant Smiles</title>
<meta name="description" content="Invisalign Teen in Yardley, PA: clear, removable aligners with blue wear indicators so parents can see they're being worn. Call (215) 860-4600.">
<link rel="canonical" href="https://www.radiant-smiles.com/cosmetic-dentistry/invisalign/invisalign-teen/">
<meta property="og:type" content="website">
<meta property="og:title" content="Invisalign Teen in Yardley, PA | Radiant Smiles">
<meta property="og:description" content="Invisalign Teen in Yardley, PA: clear, removable aligners with blue wear indicators so parents can see they're being worn. Call (215) 860-4600.">
<meta property="og:url" content="https://www.radiant-smiles.com/cosmetic-dentistry/invisalign/invisalign-teen/">
<meta property="og:site_name" content="Radiant Smiles @ Floral Vale">
```

## 2. Page build rules

- **One H1:** "Invisalign Teen in Yardley, PA". Breadcrumb: Home › Cosmetic Dentistry › Invisalign › Invisalign Teen.
- **Audience:** parents and teens. Keep the parent-facing sections (compliance indicators, cost) scannable; no child photos without written parental consent.
- **Offer wording:** "Ask at your consultation how the offer applies to your teen's treatment plan" stays until the practice confirms the Invisalign offer covers Invisalign Teen.
- **Replacement aligners:** don't state a number of replacement aligners (the old site said six) until confirmed.
- **Trademark line** in the page footer as on the Invisalign page.
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
      "@id": "https://www.radiant-smiles.com/cosmetic-dentistry/invisalign/invisalign-teen/#webpage",
      "url": "https://www.radiant-smiles.com/cosmetic-dentistry/invisalign/invisalign-teen/",
      "name": "Invisalign Teen in Yardley, PA | Radiant Smiles",
      "description": "Invisalign Teen in Yardley, PA: clear, removable aligners with blue wear indicators so parents can see they're being worn. Call (215) 860-4600.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/cosmetic-dentistry/invisalign/invisalign-teen/#breadcrumb"
      },
      "about": [
        {
          "@id": "https://www.radiant-smiles.com/cosmetic-dentistry/invisalign/invisalign-teen/#procedure"
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
      "@id": "https://www.radiant-smiles.com/cosmetic-dentistry/invisalign/invisalign-teen/#breadcrumb",
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
          "name": "Invisalign Teen",
          "item": "https://www.radiant-smiles.com/cosmetic-dentistry/invisalign/invisalign-teen/"
        }
      ]
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://www.radiant-smiles.com/cosmetic-dentistry/invisalign/invisalign-teen/#procedure",
      "name": "Invisalign Teen clear aligner treatment",
      "description": "Invisalign Teen straightens teenagers' teeth with clear, removable aligners instead of metal brackets and wires, and adds blue compliance indicators that show parents the aligners are being worn.",
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
      "@id": "https://www.radiant-smiles.com/cosmetic-dentistry/invisalign/invisalign-teen/#faq",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/cosmetic-dentistry/invisalign/invisalign-teen/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I know my teen is wearing their aligners?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Invisalign Teen aligners have blue compliance indicators that fade as the aligners are worn. Checking the indicators shows whether your teen has been wearing them for the recommended 20 to 22 hours a day. We also check progress at each visit, usually every six to eight weeks."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if my teen loses an aligner?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Invisalign Teen includes replacement aligners, so losing one set doesn't have to stall treatment. Call Radiant Smiles @ Floral Vale at (215) 860-4600 as soon as you notice it's missing, and we'll tell you whether to move to the next set or wait for a replacement."
          }
        },
        {
          "@type": "Question",
          "name": "Can teens play sports with Invisalign?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. For contact sports, your teen takes the aligners out and wears a mouthguard instead, then puts the aligners back in after the game or practice. Aligners can also come out to play a musical instrument. The key is getting them back in so they're worn 20 to 22 hours a day."
          }
        },
        {
          "@type": "Question",
          "name": "How much does Invisalign Teen cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Invisalign at Radiant Smiles @ Floral Vale is currently $1,000 off the regular $5,800, with a free consultation and second opinion; ask how it applies to your teen's plan. Some dental plans include orthodontic benefits for dependents, and FSA funds and CareCredit financing can help spread the cost."
          }
        },
        {
          "@type": "Question",
          "name": "How long does Invisalign Teen take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Treatment time for teens is comparable to traditional braces, and it depends on how much the teeth need to move. Teens switch to new aligners about every two weeks and wear them 20 to 22 hours a day. We give you an estimate for your teen's case once their records are taken."
          }
        }
      ]
    }
  ]
}
```

### 3c. Optional additions later


### 3d. Keep in sync

The schema is generated from the page copy. If the title, meta description, FAQs, offers or procedure description change on the page, update the schema in the same commit. **Validate with** Google's Rich Results Test and validator.schema.org after deploy.
