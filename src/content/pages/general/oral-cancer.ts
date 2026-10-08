import type { ClosingCta, FaqBlock, PageHeroContent, PageMeta } from "../shared";
import { pcCrumbs, withNap } from "./common";

/**
 * Oral Cancer Screening. Verbatim from 03 General Dentistry/02 Preventive Care/Oral Cancer Screening/02 Content.md
 * (no images of lesions, no incidence figures; NIDCR linked: handoff)
 */

export const ocMeta: PageMeta = {
  path: "/preventative-care/oral-cancer-screening/",
  title: "Oral Cancer Screening in Yardley, PA | Radiant Smiles",
  description:
    "An oral cancer screening is part of every checkup at Radiant Smiles @ Floral Vale in Yardley, PA. See what we check and the warning signs to watch.",
};

export const ocCrumbs = pcCrumbs("Oral Cancer Screening", ocMeta.path);

export const ocHero: PageHeroContent = {
  h1: "Oral Cancer Screening in Yardley, PA",
  intro:
    "An oral cancer screening is a quick check of your mouth, neck and throat for sores, patches or lumps that could be an early sign of cancer. At Radiant Smiles @ Floral Vale, an oral cancer screening in Yardley is part of every checkup, so you don't need to book it separately or ask for it.",
  buttons: ["appointment", "call"],
};

/** Schema: MedicalProcedure description (handoff 3a) */
export const ocProcedureDescription =
  "An oral cancer screening is a quick check of your mouth, neck and throat for sores, patches or lumps that could be an early sign of cancer.";

export const ocWhy = {
  title: "Why Oral Cancer Screening Matters",
  paragraphs: [
    "Screening matters because early changes in the mouth are often easy to miss on your own and easier to treat when they're found early. Oral cancer is cancer of the mouth area, also called the oral cavity. It can affect the lips, cheeks, tongue, floor of the mouth, hard and soft palate, sinuses and throat.",
    "Your dentist sees your mouth up close at every visit. That makes a regular checkup one of the simplest places to spot a change early.",
  ],
};

export const ocCheck = {
  title: "What We Check",
  intro: "The screening takes a few minutes during your regular exam. The dentist will:",
  steps: [
    {
      icon: "eye",
      lead: "Look",
      text: "at your lips, cheeks, gums, tongue, the floor and roof of your mouth and your throat for sores and for white or red patches.",
    },
    { icon: "hand", lead: "Feel", text: "the tissues inside your mouth for lumps or areas that feel thick or hard." },
    { icon: "search", lead: "Check your neck and throat", text: "for lumps or swelling." },
    { icon: "calendarCheck", lead: "Follow up", text: "on anything unusual. That may mean checking the area again at a short follow-up visit." },
  ],
  after:
    "If an area still looks suspicious, the next step may be a biopsy, where a small sample of cells is removed and sent to a lab for testing. A biopsy is how you find out for sure.",
};

export const ocSigns = {
  title: "Warning Signs to Watch For",
  intro:
    "According to the [National Institute of Dental and Craniofacial Research (NIDCR)](https://www.nidcr.nih.gov/health-info/oral-cancer), you should see a dentist or doctor if any of these last more than two weeks:",
  items: [
    "A sore, irritation, lump or thick patch in your mouth, lip or throat",
    "A white or red patch in your mouth",
    "A feeling that something is caught in your throat, or a sore throat that won't go away",
    "Difficulty chewing, swallowing or speaking",
    "Difficulty moving your jaw or tongue",
    "Numbness in your tongue or another area of your mouth",
    "Swelling of the jaw that makes dentures fit poorly",
    "Pain or bleeding in the mouth, or ear pain",
    "A lump in your neck, or hoarseness or loss of your voice",
  ],
  after: "Don't wait for your next checkup if you notice one of these. Call (215) 860-4600 and ask to have it looked at.",
};

export const ocRisk = {
  title: "Who Is at Higher Risk",
  intro: "Anyone can get oral cancer, but the NIDCR lists these risk factors:",
  items: [
    { icon: "ban", text: "Tobacco of any kind, including cigarettes, cigars, pipes, e-cigarettes, chewing tobacco and snuff" },
    { icon: "cup", text: "Heavy alcohol use, especially combined with tobacco" },
    { icon: "shield", text: "Human papillomavirus (HPV), particularly type 16" },
    { icon: "calendar", text: "Age: oral cancers most often occur in people over 40" },
    { icon: "sun", text: "Sun exposure, which is linked to lip cancer" },
    { icon: "leaf", text: "A diet low in fruits and vegetables" },
  ],
  after: "If any of these apply to you, tell the dentist. It helps them know what to watch for.",
};

export const ocOften = {
  title: "How Often You Should Be Screened",
  text: "At Radiant Smiles @ Floral Vale, you're screened at every checkup. For most patients, that means twice a year, at the same visits as your [teeth cleaning and checkup](/preventative-care/teeth-cleaning-and-check-ups/). Regular screenings let the dentist compare what they see over time and notice when something is new.",
};

export const ocFaqs: FaqBlock = {
  title: "Oral Cancer Screening FAQs",
  items: [
    {
      question: "How long does an oral cancer screening take?",
      answer:
        "An oral cancer screening takes just a few minutes. At Radiant Smiles @ Floral Vale, it's part of every regular checkup in Yardley, so it happens during your exam without a separate appointment. The dentist looks at and feels the tissues of your mouth, neck and throat.",
    },
    {
      question: "Does an oral cancer screening hurt?",
      answer:
        "No. The screening is a visual check plus gentle pressure with the dentist's fingers on your mouth, neck and throat to feel for lumps. There are no needles, and nothing is cut or removed during the screening itself, and it's done as part of your normal exam.",
    },
    {
      question: "What happens if the dentist finds something?",
      answer:
        "The dentist will explain what they see and may ask you to come back in a short time to check it again. If the area is still a concern, the next step may be a biopsy, where a small sample of cells is sent to a lab for testing so you get a clear answer.",
    },
    {
      question: "Is an oral cancer screening covered by insurance?",
      answer:
        "At Radiant Smiles @ Floral Vale, the screening is part of your regular checkup, so it doesn't need its own appointment. Many dental plans cover two checkups a year, and coverage depends on your plan. Call (215) 860-4600 and we'll check your coverage before your visit.",
    },
  ],
};

export const ocCta: ClosingCta = {
  title: "Book an Oral Cancer Screening in Yardley",
  text: withNap("Request an appointment online, or call if you've noticed a change in your mouth that hasn't gone away."),
  buttons: ["appointment", "call"],
};
