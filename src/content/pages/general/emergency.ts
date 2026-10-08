import { practice } from "@/content/site";
import type { ClosingCta, CtaButton, FaqBlock, PageHeroContent, PageMeta } from "../shared";
import { withNap } from "./common";

/**
 * Emergency Dentistry. Verbatim from 03 General Dentistry/05 Urgent Care/Emergency Dentistry/02 Content.md
 * Call-only CTAs; the ER safety line stays visible and bold; never "24/7", "open Sundays",
 * "walk-ins" or after-hours claims; every phone link fires click_call_emergency (handoff).
 * Tuesday 8 am to 5 pm is confirmed (CLAUDE.md, 7 Oct 2026), so the [CONFIRM] note is dropped.
 */

export const emMeta: PageMeta = {
  path: "/emergency-dentistry/",
  title: "Emergency Dentist in Yardley, PA | Same-Day Appointments",
  description:
    "Toothache, broken or knocked-out tooth? Radiant Smiles @ Floral Vale keeps same-day emergency slots in Yardley, PA. Call (215) 860-4600.",
};

export const emCrumbs = [
  { name: "Home", path: "/" },
  { name: "Emergency Dentistry", path: emMeta.path },
];

/** The emergency call button (every one fires click_call_emergency via the page wrapper) */
export const emCall: CtaButton = { label: `Call ${practice.phone.display}`, href: practice.phone.href, track: "call_click_emergency" };

export const emHero: PageHeroContent = {
  h1: "Emergency Dentist in Yardley, PA",
  intro:
    "If you have a bad toothache, a broken tooth or a knocked-out tooth, call Radiant Smiles @ Floral Vale at (215) 860-4600. As an emergency dentist in Yardley, we reserve same-day emergency appointments every business day and also see patients on Saturdays from 8 am to 2 pm. Your visit starts with a focused 30-minute exam to find the problem and begin treatment.",
  buttons: [emCall],
};

export const emHeroLink = { label: "Hours & directions", href: "/contact-us/" };

export const emSafety =
  "Trouble breathing or swallowing, bleeding that won't stop, or a serious face or jaw injury? Call 911 or go to the nearest emergency room.";

/** Schema: Service description (handoff 3a) */
export const emServiceDescription =
  "As an emergency dentist in Yardley, we reserve same-day emergency appointments every business day and also see patients on Saturdays from 8 am to 2 pm.";

export const emFirst = {
  title: "Same-Day Emergency Dentist in Yardley: Call Us First",
  intro:
    "The fastest way to be seen is to call (215) 860-4600 and tell us what happened. Calling first lets us hold a same-day slot for you and tell you what to do on the way in.",
  steps: [
    { icon: "phone", lead: "Call and describe the problem:", text: "where it hurts, what happened and when it started." },
    {
      icon: "calendarCheck",
      lead: "Come in for your emergency dental appointment:",
      text: "we keep openings in the schedule every business day, and see emergencies on Saturday mornings.",
    },
    {
      icon: "timer",
      lead: "Have a focused 30-minute exam:",
      text: "the dentist checks the tooth, takes X-rays if needed and finds the cause.",
    },
    {
      icon: "clipboard",
      lead: "Agree on a plan:",
      text: "we explain what we found and what it costs, then begin treatment to stop the pain.",
    },
  ],
};

export type EmergencyGuide = {
  id: string;
  icon: string;
  tone: "red" | "amber" | "sky";
  title: string;
  paragraphs: string[];
  listIntro?: string;
  list?: string[];
  ordered?: boolean;
  /** Bold-led ordered steps (knocked-out tooth) */
  steps?: { lead?: string; text: string }[];
  after?: string[];
  alert?: string;
  call?: CtaButton;
};

