import type { ClosingCta, FaqBlock, PageHeroContent, PageMeta } from "../shared";
import { pcCrumbs, withNap, type CostBlock } from "./common";

/**
 * Deep Teeth Cleaning. Verbatim from 03 General Dentistry/03 Gum Health/Deep Teeth Cleaning/02 Content.md
 * (no prices; never "periodontist" or "gum specialist": handoff)
 */

export const dcMeta: PageMeta = {
  path: "/preventative-care/deep-teeth-cleaning/",
  title: "Deep Cleaning in Yardley, PA | Scaling & Root Planing",
  description:
    "Deep cleaning (scaling and root planing) in Yardley, PA removes tartar below the gumline to treat gum disease and protect your teeth. (215) 860-4600.",
};

export const dcCrumbs = pcCrumbs("Deep Teeth Cleaning", dcMeta.path);

export const dcHero: PageHeroContent = {
  h1: "Deep Cleaning in Yardley, PA: Scaling & Root Planing",
  intro:
    "A deep cleaning, also called scaling and root planing, removes plaque and tartar from below the gumline and smooths the root surfaces so your gums can heal. At Radiant Smiles @ Floral Vale, a deep cleaning in Yardley is the usual first step in treating gum disease, even in more advanced cases, before any surgery is considered.",
  buttons: ["appointment", "call"],
};

/** Schema: MedicalProcedure description (handoff 3a) */
export const dcProcedureDescription =
  "A deep cleaning, also called scaling and root planing, removes plaque and tartar from below the gumline and smooths the root surfaces so your gums can heal.";

export const dcVersus = {
  title: "Deep Cleaning vs. Regular Cleaning",
  intro:
    "A regular cleaning treats the teeth above and just at the gumline, while a deep cleaning goes below it. Once gum disease starts, plaque and tartar collect in the pockets between your gums and teeth, where a regular cleaning can't reach.",
  head: ["", "Regular cleaning", "Deep cleaning"],
  rows: [
    ["Who it's for", "Healthy gums", "Gum disease, or tartar below the gumline"],
    ["Where it cleans", "Tooth surfaces above and at the gumline", "Below the gumline, down to the roots"],
    ["Root smoothing", "No", "Yes, the root surfaces are planed smooth"],
    ["Numbing", "Not usually", "Local anesthetic may be used"],
    ["Follow-up", "Next checkup", "Pocket recheck, then periodontal maintenance"],
  ],
};

export const dcSigns = {
  title: "Signs You Need a Deep Cleaning",
  intro:
    "The dentist recommends a deep cleaning based on your gum measurements and X-rays, not on looks alone. Signs that point to gum disease include:",
  items: [
    { icon: "ruler", text: "Gum pockets deeper than 3 mm when the dentist measures them" },
    { icon: "drop", text: "Gums that bleed when you brush or floss" },
    { icon: "alert", text: "Red, swollen or tender gums" },
    { icon: "wave", text: "Bad breath that doesn't go away" },
    { icon: "tooth", text: "Gums pulling away from your teeth" },
    { icon: "xray", text: "Tartar below the gumline on your X-rays" },
  ],
  after:
    "Gum disease is an infection that destroys the support around your teeth. Plaque is the main cause, and smoking, diabetes, stress, grinding, some medications and poor nutrition raise the risk.",
};

export const dcHow = {
  title: "How Deep Cleaning in Yardley Works",
  intro: "A deep cleaning follows a set order, and the dentist explains each step before starting.",
  steps: [
    { icon: "search", lead: "Exam:", text: "the dentist checks your gums and may take X-rays." },
    { icon: "ruler", lead: "Measure:", text: "your gums, tartar and the depth of each pocket are assessed." },
    { icon: "drop", lead: "Numb:", text: "local anesthesia may be applied so you stay comfortable." },
    {
      icon: "wave",
      lead: "Scaling:",
      text: "an ultrasonic scaler removes tartar and bacteria from below the gumline. Irrigation can also deliver an antimicrobial rinse into the pockets.",
    },
    {
      icon: "layers",
      lead: "Root planing:",
      text: "the root surfaces are smoothed so bacteria have less to cling to and your gums can heal against the tooth.",
    },
    {
      icon: "pill",
      lead: "Antibiotic, if needed:",
      text: "for deeper pockets, the dentist may place [Arestin](/preventative-care/arestin/), an antibiotic, directly into the pocket.",
    },
  ],
  after: "Depending on how much of your mouth needs treatment, the dentist may suggest splitting it into more than one visit.",
};

