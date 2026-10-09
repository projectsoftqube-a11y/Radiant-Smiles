# Dentist near Lower Makefield, PA: Developer Handoff

**URL:** `/dentist-lower-makefield-pa/` | **Status:** Final v1, 7 Oct 2026. Ready to build once the drive times below are checked.

## 1. Head tags

```html
<title>Dentist near Lower Makefield, PA | Radiant Smiles</title>
<meta name="description" content="Lower Makefield, PA dentist inside the township: check-ups, kids' visits and a $150/yr membership plan for families without insurance. Call today.">
<link rel="canonical" href="https://www.radiant-smiles.com/dentist-lower-makefield-pa/">
<meta property="og:type" content="website">
<meta property="og:title" content="Dentist near Lower Makefield, PA | Radiant Smiles">
<meta property="og:description" content="Lower Makefield, PA dentist inside the township: check-ups, kids' visits and a $150/yr membership plan for families without insurance. Call today.">
<meta property="og:url" content="https://www.radiant-smiles.com/dentist-lower-makefield-pa/">
<!-- og:image: add once a real office photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Your Dentist near Lower Makefield, PA". Keep the heading levels exactly as in `02 Content.md` (H2 sections, H3 sub-sections, H3 per FAQ question). Breadcrumb: Home › Areas We Serve › Lower Makefield, PA.
- **Server-render all text** (Next.js SSG). Directions, service lists, FAQs and the NAP must be in the initial HTML, not loaded client-side or shown only in images.
- **FAQs:** visible on the page. If you use an accordion, the answer text must be in the DOM on load (`<details>`/`<summary>` is ideal).
- **NAP as text, exactly:** `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067, (215) 860-4600`, in the final CTA and the footer, matching the homepage and the Google Business Profile character for character.
- **Phone:** `tel:+12158604600` on every call button and phone mention. **No `sms:` link** (texting is not confirmed by the practice).
- **Links:** every link in `02 Content.md` must be a crawlable `<a href>` with the anchor text as written. Don't add links to Newtown, Langhorne, Levittown or Fairless Hills pages (on hold).
- **No reviews schema** (no Review/AggregateRating). No "serving since" or patient-count claims.
- **Map:** lazy-load the same Google Maps embed as the contact page (office pin at 117 Floral Vale Boulevard). Directions button: `https://www.google.com/maps/dir/?api=1&destination=117+Floral+Vale+Boulevard+Yardley+PA+19067`. No "service area" polygons.
- **Images:** descriptive alt text tied to the real office, e.g. "Front entrance of Radiant Smiles @ Floral Vale on Floral Vale Boulevard". Don't use stock photos of the town that suggest an office there.
- **Tracking:** fire `call_click`, `appointment_click` and `directions_click` with a `page_area` parameter of `Lower Makefield, PA`, so each location page's conversions can be measured.
- **Redirects:** this is a new URL. No old URL 301s into it.
- **No ZIP code and no "Yardley" targeting.** "Yardley" appears only in the NAP and in one FAQ explaining the mailing address. Don't add it to headings or alt text.
- **Membership plan prices** ($150 a year, $75 each additional family member) must match the insurance page and special-offers page.
- **Don't link** the conditional service+location pages from this page.

### Drive times to verify before launch

The copy prints these ranges from the fact sheet with "depending on traffic". Check each in Google Maps (driving, from the town centre to 117 Floral Vale Boulevard, no departure time set). If Google's typical time falls outside the range, tell the content team so the copy, meta and FAQ text are updated together.

| From | Route named in copy | Range in copy | Check |
|---|---|---|---|
| Lower Makefield | local roads | within about 10 min (fact sheet 0-10) | [ ] Checked in Google Maps on ____ |

## 3. Structured data (JSON-LD)

### 3a. Core: WebPage + BreadcrumbList + Dentist reference (required)

Same `#dentist` `@id` as the homepage. The full Dentist entity (hours, offers, people) lives on the homepage only; this page adds `areaServed` for this area only and keeps the real Yardley address. Never invent an address in the town.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.radiant-smiles.com/dentist-lower-makefield-pa/#webpage",
      "url": "https://www.radiant-smiles.com/dentist-lower-makefield-pa/",
      "name": "Dentist near Lower Makefield, PA | Radiant Smiles",
      "description": "Lower Makefield, PA dentist inside the township: check-ups, kids' visits and a $150/yr membership plan for families without insurance. Call today.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/dentist-lower-makefield-pa/#breadcrumb"
      },
      "about": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.radiant-smiles.com/dentist-lower-makefield-pa/#breadcrumb",
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
          "name": "Lower Makefield, PA",
          "item": "https://www.radiant-smiles.com/dentist-lower-makefield-pa/"
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
          "@type": "AdministrativeArea",
          "name": "Lower Makefield Township, PA",
          "containedInPlace": {
            "@type": "State",
            "name": "Pennsylvania"
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
      "@id": "https://www.radiant-smiles.com/dentist-lower-makefield-pa/#faq",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/dentist-lower-makefield-pa/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is your office in Lower Makefield Township?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Radiant Smiles @ Floral Vale is at 117 Floral Vale Boulevard, inside Lower Makefield Township. Like many township addresses, our mailing address reads Yardley, PA. Most homes in the township are within about 10 minutes of the office by car on local roads, depending on traffic."
          }
        },
        {
          "@type": "Question",
          "name": "When should my child have a first dental visit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Just after their first birthday. At that first visit, the dentist gently examines your child's teeth and gums, may take X-rays, cleans the teeth, applies topical fluoride and reviews home care with you. From there, we see children for regular check-ups, and sealants as their back teeth come in."
          }
        },
        {
          "@type": "Question",
          "name": "Is there a dental plan for a family without insurance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Our in-office membership plan is $150 a year for the first person and $75 for each additional family member. It includes two cleanings, exams and X-rays each year, plus 15% off all dental treatment. Additional cleanings are $75, and an emergency exam with X-ray is $65."
          }
        },
        {
          "@type": "Question",
          "name": "Can my children be seen on a Saturday?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We're open Saturdays from 8 am to 2 pm, which helps township families fit check-ups around school and weekday activities. A child's visit includes a gentle exam, a cleaning and, when appropriate, fluoride. Call (215) 860-4600 or request an appointment online and we'll find a time that works."
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