export const emGuides: EmergencyGuide[] = [
  {
    id: "toothache",
    icon: "alert",
    tone: "red",
    title: "Toothache",
    paragraphs: [
      "A toothache that keeps you up at night, throbs, or comes with swelling or fever needs a dentist soon. Pain like this often means decay has reached the nerve or an infection has started.",
    ],
    listIntro: "While you wait for your appointment:",
    list: [
      "Rinse your mouth with warm water.",
      "Floss gently to remove any food caught between your teeth.",
      "Hold a cold compress against your cheek if your face is swollen.",
    ],
    after: [
      "At your visit, the dentist will find the source of the pain. Depending on the cause, toothache relief may come from a filling, [root canal therapy](/restorative-dentistry/root-canal/) to save the tooth, or removal of a tooth that can't be saved.",
    ],
  },
  {
    id: "broken-tooth",
    icon: "tooth",
    tone: "amber",
    title: "Broken or Cracked Tooth",
    paragraphs: [
      "A broken tooth or cracked tooth should be checked soon, even if it doesn't hurt yet. A crack can spread, and a sharp edge can cut your tongue or cheek.",
    ],
    list: [
      "Rinse your mouth with warm water.",
      "Keep any pieces of the tooth and bring them with you.",
      "Use a cold compress on your face to keep swelling down.",
      "Avoid chewing on that side.",
    ],
    after: [
      "Small chips can often be smoothed or bonded. A larger break may need a [dental crown](/restorative-dentistry/dental-crowns/) to protect what's left of the tooth.",
    ],
  },
  {
    id: "knocked-out-tooth",
    icon: "timer",
    tone: "red",
    title: "Knocked-Out Tooth",
    paragraphs: [
      "A knocked-out tooth is most likely to be saved if a dentist sees you as soon as possible, ideally within 30 minutes. Call us right away.",
    ],
    ordered: true,
    steps: [
      { text: "Pick the tooth up by the crown (the chewing end), not the root." },
      { text: "If it's dirty, rinse it gently with water. Don't scrub it." },
      {
        lead: "Adult (permanent) teeth only:",
        text: "gently push it back into its socket and bite down to hold it. Never put a baby tooth back in. Keep it moist and call us.",
      },
      {
        text: "If you can't put an adult tooth back, keep it moist, preferably in milk or saliva, or tucked between your cheek and gum.",
      },
    ],
    after: ["Never let the tooth dry out or wrap it in tissue."],
    alert: "Knocked-out tooth? Call (215) 860-4600 now.",
    call: { label: `Call ${practice.phone.display}`, href: practice.phone.href, track: "call_click_emergency_knocked_out" },
  },
  {
    id: "abscess",
    icon: "wave",
    tone: "red",
    title: "Abscess or Swelling",
    paragraphs: [
      "An abscess is a pocket of infection at the root of a tooth or in the gum. Signs include a painful swelling, a pimple-like bump on the gum, a bad taste and sometimes fever. Call us the same day. An infection won't clear up on its own, even if the pain eases.",
      "The dentist will check the tooth and decide whether it can be saved with a root canal or needs to come out. If swelling spreads into your face or neck, or makes it hard to breathe or swallow, go to the emergency room.",
    ],
    call: {
      label: `Call us the same day: ${practice.phone.display}`,
      href: practice.phone.href,
      track: "call_click_emergency_abscess",
    },
  },
  {
    id: "lost-filling",
    icon: "shield",
    tone: "sky",
    title: "Lost Filling or Crown",
    paragraphs: [
      "A lost filling or crown isn't usually an emergency, but the tooth underneath is exposed and can break or become sensitive. Call us to book a visit soon.",
    ],
    list: [
      "Keep the crown and bring it with you. It may be possible to put it back on.",
      "Chew on the other side and avoid sticky or hard foods.",
      "Keep the area clean by brushing gently.",
    ],
  },
  {
    id: "extraction",
    icon: "firstAid",
    tone: "sky",
    title: "Emergency Tooth Extraction",
    paragraphs: [
      "Sometimes a tooth is too broken or infected to save. When that happens, the dentist will explain why, talk through what can replace it, and arrange the [tooth extraction](/restorative-dentistry/tooth-extractions/). Whenever possible, treatment begins at your emergency visit, so you leave with a plan and less pain.",
    ],
  },
];

/** Short labels for the sticky guide menu (decorative headings stay the H2s) */
export const emGuideNav: Record<string, string> = {
  toothache: "Toothache",
  "broken-tooth": "Broken or cracked",
  "knocked-out-tooth": "Knocked out",
  abscess: "Abscess or swelling",
  "lost-filling": "Lost filling or crown",
  extraction: "Extraction",
};

