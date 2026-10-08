"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/** Shared motion tokens; the CSS equivalents live in styles/tokens.css. */
export const motion = {
  ease: "power3.out",
  easeMask: "expo.out",
  duration: { ui: 0.2, reveal: 0.8, hero: 1.2 },
  stagger: 0.08,
} as const;

export { gsap, ScrollTrigger, useGSAP };
