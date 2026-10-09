# Dental Implants, Mercer County NJ: Developer Handoff

**URL:** `/dental-implants-mercer-county-nj/` | **Status:** Final v1, 7 Oct 2026. **CONDITIONAL: build only if the Semrush rerun shows demand.** Ready to build once that is confirmed and the drive times below are checked.

## 1. Head tags

```html
<title>Dental Implants Near Mercer County, NJ | Radiant Smiles</title>
<meta name="description" content="Dental implants near Mercer County, NJ: $500 off implant, abutment and crown, a free consultation and Saturday hours in Yardley, PA. (215) 860-4600.">
<link rel="canonical" href="https://www.radiant-smiles.com/dental-implants-mercer-county-nj/">
<meta name="robots" content="index, follow">
<meta property="og:type" content="website">
<meta property="og:title" content="Dental Implants Near Mercer County, NJ | Radiant Smiles">
<meta property="og:description" content="Dental implants near Mercer County, NJ: $500 off implant, abutment and crown, a free consultation and Saturday hours in Yardley, PA. (215) 860-4600.">
<meta property="og:url" content="https://www.radiant-smiles.com/dental-implants-mercer-county-nj/">
<meta property="og:site_name" content="Radiant Smiles @ Floral Vale">
<!-- og:image: add once a real office photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Dental Implants Near Mercer County, NJ". Keep the heading levels exactly as in `02 Content.md` (H2 sections, H3 sub-sections and one H3 per FAQ question). Visible breadcrumb: Home › Areas We Serve › Mercer County, NJ › Dental Implants.
- **Server-render all text** (Next.js SSG). Lists, tables, FAQs and the NAP must be in the initial HTML, not loaded client-side or shown only inside images.
- **FAQs:** visible on the page. If you use an accordion, the answer text must be in the DOM on load (`<details>`/`<summary>` is ideal).
- **NAP as text, exactly:** `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067, (215) 860-4600`, in the final CTA and the footer, matching the homepage and the Google Business Profile character for character.
- **Phone:** every call button and phone mention links to `tel:+12158604600`. **No `sms:` link** (texting is not confirmed by the practice).
- **Links:** every link in `02 Content.md` must be a crawlable `<a href>` with the anchor text as written. Links on this page: `/areas-we-serve/`, `/dentist-ewing-nj/`, `/dentist-hamilton-nj/`, `/dentist-hopewell-nj/`, `/dentist-lawrenceville-nj/`, `/dentist-pennington-nj/`, `/dentist-trenton-nj/`, `/patient-information/carecredit/`, `/patient-information/insurance-payment-options/`, `/patient-information/scheduling/`, `/restorative-dentistry/dental-implants/`, `/restorative-dentistry/dentures/implant-retained-dentures/`, `/special-offers/`.
- **CONDITIONAL PAGE: build only if the Semrush rerun shows demand.** Until then, do not create the route, do not add it to sitemap.xml or the HTML sitemap, and remove every link to `/dental-implants-mercer-county-nj/` (they appear only on `/dentist-trenton-nj/`, `/areas-we-serve/` and `/dentist-mercer-county-nj/`).
- **If it is built:** add `/dental-implants-mercer-county-nj/` to sitemap.xml, add a link under 'Areas We Serve › New Jersey' on the HTML sitemap (`/sitemap/`), and switch on the conditional links on the three pages above. No other page links here, and it must never link to a paid `/lp/` page.
- **Offer box:** the quick-facts strip and the cost section must match `/special-offers/` ("$500 Off Implant, Abutment, and Crown (Reg. $3500)", "Includes free consultation and 2nd opinion"). If the offer changes or expires, update the meta, hero strip, 'Why NJ Patients' list, cost section, FAQ 3 and the FAQPage schema together.
- **Drive-time table** as a real HTML `<table>` with a `<caption>`; town names link to the town pages as written.
- **Process steps** as an ordered list (`<ol>`). **Sedation:** keep only "ask us about sedation options".
- **Do not link** to `/lp/dental-implants/` (paid, noindex) or to the on-hold Pennsylvania town pages.
- **Page-specific tracking:** fire `implant_consult_click` on the hero and final-CTA appointment buttons.
- **No reviews schema** (no Review/AggregateRating). No "serving since" or patient-count claims.
- **Map:** lazy-load the same Google Maps embed as the contact page (office pin at 117 Floral Vale Boulevard). Directions button: `https://www.google.com/maps/dir/?api=1&destination=117+Floral+Vale+Boulevard+Yardley+PA+19067`.
- **Images:** real office or treatment photos with descriptive alt text tied to the Yardley office. No stock photos of the town that suggest an office there.
- **Tracking:** fire `call_click` and `appointment_click` with `page_area = "Mercer County, NJ"`, plus `offer_click` / `financing_click` on the offers, insurance and CareCredit links. Never send form-field values to analytics or ad platforms.
- **Redirects:** this is a new URL. No old URL 301s into it.
- **Bridge facts** (PA-bound tolls only; Calhoun Street Bridge toll-free, 3-ton limit, 15 mph) from the DRJTBC, checked 7 Oct 2026. Don't add toll amounts.
- **Insurance wording:** keep "accept many PPO plans, including…". Don't add "in-network".

