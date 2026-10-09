# Dentist near Trenton, NJ: Developer Handoff

**URL:** `/dentist-trenton-nj/` | **Status:** Final v1, 7 Oct 2026. Ready to build once the drive times below are checked.

## 1. Head tags

```html
<title>Dentist near Trenton, NJ | Radiant Smiles</title>
<meta name="description" content="Trenton, NJ dentist about 15 minutes over the bridge: Saturday hours, many NJ PPO plans and an $89 new patient visit if uninsured. (215) 860-4600.">
<link rel="canonical" href="https://www.radiant-smiles.com/dentist-trenton-nj/">
<meta property="og:type" content="website">
<meta property="og:title" content="Dentist near Trenton, NJ | Radiant Smiles">
<meta property="og:description" content="Trenton, NJ dentist about 15 minutes over the bridge: Saturday hours, many NJ PPO plans and an $89 new patient visit if uninsured. (215) 860-4600.">
<meta property="og:url" content="https://www.radiant-smiles.com/dentist-trenton-nj/">
<!-- og:image: add once a real office photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Your Dentist near Trenton, NJ". Keep the heading levels exactly as in `02 Content.md` (H2 sections, H3 sub-sections, H3 per FAQ question). Breadcrumb: Home › Areas We Serve › Trenton, NJ.
- **Server-render all text** (Next.js SSG). Directions, service lists, FAQs and the NAP must be in the initial HTML, not loaded client-side or shown only in images.
- **FAQs:** visible on the page. If you use an accordion, the answer text must be in the DOM on load (`<details>`/`<summary>` is ideal).
- **NAP as text, exactly:** `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067, (215) 860-4600`, in the final CTA and the footer, matching the homepage and the Google Business Profile character for character.
- **Phone:** `tel:+12158604600` on every call button and phone mention. **No `sms:` link** (texting is not confirmed by the practice).
- **Links:** every link in `02 Content.md` must be a crawlable `<a href>` with the anchor text as written. Don't add links to Newtown, Langhorne, Levittown or Fairless Hills pages (on hold).
- **No reviews schema** (no Review/AggregateRating). No "serving since" or patient-count claims.
- **Map:** lazy-load the same Google Maps embed as the contact page (office pin at 117 Floral Vale Boulevard). Directions button: `https://www.google.com/maps/dir/?api=1&destination=117+Floral+Vale+Boulevard+Yardley+PA+19067`. No "service area" polygons.
- **Images:** descriptive alt text tied to the real office, e.g. "Front entrance of Radiant Smiles @ Floral Vale on Floral Vale Boulevard". Don't use stock photos of the town that suggest an office there.
- **Tracking:** fire `call_click`, `appointment_click` and `directions_click` with a `page_area` parameter of `Trenton, NJ`, so each location page's conversions can be measured.
- **Redirects:** this is a new URL. No old URL 301s into it.
- **Conditional links (go live only if the page is built):** `/emergency-dentist-trenton-nj/`, `/invisalign-trenton-nj/` and `/dental-implants-mercer-county-nj/` in "Family, Emergency and Implant Care for Trenton, NJ". If a target is not live at launch, remove that link and keep the plain service link beside it. `/invisalign-trenton-nj/` also depends on [CONFIRM certified Invisalign provider].
- **Emergency safety line** must stay visible.
- **Insurance wording:** keep "accept many PPO plans, including…" and the NJ Medicaid / NJ FamilyCare FAQ answer exactly (the Medicaid line appears in the FAQ only). Don't add "in-network".
- **Bridge facts** (toll direction, Calhoun Street end points) from DRJTBC/Wikipedia, checked 7 Oct 2026. No toll amounts.
- **Patient review:** the Avni D. quote after the cost table is plain text (blockquote). No Review or AggregateRating markup. Wording must match the fact sheet excerpt exactly.
- **Mid-page CTA:** the Request an Appointment button at the end of "A Trenton, NJ Dentist That's Clear About Cost" fires `appointment_click` like the hero button.

### Drive times to verify before launch