export const emEr = {
  title: "When to Go to the ER Instead",
  intro: "Some injuries need a hospital emergency room, not a dental office. Call 911 or go to the nearest emergency room if you have:",
  items: [
    "Swelling in your face, mouth or neck that affects your breathing or swallowing",
    "Bleeding from your mouth that won't stop with firm pressure",
    "A serious injury to your face, jaw or head, such as after a fall or car accident",
  ],
  after: "Once you're stable, call us for follow-up care for your teeth.",
};

export const emPay = {
  title: "Emergency Care Without Insurance",
  intro:
    "You can be seen for a dental emergency without insurance. The dentist tells you what you need and what it costs before anything starts, so you can decide.",
  items: [
    {
      lead: "Membership plan members only:",
      text: "an emergency exam with an X-ray is $65 per visit. If you're not a member, ask about the exam fee when you call.",
    },
    {
      lead: "Membership plan:",
      text: "$150 a year covers 2 cleanings, exams and X-rays, and gives 15% off treatment, including emergency treatment.",
    },
    { lead: "Financing:", text: "CareCredit, subject to credit approval. [CareCredit financing](/patient-information/carecredit/)" },
    { lead: "Insurance:", text: "we accept many PPO plans. [Insurance and payment](/patient-information/insurance-payment-options/)" },
  ],
  after: "Payment is due at the time of service.",
};

export const emFaqs: FaqBlock = {
  title: "Emergency Dentistry FAQs",
  items: [
    {
      question: "What counts as a dental emergency?",
      answer:
        "A dental emergency is anything that causes severe pain, bleeding, swelling or damage to a tooth. Common examples are a bad toothache, a broken, cracked or knocked-out tooth, an abscess and a lost filling or crown. If you're unsure, call (215) 860-4600 and we'll tell you how soon you should be seen.",
    },
    {
      question: "Can I be seen the same day?",
      answer:
        "Usually, yes. Radiant Smiles @ Floral Vale reserves same-day emergency appointments every business day and sees patients on Saturdays from 8 am to 2 pm. Call (215) 860-4600 as early as you can, so we can hold a slot for you and start with a focused 30-minute exam.",
    },
    {
      question: "Are you open on weekends for emergencies?",
      answer:
        "We're open on Saturdays from 8 am to 2 pm, and emergency appointments are available. The office is closed on Sundays. If you have trouble breathing or swallowing, heavy bleeding or a serious face or jaw injury, call 911 or go to the nearest emergency room.",
    },
    {
      question: "What should I do with a knocked-out tooth?",
      answer:
        "Pick the tooth up by the crown, not the root, and rinse it gently with water if it's dirty. Only an adult (permanent) tooth should go back in its socket; never put a baby tooth back in. Otherwise, keep the tooth moist in milk or saliva and call (215) 860-4600 right away. The sooner you're seen, the better.",
    },
    {
      question: "Do you treat dental emergencies for patients without insurance?",
      answer:
        "Yes. You don't need insurance to be seen. The dentist explains your treatment and its cost before starting. Members of our in-office membership plan pay $65 for an emergency exam with an X-ray, and CareCredit financing is available, subject to credit approval.",
    },
    {
      question: "Do you see new patients for emergencies?",
      answer:
        "Call (215) 860-4600 and we'll tell you how soon we can see you. Bring a list of your medications and your insurance card if you have one. After your emergency is treated, we can schedule a full checkup and cleaning.",
    },
  ],
};

export const emCta: ClosingCta = {
  title: "In Pain? Call for a Same-Day Appointment",
  text: withNap("Call now and ask for a same-day emergency appointment."),
  buttons: [{ ...emCall, track: "call_click_emergency_final" }],
  link: { label: "Meet Dr. Urvishkumar Bhalala & Dr. Jaspreet Gadria", href: "/about-us/" },
  quote: { text: "Everyone was professional, welcoming, and attentive throughout my visit.", author: "Avni D., May 2026" },
};
