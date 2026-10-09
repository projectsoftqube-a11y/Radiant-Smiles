# Porcelain Veneers: Developer Handoff

**URL:** `/cosmetic-dentistry/dental-veneers-dentistry/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Porcelain Veneers in Yardley, PA | Radiant Smiles</title>
<meta name="description" content="Porcelain veneers in Yardley, PA for chipped, stained, small or uneven teeth, each case designed individually. Call (215) 860-4600 to book.">
<link rel="canonical" href="https://www.radiant-smiles.com/cosmetic-dentistry/dental-veneers-dentistry/">
<meta property="og:type" content="website">
<meta property="og:title" content="Porcelain Veneers in Yardley, PA | Radiant Smiles">
<meta property="og:description" content="Porcelain veneers in Yardley, PA for chipped, stained, small or uneven teeth, each case designed individually. Call (215) 860-4600 to book.">
<meta property="og:url" content="https://www.radiant-smiles.com/cosmetic-dentistry/dental-veneers-dentistry/">
<meta property="og:site_name" content="Radiant Smiles @ Floral Vale">
```

## 2. Page build rules

- **One H1:** "Porcelain Veneers in Yardley, PA". Breadcrumb: Home › Cosmetic Dentistry › Porcelain Veneers.
- **301 redirect:** `/cosmetic-dentistry/dental-veneers-dentistry/porcelain-veneers/` → `/cosmetic-dentistry/dental-veneers-dentistry/` (single hop, permanent). Update every internal link and the XML sitemap to the new URL; the old URL must not appear in the sitemap.
- **URL stays** `/cosmetic-dentistry/dental-veneers-dentistry/` (existing URL with history). Navigation label: "Porcelain Veneers".
- **Patient quote:** the Candice C. quote under the hero buttons is plain text (a styled `<blockquote>` is fine). No `Review` or `AggregateRating` markup.
- **Mid-page CTA:** "Request a Veneer Consultation" button at the end of "Are Veneers Right for You?" fires `click_book`.
- **Comparison table** (porcelain veneers vs dental bonding) as a real HTML `<table>`.
- **Steps** in "Getting Veneers in Yardley, PA" as an ordered list `<ol>`.
- **No prices** except the published offers exactly as worded on `/special-offers/` (whitening $100 off, regular $550; Invisalign $1,000 off, regular $5,800). No 'best', 'painless', 'guaranteed' or specialist wording. No veneer price is published: don't add one.
- **Images:** real photos of this office or this practice's patients only, with written consent; no stock smiles presented as patient results. Descriptive alt text (e.g. "Porcelain veneers on upper front teeth, Radiant Smiles @ Floral Vale").
- **Always:** server-render all text (no client-only rendering of copy or FAQs); FAQ questions and answers in the DOM on load (an accordion is fine if the text is in the HTML); crawlable `<a href>` links; phone as `tel:+12158604600`; NAP text identical to the homepage and footer: Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067, (215) 860-4600. No `sms:` link until texting is confirmed.
- **Tracking:** fire `click_call` on every `tel:` link and `click_book` on every button that links to `/patient-information/scheduling/` (GTM, per the tracking plan).

## 3. Structured data (JSON-LD)

### 3a. Core (required)

Same `#dentist` `@id` as the homepage. The MedicalProcedure description is copied word for word from the definition sentence in the hero (second sentence). No `procedureType`: veneer preparation removes enamel, so it is not a non-invasive procedure.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.radiant-smiles.com/cosmetic-dentistry/dental-veneers-dentistry/#webpage",
      "url": "https://www.radiant-smiles.com/cosmetic-dentistry/dental-veneers-dentistry/",
      "name": "Porcelain Veneers in Yardley, PA | Radiant Smiles",
      "description": "Porcelain veneers in Yardley, PA for chipped, stained, small or uneven teeth, each case designed individually. Call (215) 860-4600 to book.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/cosmetic-dentistry/dental-veneers-dentistry/#breadcrumb"
      },
      "about": [
        {
          "@id": "https://www.radiant-smiles.com/cosmetic-dentistry/dental-veneers-dentistry/#procedure"
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
      "@id": "https://www.radiant-smiles.com/cosmetic-dentistry/dental-veneers-dentistry/#breadcrumb",
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
          "name": "Porcelain Veneers",
          "item": "https://www.radiant-smiles.com/cosmetic-dentistry/dental-veneers-dentistry/"
        }
      ]
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://www.radiant-smiles.com/cosmetic-dentistry/dental-veneers-dentistry/#procedure",
      "name": "Porcelain veneers",
      "description": "Porcelain veneers are thin shells of ceramic bonded to the front of your teeth to change their color, shape or size.",
      "bodyLocation": "Front teeth"
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
      "@id": "https://www.radiant-smiles.com/cosmetic-dentistry/dental-veneers-dentistry/#faq",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/cosmetic-dentistry/dental-veneers-dentistry/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much are porcelain veneers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The price of porcelain veneers depends on how many teeth are treated and what each tooth needs, so it's set after an exam. At Radiant Smiles @ Floral Vale you get the cost of your plan before treatment starts, and CareCredit financing and our membership plan, with 15% off dental treatment, can help spread or reduce the cost."
          }
        },
        {
          "@type": "Question",
          "name": "How long do porcelain veneers last?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "With proper care, porcelain veneers can last well over a decade. The porcelain resists stains from coffee, tea and cigarettes. Avoiding hard habits such as nail biting, and wearing a night guard if you grind, helps them last. If one veneer is damaged, it can usually be replaced on its own."
          }
        },
        {
          "@type": "Question",
          "name": "How do I care for porcelain veneers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Care for porcelain veneers as you would natural teeth: brush twice a day with fluoride toothpaste, clean between your teeth daily and keep regular checkups. Don't use veneers to open packages, avoid biting ice or nails, and wear a mouthguard for contact sports and a night guard if you grind."
          }
        },
        {
          "@type": "Question",
          "name": "Are porcelain veneers permanent?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Placing porcelain veneers usually involves removing a thin layer of enamel from the front of each tooth, so the treatment can't be reversed. The teeth will always need a veneer or another restoration. That's why we check your enamel and talk through alternatives, such as bonding or whitening, before you decide."
          }
        },
        {
          "@type": "Question",
          "name": "Can veneers be whitened?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Whitening gel works on natural teeth, not porcelain, so veneers keep the shade they were made in. If you want whiter teeth overall, whiten your natural teeth first, then have your veneers matched to the new shade. Porcelain resists staining well, so the veneers themselves rarely need it."
          }
        },
        {
          "@type": "Question",
          "name": "How many veneers will I need?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on your goal. A single veneer can fix one chipped or discolored tooth, matched to its neighbors. For a broader change, veneers are usually placed on the top front six to eight teeth, the ones that show when you smile. Your dentist will recommend a number after your consultation."
          }
        }
      ]
    }
  ]
}
```

### 3c. Optional additions later

- `"sameAs"` on the procedure pointing to a neutral reference (e.g. the ADA MouthHealthy veneers page) if the team wants it; not required.

### 3d. Keep in sync

The schema is generated from the page copy. If the title, meta description, FAQs, offers or procedure description change on the page, update the schema in the same commit. **Validate with** Google's Rich Results Test and validator.schema.org after deploy.