The copy prints these ranges from the fact sheet with "depending on traffic". Check each in Google Maps (driving, from the town centre to 117 Floral Vale Boulevard, no departure time set). If Google's typical time falls outside the range, tell the content team so the copy, meta and FAQ text are updated together.

| From | Route named in copy | Range in copy | Check |
|---|---|---|---|
| Trenton | US-1 (Trenton-Morrisville Toll Bridge) or Calhoun St Bridge | about 15 min | [ ] Checked in Google Maps on ____ |

## 3. Structured data (JSON-LD)

### 3a. Core: WebPage + BreadcrumbList + Dentist reference (required)

Same `#dentist` `@id` as the homepage. The full Dentist entity (hours, offers, people) lives on the homepage only; this page adds `areaServed` for this area only and keeps the real Yardley address. Never invent an address in the town.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.radiant-smiles.com/dentist-trenton-nj/#webpage",
      "url": "https://www.radiant-smiles.com/dentist-trenton-nj/",
      "name": "Dentist near Trenton, NJ | Radiant Smiles",
      "description": "Trenton, NJ dentist about 15 minutes over the bridge: Saturday hours, many NJ PPO plans and an $89 new patient visit if uninsured. (215) 860-4600.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/dentist-trenton-nj/#breadcrumb"
      },
      "about": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.radiant-smiles.com/dentist-trenton-nj/#breadcrumb",
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
          "name": "Trenton, NJ",
          "item": "https://www.radiant-smiles.com/dentist-trenton-nj/"
        }
      ]
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
          "@type": "City",
          "name": "Trenton, NJ",
          "containedInPlace": {
            "@type": "AdministrativeArea",
            "name": "Mercer County, New Jersey",
            "containedInPlace": {
              "@type": "State",
              "name": "New Jersey"
            }
          }
        }
      ]
    }
  ]
}
```

### 3b. FAQPage (optional)

No Google rich result since May 2026. Harmless, and keeps the Q&A machine-readable. Text matches the visible FAQ word for word.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": "https://www.radiant-smiles.com/dentist-trenton-nj/#faq",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/dentist-trenton-nj/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do I pay a toll to get to your office from Trenton?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Only if you use the US-1 toll bridge, and only on the way to us. The Trenton-Morrisville Toll Bridge charges in the Pennsylvania-bound direction, so the drive home is free. The Calhoun Street and Lower Trenton bridges are toll-free both ways and also lead to Morrisville, a short drive from our office."
          }
        },
        {
          "@type": "Question",
          "name": "Do you accept NJ Medicaid or NJ FamilyCare?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "NJ Medicaid and NJ FamilyCare are not on our list of accepted plans. If you don't have private dental insurance, our $89 New Patient Visit Special covers a cleaning, X-rays and an exam, and our membership plan is $150 a year with 15% off treatment. Call (215) 860-4600 and we'll talk through your options."
          }
        },
        {
          "@type": "Question",
          "name": "What does a first visit cost without insurance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "$89. The New Patient Visit Special is for patients without insurance and includes a cleaning, X-rays and an exam. Before any further treatment, the dentist explains what they found and what it would cost, so you can decide without pressure. Payment is due at the time of service."
          }
        },
        {
          "@type": "Question",
          "name": "Which languages do your dentists speak?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dr. Jaspreet Gadria speaks English and Punjabi fluently, and some Hindi. Dr. Urvishkumar Bhalala trained at Temple University, with experience gained both in the US and abroad, in India. If you'd prefer a particular dentist, mention it when you call (215) 860-4600 to book."
          }
        }
      ]
    }
  ]
}
```

### 3c. Optional additions later

- `"geo"` and `"hasMap"` on the Dentist node once the Google Business Profile pin and place ID are supplied (homepage first).
- `"sameAs"` links to the Google Business Profile and social profiles (homepage first).

### 3d. Keep in sync

The schema is generated from the page copy. If the title, meta, FAQs or areas change on the page, update the schema in the same commit. If the practice changes its hours or phone, update the homepage Dentist node and this page together. **Validate with** Google's Rich Results Test and validator.schema.org after deploy.
