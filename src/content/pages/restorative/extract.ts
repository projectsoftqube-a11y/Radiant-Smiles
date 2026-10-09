import type { CostBlock } from "../general/common";
import type { ClosingCta, FaqBlock, PageHeroContent, PageMeta } from "../shared";
import { practice } from "@/content/site";
import { ctaNap, rdCrumbs } from "./common";

/**
 * Tooth Extractions, Wisdom Teeth Removal and Periodontal Services (gum disease treatment).
 * Verbatim from 04 Restorative Dentistry/05 Extractions/* and 06 Gum Disease Treatment/*
 */

/* ───────────────────────── Tooth Extractions ───────────────────────── */

export const exMeta: PageMeta = {
  path: "/restorative-dentistry/tooth-extractions/",
  title: "Tooth Extraction in Yardley, PA | Radiant Smiles",
  description:
    "Tooth extraction in Yardley, PA under local anesthetic, with options to replace the tooth and same-day emergency slots. Call (215) 860-4600.",
};

export const exCrumbs = rdCrumbs("Tooth Extractions", exMeta.path);

/** Call first: pain-driven visits (handoff) */
export const exHero: PageHeroContent = {
  h1: "Tooth Extractions in Yardley, PA",
  intro:
    "A tooth extraction removes a tooth that is too damaged, diseased or badly positioned to keep. At Radiant Smiles @ Floral Vale, tooth extraction in Yardley is done under local anesthetic, so you feel pressure but not sharp pain, and your dentist plans how to replace the tooth before it comes out.",
  more: ["Have a painful or broken tooth? Ask for one of the same-day emergency slots held every business day."],
  buttons: [{ label: `Call ${practice.phone.display}`, href: practice.phone.href, track: "call_click_ex_hero" }, "appointment"],
};

export const exProcedureDescription = "A tooth extraction removes a tooth that is too damaged, diseased or badly positioned to keep.";

export const exWhen = {
  title: "When a Tooth Needs to Come Out",
  intro: "Your dentist will try to save a tooth first, and removes it only when keeping it would cause more harm. Common reasons for an extraction include:",
  items: [
    { icon: "search", lead: "Severe decay", text: "that has destroyed too much of the tooth to repair" },
    { icon: "wave", lead: "Advanced gum disease", text: "that has loosened the tooth in the bone" },
    { icon: "alert", lead: "A tooth broken beyond repair,", text: "for example below the gum line" },
    { icon: "tooth", lead: "A poorly positioned or impacted tooth,", text: "such as a wisdom tooth that can't come in properly" },
    { icon: "aligner", lead: "Preparation for orthodontic treatment,", text: "when a tooth needs to be removed to make room" },
  ],
  after:
    "If a tooth can be saved, a [root canal](/restorative-dentistry/root-canal/) and crown is often the better long-term choice. Your dentist will show you the X-rays and explain the options either way.",
};

export const exExpect = {
  title: "What to Expect During a Tooth Extraction",
  intro: "You'll know what's happening at each step of an extraction. Before the appointment, tell your dentist about any medicines you take and any health conditions.",
  steps: [
    { lead: "Numbing.", text: "A local anesthetic numbs the tooth, the jawbone and the gums around it." },
    {
      lead: "Loosening the tooth.",
      text: "The dentist gently rocks the tooth to widen the socket. You'll feel firm pressure but shouldn't feel sharp pain. If you do, tell the team straight away and more anesthetic can be given.",
    },
    { lead: "Removing the tooth.", text: "Once the socket is wide enough, the tooth is lifted out." },
    { lead: "Gauze and instructions.", text: "You bite on gauze to control bleeding and go home with aftercare instructions." },
  ],
  sections: {
    title: "When a tooth is removed in sections",
    text: "Some teeth are firmly anchored or have curved roots that make them hard to lift out whole. In that case the dentist cuts the tooth into sections and removes it piece by piece.",
  },
  after: "If you're anxious, ask about sedation options when you book. You can also bring headphones and music.",
};

