/**
 * Practice facts: the single source for NAP, hours, offers, plans and payment.
 * The footer, the schema and every page read from here.
 * Source: docs/seo-content/00 Reference/00 Fact Sheet.md (current site crawled 7 Oct 2026).
 * Items marked `toConfirm` render with a visible "to confirm" tag on staging.
 */

export const SITE_URL = "https://www.radiant-smiles.com";

export const practice = {
  name: "Radiant Smiles @ Floral Vale",
  tagline: "Family, Cosmetic, & Restorative Dentistry",
  address: {
    street: "117 Floral Vale Boulevard",
    city: "Yardley",
    region: "PA",
    postalCode: "19067",
    country: "US",
    /** Lower Makefield Township, Bucks County */
    township: "Lower Makefield Township",
    county: "Bucks County",
  },
  phone: {
    display: "(215) 860-4600",
    href: "tel:+12158604600",
    schema: "+1-215-860-4600",
  },
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=117+Floral+Vale+Boulevard+Yardley+PA+19067",
  mapEmbedUrl: "https://www.google.com/maps?q=117+Floral+Vale+Boulevard,+Yardley,+PA+19067&output=embed",
} as const;

/** One line, exactly as it must match the Google Business Profile (handoff). */
export const napLine = `${practice.name}, ${practice.address.street}, ${practice.address.city}, ${practice.address.region} ${practice.address.postalCode}, ${practice.phone.display}`;

export type DayHours = {
  day: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
  short: string;
  /** 24h "HH:MM", or null when closed */
  opens: string | null;
  closes: string | null;
  /** As printed on the page */
  label: string;
  toConfirm?: string;
};

export const hours: DayHours[] = [
  { day: "Monday", short: "Mon", opens: "08:00", closes: "17:00", label: "8:00 am – 5:00 pm" },
  // Tuesday confirmed as 8 am – 5 pm by the user (7 Oct 2026); the old site's "5:00 AM" was a typo
  { day: "Tuesday", short: "Tue", opens: "08:00", closes: "17:00", label: "8:00 am – 5:00 pm" },
  { day: "Wednesday", short: "Wed", opens: "09:00", closes: "18:00", label: "9:00 am – 6:00 pm" },
  { day: "Thursday", short: "Thu", opens: "09:00", closes: "18:00", label: "9:00 am – 6:00 pm" },
  { day: "Friday", short: "Fri", opens: "08:00", closes: "14:00", label: "8:00 am – 2:00 pm" },
  { day: "Saturday", short: "Sat", opens: "08:00", closes: "14:00", label: "8:00 am – 2:00 pm" },
  { day: "Sunday", short: "Sun", opens: null, closes: null, label: "Closed" },
];

export const paymentMethods = ["Cash", "Check", "Visa", "MasterCard", "Discover", "American Express", "CareCredit"] as const;

/** Offers as published on the current specials page (no expiry or fine print published). */
export const offers = {
  newPatient: { name: "$89 New Patient Visit", price: 89 },
  implants: { name: "$500 off dental implants", discount: 500, regular: 3500 },
  invisalign: { name: "$1,000 off Invisalign", discount: 1000, regular: 5800 },
  whitening: { name: "$100 off teeth whitening", discount: 100, regular: 550 },
} as const;

export const membershipPlan = {
  yearly: 150,
  additionalMember: 75,
  extraCleaning: 75,
  emergencyExam: 65,
  treatmentDiscountPercent: 15,
} as const;

/** PPO plans listed on the current insurance page. Wording rule: "accept", never "in-network". */
export const insurancePlans = [
  "Aetna",
  "Ameritas",
  "Anthem Blue Cross",
  "ASO NYDCC",
  "Assurant",
  "Blue Cross Blue Shield",
  "Capital Blue Cross",
  "Careington",
  "Cherokee Insurance Company",
  "Cigna PPO",
  "Colonial Life",
  "Delta Dental",
  "Dental Discount Plans",
  "Dentegra",
  "Dominion National",
  "Emblem Health",
  "Empire Blue Shield",
  "Excellus Blue Cross",
  "EZ Dental Care",
  "Fidelio",
  "GEHA",
  "Guardian",
  "Horizon Blue Cross",
  "Humana",
  "IBEW Local Union 1158",
  "Liberty Dental",
  "Lincoln Dental Connect",
  "Lincoln Financial",
  "Manhattan Life",
  "Meritain Health",
  "MetLife",
  "Mutual of Omaha",
  "Nippon Life Insurance",
  "Northeast Delta Dental",
  "Physicians Mutual",
  "Populytics",
  "Principal Life",
  "Steamfitters Local 475",
  "Sun Life Financial",
  "Teamsters Health and Welfare Fund",
  "United Concordia Elite Plus",
  "UnitedHealthcare",
] as const;

export const dentists = {
  bhalala: {
    name: "Dr. Urvishkumar Bhalala, DMD",
    givenName: "Urvishkumar Bhalala",
    shortName: "Dr. Bhalala",
    path: "/about-us/dr-urvishkumar-bhalala/",
    school: "Temple University Kornberg School of Dentistry",
  },
  gadria: {
    name: "Dr. Jaspreet Gadria, DMD",
    givenName: "Jaspreet Gadria",
    shortName: "Dr. Gadria",
    path: "/about-us/dr-jaspreet-gadria-dmd/",
    school: "Temple University Kornberg School of Dentistry",
  },
} as const;
