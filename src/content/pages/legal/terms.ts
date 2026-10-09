import { PATIENT_INFO, TERMS, type LegalPage } from "./common";

/** Verbatim from 09 Compliance/01 Legal/Terms of Use/02 Content.md */
export const terms: LegalPage = {
  meta: {
    path: "/patient-information/terms/",
    title: "Terms of Use | Radiant Smiles @ Floral Vale",
    description:
      "The terms that apply when you use the Radiant Smiles @ Floral Vale website, including appointment requests, offers, content ownership and links.",
  },
  crumbs: [{ name: "Home", path: "/" }, PATIENT_INFO, TERMS],
  label: "Terms of use",
  hero: {
    h1: "Website Terms of Use",
    intro:
      "These terms apply to your use of www.radiant-smiles.com, the website of Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067. By using this website, you agree to these terms. If you don't agree, please don't use the site.",
    dated: "**Last updated:** October 2026",
  },
  sections: [
    {
      id: "website-policies",
      h2: "Website Policies",
      icon: "layers",
      blocks: [
        { p: "These terms sit alongside our other website policies:" },
        {
          policies: [
            "[Website Privacy Policy](/patient-information/terms/privacy/): what information the website collects and how it is used.",
            "[Web Accessibility](/patient-information/terms/web-accessibility/): our commitment to making the site usable for everyone, and how to get help.",
            "[Disclaimer](/disclaimer/): the website gives general information, not dental advice.",
            "[HIPAA Notice of Privacy Practices](/hipaa-notice-of-privacy-practices/): how your dental records are protected.",
          ],
        },
      ],
    },
    {
      id: "information-not-advice",
      h2: "Information, Not Advice",
      icon: "book",
      blocks: [
        {
          p: "The content on this website is for general information and education only. It is not a diagnosis or a substitute for an examination by a dentist, and using the site does not create a doctor/patient relationship.",
        },
      ],
    },
    {
      id: "appointment-requests-and-forms",
      h2: "Appointment Requests & Forms",
      icon: "calendarCheck",
      blocks: [
        {
          p: "An appointment request sent through this website is a request, not a booked appointment. Your appointment is confirmed only when our office contacts you. Please keep the details you enter brief. Don't use a website form for a dental emergency: call (215) 860-4600, or call 911 for a medical emergency.",
        },
      ],
    },
    {
      id: "offers-fees-and-insurance",
      h2: "Offers, Fees & Insurance",
      icon: "tag",
      blocks: [
        {
          p: "We try to keep fees, offers and insurance information on this website accurate and current, but they may change without notice. The terms that apply are those our office confirms with you. Insurance coverage depends on your plan.",
        },
      ],
    },
    {
      id: "content-ownership",
      h2: "Content Ownership",
      icon: "camera",
      blocks: [
        {
          p: "The text, photos, graphics and logos on this website belong to Radiant Smiles @ Floral Vale or are used with permission. You may view and print pages for your personal, non-commercial use. Please don't copy, republish or sell any content without our written permission. Product names such as Invisalign® and CareCredit belong to their owners.",
        },
      ],
    },
    {
      id: "using-the-website",
      h2: "Using the Website",
      icon: "shield",
      blocks: [
        { p: "When you use this website, please don't:" },
        {
          donts: [
            "submit false information or another person's details",
            "try to gain unauthorized access to the site or its systems",
            "upload or send anything harmful, such as viruses or malicious code",
            "use the site in any way that breaks the law",
          ],
        },
      ],
    },
    {
      id: "links-to-other-websites",
      h2: "Links to Other Websites",
      icon: "arrowUpRight",
      blocks: [
        {
          p: "This website may link to other websites, such as financing or insurance providers. We don't control those sites and are not responsible for their content, terms or privacy practices.",
        },
      ],
    },
    {
      id: "no-warranty-and-limitation-of-liability",
      h2: "No Warranty & Limitation of Liability",
      icon: "alert",
      blocks: [
        {
          p: "This website is provided \"as is.\" We don't promise that it will always be available or free of errors. To the extent the law allows, Radiant Smiles @ Floral Vale is not liable for any loss arising from your use of the website or reliance on its content.",
        },
      ],
    },
    {
      id: "governing-law",
      h2: "Governing Law",
      icon: "case",
      blocks: [{ p: "These terms are governed by the laws of the Commonwealth of Pennsylvania." }],
    },
    {
      id: "changes-to-these-terms",
      h2: "Changes to These Terms",
      icon: "refresh",
      blocks: [
        {
          p: "We may update these terms from time to time. The date at the top of this page shows when they last changed. Continuing to use the site after a change means you accept the updated terms.",
        },
      ],
    },
    {
      id: "contact-us",
      h2: "Contact Us",
      icon: "pin",
      contact: true,
      blocks: [{ p: "Questions about these terms? Contact Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067 · (215) 860-4600." }],
    },
  ],
};