export const exRecovery = {
  title: "Tooth Extraction Recovery",
  intro:
    "Most people return to normal activities within a few days of a simple extraction. The first 72 hours matter most, because a blood clot needs to form and stay in the socket so it can heal.",
  hour: {
    title: "The first hour",
    text: "Bite firmly on the gauze for 30 to 45 minutes. If bleeding continues, replace it with fresh gauze and bite down again.",
  },
  days: {
    title: "The first 72 hours",
    intro: "For three days after your extraction, avoid:",
    items: [
      { icon: "drop", text: "Rinsing vigorously" },
      { icon: "cup", text: "Drinking through a straw" },
      { icon: "ban", text: "Smoking" },
      { icon: "alert", text: "Drinking alcohol" },
      { icon: "brush", text: "Brushing right next to the extraction site" },
    ],
  },
  after: [
    "Limit vigorous exercise for the first 24 hours. An ice pack on the outside of your cheek helps keep swelling down. You can go back to your normal brushing and flossing after 24 hours, while still keeping away from the extraction site.",
    "Call the office if bleeding won't stop, or if pain or swelling gets worse after the first few days. Our [home care instructions](/patient-information/care-and-comfort/home-instructions/) cover aftercare in more detail.",
  ],
};

export const exReplace = {
  title: "Replacing the Tooth After an Extraction",
  intro:
    "Replacing an extracted tooth keeps your bite working and stops the neighboring teeth drifting into the gap. It's worth planning the replacement before the tooth comes out, because some options start at the extraction visit.",
  items: [
    {
      icon: "implant",
      lead: "[Dental implants](/restorative-dentistry/dental-implants/):",
      text: "a titanium post that replaces the root. In some cases the implant can be placed at the same appointment as the extraction. Our current offer is $500 off the regular $3,500 for an implant, abutment and crown.",
    },
    { icon: "layers", lead: "[Dental bridges](/restorative-dentistry/dental-bridges/):", text: "a fixed replacement tooth supported by the teeth beside the gap." },
    { icon: "case", lead: "[Partial dentures](/restorative-dentistry/dentures/partial-dentures/):", text: "a removable option that can fill one or several gaps." },
    {
      icon: "smile",
      lead: "[Immediate dentures](/restorative-dentistry/dentures/immediate-dentures/):",
      text: "if all your remaining teeth are coming out, a denture made in advance can be placed the same day.",
    },
  ],
};

export const exWisdom = {
  title: "Wisdom Teeth Extraction",
  text: "Wisdom teeth that are impacted, partly erupted or crowding other teeth are a common reason for extraction. They need an exam and X-rays first to see how the roots sit. See [wisdom teeth removal](/restorative-dentistry/wisdom-teeth-removal/) for the signs, the procedure and recovery.",
};

export const exCost: CostBlock = {
  title: "Tooth Extraction Cost in Yardley",
  paragraphs: [
    "The cost of an extraction depends on whether the tooth can be removed whole or needs to be taken out in sections, and on any X-rays needed. You'll get the cost before treatment begins.",
  ],
  items: [
    {
      lead: "Insurance:",
      text: "your PPO plan may cover part of an extraction. We accept many PPO plans, including Colonial Life, Delta Dental, Mutual of Omaha and United Concordia Elite Plus; call to verify yours. [Insurance and payment](/patient-information/insurance-payment-options/)",
    },
    { lead: "No insurance:", text: "the $150-a-year membership plan takes 15% off all treatment, and an emergency exam with X-ray is $65 for members." },
    { lead: "Financing:", text: "[CareCredit](/patient-information/carecredit/) is accepted, subject to credit approval." },
  ],
};

export const exFaqs: FaqBlock = {
  title: "Tooth Extraction FAQs",
  items: [
    {
      question: "Does a tooth extraction hurt?",
      answer:
        "A local anesthetic numbs the tooth, jawbone and gums first, so you should feel pressure as the tooth is loosened but not sharp pain. If you feel pain at any point, tell the team and more anesthetic can be given. Some soreness afterward is normal, and an ice pack helps with swelling.",
    },
    {
      question: "How long does it take to recover from a tooth extraction?",
      answer:
        "Most people return to normal activities within a few days. The first 72 hours matter most: avoid straws, smoking, alcohol, vigorous rinsing and brushing next to the site. You can resume normal brushing elsewhere after 24 hours, and limit vigorous exercise for the first day.",
    },
    {
      question: "Can I have a tooth pulled the same day I call?",
      answer:
        "Sometimes. Radiant Smiles @ Floral Vale keeps same-day emergency slots open every business day for a 30-minute limited exam that diagnoses the problem and begins treatment. Whether the tooth comes out that day depends on what the exam finds. Call (215) 860-4600 early in the day.",
    },
    {
      question: "Should I replace a tooth after it's pulled?",
      answer:
        "In most cases, yes. A gap lets neighboring teeth drift and makes chewing harder on that side. Options include a dental implant, a bridge, a partial denture or, if all teeth are coming out, an immediate denture. Planning before the extraction gives you the most choice.",
    },
  ],
};

