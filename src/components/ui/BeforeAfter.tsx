"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import styles from "./BeforeAfter.module.css";

/**
 * Before/after comparison: the after photo sits over the before photo and a handle
 * reveals it. The handle is a real range input (drag, click or arrow keys), and both
 * photos keep their own alt text. When it scrolls in, the handle sweeps once to show
 * how it works (CSS, skipped for reduced motion).
 */
export function BeforeAfter({
  before,
  after,
  beforeAlt,
  afterAlt,
  sizes,
}: {
  before: StaticImageData;
  after: StaticImageData;
  beforeAlt: string;
  afterAlt: string;
  sizes: string;
}) {
  const [split, setSplit] = useState(50);
  const [touched, setTouched] = useState(false);
  const [seen, setSeen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setSeen(true);
        observer.disconnect();
      },
      { threshold: 0.6 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={seen && !touched ? `${styles.compare} ${styles.hint}` : styles.compare} style={{ "--split": `${split}%` } as CSSProperties}>
      <Image src={before} alt={beforeAlt} sizes={sizes} className={styles.img} placeholder="blur" loading="lazy" />
      <div className={styles.after}>
        <Image src={after} alt={afterAlt} sizes={sizes} className={styles.img} placeholder="blur" loading="lazy" />
      </div>
      <span className={`${styles.tag} ${styles.tagBefore}`} aria-hidden="true">
        Before
      </span>
      <span className={`${styles.tag} ${styles.tagAfter}`} aria-hidden="true">
        After
      </span>
      <span className={styles.handle} aria-hidden="true">
        <span className={styles.knob}>
          <svg viewBox="0 0 24 24" width="22" height="22">
            <path d="m9 7-5 5 5 5M15 7l5 5-5 5" />
          </svg>
        </span>
      </span>
      <input
        type="range"
        min={0}
        max={100}
        value={split}
        onChange={(event) => {
          setTouched(true);
          setSplit(Number(event.target.value));
        }}
        onPointerDown={() => setTouched(true)}
        className={styles.range}
        aria-label="Slide to compare the before and after photos"
      />
    </div>
  );
}
