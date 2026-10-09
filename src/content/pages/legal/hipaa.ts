import type { LegalPage } from "./common";

/**
 * Verbatim from 09 Compliance/01 Legal/HIPAA Notice of Privacy Practices/02 Content.md.
 * Handoff: the header statement stays bold directly under the H1; the full notice is in the
 * HTML with nothing collapsed; the only CTA is the call button at the end.
 */
export const hipaa: LegalPage = {
  meta: {
    path: "/hipaa-notice-of-privacy-practices/",
    title: "HIPAA Notice of Privacy Practices | Radiant Smiles",
    description:
      "How Radiant Smiles @ Floral Vale in Yardley, PA may use and share your health information, your privacy rights, and how to file a complaint.",
  },
  crumbs: [
    { name: "Home", path: "/" },
    { name: "HIPAA Notice of Privacy Practices", path: "/hipaa-notice-of-privacy-practices/" },
  ],
  label: "Notice of privacy practices",
  hero: {
    h1: "HIPAA Notice of Privacy Practices",
    intro:
      "**This notice describes how medical information about you may be used and disclosed and how you can get access to this information. Please review it carefully.**",
    more: [
      "This HIPAA Notice of Privacy Practices applies to Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067. It explains how we handle your dental and health information, the rights you have over it, and our duties to protect it. If you have questions, call our privacy officer at (215) 860-4600.",
    ],
    dated: "**Effective date:** October 2026",
  },
  sections: [
    {
      id: "your-rights",
      h2: "Your Rights",
      icon: "user",
      blocks: [
        {
          p: "You have the right to see and get a copy of your dental and health records, and several other rights described below. To use any of these rights, contact our privacy officer (details below).",
        },
        {
          rights: [
            {
              h3: "Get a copy of your records",
              icon: "clipboard",
              text: "You can ask to see or get a copy of your dental records and other health information we hold about you, on paper or electronically. We will give you a copy or a summary, usually within 30 days of your request. We may charge a reasonable, cost-based fee. You can ask at our front desk or send us a written request by mail, and we will tell you about any fee before we prepare your copy.",
            },
            {
              h3: "Ask us to correct your records",
              icon: "refresh",
              text: "If you think information in your records is wrong or incomplete, you can ask us to correct it. We may say no, but we will explain why in writing within 60 days.",
            },
            {
              h3: "Ask for confidential communications",
              icon: "phone",
              text: "You can ask us to contact you in a particular way, for example on your mobile phone only, or to send mail to a different address. We will agree to all reasonable requests.",
            },
            {
              h3: "Ask us to limit what we use or share",
              icon: "ban",
              text: "You can ask us not to use or share certain health information for treatment, payment or our operations. We are not required to agree, and we may say no if it would affect your care. If you pay for a service or item in full out of pocket, you can ask us not to share that information with your health insurer for payment or operations purposes. We will agree unless the law requires us to share it.",
            },
            {
              h3: "Get a list of those we have shared information with",
              icon: "layers",
              text: "You can ask for a list (an accounting) of the times we have shared your health information in the six years before your request, who we shared it with and why. The list will not include disclosures for treatment, payment or operations, or ones you asked us to make. We provide one list a year free of charge, and may charge a reasonable, cost-based fee for another within 12 months.",
            },
            {
              h3: "Get a copy of this notice",
              icon: "book",
              text: "You can ask for a paper copy of this notice at any time, even if you agreed to receive it electronically.",
            },
            {
              h3: "Choose someone to act for you",
              icon: "users",
              text: "If you have given someone medical power of attorney, or someone is your legal guardian, that person can use your rights and make choices about your health information. We will check that they have this authority before we act.",
            },
            {
              h3: "File a complaint if you feel your rights are violated",
              icon: "alert",
              text: 'You can complain to us or to the U.S. Department of Health and Human Services. See "How to File a Complaint" below. We will not retaliate against you for filing a complaint.',
            },
          ],
        },
      ],
    },
    {
      id: "our-uses-and-disclosures",
      h2: "Our Uses & Disclosures",
      icon: "layers",
      blocks: [
        { p: "We use and share your health information mainly to treat you, to get paid for your care and to run our practice." },
        {
          cards: [
            "**Treatment:** we use your information to provide your care and share it with other professionals treating you. Example: we send X-rays to a specialist you are referred to.",
            "**Payment:** we use and share your information to bill and get paid by health plans or other payers. Example: we give your dental insurer details of a filling so it can pay the claim.",
            "**Running our practice:** we use your information to manage the practice, improve care and contact you when needed. Example: we use your phone number to remind you of an appointment by call, text or email.",
          ],
          icons: ["tooth", "card", "calendarCheck"],
        },
        { h3: "Other ways we may share your information" },
        {
          p: "We are allowed or required to share your information in other ways, usually for purposes that benefit public health or safety, and only when we meet the conditions set by law:",
        },
        {
          ul: [
            "helping with public health and safety issues, such as reporting suspected abuse, neglect or domestic violence, reporting adverse reactions to medicines, and preventing a serious threat to anyone's health or safety",
            "doing research, under strict conditions",
            "complying with the law, including when the Department of Health and Human Services asks to check that we are following federal privacy law",
            "responding to organ and tissue donation requests, and working with a medical examiner or funeral director",
            "handling workers' compensation claims, law enforcement purposes, health oversight activities and special government functions such as military or national security",
            "responding to a court or administrative order, or a subpoena",
          ],
        },
        {
          p: "Pennsylvania law may give your information extra protection in some cases. Where it does, we follow the stricter rule.",
        },
      ],
    },
    {
      id: "your-choices",
      h2: "Your Choices",
      icon: "check",
      blocks: [
        { p: "For some health information, you can tell us your choices about what we share." },
        {
          panel: {
            title: "**You can tell us whether we may:**",
            ul: [
              "share information with your family, close friends or others involved in your care or paying for your care",
              "share information in a disaster relief situation",
            ],
            tone: "allow",
          },
        },
        {
          p: "If you are not able to tell us your preference, for example if you are unconscious, we may share your information if we believe it is in your best interest. We may also share information when needed to lessen a serious and imminent threat to health or safety.",
        },
        {
          panel: {
            title: "**We never share your information in these cases unless you give us written permission:**",
            ul: ["marketing purposes", "sale of your information"],
            tone: "never",
          },
        },
        {
          p: "**Fundraising:** We do not use your information for fundraising.",
        },
        {
          p: "**Marketing:** We do not use your information for marketing without your written permission.",
        },
      ],
    },
    {
      id: "our-responsibilities",
      h2: "Our Responsibilities",
      icon: "shield",
      blocks: [
        {
          ul: [
            "We are required by law to keep your protected health information private and secure.",
            "We will let you know promptly if a breach occurs that may have compromised the privacy or security of your information.",
            "We must follow the duties and privacy practices described in this notice and give you a copy of it.",
            "We will not use or share your information other than as described here unless you tell us in writing that we can. If you give us permission, you can change your mind at any time by letting us know in writing.",
          ],
        },
      ],
    },
    {
      id: "changes-to-the-terms-of-this-notice",
      h2: "Changes to the Terms of This Notice",
      icon: "refresh",
      blocks: [
        {
          p: "We can change the terms of this notice, and the changes will apply to all the information we have about you. The new notice will be available on request, in our office and on this website.",
        },
      ],
    },
    {
      id: "contact-our-privacy-officer",
      h2: "Contact Our Privacy Officer",
      icon: "user",
      blocks: [
        { p: "For questions about this notice or to use any of your rights, contact:" },
        {
          address: [
            "Privacy Officer",
            "Radiant Smiles @ Floral Vale",
            "117 Floral Vale Boulevard, Yardley, PA 19067",
            "(215) 860-4600",
          ],
        },
      ],
    },
    {
      id: "how-to-file-a-complaint",
      h2: "How to File a Complaint",
      icon: "alert",
      blocks: [
        {
          p: "If you believe your privacy rights have been violated, you can file a complaint with us or with the federal government. We will not retaliate against you for filing a complaint.",
        },
        {
          cards: [
            "**With us:** contact our privacy officer at the address or phone number above. We accept complaints by phone, in person or in writing.",
            "**With the U.S. Department of Health and Human Services Office for Civil Rights:** file online through the [OCR complaint portal](https://www.hhs.gov/hipaa/filing-a-complaint/index.html), or write to Centralized Case Management Operations, U.S. Department of Health and Human Services, 200 Independence Avenue, S.W., Room 509F HHH Bldg., Washington, D.C. 20201, or call 1-877-696-6775. Complaints should be filed within 180 days of when you knew of the problem; OCR may extend this for good cause.",
          ],
          icons: ["home", "case"],
        },
      ],
    },
  ],
};

/** Hero button (handoff): the approved notice as a PDF, matching the page word for word */
export const hipaaPdf = {
  label: "Download a printable copy (PDF)",
  href: "/downloads/radiant-smiles-notice-of-privacy-practices.pdf",
};

/** [FINAL CTA]: the only call to action on the page */
export const hipaaCall = {
  text: "Questions about your records or this notice? Call our privacy officer at (215) 860-4600.",
  button: "Call (215) 860-4600",
  nap: "Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067 · (215) 860-4600",
};