export const exCta: ClosingCta = {
  title: "Book a Tooth Extraction Consultation",
  text: "Find out whether your tooth can be saved, and if not, how it will be removed and replaced. Call now if you're in pain.",
  sub: ctaNap,
  buttons: ["call", "appointment"],
};

/* ───────────────────────── Wisdom Teeth Removal ───────────────────────── */

export const wtMeta: PageMeta = {
  path: "/restorative-dentistry/wisdom-teeth-removal/",
  title: "Wisdom Teeth Removal in Yardley, PA | Radiant Smiles",
  description:
    "Wisdom teeth removal in Yardley, PA: exam and X-rays to check position, removal in our office and clear recovery steps. Call (215) 860-4600.",
};

export const wtCrumbs = rdCrumbs("Wisdom Teeth Removal", wtMeta.path);

export const wtHero: PageHeroContent = {
  h1: "Wisdom Teeth Removal in Yardley, PA",
  intro:
    "Wisdom teeth removal takes out the third molars at the back of the mouth when they're trapped, crowded or causing infection. At Radiant Smiles @ Floral Vale, wisdom teeth removal in Yardley starts with an exam and X-rays to see exactly how the teeth sit, and most removals take under an hour.",
  buttons: ["appointment", "call"],
};

export const wtProcedureDescription =
  "Wisdom teeth removal takes out the third molars at the back of the mouth when they're trapped, crowded or causing infection.";

export const wtSigns = {
  title: "Signs of Wisdom Tooth Problems",
  intro:
    "Wisdom teeth often cause trouble because there isn't enough room for them to come in straight. A tooth that stays trapped under the gum or only partly breaks through can lead to:",
  items: [
    {
      icon: "alert",
      lead: "Pericoronitis:",
      text: "an infection of the gum around a partly erupted wisdom tooth, which can cause pain, swelling and a bad taste",
    },
    { icon: "drop", lead: "Cysts:", text: "fluid-filled sacs that can form around a trapped tooth and damage the bone" },
    { icon: "layers", lead: "Crowding:", text: "pressure on the teeth in front" },
    {
      icon: "tooth",
      lead: "Damage to the second molar:",
      text: "decay or bone loss on the tooth next to the wisdom tooth, which is hard to clean",
    },
  ],
  after:
    "Pain or swelling at the back of the jaw, tender gums behind your last molar, or trouble opening your mouth fully are all reasons to get checked. Some problems cause no symptoms at all, which is why X-rays matter.",
};

export const wtAll = {
  title: "Do All Wisdom Teeth Need to Be Removed?",
  paragraphs: [
    "No. Wisdom teeth that come in fully, sit in a healthy position and can be cleaned well may not need to come out. The decision depends on the position of each tooth, the space in your jaw and whether problems are present or likely.",
    "Your dentist will examine your mouth and take X-rays to see the position of the teeth and roots, then explain whether removal makes sense now, later or not at all. If a tooth's position makes removal more complex, you'll hear about your options before anything is scheduled.",
  ],
};

export const wtTime = {
  title: "When Is the Right Time for Wisdom Teeth Removal?",
  paragraphs: [
    "Wisdom teeth are usually easiest to remove between the mid-teens and the early twenties, while the roots are still forming. After age 30, healing tends to be slower and the chance of complications is higher.",
    "That's why an exam in the teenage years is worthwhile, even if nothing hurts yet. Catching a problem early gives you more choice about timing, for example during a school break.",
  ],
};

export const wtExpect = {
  title: "What to Expect During Wisdom Teeth Removal",
  intro: "Wisdom tooth extraction is an outpatient procedure done here in the office. Most removals take under an hour; plan extra time at the office.",
  steps: [
    { icon: "xray", lead: "Exam and X-rays.", text: "Your dentist confirms the position of each tooth and explains the plan and the cost." },
    { icon: "drop", lead: "Anesthesia.", text: "The area is fully numbed. If you're nervous, ask about sedation options when you book." },
    { icon: "tooth", lead: "Removal.", text: "The tooth is removed, sometimes in sections if it's firmly anchored." },
    { icon: "check", lead: "Stitches.", text: "Dissolving stitches are placed where needed. They usually disappear on their own within a week or two." },
  ],
  after: "You'll get any preparation instructions in advance.",
};

