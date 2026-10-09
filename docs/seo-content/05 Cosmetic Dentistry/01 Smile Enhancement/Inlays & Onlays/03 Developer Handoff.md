# Inlays & Onlays: Developer Handoff

**URL:** `/cosmetic-dentistry/inlays-onlays/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Inlays & Onlays in Yardley, PA | Radiant Smiles</title>
<meta name="description" content="Inlays and onlays in Yardley, PA: porcelain, gold or composite repairs for back teeth too damaged for a filling, in two visits. Call (215) 860-4600.">
<link rel="canonical" href="https://www.radiant-smiles.com/cosmetic-dentistry/inlays-onlays/">
<meta property="og:type" content="website">
<meta property="og:title" content="Inlays & Onlays in Yardley, PA | Radiant Smiles">
<meta property="og:description" content="Inlays and onlays in Yardley, PA: porcelain, gold or composite repairs for back teeth too damaged for a filling, in two visits. Call (215) 860-4600.">
<meta property="og:url" content="https://www.radiant-smiles.com/cosmetic-dentistry/inlays-onlays/">
<meta property="og:site_name" content="Radiant Smiles @ Floral Vale">
```

## 2. Page build rules

- **One H1:** "Inlays and Onlays in Yardley, PA". Breadcrumb: Home › Cosmetic Dentistry › Inlays & Onlays.
- **URL and section:** stays under `/cosmetic-dentistry/` (existing URL). The page links across to `/restorative-dentistry/dental-fillings/` and `/restorative-dentistry/dental-crowns/`; ask the Restorative hub to link back here with the anchor "inlays and onlays".
- **Comparison table** (filling / inlay / onlay / crown) as a real HTML `<table>`; the Filling and Crown cells are links.
- **Two-visit steps** as two ordered lists under "First visit" and "Second visit" (use `<h3>` or bold labels).
- **Don't add the old site's strength percentages** ("reduce strength by up to 50%", "increase strength by up to 75%"): they have no source.
- **No prices** except the published offers exactly as worded on `/special-offers/` (whitening $100 off, regular $550; Invisalign $1,000 off, regular $5,800). No 'best', 'painless', 'guaranteed' or specialist wording.
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
      "@id": "https://www.radiant-smiles.com/cosmetic-dentistry/inlays-onlays/#webpage",
      "url": "https://www.radiant-smiles.com/cosmetic-dentistry/inlays-onlays/",
      "name": "Inlays & Onlays in Yardley, PA | Radiant Smiles",
      "description": "Inlays and onlays in Yardley, PA: porcelain, gold or composite repairs for back teeth too damaged for a filling, in two visits. Call (215) 860-4600.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/cosmetic-dentistry/inlays-onlays/#breadcrumb"
      },
      "about": [
        {
          "@id": "https://www.radiant-smiles.com/cosmetic-dentistry/inlays-onlays/#procedure"
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
      "@id": "https://www.radiant-smiles.com/cosmetic-dentistry/inlays-onlays/#breadcrumb",
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
          "name": "Inlays & Onlays",
          "item": "https://www.radiant-smiles.com/cosmetic-dentistry/inlays-onlays/"
        }
      ]
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://www.radiant-smiles.com/cosmetic-dentistry/inlays-onlays/#procedure",
      "name": "Dental inlays and onlays",
      "description": "Inlays and onlays are custom-made restorations that repair a back tooth when the damage is too large for a filling but the tooth doesn't need a full crown."
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
      "@id": "https://www.radiant-smiles.com/cosmetic-dentistry/inlays-onlays/#faq",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/cosmetic-dentistry/inlays-onlays/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the difference between an inlay and an onlay?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An inlay sits inside the cusps, or raised points, of a back tooth and fills the center of the chewing surface. An onlay is larger and covers one or more of the cusps as well. Both are custom-made in porcelain, gold or composite resin and bonded to the tooth."
          }
        },
        {
          "@type": "Question",
          "name": "How long do inlays and onlays last?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Inlays and onlays typically last from 10 to 30 years. The lifespan depends on the material, the size of the restoration, your bite and how well you care for your teeth. Brushing twice a day, cleaning between teeth and keeping regular checkups all help them last."
          }
        },
        {
          "@type": "Question",
          "name": "Is an onlay better than a crown?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Neither is better in every case. An onlay keeps more of your natural tooth, because only the damaged part is replaced. A crown covers the whole tooth and is the stronger choice when the tooth is badly weakened or cracked. Your dentist will recommend one after examining the tooth."
          }
        },
        {
          "@type": "Question",
          "name": "How many visits does an inlay or onlay take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Two. At the first visit the damage is removed, the tooth is prepared, an impression goes to the lab and a temporary sealant protects the tooth. At the second visit the dentist checks the fit, then bonds the inlay or onlay in place with a high-strength resin and polishes it."
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
