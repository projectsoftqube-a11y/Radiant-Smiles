import type { ClosingCta, FaqBlock, PageHeroContent, PageMeta } from "../shared";
import { pcCrumbs, withNap, type CostBlock } from "./common";

/**
 * Gum Disease Laser Therapy. Verbatim from 03 General Dentistry/03 Gum Health/Gum Disease Laser Therapy/02 Content.md
 * (no laser brand or model; no prices; never "periodontist": handoff)
 */

export const lzMeta: PageMeta = {
  path: "/preventative-care/gum-disease-laser-therapy/",
  title: "Laser Gum Treatment in Yardley, PA | Radiant Smiles",
  description:
    "Laser gum treatment in Yardley, PA: a dental laser removes infected gum tissue, often with little bleeding or swelling. Call (215) 860-4600.",
};

export const lzCrumbs = pcCrumbs("Gum Disease Laser Therapy", lzMeta.path);

export const lzHero: PageHeroContent = {
  h1: "Laser Gum Treatment in Yardley, PA",
  intro:
    "Laser gum treatment uses a focused dental laser to remove infected gum tissue and clean the area around your teeth, without a scalpel or drill. At Radiant Smiles @ Floral Vale, laser gum treatment in Yardley is one of the ways Dr. Urvishkumar Bhalala and Dr. Jaspreet Gadria treat gum disease, often with little bleeding or swelling.",
  buttons: ["appointment", "call"],
};

/** Schema: MedicalProcedure description (handoff 3a) */
export const lzProcedureDescription =
  "Laser gum treatment uses a focused dental laser to remove infected gum tissue and clean the area around your teeth, without a scalpel or drill.";

export const lzHow = {
  title: "How Laser Gum Therapy Works",
  intro:
    "Laser gum therapy works by directing a beam of laser light at diseased gum tissue. The laser removes the infected tissue and helps disinfect the treated area, leaving healthy tissue in place so your gums can heal.",
  steps: [
    { icon: "ruler", lead: "Exam and measurements:", text: "the dentist checks your gums, measures your gum pockets and reviews your X-rays." },
    { icon: "drop", lead: "Comfort:", text: "the area is numbed. Often a light anesthetic spray is enough." },
    { icon: "bolt", lead: "Laser treatment:", text: "the laser removes diseased gum tissue from the affected areas." },
    { icon: "heart", lead: "Healing:", text: "your gums begin to heal around the cleaned teeth." },
    {
      icon: "calendarCheck",
      lead: "Follow-up:",
      text: "the dentist rechecks your gums and sets up [periodontal maintenance](/preventative-care/periodontal-maintenance/) visits.",
    },
  ],
  after:
    "The dentist decides whether laser therapy, a [deep cleaning](/preventative-care/deep-teeth-cleaning/) or both are right for your gums.",
};

export const lzBenefits = {
  title: "Benefits of Laser Gum Disease Treatment",
  intro: "Laser gum disease treatment often means:",
  items: [
    { icon: "drop", lead: "Little bleeding:", text: "there's often little or no bleeding during treatment." },
    { icon: "wave", lead: "Minimal swelling:", text: "many patients have little swelling afterwards." },
    { icon: "headphones", lead: "No drill noise or vibration:", text: "helpful if those sounds make you anxious." },
    { icon: "toothClean", lead: "Lighter numbing:", text: "often only a light anesthetic spray is needed." },
    { icon: "clock", lead: "Quick recovery:", text: "many patients get back to their usual routine soon after." },
    { icon: "shield", lead: "A cleaner treatment area:", text: "the laser light helps disinfect the area it treats." },
  ],
  after: "Results depend on how advanced your gum disease is and how well you care for your gums afterwards.",
};

export const lzCandidate = {
  title: "Who Is a Candidate",
  intro: "You may be a candidate for laser gum treatment if the dentist finds gum disease at your exam. Signs include:",
  items: [
    "Gum pockets deeper than 3 mm",
    "Gums that bleed, look red or feel tender",
    "Bad breath that doesn't go away",
    "Gums pulling away from your teeth",
  ],
  frenectomy:
    "The dental laser is also used for other soft-tissue procedures, such as a frenectomy, which releases a tight band of tissue under the tongue or lip.",
  after:
    "Not everyone needs laser treatment. Early gum disease often responds to a deep cleaning alone. The dentist will explain your options, and why, before recommending anything. For more advanced cases, see our [periodontal services](/restorative-dentistry/periodontal-services/).",
};

export const lzRecovery = {
  title: "Recovery",
  intro: "Recovery after laser gum treatment is usually quick. Your gums may feel tender for a short time.",
  items: [
    { icon: "clipboard", text: "Follow the aftercare instructions the dentist gives you." },
    { icon: "brush", text: "Brush gently around the treated area." },
    { icon: "calendarCheck", text: "Keep your follow-up visits so the dentist can check how your gums are healing." },
    { icon: "shield", text: "Stay on your periodontal maintenance schedule to keep gum disease under control." },
  ],
};

export const lzCost: CostBlock = {
  title: "Cost & Insurance",
  paragraphs: ["The cost of laser gum treatment depends on how many areas need treatment. You'll know the cost before treatment starts."],
  items: [
    {
      lead: "Insurance:",
      text: "coverage for gum disease treatment depends on your plan. We accept many PPO plans. [Insurance and payment](/patient-information/insurance-payment-options/)",
    },
    { lead: "Membership plan:", text: "$150 a year, with 15% off dental treatment." },
    { lead: "Financing:", text: "CareCredit, subject to credit approval. [CareCredit financing](/patient-information/carecredit/)" },
  ],
};

export const lzFaqs: FaqBlock = {
  title: "Laser Gum Treatment FAQs",
  items: [
    {
      question: "Does laser gum treatment hurt?",
      answer:
        "Laser gum treatment is usually comfortable, because the area is numbed first, and often a light anesthetic spray is all that's needed. There's no drill noise or vibration. Your gums may feel tender for a short time afterwards. If you're anxious, tell us before we start and ask about sedation options.",
    },
    {
      question: "How is laser gum treatment different from a deep cleaning?",
      answer:
        "A deep cleaning removes tartar and bacteria from below the gumline and smooths the root surfaces. Laser gum treatment uses a dental laser to remove infected gum tissue and help disinfect the area. The dentist at Radiant Smiles @ Floral Vale may recommend one or both, depending on your gums.",
    },
    {
      question: "How long does recovery take after laser gum treatment?",
      answer:
        "Recovery is usually quick, and many patients get back to their usual routine soon after. Your gums may feel tender for a short time. Brush gently, follow your aftercare instructions and keep your follow-up visits so the dentist can check your healing.",
    },
    {
      question: "Is laser gum treatment covered by insurance?",
      answer:
        "Coverage depends on your dental plan. Many plans cover some treatment for gum disease, but what they pay varies. Radiant Smiles @ Floral Vale accepts many PPO plans, so call (215) 860-4600 and we'll check your coverage and explain the cost before treatment starts.",
    },
  ],
};

export const lzCta: ClosingCta = {
  title: "Ask About Laser Gum Treatment in Yardley",
  text: withNap(
    "If your gums bleed, feel tender or are pulling back, request an appointment online or call to have them checked.",
  ),
  buttons: ["appointment", "call"],
};
