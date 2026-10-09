import type { CostBlock } from "../general/common";
import type { ClosingCta, FaqBlock, PageHeroContent, PageMeta } from "../shared";
import { cdCrumbs, ctaNap } from "./common";

/**
 * Smile enhancement: Porcelain Veneers, Teeth Whitening, Dental Bonding, Inlays & Onlays.
 * Verbatim from 05 Cosmetic Dentistry/01 Smile Enhancement/*. No veneer or bonding price is
 * published (handoffs); whitening wording matches /special-offers/.
 */

/* ───────────────────────── Porcelain Veneers ───────────────────────── */

export const veMeta: PageMeta = {
  path: "/cosmetic-dentistry/dental-veneers-dentistry/",
  title: "Porcelain Veneers in Yardley, PA | Radiant Smiles",
  description:
    "Porcelain veneers in Yardley, PA for chipped, stained, small or uneven teeth, each case designed individually. Call (215) 860-4600 to book.",
};

export const veCrumbs = cdCrumbs("Porcelain Veneers", veMeta.path);

const veneerConsult = { label: "Request a Veneer Consultation", href: "/patient-information/scheduling/" };

export const veHero: PageHeroContent = {
  h1: "Porcelain Veneers in Yardley, PA",
  intro:
    "Chipped front tooth, stains that won't whiten, or teeth that look too small or uneven? Porcelain veneers are thin shells of ceramic bonded to the front of your teeth to change their color, shape or size. At Radiant Smiles @ Floral Vale, Dr. Jaspreet Gadria and Dr. Urvishkumar Bhalala design and place porcelain veneers in Yardley, PA.",
  more: [
    "The shade, length and shape of each veneer are matched to your other teeth, and the fit and finish are checked under a high-power dental microscope. Each case is designed individually, starting with a consultation about what you'd like to change.",
  ],
  buttons: [veneerConsult, "call"],
};

/** Plain-text patient quote under the hero buttons (no Review markup) */
export const veQuote = {
  intro: "One patient, on crowns for her front teeth:",
  text: "The dentist was unhappy with the labs first ones so sent them back. Made sure they were perfect",
  author: "Candice C., September 2026",
};

export const veProcedureDescription =
  "Porcelain veneers are thin shells of ceramic bonded to the front of your teeth to change their color, shape or size.";

export const veFix = {
  title: "What Porcelain Veneers Can Fix",
  intro:
    "Porcelain veneers cover the visible front surface of a tooth, so they can correct problems with color, shape and spacing in one treatment:",
  items: [
    { key: "chip", text: "Chipped or broken teeth" },
    { key: "stain", text: "Discoloration that doesn't respond to whitening" },
    { key: "small", text: "Teeth that are small, unusually shaped or pointed" },
    { key: "gap", text: "Gaps between teeth" },
    { key: "crooked", text: "Teeth that look mildly crooked" },
  ],
  after:
    "Veneers are usually placed on the top front six to eight teeth, the ones that show when you smile. If only one tooth stands out, a single veneer can be made to match the teeth beside it. [See our before-and-after gallery](/about-us/before-and-after-gallery/)",
};

export const veRight = {
  title: "Are Veneers Right for You?",
  intro:
    "Veneers suit adults with healthy teeth and gums who want a lasting change to the color or shape of their front teeth. When you see a cosmetic dentist for veneers, the first job is checking the thickness and health of your enamel, because veneers need sound enamel to bond to.",
  listIntro: "A few things to weigh before you decide:",
  items: [
    {
      icon: "alert",
      lead: "It's a permanent choice.",
      text: "Placing porcelain veneers usually means removing a thin layer of enamel, so the treatment can't be reversed.",
    },
    {
      icon: "whiten",
      lead: "Whitening may be enough.",
      text: "If the only issue is mild yellowing, [teeth whitening](/cosmetic-dentistry/teeth-whitening/) costs less and leaves your enamel untouched.",
    },
    {
      icon: "shield",
      lead: "Some problems need other care first.",
      text: "Decay or gum disease is treated before cosmetic work begins.",
    },
    {
      icon: "moon",
      lead: "Habits matter.",
      text: "Biting nails, chewing ice or using your teeth to open packages can chip porcelain. Grinding at night may call for a [custom night guard](/preventative-care/professional-night-guards/).",
    },
  ],
  after: "Not sure whether veneers, bonding or whitening is the right fix? A consultation answers that before you commit to anything.",
  button: veneerConsult,
};

