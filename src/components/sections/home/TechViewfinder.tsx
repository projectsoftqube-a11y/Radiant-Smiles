"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { images } from "@/content/images";
import { homeTechnology } from "@/content/pages/home";
import styles from "./Technology.module.css";

const ADVANCE_MS = 5000;

/**
 * A microscope viewfinder: the six technologies are a list; the active one shows in the
 * viewfinder with a focus pull (blurred and zoomed, then sharp). It advances on its own
 * every few seconds while the section is on screen, and pauses on hover or keyboard focus.
 * No auto-advance for reduced motion. Every name and description is in the DOM.
 */
export function TechViewfinder() {
  const [active, setActive] = useState(0);
  const [running, setRunning] = useState(false);
  const [hold, setHold] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const items = homeTechnology.items;

  // Run only while the section is visible and motion is allowed
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const observer = new IntersectionObserver(([entry]) => setRunning(entry.isIntersecting && !reduced.matches), {
      threshold: 0.35,
    });
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!running || hold) return;
    const id = window.setTimeout(() => setActive((i) => (i + 1) % items.length), ADVANCE_MS);
    return () => window.clearTimeout(id);
  }, [running, hold, active, items.length]);

  const playing = running && !hold;

  return (
    <div
      ref={rootRef}
      className={styles.viewer}
      onMouseEnter={() => setHold(true)}
      onMouseLeave={() => setHold(false)}
      onFocus={() => setHold(true)}
      onBlur={() => setHold(false)}
    >
      {/* Viewfinder */}
      <div className={styles.finder} data-reveal>
        {items.map((item, i) => {
          const image = images[item.image];
          return image.src ? (
            <div key={item.name} className={i === active ? `${styles.shot} ${styles.shotActive}` : styles.shot} aria-hidden={i !== active}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 991px) 92vw, 55vw"
                placeholder="blur"
                style={{ objectFit: "cover", objectPosition: image.position ?? "center" }}
              />
            </div>
          ) : null;
        })}
        <span className={styles.vignette} aria-hidden="true" />
        <span className={`${styles.bracket} ${styles.tl}`} aria-hidden="true" />
        <span className={`${styles.bracket} ${styles.tr}`} aria-hidden="true" />
        <span className={`${styles.bracket} ${styles.bl}`} aria-hidden="true" />
        <span className={`${styles.bracket} ${styles.br}`} aria-hidden="true" />
        <span className={styles.crosshair} aria-hidden="true" />
        <span className={styles.scale} aria-hidden="true">
          <span className={styles.scaleMark} key={active} />
        </span>
        <span className={styles.readout} aria-hidden="true">
          <span className={styles.recDot} />
          {items[active].name}
        </span>
      </div>

      {/* The list */}
      <ul role="list" className={styles.list}>
        {items.map((item, i) => (
          <li key={item.name}>
            <button
              type="button"
              className={i === active ? `${styles.item} ${styles.itemActive}` : styles.item}
              aria-pressed={i === active}
              onClick={() => setActive(i)}
              data-reveal
            >
              <span className={styles.itemName}>{item.name}</span>
              <span className={styles.itemText}>
                <span className="visually-hidden">{item.text.startsWith(",") ? ", " : " "}</span>
                {item.text.replace(/^,?\s*/, "")}
              </span>
              <span
                className={styles.progress}
                aria-hidden="true"
                key={i === active ? `on-${active}` : "off"}
                style={{ "--dur": `${ADVANCE_MS}ms`, animationPlayState: playing ? "running" : "paused" } as CSSProperties}
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
