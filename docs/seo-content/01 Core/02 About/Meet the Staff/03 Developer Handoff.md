# Meet the Staff: Developer Handoff

**URL:** `/about-us/meet-the-staff/` | **Status:** Final v1, 7 Oct 2026. Ready to build once the items marked as required are supplied.

## 1. Head tags

```html
<title>Meet the Radiant Smiles Yardley Team | Floral Vale</title>
<meta name="description" content="Meet the Radiant Smiles Yardley team: the hygienists, dental assistants and front-desk staff who look after patients at our Floral Vale office.">
<link rel="canonical" href="https://www.radiant-smiles.com/about-us/meet-the-staff/">
<meta property="og:type" content="website">
<meta property="og:title" content="Meet the Radiant Smiles Yardley Team | Floral Vale">
<meta property="og:description" content="Meet the Radiant Smiles Yardley team: the hygienists, dental assistants and front-desk staff who look after patients at our Floral Vale office.">
<meta property="og:url" content="https://www.radiant-smiles.com/about-us/meet-the-staff/">
<!-- og:image: add once a real office/team photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Meet the Radiant Smiles Yardley Team". Keep the heading levels as in `02 Content.md`. Breadcrumb: Home › About Us › Meet the Staff.
- **Server-render all text** (Next.js SSG). Set title, description, canonical and openGraph in `generateMetadata` for this route, and render the JSON-LD on the server in a `<script type="application/ld+json">`.
- **STAFF NAMES AND PHOTOS MUST BE SUPPLIED BY THE PRACTICE BEFORE LAUNCH.** The current site publishes no staff names. Build the team grid as a reusable component (photo, name, role, optional one-liner) fed from a simple data file, so the practice can add people without a code change.
- **Until names and photos arrive:** do not publish placeholder cards, initials, silhouettes, stock photos or invented names. Either hide the grid (the rest of the page reads complete without it) or keep the page on staging. Remove the `[PLACEHOLDER: ...]` line from the published page.
- **Card order:** hygienists, dental assistants, front desk. Use the same photo crop and background for everyone. Alt text: "[Name], [role] at Radiant Smiles @ Floral Vale in Yardley, PA".
- **Consent:** get each team member's written OK to publish their name and photo, and whether they prefer first name only.
- **Schema:** don't add Person nodes for staff until real names are published. Then add one `Person` per team member (`name`, `jobTitle`, `worksFor` → `#dentist`) to the graph below.
- **Redirects:** no old URLs 301 into this page.
- **NAP:** where the address appears, it must read exactly `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067, (215) 860-4600`, matching the footer and the Google Business Profile.
- **Phone links:** every "Call (215) 860-4600" button and visible phone number links to `tel:+12158604600`. No `sms:` link until the practice confirms texting.
- **Links:** every link in `02 Content.md` is a crawlable `<a href>` with the anchor text shown. All targets are in the live URL map.
- **Tracking:** fire separate events for call clicks and "Request an Appointment" clicks on this page.

## 3. Structured data (JSON-LD)

The business entity is defined in full on the homepage only. This page references it by `@id` (`https://www.radiant-smiles.com/#dentist`).

### 3a. Core: AboutPage + BreadcrumbList (required)

Staff Person nodes are left out on purpose: no names exist yet.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://www.radiant-smiles.com/about-us/meet-the-staff/#webpage",
      "url": "https://www.radiant-smiles.com/about-us/meet-the-staff/",
      "name": "Meet the Radiant Smiles Yardley Team | Floral Vale",
      "description": "Meet the Radiant Smiles Yardley team: the hygienists, dental assistants and front-desk staff who look after patients at our Floral Vale office.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/about-us/meet-the-staff/#breadcrumb"
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
      "@id": "https://www.radiant-smiles.com/about-us/meet-the-staff/#breadcrumb",
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
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Meet the Staff",
          "item": "https://www.radiant-smiles.com/about-us/meet-the-staff/"
        }
      ]
    }
  ]
}
```

### 3d. Keep in sync

The schema is generated from the page copy. If the title, meta, FAQs, prices or facts change on the page, update the schema in the same commit. **Validate with** Google's Rich Results Test and validator.schema.org after deploy.
