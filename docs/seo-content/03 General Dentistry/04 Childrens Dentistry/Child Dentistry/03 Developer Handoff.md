# Children's Dentistry: Developer Handoff

**URL:** `/preventative-care/child-dentistry/` | **Status:** Final v1, 7 Oct 2026. Ready to build.

## 1. Head tags

```html
<title>Children's Dentist in Yardley, PA | Kids Dental Care</title>
<meta name="description" content="Children's dentist in Yardley, PA: gentle first visits from age one, cleanings, fluoride and sealants for kids and teens. Call (215) 860-4600.">
<link rel="canonical" href="https://www.radiant-smiles.com/preventative-care/child-dentistry/">
<meta property="og:type" content="website">
<meta property="og:title" content="Children's Dentist in Yardley, PA | Kids Dental Care">
<meta property="og:description" content="Children's dentist in Yardley, PA: gentle first visits from age one, cleanings, fluoride and sealants for kids and teens. Call (215) 860-4600.">
<meta property="og:url" content="https://www.radiant-smiles.com/preventative-care/child-dentistry/">
<!-- og:image: add once a real office or team photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Children's Dentist in Yardley, PA". Keep heading levels exactly as in `02 Content.md` (H2 sections, H3 sub-sections, H3 per FAQ question). Visible breadcrumb: Home › Preventive Care › Children's Dentistry.
- **Wording:** "children's dentist" and "kids" only. "Pediatric dentist" appears once, in the FAQ that explains the difference. Don't use it in headings, alt text, image file names or schema.
- **Images:** child photos only with written parental consent.
- **Family membership line** in the hero reads "$150 a year for the first member, $75 for each additional family member" so the $75 rate is never shown on its own.
- **Server-render all text** (Next.js SSG/SSR). Lists, tables, FAQs and the address must be in the initial HTML, not injected by client-side JS or shown only in images.
- **FAQs:** visible on the page. If you use an accordion, the answer text must be in the DOM on load (`<details>`/`<summary>` is ideal).
- **NAP:** show `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067, (215) 860-4600` as text in the final CTA and the site footer, character for character as on the homepage and the Google Business Profile.
- **Phone:** every phone number and call button links to `tel:+12158604600`. **No `sms:` link**: texting is not confirmed by the practice.
- **Links:** every link in `02 Content.md` is a crawlable `<a href>` with the anchor text as written (no onClick-only navigation). The appointment button goes to `/patient-information/scheduling/`.
- **Images:** real photos of the office and team only (no stock images presented as this practice's patients), with descriptive alt text, for example "Child smiling in the dental chair at Radiant Smiles @ Floral Vale in Yardley, PA".
- **Tracking:** fire separate events for call clicks (`click_call`), appointment button clicks (`click_book`), so conversions from this page can be measured.

## 3. Structured data (JSON-LD)

### 3a. Core (required)

MedicalWebPage + Service (children's dentistry) with `provider` → the practice and `areaServed` Yardley, plus BreadcrumbList. The business is referenced only by `@id` (`https://www.radiant-smiles.com/#dentist`); the full Dentist node lives on the homepage. The WebPage `name` and `description` equal the title tag and meta description exactly.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.radiant-smiles.com/preventative-care/child-dentistry/#webpage",
      "url": "https://www.radiant-smiles.com/preventative-care/child-dentistry/",
      "name": "Children's Dentist in Yardley, PA | Kids Dental Care",
      "description": "Children's dentist in Yardley, PA: gentle first visits from age one, cleanings, fluoride and sealants for kids and teens. Call (215) 860-4600.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/preventative-care/child-dentistry/#breadcrumb"
      },
      "about": [
        {
          "@id": "https://www.radiant-smiles.com/preventative-care/child-dentistry/#service"
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
      "@id": "https://www.radiant-smiles.com/preventative-care/child-dentistry/#breadcrumb",
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
          "name": "Preventive Care",
          "item": "https://www.radiant-smiles.com/preventative-care/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Children's Dentistry",
          "item": "https://www.radiant-smiles.com/preventative-care/child-dentistry/"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.radiant-smiles.com/preventative-care/child-dentistry/#service",
      "name": "Children's dentistry",
      "description": "A children's dentist checks and cleans your child's teeth, teaches healthy habits, and catches small problems before they hurt.",
      "serviceType": "Children's dentistry",
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
      "url": "https://www.radiant-smiles.com/preventative-care/child-dentistry/"
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
      "@id": "https://www.radiant-smiles.com/preventative-care/child-dentistry/#faq",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/preventative-care/child-dentistry/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "When should a child first see a dentist?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A child should first see a dentist just after their first birthday. At this visit, the dentist at Radiant Smiles @ Floral Vale gently checks the teeth and gums, may clean them and apply fluoride, and shows parents how to care for the new teeth at home. Starting early makes later visits easier."
          }
        },
        {
          "@type": "Question",
          "name": "Is a children's dentist the same as a pediatric dentist?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not exactly. A pediatric dentist has completed extra specialty training in treating children. Dr. Bhalala and Dr. Gadria are general dentists who see children as part of family care, from the first visit through the teen years. If your child ever needs specialty care, we'll explain why and talk through your options."
          }
        },
        {
          "@type": "Question",
          "name": "How can I prepare my child for a dental visit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Keep it positive and simple. Read a book about the dentist together, explain that the dentist will count and clean their teeth, and avoid scary words like \"hurt\" or \"shot\". Ask us about a short look around the office before the first appointment, so the room feels familiar."
          }
        },
        {
          "@type": "Question",
          "name": "Do kids need fluoride and sealants?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many do. Professional fluoride helps strengthen enamel, especially on newly erupted permanent teeth, and sealants protect the deep grooves of back teeth where cavities often start. The dentist will check your child's teeth and recommend either one only if it would help."
          }
        },
        {
          "@type": "Question",
          "name": "What if my child has a toothache or chipped tooth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Call (215) 860-4600. We reserve same-day emergency appointments every business day and see patients on Saturdays from 8 am to 2 pm. Keep any broken pieces, rinse your child's mouth with warm water, and use a cold compress on the cheek if there's swelling."
          }
        }
      ]
    }
  ]
}
```

### 3c. Keep in sync

The schema is generated from the page copy. If the title, meta description, the hero sentence used as the service description, FAQs change on the page, update the JSON-LD in the same commit. Validate with Google's Rich Results Test and validator.schema.org after deploy.
