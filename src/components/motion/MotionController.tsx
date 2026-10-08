"use client";

import { usePathname } from "next/navigation";
import { gsap, motion, ScrollTrigger, useGSAP } from "@/lib/gsap";

/**
 * Scroll-driven motion, declared in markup with data attributes:
 *   data-reveal          fade up as it enters (batched, so siblings stagger)
 *   data-reveal-media    curtain drops off an image (MediaFrame reveal="scroll")
 *   data-draw            SVG strokes inside draw themselves (paths need pathLength="1")
 *   data-grow            children with [data-grow-item] grow from the left, one after another
 *   data-scrub-words     its [data-word] children fill from pale to full, tied to the scroll
 *   data-count="500"     a decorative figure counts up from zero as it enters
 *
 * Only elements that start below the fold are hidden first, so nothing visible on load
 * ever flashes. Without JavaScript, or with reduced motion, everything is simply shown.
 * Trigger positions are re-measured whenever the page height changes (fonts, late
 * images, the map, FAQ answers), so sections further down never fire early or late.
 */
// clamp(): items near the end of the page can never scroll up to 80%, so their start
// is capped at the maximum scroll position and they still reveal.
declare global {
  interface Window {
    /** Set when MotionController has started (the motion flag's fallback checks it) */
    __motionReady?: boolean;
  }
}

const REVEAL_START = "clamp(top 80%)";
const MEDIA_START = "clamp(top 75%)";
/** How far (px) the closed lower jaw rises past the section top to meet the upper teeth */
const MOUTH_BITE = 38;