export const veVersus = {
  title: "Porcelain Veneers vs Dental Bonding",
  intro:
    "Porcelain veneers and dental bonding fix many of the same problems; the difference is material, durability and the number of visits.",
  head: ["", "Porcelain veneers", "Dental bonding"],
  rows: [
    ["Material", "Thin ceramic shell, made for each tooth", "Tooth-colored resin sculpted on the tooth"],
    ["Stain resistance", "Resists coffee, tea and cigarette stains", "Can stain over time"],
    ["Strength", "Durable once bonded in place", "Not as strong as enamel; can chip"],
    ["How long it lasts", "Well over a decade with proper care", "Typically three to five years before repair"],
    ["Visits", "More than one: the veneers are custom-made", "Often one visit"],
    ["Effect on the tooth", "A thin layer of enamel is usually removed", "The surface is lightly etched"],
  ],
  after:
    "Bonding is a good fit for one small chip or a quick, lower-cost fix. Veneers suit larger changes across several front teeth. [Compare with dental bonding](/cosmetic-dentistry/dental-bonding/)",
};

export const veSteps = {
  title: "Getting Veneers in Yardley, PA: Step by Step",
  intro:
    "Getting veneers takes more than one visit, because each porcelain shell is custom-made for your tooth. Here is how it works at our office on Floral Vale Boulevard:",
  steps: [
    {
      icon: "chat",
      lead: "Consultation and exam.",
      text: "You tell us what you'd like to change. We examine your teeth and gums, take digital X-rays and check your enamel to confirm veneers are a sound option.",
    },
    {
      icon: "ruler",
      lead: "Design.",
      text: "Your veneers are planned individually: the shade, the length and the shape of each tooth. If you'd like to whiten your other teeth, we do that first so the veneers can be matched to your brighter shade.",
    },
    {
      icon: "layers",
      lead: "Preparation.",
      text: "A thin layer of enamel is removed from the front of each tooth so the veneer sits naturally, and we take precise records of your teeth for the dental lab.",
    },
    {
      icon: "microscope",
      lead: "Placement.",
      text: "Once your veneers are ready, we check the fit and color, then bond them permanently to your teeth with advanced bonding materials. The margins are checked and finished under the microscope.",
    },
  ],
  after: "You'll know how many visits your plan involves before you start.",
};

export const veLast = {
  title: "How Long Do Porcelain Veneers Last?",
  paragraphs: [
    "With proper care, porcelain veneers can brighten your smile for well over a decade. The porcelain itself resists staining, so your veneers keep their color even if you drink coffee or tea.",
    "Veneers are not indestructible. A veneer can chip or come loose after a hard knock or from using your teeth as tools. If one veneer is damaged, it can usually be replaced on its own, without redoing the others.",
  ],
};

export const veCost: CostBlock = {
  title: "Porcelain Veneer Cost & Financing",
  paragraphs: [
    "The cost of porcelain veneers depends on how many teeth you're treating and what each tooth needs. A single veneer to match one tooth costs far less than a full set across your smile. You'll get the cost of your plan after your consultation, before any treatment starts.",
  ],
  items: [
    {
      lead: "Insurance:",
      text: "dental plans usually don't cover veneers placed only for appearance. They may contribute when a tooth is broken or damaged. We accept many PPO plans; call to check yours.",
    },
    {
      lead: "Financing:",
      text: "CareCredit lets you pay for veneers over time, with no interest if paid in full within 6 months on qualifying purchases of $200 or more, subject to credit approval. [CareCredit financing](/patient-information/carecredit/)",
    },
    { lead: "Membership plan:", text: "members pay $150 a year and get 15% off dental treatment." },
  ],
};

export const veCare = {
  title: "Caring for Porcelain Veneers",
  intro: "Caring for porcelain veneers is much like caring for natural teeth, with a few habits to protect the porcelain:",
  items: [
    { icon: "brush", text: "Brush twice a day with a fluoride toothpaste and clean between your teeth daily." },
    { icon: "ban", text: "Don't use your veneers as tools to open packages or bite thread." },
    { icon: "hand", text: "Avoid biting your nails, pens or ice." },
    { icon: "shield", text: "Wear a mouthguard for contact sports, and a night guard if you grind your teeth." },
    { icon: "calendarCheck", text: "Keep up regular checkups and cleanings so we can check the veneers and the gums around them." },
  ],
};

