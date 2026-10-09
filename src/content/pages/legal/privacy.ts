import { legalNap, PATIENT_INFO, TERMS, type LegalPage } from "./common";

/** Verbatim from 09 Compliance/01 Legal/Privacy Policy/02 Content.md */
export const privacy: LegalPage = {
  meta: {
    path: "/patient-information/terms/privacy/",
    title: "Privacy Policy | Radiant Smiles @ Floral Vale",
    description:
      "How the Radiant Smiles @ Floral Vale website collects, uses and protects information you submit through forms, cookies and log files, and how to opt out.",
  },
  crumbs: [{ name: "Home", path: "/" }, PATIENT_INFO, TERMS, { name: "Privacy Policy", path: "/patient-information/terms/privacy/" }],
  label: "Privacy policy",
  hero: {
    h1: "Website Privacy Policy",
    intro:
      "Radiant Smiles @ Floral Vale is committed to protecting the privacy of visitors to www.radiant-smiles.com. This policy explains what information the website collects, how it is used and the choices you have. If you have questions, please call us at (215) 860-4600.",
    dated: "**Effective date:** October 2026",
  },
  sections: [
    {
      id: "this-policy-and-your-dental-records",
      h2: "This Policy & Your Dental Records",
      icon: "shield",
      blocks: [
        {
          callout:
            "This policy covers this website only. Your dental and health records at our office are protected under HIPAA and described in our separate [Notice of Privacy Practices](/hipaa-notice-of-privacy-practices/).",
          tone: "help",
          icon: "shield",
        },
      ],
    },
    {
      id: "information-we-collect",
      h2: "Information We Collect",
      icon: "clipboard",
      blocks: [
        { p: "When you use a form on this website, such as an appointment request or contact form, we may collect:" },
        {
          cards: [
            "your name",
            "contact information, including your email address and phone number",
            "your preferred appointment day or time and a short message",
          ],
          icons: ["user", "phone", "calendar"],
        },
        {
          p: '**Please keep any description of your dental problem brief** (for example, "broken tooth" or "pain"). We\'ll discuss the details by phone or at your visit.',
        },
      ],
    },
    {
      id: "how-we-use-your-information",
      h2: "How We Use Your Information",
      icon: "chat",
      blocks: [
        {
          p: "We use the information you submit to contact you about scheduling an appointment or to answer your dental questions. We may also use it for internal record keeping and to improve our website and services.",
        },
        { p: "We will never sell your information." },
      ],
    },
    {
      id: "how-we-protect-your-information",
      h2: "How We Protect Your Information",
      icon: "shield",
      blocks: [
        {
          p: "We are committed to keeping your information secure. To prevent unauthorized access or disclosure, we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online. This website uses HTTPS, so information you send through our forms travels over an encrypted connection. Our forms are for appointment requests and general questions only; please don't send detailed health information, insurance ID numbers or payment details through them.",
        },
      ],
    },
    {
      id: "log-files-cookies-and-analytics",
      h2: "Log Files, Cookies & Analytics",
      icon: "layers",
      blocks: [
        {
          p: "Like most websites, this site uses log files and cookies. Log files can record information such as your IP address, browser type, date and time of your visit, and the pages you view. A cookie is a small file placed on your device that helps a website recognize your browser and understand which pages are used.",
        },
        {
          p: "We use traffic log cookies to identify which pages are being used. This helps us improve the website. We use this information for statistical analysis only. This website uses Google Analytics 4 and Google Tag Manager to understand how the site is used, and Google Ads conversion tracking to see which ads lead to calls or appointment requests. Information you type into our forms is not sent to these tools.",
        },
        {
          p: "You can choose to accept or decline cookies. Most web browsers accept cookies automatically, but you can usually change your browser settings to decline them. This may stop you from using some parts of the website.",
        },
      ],
    },
    {
      id: "calls-and-text-messages",
      h2: "Calls & Text Messages",
      icon: "phone",
      blocks: [
        {
          p: "We use phone numbers from calls to (215) 860-4600 and from our website forms only to arrange appointments and provide your dental care. We may call, text or email you about your appointments. You can reply STOP to any text message to opt out of texts. We don't send marketing text messages.",
        },
      ],
    },
    {
      id: "your-choices",
      h2: "Your Choices",
      icon: "check",
      blocks: [
        {
          cards: [
            "**Opting out:** you can ask us to stop sending you marketing or promotional messages at any time.",
            "**Correcting your information:** if you believe any information we hold about you from this website is incorrect or incomplete, contact us and we will promptly correct it.",
            "**Asking what we hold:** you may ask for details of the personal information we hold about you from this website. Please make your request in writing, and we will reply within 30 days.",
          ],
          icons: ["bell", "refresh", "search"],
        },
        { p: "To make any of these requests, write to us at the office address below or use the contact form on our [contact page](/contact-us/)." },
      ],
    },
    {
      id: "childrens-privacy",
      h2: "Children's Privacy",
      icon: "users",
      blocks: [
        {
          p: "This website is not directed at children under 13, and we do not knowingly collect personal information from them through the website. Parents and guardians can book appointments for children by phone or through the appointment form.",
        },
      ],
    },
    {
      id: "links-to-other-websites",
      h2: "Links to Other Websites",
      icon: "arrowUpRight",
      blocks: [
        {
          p: "This website may link to other websites, such as CareCredit or insurance providers. Once you leave our site, we are not responsible for the protection and privacy of any information you provide on those sites. Please read their privacy policies.",
        },
      ],
    },
    {
      id: "changes-to-this-policy",
      h2: "Changes to This Policy",
      icon: "refresh",
      blocks: [{ p: "We may update this policy from time to time. The effective date at the top of this page shows when it last changed." }],
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
