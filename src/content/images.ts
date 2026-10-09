import type { StaticImageData } from "next/image";
import drGadriaImg from "@/assets/images/dr-jaspreet-gadria-portrait.jpg";
import familyImg from "@/assets/images/home-family-child-checkup.jpg";
import whiteningAfterImg from "@/assets/images/gallery-whitening-after.jpg";
import whiteningBeforeImg from "@/assets/images/gallery-whitening-before.jpg";
import familyPillImg from "@/assets/images/home-family-pill-patient.jpg";
import heroImg from "@/assets/images/home-hero-patient-mirror.jpg";
import npHeroImg from "@/assets/images/new-patients-hero-welcome.jpg";
import cosmeticImg from "@/assets/images/home-services-cosmetic-smile.jpg";
import denturesImg from "@/assets/images/home-services-dentures-smile.jpg";
import gumImg from "@/assets/images/home-services-gum-care.jpg";
import preventiveImg from "@/assets/images/home-services-preventive-cleaning.jpg";
import restorativeImg from "@/assets/images/home-services-restorative-consult.jpg";
import techCbctImg from "@/assets/images/home-tech-cbct.jpg";
import techScanImg from "@/assets/images/home-tech-digital-scan.jpg";
import techCameraImg from "@/assets/images/home-tech-intraoral-camera.jpg";
import techLaserImg from "@/assets/images/home-tech-laser.jpg";
import techMicroscopeImg from "@/assets/images/home-tech-microscope.jpg";
import techXrayImg from "@/assets/images/home-tech-xray.jpg";

/**
 * Image registry. Every photo on the site is listed here with its source and licence,
 * so the record survives after the person who downloaded it moves on.
 *
 * Sourcing rules (CLAUDE.md): no AI-generated or retouched images. Generic photos come
 * from free stock (Pexels licence: free for commercial use, no attribution required).
 * Stock photos are never presented as the practice's team, office or patient results.
 * The old site's Shutterstock files are not reused: their licence most likely belonged to the
 * old web vendor (the practice's answer, 9 Oct 2026). The blog posts use the site's own
 * Pexels photos until the practice supplies its own.
 *
 * `src: null` means the slot waits for a real photo; the page shows a labelled
 * "to confirm" placeholder there.
 */

export type SiteImage = {
  src: StaticImageData | null;
  alt: string;
  /** Placeholder label shown until the file exists */
  brief: string;
  /** CSS object-position for art-directed crops */
  position?: string;
  source: {
    provider: "pexels" | "practice" | "freepik";
    id?: string;
    url?: string;
    author?: string;
    licence?: string;
    downloaded?: string;
  };
};

const pexels = (id: string, url: string, author: string) => ({
  provider: "pexels" as const,
  id,
  url,
  author,
  licence: "Pexels License (free commercial use)",
  downloaded: "2026-10-07",
});

