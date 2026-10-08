# Contact Us: Developer Handoff

**URL:** `/contact-us/` | **Status:** Final v1, 7 Oct 2026. Ready to build.

## 1. Head tags

```html
<title>Contact Our Dental Office in Yardley, PA | Radiant Smiles</title>
<meta name="description" content="Contact our dental office in Yardley, PA, at 117 Floral Vale Boulevard. Open Saturdays and until 6 pm Wed and Thu. Call (215) 860-4600.">
<link rel="canonical" href="https://www.radiant-smiles.com/contact-us/">
<meta property="og:type" content="website">
<meta property="og:title" content="Contact Our Dental Office in Yardley, PA | Radiant Smiles">
<meta property="og:description" content="Contact our dental office in Yardley, PA, at 117 Floral Vale Boulevard. Open Saturdays and until 6 pm Wed and Thu. Call (215) 860-4600.">
<meta property="og:url" content="https://www.radiant-smiles.com/contact-us/">
<!-- og:image: add once a real office/team photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Contact Our Dental Office in Yardley, PA". Keep the heading levels as in `02 Content.md`. Breadcrumb: Home › Contact Us.
- **Server-render all text** (Next.js SSG). Set title, description, canonical and openGraph in `generateMetadata` for this route, and render the JSON-LD on the server in a `<script type="application/ld+json">`.
- **NAP block** in the hero as plain text (not an image), identical to the footer and Google Business Profile.
- **Hours table:** must match the homepage and the Google Business Profile. **Tuesday:** the current site prints "8:00 AM - 5:00 AM"; copy and schema use 8:00 am – 5:00 pm. Remove the `[CONFIRM: ...]` tag once the practice confirms, and update homepage, contact page and both schemas together if it differs.
- **Appointment form:** fields exactly as listed in `02 Content.md`, with `id="appointment-form"`. Phone or email required, message optional. Show the "Please don't include medical details" note. Submissions go to the practice inbox through a HIPAA-appropriate form processor [CONFIRM processor with the practice]. Don't promise a reply time; none is confirmed.
- **Thank-you state:** show the thank-you message inline (or on a thank-you URL set to noindex) and fire a "form_submit" event.
- **Directions table:** drive times are Google Maps estimates in typical traffic. **Before launch, check each route in Google Maps (typical weekday traffic) and record the result and date here:** "Checked in Google Maps on [date], typical weekday traffic: Yardley Borough __, Morrisville __, Trenton __, Ewing __, Washington Crossing __." Update the table if a range is off, and keep the "depending on traffic" wording.
- **Form privacy line:** "See our Privacy Policy" links to `/patient-information/terms/privacy/`. Don't add a "we only use your details to…" promise: the published privacy policy allows promotional use and sharing with partners, so the two would conflict.
- **ContactPoint language:** `availableLanguage` is English only. Dr. Gadria speaks Punjabi, but the front desk/phone line isn't confirmed to; add "Punjabi" only if the practice confirms phone support in Punjabi.
- **Map:** lazy-load a Google Maps embed of the office below the directions table. Directions button: `https://www.google.com/maps/dir/?api=1&destination=117+Floral+Vale+Boulevard+Yardley+PA+19067`. Fire a "directions_click" event.
- **Parking and access:** no details are published. Add them when the practice supplies them.
- **Redirects:** no old URLs 301 into this page.
- **NAP:** where the address appears, it must read exactly `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067, (215) 860-4600`, matching the footer and the Google Business Profile.
- **Phone links:** every "Call (215) 860-4600" button and visible phone number links to `tel:+12158604600`. No `sms:` link until the practice confirms texting.
- **Links:** every link in `02 Content.md` is a crawlable `<a href>` with the anchor text shown. All targets are in the live URL map.
- **Tracking:** fire separate events for call clicks and "Request an Appointment" clicks on this page.

## 3. Structured data (JSON-LD)

The business entity is defined in full on the homepage only. This page references it by `@id` (`https://www.radiant-smiles.com/#dentist`).

### 3a. Core: ContactPage + BreadcrumbList + Dentist (required)

`ContactPage` about the `#dentist` entity. The page repeats a short Dentist node (same `@id` as the homepage, so it merges) with NAP, hours and a ContactPoint, because NAP and hours are the visible content here. The full entity stays on `/`.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://www.radiant-smiles.com/contact-us/#webpage",
      "url": "https://www.radiant-smiles.com/contact-us/",
      "name": "Contact Our Dental Office in Yardley, PA | Radiant Smiles",
      "description": "Contact our dental office in Yardley, PA, at 117 Floral Vale Boulevard. Open Saturdays and until 6 pm Wed and Thu. Call (215) 860-4600.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/contact-us/#breadcrumb"
      },
      "about": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      },
      "mainEntity": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.radiant-smiles.com/contact-us/#breadcrumb",
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
          "name": "Contact Us",
          "item": "https://www.radiant-smiles.com/contact-us/"
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
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday"
          ],
          "opens": "08:00",
          "closes": "17:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Wednesday",
            "Thursday"
          ],
          "opens": "09:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Friday",
            "Saturday"
          ],
          "opens": "08:00",
          "closes": "14:00"
        }
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "appointments",
        "telephone": "+1-215-860-4600",
        "areaServed": "US",
        "availableLanguage": "English"
      }
    }
  ]
}
```

### 3d. Keep in sync

The schema is generated from the page copy. If the title, meta, FAQs, prices or facts change on the page, update the schema in the same commit. **Validate with** Google's Rich Results Test and validator.schema.org after deploy.
