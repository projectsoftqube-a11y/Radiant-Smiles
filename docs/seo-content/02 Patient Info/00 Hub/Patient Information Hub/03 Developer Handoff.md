# Patient Information: Developer Handoff

**URL:** `/patient-information/` | **Status:** Final v1, 7 Oct 2026. Ready to build.

## 1. Head tags

```html
<title>Patient Information | Radiant Smiles Yardley Dental Office</title>
<meta name="description" content="Plan your visit to our Yardley dental office: what to expect as a new patient, forms, PPO insurance, CareCredit financing and how to book an appointment.">
<link rel="canonical" href="https://www.radiant-smiles.com/patient-information/">
<meta property="og:type" content="website">
<meta property="og:title" content="Patient Information | Radiant Smiles Yardley Dental Office">
<meta property="og:description" content="Plan your visit to our Yardley dental office: what to expect as a new patient, forms, PPO insurance, CareCredit financing and how to book an appointment.">
<meta property="og:url" content="https://www.radiant-smiles.com/patient-information/">
<!-- og:image: add once a real office/team photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Patient Information for Our Yardley Dental Office". Keep heading levels exactly as in `02 Content.md` (H2 sections, H3 sub-sections, H3 per FAQ question). Visible breadcrumb: Home › Patient Information.
- **Hub layout:** one card per section (New Patients, Scheduling, Insurance and Payment, Patient Forms, Care and Comfort, After Your Treatment), each with its text link as written. The quick facts strip is plain text, not an image.
- **Patient Forms card (launch wording):** no online registration exists yet, so the card says to call for the forms. When the practice has a HIPAA-compliant forms provider with a signed BAA live (see the Patient Registration handoff), switch the card text to: "Complete your registration, medical history and insurance details online before you arrive, so your appointment can focus on your care. The registration form is secure. Please don't send health details through the general contact form." and the link text to "Fill in your patient forms".
- **Navigation:** this URL is the parent of every Patient Information page; use it as the section landing page in the main menu and breadcrumbs.
- **CTA targets:** "Request an Appointment" goes to `/patient-information/scheduling/`; call buttons use `tel:+12158604600`. At most one CTA per section, as written.
- **FAQs:** visible on the page. If you use an accordion, the answer text must be in the DOM on load (`<details>`/`<summary>` is ideal).
- **Server-render all text** (Next.js SSG/SSR). Headings, lists, tables, FAQs and the NAP line must be in the initial HTML, not injected by client-side JS or shown only inside images.
- **NAP:** show as text exactly `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067, (215) 860-4600` (final CTA block and site footer), character for character the same as the homepage and Google Business Profile.
- **Phone:** every call button and phone mention is a `tel:+12158604600` link. No `sms:` link until the practice confirms the number accepts texts.
- **Links:** every internal link in `02 Content.md` is a crawlable `<a href>` with the anchor text as written (no onClick-only navigation). Link only to URLs in the live URL map.
- **Images:** real photos of the office, team or equipment only, each with descriptive alt text (e.g. "Treatment room at Radiant Smiles @ Floral Vale in Yardley, PA"). No stock images presented as this office.
- **Tracking:** fire separate events for call clicks (`click_call`) and appointment button clicks (`click_request_appointment`); also track hub card clicks (`click_hub_card`, with the destination URL as a parameter).
- **301 redirects into this page:** `/patient-information/introduction/` → `/patient-information/`; `/patient-information/services/` → `/patient-information/`. Server-side permanent redirects (Next.js `redirects()` with `permanent: true` or at the host), with and without trailing slash. Remove the old URLs from the sitemap and update any internal links that pointed to them.

## 3. Structured data (JSON-LD)

Business `@id` is `https://www.radiant-smiles.com/#dentist`: the full Dentist node lives on the homepage only, so this page references it by `@id`. The WebPage `name` and `description` equal the title tag and meta description exactly.

