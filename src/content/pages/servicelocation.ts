import type { CostBlock } from "./general/common";
import type { Block } from "./locations/common";
import { AREAS_PATH } from "./locations/common";
import type { ClosingCta, FaqBlock, PageHeroContent, PageMeta } from "./shared";
import type { Crumb } from "@/lib/schema";

/**
 * Service + location pages (docs/seo-content/07 Service + Location). Copy is verbatim from
 * each 02 Content.md. All three are CONDITIONAL in their handoffs (Semrush demand; Invisalign
 * also needs certified-provider status): built on staging at the user's request, to be signed
 * off before launch. Offer wording matches /special-offers/; never a net price.
 */

const crumbs = (townName: string, townPath: string, name: string, path: string): Crumb[] => [
  { name: "Home", path: "/" },
  { name: "Areas We Serve", path: AREAS_PATH },
  { name: townName, path: townPath },
  { name, path },
];

const book = (label: string, track: string) => ({ label, href: "/patient-information/scheduling/", track });

/* ───────────────────────── Dental Implants, Mercer County NJ ───────────────────────── */

export const diMeta: PageMeta = {
  path: "/dental-implants-mercer-county-nj/",
  title: "Dental Implants Near Mercer County, NJ | Radiant Smiles",
  description:
    "Dental implants near Mercer County, NJ: $500 off implant, abutment and crown, a free consultation and Saturday hours in Yardley, PA. (215) 860-4600.",
};

export const diCrumbs = crumbs("Mercer County, NJ", "/dentist-mercer-county-nj/", "Dental Implants", diMeta.path);

export const diHero: PageHeroContent = {
  h1: "Dental Implants Near Mercer County, NJ",
  intro:
    "Radiant Smiles @ Floral Vale places dental implants for patients from Mercer County, NJ at 117 Floral Vale Boulevard in Yardley, PA, just across the Delaware River. Trenton is about 15 minutes away, and Ewing, Titusville, Hamilton, Lawrenceville and Pennington are about 15–25 minutes, depending on traffic. Two Temple-trained dentists plan your implant with you, and we're open Saturday mornings, so the visits fit around a New Jersey work week.",
  buttons: [book("Book Your Free Implant Consultation", "implant_consult_click,appointment_click_di_hero"), "call"],
};

export const diFacts = [
  { icon: "tag", text: "$500 off implant, abutment and crown (regular $3,500)" },
  { icon: "chat", text: "Free consultation and second opinion" },
  { icon: "calendar", text: "Open Saturday, 8 am to 2 pm" },
  { icon: "shield", text: "Many PPO plans accepted, including Horizon Blue Cross" },
];

export const diProcedureDescription = "A small titanium post is placed in the jawbone, where it replaces the root of the missing tooth.";

export const diWhy = {
  title: "Why NJ Patients Cross the River for Implants",
  intro: "Mercer County patients have three practical reasons to make the trip: a published implant fee, a free second opinion and Saturday appointments.",
  items: [
    {
      icon: "tag",
      lead: "A fee you can see before you call.",
      text: "Our implant offer covers all three parts of a single-tooth implant: the titanium post, the abutment that connects it and the crown on top. The regular fee is $3,500, and the current offer takes $500 off. [See all current offers](/special-offers/)",
    },
    {
      icon: "chat",
      lead: "A free consultation and second opinion.",
      text: "If another office has already given you a treatment plan, bring it with you. We'll examine you, explain what we see and tell you plainly whether we agree.",
    },
    {
      icon: "calendar",
      lead: "Saturday hours.",
      text: "We're open Saturday from 8 am to 2 pm. That matters when an implant takes several visits and you'd rather not take time off work for each one.",
    },
    {
      icon: "microscope",
      lead: "Precision tools.",
      text: "We use high-power dental microscopes, similar to the one an ophthalmologist uses, for a precise fit and finish on the crown, plus cone beam CT for 3D images of the jaw.",
    },
  ],
  after:
    "Dr. Urvishkumar Bhalala and Dr. Jaspreet Gadria both earned their DMD at Temple University's Kornberg School of Dentistry. You'll meet the dentist who plans your implant at your consultation.",
};

