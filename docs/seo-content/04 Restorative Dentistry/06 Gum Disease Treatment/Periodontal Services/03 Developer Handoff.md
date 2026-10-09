# Periodontal Services: Developer Handoff

**URL:** `/restorative-dentistry/periodontal-services/` | **Status:** Final v1, 7 Oct 2026. Ready to build.

## 1. Head tags

```html
<title>Gum Disease Treatment in Yardley, PA | Radiant Smiles</title>
<meta name="description" content="Bleeding or receding gums? Gum disease treatment in Yardley, PA: deep cleaning, Arestin, laser therapy and maintenance visits. Call (215) 860-4600.">
<link rel="canonical" href="https://www.radiant-smiles.com/restorative-dentistry/periodontal-services/">
<meta name="robots" content="index, follow">
<meta property="og:type" content="website">
<meta property="og:title" content="Gum Disease Treatment in Yardley, PA | Radiant Smiles">
<meta property="og:description" content="Bleeding or receding gums? Gum disease treatment in Yardley, PA: deep cleaning, Arestin, laser therapy and maintenance visits. Call (215) 860-4600.">
<meta property="og:url" content="https://www.radiant-smiles.com/restorative-dentistry/periodontal-services/">
<meta property="og:site_name" content="Radiant Smiles @ Floral Vale">
<!-- og:image: add once a real office or case photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Gum Disease Treatment in Yardley, PA". Keep the heading levels exactly as in `02 Content.md` (H2 sections, H3 sub-sections and one H3 per FAQ question). Visible breadcrumb: Home › Restorative Dentistry › Periodontal Services.
- **Server-render all text** (Next.js SSG/SSR). Lists, tables, FAQs and the address must be in the initial HTML, not loaded by client-side JS or shown only inside images.
- **FAQs:** visible on the page. If you use an accordion, the answer text must still be in the DOM on load (`<details>`/`<summary>` is ideal).
- **NAP:** the final CTA shows `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067 · (215) 860-4600` as text, identical to the footer and the Google Business Profile.
- **Phone:** every call button and phone number links to `tel:+12158604600`. No `sms:` link until texting is confirmed.
- **Appointment buttons** link to `/patient-information/scheduling/`.
- **Internal links:** crawlable `<a href>` with the anchor text shown in `02 Content.md`. Links on this page: `/patient-information/carecredit/`, `/patient-information/insurance-payment-options/`, `/patient-information/scheduling/`, `/preventative-care/arestin/`, `/preventative-care/deep-teeth-cleaning/`, `/preventative-care/gum-disease-laser-therapy/`, `/preventative-care/periodontal-maintenance/`.
- **Images:** descriptive alt text naming the treatment and "Radiant Smiles @ Floral Vale, Yardley, PA". Real photos only; before/after or patient images need written consent.
- **301:** `/restorative-dentistry/periodontal-services/treatment-methods/` must 301 to this URL.
- **Never** describe the practice or either dentist as a periodontist in copy, alt text, meta or schema. The only use of the word is the FAQ 'Do I need a periodontist to treat gum disease?', which answers honestly.
- **Links:** the four gum-health pages in the General Dentistry section (deep cleaning, Arestin, laser therapy, periodontal maintenance) are the detailed pages; keep the links.
- **301 redirects into this page:** `/restorative-dentistry/periodontal-services/treatment-methods/` → `/restorative-dentistry/periodontal-services/`. One hop, no chains; update internal links and drop the old URLs from sitemap.xml.
- **Tracking (all pages):** fire separate events for call clicks (`call_click`), appointment button clicks (`appointment_click`) and internal offer/financing link clicks (`offer_click`, `financing_click`).
- **Last reviewed date:** show "Last reviewed 7 Oct 2026" near the end of the page (matches `lastReviewed` in the schema); update both when the content is reviewed.

## 3. Structured data (JSON-LD)

Two `<script type="application/ld+json">` blocks, server-rendered. The business is referenced by `@id` only (`https://www.radiant-smiles.com/#dentist`); the full Dentist node lives on the Home page. Do not add Review or AggregateRating markup.

