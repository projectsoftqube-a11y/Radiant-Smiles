import type { ClosingCta, FaqBlock, PageHeroContent, PageMeta } from "../shared";
import { pcCrumbs, withNap, type Point } from "./common";

/** Teeth Cleaning & Check-ups. Verbatim from 03 General Dentistry/02 Preventive Care/Teeth Cleaning & Check-ups/02 Content.md */

export const tcMeta: PageMeta = {
  path: "/preventative-care/teeth-cleaning-and-check-ups/",
  title: "Dental Cleaning in Yardley, PA | Checkups & X-Rays",
  description:
    "Dental cleaning, exams and digital X-rays in Yardley, PA. No insurance? Your first visit is $89, with cleaning, X-rays and exam. (215) 860-4600.",
};

export const tcCrumbs = pcCrumbs("Teeth Cleaning & Checkups", tcMeta.path);

export const tcHero: PageHeroContent = {
  h1: "Dental Cleaning in Yardley, PA: Checkups, Exams & X-Rays",
  intro:
    "A dental cleaning in Yardley at Radiant Smiles @ Floral Vale includes an exam of your teeth and gums, an oral cancer screening, digital X-rays when you're due, and a professional cleaning that removes the plaque and tartar brushing misses. A regular visit takes about an hour. Before anything else happens, we explain what we found and what it costs.",
  buttons: ["appointment", "call"],
};

export const tcHeroPoints: Point[] = [
  { lead: "No insurance?", text: "Your first visit (cleaning, X-rays and exam) is $89." },
  { lead: "Insured?", text: "Many plans cover two cleanings a year. We accept many PPO plans." },
  { lead: "Weekdays full?", text: "We're open Saturdays from 8 am to 2 pm." },
];

/** Schema: MedicalProcedure description (handoff 3a) */
export const tcProcedureDescription =
  "A dental cleaning in Yardley at Radiant Smiles @ Floral Vale includes an exam of your teeth and gums, an oral cancer screening, digital X-rays when you're due, and a professional cleaning that removes the plaque and tartar brushing misses.";

export const tcCheckup = {
  title: "What Happens at a Checkup",
  intro:
    "Your checkup is a full look at your teeth, gums and mouth, followed by a cleaning. A regular visit takes about an hour. A new patient visit usually takes a little longer, because the dentist is getting to know your mouth for the first time.",
  listIntro: "At your first dental exam in Yardley, we:",
  steps: [
    { icon: "clipboard", text: "Review your dental and medical history." },
    { icon: "xray", text: "Take digital X-rays, or use X-rays from another office if they were taken in the past 12 months." },
    { icon: "search", text: "Screen for oral cancer and other problems in the soft tissues of your mouth." },
    { icon: "tooth", text: "Check each tooth for decay." },
    { icon: "ruler", text: "Check your gums and measure the small pockets between your gums and teeth." },
    { icon: "toothClean", text: "Clean your teeth and remove plaque and tartar." },
    { icon: "brush", text: "Go over brushing and flossing, with tips for any areas you tend to miss." },
  ],
  after:
    "Before anything else happens, we explain what we found and what any treatment would cost. There's no pressure to decide that day.",
  quote: { text: "Everyone was professional, welcoming, and attentive throughout my visit.", author: "Avni D., May 2026" },
};

export const tcCleaning = {
  title: "Professional Cleaning",
  paragraphs: [
    "A professional cleaning removes two things: plaque, the soft, sticky film that forms on teeth every day, and tartar, which is plaque that has hardened. Once plaque hardens into tartar, your toothbrush can't remove it.",
    "Your hygienist cleans every surface of each tooth, including between the teeth and along the gumline, where gum disease starts. The cleaning finishes with a polish using prophy paste, which leaves your teeth smooth and shiny.",
  ],
  listIntro: "Regular cleanings help you:",
  list: [
    "Keep your gums and the bone that supports your teeth healthier",
    "Keep your own teeth for longer",
    "Find problems early, including signs of oral cancer",
  ],
};

export const tcXrays = {
  title: "Digital Dental X-Rays",
  paragraphs: [
    "Digital dental X-rays show what the eye can't: decay between teeth, problems under old fillings, and the bone around your roots. The image appears on screen in seconds, so the dentist can show you exactly what they see.",
    "Digital X-rays use a fraction of the radiation of older film X-rays. You won't need them at every visit. The dentist decides how often based on your history and risk.",
  ],
};

