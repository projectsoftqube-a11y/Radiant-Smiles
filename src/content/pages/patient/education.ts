import { napCtaLine, type ClosingCta, type PageHeroContent, type PageMeta } from "../shared";
import { postDate, postPath, posts } from "../blog/hub";
import { piCrumbs } from "./common";

/**
 * Patient Education. Verbatim from 02 Patient Info/04 Resource/Patient Education/02 Content.md
 * The "Latest Guides" block lists the newest blog posts at build time and is hidden while
 * the blog has none (handoff). The old third-party library is not re-embedded.
 */

export const eduMeta: PageMeta = {
  path: "/patient-information/patient-education/",
  title: "Patient Education | Radiant Smiles @ Floral Vale",
  description:
    "Dental health guides from Radiant Smiles @ Floral Vale in Yardley, PA: home care after treatment, everyday oral hygiene and answers to common questions.",
};

export const eduCrumbs = piCrumbs("Patient Education", eduMeta.path);

export const eduHero: PageHeroContent = {
  h1: "Patient Education",
  intro:
    "Good dental health is easier when you understand what's happening in your mouth and why. This page gathers the guides and articles from the team at Radiant Smiles @ Floral Vale in Yardley, PA, so you can read up before a visit or after treatment.",
  buttons: [{ label: "Read the Dental Health Blog", href: "/blog/" }],
};

/** Blog posts for the Latest Guides block (newest first), read from the blog at build time */
export type BlogPostSummary = { title: string; href: string; date: string; summary: string };
export const latestPosts: BlogPostSummary[] = posts.map((post) => ({
  title: post.title,
  href: postPath(post.slug),
  date: postDate(post.date),
  summary: post.excerpt,
}));

export const eduLatest = {
  title: "Latest Guides",
  text: "New articles from our dental health blog appear here as they're published.",
  link: { label: "See all articles on the blog", href: "/blog/" },
};

export const eduStart = {
  title: "Start With These Guides",
  guides: [
    {
      icon: "heart",
      label: "Home care instructions after treatment",
      href: "/patient-information/care-and-comfort/home-instructions/",
      text: ": what to do after an extraction, filling, crown, root canal or cosmetic work.",
    },
    {
      icon: "toothClean",
      label: "Oral hygiene",
      href: "/preventative-care/oral-hygiene/",
      text: ": brushing and flossing habits that protect your teeth and gums between visits.",
    },
    {
      icon: "user",
      label: "Children's dentistry",
      href: "/preventative-care/child-dentistry/",
      text: ": when to book your child's first visit and what happens.",
    },
    {
      icon: "firstAid",
      label: "Emergency dentistry",
      href: "/emergency-dentistry/",
      text: ": what to do about a toothache, a broken tooth or a knocked-out tooth.",
    },
    {
      icon: "clipboard",
      label: "What to expect as a new patient",
      href: "/patient-information/new-patients/",
      text: ": your first visit, step by step.",
    },
  ],
};

/** ItemList for the CollectionPage schema (static links only, handoff 3a) */
export const eduItemList = [
  { name: "Dental Health Blog", path: "/blog/" },
  { name: "Home Care Instructions", path: "/patient-information/care-and-comfort/home-instructions/" },
  { name: "Oral Hygiene", path: "/preventative-care/oral-hygiene/" },
  { name: "Children's Dentistry", path: "/preventative-care/child-dentistry/" },
  { name: "Emergency Dentistry", path: "/emergency-dentistry/" },
  { name: "New Patients", path: "/patient-information/new-patients/" },
];

export const eduCta: ClosingCta = {
  title: "Have a Question About Your Teeth?",
  text: `Ask us at your next visit, or call the office. ${napCtaLine}`,
  buttons: ["appointment", "call"],
};