### Drive times to verify before launch

The copy prints these ranges from the fact sheet with "depending on traffic". Check each in Google Maps (driving, from the town centre to 117 Floral Vale Boulevard, no departure time set). If Google's typical time falls outside the range, tell the content team so the copy, meta and FAQ text are updated together.

| From | Route named in copy | Range in copy | Check |
|---|---|---|---|
| Trenton | US-1 (Trenton-Morrisville Toll Bridge) or Calhoun Street Bridge | about 15 min | [ ] Checked in Google Maps on ____ |
| Ewing / West Trenton | I-295 (Scudder Falls Bridge) | about 15-20 min | [ ] Checked in Google Maps on ____ |
| Hopewell / Titusville | Washington Crossing Bridge / NJ-29 | about 15-20 min | [ ] Checked in Google Maps on ____ |
| Hamilton | US-1 / I-295 | about 20-25 min | [ ] Checked in Google Maps on ____ |
| Lawrenceville | US-1 / I-295 | about 20-25 min | [ ] Checked in Google Maps on ____ |
| Pennington | I-295 / NJ-31 | about 20-25 min | [ ] Checked in Google Maps on ____ |

## 3. Structured data (JSON-LD)

### 3a. Core: MedicalWebPage + BreadcrumbList + MedicalProcedure + Dentist reference (required)

