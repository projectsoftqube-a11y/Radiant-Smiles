# Dr. Jaspreet Gadria: Developer Handoff

**URL:** `/about-us/dr-jaspreet-gadria-dmd/` | **Status:** Final v1, 7 Oct 2026. Ready to build.

## 1. Head tags

```html
<title>Dr. Jaspreet Gadria, DMD | Yardley, PA Dentist</title>
<meta name="description" content="Dr. Jaspreet Gadria, DMD, earned high honors at Temple's Kornberg School of Dentistry and speaks English and Punjabi. Book in Yardley, PA: (215) 860-4600.">
<link rel="canonical" href="https://www.radiant-smiles.com/about-us/dr-jaspreet-gadria-dmd/">
<meta property="og:type" content="profile">
<meta property="og:title" content="Dr. Jaspreet Gadria, DMD | Yardley, PA Dentist">
<meta property="og:description" content="Dr. Jaspreet Gadria, DMD, earned high honors at Temple's Kornberg School of Dentistry and speaks English and Punjabi. Book in Yardley, PA: (215) 860-4600.">
<meta property="og:url" content="https://www.radiant-smiles.com/about-us/dr-jaspreet-gadria-dmd/">
<!-- og:image: add once a real office/team photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Dr. Jaspreet Gadria, DMD". Keep the heading levels as in `02 Content.md`. Breadcrumb: Home › About Us › Dr. Jaspreet Gadria.
- **Server-render all text** (Next.js SSG). Set title, description, canonical and openGraph in `generateMetadata` for this route, and render the JSON-LD on the server in a `<script type="application/ld+json">`.
- **Headshot required.** No photo exists on the current site. Use a real, recent headshot (no stock or AI image). Alt text: "Dr. Jaspreet Gadria, DMD, dentist at Radiant Smiles @ Floral Vale in Yardley, PA". Once it exists, add `"image"` to the Person node.
- **Education list:** render the BDS / DMD lines and the memberships as real `<ul>` lists.
- **Service links:** the three links in "Approach to Patient Care" go to the hub pages; keep them as text links.
- **FAQs** visible on the page; if in an accordion, answers stay in the DOM on load.
- **Redirects:** no old URLs 301 into this page.
- **NAP:** where the address appears, it must read exactly `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067, (215) 860-4600`, matching the footer and the Google Business Profile.
- **Phone links:** every "Call (215) 860-4600" button and visible phone number links to `tel:+12158604600`. No `sms:` link until the practice confirms texting.
- **Links:** every link in `02 Content.md` is a crawlable `<a href>` with the anchor text shown. All targets are in the live URL map.
- **Tracking:** fire separate events for call clicks and "Request an Appointment" clicks on this page.

## 3. Structured data (JSON-LD)

The business entity is defined in full on the homepage only. This page references it by `@id` (`https://www.radiant-smiles.com/#dentist`).

### 3a. Core: ProfilePage + BreadcrumbList + Person (required)

`ProfilePage` with `mainEntity` → the Person `@id` also used on the homepage. Marked up from her bio: DMD with high honors (Temple Kornberg), BDS (Amritsar; institution not named on the site), ADA and PDA membership, English and Punjabi. "Some Hindi" is visible on the page but left out of `knowsLanguage` to avoid overstating it.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": "https://www.radiant-smiles.com/about-us/dr-jaspreet-gadria-dmd/#webpage",
      "url": "https://www.radiant-smiles.com/about-us/dr-jaspreet-gadria-dmd/",
      "name": "Dr. Jaspreet Gadria, DMD | Yardley, PA Dentist",
      "description": "Dr. Jaspreet Gadria, DMD, earned high honors at Temple's Kornberg School of Dentistry and speaks English and Punjabi. Book in Yardley, PA: (215) 860-4600.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/about-us/dr-jaspreet-gadria-dmd/#breadcrumb"
      },
      "about": {
        "@id": "https://www.radiant-smiles.com/about-us/dr-jaspreet-gadria-dmd/#person"
      },
      "mainEntity": {
        "@id": "https://www.radiant-smiles.com/about-us/dr-jaspreet-gadria-dmd/#person"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.radiant-smiles.com/about-us/dr-jaspreet-gadria-dmd/#breadcrumb",
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
          "name": "Dr. Jaspreet Gadria",
          "item": "https://www.radiant-smiles.com/about-us/dr-jaspreet-gadria-dmd/"
        }
      ]
    },
    {
      "@type": "Person",
      "@id": "https://www.radiant-smiles.com/about-us/dr-jaspreet-gadria-dmd/#person",
      "name": "Jaspreet Gadria",
      "honorificPrefix": "Dr.",
      "honorificSuffix": "DMD",
      "jobTitle": "Dentist",
      "url": "https://www.radiant-smiles.com/about-us/dr-jaspreet-gadria-dmd/",
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
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "degree",
          "name": "Doctor of Dental Medicine (DMD), with high honors",
          "recognizedBy": {
            "@type": "CollegeOrUniversity",
            "name": "Temple University Kornberg School of Dentistry"
          }
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "degree",
          "name": "Bachelor of Dental Surgery (BDS), Amritsar, India"
        }
      ],
      "memberOf": [
        {
          "@type": "Organization",
          "name": "American Dental Association"
        },
        {
          "@type": "Organization",
          "name": "Pennsylvania Dental Association"
        }
      ],
      "knowsLanguage": [
        "English",
        "Punjabi"
      ],
      "knowsAbout": [
        "General dentistry",
        "Cosmetic dentistry",
        "Restorative dentistry"
      ],
      "description": "Dentist at Radiant Smiles @ Floral Vale in Yardley, PA, focused on general, cosmetic and restorative dentistry."
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
      "@id": "https://www.radiant-smiles.com/about-us/dr-jaspreet-gadria-dmd/#faq",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/about-us/dr-jaspreet-gadria-dmd/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Where did Dr. Gadria train?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dr. Jaspreet Gadria earned a Bachelor of Dental Surgery (BDS) in Amritsar, India, and then a Doctor of Dental Medicine (DMD) with high honors from Temple University's Kornberg School of Dentistry. She is a member of the American Dental Association and the Pennsylvania Dental Association."
          }
        },
        {
          "@type": "Question",
          "name": "What languages does Dr. Gadria speak?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dr. Gadria speaks English and Punjabi fluently, and she speaks some Hindi. If you or a family member would be more comfortable talking through treatment in Punjabi, mention it when you call (215) 860-4600 to book your visit with her."
          }
        },
        {
          "@type": "Question",
          "name": "What kind of dentistry does Dr. Gadria provide?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dr. Gadria focuses on general, cosmetic and restorative dentistry at Radiant Smiles @ Floral Vale in Yardley, PA. The practice offers checkups and cleanings, fillings and crowns, and cosmetic treatment such as whitening and veneers, so most of your family's care can happen in one office."
          }
        }
      ]
    }
  ]
}
```

### 3d. Keep in sync

The schema is generated from the page copy. If the title, meta, FAQs, prices or facts change on the page, update the schema in the same commit. **Validate with** Google's Rich Results Test and validator.schema.org after deploy.
