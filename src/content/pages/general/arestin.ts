import type { ClosingCta, FaqBlock, PageHeroContent, PageMeta } from "../shared";
import { pcCrumbs, withNap, type CostBlock } from "./common";

/**
 * Arestin. Verbatim from 03 General Dentistry/03 Gum Health/Arestin/02 Content.md
 * ("Arestin®" on first mention in the hero only; no doses, no study claims; MSKCC linked: handoff)
 */

export const arMeta: PageMeta = {
  path: "/preventative-care/arestin/",
  title: "Arestin in Yardley, PA | Antibiotic Gum Treatment",
  description:
    "Arestin in Yardley, PA: an antibiotic placed directly into infected gum pockets after a deep cleaning to help treat gum disease. (215) 860-4600.",
};

export const arCrumbs = pcCrumbs("Arestin", arMeta.path);

export const arHero: PageHeroContent = {
  h1: "Arestin in Yardley, PA: Antibiotic Gum Treatment",
  intro:
    "Arestin® is an antibiotic made of tiny minocycline microspheres that the dentist places directly into infected gum pockets after a deep cleaning. At Radiant Smiles @ Floral Vale, Arestin in Yardley is used alongside scaling and root planing to help kill the bacteria that cause gum disease, right where the infection is.",
  buttons: ["appointment", "call"],
};

/** Schema: MedicalTherapy description (handoff 3a) */
export const arTherapyDescription =
  "Arestin® is an antibiotic made of tiny minocycline microspheres that the dentist places directly into infected gum pockets after a deep cleaning.";

export const arWhat = {
  title: "What Arestin Is",
  paragraphs: [
    "Arestin is the brand name for minocycline hydrochloride microspheres, an antibiotic that kills the bacteria behind gum disease infections. Instead of a pill you swallow, the medicine is placed straight into the pockets between your gums and teeth, where the bacteria live.",
    "That's why it's often described as an antibiotic in the gum pocket. The microspheres stay in the pocket and release the antibiotic there, so the medicine works on the infected area itself.",
  ],
};

export const arWhen = {
  title: "When Arestin Treatment Is Used",
  text: "Arestin treatment is used after a [deep teeth cleaning](/preventative-care/deep-teeth-cleaning/), also called scaling and root planing. The deep cleaning removes tartar and bacteria from below the gumline. Arestin is then placed in pockets that are deep or infected, to help fight the bacteria that remain.",
  listIntro: "The dentist may recommend Arestin if:",
  items: ["You have gum disease with deep gum pockets", "Some pockets are still deep after a deep cleaning"],
  after: "It isn't a replacement for a deep cleaning. It works together with one.",
};

export const arExpect = {
  title: "What to Expect",
  intro: "Getting Arestin is a short added step at the end of your deep cleaning.",
  steps: [
    { icon: "toothClean", lead: "Deep cleaning:", text: "the dentist cleans below the gumline and smooths the root surfaces." },
    { icon: "drop", lead: "Placement:", text: "Arestin is placed directly into each affected pocket." },
    { icon: "clipboard", lead: "Aftercare:", text: "you go home with instructions for the treated areas." },
    { icon: "ruler", lead: "Follow-up:", text: "at a later visit, the dentist rechecks your pocket depths to see how your gums are healing." },
  ],
  after: "There's no pill to swallow: the medicine goes straight to the infected pockets.",
  care: {
    title: "Aftercare tips",
    text: "According to [Memorial Sloan Kettering Cancer Center's patient information](https://www.mskcc.org/cancer-care/patient-education/medications/adult/minocycline-hydrochloride-periodontal-microspheres) on this medicine, you should avoid chewing hard, crunchy or sticky foods with the treated teeth for 1 week after treatment, and avoid touching the treated area. Follow the dentist's instructions on when to brush and floss near the treated teeth.",
  },
};

export const arWho = {
  title: "Who Shouldn't Have Arestin",
  intro: "Arestin isn't right for everyone. Tell the dentist before treatment if you:",
  items: [
    { icon: "alert", text: "Are allergic to minocycline or any other medicine" },
    { icon: "heart", text: "Are pregnant, or might be, because the medicine may harm an unborn baby" },
    {
      icon: "smile",
      text: "Are asking about treatment for a child: it's not usually used in children younger than 8, because it can discolor developing teeth",
    },
  ],
  after: "Also tell the dentist about any other medicines you take.",
};

export const arCost: CostBlock = {
  title: "Cost & Insurance",
  paragraphs: ["Your cost depends on how many pockets need treatment. You'll know the cost before it's placed."],
  items: [
    {
      lead: "Insurance:",
      text: "some dental plans cover Arestin, and others don't. Coverage depends on your plan. We accept many PPO plans. [Insurance and payment](/patient-information/insurance-payment-options/)",
    },
    { lead: "Membership plan:", text: "$150 a year, with 15% off dental treatment." },
    { lead: "Financing:", text: "CareCredit, subject to credit approval." },
  ],
};

export const arFaqs: FaqBlock = {
  title: "Arestin FAQs",
  items: [
    {
      question: "What is Arestin?",
      answer:
        "Arestin is an antibiotic made of minocycline hydrochloride microspheres. After a deep cleaning, the dentist at Radiant Smiles @ Floral Vale places it directly into infected gum pockets, where it helps kill the bacteria that cause gum disease. It works on the infected area itself instead of being swallowed as a pill.",
    },
    {
      question: "Does Arestin treatment hurt?",
      answer:
        "Arestin is placed at the end of a deep cleaning, when the area may already be numbed with local anesthetic. The medicine is placed directly into the gum pocket, so there's no pill to swallow. If you're anxious about your deep cleaning, ask about sedation options before you start.",
    },
    {
      question: "What should I avoid after Arestin?",
      answer:
        "Avoid chewing hard, crunchy or sticky foods, such as carrots, taffy and gum, with the treated teeth for 1 week, and don't touch the treated area. Follow the dentist's instructions on when to brush and floss near the treated teeth, so the medicine can stay in place and work.",
    },
    {
      question: "Is Arestin covered by insurance?",
      answer:
        "It depends on your dental plan. Some plans cover Arestin and others don't, and your cost depends on how many pockets are treated. Radiant Smiles @ Floral Vale accepts many PPO plans, so call (215) 860-4600 and we'll check your coverage before treatment.",
    },
  ],
};

export const arCta: ClosingCta = {
  title: "Ask About Arestin in Yardley",
  text: withNap(
    "If you've been told you have gum disease, request an appointment online or call to talk through your treatment options.",
  ),
  buttons: ["appointment", "call"],
};