### 3a. Core (required)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.radiant-smiles.com/restorative-dentistry/periodontal-services/#webpage",
      "url": "https://www.radiant-smiles.com/restorative-dentistry/periodontal-services/",
      "name": "Gum Disease Treatment in Yardley, PA | Radiant Smiles",
      "description": "Bleeding or receding gums? Gum disease treatment in Yardley, PA: deep cleaning, Arestin, laser therapy and maintenance visits. Call (215) 860-4600.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/restorative-dentistry/periodontal-services/#breadcrumb"
      },
      "provider": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      },
      "lastReviewed": "2026-10-07",
      "about": [
        {
          "@id": "https://www.radiant-smiles.com/restorative-dentistry/periodontal-services/#procedure"
        },
        {
          "@id": "https://www.radiant-smiles.com/#dentist"
        }
      ],
      "mainEntity": {
        "@id": "https://www.radiant-smiles.com/restorative-dentistry/periodontal-services/#procedure"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.radiant-smiles.com/restorative-dentistry/periodontal-services/#breadcrumb",
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
          "name": "Restorative Dentistry",
          "item": "https://www.radiant-smiles.com/restorative-dentistry/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Periodontal Services",
          "item": "https://www.radiant-smiles.com/restorative-dentistry/periodontal-services/"
        }
      ]
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://www.radiant-smiles.com/restorative-dentistry/periodontal-services/#procedure",
      "name": "Gum disease treatment",
      "description": "Gum disease treatment removes the bacteria and tartar that infect your gums and the bone holding your teeth, then keeps the infection under control.",
      "relevantSpecialty": "https://schema.org/Dentistry",
      "url": "https://www.radiant-smiles.com/restorative-dentistry/periodontal-services/"
    }
  ]
}
```

### 3b. FAQPage (optional)

FAQ rich results are limited to a few sites, but the markup keeps the Q&A machine-readable for AI assistants. Text matches the visible FAQs word for word.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": "https://www.radiant-smiles.com/restorative-dentistry/periodontal-services/#faq",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/restorative-dentistry/periodontal-services/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can gum disease be reversed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Early gum disease can often be reversed with a professional cleaning and good daily brushing and flossing. Once the disease has damaged the bone and deeper tissue, it can't be fully undone, but treatment such as deep cleaning, Arestin and laser therapy can control it. Regular maintenance visits then help keep it from progressing."
          }
        },
        {
          "@type": "Question",
          "name": "Does a deep cleaning hurt?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A deep cleaning is usually comfortable, because a local anesthetic may be used to numb the area being treated. You may feel some tenderness in your gums for a short time afterward. If you're anxious, tell the team when you book; you can bring headphones and music and ask about sedation options."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need a periodontist to treat gum disease?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not always. The dentists at Radiant Smiles @ Floral Vale treat gum disease in the office with deep cleaning, Arestin, laser gum therapy and periodontal maintenance visits. If your gums need care beyond what the office provides, your dentist will tell you and explain your options."
          }
        },
        {
          "@type": "Question",
          "name": "How often do I need periodontal maintenance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Your dentist will recommend an interval based on how deep your gum pockets are and how your gums respond to treatment. Maintenance visits clean below the gum line and re-measure the pockets so any change is caught early. For membership plan members, each periodontal maintenance visit is $75."
          }
        },
        {
          "@type": "Question",
          "name": "What is Arestin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Arestin is an antibiotic, minocycline, that is placed directly into infected gum pockets, usually after a deep cleaning. Because it goes straight to the site of the infection, it works where the bacteria are. Your dentist will tell you whether Arestin would help your treatment."
          }
        }
      ]
    }
  ]
}
```

### 3d. Keep in sync

- `MedicalWebPage.name` and `description` equal the title tag and meta description exactly.
- `MedicalProcedure.description` is the first sentence of the page copy, word for word. If that sentence changes, update the schema.
- Every FAQ question and answer in 3b must match the visible FAQ text exactly. Edit both together.
- Validate after deploy with Google's Rich Results Test and validator.schema.org.
