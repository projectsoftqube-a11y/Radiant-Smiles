import type { ClosingCta, FaqBlock, PageHeroContent, PageMeta } from "../shared";
import { pcCrumbs, withNap, type CostBlock } from "./common";

/**
 * Periodontal Maintenance. Verbatim from 03 General Dentistry/03 Gum Health/Periodontal Maintenance/02 Content.md
 * ("membership plan" next to every $75; never "periodontist": handoff)
 */

export const pmMeta: PageMeta = {
  path: "/preventative-care/periodontal-maintenance/",
  title: "Periodontal Maintenance in Yardley, PA | Radiant Smiles",
  description:
    "Periodontal maintenance in Yardley, PA: gum cleanings that keep gum disease in check after a deep cleaning. Members pay $75 per additional visit.",
};

export const pmCrumbs = pcCrumbs("Periodontal Maintenance", pmMeta.path);

export const pmHero: PageHeroContent = {
  h1: "Periodontal Maintenance in Yardley, PA",
  intro:
    "Periodontal maintenance is a deeper, ongoing cleaning for people who have been treated for gum disease. It cleans below the gumline, checks your gum pockets and keeps the infection under control. At Radiant Smiles @ Floral Vale, periodontal maintenance in Yardley usually follows a deep cleaning and replaces your regular twice-a-year cleanings.",
  buttons: ["appointment", "call"],
};

/** Schema: MedicalProcedure description (handoff 3a) */
export const pmProcedureDescription =
  "Periodontal maintenance is a deeper, ongoing cleaning for people who have been treated for gum disease.";

export const pmWhat = {
  title: "What Periodontal Maintenance Is",
  paragraphs: [
    "Periodontal maintenance, often called perio maintenance, is an ongoing cleaning designed for gums that have had gum disease. It goes further than a regular cleaning, because it reaches into the pockets below the gumline where bacteria collect.",
    "Periodontal disease is a gum infection that destroys the support around your teeth. A [deep cleaning](/preventative-care/deep-teeth-cleaning/) treats the active infection. Perio maintenance visits come afterwards, to keep the bacteria from building back up in those pockets.",
  ],
  head: ["", "Regular cleaning", "Periodontal maintenance"],
  rows: [
    ["Who it's for", "Healthy gums", "People treated for gum disease"],
    ["Cleans", "Above and at the gumline", "Above and below the gumline, into the pockets"],
    ["Gum measurements", "Checked at your exam", "Tracked closely at each visit"],
    ["How often", "Usually twice a year", "Set by the dentist for your gums"],
  ],
};

export const pmWho = {
  title: "Who Needs Periodontal Maintenance",
  intro:
    "You'll usually need periodontal maintenance if you've had a deep cleaning (scaling and root planing) or other treatment for gum disease. It's also recommended for patients with a history of gum disease, even if it was treated years ago.",
  listIntro: "Your risk of gum disease is higher if you:",
  items: [
    { icon: "ban", text: "Smoke" },
    { icon: "drop", text: "Have diabetes" },
    { icon: "wave", text: "Are under a lot of stress" },
    { icon: "moon", text: "Clench or grind your teeth" },
    { icon: "pill", text: "Take medications that affect your gums or saliva" },
    { icon: "apple", text: "Have a poor diet" },
  ],
  after: "Plaque is the main cause, so the better you clean at home, the more your maintenance visits can do.",
};

export const pmVisit = {
  title: "What Happens at a Visit",
  intro: "Each periodontal maintenance visit includes a cleaning and a careful check of your gums.",
  steps: [
    { icon: "ruler", lead: "Measure:", text: "the depth of your gum pockets is checked and compared with last time." },
    { icon: "search", lead: "Check:", text: "your gums, teeth and any problem areas are examined, with X-rays when needed." },
    { icon: "toothClean", lead: "Clean:", text: "plaque and tartar are removed from above and below the gumline." },
    { icon: "calendarCheck", lead: "Plan:", text: "the dentist tells you how your gums are doing and when to come back." },
  ],
  after:
    "If a pocket starts to deepen, the dentist may suggest extra treatment, such as [Arestin](/preventative-care/arestin/), an antibiotic placed in the pocket, or other [periodontal services](/restorative-dentistry/periodontal-services/).",
};

export const pmOften = {
  title: "How Often You'll Need Periodontal Maintenance",
  paragraphs: [
    "The dentist sets how often you come in based on your pocket measurements and how your gums respond. For many people with a history of gum disease, the interval is shorter than the six months between regular cleanings.",
    "As your gums stay stable, the dentist will review the schedule with you. If your measurements improve or worsen, the interval can change.",
  ],
};

export const pmCost: CostBlock = {
  title: "Periodontal Maintenance in Yardley: Cost & Insurance",
  paragraphs: ["Periodontal maintenance has a set price for membership plan members."],
  items: [
    {
      lead: "Membership plan:",
      text: "$150 a year covers 2 cleanings, exams and X-rays. Additional cleanings or periodontal maintenance visits are $75 each, and members get 15% off dental treatment.",
    },
    {
      lead: "Insurance:",
      text: "many dental plans cover periodontal maintenance, though how often they pay for it varies. Coverage depends on your plan. We accept many PPO plans. [Insurance and payment](/patient-information/insurance-payment-options/)",
    },
    { lead: "Financing:", text: "CareCredit, subject to credit approval." },
  ],
  after: ["Call (215) 860-4600 and we'll check your coverage before your visit."],
};

export const pmProtect = {
  title: "Protecting Your Gums Between Visits",
  intro: "What you do at home decides how well your maintenance visits work.",
  items: [
    { icon: "brush", text: "Brush twice a day with a soft brush, angled toward the gumline." },
    { icon: "floss", text: "Clean between your teeth once a day." },
    { icon: "ban", text: "Avoid smoking, which raises your risk of gum disease." },
    { icon: "alert", text: "Tell the dentist if you notice bleeding, swelling or a loose tooth." },
  ],
  link: { label: "More oral hygiene tips", href: "/preventative-care/oral-hygiene/" },
};

export const pmFaqs: FaqBlock = {
  title: "Periodontal Maintenance FAQs",
  items: [
    {
      question: "What is periodontal maintenance?",
      answer:
        "Periodontal maintenance is an ongoing cleaning for people who have been treated for gum disease. It removes plaque and tartar from above and below the gumline, checks the depth of your gum pockets and keeps the infection under control. It usually replaces regular cleanings after a deep cleaning.",
    },
    {
      question: "How often do I need periodontal maintenance?",
      answer:
        "The dentist sets the interval based on your gum measurements and how your gums respond to treatment. For many people with a history of gum disease, visits are more frequent than the twice-a-year schedule for regular cleanings. The schedule is reviewed as your gums change.",
    },
    {
      question: "How much does periodontal maintenance cost?",
      answer:
        "For members of the Radiant Smiles @ Floral Vale in-office membership plan, each additional periodontal maintenance visit is $75. The plan itself is $150 a year and includes 2 cleanings, exams and X-rays. With insurance, coverage depends on your plan, so call (215) 860-4600 to check.",
    },
    {
      question: "Can I go back to regular cleanings?",
      answer:
        "Usually not. Once you've had gum disease, the pockets below your gumline need deeper cleaning than a regular visit gives. The dentist will review your gum measurements at each visit and talk with you about the right type of cleaning and how often you should come in.",
    },
  ],
};

export const pmCta: ClosingCta = {
  title: "Keep Your Gums Healthy",
  text: withNap("Request an appointment online, or call to schedule your next periodontal maintenance visit."),
  buttons: ["appointment", "call"],
};
