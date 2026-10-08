# Preventive Care: Developer Handoff

**URL:** `/preventative-care/` | **Status:** Final v1, 7 Oct 2026. Ready to build.

## 1. Head tags

```html
<title>Preventive Dentistry in Yardley, PA | Radiant Smiles</title>
<meta name="description" content="Preventive dentistry in Yardley, PA: cleanings, exams, digital X-rays, fluoride, sealants and gum care for adults and kids. Call (215) 860-4600.">
<link rel="canonical" href="https://www.radiant-smiles.com/preventative-care/">
<meta property="og:type" content="website">
<meta property="og:title" content="Preventive Dentistry in Yardley, PA | Radiant Smiles">
<meta property="og:description" content="Preventive dentistry in Yardley, PA: cleanings, exams, digital X-rays, fluoride, sealants and gum care for adults and kids. Call (215) 860-4600.">
<meta property="og:url" content="https://www.radiant-smiles.com/preventative-care/">
<!-- og:image: add once a real office or team photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Preventive Dentistry in Yardley, PA". Keep heading levels exactly as in `02 Content.md` (H2 sections, H3 sub-sections, H3 per FAQ question). Visible breadcrumb: Home › Preventive Care.
- **Hub layout:** the "at a Glance" table is the service directory. On desktop it can render as a table; on phones it may become stacked cards, but every service name must stay a crawlable link with the same anchor text.
- **Gum Health and Kids sections** link to child pages with descriptive anchors; don't replace them with generic "Learn more" buttons.
- **Redirects:** none into this page. The old `/general-dentistry/` URL 301s to `/family-dentistry/`, not here.
- **Server-render all text** (Next.js SSG/SSR). Lists, tables, FAQs and the address must be in the initial HTML, not injected by client-side JS or shown only in images.
- **FAQs:** visible on the page. If you use an accordion, the answer text must be in the DOM on load (`<details>`/`<summary>` is ideal).
- **Tables:** build each table as a real HTML `<table>` with `<th>` header cells, and let it scroll horizontally inside its own container on phones.
- **NAP:** show `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067, (215) 860-4600` as text in the final CTA and the site footer, character for character as on the homepage and the Google Business Profile.
- **Phone:** every phone number and call button links to `tel:+12158604600`. **No `sms:` link**: texting is not confirmed by the practice.
- **Links:** every link in `02 Content.md` is a crawlable `<a href>` with the anchor text as written (no onClick-only navigation). The appointment button goes to `/patient-information/scheduling/`.
- **Images:** real photos of the office and team only (no stock images presented as this practice's patients), with descriptive alt text, for example "Hygienist cleaning a patient's teeth at Radiant Smiles @ Floral Vale in Yardley, PA".
- **Tracking:** fire separate events for call clicks (`click_call`), appointment button clicks (`click_book`), so conversions from this page can be measured.

## 3. Structured data (JSON-LD)

### 3a. Core (required)

MedicalWebPage for the hub, with an ItemList of the nine preventive service pages as its `mainEntity`, and a BreadcrumbList. The business is referenced only by `@id` (`https://www.radiant-smiles.com/#dentist`); the full Dentist node lives on the homepage. The WebPage `name` and `description` equal the title tag and meta description exactly.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.radiant-smiles.com/preventative-care/#webpage",
      "url": "https://www.radiant-smiles.com/preventative-care/",
      "name": "Preventive Dentistry in Yardley, PA | Radiant Smiles",
      "description": "Preventive dentistry in Yardley, PA: cleanings, exams, digital X-rays, fluoride, sealants and gum care for adults and kids. Call (215) 860-4600.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/preventative-care/#breadcrumb"
      },
      "about": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      },
      "provider": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      },
      "mainEntity": {
        "@id": "https://www.radiant-smiles.com/preventative-care/#services"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.radiant-smiles.com/preventative-care/#breadcrumb",
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
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://www.radiant-smiles.com/preventative-care/#services",
      "name": "Preventive dental services at Radiant Smiles @ Floral Vale",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Teeth cleaning and checkups",
          "url": "https://www.radiant-smiles.com/preventative-care/teeth-cleaning-and-check-ups/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Oral cancer screening",
          "url": "https://www.radiant-smiles.com/preventative-care/oral-cancer-screening/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Fluoride treatment",
          "url": "https://www.radiant-smiles.com/preventative-care/fluoride/"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Dental sealants",
          "url": "https://www.radiant-smiles.com/preventative-care/dental-sealants/"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Oral hygiene tips",
          "url": "https://www.radiant-smiles.com/preventative-care/oral-hygiene/"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Children's dentistry",
          "url": "https://www.radiant-smiles.com/preventative-care/child-dentistry/"
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "Deep teeth cleaning",
          "url": "https://www.radiant-smiles.com/preventative-care/deep-teeth-cleaning/"
        },
        {
          "@type": "ListItem",
          "position": 8,
          "name": "Periodontal maintenance",
          "url": "https://www.radiant-smiles.com/preventative-care/periodontal-maintenance/"
        },
        {
          "@type": "ListItem",
          "position": 9,
          "name": "Custom night guards",
          "url": "https://www.radiant-smiles.com/preventative-care/professional-night-guards/"
        }
      ]
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
      "@id": "https://www.radiant-smiles.com/preventative-care/#faq",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/preventative-care/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is preventive dentistry?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Preventive dentistry is routine care that stops dental problems before they start or catches them early. It includes checkups, professional cleanings, X-rays, oral cancer screening, fluoride, sealants, gum care and advice for brushing and flossing at home, so small issues don't turn into fillings, root canals or lost teeth."
          }
        },
        {
          "@type": "Question",
          "name": "How often should I have a checkup and cleaning?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Twice a year is the routine we recommend for most patients. If you have gum disease or get cavities often, the dentist may suggest coming in more often. Each visit takes about an hour and includes an exam, a cleaning and X-rays when you're due for them."
          }
        },
        {
          "@type": "Question",
          "name": "Do you see children for preventive care?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Radiant Smiles @ Floral Vale sees children from their first visit, just after their first birthday. Kids' visits include a gentle exam and cleaning, and the dentist may recommend fluoride or sealants to help protect their teeth. Parents get simple advice for brushing and snacks at home."
          }
        },
        {
          "@type": "Question",
          "name": "What if I don't have dental insurance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You have two options. New patients without insurance can have a cleaning, X-rays and an exam for $89. Our in-office membership plan is $150 a year and covers 2 cleanings, exams and X-rays, plus 15% off dental treatment. CareCredit financing is also available."
          }
        }
      ]
    }
  ]
}
```

### 3c. Keep in sync

The schema is generated from the page copy. If the title, meta description, FAQs, or the list of service pages change on the page, update the JSON-LD in the same commit. Validate with Google's Rich Results Test and validator.schema.org after deploy.
