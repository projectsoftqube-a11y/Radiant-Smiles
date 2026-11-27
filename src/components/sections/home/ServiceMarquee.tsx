"use client";

import { useRef } from "react";
import { homeMarquee } from "@/content/pages/home";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import styles from "./ServiceMarquee.module.css";

/** How fast the names travel, in px per second (the same pace at every screen width) */
const SPEED = 46;

/**
 * Service names moving right to left in a full-width white band just after the hero
 * (client, 26 Nov 2026, like the Hampton Family Dental homepage). Adapted from the
 * kavan-gsap-animations velocity-marquee: one linear xPercent tween over two copies of the
 * list (the second is aria-hidden), without the scroll-speed lean.
 *
 * It moves continuously, with no pause button or hover pause (client, 27 Nov 2026); it only
 * stops while off-screen, where nobody can see it. Reduced motion or no JavaScript: it stays
 * still and can be scrolled sideways.
 */
export function ServiceMarquee() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const band = root.current;
      const track = band?.querySelector<HTMLElement>("[data-marquee-track]");
      if (!band || !track) return;
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // One second per half-track; timeScale turns that into SPEED px/s for the real width
        const loop = gsap.fromTo(track, { xPercent: 0 }, { xPercent: -50, duration: 1, ease: "none", repeat: -1, paused: true });
        const pace = () => loop.timeScale(SPEED / Math.max(track.scrollWidth / 2, 1));
        pace();
        const resize = new ResizeObserver(pace);
        resize.observe(track);

        const watch = ScrollTrigger.create({
          trigger: band,
          start: "top bottom",
          end: "bottom top",
          onToggle: (self) => (self.isActive ? loop.play() : loop.pause()),
        });
        if (watch.isActive) loop.play();

        return () => {
          resize.disconnect();
          watch.kill();
          loop.kill();
          gsap.set(track, { clearProps: "transform" });
        };
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  const list = (copy: boolean) => (
    <ul
      role="list"
      className={styles.list}
      aria-label={copy ? undefined : homeMarquee.label}
      aria-hidden={copy ? true : undefined}
    >
      {homeMarquee.items.map((item) => (
        <li key={item} className={styles.item}>
          {item}
          <span className={styles.mark} aria-hidden="true" />
        </li>
      ))}
    </ul>
  );

  return (
    <div ref={root} className={styles.band} data-reveal>
      <div className={styles.track} data-marquee-track>
        {list(false)}
        {list(true)}
      </div>
    </div>
  );
}