export function MotionController() {
  const pathname = usePathname();

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Three kinds of reveal: section eyebrows (.label) wipe in from the left, headings
      // (h2) rise out of a slot (a clip opening downward as they move up), everything
      // else fades up.
      const kind = (el: Element) => (el.matches(".label") ? "label" : el.matches("h2") ? "heading" : "block");
      const hideForReveal = (el: Element) => {
        const k = kind(el);
        if (k === "label") gsap.set(el, { autoAlpha: 0, x: -18, clipPath: "inset(0% 100% 0% 0%)" });
        else if (k === "heading") gsap.set(el, { autoAlpha: 0, y: 64, clipPath: "inset(0% -5% 100% -5%)" });
        else gsap.set(el, { autoAlpha: 0, y: 36 });
      };
      const playReveal = (el: Element, delay: number) => {
        const k = kind(el);
        if (k === "label") {
          gsap.to(el, { autoAlpha: 1, x: 0, clipPath: "inset(0% 0% 0% 0%)", duration: 0.9, ease: "power3.out", delay, overwrite: true, clearProps: "transform,clipPath" });
        } else if (k === "heading") {
          // Fully opaque at once: the movement and the opening clip do the reveal
          gsap.set(el, { autoAlpha: 1, delay });
          gsap.to(el, { y: 0, clipPath: "inset(-15% -5% -20% -5%)", duration: 1.25, ease: "power3.out", delay, overwrite: "auto", clearProps: "transform,clipPath" });
        } else {
          gsap.to(el, { autoAlpha: 1, y: 0, duration: motion.duration.reveal, ease: motion.ease, delay, overwrite: true, clearProps: "transform" });
        }
      };
      // Content inside the opening mouth (desktop): the closed jaw covers it, so it reveals
      // when the jaw uncovers it (handled with the mouth below), not at the usual line.
      const mouthDesktop = () => window.matchMedia("(min-width: 1200px)").matches;
      const insideMouth = (el: Element) => {
        const section = el.closest("section");
        return !!section?.querySelector("[data-mouth-floor]") && !el.closest("[data-mouth-floor]");
      };

      // Reduced motion: never keep anything hidden
      mm.add("(prefers-reduced-motion: reduce)", () => {
        document.documentElement.classList.remove("motion");
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Reveal items start hidden in CSS (html.motion); from here on GSAP shows them
        document.documentElement.classList.add("motion");
        window.__motionReady = true;
        const foldLine = window.innerHeight * 0.92;
        const belowFold = (el: Element) => el.getBoundingClientRect().top > foldLine;

        const allItems = gsap.utils.toArray<HTMLElement>("[data-reveal]").filter((el) => !(mouthDesktop() && insideMouth(el)));

        // Already on screen at load (a short hero, a tall screen, a reload mid-page):
        // play in now, top to bottom, instead of being skipped
        allItems
          .filter((el) => !belowFold(el))
          .forEach((el, i) => {
            hideForReveal(el);
            playReveal(el, 0.15 + Math.min(i, 8) * 0.08);
          });

        // The rest in batches as they scroll in, so a section's label, title and copy
        // cascade in order.
        const revealItems = allItems.filter(belowFold);
        if (revealItems.length) {
          revealItems.forEach(hideForReveal);
          ScrollTrigger.batch(revealItems, {
            start: REVEAL_START,
            interval: 0.12,
            once: true,
            onEnter: (batch) => {
              // Cap the cascade at ~0.4s so the last item of a long list never lags.
              const step = Math.min(motion.stagger, 0.4 / Math.max(batch.length - 1, 1));
              batch.forEach((el, i) => playReveal(el, i * step));
            },
          });
        }

        gsap.utils.toArray<HTMLElement>("[data-reveal-media]").filter(belowFold).forEach((frame) => {
          const curtain = frame.querySelector<HTMLElement>(":scope > span");
          const inner = frame.firstElementChild;
          if (!curtain || !inner) return;
          gsap.set(curtain, { scaleY: 1, transformOrigin: "bottom center" });
          gsap.set(inner, { scale: 1.1 });
          gsap
            .timeline({ scrollTrigger: { trigger: frame, start: MEDIA_START, once: true } })
            .to(curtain, { scaleY: 0, duration: 1.1, ease: "power4.inOut" })
            .to(inner, { scale: 1, duration: 1.5, ease: motion.easeMask }, "<0.1");
        });

        gsap.utils.toArray<SVGElement>("[data-draw]").filter(belowFold).forEach((svg) => {
          const strokes = svg.querySelectorAll<SVGGeometryElement>("[pathLength]");
          if (!strokes.length) return;
          gsap.set(strokes, { strokeDasharray: 1, strokeDashoffset: 1 });
          const dots = svg.querySelectorAll<SVGElement>("[data-draw-pop]");
          if (dots.length) gsap.set(dots, { autoAlpha: 0, y: -8 });
          const tl = gsap.timeline({ scrollTrigger: { trigger: svg, start: MEDIA_START, once: true } });
          tl.to(strokes, { strokeDashoffset: 0, duration: 1.8, ease: "power2.inOut", stagger: 0.06 });
          if (dots.length) tl.to(dots, { autoAlpha: 1, y: 0, duration: 0.5, ease: "back.out(2)", stagger: 0.07 }, "-=1.1");
        });

        // Receipt printing out of the card reader (membership): the paper slides down out of
        // its well, tied to the scroll
        gsap.utils.toArray<HTMLElement>("[data-print]").forEach((well) => {
          const paper = well.querySelector<HTMLElement>("[data-print-paper]");
          if (!paper) return;
          gsap.fromTo(
            paper,
            { yPercent: -100 },
            {
              yPercent: 0,
              ease: "none",
              // Fully printed by the time the receipt's top reaches mid-screen
              scrollTrigger: { trigger: well, start: "top 90%", end: "top 55%", scrub: 0.5 },
            },
          );
        });

        // Vertical bars (office hours chart): grow down from their top, one after another.
        // On phones the same bars run sideways, so they grow from the left instead.
        gsap.utils.toArray<HTMLElement>("[data-rise]").filter(belowFold).forEach((group) => {
          const bars = group.querySelectorAll<HTMLElement>("[data-rise-item]");
          if (!bars.length) return;
          const sideways = window.matchMedia("(max-width: 767px)").matches;
          gsap.from(bars, {
            ...(sideways ? { scaleX: 0 } : { scaleY: 0 }),
            duration: 1.1,
            ease: "expo.out",
            stagger: 0.08,
            clearProps: "transform",
            scrollTrigger: { trigger: group, start: REVEAL_START, once: true },
          });
        });

        // Figures (decorative, aria-hidden): count up from zero when they scroll in. The
        // server renders the final number, so without JavaScript nothing changes.
        gsap.utils.toArray<HTMLElement>("[data-count]").filter(belowFold).forEach((el) => {
          const target = Number(el.dataset.count);
          if (!Number.isFinite(target)) return;
          const format = (n: number) => Math.round(n).toLocaleString("en-US");
          const counter = { value: 0 };
          el.textContent = format(0);
          gsap.to(counter, {
            value: target,
            duration: 1.6,
            ease: "power3.out",
            onUpdate: () => {
              el.textContent = format(counter.value);
            },
            scrollTrigger: { trigger: el, start: REVEAL_START, once: true },
          });
        });

        // Large quotes: the words fill in from pale to full as the quote scrolls up the screen
        gsap.utils.toArray<HTMLElement>("[data-scrub-words]").forEach((text) => {
          const words = text.querySelectorAll<HTMLElement>("[data-word]");
          if (!words.length) return;
          gsap.fromTo(
            words,
            { opacity: 0.16 },
            {
              opacity: 1,
              ease: "none",
              stagger: 0.1,
              scrollTrigger: { trigger: text, start: "top 85%", end: "bottom 50%", scrub: 0.4 },
            },
          );
        });

        gsap.utils.toArray<HTMLElement>("[data-grow]").filter(belowFold).forEach((group) => {
          const bars = group.querySelectorAll<HTMLElement>("[data-grow-item]");
          if (!bars.length) return;
          gsap.set(bars, { scaleX: 0, transformOrigin: "left center" });
          gsap.to(bars, {
            scaleX: 1,
            duration: 1,
            ease: "expo.out",
            stagger: 0.08,
            scrollTrigger: { trigger: group, start: REVEAL_START, once: true },
          });
        });
      });

      // Opening mouth (home page, desktop): the lower jaw ("floor") starts lifted right under
      // the hero's upper teeth, covering the Family section, and slides back to its place
      // as the section scrolls up, tied to the scroll. No pinning; the content is always in
      // the HTML. Reverted below 1200px and for reduced motion.
      mm.add("(prefers-reduced-motion: no-preference) and (min-width: 1200px)", () => {
        gsap.utils.toArray<HTMLElement>("[data-mouth-floor]").forEach((floor) => {
          const section = floor.closest("section");
          if (!section) return;
          gsap.fromTo(
            floor,
            // Closed: the lower teeth tips meet the upper teeth tips at the hero's edge
            { y: () => -(floor.offsetTop + MOUTH_BITE) },
            {
              y: 0,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                // Starts opening once the bite (section top) is about three-quarters down
                start: "top 75%",
                end: "bottom bottom",
                scrub: 0.3,
                invalidateOnRefresh: true,
              },
            },
          );

          // The section's own content reveals as the opening jaw uncovers it: when the top of
          // the jaw's fade (4rem above the floor) passes the middle of each element.
          const FADE = 64;
          gsap.utils
            .toArray<HTMLElement>(section.querySelectorAll("[data-reveal]"))
            .filter((el) => !floor.contains(el))
            .forEach((el) => {
              hideForReveal(el);
              ScrollTrigger.create({
                trigger: section,
                once: true,
                invalidateOnRefresh: true,
                start: () => {
                  const box = section.getBoundingClientRect();
                  const top = el.getBoundingClientRect().top - box.top;
                  const F = floor.offsetTop;
                  const p = gsap.utils.clamp(0, 1, 1 - (F - top - el.offsetHeight / 2 - FADE) / (F + MOUTH_BITE));
                  const from = box.top + window.scrollY - window.innerHeight * 0.75;
                  const to = box.top + window.scrollY + section.offsetHeight - window.innerHeight;
                  return from + p * (to - from);
                },
                onEnter: () => playReveal(el, 0),
              });
            });
        });
      });

      let timer = 0;
      const refresh = () => {
        window.clearTimeout(timer);
        timer = window.setTimeout(() => ScrollTrigger.refresh(), 120);
      };
      let lastHeight = document.documentElement.scrollHeight;
      const resizeObserver = new ResizeObserver(() => {
        const height = document.documentElement.scrollHeight;
        if (Math.abs(height - lastHeight) < 2) return;
        lastHeight = height;
        refresh();
      });
      resizeObserver.observe(document.body);
      document.fonts?.ready.then(refresh);
      window.addEventListener("load", refresh, { once: true });

      return () => {
        window.clearTimeout(timer);
        resizeObserver.disconnect();
        window.removeEventListener("load", refresh);
        mm.revert();
      };
    },
    { dependencies: [pathname], revertOnUpdate: true },
  );

  return null;
}
