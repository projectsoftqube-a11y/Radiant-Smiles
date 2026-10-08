# Periodontal Maintenance: Developer Handoff

**URL:** `/preventative-care/periodontal-maintenance/` | **Status:** Final v1, 7 Oct 2026. Ready to build.

## 1. Head tags

```html
<title>Periodontal Maintenance in Yardley, PA | Radiant Smiles</title>
<meta name="description" content="Periodontal maintenance in Yardley, PA: gum cleanings that keep gum disease in check after a deep cleaning. Members pay $75 per additional visit.">
<link rel="canonical" href="https://www.radiant-smiles.com/preventative-care/periodontal-maintenance/">
<meta property="og:type" content="website">
<meta property="og:title" content="Periodontal Maintenance in Yardley, PA | Radiant Smiles">
<meta property="og:description" content="Periodontal maintenance in Yardley, PA: gum cleanings that keep gum disease in check after a deep cleaning. Members pay $75 per additional visit.">
<meta property="og:url" content="https://www.radiant-smiles.com/preventative-care/periodontal-maintenance/">
<!-- og:image: add once a real office or team photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Periodontal Maintenance in Yardley, PA". Keep heading levels exactly as in `02 Content.md` (H2 sections, H3 sub-sections, H3 per FAQ question). Visible breadcrumb: Home › Preventive Care › Periodontal Maintenance.
- **Price wording:** "$75 each" applies to membership plan members only. Keep "membership plan" next to every mention of $75.
- **Never describe the practice or dentists as periodontists or gum specialists.**
- **Server-render all text** (Next.js SSG/SSR). Lists, tables, FAQs and the address must be in the initial HTML, not injected by client-side JS or shown only in images.
- **FAQs:** visible on the page. If you use an accordion, the answer text must be in the DOM on load (`<details>`/`<summary>` is ideal).
- **Tables:** build each table as a real HTML `<table>` with `<th>` header cells, and let it scroll horizontally inside its own container on phones.
- **NAP:** show `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067, (215) 860-4600` as text in the final CTA and the site footer, character for character as on the homepage and the Google Business Profile.
- **Phone:** every phone number and call button links to `tel:+12158604600`. **No `sms:` link**: texting is not confirmed by the practice.
- **Links:** every link in `02 Content.md` is a crawlable `<a href>` with the anchor text as written (no onClick-only navigation). The appointment button goes to `/patient-information/scheduling/`.
- **Images:** real photos of the office and team only (no stock images presented as this practice's patients), with descriptive alt text, for example "Hygienist cleaning below the gumline during a periodontal maintenance visit at Radiant Smiles @ Floral Vale, Yardley, PA".
- **Tracking:** fire separate events for call clicks (`click_call`), appointment button clicks (`click_book`), so conversions from this page can be measured.

## 3. Structured data (JSON-LD)

### 3a. Core (required)

MedicalWebPage + MedicalProcedure (periodontal maintenance), plus BreadcrumbList. The business is referenced only by `@id` (`https://www.radiant-smiles.com/#dentist`); the full Dentist node lives on the homepage. The WebPage `name` and `description` equal the title tag and meta description exactly.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.radiant-smiles.com/preventative-care/periodontal-maintenance/#webpage",
      "url": "https://www.radiant-smiles.com/preventative-care/periodontal-maintenance/",
      "name": "Periodontal Maintenance in Yardley, PA | Radiant Smiles",
      "description": "Periodontal maintenance in Yardley, PA: gum cleanings that keep gum disease in check after a deep cleaning. Members pay $75 per additional visit.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/preventative-care/periodontal-maintenance/#breadcrumb"
      },
      "about": [
        {
          "@id": "https://www.radiant-smiles.com/preventative-care/periodontal-maintenance/#procedure"
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
      "@id": "https://www.radiant-smiles.com/preventative-care/periodontal-maintenance/#breadcrumb",
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
          "name": "Periodontal Maintenance",
          "item": "https://www.radiant-smiles.com/preventative-care/periodontal-maintenance/"
        }
      ]
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://www.radiant-smiles.com/preventative-care/periodontal-maintenance/#procedure",
      "name": "Periodontal maintenance",
      "alternateName": "Perio maintenance",
      "description": "Periodontal maintenance is a deeper, ongoing cleaning for people who have been treated for gum disease.",
      "url": "https://www.radiant-smiles.com/preventative-care/periodontal-maintenance/"
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
      "@id": "https://www.radiant-smiles.com/preventative-care/periodontal-maintenance/#faq",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/preventative-care/periodontal-maintenance/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is periodontal maintenance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Periodontal maintenance is an ongoing cleaning for people who have been treated for gum disease. It removes plaque and tartar from above and below the gumline, checks the depth of your gum pockets and keeps the infection under control. It usually replaces regular cleanings after a deep cleaning."
          }
        },
        {
          "@type": "Question",
          "name": "How often do I need periodontal maintenance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The dentist sets the interval based on your gum measurements and how your gums respond to treatment. For many people with a history of gum disease, visits are more frequent than the twice-a-year schedule for regular cleanings. The schedule is reviewed as your gums change."
          }
        },
        {
          "@type": "Question",
          "name": "How much does periodontal maintenance cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For members of the Radiant Smiles @ Floral Vale in-office membership plan, each additional periodontal maintenance visit is $75. The plan itself is $150 a year and includes 2 cleanings, exams and X-rays. With insurance, coverage depends on your plan, so call (215) 860-4600 to check."
          }
        },
        {
          "@type": "Question",
          "name": "Can I go back to regular cleanings?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Usually not. Once you've had gum disease, the pockets below your gumline need deeper cleaning than a regular visit gives. The dentist will review your gum measurements at each visit and talk with you about the right type of cleaning and how often you should come in."
          }
        }
      ]
    }
  ]
}
```

### 3c. Keep in sync

The schema is generated from the page copy. If the title, meta description, the hero sentence used as the procedure description, FAQs, prices change on the page, update the JSON-LD in the same commit. Validate with Google's Rich Results Test and validator.schema.org after deploy.
