# Dentist near Lawrenceville, NJ: Developer Handoff

**URL:** `/dentist-lawrenceville-nj/` | **Status:** Final v1, 7 Oct 2026. Ready to build once the drive times below are checked.

## 1. Head tags

```html
<title>Dentist near Lawrenceville, NJ | Radiant Smiles</title>
<meta name="description" content="Lawrenceville, NJ patients: Invisalign for adults and teens 20-25 minutes away, with $1,000 off and check-ups about every 6 weeks. (215) 860-4600.">
<link rel="canonical" href="https://www.radiant-smiles.com/dentist-lawrenceville-nj/">
<meta property="og:type" content="website">
<meta property="og:title" content="Dentist near Lawrenceville, NJ | Radiant Smiles">
<meta property="og:description" content="Lawrenceville, NJ patients: Invisalign for adults and teens 20-25 minutes away, with $1,000 off and check-ups about every 6 weeks. (215) 860-4600.">
<meta property="og:url" content="https://www.radiant-smiles.com/dentist-lawrenceville-nj/">
<!-- og:image: add once a real office photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Your Dentist near Lawrenceville, NJ". Keep the heading levels exactly as in `02 Content.md` (H2 sections, H3 sub-sections, H3 per FAQ question). Breadcrumb: Home › Areas We Serve › Lawrenceville, NJ.
- **Server-render all text** (Next.js SSG). Directions, service lists, FAQs and the NAP must be in the initial HTML, not loaded client-side or shown only in images.
- **FAQs:** visible on the page. If you use an accordion, the answer text must be in the DOM on load (`<details>`/`<summary>` is ideal).
- **NAP as text, exactly:** `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067, (215) 860-4600`, in the final CTA and the footer, matching the homepage and the Google Business Profile character for character.
- **Phone:** `tel:+12158604600` on every call button and phone mention. **No `sms:` link** (texting is not confirmed by the practice).
- **Links:** every link in `02 Content.md` must be a crawlable `<a href>` with the anchor text as written. Don't add links to Newtown, Langhorne, Levittown or Fairless Hills pages (on hold).
- **No reviews schema** (no Review/AggregateRating). No "serving since" or patient-count claims.
- **Map:** lazy-load the same Google Maps embed as the contact page (office pin at 117 Floral Vale Boulevard). Directions button: `https://www.google.com/maps/dir/?api=1&destination=117+Floral+Vale+Boulevard+Yardley+PA+19067`. No "service area" polygons.
- **Images:** descriptive alt text tied to the real office, e.g. "Front entrance of Radiant Smiles @ Floral Vale on Floral Vale Boulevard". Don't use stock photos of the town that suggest an office there.
- **Tracking:** fire `call_click`, `appointment_click` and `directions_click` with a `page_area` parameter of `Lawrenceville, NJ`, so each location page's conversions can be measured.
- **Redirects:** this is a new URL. No old URL 301s into it.
- **Invisalign:** written as Invisalign® on first use in the design if the brand guide requires it. Offer ($1,000 off, regular $5,800) must match `/special-offers/`. Practice still to [CONFIRM certified provider]; if not confirmed before launch, keep the service wording but remove the offer line.
- **Don't link** `/invisalign-trenton-nj/` or other conditional service+location pages from this page.

### Drive times to verify before launch

The copy prints these ranges from the fact sheet with "depending on traffic". Check each in Google Maps (driving, from the town centre to 117 Floral Vale Boulevard, no departure time set). If Google's typical time falls outside the range, tell the content team so the copy, meta and FAQ text are updated together.

| From | Route named in copy | Range in copy | Check |
|---|---|---|---|
| Lawrenceville | US-1 / I-295 | 20-25 min | [ ] Checked in Google Maps on ____ |

## 3. Structured data (JSON-LD)

### 3a. Core: WebPage + BreadcrumbList + Dentist reference (required)

Same `#dentist` `@id` as the homepage. The full Dentist entity (hours, offers, people) lives on the homepage only; this page adds `areaServed` for this area only and keeps the real Yardley address. Never invent an address in the town.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.radiant-smiles.com/dentist-lawrenceville-nj/#webpage",
      "url": "https://www.radiant-smiles.com/dentist-lawrenceville-nj/",
      "name": "Dentist near Lawrenceville, NJ | Radiant Smiles",
      "description": "Lawrenceville, NJ patients: Invisalign for adults and teens 20-25 minutes away, with $1,000 off and check-ups about every 6 weeks. (215) 860-4600.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/dentist-lawrenceville-nj/#breadcrumb"
      },
      "about": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.radiant-smiles.com/dentist-lawrenceville-nj/#breadcrumb",
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
          "name": "Lawrenceville, NJ",
          "item": "https://www.radiant-smiles.com/dentist-lawrenceville-nj/"
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
          "@type": "Place",
          "name": "Lawrenceville, NJ",
          "containedInPlace": {
            "@type": "AdministrativeArea",
            "name": "Mercer County, New Jersey",
            "containedInPlace": {
              "@type": "State",
              "name": "New Jersey"
            }
          }
        },
        {
          "@type": "AdministrativeArea",
          "name": "Lawrence Township, NJ",
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
      "@id": "https://www.radiant-smiles.com/dentist-lawrenceville-nj/#faq",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/dentist-lawrenceville-nj/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is Lawrenceville part of Lawrence Township?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Lawrenceville is an unincorporated community within Lawrence Township in Mercer County, and many township residents use a Lawrenceville mailing address with ZIP 08648. Radiant Smiles @ Floral Vale welcomes patients from anywhere in the township; our office is about 20 to 25 minutes away, depending on traffic."
          }
        },
        {
          "@type": "Question",
          "name": "How often are Invisalign check-ups?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "About every six weeks. Between visits, you switch to a new set of aligners at home about every two weeks and wear them 20 to 22 hours a day. That schedule means the drive from Lawrenceville is occasional, and Saturday morning check-ups are available."
          }
        },
        {
          "@type": "Question",
          "name": "How much is Invisalign here?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Invisalign is regularly $5,800, and our current offer takes $1,000 off, with a free consultation and second opinion. Dental insurance may cover part of the cost, up to $3,500 on some plans, and FSA funds, monthly payments and CareCredit can help with the rest. Call (215) 860-4600 to check your benefits."
          }
        },
        {
          "@type": "Question",
          "name": "Can teens use Invisalign?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Invisalign Teen uses the same clear aligners, with blue indicator dots that fade as they're worn so parents can check, and replacement aligners are available if some are lost. Teens wear them 20 to 22 hours a day and take them out to eat, play sports or play an instrument."
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