export const diVisits = {
  title: "What to Expect, Visit by Visit",
  intro:
    "A single-tooth implant usually takes six to eight months from start to finish, spread over a few visits, and most patients carry on with daily life between them.",
  steps: [
    {
      lead: "Free consultation.",
      text: "We start with a dental and X-ray examination and a review of your health history. When we need a closer look at the bone, we take 3D images with our cone beam CT. Before anything is booked, we explain your options and what they cost.",
    },
    {
      lead: "Placing the implant.",
      text: "A small titanium post is placed in the jawbone, where it replaces the root of the missing tooth. In some cases, the implant can go in at the same visit as the extraction. If you're nervous, ask us about sedation options.",
    },
    {
      lead: "Healing.",
      text: "The bone bonds with the titanium and forms a strong foundation. Single-stage implants need at least six weeks of healing before the new tooth goes on. Many cases follow two phases: placing the implant, then uncovering it and attaching a healing collar.",
    },
    {
      lead: "Your new tooth.",
      text: "We attach the abutment and your custom crown, checking the fit and finish under the microscope.",
    },
  ],
  after:
    "Missing several teeth, or tired of a loose denture? Implants can also replace several teeth or hold a full denture in place. Read about [implant-retained dentures](/restorative-dentistry/dentures/implant-retained-dentures/) or the full [dental implant procedure](/restorative-dentistry/dental-implants/).",
  tip: { lead: "Planning tip for NJ patients:", text: "ask for Saturday times when you book your placement and crown visits, so the river crossings fall on your day off." },
};

export const diCost: CostBlock = {
  title: "Cost, Offers & Financing",
  paragraphs: [
    "A single implant, abutment and crown is regularly $3,500 at our office, and our current offer takes $500 off. Ask about the offer's terms when you call.",
    "When you compare affordable dental implants, NJ and PA quotes don't always include the same things. Check that each one covers the implant, the abutment and the crown. Ours does. If you need other treatment first, such as an extraction, we'll explain that cost separately at your consultation.",
  ],
  items: [
    {
      lead: "Dental insurance:",
      text: "we accept many PPO plans, including Horizon Blue Cross, Delta Dental, Aetna, Cigna PPO, MetLife and UnitedHealthcare. Implant benefits vary from plan to plan, so call with your plan details and we'll check what yours covers. [Insurance and payment options](/patient-information/insurance-payment-options/)",
    },
    {
      lead: "CareCredit:",
      text: "qualifying purchases of $200 or more carry no interest if paid in full within 6 months, subject to credit approval. You can prequalify with no impact to your credit score. [CareCredit financing](/patient-information/carecredit/)",
    },
    { lead: "Payment:", text: "cash, check, Visa, MasterCard, Discover and American Express. Payment is due at the time of service." },
  ],
};

export const diHere: { title: string; blocks: Block[] } = {
  title: "Getting Here From Mercer County",
  blocks: [
    {
      p: "Our Yardley office is about 15–25 minutes from most of Mercer County, depending on traffic. If you've been looking for an implant dentist in Mercer County, NJ, this is the drive from each town. Patients coming for dental implants from Trenton, NJ have the shortest trip.",
    },
    {
      table: {
        label: "Drive times from Mercer County towns",
        head: ["From", "Approx. drive", "Main route"],
        rows: [
          ["[Trenton](/dentist-trenton-nj/)", "About 15 min", "US-1 (Trenton-Morrisville Toll Bridge) or Calhoun Street Bridge"],
          ["[Ewing / West Trenton](/dentist-ewing-nj/)", "About 15–20 min", "I-295 (Scudder Falls Bridge)"],
          ["[Hopewell / Titusville](/dentist-hopewell-nj/)", "About 15–20 min", "Washington Crossing Bridge / NJ-29"],
          ["[Hamilton](/dentist-hamilton-nj/)", "About 20–25 min", "US-1 / I-295"],
          ["[Lawrenceville](/dentist-lawrenceville-nj/)", "About 20–25 min", "US-1 / I-295"],
          ["[Pennington](/dentist-pennington-nj/)", "About 20–25 min", "I-295 / NJ-31"],
        ],
      },
    },
    { p: "Google Maps estimates; times change with traffic." },
    {
      p: "The Delaware River Joint Toll Bridge Commission collects tolls only in the Pennsylvania-bound direction, so on the toll bridges you pay on the way to us and the drive home to New Jersey is toll-free. The Calhoun Street Bridge has no toll, but it carries a 3-ton weight limit and a 15 mph speed limit. [All areas we serve](/areas-we-serve/)",
    },
  ],
};

