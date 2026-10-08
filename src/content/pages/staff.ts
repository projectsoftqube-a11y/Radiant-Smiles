import type { StaticImageData } from "next/image";
import type { ImageKey } from "@/content/images";
import type { LinkItem } from "./home";
import type { ClosingCta, PageHeroContent, PageMeta } from "./shared";

/**
 * Meet the Staff. Copy verbatim from docs/seo-content/01 Core/02 About/Meet the Staff/02 Content.md.
 */

export const staffMeta: PageMeta = {
  path: "/about-us/meet-the-staff/",
  title: "Meet the Radiant Smiles Yardley Team | Floral Vale",
  description:
    "Meet the Radiant Smiles Yardley team: the hygienists, dental assistants and front-desk staff who look after patients at our Floral Vale office.",
};

export const staffHero: PageHeroContent = {
  h1: "Meet the Radiant Smiles Yardley Team",
  intro:
    "The Radiant Smiles Yardley team is the group of hygienists, dental assistants and front-desk staff who work alongside Dr. Urvishkumar Bhalala and Dr. Jaspreet Gadria at 117 Floral Vale Boulevard. They are the people you'll talk to on the phone, see at your cleaning and sit with during treatment. Their aim is simple: a visit that feels as quick and calm as it can be.",
  buttons: ["call"],
};

export const staffTeam = {
  title: "The Radiant Smiles Yardley Team Behind Your Visit",
  text: "Every visit is a team effort, from the first phone call to the follow-up.",
};

/**
 * Team members, shown in the order hygienists, dental assistants, front desk. Empty until
 * the practice supplies names, roles, photos and each person's written OK (handoff): no
 * placeholder cards, initials, silhouettes, stock photos or invented names.
 */
export type TeamMember = {
  name: string;
  role: "Dental Hygienist" | "Dental Assistant" | "Front Desk";
  photo: StaticImageData;
  /** Optional one line in their own words */
  line?: string;
};

export const teamMembers: TeamMember[] = [];

/**
 * The two dentists lead the team grid (user request, 8 Oct 2026). Facts from their bio
 * pages; Dr. Bhalala shows the logo until his headshot arrives.
 */
export const staffDentists: { name: string; image: ImageKey; line: string; link: LinkItem }[] = [
  {
    name: "Dr. Urvishkumar Bhalala, DMD",
    image: "drBhalala",
    line: "Temple University Kornberg School of Dentistry",
    link: { label: "Read Dr. Bhalala's bio", href: "/about-us/dr-urvishkumar-bhalala/" },
  },
  {
    name: "Dr. Jaspreet Gadria, DMD",
    image: "drGadria",
    line: "DMD with high honors, Temple · English & Punjabi",
    link: { label: "Read Dr. Gadria's bio", href: "/about-us/dr-jaspreet-gadria-dmd/" },
  },
];

export const staffRoles = [
  {
    id: "hygienists",
    icon: "toothClean",
    title: "Our Hygienists",
    short: "Hygienists",
    text: "Your hygienist looks after much of your preventive care. At a routine visit that usually means a professional cleaning, any X-rays you're due for, and tips for brushing and flossing that fit your mouth. If your gums need more attention, you may see your hygienist for a deep cleaning or periodontal maintenance visits.",
    link: { label: "What happens at a cleaning & check-up", href: "/preventative-care/teeth-cleaning-and-check-ups/" },
  },
  {
    id: "dental-assistants",
    icon: "mirror",
    title: "Our Dental Assistants",
    short: "Dental assistants",
    text: "Dental assistants work chairside with Dr. Bhalala and Dr. Gadria during fillings, crowns, root canals and other treatment. They prepare the room and instruments, help keep you comfortable, and are a good person to tell if you need a break.",
    link: null,
  },
  {
    id: "front-desk",
    icon: "calendarCheck",
    title: "Our Front Desk",
    short: "Front desk",
    text: "The front desk team books your appointments, including Saturday morning visits, and helps you with the paperwork side of dentistry. Ask them to verify your PPO plan, explain the in-office membership plan or walk you through CareCredit before your visit.",
    link: { label: "Insurance & payment options", href: "/patient-information/insurance-payment-options/" },
  },
] as const;

export const staffCta: ClosingCta = {
  title: "Come Meet Us in Person",
  text: "Call (215) 860-4600 or request an appointment online. Want to know more about the practice first? Read [about Radiant Smiles @ Floral Vale](/about-us/).",
};

export const staffCrumbs = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us/" },
  { name: "Meet the Staff", path: "/about-us/meet-the-staff/" },
];