export const tcScreening = {
  title: "Oral Cancer Screening",
  text: "Every checkup at Radiant Smiles @ Floral Vale includes an oral cancer screening. The dentist looks for sores and red or white patches, and feels the tissues of your mouth, neck and throat for lumps. It takes a few minutes and is part of your exam. [More about oral cancer screening](/preventative-care/oral-cancer-screening/)",
};

export const tcNotEnough = {
  title: "When a Regular Cleaning Isn't Enough",
  intro:
    "A regular cleaning is meant for healthy gums. If your gum measurements or X-rays show gum disease or heavy buildup, the dentist may recommend a different type of cleaning:",
  items: [
    { lead: "Full mouth debridement:", text: "removes heavy tartar so the dentist can complete a full exam." },
    {
      lead: "[Deep teeth cleaning](/preventative-care/deep-teeth-cleaning/) (scaling and root planing):",
      text: "cleans below the gumline to treat gum disease.",
    },
    {
      lead: "[Periodontal maintenance](/preventative-care/periodontal-maintenance/):",
      text: "ongoing cleanings for patients with a history of gum disease.",
    },
  ],
  after: "The dentist will explain why before recommending any of these.",
};

export const tcOften = {
  title: "How Often to Come In",
  paragraphs: [
    "We recommend a cleaning and checkup twice a year for most patients. That's often enough to remove tartar before it irritates your gums and to catch decay while a small filling can fix it. If you've had gum disease or get cavities often, the dentist may suggest more frequent visits.",
    "Between visits, brush twice a day, floss once a day and cut back on sugary and acidic foods and drinks. Our [oral hygiene tips](/preventative-care/oral-hygiene/) show you how.",
  ],
};

export const tcCost = {
  title: "Teeth Cleaning Cost & Insurance",
  intro: "Your cost depends on whether you have insurance and what your visit includes. Here's how it works at our Yardley office:",
  head: ["Your situation", "What you pay"],
  rows: [
    ["New patient without insurance", "$89 for a cleaning, X-rays and exam. [See special offers](/special-offers/)"],
    [
      "Membership plan member",
      "$150 a year covers 2 cleanings, exams and X-rays. Each additional family member is $75. Members also get 15% off dental treatment.",
    ],
    ["PPO insurance", "Many plans cover two cleanings a year. Coverage depends on your plan."],
  ],
  items: [
    {
      lead: "Insurance:",
      text: "we accept many PPO plans, including Aetna, Blue Cross Blue Shield, Cigna PPO, Delta Dental, GEHA, Humana and MetLife. Call (215) 860-4600 to check your plan. [Insurance and payment](/patient-information/insurance-payment-options/)",
    },
    { lead: "Financing:", text: "CareCredit is available for treatment, subject to credit approval." },
  ] satisfies Point[],
  after: "Payment is due at the time of service.",
};

export const tcFaqs: FaqBlock = {
  title: "Dental Cleaning & Checkup FAQs",
  items: [
    {
      question: "How often should you get your teeth cleaned?",
      answer:
        "Most people should have their teeth cleaned twice a year. That routine removes tartar before it irritates the gums and lets the dentist catch decay early. If you have gum disease or get cavities often, your dentist may recommend cleanings more often than every six months.",
    },
    {
      question: "How long does a dental cleaning take?",
      answer:
        "A regular dental cleaning and checkup at Radiant Smiles @ Floral Vale takes about an hour. A new patient visit usually takes a little longer, because it includes a full history, X-rays and a complete exam of your teeth and gums before your cleaning.",
    },
    {
      question: "Are dental X-rays safe?",
      answer:
        "Yes. Dental X-rays use a very low dose of radiation, and digital X-rays use a fraction of the radiation of older film X-rays. The dentist only takes them when they're needed, based on your history and risk, and the images appear on screen in seconds so you can see them too.",
    },
    {
      question: "How much is a teeth cleaning without insurance?",
      answer:
        "New patients without insurance pay $89 for a cleaning, X-rays and an exam at Radiant Smiles @ Floral Vale. After that, our in-office membership plan is $150 a year and covers 2 cleanings, exams and X-rays, plus 15% off any dental treatment you need.",
    },
    {
      question: "Does insurance cover dental cleanings?",
      answer:
        "Most dental insurance plans cover cleanings, and many cover two visits a year. Exactly what's covered depends on your plan. We accept many PPO plans, so call (215) 860-4600 with your insurance details and we'll check your coverage before your appointment.",
    },
  ],
};

export const tcCta: ClosingCta = {
  title: "Book Your Dental Cleaning in Yardley",
  text: withNap("Request an appointment online, or call and we'll find a time that works."),
  buttons: ["appointment", "call"],
};