export const diFaqs: FaqBlock = {
  title: "Dental Implant FAQs for Mercer County Patients",
  items: [
    {
      question: "How far is your office from Mercer County, NJ?",
      answer:
        "Our office at 117 Floral Vale Boulevard, Yardley, PA is about 15 minutes from Trenton and about 15–25 minutes from Ewing, Titusville, Hamilton, Lawrenceville and Pennington, depending on traffic. The main crossings are I-295 over the Scudder Falls Bridge and US-1 over the Trenton-Morrisville Toll Bridge.",
    },
    {
      question: "Do you accept New Jersey dental insurance for implants?",
      answer:
        "Yes, we accept many PPO plans, including Horizon Blue Cross, Delta Dental, Aetna, Cigna PPO, MetLife and UnitedHealthcare. Implant coverage depends on your plan, so call (215) 860-4600 with your plan details and we'll check your benefits before treatment starts. CareCredit financing is also available.",
    },
    {
      question: "What does the $3,500 implant fee include?",
      answer:
        "The regular $3,500 fee covers one implant post, the abutment that connects it and the crown on top, and the current offer takes $500 off. It includes a free consultation and second opinion. If you need other treatment first, such as an extraction, we'll explain that cost separately.",
    },
    {
      question: "How many visits will I need, and can some be on a Saturday?",
      answer:
        "Most single-tooth implants take a few visits over six to eight months: a consultation, implant placement, sometimes a short visit to uncover the implant, and the crown. We're open Saturday from 8 am to 2 pm, so ask for Saturday times when you book.",
    },
    {
      question: "Can I get a second opinion on an implant plan from another dentist?",
      answer:
        "Yes. A free second opinion is part of our implant offer. Bring the plan you were given, along with any recent X-rays if you have them. We'll examine you, review your health history and explain whether we'd recommend the same treatment, and why.",
    },
  ],
};

export const diCta: ClosingCta = {
  title: "Book Your Free Implant Consultation",
  text: "Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067 · (215) 860-4600 · Open Saturday 8 am to 2 pm",
  buttons: [book("Request an Appointment", "implant_consult_click,appointment_click_di_final"), "call"],
};

/* ───────────────────────── Emergency Dentist, Trenton NJ ───────────────────────── */

export const etMeta: PageMeta = {
  path: "/emergency-dentist-trenton-nj/",
  title: "Emergency Dentist Near Trenton, NJ | Radiant Smiles",
  description:
    "Emergency dentist near Trenton, NJ: emergency slots held every business day, Saturday 8 am to 2 pm, about 15 minutes away. Call (215) 860-4600.",
};

export const etCrumbs = crumbs("Trenton, NJ", "/dentist-trenton-nj/", "Emergency Dentist", etMeta.path);

export const etHero: PageHeroContent = {
  h1: "Emergency Dentist Near Trenton, NJ",
  intro:
    "Radiant Smiles @ Floral Vale is an emergency dentist for Trenton, NJ patients, at 117 Floral Vale Boulevard in Yardley, PA, about 15 minutes away over the river, depending on traffic. Call us first. We keep emergency slots open every business day and on Saturday mornings, so you can often be seen the same day for a focused 30-minute exam and a plan to stop the pain.",
  buttons: [{ label: "Call (215) 860-4600 Now", href: "tel:+12158604600", track: "emergency_call_click,call_click_et_hero" }],
};

export const etFacts = [
  { icon: "clock", text: "Emergency slots held every business day" },
  { icon: "calendar", text: "Open Saturday, 8 am to 2 pm" },
  { icon: "timer", text: "30-minute exam to diagnose and begin treatment" },
  { icon: "ban", text: "Closed Sunday" },
];

export const etSafety =
  "Call 911 or go to the nearest hospital emergency department if you have swelling that affects your breathing or swallowing, bleeding that won't stop, or a serious injury to your head or jaw.";