Same `#dentist` `@id` as the homepage. The full Dentist entity (hours, people, offers) lives on the homepage only; this page adds `areaServed` for this area only and keeps the real Yardley address. Never invent an address in New Jersey. The MedicalProcedure description is copied word for word from the page. No Review, AggregateRating or Offer markup.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.radiant-smiles.com/dental-implants-mercer-county-nj/#webpage",
      "url": "https://www.radiant-smiles.com/dental-implants-mercer-county-nj/",
      "name": "Dental Implants Near Mercer County, NJ | Radiant Smiles",
      "description": "Dental implants near Mercer County, NJ: $500 off implant, abutment and crown, a free consultation and Saturday hours in Yardley, PA. (215) 860-4600.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/dental-implants-mercer-county-nj/#breadcrumb"
      },
      "about": [
        {
          "@id": "https://www.radiant-smiles.com/dental-implants-mercer-county-nj/#service"
        },
        {
          "@id": "https://www.radiant-smiles.com/#dentist"
        }
      ],
      "mainEntity": {
        "@id": "https://www.radiant-smiles.com/dental-implants-mercer-county-nj/#service"
      },
      "provider": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      },
      "lastReviewed": "2026-10-07"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.radiant-smiles.com/dental-implants-mercer-county-nj/#breadcrumb",
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
          "name": "Areas We Serve",
          "item": "https://www.radiant-smiles.com/areas-we-serve/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Mercer County, NJ",
          "item": "https://www.radiant-smiles.com/dentist-mercer-county-nj/"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Dental Implants",
          "item": "https://www.radiant-smiles.com/dental-implants-mercer-county-nj/"
        }
      ]
    },
    {
      "name": "Dental implants",
      "description": "A small titanium post is placed in the jawbone, where it replaces the root of the missing tooth.",
      "relevantSpecialty": "https://schema.org/Dentistry",
      "@type": "MedicalProcedure",
      "@id": "https://www.radiant-smiles.com/dental-implants-mercer-county-nj/#service",
      "url": "https://www.radiant-smiles.com/dental-implants-mercer-county-nj/"
    },
    {
      "@type": "Dentist",
      "@id": "https://www.radiant-smiles.com/#dentist",
      "name": "Radiant Smiles @ Floral Vale",
      "url": "https://www.radiant-smiles.com/",
      "telephone": "+1-215-860-4600",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "117 Floral Vale Boulevard",
        "addressLocality": "Yardley",
        "addressRegion": "PA",
        "postalCode": "19067",
        "addressCountry": "US"
      },
      "areaServed": [
        {
          "@type": "AdministrativeArea",
          "name": "Mercer County, New Jersey",
          "containedInPlace": {
            "@type": "State",
            "name": "New Jersey"
          }
        }
      ]
    }
  ]
}
```

### 3b. FAQPage (optional)

No Google rich result since May 2026. Harmless, and keeps the Q&A machine-readable for AI assistants. Text matches the visible FAQ word for word.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": "https://www.radiant-smiles.com/dental-implants-mercer-county-nj/#faq",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/dental-implants-mercer-county-nj/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How far is your office from Mercer County, NJ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our office at 117 Floral Vale Boulevard, Yardley, PA is about 15 minutes from Trenton and about 15–25 minutes from Ewing, Titusville, Hamilton, Lawrenceville and Pennington, depending on traffic. The main crossings are I-295 over the Scudder Falls Bridge and US-1 over the Trenton-Morrisville Toll Bridge."
          }
        },
        {
          "@type": "Question",
          "name": "Do you accept New Jersey dental insurance for implants?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we accept many PPO plans, including Horizon Blue Cross, Delta Dental, Aetna, Cigna PPO, MetLife and UnitedHealthcare. Implant coverage depends on your plan, so call (215) 860-4600 with your plan details and we'll check your benefits before treatment starts. CareCredit financing is also available."
          }
        },
        {
          "@type": "Question",
          "name": "What does the $3,500 implant fee include?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The regular $3,500 fee covers one implant post, the abutment that connects it and the crown on top, and the current offer takes $500 off. It includes a free consultation and second opinion. If you need other treatment first, such as an extraction, we'll explain that cost separately."
          }
        },
        {
          "@type": "Question",
          "name": "How many visits will I need, and can some be on a Saturday?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most single-tooth implants take a few visits over six to eight months: a consultation, implant placement, sometimes a short visit to uncover the implant, and the crown. We're open Saturday from 8 am to 2 pm, so ask for Saturday times when you book."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get a second opinion on an implant plan from another dentist?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. A free second opinion is part of our implant offer. Bring the plan you were given, along with any recent X-rays if you have them. We'll examine you, review your health history and explain whether we'd recommend the same treatment, and why."
          }
        }
      ]
    }
  ]
}
```

### 3d. Keep in sync

The schema is generated from the page copy. If the title, meta, FAQs or entity descriptions change on the page, update the schema in the same commit. If the practice changes its hours or phone, update the homepage Dentist node and this page together. **Validate with** Google's Rich Results Test and validator.schema.org after deploy.
