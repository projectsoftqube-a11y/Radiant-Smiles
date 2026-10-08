import type { ClosingCta, FaqBlock, PageHeroContent, PageMeta } from "../shared";
import { pcCrumbs, withNap, type CostBlock } from "./common";

/**
 * Night Guards. Verbatim from 03 General Dentistry/06 Protection/Night Guards/02 Content.md
 * (no prices; TMJ only as a possible cause of jaw pain: handoff)
 */

export const ngMeta: PageMeta = {
  path: "/preventative-care/professional-night-guards/",
  title: "Custom Night Guards in Yardley, PA | Teeth Grinding",
  description:
    "Custom night guards in Yardley, PA protect your teeth from grinding and clenching. Lab-made from an impression of your teeth. Call (215) 860-4600.",
};

export const ngCrumbs = pcCrumbs("Night Guards", ngMeta.path);

export const ngHero: PageHeroContent = {
  h1: "Custom Night Guards in Yardley, PA",
  intro:
    "A custom night guard is a thin, lab-made mouthguard you wear while you sleep to protect your teeth from grinding and clenching. At Radiant Smiles @ Floral Vale, each night guard in Yardley is made from an impression of your own teeth, so it fits more closely than a one-size guard from the store.",
  buttons: ["appointment", "call"],
};

/** Schema: Service description (handoff 3a) */
export const ngServiceDescription =
  "A custom night guard is a thin, lab-made mouthguard you wear while you sleep to protect your teeth from grinding and clenching.";

export const ngSigns = {
  title: "Signs You Grind Your Teeth",
  intro:
    "Many people who grind their teeth at night don't know they do it. The dental name for it is bruxism: clenching or grinding your teeth, often while you sleep. Common signs include:",
  items: [
    { icon: "alarm", text: "Waking up with a sore jaw or tight jaw muscles" },
    { icon: "sun", text: "Morning headaches" },
    { icon: "moon", text: "Broken sleep, or a partner who hears you grinding" },
    { icon: "tooth", text: "Teeth that look flat, worn, chipped or cracked" },
    { icon: "drop", text: "Teeth that have become sensitive" },
    { icon: "alert", text: "Fillings or crowns that break more often than they should" },
  ],
  paragraphs: [
    "Jaw pain can also be linked to problems with the jaw joint (TMJ). If you have jaw pain, the dentist will check your teeth and bite and talk with you about what may be causing it.",
    "Over time, grinding can wear teeth down and damage them. A night guard takes that force instead of your teeth. It's one part of the [preventive dental care](/preventative-care/) we offer to keep small problems from becoming big ones.",
  ],
};

export const ngCompare = {
  title: "Custom vs. Store-Bought Night Guards",
  intro: "There are three main types of night guard, and they fit very differently.",
  head: ["", "Over-the-counter", "Boil-and-bite", "Custom lab-made"],
  rows: [
    ["How it's made", "One size fits all", "Softened in hot water, then bitten into", "Made in a dental lab from an impression of your teeth"],
    ["Fit", "Loose and bulky", "Better, but can be uneven", "Shaped to your teeth for the closest fit"],
    ["Comfort for nightly wear", "Often hard to sleep in", "Varies", "Designed to be worn every night"],
    ["Checked by a dentist", "No", "No", "Yes"],
  ],
  after: "A guard that doesn't fit well is easy to stop wearing. A custom night guard is made to fit your mouth, which makes it easier to wear every night.",
};

export const ngMake = {
  title: "How We Make Your Night Guard in Yardley",
  intro: "Getting a custom night guard usually takes two visits, with lab work in between.",
  steps: [
    {
      icon: "search",
      tag: "Visit 1",
      lead: "Exam and impression:",
      text: "the dentist checks your teeth, jaw and bite for signs of grinding, then takes an impression of your teeth.",
    },
    { icon: "flask", tag: "Dental lab", lead: "Lab work:", text: "the impression goes to a dental lab, where your guard is made to match your teeth." },
    {
      icon: "check",
      tag: "Visit 2",
      lead: "Fitting:",
      text: "when your guard is ready, you come back to try it on. The dentist checks the fit and your bite and makes any adjustments.",
    },
  ],
  after: "You'll leave knowing how to put it in, take it out and clean it.",
};

export const ngWork = {
  title: "A Night Guard for Teeth Grinding Protects Your Dental Work",
  paragraphs: [
    "A night guard for teeth grinding protects more than your natural teeth. Grinding puts heavy force on fillings, crowns, bridges and implants. Wearing a guard helps protect that dental work, so it isn't worn down or broken by grinding.",
    "If grinding has already damaged a tooth, the dentist may recommend repairing it first, for example with a [dental crown](/restorative-dentistry/dental-crowns/).",
  ],
};

export const ngCare = {
  title: "Caring for Your Night Guard",
  intro: "A little daily care keeps your guard clean and helps it last.",
  items: [
    { icon: "drop", text: "Rinse or gently brush it after each use." },
    { icon: "case", text: "Let it dry, then keep it in its case." },
    { icon: "thermo", text: "Keep it away from heat, such as hot water or a sunny car, which can warp it." },
    { icon: "paw", text: "Keep it away from pets." },
    { icon: "calendarCheck", text: "Bring it to your checkups so the dentist can check the fit and wear." },
  ],
  after: "If your guard cracks, feels loose or starts to rub, call us to have it checked.",
};

export const ngCost: CostBlock = {
  title: "Custom Night Guard Cost",
  paragraphs: ["The dentist will tell you the cost of your custom night guard before your impression is taken, so there are no surprises."],
  items: [
    {
      lead: "Insurance:",
      text: "some dental plans cover night guards, and others don't. Coverage depends on your plan. We accept many PPO plans. [Insurance and payment](/patient-information/insurance-payment-options/)",
    },
    { lead: "Membership plan:", text: "$150 a year, with 15% off dental treatment." },
    { lead: "Financing:", text: "CareCredit, subject to credit approval." },
  ],
};

export const ngFaqs: FaqBlock = {
  title: "Night Guard FAQs",
  items: [
    {
      question: "Do I need a night guard?",
      answer:
        "You may need a night guard if you wake up with jaw pain or headaches, your teeth look worn or chipped, or someone hears you grinding at night. The dentist at Radiant Smiles @ Floral Vale can check your teeth for signs of grinding and tell you whether a custom guard would help.",
    },
    {
      question: "Is a custom night guard better than a store-bought one?",
      answer:
        "A custom night guard fits more closely, because it's made in a dental lab from an impression of your teeth. Store-bought guards are one-size or boil-and-bite, so they're often bulkier and looser. A guard that fits well is easier to wear every night, which is when it protects you.",
    },
    {
      question: "How long does it take to get a custom night guard?",
      answer:
        "It usually takes two visits. At the first, the dentist checks your teeth and takes an impression. The impression goes to a dental lab, where your guard is made. At the second visit, you try on the guard and the dentist checks the fit and makes any adjustments.",
    },
    {
      question: "How do I clean my night guard?",
      answer:
        "Rinse or gently brush your night guard after each use, let it dry and keep it in its case. Keep it away from heat, such as hot water or a car in the sun, because heat can warp it. Bring it to your checkups so the dentist can check its fit.",
    },
  ],
};

export const ngCta: ClosingCta = {
  title: "Protect Your Teeth While You Sleep",
  text: withNap("If you wake up with jaw pain or worn teeth, request an appointment online or call to have your teeth checked."),
  buttons: ["appointment", "call"],
};