export const images = {
  homeHero: {
    src: heroImg,
    alt: "Smiling woman in a dental chair checking her teeth in a hand mirror",
    brief: "Hero: happy patient in the chair",
    position: "62% 40%",
    source: pexels("6627574", "https://www.pexels.com/photo/smiling-woman-in-dentist-chair-looking-in-mirror-6627574/", "Karola G"),
  },
  npHero: {
    src: npHeroImg,
    alt: "Smiling patient in a dental chair while a dentist shows a model of teeth",
    brief: "New Patients hero: welcoming first visit",
    // Tall arch: keep the patient's face and the dentist in the window
    position: "40% 78%",
    source: {
      provider: "freepik",
      id: "2887088",
      url: "https://www.freepik.com/free-photo/happy-female-sitting-dental-chair-front-dentist-holding-teeth-model_2887088.htm",
      author: "Freepik",
      licence: "Freepik / Magnific stock (free licence via the practice's Premium account; 40 credits), user-approved 8 Oct 2026. Stock: not the practice's own office or team",
      downloaded: "2026-10-08",
    },
  },
  homeFamily: {
    src: familyImg,
    alt: "Young girl giving a thumbs up beside her dentist after a checkup",
    brief: "Family dentistry: child at a checkup",
    // Shown in a wide, short pill: keep both faces (dentist and child) in the window
    position: "50% 27%",
    source: pexels("12917374", "https://www.pexels.com/photo/dentist-and-her-patient-posing-at-the-camera-12917374/", "iam luisao"),
  },
  homeFamilyPill: {
    src: familyPillImg,
    alt: "",
    brief: "Family heading: smiling adult patient in the chair",
    position: "35% 18%",
    source: pexels("3845550", "https://www.pexels.com/photo/cheerful-ethnic-man-sitting-in-dental-chair-in-modern-dentist-office-3845550/", "Anna Shvets"),
  },
  servicePreventive: {
    src: preventiveImg,
    alt: "Hygienist checking a smiling patient's teeth during a cleaning",
    brief: "Preventive care",
    position: "50% 40%",
    source: pexels("3845653", "https://www.pexels.com/photo/3845653/", "Anna Shvets"),
  },
  serviceGum: {
    src: gumImg,
    alt: "Dentist wearing magnifying loupes treating a patient's gums",
    brief: "Gum care",
    position: "45% 30%",
    source: pexels("12745979", "https://www.pexels.com/photo/dentist-with-patient-12745979/", "Esma Karagoz"),
  },
  serviceRestorative: {
    src: restorativeImg,
    alt: "Dentist talking with a patient seated in a bright treatment room",
    brief: "Restorative dentistry",
    position: "60% 45%",
    source: pexels("3845983", "https://www.pexels.com/photo/cheerful-stomatologist-talking-with-patient-sitting-in-dental-chair-3845983/", "Anna Shvets"),
  },
  serviceDentures: {
    src: denturesImg,
    alt: "Smiling senior woman with a confident smile",
    brief: "Dentures",
    position: "50% 72%",
    source: pexels("12644996", "https://www.pexels.com/photo/portrait-of-smiling-elderly-woman-12644996/", "BOOM Photography"),
  },
  serviceCosmetic: {
    src: cosmeticImg,
    alt: "Woman with a bright, natural smile against a sky-blue background",
    brief: "Cosmetic dentistry",
    position: "40% 45%",
    source: pexels("3762400", "https://www.pexels.com/photo/smiling-woman-with-eyes-closed-3762400/", "Shiny Diamond"),
  },
  techMicroscope: {
    src: techMicroscopeImg,
    alt: "Dentist looking through a dental microscope during treatment",
    brief: "Dental microscope",
    position: "50% 35%",
    source: pexels("3845748", "https://www.pexels.com/photo/dental-clinic-3845748/", "Anna Shvets"),
  },
  techCbct: {
    src: techCbctImg,
    alt: "3D scan of a patient's teeth and jaw on a computer screen",
    brief: "Cone beam CT",
    position: "50% 40%",
    source: pexels("6502041", "https://www.pexels.com/photo/xray-image-of-teeth-on-the-screen-6502041/", "cottonbro studio"),
  },
  techScan: {
    src: techScanImg,
    alt: "Dentist reviewing a digital image of a patient's teeth on a tablet",
    brief: "Digital impressions",
    position: "55% 45%",
    source: pexels("4270093", "https://www.pexels.com/photo/man-in-gray-scrub-suit-holding-white-tablet-computer-4270093/", "Cedric Fauntleroy"),
  },
  techXray: {
    src: techXrayImg,
    alt: "Dentist reviewing digital dental X-rays on a monitor",
    brief: "Digital X-rays",
    position: "45% 45%",
    source: pexels("6502029", "https://www.pexels.com/photo/a-dentist-explaining-dental-results-6502029/", "cottonbro studio"),
  },
  techLaser: {
    src: techLaserImg,
    alt: "Dental instrument used for a gentle soft-tissue procedure",
    brief: "Dental lasers",
    position: "50% 50%",
    source: pexels("4687254", "https://www.pexels.com/photo/a-person-holding-dental-equipment-4687254/", "Polina Zimmerman"),
  },
  techCamera: {
    src: techCameraImg,
    alt: "Dentist showing a patient an enlarged image of her teeth on a tablet",
    brief: "Intraoral camera",
    position: "50% 45%",
    source: pexels("4269204", "https://www.pexels.com/photo/a-dentist-showing-a-dental-x-ray-to-a-patient-4269204/", "Cedric Fauntleroy"),
  },
  drGadria: {
    src: drGadriaImg,
    alt: "Dr. Jaspreet Gadria at Radiant Smiles @ Floral Vale in Yardley, PA",
    brief: "Dr. Gadria headshot",
    // Tall tooth-shaped frame: keep her face centred in the crown
    position: "64% 26%",
    source: {
      provider: "practice",
      url: "https://www.radiant-smiles.com/wp-content/uploads/sites/7463/2025/11/Dr-gadria-Main.png",
      licence: "Practice's own photo (current website)",
      downloaded: "2026-10-06",
    },
  },
  galleryWhiteningBefore: {
    src: whiteningBeforeImg,
    alt: "Before teeth whitening at Radiant Smiles @ Floral Vale, Yardley PA",
    brief: "Whitening case: before",
    position: "50% 50%",
    source: {
      provider: "practice",
      url: "https://www.radiant-smiles.com/wp-content/uploads/sites/7463/2025/12/before-after-sample.webp",
      licence: "Practice's own gallery photo (current website, before-and-after page); added at the user's request, 8 Oct 2026",
      downloaded: "2026-10-08",
    },
  },
  galleryWhiteningAfter: {
    src: whiteningAfterImg,
    alt: "After teeth whitening at Radiant Smiles @ Floral Vale, Yardley PA",
    brief: "Whitening case: after",
    position: "50% 50%",
    source: {
      provider: "practice",
      url: "https://www.radiant-smiles.com/wp-content/uploads/sites/7463/2025/12/before-after-sample2.webp",
      licence: "Practice's own gallery photo (current website, before-and-after page); added at the user's request, 8 Oct 2026",
      downloaded: "2026-10-08",
    },
  },
  drBhalala: {
    src: null,
    alt: "Dr. Urvishkumar Bhalala at Radiant Smiles @ Floral Vale in Yardley, PA",
    brief: "Headshot to confirm: the current site shows a \"Coming Soon\" silhouette",
    source: { provider: "practice" },
  },
  blogWelcomeToYourDentistInYardley: {
    src: restorativeImg,
    alt: "Dentist talking with a patient seated in a bright treatment room",
    brief: "Blog post image: Welcome To Your Dentist In Yardley",
    position: "60% 45%",
    // Same Pexels photo as serviceRestorative (the old site's blog images are not carried over)
    source: pexels("3845983", "https://www.pexels.com/photo/cheerful-stomatologist-talking-with-patient-sitting-in-dental-chair-3845983/", "Anna Shvets"),
  },
  blogWhatToExpectWithTeethWhiteningInYardley: {
    src: cosmeticImg,
    alt: "Woman with a bright, natural smile against a sky-blue background",
    brief: "Blog post image: What To Expect With Teeth Whitening In Yardley",
    position: "40% 45%",
    // Same Pexels photo as serviceCosmetic (the old site's blog images are not carried over)
    source: pexels("3762400", "https://www.pexels.com/photo/smiling-woman-with-eyes-closed-3762400/", "Shiny Diamond"),
  },
  blogAffordableDentistInMyAreaYardley: {
    src: familyImg,
    alt: "Young girl giving a thumbs up beside her dentist after a checkup",
    brief: "Blog post image: Affordable Dentist In My Area Yardley",
    position: "50% 27%",
    // Same Pexels photo as homeFamily (the old site's blog images are not carried over)
    source: pexels("12917374", "https://www.pexels.com/photo/dentist-and-her-patient-posing-at-the-camera-12917374/", "iam luisao"),
  },
  blogAffordableToothacheReliefTreatmentNearMeYardley: {
    src: techXrayImg,
    alt: "Dentist reviewing digital dental X-rays on a monitor",
    brief: "Blog post image: Affordable Toothache Relief Treatment Near Me Yardley",
    position: "45% 45%",
    // Same Pexels photo as techXray (the old site's blog images are not carried over)
    source: pexels("6502029", "https://www.pexels.com/photo/a-dentist-explaining-dental-results-6502029/", "cottonbro studio"),
  },
  blogGeneralDentalCareNearMeInYardley: {
    src: preventiveImg,
    alt: "Hygienist checking a smiling patient's teeth during a cleaning",
    brief: "Blog post image: General Dental Care Near Me In Yardley",
    position: "50% 40%",
    // Same Pexels photo as servicePreventive (the old site's blog images are not carried over)
    source: pexels("3845653", "https://www.pexels.com/photo/3845653/", "Anna Shvets"),
  },
  blogGeneralDentalExamInYardley: {
    src: techCameraImg,
    alt: "Dentist showing a patient an enlarged image of her teeth on a tablet",
    brief: "Blog post image: General Dental Exam In Yardley",
    position: "50% 45%",
    // Same Pexels photo as techCamera (the old site's blog images are not carried over)
    source: pexels("4269204", "https://www.pexels.com/photo/a-dentist-showing-a-dental-x-ray-to-a-patient-4269204/", "Cedric Fauntleroy"),
  },
  blogPreventiveDentalTreatmentsNearMeInYardley: {
    src: familyPillImg,
    alt: "Smiling man sitting in a dental chair in a modern dental office",
    brief: "Blog post image: Preventive Dental Treatments Near Me In Yardley",
    position: "35% 18%",
    // Same Pexels photo as homeFamilyPill (the old site's blog images are not carried over)
    source: pexels("3845550", "https://www.pexels.com/photo/cheerful-ethnic-man-sitting-in-dental-chair-in-modern-dentist-office-3845550/", "Anna Shvets"),
  },
  blogNaturalLookingDentalCrownsInYardley: {
    src: techScanImg,
    alt: "Dentist reviewing a digital image of a patient's teeth on a tablet",
    brief: "Blog post image: Natural Looking Dental Crowns In Yardley",
    position: "55% 45%",
    // Same Pexels photo as techScan (the old site's blog images are not carried over)
    source: pexels("4270093", "https://www.pexels.com/photo/man-in-gray-scrub-suit-holding-white-tablet-computer-4270093/", "Cedric Fauntleroy"),
  },
  blogDentalImplantsAssociatedCostsInYardley: {
    src: denturesImg,
    alt: "Smiling senior woman with a confident smile",
    brief: "Blog post image: Dental Implants Associated Costs In Yardley",
    position: "50% 72%",
    // Same Pexels photo as serviceDentures (the old site's blog images are not carried over)
    source: pexels("12644996", "https://www.pexels.com/photo/portrait-of-smiling-elderly-woman-12644996/", "BOOM Photography"),
  },
  blogBestCandidateForDentalImplantsInYardley: {
    src: techCbctImg,
    alt: "3D scan of a patient's teeth and jaw on a computer screen",
    brief: "Blog post image: Best Candidate For Dental Implants In Yardley",
    position: "50% 40%",
    // Same Pexels photo as techCbct (the old site's blog images are not carried over)
    source: pexels("6502041", "https://www.pexels.com/photo/xray-image-of-teeth-on-the-screen-6502041/", "cottonbro studio"),
  },
} satisfies Record<string, SiteImage>;

export type ImageKey = keyof typeof images;
