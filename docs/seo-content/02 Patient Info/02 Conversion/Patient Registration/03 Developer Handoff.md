# Patient Registration: Developer Handoff

**URL:** `/patient-information/patient-registration/` | **Status:** Final v1, 7 Oct 2026. Ready to build.

## 1. Head tags

```html
<title>Radiant Smiles Patient Forms & Registration | Yardley</title>
<meta name="description" content="Need your Radiant Smiles patient forms? Call (215) 860-4600 and we'll get your registration, medical history and insurance forms to you before your visit.">
<link rel="canonical" href="https://www.radiant-smiles.com/patient-information/patient-registration/">
<meta property="og:type" content="website">
<meta property="og:title" content="Radiant Smiles Patient Forms & Registration | Yardley">
<meta property="og:description" content="Need your Radiant Smiles patient forms? Call (215) 860-4600 and we'll get your registration, medical history and insurance forms to you before your visit.">
<meta property="og:url" content="https://www.radiant-smiles.com/patient-information/patient-registration/">
<!-- og:image: add once a real office/team photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Radiant Smiles Patient Forms and Registration". Keep heading levels exactly as in `02 Content.md` (H2 sections, H3 sub-sections, H3 per FAQ question). Visible breadcrumb: Home › Patient Information › Patient Registration.
- **[FLAG] Launch version = no online form.** The current site says "We are still working to integrate our registration system", and no HIPAA-compliant forms provider has been chosen or signed a Business Associate Agreement (BAA) yet. So `02 Content.md` is the launch copy: patients call (215) 860-4600 and the office gets the forms to them before the visit. **Do not** embed any form on this page, and never swap in the general contact form or a standard website form handler. The section list under "Getting Your Radiant Smiles Patient Forms" is visible text only.
- **Switch to online registration only when** the practice has chosen the provider [CONFIRM: provider name], signed a BAA with it, and confirmed the go-live date. Then, in one commit:
  1. Meta description (and WebPage `description`, og:description): "Complete your Radiant Smiles patient forms online before your visit: registration, medical history and insurance details, sent through a secure form."
  2. Hero: "Complete your Radiant Smiles patient forms online before your visit to our Yardley office. One secure form collects your contact details, medical history and insurance information, so your appointment can focus on your care instead of a clipboard." First button: **Start Your Patient Forms** → `#registration-form`.
  3. H2 → "Complete Your Radiant Smiles Patient Forms Online", with: "The registration form below is hosted by a secure, HIPAA-compliant forms provider. Your answers go securely to our office team." Then the provider's form embed in a section with `id="registration-form"` (iframe or hosted link), built from the six-item section list. Medical history must include diabetes, high blood pressure, artificial heart valve or joint replacement, rheumatic fever, and medications including heart medication, aspirin and blood thinners.
  4. Privacy section: "Please use only this secure form to send health information. Our general website contact form is not for private health details. If you have trouble with the form, call (215) 860-4600 and we'll help."
  5. Update the Patient Information Hub ("Patient Forms" section) and New Patients ("Forms to Fill In Before You Arrive" section and hero link) to the online wording given in their handoffs.
- **No tracking pixels on this page.** Don't load Meta Pixel, Google Ads remarketing or other advertising tags here, and never send form content to analytics (HHS guidance on online tracking technologies by HIPAA-covered entities). Basic page-view analytics only, configured without URL parameters that could carry personal data. Serve the page over HTTPS only.
- **Indexing:** keep the page indexable (it ranks for the practice's "patient forms" searches); the provider's iframe content is not indexed, which is fine.
- **CTA targets:** "Request an Appointment" goes to `/patient-information/scheduling/`; call buttons use `tel:+12158604600`. At most one CTA per section, as written.
- **Server-render all text** (Next.js SSG/SSR). Headings, lists, tables, FAQs and the NAP line must be in the initial HTML, not injected by client-side JS or shown only inside images.
- **NAP:** show as text exactly `Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067, (215) 860-4600` (final CTA block and site footer), character for character the same as the homepage and Google Business Profile.
- **Phone:** every call button and phone mention is a `tel:+12158604600` link. No `sms:` link until the practice confirms the number accepts texts.
- **Links:** every internal link in `02 Content.md` is a crawlable `<a href>` with the anchor text as written (no onClick-only navigation). Link only to URLs in the live URL map.
- **Images:** real photos of the office, team or equipment only, each with descriptive alt text (e.g. "Treatment room at Radiant Smiles @ Floral Vale in Yardley, PA"). No stock images presented as this office.
- **Tracking:** fire separate events for call clicks (`click_call`) and appointment button clicks (`click_request_appointment`); once the online form is live, also track clicks on the start-forms button (`click_patient_forms`). Never track form completion inside the provider's iframe unless the provider offers a HIPAA-safe completion signal.

## 3. Structured data (JSON-LD)

Business `@id` is `https://www.radiant-smiles.com/#dentist`: the full Dentist node lives on the homepage only, so this page references it by `@id`. The WebPage `name` and `description` equal the title tag and meta description exactly.

### 3a. Core: WebPage + BreadcrumbList (required)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.radiant-smiles.com/patient-information/patient-registration/#webpage",
      "url": "https://www.radiant-smiles.com/patient-information/patient-registration/",
      "name": "Radiant Smiles Patient Forms & Registration | Yardley",
      "description": "Need your Radiant Smiles patient forms? Call (215) 860-4600 and we'll get your registration, medical history and insurance forms to you before your visit.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.radiant-smiles.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.radiant-smiles.com/patient-information/patient-registration/#breadcrumb"
      },
      "about": {
        "@id": "https://www.radiant-smiles.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.radiant-smiles.com/patient-information/patient-registration/#breadcrumb",
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
          "name": "Patient Registration",
          "item": "https://www.radiant-smiles.com/patient-information/patient-registration/"
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

The schema is generated from the page copy. If the title, meta description, FAQs or form sections change on the page (including the switch to online registration above), update the JSON-LD in the same commit. **Validate** with Google's Rich Results Test and validator.schema.org after deploy.
