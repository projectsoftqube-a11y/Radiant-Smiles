import { legalNap, type LegalPage } from "./common";

/** Verbatim from 09 Compliance/01 Legal/Disclaimer/02 Content.md */
export const disclaimer: LegalPage = {
  meta: {
    path: "/disclaimer/",
    title: "Website Disclaimer | Radiant Smiles @ Floral Vale",
    description:
      "The Radiant Smiles @ Floral Vale website is for general information and education only. It does not give dental advice or create a patient relationship.",
  },
  crumbs: [
    { name: "Home", path: "/" },
    { name: "Disclaimer", path: "/disclaimer/" },
  ],
  label: "Website disclaimer",
  hero: {
    h1: "Website Disclaimer",
    intro:
      "This website is provided for information and education purposes only. No doctor/patient relationship is established by your use of this site.",
    dated: "**Last updated:** [CONFIRM: date the page is published]",
  },
  sections: [
    {
      id: "no-diagnosis-or-treatment",
      h2: "No Diagnosis or Treatment",
      icon: "clipboard",
      blocks: [
        {
          p: "No diagnosis or treatment is being provided through this website. The information here is general and is not specific medical, dental or surgical advice. Every patient is different, and only an examination by a dentist can tell you what treatment, if any, is right for you. Please don't delay or ignore professional dental or medical advice because of something you read on this site.",
        },
      ],
    },
    {
      id: "dental-emergencies",
      h2: "Dental Emergencies",
      icon: "firstAid",
      blocks: [
        {
          callout:
            "If you have a dental emergency, call our office at (215) 860-4600. If you have swelling that affects your breathing or swallowing, bleeding that won't stop or a serious injury, call 911 or go to the nearest hospital emergency department. Don't use a website form for an urgent problem.",
          tone: "alert",
          icon: "alert",
        },
      ],
    },
    {
      id: "treatment-results",
      h2: "Treatment Results",
      icon: "smile",
      blocks: [
        {
          p: "Descriptions of treatments, before-and-after photos and patient reviews on this website describe individual experiences. Results vary from patient to patient, and no particular outcome is promised. Your dentist will explain the likely results, risks and alternatives for your own treatment.",
        },
      ],
    },
    {
      id: "offers-and-fees",
      h2: "Offers & Fees",
      icon: "tag",
      blocks: [
        {
          p: "Offers, fees and payment options shown on this website may change. The terms that apply are those confirmed by our office at the time of your visit. [CONFIRM: offer terms, eligibility and expiry dates for each published offer.] Insurance coverage depends on your plan; please contact us to verify your benefits.",
        },
      ],
    },
    {
      id: "links-to-other-websites",
      h2: "Links to Other Websites",
      icon: "arrowUpRight",
      blocks: [
        {
          p: "This website may link to other websites, such as financing or insurance providers. We are not responsible for the content or privacy practices of any hyper-linked site.",
        },
      ],
    },
    {
      id: "related-policies",
      h2: "Related Policies",
      icon: "layers",
      blocks: [
        {
          policies: [
            "[Terms of Use](/patient-information/terms/)",
            "[Website Privacy Policy](/patient-information/terms/privacy/)",
            "[HIPAA Notice of Privacy Practices](/hipaa-notice-of-privacy-practices/)",
            "[Web Accessibility](/patient-information/terms/web-accessibility/)",
          ],
        },
      ],
    },
    {
      id: "contact-us",
      h2: "Contact Us",
      icon: "pin",
      contact: true,
      blocks: [{ p: legalNap }, { p: "© [CONFIRM: year of publication] Radiant Smiles @ Floral Vale. All rights reserved." }],
    },
  ],
};