export const dcComfort = {
  title: "Staying Comfortable",
  text: "The area can be numbed with local anesthetic, so you'll usually feel pressure and vibration rather than sharp discomfort. If you're nervous, tell us before we start. You're welcome to bring headphones and listen to music, and you can ask about sedation options.",
};

export const dcNecessary = {
  title: "Is Deep Cleaning Necessary?",
  intro:
    "If you have gum disease, yes. Without treatment, the infection keeps destroying the gum and bone that hold your teeth in place. A deep cleaning helps:",
  items: [
    "Stop gum disease from getting worse",
    "Protect against tooth loss",
    "Reduce bad breath caused by bacteria under the gums",
    "Remove surface stains along with the tartar",
  ],
  after:
    "If your gums are healthy, you don't need one, and the dentist won't recommend it. Ask to see your pocket measurements and X-rays if you'd like to understand why.",
};

export const dcCost: CostBlock = {
  title: "Deep Cleaning Teeth Cost & Insurance",
  paragraphs: [
    "The cost of a deep cleaning depends on how many areas of your mouth need treatment and whether an antibiotic is placed. You'll know the cost before any treatment begins.",
  ],
  items: [
    {
      lead: "Insurance:",
      text: "many dental plans cover deep cleanings. Coverage depends on your plan. We accept many PPO plans. [Insurance and payment](/patient-information/insurance-payment-options/)",
    },
    { lead: "Membership plan:", text: "$150 a year, with 15% off dental treatment." },
    { lead: "Financing:", text: "CareCredit, subject to credit approval. [CareCredit financing](/patient-information/carecredit/)" },
  ],
};

export const dcAfter = {
  title: "Aftercare & What Comes Next",
  stages: [
    {
      icon: "heart",
      name: "Tender for a short time",
      text: "Your gums may feel tender for a short time after a deep cleaning. Brush gently, floss carefully and follow the instructions the dentist gives you.",
    },
    {
      icon: "ruler",
      name: "Pocket recheck",
      text: "At a follow-up visit, the dentist rechecks your pocket depths to see how your gums have healed. After that, you'll usually move to [periodontal maintenance](/preventative-care/periodontal-maintenance/) visits instead of regular cleanings, to keep the infection under control.",
    },
    {
      icon: "bolt",
      name: "If some pockets don't respond",
      text: "If some pockets don't respond, the dentist may talk with you about [laser gum therapy](/preventative-care/gum-disease-laser-therapy/) or other [periodontal services](/restorative-dentistry/periodontal-services/). Surgery is kept to cases where it's truly needed.",
    },
  ],
};

export const dcFaqs: FaqBlock = {
  title: "Deep Cleaning FAQs",
  items: [
    {
      question: "Is deep cleaning necessary?",
      answer:
        "If you have gum disease, yes. A deep cleaning removes the plaque and tartar below the gumline that are causing the infection, which helps stop gum disease from getting worse and protects against tooth loss. If your gums are healthy, the dentist at Radiant Smiles @ Floral Vale won't recommend one.",
    },
    {
      question: "Does a deep cleaning hurt?",
      answer:
        "With the area numbed by local anesthetic, you'll usually feel pressure and vibration rather than sharp discomfort. Your gums may feel tender for a short time afterwards. If you're anxious, tell us before we start and ask about sedation options.",
    },
    {
      question: "How is a deep cleaning different from a regular cleaning?",
      answer:
        "A regular cleaning removes plaque and tartar from your teeth above and at the gumline, for healthy gums. A deep cleaning, or scaling and root planing, cleans below the gumline down to the roots and smooths the root surfaces so gums affected by gum disease can heal.",
    },
    {
      question: "How much does a deep cleaning cost?",
      answer:
        "The cost depends on how many areas of your mouth need treatment and whether an antibiotic is placed in any pockets. You'll know the cost before treatment begins. Many dental plans cover deep cleanings, members of our in-office plan get 15% off, and CareCredit financing is available, subject to credit approval.",
    },
    {
      question: "What happens after a deep cleaning?",
      answer:
        "The dentist rechecks your gum pockets at a follow-up visit to see how they've healed. You'll usually then switch to periodontal maintenance visits, which are more thorough than regular cleanings and help keep gum disease under control over the long term.",
    },
  ],
};

export const dcCta: ClosingCta = {
  title: "Book a Gum Health Exam in Yardley",
  text: withNap("If your gums bleed or feel sore, request an appointment online or call and we'll check them."),
  buttons: ["appointment", "call"],
};