export const etServiceDescription =
  "We keep emergency slots open every business day and on Saturday mornings, so you can often be seen the same day for a focused 30-minute exam and a plan to stop the pain.";

export const etWhy = {
  title: "Why Trenton Patients Call Us in a Dental Emergency",
  intro:
    "Three things make us a practical choice for Trenton patients in a dental emergency: we hold appointments open, we're open on Saturday mornings and the drive is about 15 minutes.",
  items: [
    {
      icon: "clock",
      lead: "Time set aside for you.",
      text: "We reserve openings in our schedule every business day for patients in pain. If you have an emergency, every attempt is made to see you that day.",
    },
    {
      icon: "search",
      lead: "A visit built around the problem.",
      text: "Your first appointment is a 30-minute limited exam to find the cause and begin treatment, not a full checkup.",
    },
    {
      icon: "calendar",
      lead: "Saturday mornings.",
      text: "A tooth that breaks on Friday night doesn't have to wait until Monday. We're open Saturday from 8 am to 2 pm.",
    },
    {
      icon: "microscope",
      lead: "A clear look at the tooth.",
      text: "Digital X-rays use about one-sixth of the radiation of conventional film, and our high-power dental microscopes support precise, careful repairs.",
    },
  ],
  after:
    "When you need a same-day dentist, Trenton, NJ patients should call as early in the day as possible. Earlier calls leave more open slots to choose from.",
};

export const etCounts = {
  title: "What Counts as a Dental Emergency",
  intro: "A dental emergency is any problem that causes significant pain, damages a tooth or shows signs of infection. Call us if you have:",
  items: [
    { key: "ache", lead: "Toothache or dental pain", text: ", especially pain that keeps you awake or gets worse when you bite" },
    { key: "broken", lead: "A broken, cracked or chipped tooth", text: "" },
    { key: "knocked", lead: "A knocked-out tooth:", text: " keep it moist, preferably in milk or saliva, and call right away" },
    { key: "lost", lead: "A lost filling or crown", text: "" },
    { key: "abscess", lead: "An abscess or infected tooth", text: ", such as swelling, a bad taste or a pimple-like bump on the gum" },
  ],
  after:
    "A toothache in Trenton, NJ that starts after our office has closed can be hard to judge. If the pain is severe or your face is swelling, go to a hospital emergency department. Otherwise, call us as soon as we open. [More about emergency dentistry](/emergency-dentistry/)",
};

export const etDay = {
  title: "What to Expect on the Day",
  intro: "An emergency visit from Trenton usually means one phone call, a short drive across the river and a focused exam with a plan before you leave.",
  steps: [
    {
      icon: "phone",
      lead: "Call (215) 860-4600.",
      text: "Tell us what happened and when. We'll offer you the earliest open time. Please call before you set off, so we can hold a slot for you.",
    },
    {
      icon: "car",
      lead: "Get ready to leave.",
      text: "If a tooth was knocked out, keep it in milk or saliva. Bring your dental insurance card, if you have one. If you're in a lot of pain, ask someone to drive you.",
    },
    {
      icon: "search",
      lead: "Your 30-minute exam.",
      text: "We examine the area, take digital X-rays if needed, find the cause and begin treatment.",
    },
    {
      icon: "clipboard",
      lead: "Your plan and the cost.",
      text: "Before any treatment, we explain what we found, your options and what they cost. If you need more work, such as a [root canal](/restorative-dentistry/root-canal/), which usually takes two appointments, we'll book the follow-up before you go.",
    },
  ],
  after: "If dental visits make you anxious, tell us when you call. You're welcome to bring headphones and music, and you can ask about sedation options.",
};