export const veFaqs: FaqBlock = {
  title: "Porcelain Veneer FAQs",
  items: [
    {
      question: "How much are porcelain veneers?",
      answer:
        "The price of porcelain veneers depends on how many teeth are treated and what each tooth needs, so it's set after an exam. At Radiant Smiles @ Floral Vale you get the cost of your plan before treatment starts, and CareCredit financing and our membership plan, with 15% off dental treatment, can help spread or reduce the cost.",
    },
    {
      question: "How long do porcelain veneers last?",
      answer:
        "With proper care, porcelain veneers can last well over a decade. The porcelain resists stains from coffee, tea and cigarettes. Avoiding hard habits such as nail biting, and wearing a night guard if you grind, helps them last. If one veneer is damaged, it can usually be replaced on its own.",
    },
    {
      question: "How do I care for porcelain veneers?",
      answer:
        "Care for porcelain veneers as you would natural teeth: brush twice a day with fluoride toothpaste, clean between your teeth daily and keep regular checkups. Don't use veneers to open packages, avoid biting ice or nails, and wear a mouthguard for contact sports and a night guard if you grind.",
    },
    {
      question: "Are porcelain veneers permanent?",
      answer:
        "Yes. Placing porcelain veneers usually involves removing a thin layer of enamel from the front of each tooth, so the treatment can't be reversed. The teeth will always need a veneer or another restoration. That's why we check your enamel and talk through alternatives, such as bonding or whitening, before you decide.",
    },
    {
      question: "Can veneers be whitened?",
      answer:
        "No. Whitening gel works on natural teeth, not porcelain, so veneers keep the shade they were made in. If you want whiter teeth overall, whiten your natural teeth first, then have your veneers matched to the new shade. Porcelain resists staining well, so the veneers themselves rarely need it.",
    },
    {
      question: "How many veneers will I need?",
      answer:
        "It depends on your goal. A single veneer can fix one chipped or discolored tooth, matched to its neighbors. For a broader change, veneers are usually placed on the top front six to eight teeth, the ones that show when you smile. Your dentist will recommend a number after your consultation.",
    },
  ],
};

export const veCta: ClosingCta = {
  title: "Plan Your Porcelain Veneers in Yardley, PA",
  text: "Start with a consultation: we'll look at your teeth, talk about the smile you want and explain your options, from one veneer to a full set.",
  sub: ctaNap,
  buttons: [veneerConsult, "call"],
};

/* ───────────────────────── Teeth Whitening ───────────────────────── */

export const twMeta: PageMeta = {
  path: "/cosmetic-dentistry/teeth-whitening/",
  title: "Teeth Whitening in Yardley, PA | $100 Off | Radiant Smiles",
  description:
    "Professional teeth whitening in Yardley, PA with custom trays ready in a day or two. Now $100 off the regular $550 price. Call (215) 860-4600.",
};

export const twCrumbs = cdCrumbs("Teeth Whitening", twMeta.path);

export const twHero: PageHeroContent = {
  h1: "Professional Teeth Whitening in Yardley, PA",
  intro:
    "Professional teeth whitening in Yardley, PA at Radiant Smiles @ Floral Vale uses custom-made trays and a whitening gel you wear at home for about 3 to 4 hours a night, for one to two weeks. Your trays are ready in a day or two, and whitening is currently $100 off the regular $550 price.",
  more: [
    "It's a quick, simple way to lift brown, yellow and spotted stains without changing the structure of your teeth. You whiten on your own schedule, with trays made to fit your teeth and a dentist checking your results.",
  ],
  buttons: ["appointment", "call"],
};

export const twProcedureDescription =
  "Professional teeth whitening in Yardley, PA at Radiant Smiles @ Floral Vale uses custom-made trays and a whitening gel you wear at home for about 3 to 4 hours a night, for one to two weeks.";

