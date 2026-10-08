import type { ClosingCta, FaqBlock, PageHeroContent, PageMeta } from "../shared";
import { pcCrumbs, withNap } from "./common";

/**
 * Oral Hygiene. Verbatim from 03 General Dentistry/02 Preventive Care/Oral Hygiene/02 Content.md
 * (informational: no offer banner, only the hero and final CTAs: handoff)
 */

export const ohMeta: PageMeta = {
  path: "/preventative-care/oral-hygiene/",
  title: "Oral Hygiene in Yardley, PA: Brushing & Flossing Tips",
  description:
    "Oral hygiene tips from our Yardley, PA dentists: how to brush, floss and choose products, plus the eating habits that protect your teeth and gums.",
};

export const ohCrumbs = pcCrumbs("Oral Hygiene", ohMeta.path);

export const ohHero: PageHeroContent = {
  h1: "Oral Hygiene in Yardley: Tips From Your Dentist",
  intro:
    "Good oral hygiene comes down to three daily habits: brush twice a day, floss once a day and limit sugary and acidic foods. These oral hygiene tips from Radiant Smiles @ Floral Vale in Yardley show you how to brush and floss properly, which products help, and how to keep your teeth and gums healthy between cleanings.",
  buttons: ["appointment", "call"],
};

export const ohBrush = {
  title: "How to Brush Your Teeth Properly",
  intro: "Brush twice a day with a soft toothbrush and a fluoride toothpaste. Technique matters more than pressure.",
  steps: [
    { stroke: "angle", lead: "Angle the brush:", text: "hold it at 45 degrees to the place where your teeth meet your gums." },
    { stroke: "circles", lead: "Outer surfaces:", text: "use small, gentle, circular strokes, a few teeth at a time." },
    { stroke: "updown", lead: "Inside of the front teeth:", text: "tilt the brush upright and use gentle up-and-down strokes." },
    { stroke: "backforth", lead: "Chewing surfaces:", text: "use short, gentle back-and-forth strokes." },
    { stroke: "rinse", lead: "Finish:", text: "rinse well to remove loosened plaque." },
  ],
  after:
    "Scrubbing hard doesn't clean better. It can wear your gums and enamel. If your bristles splay out quickly, you're pressing too hard.",
};

export const ohFloss = {
  title: "How to Floss",
  intro: "Flossing cleans between your teeth and under the gumline, where your toothbrush can't reach. Floss once a day.",
  steps: [
    "Take about 18 inches of floss. Waxed floss slides in more easily.",
    "Wind most of it around your middle fingers, leaving a few inches to work with.",
    "Ease the floss between two teeth with a gentle back-and-forth motion. Don't snap it into the gums.",
    "Curve it into a C-shape against one tooth at the gumline.",
    "Move it up and down the side of the tooth, then repeat on the neighboring tooth.",
    "Use a clean section of floss for each space.",
  ],
  after:
    "If you're new to flossing, your gums may bleed or feel sore for the first week. That usually settles as your gums get healthier. If bleeding keeps happening, mention it at your next visit.",
};

export const ohProducts = {
  title: "Products That Help",
  intro: "You don't need a cabinet full of products. These are the ones worth asking about:",
  items: [
    {
      icon: "bolt",
      lead: "Electric toothbrush:",
      text: "many people find it easier to clean well with one, especially if brushing by hand is hard.",
    },
    {
      icon: "brush",
      lead: "Fluoride toothpaste:",
      text: "helps strengthen enamel every time you brush. Ask us how much toothpaste to use for young children.",
    },
    { icon: "drop", lead: "Anti-plaque rinse:", text: "look for one with the American Dental Association Seal of Acceptance." },
    { icon: "pill", lead: "Fluoride tablets or extra rinses:", text: "ask the dentist whether they make sense for you." },
  ],
  after: "At your checkup, ask about any extra cleaning aids for your mouth, such as for bridges, implants or tight spaces.",
};

export const ohDiet = {
  title: "Diet & Your Teeth",
  intro:
    "What you eat, and how often, matters too. Each time you eat or drink something sugary, bacteria in plaque make acid that attacks your enamel.",
  items: [
    { icon: "cup", text: "Cut back on sugary and acidic foods and drinks." },
    { icon: "clock", text: "Keep snacks to set times rather than grazing all day." },
    { icon: "calendar", text: "Have sweets with a meal instead of on their own." },
    { icon: "ban", text: "Avoid sticky foods that cling to your teeth." },
    { icon: "leaf", text: "Choose nutritious snacks such as vegetables and cheese." },
  ],
  after:
    "For tips on children's snacks and habits, see our [children's dentistry](/preventative-care/child-dentistry/) page.",
};

export const ohBetween = {
  title: "Oral Hygiene in Yardley: Help Between Visits",
  text: "Even the most careful brushing and flossing can't remove tartar once plaque hardens. That's why a professional cleaning twice a year matters. At each [cleaning and checkup](/preventative-care/teeth-cleaning-and-check-ups/), your hygienist removes tartar, checks your gums and shows you any spots you tend to miss.",
  listIntro: "Call us before your next visit if you notice:",
  items: [
    "Gums that bleed often when you brush or floss",
    "Gums that look red, puffy or are pulling away from your teeth",
    "Bad breath that doesn't go away",
    "A tooth that is sensitive or sore",
  ],
  after: "These can be early signs of gum disease or decay, which are easier to treat early.",
};

export const ohFaqs: FaqBlock = {
  title: "Oral Hygiene FAQs",
  items: [
    {
      question: "How often should I brush and floss?",
      answer:
        "Brush twice a day and floss once a day. Use a soft toothbrush and a fluoride toothpaste, and brush gently at a 45-degree angle to the gumline. Pair that routine with a professional cleaning and checkup twice a year to remove the tartar that brushing can't.",
    },
    {
      question: "Is it normal for my gums to bleed when I floss?",
      answer:
        "It can be normal for the first week after you start flossing, while your gums get used to it. If your gums still bleed after that, or bleed when you brush, it can be an early sign of gum disease. Mention it to the dentist at Radiant Smiles @ Floral Vale so your gums can be checked.",
    },
    {
      question: "Is an electric toothbrush better than a manual one?",
      answer:
        "Either can clean well if you use the right technique. Many people find an electric toothbrush makes it easier to reach every surface, especially if they have limited hand movement. Ask the dentist or hygienist at your next checkup which option suits your mouth.",
    },
  ],
};

export const ohCta: ClosingCta = {
  title: "Book Your Next Cleaning",
  text: withNap("Request an appointment online, or call and we'll find a time that works."),
  buttons: ["appointment", "call"],
};
