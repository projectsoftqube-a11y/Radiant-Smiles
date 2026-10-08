# About Us: Developer Handoff

**URL:** `/about-us/` | **Status:** Final v1, 7 Oct 2026. Ready to build.

## 1. Head tags

```html
<title>About Radiant Smiles @ Floral Vale | Yardley, PA Dentist</title>
<meta name="description" content="About Radiant Smiles @ Floral Vale in Yardley, PA: two Temple-trained dentists, dental microscopes, Saturday hours and clear pricing before treatment.">
<link rel="canonical" href="https://www.radiant-smiles.com/about-us/">
<meta property="og:type" content="website">
<meta property="og:title" content="About Radiant Smiles @ Floral Vale | Yardley, PA Dentist">
<meta property="og:description" content="About Radiant Smiles @ Floral Vale in Yardley, PA: two Temple-trained dentists, dental microscopes, Saturday hours and clear pricing before treatment.">
<meta property="og:url" content="https://www.radiant-smiles.com/about-us/">
<!-- og:image: add once a real office/team photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "About Radiant Smiles @ Floral Vale in Yardley, PA". Keep the heading levels as in `02 Content.md`. Breadcrumb: Home › About Us.
- **Server-render all text** (Next.js SSG). Set title, description, canonical and openGraph in `generateMetadata` for this route, and render the JSON-LD on the server in a `<script type="application/ld+json">`.
- **Images:** a real photo of the office exterior or reception and the two dentists' headshots. Alt text such as "Reception at Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA". No stock photos presented as the practice.
- **"At a Glance" list:** render as a real `<ul>` so it can be lifted as a list by search and AI tools.
- **Redirects:** no old URLs 301 into this page.
- **NAP:** where the address appears, it must read exactly `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067, (215) 860-4600`, matching the footer and the Google Business Profile.
- **Phone links:** every "Call (215) 860-4600" button and visible phone number links to `tel:+12158604600`. No `sms:` link until the practice confirms texting.
- **Links:** every link in `02 Content.md` is a crawlable `<a href>` with the anchor text shown. All targets are in the live URL map.
- **Tracking:** fire separate events for call clicks and "Request an Appointment" clicks on this page.

## 3. Structured data (JSON-LD)

The business entity is defined in full on the homepage only. This page references it by `@id` (`https://www.radiant-smiles.com/#dentist`).

### 3a. Core: AboutPage + BreadcrumbList (required)

The `AboutPage` is about the business entity defined on the homepage (`#dentist`) and mentions both dentists by their Person `@id`. The full Dentist and Person nodes live on `/` and the bio pages; don't repeat them here.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://www.radiant-smiles.com/about-us/#webpage",
      "url": "https://www.radiant-smiles.com/about-us/",
      "name": "About Radiant Smiles @ Floral Vale | Yardley, PA Dentist",
      "description": "About Radiant Smiles @ Floral Vale in Yardley, PA: two Temple-trained dentists, dental microscopes, Saturday hours and clear pricing before treatment.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/about-us/#breadcrumb"
      },
      "about": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      },
      "mainEntity": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      },
      "mentions": [
        {
          "@id": "https://www.radiant-smiles.com/about-us/dr-urvishkumar-bhalala/#person"
        },
        {
          "@id": "https://www.radiant-smiles.com/about-us/dr-jaspreet-gadria-dmd/#person"
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.radiant-smiles.com/about-us/#breadcrumb",
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
          "name": "About Us",
          "item": "https://www.radiant-smiles.com/about-us/"
        }
      ]
    }
  ]
}
```

### 3d. Keep in sync

The schema is generated from the page copy. If the title, meta, FAQs, prices or facts change on the page, update the schema in the same commit. **Validate with** Google's Rich Results Test and validator.schema.org after deploy.