export const twHow = {
  title: "How Our Take-Home Whitening Works",
  intro:
    "Our whitening system is a set of clear trays made from an impression of your teeth, which you fill with a whitening gel and wear at home. Here is what to expect:",
  steps: [
    {
      icon: "search",
      lead: "A quick check first.",
      text: "We make sure your teeth and gums are healthy enough to whiten and look for fillings, crowns or veneers on your front teeth, since whitening won't change their color.",
    },
    {
      icon: "tooth",
      lead: "Impressions for your trays.",
      text: "We take an impression of your teeth. Your custom trays are ready in a day or two.",
    },
    {
      icon: "moon",
      lead: "Whiten at home.",
      text: "Wear the trays with the whitening gel for about 3 to 4 hours each night, for one to two weeks. Significant whitening usually shows within that time.",
    },
    {
      icon: "camera",
      lead: "See the difference.",
      text: 'At your next appointment we take "after" photos so you can compare.',
    },
  ],
  after: "Once you reach the shade you want, an occasional maintenance treatment with the same trays keeps your smile bright.",
};

export const twTrays = {
  title: "Custom Trays vs Store-Bought Whitening Kits",
  paragraphs: [
    "Custom trays from your dentist fit your teeth closely, so the gel stays on your teeth and away from your gums. One-size strips and trays from the store don't fit anyone exactly.",
    "Over-the-counter whitening products can harm your gums and teeth when they're used without guidance. Whitening products recommended by your dental office are a safer choice, and your dentist can tell you whether whitening will work for your type of staining before you spend anything.",
  ],
};

export const twWho = {
  title: "Who Is Teeth Whitening For?",
  intro:
    "Professional teeth whitening suits most adults with healthy teeth and gums who have brown, yellow or spotted staining on their natural teeth. You can choose to whiten your upper teeth only, or your upper and lower teeth together.",
  listIntro: "Whitening has limits:",
  items: [
    { icon: "layers", lead: "It doesn't change dental work.", text: "Crowns, veneers, fillings and bonding keep their original shade." },
    {
      icon: "drop",
      lead: "Some stains run too deep.",
      text: "For severely stained teeth, [porcelain veneers](/cosmetic-dentistry/dental-veneers-dentistry/) or crowns may give a better result. We'll tell you honestly if that's the case.",
    },
    { icon: "heart", lead: "Health comes first.", text: "Cavities or gum problems are treated before whitening." },
  ],
};

export const twHurt = {
  title: "Does Teeth Whitening Hurt?",
  paragraphs: [
    "Teeth whitening doesn't hurt for most people, but some notice tooth sensitivity while they're whitening. According to the [American Dental Association](https://www.mouthhealthy.org/all-topics-a-z/teeth-whitening), this sensitivity is usually temporary.",
    "If your teeth feel sensitive, tell us. Often the simplest fix is to take a short break, then start again. Because you control how often you wear the trays, it's easy to adjust the pace to suit your teeth.",
  ],
};

export const twLast = {
  title: "Making Your Whitening Results Last",
  intro:
    "Whitening results last longer when you limit the things that stain teeth in the first place. Coffee, tea, red wine and tobacco are the usual culprits. You don't have to give them up, but rinsing with water afterward helps.",
  items: [
    { icon: "refresh", text: "Keep your trays. An occasional maintenance treatment refreshes your shade." },
    { icon: "brush", text: "Brush twice a day and clean between your teeth daily." },
    {
      icon: "calendarCheck",
      text: "Keep up your [teeth cleanings and checkups](/preventative-care/teeth-cleaning-and-check-ups/), which remove surface stains.",
    },
  ],
};

export const twCost: CostBlock = {
  title: "Teeth Whitening Cost in Yardley, PA",
  paragraphs: [
    "Teeth whitening at our Yardley office is currently **$100 off the regular price of $550**. Ask us what's included for your treatment, such as upper teeth only or upper and lower.",
  ],
  items: [
    {
      lead: "Insurance:",
      text: "most dental plans treat whitening as cosmetic and don't cover it. Call us and we'll help you check your plan.",
    },
    {
      lead: "Financing:",
      text: "whitening can qualify for CareCredit's promotional terms: no interest if the balance is paid in full within six months on purchases of $200 or more, subject to credit approval. [CareCredit financing](/patient-information/carecredit/)",
    },
    {
      lead: "Other offers:",
      text: "see our current [special offers](/special-offers/), including the $89 new-patient visit for uninsured patients.",
    },
  ],
  after: ["Thinking about more than whitening? See all our [cosmetic dentistry treatments](/cosmetic-dentistry/)."],
};

