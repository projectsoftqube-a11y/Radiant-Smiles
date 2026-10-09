import { legalNap, PATIENT_INFO, TERMS, type LegalPage } from "./common";

/** Verbatim from 09 Compliance/01 Legal/Web Accessibility/02 Content.md */
export const accessibility: LegalPage = {
  meta: {
    path: "/patient-information/terms/web-accessibility/",
    title: "Web Accessibility | Radiant Smiles @ Floral Vale",
    description:
      "Our commitment to making the Radiant Smiles @ Floral Vale website usable for people with disabilities, tips for easier browsing, and how to get help.",
  },
  crumbs: [{ name: "Home", path: "/" }, PATIENT_INFO, TERMS, { name: "Web Accessibility", path: "/patient-information/terms/web-accessibility/" }],
  label: "Accessibility",
  hero: {
    h1: "Web Accessibility Statement",
    intro:
      "Radiant Smiles @ Floral Vale is committed to continuously improving access to our services by individuals with disabilities. We want everyone to be able to use this website to learn about our practice, find our office and request an appointment.",
    dated: "**Last reviewed:** October 2026",
  },
  sections: [
    {
      id: "our-approach",
      h2: "Our Approach",
      icon: "accessible",
      blocks: [
        {
          p: "We aim to make this website usable with a keyboard, a screen reader and screen magnification, with readable text, clear headings and good color contrast. We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.2 at Level AA, and we review the site at least once a year and after major changes.",
        },
      ],
    },
    {
      id: "tips-for-easier-browsing",
      h2: "Tips for Easier Browsing",
      icon: "eye",
      blocks: [
        { p: "Your browser and device have built-in settings that can make any website easier to use:" },
        {
          cards: [
            "**Text size:** zoom in or out (Ctrl and + or −, or Command and + or − on a Mac).",
            "**Keyboard navigation:** use Tab to move between links and buttons, and Enter to select.",
            "**Screen readers:** use the screen reader built into your device or one you already rely on.",
            "**Magnification:** use your device's magnifier to enlarge part of the screen.",
            "**Contrast:** turn on high-contrast or dark mode in your device settings.",
            "**Pointer:** make the mouse pointer larger or easier to see in your device settings.",
          ],
          icons: ["search", "menu", "ear", "eye", "moon", "hand"],
        },
      ],
    },
    {
      id: "need-help",
      h2: "Need Help?",
      icon: "headphones",
      blocks: [
        {
          callout:
            "If you have trouble using any part of this website, please call us at (215) 860-4600. We'll give you the information you need, help you request an appointment by phone and work to fix the problem. Please tell us the page and the problem you found.",
          tone: "help",
          icon: "headphones",
        },
      ],
    },
    {
      id: "visiting-our-office",
      h2: "Visiting Our Office",
      icon: "home",
      blocks: [
        {
          p: "If you need help getting into or around our office, or would like us to know about any access needs before your visit, please tell us when you book and we'll help.",
        },
      ],
    },
    {
      id: "related-policies",
      h2: "Related Policies",
      icon: "layers",
      blocks: [{ policies: ["[Terms of Use](/patient-information/terms/)", "[Website Privacy Policy](/patient-information/terms/privacy/)"] }],
    },
    {
      id: "contact-us",
      h2: "Contact Us",
      icon: "pin",
      contact: true,
      blocks: [{ p: legalNap }],
    },
  ],
};
