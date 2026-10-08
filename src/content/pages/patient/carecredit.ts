import type { LinkItem } from "../home";
import { napCtaLine, type ClosingCta, type FaqBlock, type PageHeroContent, type PageMeta } from "../shared";
import { piCrumbs } from "./common";

/**
 * CareCredit Financing. Verbatim from 02 Patient Info/01 Info/CareCredit Financing/02 Content.md
 * No APR figures (handoff). The disclosure list stays in full wherever the 6-month
 * promotion is mentioned. No CareCredit logo (only official artwork may be used).
 */

export const CARECREDIT_APPLY = "https://www.carecredit.com/apply/";
export const CARECREDIT_TERMS = "https://www.carecredit.com/cardholderagreement/";

export const ccMeta: PageMeta = {
  path: "/patient-information/carecredit/",
  title: "Dental Financing in Yardley, PA | CareCredit",
  description:
    "Dental financing in Yardley, PA: spread the cost of implants, Invisalign and more with CareCredit at Radiant Smiles @ Floral Vale. Subject to approval.",
};

export const ccCrumbs = piCrumbs("CareCredit Financing", ccMeta.path);

export const ccHero: PageHeroContent = {
  h1: "Dental Financing in Yardley With CareCredit",
  intro:
    "Radiant Smiles @ Floral Vale offers dental financing in Yardley through CareCredit, a health and wellness credit card. Instead of paying the full cost at once, you can spread it over monthly payments. You can see whether you prequalify with no impact to your credit score, and approval is decided by CareCredit.",
  buttons: [{ label: "Apply on CareCredit's Website", href: CARECREDIT_APPLY, external: true, track: "click_carecredit_apply" }, "call"],
};

export const ccHow = {
  title: "How Dental Financing in Yardley Works With CareCredit",
  intro:
    "CareCredit works like a credit card that you use for health care, including your treatment at our Yardley office. On qualifying purchases of $200 or more, there's no interest if you pay the full amount within 6 months.",
  termsIntro: "Read the terms before you use it:",
  terms: [
    {
      icon: "clock",
      lead: "Deferred interest.",
      text: "If the promotional balance isn't paid in full within the promotional period, interest is charged from the purchase date.",
    },
    { icon: "calendarCheck", lead: "Minimum monthly payments", text: "are required during the promotional period." },
    { icon: "shield", lead: "Subject to credit approval.", text: "CareCredit decides who is approved and on what terms." },
  ],
  after:
    "CareCredit sets its own rates and terms, and they can change. We don't publish interest rates on this page, so please read CareCredit's current cardholder terms before you apply.",
  termsLink: { label: "CareCredit cardholder agreement & current rates", href: CARECREDIT_TERMS },
};

export const ccFinance = {
  title: "What You Can Finance",
  intro:
    "You can use CareCredit for dental treatment at our office, including larger plans that are easier to manage over time:",
  items: [
    {
      icon: "implant",
      link: { label: "Dental implants", href: "/restorative-dentistry/dental-implants/" } as LinkItem,
      text: ": our current offer takes $500 off an implant, abutment and crown (regular price $3,500).",
    },
    {
      icon: "aligner",
      link: { label: "Invisalign clear aligners", href: "/cosmetic-dentistry/invisalign/" } as LinkItem,
      text: ": $1,000 off (regular price $5,800).",
    },
    { icon: "tooth", text: "Crowns, bridges, dentures, root canals and other restorative care." },
    { icon: "veneer", text: "Cosmetic care such as porcelain veneers and teeth whitening." },
  ],
  after:
    "Both the implant and Invisalign offers include a free consultation and second opinion, so you can get a clear price before deciding how to pay.",
};

export const ccApply = {
  title: "How to Apply for CareCredit",
  steps: [
    { icon: "clipboard", lead: "Get your treatment plan.", text: "We explain what you need and what it costs before any treatment begins." },
    {
      icon: "search",
      lead: "Prequalify or apply.",
      text: "Use CareCredit's website, which shows whether you prequalify with no impact to your credit score.",
    },
    { icon: "card", lead: "Pay at your visit.", text: "If you're approved, use your CareCredit card when payment is due, at the time of service." },
    {
      icon: "calendarCheck",
      lead: "Make your monthly payments",
      text: "directly to CareCredit, and plan to clear any promotional balance before the period ends.",
    },
  ],
  after: "Questions about using CareCredit at our office? Call (215) 860-4600.",
};

export const ccOther = {
  title: "A Dentist That Takes Payment Plans: Other Ways to Pay",
  intro: "CareCredit is one option. Depending on your situation, these may suit you better:",
  items: [
    { icon: "shield", lead: "PPO insurance:", text: "we accept many PPO plans. Call to check yours." },
    {
      icon: "badgeDollar",
      lead: "In-office membership plan:",
      text: "$150 a year for two cleanings, exams and X-rays, plus 15% off dental treatment.",
    },
    { icon: "banknote", lead: "Pay at the visit:", text: "cash, check, Visa, MasterCard, Discover or American Express." },
  ],
  link: { label: "Insurance & payment options", href: "/patient-information/insurance-payment-options/" },
};

export const ccFaqs: FaqBlock = {
  title: "CareCredit FAQs",
  items: [
    {
      question: "Does Radiant Smiles @ Floral Vale accept CareCredit?",
      answer:
        "Yes. Radiant Smiles @ Floral Vale in Yardley, PA accepts CareCredit for dental treatment. On qualifying purchases of $200 or more, there's no interest if you pay in full within 6 months. Approval and terms are set by CareCredit, not by our office.",
    },
    {
      question: "Will checking if I prequalify affect my credit score?",
      answer:
        "No. CareCredit lets you see whether you prequalify with no impact to your credit score. Prequalifying is not the same as approval: if you go on to apply, CareCredit reviews your application and decides whether to approve it and on what terms.",
    },
    {
      question: "What happens if I don't pay off the balance within 6 months?",
      answer:
        "Interest is charged from the original purchase date, not from the end of the promotion. That's how deferred interest works. To avoid it, pay the full promotional balance before the period ends, and check CareCredit's current terms for the rates that would apply.",
    },
    {
      question: "Can I use CareCredit together with my dental insurance?",
      answer:
        "Yes. CareCredit is one of the payment methods we accept, so you can use it for the part of your bill that your insurance doesn't cover. Payment is due at the time of service, and we explain the cost before treatment begins.",
    },
  ],
};

export const ccCta: ClosingCta = {
  title: "Plan Your Treatment & Your Budget",
  text: napCtaLine,
  buttons: ["appointment", "call"],
};