export const twFaqs: FaqBlock = {
  title: "Teeth Whitening FAQs",
  items: [
    {
      question: "How much does teeth whitening cost in Yardley?",
      answer:
        "Teeth whitening at Radiant Smiles @ Floral Vale in Yardley, PA is currently $100 off the regular price of $550. Treatment uses custom trays and gel you wear at home. Most dental insurance doesn't cover whitening, but CareCredit offers no interest if paid in full within 6 months on qualifying purchases of $200 or more, subject to credit approval.",
    },
    {
      question: "Does teeth whitening hurt?",
      answer:
        "Teeth whitening isn't painful for most people. Some feel tooth sensitivity while whitening, and the American Dental Association notes this is usually temporary. If it happens, tell us; taking a short break before starting again often helps, and with take-home trays you can easily adjust how often you whiten.",
    },
    {
      question: "How long does professional teeth whitening take?",
      answer:
        'Your custom trays are ready in a day or two. You then wear them with the whitening gel for about 3 to 4 hours each night, for one to two weeks. Significant whitening usually shows within that time, and we take "after" photos at your next appointment to compare.',
    },
    {
      question: "How long do teeth whitening results last?",
      answer:
        "Results vary from person to person and depend mostly on habits. Coffee, tea, red wine and tobacco stain teeth again over time. Keep your custom trays: an occasional maintenance treatment refreshes your shade, and regular cleanings remove new surface stains between treatments.",
    },
    {
      question: "Can I whiten crowns, veneers or fillings?",
      answer:
        "No. Whitening only lightens natural teeth. Crowns, veneers, fillings and bonding keep the shade they were made in, so whitening can leave them looking darker than the teeth around them. If you have dental work on your front teeth, we'll check before you start and talk through options.",
    },
    {
      question: "Is professional teeth whitening safe?",
      answer:
        "Yes, when it's done under a dentist's guidance. We check that your teeth and gums are healthy first, and custom trays keep the gel on your teeth. Over-the-counter products can harm gums and teeth when used without guidance, which is why we recommend whitening with products from your dental office.",
    },
  ],
};

export const twCta: ClosingCta = {
  title: "Book Teeth Whitening in Yardley, PA",
  text: "Book a visit for your whitening impressions and save $100 on professional teeth whitening. Your trays will be ready in a day or two.",
  sub: ctaNap,
  buttons: ["appointment", "call"],
};

/* ───────────────────────── Dental Bonding ───────────────────────── */

export const bdMeta: PageMeta = {
  path: "/cosmetic-dentistry/dental-bonding/",
  title: "Dental Bonding in Yardley, PA | Radiant Smiles",
  description:
    "Dental bonding in Yardley, PA repairs chipped, cracked or discolored teeth with tooth-colored resin, often in one visit. Call (215) 860-4600.",
};

export const bdCrumbs = cdCrumbs("Dental Bonding", bdMeta.path);

export const bdHero: PageHeroContent = {
  h1: "Dental Bonding in Yardley, PA",
  intro:
    "Dental bonding repairs a chipped, cracked, discolored or slightly uneven tooth with tooth-colored resin that is sculpted, trimmed and polished in place. At Radiant Smiles @ Floral Vale, dental bonding in Yardley is often finished in a single visit, making it one of the quickest ways to fix a small flaw in your smile.",
  more: [
    "It's a conservative alternative to porcelain veneers: the tooth surface is only lightly etched, and the resin is shaped by hand to blend with the teeth around it.",
  ],
  buttons: ["appointment", "call"],
};

export const bdProcedureDescription =
  "Dental bonding repairs a chipped, cracked, discolored or slightly uneven tooth with tooth-colored resin that is sculpted, trimmed and polished in place.";

export const bdFixes = {
  title: "What Dental Bonding Fixes",
  intro: "Dental bonding is used to repair small cosmetic problems on individual teeth, especially front teeth:",
  items: [
    { key: "chip", lead: "Chipped teeth:", text: "rebuilds a missing corner or edge." },
    { key: "crack", lead: "Cracked teeth:", text: "covers small cracks in the enamel." },
    { key: "stain", lead: "Discolored teeth:", text: "masks a dark spot or a tooth that is darker than its neighbors." },
    { key: "uneven", lead: "Slightly uneven teeth:", text: "evens out a tooth that is a little short, worn or out of line with the others." },
  ],
  after:
    "For larger changes across several teeth, or stains that need to stay covered for many years, porcelain veneers are usually a better fit. We'll talk you through both.",
};

