import { napCtaLine, type ClosingCta, type FaqBlock, type PageHeroContent, type PageMeta } from "../shared";
import { piCrumbs } from "./common";

/**
 * Insurance & Payment. Verbatim from 02 Patient Info/01 Info/Insurance & Payment/02 Content.md
 * The plan list itself comes from site.ts (insurancePlans: the same 42 names, same spelling).
 * Wording rule: "accept", never "in-network".
 */

export const insMeta: PageMeta = {
  path: "/patient-information/insurance-payment-options/",
  title: "Yardley Dentist That Accepts PPO | Insurance & Payment",
  description:
    "Radiant Smiles @ Floral Vale is a Yardley dentist that accepts PPO insurance, with 40+ dental plans, a $150 membership plan and CareCredit financing.",
};

export const insCrumbs = piCrumbs("Insurance & Payment", insMeta.path);

export const insHero: PageHeroContent = {
  h1: "Insurance & Payment at a Yardley Dentist That Accepts PPO Plans",
  intro:
    "Radiant Smiles @ Floral Vale is a Yardley dentist that accepts more than 40 dental plans, including many PPO plans. No insurance? Our in-office membership plan costs $150 a year. You can pay by cash, check, major credit card or CareCredit, and payment is due at the time of service.",
  buttons: [{ label: "Call to Check Your Coverage", href: "tel:+12158604600" }, "appointment"],
};

export const insPlans = {
  title: "PPO Dental Insurance Plans We Accept",
  intro:
    "We accept more than 40 dental plans. Most are PPO plans; the list also includes some dental discount plans and union health and welfare funds:",
  after:
    "What your plan pays depends on its terms, so call (215) 860-4600 with your member details before your visit and we'll help you check. Patients who live or work in New Jersey will see familiar names on the list, such as Horizon Blue Cross.",
};

export const insBenefits = {
  title: "Use Your Benefits Before Your Coverage Expires",
  text: "Dental benefits are often tied to a plan year. If you have treatment planned, check when your benefits renew and book in time to use what your plan offers before your coverage expires. We can help you plan visits around those dates.",
};

export const insMembership = {
  title: "No Insurance? Our In-Office Membership Plan",
  intro: "Our in-office membership plan covers routine care for one yearly fee, with savings on other treatment:",
  head: ["What you get", "Price"],
  rows: [
    ["Yearly membership: 2 cleanings, exams and X-rays", "$150 a year"],
    ["Each additional family member", "$75 a year"],
    ["Additional cleanings or periodontal maintenance", "$75 each"],
    ["Emergency exam with X-ray", "$65 per visit"],
    ["All other dental treatment", "15% off"],
  ],
  after: "New to the practice without insurance? Start with the $89 New Patient Visit Special: a cleaning, X-rays and an exam.",
  link: { label: "See current special offers", href: "/special-offers/" },
};

export const insPayment = {
  title: "Payment Options",
  text: "We accept cash, check, Visa, MasterCard, Discover, American Express and CareCredit. Payment is due at the time of service, and you'll know the cost of your treatment before it begins.",
};

export const insCareCredit = {
  title: "CareCredit Financing",
  text: "CareCredit lets you spread the cost of treatment over time, with no interest on qualifying purchases of $200 or more when you pay the full amount within 6 months. Approval is decided by CareCredit.",
  link: { label: "How CareCredit financing works", href: "/patient-information/carecredit/" },
};

export const insFaqs: FaqBlock = {
  title: "Questions About Cost",
  items: [
    {
      question: "Do you accept my dental insurance?",
      answer:
        "Radiant Smiles @ Floral Vale accepts many PPO plans, including Aetna, Cigna PPO, Delta Dental, Guardian, Horizon Blue Cross, MetLife and UnitedHealthcare. What your plan covers depends on its terms, so call (215) 860-4600 with your member details and our team will help you check before your visit.",
    },
    {
      question: "Does insurance cover dental implants?",
      answer:
        "It depends on your plan. Some PPO plans pay toward part of an implant and others don't, so we check your benefits before treatment. Our current offer takes $500 off an implant, abutment and crown (regular price $3,500), and CareCredit can spread the remaining cost.",
    },
    {
      question: "Does insurance cover crowns?",
      answer:
        "It depends on your plan. Crown coverage varies with your plan's terms and how much of your yearly benefit you've already used. Call us with your member details and we'll help you understand your coverage before your crown appointment, so the cost isn't a surprise.",
    },
    {
      question: "What if I don't have dental insurance?",
      answer:
        "You can join our in-office membership plan for $150 a year, plus $75 for each additional family member. It includes two cleanings, exams and X-rays, an emergency exam with X-ray for $65 and 15% off all other dental treatment. CareCredit financing is available too.",
    },
    {
      question: "When is payment due?",
      answer:
        "Payment is due at the time of service. We accept cash, check, Visa, MasterCard, Discover, American Express and CareCredit. We explain the cost of your treatment before any work begins, so you can choose how to pay, whether that's insurance, membership savings or CareCredit financing.",
    },
  ],
};

export const insCta: ClosingCta = {
  title: "Book With a Yardley Dentist That Accepts PPO Plans",
  text: napCtaLine,
  buttons: ["call", "appointment"],
};
