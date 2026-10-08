# New Patients: Developer Handoff

**URL:** `/patient-information/new-patients/` | **Status:** Final v1, 7 Oct 2026. Ready to build.

## 1. Head tags

```html
<title>New Patients | Yardley Dentist Accepting New Patients</title>
<meta name="description" content="Radiant Smiles @ Floral Vale is a Yardley dentist accepting new patients. See what happens at your first visit, then book online or call (215) 860-4600.">
<link rel="canonical" href="https://www.radiant-smiles.com/patient-information/new-patients/">
<meta property="og:type" content="website">
<meta property="og:title" content="New Patients | Yardley Dentist Accepting New Patients">
<meta property="og:description" content="Radiant Smiles @ Floral Vale is a Yardley dentist accepting new patients. See what happens at your first visit, then book online or call (215) 860-4600.">
<meta property="og:url" content="https://www.radiant-smiles.com/patient-information/new-patients/">
<!-- og:image: add once a real office/team photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Yardley Dentist Accepting New Patients". Keep heading levels exactly as in `02 Content.md` (H2 sections, H3 sub-sections, H3 per FAQ question). Visible breadcrumb: Home › Patient Information › New Patients.
- **Above the fold on mobile:** H1, opener, both buttons and the forms text link.
- **Forms wording (launch):** no online registration exists yet, so the hero link and "Forms to Fill In Before You Arrive" tell patients to call for the forms. When a HIPAA-compliant forms provider with a signed BAA is live (see the Patient Registration handoff), switch to: hero link "Fill in your patient forms before you arrive"; section text "Complete your registration, medical history and insurance details online through our secure patient form. Doing it at home gives you time to look up medication names and policy numbers."; link "Complete your patient forms".
- **First-visit steps** as an ordered list (`<ol>`); "What to bring" as an unordered list.
- **$89 offer:** show exactly as written, with "(uninsured)" / "for uninsured patients". No expiry date is published, so don't add one. If the practice changes the offer, update this page, the hub, the Insurance page and `/special-offers/` together.
- **CTA targets:** "Request an Appointment" goes to `/patient-information/scheduling/`; call buttons use `tel:+12158604600`. At most one CTA per section, as written.
- **FAQs:** visible on the page. If you use an accordion, the answer text must be in the DOM on load (`<details>`/`<summary>` is ideal).
- **Server-render all text** (Next.js SSG/SSR). Headings, lists, tables, FAQs and the NAP line must be in the initial HTML, not injected by client-side JS or shown only inside images.
- **NAP:** show as text exactly `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067, (215) 860-4600` (final CTA block and site footer), character for character the same as the homepage and Google Business Profile.
- **Phone:** every call button and phone mention is a `tel:+12158604600` link. No `sms:` link until the practice confirms the number accepts texts.
- **Links:** every internal link in `02 Content.md` is a crawlable `<a href>` with the anchor text as written (no onClick-only navigation). Link only to URLs in the live URL map.
- **Images:** real photos of the office, team or equipment only, each with descriptive alt text (e.g. "Treatment room at Radiant Smiles @ Floral Vale in Yardley, PA"). No stock images presented as this office.
- **Tracking:** fire separate events for call clicks (`click_call`) and appointment button clicks (`click_request_appointment`); also track the forms link (`click_patient_forms`) and the special-offers link (`click_offer`).
- **301 redirects into this page:** `/patient-information/first-visit/` → `/patient-information/new-patients/`. Server-side permanent redirects (Next.js `redirects()` with `permanent: true` or at the host), with and without trailing slash. Remove the old URLs from the sitemap and update any internal links that pointed to them.

## 3. Structured data (JSON-LD)

Business `@id` is `https://www.radiant-smiles.com/#dentist`: the full Dentist node lives on the homepage only, so this page references it by `@id`. The WebPage `name` and `description` equal the title tag and meta description exactly.

### 3a. Core: MedicalWebPage + BreadcrumbList (required)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.radiant-smiles.com/patient-information/new-patients/#webpage",
      "url": "https://www.radiant-smiles.com/patient-information/new-patients/",
      "name": "New Patients | Yardley Dentist Accepting New Patients",
      "description": "Radiant Smiles @ Floral Vale is a Yardley dentist accepting new patients. See what happens at your first visit, then book online or call (215) 860-4600.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/patient-information/new-patients/#breadcrumb"
      },
      "about": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.radiant-smiles.com/patient-information/new-patients/#breadcrumb",
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
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "New Patients",
          "item": "https://www.radiant-smiles.com/patient-information/new-patients/"
        }
      ]
    }
  ]
}
```

### 3b. FAQPage (required by the brief)

Google stopped showing FAQ rich results on 7 May 2026. The markup is still valid and keeps the Q&A machine-readable for other search and AI systems. The question and answer text below is copied word for word from the visible FAQs; include it only while they stay identical.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": "https://www.radiant-smiles.com/patient-information/new-patients/#faq",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/patient-information/new-patients/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What happens at a new patient dental visit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A new patient visit at Radiant Smiles @ Floral Vale is a comprehensive evaluation. The dentist reviews your medical and dental history, takes or reviews X-rays, examines your teeth and gums, and screens for oral cancer. You then get a clear explanation of your treatment options and their costs."
          }
        },
        {
          "@type": "Question",
          "name": "Can I have treatment at my first appointment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Often, yes. Treatment can usually be done or started on the same day as your consultation. If you have a complex medical history or need a larger treatment plan, the dentist may schedule a second appointment so there's enough time to do the work properly."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to bring X-rays from my old dentist?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It helps. Ask your previous dentist or physician to send your recent X-rays to our office, or pick them up and bring them if time is short. If we need additional images, we can take digital X-rays during your visit at our Yardley office."
          }
        },
        {
          "@type": "Question",
          "name": "Can a teenager come to a first visit alone?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. All patients under the age of 18 must be accompanied by a parent or guardian. The adult can also help complete the medical history and insurance sections of the patient forms before the visit, which keeps the appointment running on time."
          }
        },
        {
          "@type": "Question",
          "name": "Do you see new patients without insurance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Uninsured new patients can book the $89 New Patient Visit Special, which includes a cleaning, X-rays and an exam. Our in-office membership plan, at $150 a year, then covers two cleanings, exams and X-rays and gives you 15% off dental treatment."
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

The schema is generated from the page copy. If the title, meta description, FAQs, the $89 offer or the membership price change on the page, update the JSON-LD in the same commit. **Validate** with Google's Rich Results Test and validator.schema.org after deploy.