export const bdProcess = {
  title: "The One-Visit Dental Bonding Process",
  intro: "Dental bonding is often completed in one visit, with no lab work and no waiting for anything to be made. Here's what happens:",
  steps: [
    { icon: "drop", lead: "Prepare the surface.", text: "The surface of the tooth is lightly etched so the resin can grip it." },
    { icon: "brush", lead: "Apply the bonding liquid.", text: "A bonding liquid is painted on to help the resin attach." },
    {
      icon: "hand",
      lead: "Sculpt the resin.",
      text: "Tooth-colored resin is applied and shaped to rebuild the chip, cover the stain or even out the edge.",
    },
    {
      icon: "toothClean",
      lead: "Trim, smooth and polish.",
      text: "The resin is trimmed, smoothed and polished so it looks and feels like part of your tooth.",
    },
  ],
  after:
    "Our dentists use a high-power dental microscope to check the fit and finish of restorations, which helps the edges of the bonding blend in and stay easy to clean.",
};

export const bdVersus = {
  title: "Dental Bonding vs Veneers",
  intro:
    "Dental bonding and porcelain veneers both improve the look of front teeth. Bonding is quicker and more conservative; porcelain veneers last longer and resist stains better.",
  head: ["", "Dental bonding", "Porcelain veneers"],
  rows: [
    ["Suits", "One or a few small fixes", "Larger changes across several front teeth"],
    ["Visits", "Often one", "More than one; veneers are custom-made"],
    ["Tooth preparation", "Surface lightly etched", "A thin layer of enamel is usually removed"],
    ["Stain resistance", "Resin can stain over time", "Porcelain resists coffee, tea and cigarette stains"],
    ["How long it lasts", "Typically three to five years before repair", "Well over a decade with proper care"],
  ],
  after:
    "Not sure which you need? You can start with bonding for one chipped tooth and consider veneers later for a bigger change. [Learn about porcelain veneers](/cosmetic-dentistry/dental-veneers-dentistry/)",
};

export const bdLast = {
  title: "How Long Does Dental Bonding Last?",
  intro:
    "Dental bonding typically lasts three to five years before it needs repair. Bonding resin is not as strong as natural enamel, so it can stain, chip or break over time.",
  listIntro: "You can help your bonding last longer:",
  items: [
    { icon: "ban", text: "Avoid biting nails, pens or ice, and don't use your teeth to open packages." },
    { icon: "cup", text: "Limit coffee, tea, red wine and tobacco, which can stain the resin." },
    {
      icon: "brush",
      text: "Brush twice a day, clean between your teeth daily and keep your regular checkups, where we can polish or touch up the bonding.",
    },
  ],
  after: "When bonding wears, it can usually be repaired or replaced in a similar short visit.",
};

export const bdCost: CostBlock = {
  title: "Dental Bonding Cost",
  paragraphs: [
    "The cost of dental bonding depends on how many teeth are treated and how much resin each repair needs. Because there's no lab work and it's often done in one visit, bonding usually costs less than porcelain veneers. You'll know the cost before we start.",
  ],
  items: [
    {
      lead: "Insurance:",
      text: "plans usually don't cover bonding done only for appearance, but they may cover part of the cost when bonding repairs a chipped or broken tooth. We accept many PPO plans; call to check yours. [Insurance and payment options](/patient-information/insurance-payment-options/)",
    },
    {
      lead: "Financing:",
      text: "CareCredit offers no interest if paid in full within 6 months on qualifying purchases of $200 or more, subject to credit approval.",
    },
    { lead: "Membership plan:", text: "$150 a year, including 15% off dental treatment." },
  ],
};

