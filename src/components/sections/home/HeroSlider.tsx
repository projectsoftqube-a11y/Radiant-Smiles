"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./HeroSlider.module.css";

export type HeroSlide = { src: StaticImageData; alt: string; position: string };

/** Time each photo stays before the next one fades in */
const INTERVAL = 6000;

/**
 * Hero photo slider (user, 27 Nov 2026, like the hero on media-bright-smile.vercel.app): the
 * open banner cross-fades to the next photo every 6 s (1.4 s fade) while the incoming photo
 * slowly settles from a slight zoom; dots at the bottom right pick a photo and restart the
 * timer. Only the first photo is in the first paint (it is the LCP and has no zoom); the
 * others mount once the browser is idle. The loop pauses while the hero is off-screen or
 * the tab is hidden, and never runs with reduced motion (the dots still work).
 */
export function HeroSlider({
  slides,
  className,
  imageClassName,
}: {
  slides: HeroSlide[];
  /** The banner frame (position, size and fade mask come from the hero) */
  className?: string;
  /** Extra class on every photo (the hero's hover zoom) */
  imageClassName?: string;
}) {
  const [active, setActive] = useState(0);
  const [ready, setReady] = useState(false);
  const frame = useRef<HTMLDivElement>(null);

  // The other photos mount once the browser is idle, so they never compete with the first one
  useEffect(() => {
    const done = () => setReady(true);
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(done, { timeout: 3000 });
      return () => window.cancelIdleCallback(id);
    }
    const id = globalThis.setTimeout(done, 1500);
    return () => globalThis.clearTimeout(id);
  }, []);

  // Auto-advance; rebuilt on every change, so a dot click restarts the full 6 s
  useEffect(() => {
    if (!ready || slides.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let onScreen = true;
    const hero = frame.current?.closest("section") ?? frame.current;
    const watch = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
    });
    if (hero) watch.observe(hero);
    const id = window.setInterval(() => {
      if (!onScreen || document.hidden) return;
      setActive((i) => (i + 1) % slides.length);
    }, INTERVAL);
    return () => {
      window.clearInterval(id);
      watch.disconnect();
    };
  }, [ready, active, slides.length]);

  return (
    <>
      <div ref={frame} className={className}>
        {slides.map((slide, i) =>
          i === 0 || ready ? (
            <Image
              key={slide.src.src}
              src={slide.src}
              alt={i === active ? slide.alt : ""}
              aria-hidden={i === active ? undefined : true}
              fill
              priority={i === 0}
              quality={85}
              placeholder="blur"
              sizes="(max-width: 991px) 100vw, 62vw"
              className={`${imageClassName ?? ""} ${styles.slide} ${i === active ? styles.active : ""}`}
              style={{ objectPosition: slide.position }}
            />
          ) : null,
        )}
      </div>

      {ready && slides.length > 1 ? (
        <div className={styles.dots} role="group" aria-label="Hero photos">
          {slides.map((slide, i) => (
            <button
              key={slide.src.src}
              type="button"
              className={styles.dot}
              aria-label={`Show photo ${i + 1} of ${slides.length}`}
              aria-current={i === active ? "true" : undefined}
              onClick={() => setActive(i)}
            >
              <span />
            </button>
          ))}
        </div>
      ) : null}
    </>
  );
}