export const etCost: CostBlock = {
  title: "Emergency Dental Care Costs for Trenton, NJ Patients",
  paragraphs: ["The cost of emergency dental care depends on what we find and the treatment you choose, and we tell you the fee before we start."],
  items: [
    {
      lead: "Insurance:",
      text: "we accept many PPO plans, including Horizon Blue Cross, Aetna, Delta Dental, Cigna PPO, MetLife and UnitedHealthcare. Coverage depends on your plan, so have your card ready when you call. [Insurance and payment options](/patient-information/insurance-payment-options/)",
    },
    { lead: "Membership plan:", text: "members of our in-office plan ($150 a year) pay $65 for an emergency exam with X-ray." },
    {
      lead: "CareCredit:",
      text: "no interest if paid in full within 6 months on qualifying purchases of $200 or more, subject to credit approval. [CareCredit financing](/patient-information/carecredit/)",
    },
    { lead: "Payment:", text: "cash, check, Visa, MasterCard, Discover and American Express, due at the time of service." },
  ],
  after: [
    "Once the emergency is under control, uninsured new patients can book our $89 new patient visit, which includes a cleaning, X-ray and exam. [See current offers](/special-offers/)",
  ],
};

export const etHere: { title: string; blocks: Block[] } = {
  title: "Getting Here From Trenton",
  blocks: [
    {
      p: "Our office is about 15 minutes from Trenton, depending on traffic. The two most direct crossings are US-1 over the Trenton-Morrisville Toll Bridge and the Calhoun Street Bridge.",
    },
    {
      ul: [
        {
          lead: "US-1 (Trenton-Morrisville Toll Bridge):",
          text: "the Delaware River Joint Toll Bridge Commission collects tolls only in the Pennsylvania-bound direction, so you pay on the way to us and the drive home is toll-free.",
        },
        {
          lead: "Calhoun Street Bridge:",
          text: "no toll, but it has a 3-ton weight limit and a 15 mph speed limit. It links Calhoun Street in Trenton with Trenton Avenue in Morrisville.",
        },
        { lead: "From West Trenton or Ewing:", text: "I-295 over the Scudder Falls Bridge is usually the more direct route." },
      ],
    },
    {
      p: "Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067. [Dentist near Trenton, NJ](/dentist-trenton-nj/) · [All areas we serve](/areas-we-serve/)",
    },
  ],
};

export const etFaqs: FaqBlock = {
  title: "Emergency Dentist FAQs for Trenton Patients",
  items: [
    {
      question: "Can I be seen the same day if I'm coming from Trenton?",
      answer:
        "Often, yes. We reserve emergency openings every business day, and every attempt is made to see patients in pain that day. Call (215) 860-4600 as early as you can, tell us what happened, and we'll give you the earliest time. The drive from Trenton is about 15 minutes, depending on traffic.",
    },
    {
      question: "Are you open on weekends for dental emergencies?",
      answer:
        "We're open Saturday from 8 am to 2 pm and closed on Sunday. If you have a dental emergency on a Sunday and the pain is severe, or you have swelling, go to a hospital emergency department. Otherwise, call us when we open on Monday at 8 am.",
    },
    {
      question: "What should I do with a knocked-out tooth on the way from Trenton?",
      answer:
        "Keep the tooth moist, preferably in milk or saliva, and call us right away at (215) 860-4600. Then head over: the office is about 15 minutes from Trenton, depending on traffic. If you've also hurt your head or jaw, go to a hospital emergency department first.",
    },
    {
      question: "Do you accept New Jersey dental insurance for emergency visits?",
      answer:
        "We accept many PPO plans that New Jersey patients use, including Horizon Blue Cross, Aetna, Delta Dental, Cigna PPO, MetLife and UnitedHealthcare. Coverage for an emergency visit depends on your plan. Have your insurance card with you when you call, and we'll check it before you arrive.",
    },
  ],
};

export const etCta: ClosingCta = {
  title: "In Pain? Call Now & Ask for a Same-Day Emergency Appointment",
  text: "Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067 · About 15 minutes from Trenton",
  buttons: [{ label: "Call (215) 860-4600", href: "tel:+12158604600", track: "emergency_call_click,call_click_et_final" }],
};

/* ───────────────────────── Invisalign, Trenton NJ ───────────────────────── */

export const itnMeta: PageMeta = {
  path: "/invisalign-trenton-nj/",
  title: "Invisalign Near Trenton, NJ | Radiant Smiles",
  description:
    "Invisalign near Trenton, NJ: $1,000 off (regular $5,800), a free consultation and Saturday check-ups in Yardley, PA, 15 minutes away. (215) 860-4600.",
};

export const itnCrumbs = crumbs("Trenton, NJ", "/dentist-trenton-nj/", "Invisalign", itnMeta.path);

