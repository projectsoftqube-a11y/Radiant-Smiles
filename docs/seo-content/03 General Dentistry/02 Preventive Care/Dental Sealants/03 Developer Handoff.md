# Dental Sealants: Developer Handoff

**URL:** `/preventative-care/dental-sealants/` | **Status:** Final v1, 7 Oct 2026. Ready to build.

## 1. Head tags

```html
<title>Dental Sealants in Yardley, PA | Radiant Smiles</title>
<meta name="description" content="Dental sealants in Yardley, PA: a thin, tooth-colored coating that seals the grooves of back teeth against cavities, for kids and adults. (215) 860-4600.">
<link rel="canonical" href="https://www.radiant-smiles.com/preventative-care/dental-sealants/">
<meta property="og:type" content="website">
<meta property="og:title" content="Dental Sealants in Yardley, PA | Radiant Smiles">
<meta property="og:description" content="Dental sealants in Yardley, PA: a thin, tooth-colored coating that seals the grooves of back teeth against cavities, for kids and adults. (215) 860-4600.">
<meta property="og:url" content="https://www.radiant-smiles.com/preventative-care/dental-sealants/">
<!-- og:image: add once a real office or team photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Dental Sealants in Yardley, PA". Keep heading levels exactly as in `02 Content.md` (H2 sections, H3 sub-sections, H3 per FAQ question). Visible breadcrumb: Home › Preventive Care › Dental Sealants.
- **No prices** for sealants: none are published.
- **Process list** is an ordered list (`<ol>`).
- **Server-render all text** (Next.js SSG/SSR). Lists, tables, FAQs and the address must be in the initial HTML, not injected by client-side JS or shown only in images.
- **FAQs:** visible on the page. If you use an accordion, the answer text must be in the DOM on load (`<details>`/`<summary>` is ideal).
- **NAP:** show `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067, (215) 860-4600` as text in the final CTA and the site footer, character for character as on the homepage and the Google Business Profile.
- **Phone:** every phone number and call button links to `tel:+12158604600`. **No `sms:` link**: texting is not confirmed by the practice.
- **Links:** every link in `02 Content.md` is a crawlable `<a href>` with the anchor text as written (no onClick-only navigation). The appointment button goes to `/patient-information/scheduling/`.
- **Images:** real photos of the office and team only (no stock images presented as this practice's patients), with descriptive alt text, for example "Dentist applying a tooth-colored sealant to a child's back tooth at Radiant Smiles @ Floral Vale, Yardley, PA".
- **Tracking:** fire separate events for call clicks (`click_call`), appointment button clicks (`click_book`), so conversions from this page can be measured.

## 3. Structured data (JSON-LD)

### 3a. Core (required)

MedicalWebPage + MedicalProcedure (dental sealants), plus BreadcrumbList. The business is referenced only by `@id` (`https://www.radiant-smiles.com/#dentist`); the full Dentist node lives on the homepage. The WebPage `name` and `description` equal the title tag and meta description exactly.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.radiant-smiles.com/preventative-care/dental-sealants/#webpage",
      "url": "https://www.radiant-smiles.com/preventative-care/dental-sealants/",
      "name": "Dental Sealants in Yardley, PA | Radiant Smiles",
      "description": "Dental sealants in Yardley, PA: a thin, tooth-colored coating that seals the grooves of back teeth against cavities, for kids and adults. (215) 860-4600.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/preventative-care/dental-sealants/#breadcrumb"
      },
      "about": [
        {
          "@id": "https://www.radiant-smiles.com/preventative-care/dental-sealants/#procedure"
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
      "@id": "https://www.radiant-smiles.com/preventative-care/dental-sealants/#breadcrumb",
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
          "name": "Dental Sealants",
          "item": "https://www.radiant-smiles.com/preventative-care/dental-sealants/"
        }
      ]
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://www.radiant-smiles.com/preventative-care/dental-sealants/#procedure",
      "name": "Dental sealants",
      "description": "A dental sealant is a thin, tooth-colored coating painted onto the chewing surfaces of the back teeth to seal the deep grooves where cavities often start.",
      "url": "https://www.radiant-smiles.com/preventative-care/dental-sealants/"
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
      "@id": "https://www.radiant-smiles.com/preventative-care/dental-sealants/#faq",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/preventative-care/dental-sealants/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Are dental sealants worth it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For many children and adults with deep grooves in their back teeth, yes. A sealant takes a few minutes per tooth, needs no drilling, and protects the chewing surfaces where cavities often start. Sealing a healthy tooth is simpler than filling one later. Your dentist will tell you whether your teeth would benefit."
          }
        },
        {
          "@type": "Question",
          "name": "How long do dental sealants last?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dental sealants usually last several years before they need to be reapplied. They can be checked at your regular checkups at Radiant Smiles @ Floral Vale, and a worn or chipped sealant can be touched up or reapplied so the tooth stays protected."
          }
        },
        {
          "@type": "Question",
          "name": "Can adults get dental sealants?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Sealants are most common on children's back teeth, but adults with deep grooves and no cavities in those teeth can benefit too. The dentist will check your molars at your next visit and tell you if sealants would help."
          }
        },
        {
          "@type": "Question",
          "name": "Does getting a sealant hurt?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Getting a sealant is usually comfortable and needs no numbing or drilling. The tooth is cleaned and dried, the sealant is painted on, and it hardens in place. Each tooth takes a few minutes, and you can eat and drink normally afterwards."
          }
        }
      ]
    }
  ]
}
```

### 3c. Keep in sync

The schema is generated from the page copy. If the title, meta description, the hero sentence used as the procedure description, FAQs change on the page, update the JSON-LD in the same commit. Validate with Google's Rich Results Test and validator.schema.org after deploy.