export const wtRecovery = {
  title: "Recovery Tips After Wisdom Teeth Removal",
  intro: "The first few days set the pace for healing, so take it easy and follow your aftercare instructions closely.",
  items: [
    { icon: "firstAid", lead: "Bleeding:", text: "bite on gauze as directed and replace it if bleeding continues" },
    { icon: "thermo", lead: "Swelling:", text: "hold an ice pack on the outside of your cheek" },
    { icon: "pill", lead: "Pain relief:", text: "take pain relief as your dentist directs" },
    { icon: "cup", lead: "Eating:", text: "start with clear liquids on the first day, then move to soft foods as you feel ready" },
    { icon: "ban", lead: "Protect the clot:", text: "for the first few days, avoid straws, smoking, alcohol and vigorous rinsing" },
    { icon: "moon", lead: "Rest:", text: "limit vigorous exercise for the first 24 hours" },
  ],
  after:
    "Call the office if bleeding won't stop, if swelling or pain gets worse after the first few days, or if you develop a fever. Our [home care instructions](/patient-information/care-and-comfort/home-instructions/) cover aftercare in more detail, and [tooth extractions](/restorative-dentistry/tooth-extractions/) explains general extraction recovery.",
};

export const wtCost: CostBlock = {
  title: "Wisdom Teeth Removal Cost in Yardley",
  paragraphs: [
    "The cost of wisdom teeth removal depends on how difficult each tooth is to remove and the type of anesthesia used. A fully erupted tooth is simpler to take out than one trapped in the bone. You'll get the cost after your exam and X-rays, before anything is scheduled.",
  ],
  items: [
    {
      lead: "Insurance:",
      text: "the team will help you make the most of your dental insurance. We accept many PPO plans, including Aetna, Cigna PPO, Horizon Blue Cross and Delta Dental; call to verify yours. [Insurance and payment](/patient-information/insurance-payment-options/)",
    },
    { lead: "No insurance:", text: "the $150-a-year membership plan takes 15% off all treatment." },
    {
      lead: "Financing:",
      text: "[CareCredit](/patient-information/carecredit/) is available, with no interest on qualifying purchases of $200 or more paid in full within 6 months, subject to credit approval.",
    },
  ],
};

export const wtFaqs: FaqBlock = {
  title: "Wisdom Teeth FAQs",
  items: [
    {
      question: "What age should wisdom teeth be removed?",
      answer:
        "Wisdom teeth are usually easiest to remove between the mid-teens and the early twenties, while the roots are still developing. After 30, healing tends to be slower and complications are more likely. An exam with X-rays in the teenage years shows whether removal is needed and when.",
    },
    {
      question: "How long does wisdom teeth removal take?",
      answer:
        "Most wisdom tooth removals take under an hour, though it depends on how many teeth come out and how they sit, so plan extra time at the office. Dissolving stitches usually disappear on their own within a week or two. Your dentist will give you a time estimate after your exam.",
    },
    {
      question: "Can I be sedated for wisdom teeth removal?",
      answer:
        "Ask about sedation options when you book. The area is fully numbed for the procedure, and Radiant Smiles @ Floral Vale offers dental sedation options for nervous patients. Your dentist will explain which option suits you, and you'll get any preparation instructions in advance.",
    },
    {
      question: "What should I eat after wisdom teeth removal?",
      answer:
        "Start with clear liquids on the first day, then move to soft foods as you feel ready. Avoid using straws, smoking and alcohol for the first few days, because they can disturb the blood clot that protects the socket while it heals. Follow any extra instructions your dentist gives you.",
    },
  ],
};

export const wtCta: ClosingCta = {
  title: "Book a Wisdom Teeth Exam",
  text: "An exam and X-rays show whether your wisdom teeth need to come out and when. Book a visit for yourself or your teen.",
  sub: ctaNap,
  buttons: ["appointment", "call"],
};

/* ───────────────────────── Periodontal Services ───────────────────────── */