export const itnHero: PageHeroContent = {
  h1: "Invisalign Near Trenton, NJ",
  intro:
    "Radiant Smiles @ Floral Vale offers Invisalign® clear aligners to Trenton, NJ patients at 117 Floral Vale Boulevard in Yardley, PA, about 15 minutes away, depending on traffic. Treatment for adults takes about a year on average, with a check-up about every six weeks. We're open Saturday mornings, so those visits fit around work and school on the New Jersey side of the river.",
  buttons: [book("Book Your Free Invisalign Consultation", "invisalign_consult_click,appointment_click_itn_hero"), "call"],
};

export const itnFacts = [
  { icon: "tag", text: "$1,000 off Invisalign (regular $5,800)" },
  { icon: "chat", text: "Free consultation and second opinion" },
  { icon: "calendar", text: "Check-ups about every 6 weeks, Saturdays available" },
  { icon: "car", text: "About 15 minutes from Trenton" },
];

export const itnProcedureDescription =
  "Invisalign straightens teeth with a series of custom clear aligners, and the whole process starts with one consultation visit.";

export const itnWhy = {
  title: "Why NJ Patients Choose Our Yardley Office for Invisalign",
  intro:
    "With Invisalign, you'll visit us several times over about a year, so a published fee, a free second opinion and Saturday hours matter more than they would for a one-off visit.",
  items: [
    {
      icon: "tag",
      lead: "A published fee.",
      text: "Invisalign is regularly $5,800 at our office, and the current offer takes $1,000 off. [See all current offers](/special-offers/)",
    },
    {
      icon: "chat",
      lead: "A free consultation and second opinion.",
      text: "Already have an aligner quote from somewhere else? Bring it. We'll tell you whether we'd plan your treatment the same way.",
    },
    {
      icon: "calendar",
      lead: "Check-ups that fit your week.",
      text: "We're open Saturday from 8 am to 2 pm, plus weekday hours until 6 pm on Wednesday and Thursday.",
    },
    {
      icon: "graduation",
      lead: "Two Temple-trained dentists.",
      text: "Both Dr. Jaspreet Gadria and Dr. Urvishkumar Bhalala hold a DMD from Temple University's Kornberg School of Dentistry.",
    },
  ],
  after:
    "Choosing clear aligners as a Trenton, NJ patient mostly comes down to two things: a plan you trust, and check-ups you can actually get to.",
};

export const itnSteps = {
  title: "What to Expect, From Consultation to Final Aligner",
  intro: "Invisalign straightens teeth with a series of custom clear aligners, and the whole process starts with one consultation visit.",
  steps: [
    {
      lead: "Consultation.",
      text: "We check whether Invisalign suits your teeth. Detailed photos, X-rays and a scan or impressions of your teeth are used to build a 3D image, and Invisalign's software maps how each tooth should move.",
    },
    {
      lead: "Your aligners.",
      text: "Your aligners are custom-made from smooth, BPA-free clear plastic. You wear them 20 to 22 hours a day and take them out to eat, drink, brush and floss.",
    },
    { lead: "A new set about every two weeks.", text: "Each set moves your teeth a little further along the plan." },
    {
      lead: "Check-ups about every six weeks.",
      text: "We check your progress and make sure your teeth are moving as planned. Ask for Saturday times if weekdays are hard.",
    },
    { lead: "Finishing.", text: "Adults finish in about a year on average. Teens usually take about as long as they would with traditional braces." },
  ],
  after:
    "Invisalign is often called invisible braces, but there are no brackets or wires: the aligners are removable plastic trays, so there are no food restrictions and nothing to poke your gums. [How Invisalign works](/cosmetic-dentistry/invisalign/)",
  teen: {
    lead: "For teens:",
    text: "parents looking for invisible braces for Trenton, NJ teenagers can ask about Invisalign Teen. It adds blue compliance indicators that show whether the aligners are being worn, and replacement aligners in case one is lost. [Invisalign Teen](/cosmetic-dentistry/invisalign/invisalign-teen/)",
  },
};

