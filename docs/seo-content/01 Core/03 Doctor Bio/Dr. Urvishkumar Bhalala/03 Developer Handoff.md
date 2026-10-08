# Dr. Urvishkumar Bhalala: Developer Handoff

**URL:** `/about-us/dr-urvishkumar-bhalala/` | **Status:** Final v1, 7 Oct 2026. Ready to build.

## 1. Head tags

```html
<title>Dr. Urvishkumar Bhalala, DMD | Yardley, PA Dentist</title>
<meta name="description" content="Meet Dr. Urvishkumar Bhalala, DMD, a Temple-trained dentist at Radiant Smiles @ Floral Vale in Yardley, PA. Call (215) 860-4600 to book a visit.">
<link rel="canonical" href="https://www.radiant-smiles.com/about-us/dr-urvishkumar-bhalala/">
<meta property="og:type" content="profile">
<meta property="og:title" content="Dr. Urvishkumar Bhalala, DMD | Yardley, PA Dentist">
<meta property="og:description" content="Meet Dr. Urvishkumar Bhalala, DMD, a Temple-trained dentist at Radiant Smiles @ Floral Vale in Yardley, PA. Call (215) 860-4600 to book a visit.">
<meta property="og:url" content="https://www.radiant-smiles.com/about-us/dr-urvishkumar-bhalala/">
<!-- og:image: add once a real office/team photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Dr. Urvishkumar Bhalala, DMD". Keep the heading levels as in `02 Content.md`. Breadcrumb: Home › About Us › Dr. Urvishkumar Bhalala.
- **Server-render all text** (Next.js SSG). Set title, description, canonical and openGraph in `generateMetadata` for this route, and render the JSON-LD on the server in a `<script type="application/ld+json">`.
- **Headshot required.** No photo exists on the current site. Use a real, recent headshot (no stock or AI image). Alt text: "Dr. Urvishkumar Bhalala, DMD, dentist at Radiant Smiles @ Floral Vale in Yardley, PA". Once it exists, add `"image"` to the Person node.
- **Degree:** the page and schema say DMD (the practice site). WebMD lists DDS. Confirm before launch; if it is DDS, change the H1, title, meta, hero, FAQ, schema `honorificSuffix` and the homepage together.
- **Name:** the current bio page calls him "Dr. Kumar". The new page uses "Dr. Bhalala" throughout. If patients know him as Dr. Kumar, the practice should say so; it can then be added to copy and as `alternateName`.
- **FAQs** visible on the page; if in an accordion, answers stay in the DOM on load.
- **Redirects:** no old URLs 301 into this page.
- **NAP:** where the address appears, it must read exactly `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067, (215) 860-4600`, matching the footer and the Google Business Profile.
- **Phone links:** every "Call (215) 860-4600" button and visible phone number links to `tel:+12158604600`. No `sms:` link until the practice confirms texting.
- **Links:** every link in `02 Content.md` is a crawlable `<a href>` with the anchor text shown. All targets are in the live URL map.
- **Tracking:** fire separate events for call clicks and "Request an Appointment" clicks on this page.

## 3. Structured data (JSON-LD)

The business entity is defined in full on the homepage only. This page references it by `@id` (`https://www.radiant-smiles.com/#dentist`).

### 3a. Core: ProfilePage + BreadcrumbList + Person (required)

`ProfilePage` with `mainEntity` → the Person `@id` also used on the homepage. Only published facts are marked up: degree, school, employer. No `hasCredential`, `memberOf`, `image` or years of experience until supplied.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": "https://www.radiant-smiles.com/about-us/dr-urvishkumar-bhalala/#webpage",
      "url": "https://www.radiant-smiles.com/about-us/dr-urvishkumar-bhalala/",
      "name": "Dr. Urvishkumar Bhalala, DMD | Yardley, PA Dentist",
      "description": "Meet Dr. Urvishkumar Bhalala, DMD, a Temple-trained dentist at Radiant Smiles @ Floral Vale in Yardley, PA. Call (215) 860-4600 to book a visit.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/about-us/dr-urvishkumar-bhalala/#breadcrumb"
      },
      "about": {
        "@id": "https://www.radiant-smiles.com/about-us/dr-urvishkumar-bhalala/#person"
      },
      "mainEntity": {
        "@id": "https://www.radiant-smiles.com/about-us/dr-urvishkumar-bhalala/#person"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.radiant-smiles.com/about-us/dr-urvishkumar-bhalala/#breadcrumb",
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
          "name": "Dr. Urvishkumar Bhalala",
          "item": "https://www.radiant-smiles.com/about-us/dr-urvishkumar-bhalala/"
        }
      ]
    },
    {
      "@type": "Person",
      "@id": "https://www.radiant-smiles.com/about-us/dr-urvishkumar-bhalala/#person",
      "name": "Urvishkumar Bhalala",
      "honorificPrefix": "Dr.",
      "honorificSuffix": "DMD",
      "jobTitle": "Dentist",
      "url": "https://www.radiant-smiles.com/about-us/dr-urvishkumar-bhalala/",
      "worksFor": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      },
      "workLocation": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      },
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "Temple University Kornberg School of Dentistry"
      },
      "description": "Dentist at Radiant Smiles @ Floral Vale in Yardley, PA, and a graduate of Temple University Kornberg School of Dentistry."
    }
  ]
}
```

### 3b. FAQPage (optional)

Google stopped showing FAQ rich results on 7 May 2026. The markup is still valid and keeps the Q&A machine-readable for other search and AI systems. Include it only if the visible FAQ text stays identical.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": "https://www.radiant-smiles.com/about-us/dr-urvishkumar-bhalala/#faq",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/about-us/dr-urvishkumar-bhalala/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Where did Dr. Bhalala go to dental school?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dr. Urvishkumar Bhalala graduated from Temple University Kornberg School of Dentistry. He worked at several dental practices before opening his own, and he brings skills gained in both the United States and India to his patients at Radiant Smiles @ Floral Vale in Yardley, PA."
          }
        },
        {
          "@type": "Question",
          "name": "Where does Dr. Bhalala see patients?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dr. Bhalala sees patients at Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067. The office is open six days a week, including Saturday from 8 am to 2 pm. Call (215) 860-4600 to book a visit with him."
          }
        },
        {
          "@type": "Question",
          "name": "Can I book an appointment with Dr. Bhalala as a new patient?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Radiant Smiles @ Floral Vale welcomes new patients. Call (215) 860-4600 and ask for Dr. Bhalala, or request an appointment online. If you don't have dental insurance, your first visit costs $89 and includes a cleaning, X-rays and an exam."
          }
        }
      ]
    }
  ]
}
```

### 3d. Keep in sync

The schema is generated from the page copy. If the title, meta, FAQs, prices or facts change on the page, update the schema in the same commit. **Validate with** Google's Rich Results Test and validator.schema.org after deploy.