export const psMeta: PageMeta = {
  path: "/restorative-dentistry/periodontal-services/",
  title: "Gum Disease Treatment in Yardley, PA | Radiant Smiles",
  description:
    "Bleeding or receding gums? Gum disease treatment in Yardley, PA: deep cleaning, Arestin, laser therapy and maintenance visits. Call (215) 860-4600.",
};

export const psCrumbs = rdCrumbs("Periodontal Services", psMeta.path);

export const psHero: PageHeroContent = {
  h1: "Gum Disease Treatment in Yardley, PA",
  intro:
    "Gum disease treatment removes the bacteria and tartar that infect your gums and the bone holding your teeth, then keeps the infection under control. At Radiant Smiles @ Floral Vale, gum disease treatment in Yardley is conservative: it starts with non-surgical care such as deep cleaning, and surgery is limited to the areas where it's absolutely necessary.",
  buttons: ["appointment", "call"],
};

export const psProcedureDescription =
  "Gum disease treatment removes the bacteria and tartar that infect your gums and the bone holding your teeth, then keeps the infection under control.";

export const psSigns = {
  title: "Signs of Gum Disease",
  intro: "Gum disease is an infection of the gums that, left untreated, destroys the support around your teeth. It often develops without pain, so these signs are worth acting on:",
  items: [
    { icon: "drop", lead: "Bleeding gums", text: "when you brush or floss" },
    { icon: "alert", lead: "Red, swollen or tender gums", text: "" },
    { icon: "wave", lead: "Bad breath", text: "or a bad taste that won't go away" },
    { icon: "ruler", lead: "Receding gums,", text: "where the gums pull back and teeth look longer" },
    { icon: "tooth", lead: "Loose teeth", text: "or a change in how your teeth fit together when you bite" },
  ],
  sub: {
    title: "Bleeding or receding gums",
    text: "Healthy gums don't usually bleed with normal brushing. Bleeding is often the earliest sign of gum inflammation, and receding gums can show that the disease has started to affect the tissue and bone. Both are reasons to book an exam rather than wait.",
  },
};

export const psCauses = {
  title: "What Causes Gum Disease?",
  intro:
    "Plaque is the main cause of gum disease. When plaque isn't removed, it hardens into tartar below the gum line, and the bacteria in it inflame the gums and break down the tissue that holds your teeth.",
  listIntro: "Some things raise your risk:",
  items: [
    { icon: "ban", text: "Smoking" },
    { icon: "drop", text: "Diabetes" },
    { icon: "wave", text: "Stress" },
    { icon: "moon", text: "Clenching or grinding your teeth" },
    { icon: "pill", text: "Some medications" },
    { icon: "apple", text: "Poor nutrition" },
  ],
  after: "If any of these apply to you, regular checkups are even more important, because early gum disease is easier to treat.",
};

export const psDiagnose = {
  title: "How Gum Disease Is Diagnosed",
  paragraphs: [
    "Your dentist diagnoses gum disease with a gum exam and X-rays. The exam checks your gums for inflammation and tartar and measures the depth of the pockets between your gums and teeth. Deeper pockets, especially those over 3 mm, give bacteria more room to hide and are harder to keep clean at home.",
    "X-rays show whether the bone around your teeth has been affected. Together, these tell your dentist how advanced the disease is and which treatment fits.",
  ],
};

export const psOptions = {
  title: "Periodontal Treatment Options at Radiant Smiles",
  intro:
    "Periodontal disease treatment at Radiant Smiles follows a conservative path. Early gum disease is treated without surgery, and even more advanced cases usually start with non-surgical therapy. That first phase improves the health of the gum tissue and limits how much area, if any, needs surgical care later.",
  deep: {
    title: "Deep cleaning (scaling & root planing)",
    text: "A [deep cleaning](/preventative-care/deep-teeth-cleaning/) removes plaque and tartar from below the gum line, where a regular cleaning doesn't reach.",
    items: [
      {
        lead: "Scaling",
        text: "uses an ultrasonic scaler to clear deposits from the tooth and root surfaces below the gums. Irrigation can deliver an antimicrobial agent into the pockets.",
      },
      { lead: "Root planing", text: "smooths the root surfaces so the gums can heal and bacteria have a harder time settling." },
    ],
    after: "A local anesthetic may be used so you stay comfortable. Some patients also have an antibiotic placed in the deepest pockets at the end of the visit.",
  },
  arestin: {
    title: "Arestin antibiotic therapy",
    text: "[Arestin](/preventative-care/arestin/) is an antibiotic, minocycline, placed directly into gum pockets after a deep cleaning. It works on the bacteria right where the infection sits.",
  },
  laser: {
    title: "Laser gum therapy",
    text: "[Laser gum therapy](/preventative-care/gum-disease-laser-therapy/) uses a dental laser to treat diseased gum tissue. Compared with traditional methods, it can mean less bleeding and swelling, no drill noise or vibration, and a quicker recovery. Often only a light anesthetic spray is needed.",
  },
  surgery: {
    title: "Gum surgery, only where it's needed",
    text: "When non-surgical care isn't enough in a specific area, your dentist may recommend periodontal surgery. Surgery is kept to the areas where it's truly necessary, and your dentist will explain why it's needed, what it involves and the cost before you decide.",
  },
};