export const bdFaqs: FaqBlock = {
  title: "Dental Bonding FAQs",
  items: [
    {
      question: "How long does dental bonding last?",
      answer:
        "Dental bonding typically lasts three to five years before it needs repair. The resin isn't as strong as natural enamel, so it can stain, chip or break over time. Avoiding hard habits like biting ice or nails, limiting staining drinks and keeping regular checkups all help your bonding last longer.",
    },
    {
      question: "Is dental bonding done in one visit?",
      answer:
        "Often, yes. Because the resin is shaped directly on your tooth, there's nothing to send to a lab. The tooth is lightly etched, a bonding liquid is applied, and the resin is sculpted, trimmed and polished in the same appointment. Several teeth, or more complex repairs, may need more time.",
    },
    {
      question: "Should I choose dental bonding or veneers?",
      answer:
        "Choose bonding for one or a few small fixes, such as a chipped edge or a dark spot, when you want a quick, lower-cost repair. Porcelain veneers suit larger changes across several front teeth and last longer, but usually involve removing a thin layer of enamel. Your dentist will explain which fits your goals.",
    },
    {
      question: "Does insurance cover dental bonding?",
      answer:
        "It depends on why you need it. Insurance plans usually don't cover bonding done only to improve appearance, but may cover part of the cost when bonding repairs a chipped or broken tooth. Radiant Smiles @ Floral Vale accepts many PPO plans; call (215) 860-4600 to check what your plan covers.",
    },
    {
      question: "Can dental bonding be whitened?",
      answer:
        "No. Whitening gel lightens natural teeth, not bonding resin. If you'd like whiter teeth as well as bonding, whiten first, then have the bonding matched to your new shade. If existing bonding no longer matches after whitening, it can be replaced to blend in with your brighter teeth.",
    },
  ],
};

export const bdCta: ClosingCta = {
  title: "Book Dental Bonding in Yardley",
  text: "Call or book online, and we'll look at the tooth, explain whether bonding is the right fix and tell you what it costs.",
  sub: ctaNap,
  buttons: ["appointment", "call"],
};

/* ───────────────────────── Inlays & Onlays ───────────────────────── */

export const ioMeta: PageMeta = {
  path: "/cosmetic-dentistry/inlays-onlays/",
  title: "Inlays & Onlays in Yardley, PA | Radiant Smiles",
  description:
    "Inlays and onlays in Yardley, PA: porcelain, gold or composite repairs for back teeth too damaged for a filling, in two visits. Call (215) 860-4600.",
};

export const ioCrumbs = cdCrumbs("Inlays & Onlays", ioMeta.path);

export const ioHero: PageHeroContent = {
  h1: "Inlays & Onlays in Yardley, PA",
  intro:
    "Inlays and onlays are custom-made restorations that repair a back tooth when the damage is too large for a filling but the tooth doesn't need a full crown. At Radiant Smiles @ Floral Vale, we place inlays and onlays in Yardley in porcelain, gold or composite resin over two appointments.",
  more: [
    "Because only the damaged part of the tooth is replaced, more of your natural tooth is kept than with a crown. Porcelain matches the color of your teeth, so the repair is hard to spot.",
  ],
  buttons: ["appointment", "call"],
};

export const ioProcedureDescription =
  "Inlays and onlays are custom-made restorations that repair a back tooth when the damage is too large for a filling but the tooth doesn't need a full crown.";

export const ioCompare = {
  title: "Inlay vs Onlay vs Crown",
  intro:
    "An inlay fills the center of a tooth's chewing surface, between the cusps; an onlay also covers one or more cusps; a crown covers the whole visible tooth. The right choice depends on how much healthy tooth is left.",
  head: ["", "What it covers", "When it's used"],
  rows: [
    ["[Filling](/restorative-dentistry/dental-fillings/)", "A small area of decay or damage", "Small cavities, chips and cracks"],
    ["Inlay", "The chewing surface inside the cusp tips", "Damage too large for a filling, cusps still sound"],
    ["Onlay", "The chewing surface plus one or more cusps", "Larger damage that includes a cusp"],
    ["[Crown](/restorative-dentistry/dental-crowns/)", "The entire visible tooth", "A weak, cracked or heavily restored tooth"],
  ],
  after:
    "A dental onlay is sometimes called a partial crown, because it covers part of the tooth's top without reshaping the whole tooth.",
};

export const ioWhen = {
  title: "When Is an Inlay or Onlay the Right Choice?",
  intro:
    "An inlay or onlay is usually recommended when a large part of a back tooth's biting surface is damaged, too much for a regular filling. Common reasons include:",
  items: [
    { key: "cavity", text: "A large cavity on the chewing surface of a molar or premolar" },
    { key: "filling", text: "An old, large filling that has broken down and needs replacing" },
    { key: "cusp", text: "A cracked or chipped cusp on an otherwise healthy tooth" },
  ],
  after:
    "Your dentist will examine the tooth and take digital X-rays before recommending a filling, an inlay, an onlay or a crown.",
};