export const itnCost: CostBlock = {
  title: "Cost, Offers & Financing",
  paragraphs: [
    "Invisalign is regularly $5,800 at our office, and our current offer takes $1,000 off, with a free consultation and second opinion. Ask about the offer's terms when you call.",
  ],
  items: [
    {
      lead: "Insurance:",
      text: "some dental plans include orthodontic benefits that can go toward Invisalign, in some cases up to $3,500. We accept many PPO plans, including Horizon Blue Cross, Delta Dental, Aetna, Cigna PPO, MetLife and UnitedHealthcare. Call with your plan details and we'll check your benefits. [Insurance and payment options](/patient-information/insurance-payment-options/)",
    },
    { lead: "FSA funds:", text: "you can use flexible spending account money toward treatment." },
    { lead: "Monthly payments:", text: "monthly payment options are available; ask us when you call." },
    {
      lead: "CareCredit:",
      text: "spread the cost with no interest if paid in full within 6 months on qualifying purchases of $200 or more (subject to credit approval). [CareCredit financing](/patient-information/carecredit/)",
    },
  ],
  after: [
    "What affects the fee? Mainly how much your teeth need to move and how long treatment takes. [Invisalign cost explained](/cosmetic-dentistry/invisalign/invisalign-cost/)",
  ],
};

export const itnHere: { title: string; blocks: Block[] } = {
  title: "Getting Here From Trenton",
  blocks: [
    {
      p: "Our office is about 15 minutes from Trenton, depending on traffic, using US-1 over the Trenton-Morrisville Toll Bridge or the Calhoun Street Bridge.",
    },
    {
      ul: [
        {
          lead: "US-1 (Trenton-Morrisville Toll Bridge):",
          text: "tolls are collected only in the Pennsylvania-bound direction, so the drive home is toll-free.",
        },
        { lead: "Calhoun Street Bridge:", text: "no toll, with a 3-ton weight limit and a 15 mph speed limit." },
        { lead: "From West Trenton or Ewing:", text: "I-295 over the Scudder Falls Bridge." },
      ],
    },
    {
      p: "Because you'll visit roughly every six weeks, you can book your next check-up before you leave. Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067. [Dentist near Trenton, NJ](/dentist-trenton-nj/) · [All areas we serve](/areas-we-serve/)",
    },
  ],
};

export const itnFaqs: FaqBlock = {
  title: "Invisalign FAQs for Trenton Patients",
  items: [
    {
      question: "How long does Invisalign take?",
      answer:
        "For adults, Invisalign takes about one year on average. Teens usually take about as long as they would with traditional braces. Your exact timeline depends on how far your teeth need to move, and we'll give you an estimate at your free consultation in Yardley, about 15 minutes from Trenton.",
    },
    {
      question: "How often will I need to drive to Yardley from Trenton?",
      answer:
        "You'll come in for a check-up about every six weeks and switch to a new set of aligners about every two weeks. We're open Saturday from 8 am to 2 pm and until 6 pm on Wednesday and Thursday, so it's easier to fit visits around work or school.",
    },
    {
      question: "Does New Jersey dental insurance cover Invisalign?",
      answer:
        "Some plans do. Dental plans with orthodontic benefits can cover part of Invisalign, in some cases up to $3,500. We accept many PPO plans, including Horizon Blue Cross and Delta Dental. Call (215) 860-4600 with your plan details and we'll check your benefits before you start.",
    },
    {
      question: "Is the Invisalign consultation free?",
      answer:
        "Yes. Our Invisalign offer includes a free consultation and second opinion, along with $1,000 off the regular $5,800 fee. At the consultation, we check whether Invisalign suits your teeth, explain how long treatment should take and tell you what it will cost before you decide.",
    },
    {
      question: "Can teenagers from Trenton get Invisalign?",
      answer:
        "Yes. Invisalign Teen works like Invisalign for adults, with two additions: blue compliance indicators that show whether the aligners are being worn, and replacement aligners in case one is lost. Teens usually finish in about the same time as traditional braces.",
    },
  ],
};

export const itnCta: ClosingCta = {
  title: "Book Your Free Invisalign Consultation",
  text: "Radiant Smiles @ Floral Vale, 117 Floral Vale Boulevard, Yardley, PA 19067 · (215) 860-4600 · About 15 minutes from Trenton",
  buttons: [book("Request an Appointment", "invisalign_consult_click,appointment_click_itn_final"), "call"],
};