### 3a. Core: CollectionPage + BreadcrumbList + ItemList (required)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.radiant-smiles.com/patient-information/#webpage",
      "url": "https://www.radiant-smiles.com/patient-information/",
      "name": "Patient Information | Radiant Smiles Yardley Dental Office",
      "description": "Plan your visit to our Yardley dental office: what to expect as a new patient, forms, PPO insurance, CareCredit financing and how to book an appointment.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/patient-information/#breadcrumb"
      },
      "about": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      },
      "mainEntity": {
        "@id": "https://www.radiant-smiles.com/patient-information/#itemlist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.radiant-smiles.com/patient-information/#breadcrumb",
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
          "name": "Patient Information",
          "item": "https://www.radiant-smiles.com/patient-information/"
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://www.radiant-smiles.com/patient-information/#itemlist",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "New Patients",
          "url": "https://www.radiant-smiles.com/patient-information/new-patients/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Why Choose Us",
          "url": "https://www.radiant-smiles.com/patient-information/why-choose-us/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Scheduling",
          "url": "https://www.radiant-smiles.com/patient-information/scheduling/"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Insurance & Payment",
          "url": "https://www.radiant-smiles.com/patient-information/insurance-payment-options/"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "CareCredit Financing",
          "url": "https://www.radiant-smiles.com/patient-information/carecredit/"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Patient Registration",
          "url": "https://www.radiant-smiles.com/patient-information/patient-registration/"
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "Care & Comfort",
          "url": "https://www.radiant-smiles.com/patient-information/care-and-comfort/"
        },
        {
          "@type": "ListItem",
          "position": 8,
          "name": "Advanced Technology",
          "url": "https://www.radiant-smiles.com/patient-information/care-and-comfort/advanced-technology/"
        },
        {
          "@type": "ListItem",
          "position": 9,
          "name": "Infection Control",
          "url": "https://www.radiant-smiles.com/patient-information/care-and-comfort/infection-control/"
        },
        {
          "@type": "ListItem",
          "position": 10,
          "name": "Home Care Instructions",
          "url": "https://www.radiant-smiles.com/patient-information/care-and-comfort/home-instructions/"
        },
        {
          "@type": "ListItem",
          "position": 11,
          "name": "Patient Education",
          "url": "https://www.radiant-smiles.com/patient-information/patient-education/"
        }
      ]
    }
  ]
}
```

### 3b. FAQPage (optional)

Google stopped showing FAQ rich results on 7 May 2026. The markup is still valid and keeps the Q&A machine-readable for other search and AI systems. The question and answer text below is copied word for word from the visible FAQs; include it only while they stay identical.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": "https://www.radiant-smiles.com/patient-information/#faq",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/patient-information/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is Radiant Smiles @ Floral Vale accepting new patients?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Radiant Smiles @ Floral Vale welcomes new patients at its Yardley dental office, 117 Floral Vale Boulevard. You can request an appointment online or call (215) 860-4600. Patients without insurance can book the $89 New Patient Visit Special, which includes a cleaning, X-rays and an exam."
          }
        },
        {
          "@type": "Question",
          "name": "Where is the office?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Radiant Smiles @ Floral Vale is at 117 Floral Vale Boulevard, Yardley, PA 19067, in Lower Makefield Township, Bucks County. Patients visit from Yardley, Morrisville and Lower Makefield, and from New Jersey towns such as Trenton and Ewing. Trenton is about 15 minutes away, depending on traffic."
          }
        },
        {
          "@type": "Question",
          "name": "Can I book a Saturday appointment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The office is open on Saturdays from 8:00 am to 2:00 pm, which suits patients who work during the week. Request a Saturday time online or call (215) 860-4600, and our team will offer the first opening that fits your schedule."
          }
        }
      ]
    }
  ]
}
```

### 3c. Not included on purpose

- No Review or AggregateRating markup for the practice's own reviews (self-serving reviews aren't eligible and risk a manual action).
- No `priceRange`, `award` or `hasCredential` values: the current site doesn't publish them.

### 3d. Keep in sync

The schema is generated from the page copy. If the title, meta description, FAQs, child links or quick facts change on the page, update the JSON-LD in the same commit. **Validate** with Google's Rich Results Test and validator.schema.org after deploy.