export const ioMaterials = {
  title: "Porcelain, Gold or Composite",
  intro: "Inlays and onlays can be made from three materials, and your dentist will help you choose:",
  items: [
    { key: "porcelain", lead: "Porcelain:", text: "matches the color of your teeth and is an increasingly popular choice." },
    { key: "gold", lead: "Gold:", text: "a traditional option for back teeth, where appearance may matter less." },
    { key: "composite", lead: "Composite resin:", text: "a tooth-colored resin material." },
  ],
  after: "Each is bonded to the damaged area of the tooth.",
};

export const ioVisits = {
  title: "The Two-Visit Process",
  intro: "Inlays and onlays take two appointments, because each one is custom-made by a dental lab to fit your tooth.",
  visits: [
    {
      label: "First visit",
      steps: [
        { icon: "toothClean", text: "The decay or old filling is removed and the tooth is prepared." },
        { icon: "tooth", text: "An impression of the tooth is taken and sent to the lab." },
        { icon: "shield", text: "A temporary sealant protects the tooth while your restoration is made." },
      ],
    },
    {
      label: "Second visit",
      steps: [
        { icon: "close", text: "The temporary sealant is removed." },
        { icon: "search", text: "Your dentist checks that the inlay or onlay fits correctly." },
        { icon: "check", text: "It is bonded to the tooth with a high-strength resin and polished smooth." },
      ],
    },
  ],
  after:
    "Our dentists use a high-power dental microscope to check the fit and finish of restorations, so the edges seal closely against your tooth.",
};

export const ioLast = {
  title: "How Long Do Inlays & Onlays Last?",
  paragraphs: [
    "Inlays and onlays typically last from 10 to 30 years. How long yours lasts depends on the material, where it sits in your mouth, your bite and your daily care.",
    "To protect your inlay or onlay, brush twice a day, clean between your teeth daily and keep regular checkups. If you grind your teeth at night, ask about a [custom night guard](/preventative-care/professional-night-guards/).",
  ],
};

export const ioCost: CostBlock = {
  title: "Cost & Insurance",
  paragraphs: [
    "The cost of an inlay or onlay depends on the material and the size of the restoration. Because inlays and onlays repair damaged teeth, dental insurance often covers part of the cost; coverage depends on your plan.",
    "We accept many PPO plans and offer CareCredit financing, subject to credit approval. Call (215) 860-4600 and we'll help you check your coverage. [Insurance and payment options](/patient-information/insurance-payment-options/)",
  ],
};

export const ioFaqs: FaqBlock = {
  title: "Inlay & Onlay FAQs",
  items: [
    {
      question: "What is the difference between an inlay and an onlay?",
      answer:
        "An inlay sits inside the cusps, or raised points, of a back tooth and fills the center of the chewing surface. An onlay is larger and covers one or more of the cusps as well. Both are custom-made in porcelain, gold or composite resin and bonded to the tooth.",
    },
    {
      question: "How long do inlays and onlays last?",
      answer:
        "Inlays and onlays typically last from 10 to 30 years. The lifespan depends on the material, the size of the restoration, your bite and how well you care for your teeth. Brushing twice a day, cleaning between teeth and keeping regular checkups all help them last.",
    },
    {
      question: "Is an onlay better than a crown?",
      answer:
        "Neither is better in every case. An onlay keeps more of your natural tooth, because only the damaged part is replaced. A crown covers the whole tooth and is the stronger choice when the tooth is badly weakened or cracked. Your dentist will recommend one after examining the tooth.",
    },
    {
      question: "How many visits does an inlay or onlay take?",
      answer:
        "Two. At the first visit the damage is removed, the tooth is prepared, an impression goes to the lab and a temporary sealant protects the tooth. At the second visit the dentist checks the fit, then bonds the inlay or onlay in place with a high-strength resin and polishes it.",
    },
  ],
};

export const ioCta: ClosingCta = {
  title: "Book Inlays & Onlays in Yardley",
  text: "If a back tooth is broken, or an old filling is failing, call or book online. We'll examine the tooth and explain whether a filling, inlay, onlay or crown is the right repair.",
  sub: ctaNap,
  buttons: ["appointment", "call"],
};
