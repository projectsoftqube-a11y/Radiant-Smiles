# Night Guards: Developer Handoff

**URL:** `/preventative-care/professional-night-guards/` | **Status:** Final v1, 7 Oct 2026. Ready to build.

## 1. Head tags

```html
<title>Custom Night Guards in Yardley, PA | Teeth Grinding</title>
<meta name="description" content="Custom night guards in Yardley, PA protect your teeth from grinding and clenching. Lab-made from an impression of your teeth. Call (215) 860-4600.">
<link rel="canonical" href="https://www.radiant-smiles.com/preventative-care/professional-night-guards/">
<meta property="og:type" content="website">
<meta property="og:title" content="Custom Night Guards in Yardley, PA | Teeth Grinding">
<meta property="og:description" content="Custom night guards in Yardley, PA protect your teeth from grinding and clenching. Lab-made from an impression of your teeth. Call (215) 860-4600.">
<meta property="og:url" content="https://www.radiant-smiles.com/preventative-care/professional-night-guards/">
<!-- og:image: add once a real office or team photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Custom Night Guards in Yardley, PA". Keep heading levels exactly as in `02 Content.md` (H2 sections, H3 sub-sections, H3 per FAQ question). Visible breadcrumb: Home › Preventive Care › Night Guards.
- **TMJ:** mentioned only as a possible cause of jaw pain. Don't add "TMJ treatment" to headings, schema or alt text.
- **Comparison table** (over-the-counter vs boil-and-bite vs custom) as a real HTML table.
- **No prices:** none are published for night guards.
- **Server-render all text** (Next.js SSG/SSR). Lists, tables, FAQs and the address must be in the initial HTML, not injected by client-side JS or shown only in images.
- **FAQs:** visible on the page. If you use an accordion, the answer text must be in the DOM on load (`<details>`/`<summary>` is ideal).
- **Tables:** build each table as a real HTML `<table>` with `<th>` header cells, and let it scroll horizontally inside its own container on phones.
- **NAP:** show `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067, (215) 860-4600` as text in the final CTA and the site footer, character for character as on the homepage and the Google Business Profile.
- **Phone:** every phone number and call button links to `tel:+12158604600`. **No `sms:` link**: texting is not confirmed by the practice.
- **Links:** every link in `02 Content.md` is a crawlable `<a href>` with the anchor text as written (no onClick-only navigation). The appointment button goes to `/patient-information/scheduling/`.
- **Images:** real photos of the office and team only (no stock images presented as this practice's patients), with descriptive alt text, for example "Custom lab-made night guard made at Radiant Smiles @ Floral Vale in Yardley, PA".
- **Tracking:** fire separate events for call clicks (`click_call`), appointment button clicks (`click_book`), so conversions from this page can be measured.

## 3. Structured data (JSON-LD)

### 3a. Core (required)

MedicalWebPage + Service (custom lab-made night guards) with `provider` → the practice and `areaServed` Yardley, plus BreadcrumbList. The business is referenced only by `@id` (`https://www.radiant-smiles.com/#dentist`); the full Dentist node lives on the homepage. The WebPage `name` and `description` equal the title tag and meta description exactly.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.radiant-smiles.com/preventative-care/professional-night-guards/#webpage",
      "url": "https://www.radiant-smiles.com/preventative-care/professional-night-guards/",
      "name": "Custom Night Guards in Yardley, PA | Teeth Grinding",
      "description": "Custom night guards in Yardley, PA protect your teeth from grinding and clenching. Lab-made from an impression of your teeth. Call (215) 860-4600.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/preventative-care/professional-night-guards/#breadcrumb"
      },
      "about": [
        {
          "@id": "https://www.radiant-smiles.com/preventative-care/professional-night-guards/#service"
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
      "@id": "https://www.radiant-smiles.com/preventative-care/professional-night-guards/#breadcrumb",
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
          "name": "Preventive Care",
          "item": "https://www.radiant-smiles.com/preventative-care/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Night Guards",
          "item": "https://www.radiant-smiles.com/preventative-care/professional-night-guards/"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.radiant-smiles.com/preventative-care/professional-night-guards/#service",
      "name": "Custom night guards",
      "description": "A custom night guard is a thin, lab-made mouthguard you wear while you sleep to protect your teeth from grinding and clenching.",
      "serviceType": "Custom lab-made night guards for teeth grinding",
      "provider": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      },
      "areaServed": {
        "@type": "City",
        "name": "Yardley",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "Bucks County, Pennsylvania"
        }
      },
      "url": "https://www.radiant-smiles.com/preventative-care/professional-night-guards/"
    }
  ]
}
```

### 3b. FAQPage (optional)

Google stopped showing FAQ rich results on 7 May 2026. The markup is still valid and keeps the Q&A machine-readable for other search and AI systems. Include it only while the visible FAQ text stays identical.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": "https://www.radiant-smiles.com/preventative-care/professional-night-guards/#faq",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/preventative-care/professional-night-guards/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do I need a night guard?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You may need a night guard if you wake up with jaw pain or headaches, your teeth look worn or chipped, or someone hears you grinding at night. The dentist at Radiant Smiles @ Floral Vale can check your teeth for signs of grinding and tell you whether a custom guard would help."
          }
        },
        {
          "@type": "Question",
          "name": "Is a custom night guard better than a store-bought one?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A custom night guard fits more closely, because it's made in a dental lab from an impression of your teeth. Store-bought guards are one-size or boil-and-bite, so they're often bulkier and looser. A guard that fits well is easier to wear every night, which is when it protects you."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to get a custom night guard?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It usually takes two visits. At the first, the dentist checks your teeth and takes an impression. The impression goes to a dental lab, where your guard is made. At the second visit, you try on the guard and the dentist checks the fit and makes any adjustments."
          }
        },
        {
          "@type": "Question",
          "name": "How do I clean my night guard?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Rinse or gently brush your night guard after each use, let it dry and keep it in its case. Keep it away from heat, such as hot water or a car in the sun, because heat can warp it. Bring it to your checkups so the dentist can check its fit."
          }
        }
      ]
    }
  ]
}
```

### 3c. Keep in sync

The schema is generated from the page copy. If the title, meta description, the hero sentence used as the service description, FAQs change on the page, update the JSON-LD in the same commit. Validate with Google's Rich Results Test and validator.schema.org after deploy.
