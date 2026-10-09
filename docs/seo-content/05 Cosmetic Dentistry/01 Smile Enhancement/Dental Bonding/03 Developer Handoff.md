# Dental Bonding: Developer Handoff

**URL:** `/cosmetic-dentistry/dental-bonding/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Dental Bonding in Yardley, PA | Radiant Smiles</title>
<meta name="description" content="Dental bonding in Yardley, PA repairs chipped, cracked or discolored teeth with tooth-colored resin, often in one visit. Call (215) 860-4600.">
<link rel="canonical" href="https://www.radiant-smiles.com/cosmetic-dentistry/dental-bonding/">
<meta property="og:type" content="website">
<meta property="og:title" content="Dental Bonding in Yardley, PA | Radiant Smiles">
<meta property="og:description" content="Dental bonding in Yardley, PA repairs chipped, cracked or discolored teeth with tooth-colored resin, often in one visit. Call (215) 860-4600.">
<meta property="og:url" content="https://www.radiant-smiles.com/cosmetic-dentistry/dental-bonding/">
<meta property="og:site_name" content="Radiant Smiles @ Floral Vale">
```

## 2. Page build rules

- **One H1:** "Dental Bonding in Yardley, PA". Breadcrumb: Home › Cosmetic Dentistry › Dental Bonding.
- **Steps** in "The One-Visit Dental Bonding Process" as an ordered list `<ol>`. Keep "often" in "often completed in one visit" (not every case is one visit).
- **Comparison table** (dental bonding vs veneers) as a real HTML `<table>`.
- **No prices** except the published offers exactly as worded on `/special-offers/` (whitening $100 off, regular $550; Invisalign $1,000 off, regular $5,800). No 'best', 'painless', 'guaranteed' or specialist wording. No bonding price is published: don't add one.
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
      "@id": "https://www.radiant-smiles.com/cosmetic-dentistry/dental-bonding/#webpage",
      "url": "https://www.radiant-smiles.com/cosmetic-dentistry/dental-bonding/",
      "name": "Dental Bonding in Yardley, PA | Radiant Smiles",
      "description": "Dental bonding in Yardley, PA repairs chipped, cracked or discolored teeth with tooth-colored resin, often in one visit. Call (215) 860-4600.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/cosmetic-dentistry/dental-bonding/#breadcrumb"
      },
      "about": [
        {
          "@id": "https://www.radiant-smiles.com/cosmetic-dentistry/dental-bonding/#procedure"
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
      "@id": "https://www.radiant-smiles.com/cosmetic-dentistry/dental-bonding/#breadcrumb",
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
          "name": "Dental Bonding",
          "item": "https://www.radiant-smiles.com/cosmetic-dentistry/dental-bonding/"
        }
      ]
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://www.radiant-smiles.com/cosmetic-dentistry/dental-bonding/#procedure",
      "name": "Dental bonding",
      "description": "Dental bonding repairs a chipped, cracked, discolored or slightly uneven tooth with tooth-colored resin that is sculpted, trimmed and polished in place.",
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
      "@id": "https://www.radiant-smiles.com/cosmetic-dentistry/dental-bonding/#faq",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/cosmetic-dentistry/dental-bonding/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How long does dental bonding last?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dental bonding typically lasts three to five years before it needs repair. The resin isn't as strong as natural enamel, so it can stain, chip or break over time. Avoiding hard habits like biting ice or nails, limiting staining drinks and keeping regular checkups all help your bonding last longer."
          }
        },
        {
          "@type": "Question",
          "name": "Is dental bonding done in one visit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Often, yes. Because the resin is shaped directly on your tooth, there's nothing to send to a lab. The tooth is lightly etched, a bonding liquid is applied, and the resin is sculpted, trimmed and polished in the same appointment. Several teeth, or more complex repairs, may need more time."
          }
        },
        {
          "@type": "Question",
          "name": "Should I choose dental bonding or veneers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Choose bonding for one or a few small fixes, such as a chipped edge or a dark spot, when you want a quick, lower-cost repair. Porcelain veneers suit larger changes across several front teeth and last longer, but usually involve removing a thin layer of enamel. Your dentist will explain which fits your goals."
          }
        },
        {
          "@type": "Question",
          "name": "Does insurance cover dental bonding?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on why you need it. Insurance plans usually don't cover bonding done only to improve appearance, but may cover part of the cost when bonding repairs a chipped or broken tooth. Radiant Smiles @ Floral Vale accepts many PPO plans; call (215) 860-4600 to check what your plan covers."
          }
        },
        {
          "@type": "Question",
          "name": "Can dental bonding be whitened?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Whitening gel lightens natural teeth, not bonding resin. If you'd like whiter teeth as well as bonding, whiten first, then have the bonding matched to your new shade. If existing bonding no longer matches after whitening, it can be replaced to blend in with your brighter teeth."
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
