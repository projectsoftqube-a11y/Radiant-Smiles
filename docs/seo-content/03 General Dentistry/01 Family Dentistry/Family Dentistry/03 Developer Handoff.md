# Family Dentistry: Developer Handoff

**URL:** `/family-dentistry/` | **Status:** Final v1, 7 Oct 2026. Ready to build.

## 1. Head tags

```html
<title>Family Dentist in Yardley, PA | Radiant Smiles</title>
<meta name="description" content="Family dentist in Yardley, PA for every age: checkups, cleanings, kids' visits, fillings and more. New patients welcome. Call (215) 860-4600.">
<link rel="canonical" href="https://www.radiant-smiles.com/family-dentistry/">
<meta property="og:type" content="website">
<meta property="og:title" content="Family Dentist in Yardley, PA | Radiant Smiles">
<meta property="og:description" content="Family dentist in Yardley, PA for every age: checkups, cleanings, kids' visits, fillings and more. New patients welcome. Call (215) 860-4600.">
<meta property="og:url" content="https://www.radiant-smiles.com/family-dentistry/">
<!-- og:image: add once a real office or team photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Family Dentist in Yardley, PA". Keep heading levels exactly as in `02 Content.md` (H2 sections, H3 sub-sections, H3 per FAQ question). Visible breadcrumb: Home › Family Dentistry.
- **301 redirect into this page:** `/general-dentistry/` → `/family-dentistry/` (permanent, server-side, no chain). Both URLs competed for the same terms; this page now carries the "What Is General Dentistry?" section so the old page's intent is covered. Update every internal link that pointed at `/general-dentistry/`.
- **Ranking context:** currently #14 for "family dentist yardley pa". Keep the H1, title and the "A Family Dentist in Yardley, PA for Every Age" section above the fold on desktop, and the appointment button in the first screen on mobile.
- **Doctor links:** link both doctor names to their bio pages as written; add their photos with alt text naming each dentist.
- **Server-render all text** (Next.js SSG/SSR). Lists, tables, FAQs and the address must be in the initial HTML, not injected by client-side JS or shown only in images.
- **FAQs:** visible on the page. If you use an accordion, the answer text must be in the DOM on load (`<details>`/`<summary>` is ideal).
- **NAP:** show `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067, (215) 860-4600` as text in the final CTA and the site footer, character for character as on the homepage and the Google Business Profile.
- **Phone:** every phone number and call button links to `tel:+12158604600`. **No `sms:` link**: texting is not confirmed by the practice.
- **Links:** every link in `02 Content.md` is a crawlable `<a href>` with the anchor text as written (no onClick-only navigation). The appointment button goes to `/patient-information/scheduling/`.
- **Images:** real photos of the office and team only (no stock images presented as this practice's patients), with descriptive alt text, for example "Dr. Urvishkumar Bhalala and Dr. Jaspreet Gadria, family dentists at Radiant Smiles @ Floral Vale in Yardley, PA".
- **Tracking:** fire separate events for call clicks (`click_call`), appointment button clicks (`click_book`), so conversions from this page can be measured.

## 3. Structured data (JSON-LD)

### 3a. Core (required)

MedicalWebPage + Service (family and general dentistry) with `provider` → the practice and `areaServed` Yardley, plus BreadcrumbList. The business is referenced only by `@id` (`https://www.radiant-smiles.com/#dentist`); the full Dentist node lives on the homepage. The WebPage `name` and `description` equal the title tag and meta description exactly.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.radiant-smiles.com/family-dentistry/#webpage",
      "url": "https://www.radiant-smiles.com/family-dentistry/",
      "name": "Family Dentist in Yardley, PA | Radiant Smiles",
      "description": "Family dentist in Yardley, PA for every age: checkups, cleanings, kids' visits, fillings and more. New patients welcome. Call (215) 860-4600.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/family-dentistry/#breadcrumb"
      },
      "about": [
        {
          "@id": "https://www.radiant-smiles.com/family-dentistry/#service"
        },
        {
          "@id": "https://www.radiant-smiles.com/#dentist"
        }
      ],
      "provider": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.radiant-smiles.com/family-dentistry/#breadcrumb",
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
          "name": "Family Dentistry",
          "item": "https://www.radiant-smiles.com/family-dentistry/"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.radiant-smiles.com/family-dentistry/#service",
      "name": "Family dentistry",
      "description": "A family dentist looks after everyone in your household, from a toddler's first checkup to a grandparent's dentures, in one office.",
      "serviceType": "Family and general dentistry",
      "provider": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      },
      "areaServed": {
        "@type": "City",
        "name": "Yardley",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "Bucks County, Pennsylvania"
        }
      },
      "url": "https://www.radiant-smiles.com/family-dentistry/"
    }
  ]
}
```

### 3b. FAQPage (optional)

Google stopped showing FAQ rich results on 7 May 2026. The markup is still valid and keeps the Q&A machine-readable for other search and AI systems. Include it only while the visible FAQ text stays identical.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": "https://www.radiant-smiles.com/family-dentistry/#faq",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/family-dentistry/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Are you accepting new patients?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, new patients are welcome at Radiant Smiles @ Floral Vale in Yardley, PA. Request an appointment online or call (215) 860-4600. New patients without insurance can have a cleaning, X-rays and an exam for $89, and we accept many PPO insurance plans."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between a family dentist and a general dentist?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A family dentist is a general dentist who sees patients of every age. Both provide exams, cleanings, X-rays, fillings and gum care. A family dentist also sees young children, so parents, kids and grandparents can all be cared for by the same dentists in one office."
          }
        },
        {
          "@type": "Question",
          "name": "What age can my child start seeing the dentist?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Your child should have their first dental visit just after their first birthday. At Radiant Smiles @ Floral Vale, the dentist gently checks your child's teeth and gums, may clean them and apply fluoride, and shows you how to care for their teeth at home."
          }
        },
        {
          "@type": "Question",
          "name": "Do you have a dental plan for families without insurance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Our in-office membership plan is $150 a year for the first person and $75 for each additional family member. Each member gets 2 cleanings, exams and X-rays a year, plus 15% off dental treatment, with no insurance company involved."
          }
        },
        {
          "@type": "Question",
          "name": "Are you open on Saturdays?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Radiant Smiles @ Floral Vale is open on Saturdays from 8 am to 2 pm, which makes it easier to book checkups around school and work. We also reserve same-day emergency appointments every business day for toothaches and broken teeth."
          }
        }
      ]
    }
  ]
}
```

### 3c. Keep in sync

The schema is generated from the page copy. If the title, meta description, the hero sentence used as the service description, FAQs change on the page, update the JSON-LD in the same commit. Validate with Google's Rich Results Test and validator.schema.org after deploy.