export const psMaintenance = {
  title: "Ongoing Periodontal Maintenance",
  paragraphs: [
    "Gum disease can be controlled, but it needs regular follow-up to stay that way. After active treatment, [periodontal maintenance](/preventative-care/periodontal-maintenance/) visits replace routine cleanings, so the pockets can be cleaned and measured and any flare-up is caught early.",
    "Your dentist will recommend how often you should come in, based on how your gums respond. For membership plan members, additional cleanings or periodontal maintenance visits are $75 each.",
  ],
};

export const psCost: CostBlock = {
  title: "Gum Disease Treatment Cost in Yardley",
  paragraphs: [
    "The cost of gum disease treatment depends on how many areas need care, which treatments you need and whether laser therapy or Arestin is part of your plan. Your dentist will give you the cost after the exam, before treatment starts.",
  ],
  items: [
    {
      lead: "Insurance:",
      text: "your PPO plan may pay toward periodontal treatment. We accept many PPO plans, including Aetna, Cigna PPO, Delta Dental and Guardian; call to verify yours. [Insurance and payment](/patient-information/insurance-payment-options/)",
    },
    {
      lead: "No insurance:",
      text: "the $150-a-year membership plan includes two cleanings, exams and X-rays, takes 15% off all treatment and prices periodontal maintenance at $75 a visit.",
    },
    { lead: "Financing:", text: "[CareCredit](/patient-information/carecredit/) can cover treatment over several visits, subject to credit approval." },
  ],
};

export const psFaqs: FaqBlock = {
  title: "Gum Disease Treatment FAQs",
  items: [
    {
      question: "Can gum disease be reversed?",
      answer:
        "Early gum disease can often be reversed with a professional cleaning and good daily brushing and flossing. Once the disease has damaged the bone and deeper tissue, it can't be fully undone, but treatment such as deep cleaning, Arestin and laser therapy can control it. Regular maintenance visits then help keep it from progressing.",
    },
    {
      question: "Does a deep cleaning hurt?",
      answer:
        "A deep cleaning is usually comfortable, because a local anesthetic may be used to numb the area being treated. You may feel some tenderness in your gums for a short time afterward. If you're anxious, tell the team when you book; you can bring headphones and music and ask about sedation options.",
    },
    {
      question: "Do I need a periodontist to treat gum disease?",
      answer:
        "Not always. The dentists at Radiant Smiles @ Floral Vale treat gum disease in the office with deep cleaning, Arestin, laser gum therapy and periodontal maintenance visits. If your gums need care beyond what the office provides, your dentist will tell you and explain your options.",
    },
    {
      question: "How often do I need periodontal maintenance?",
      answer:
        "Your dentist will recommend an interval based on how deep your gum pockets are and how your gums respond to treatment. Maintenance visits clean below the gum line and re-measure the pockets so any change is caught early. For membership plan members, each periodontal maintenance visit is $75.",
    },
    {
      question: "What is Arestin?",
      answer:
        "Arestin is an antibiotic, minocycline, that is placed directly into infected gum pockets, usually after a deep cleaning. Because it goes straight to the site of the infection, it works where the bacteria are. Your dentist will tell you whether Arestin would help your treatment.",
    },
  ],
};

export const psCta: ClosingCta = {
  title: "Get Your Gums Checked",
  text: "Bleeding or receding gums are easier to treat early. Book an exam, and you'll learn what's going on with your gums and what treatment would cost.",
  sub: ctaNap,
  buttons: ["appointment", "call"],
};
