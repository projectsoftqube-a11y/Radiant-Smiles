import Image from "next/image";
import type { SiteImage } from "@/content/images";
import { ToothMark } from "./Brand";
import styles from "./ToothFrame.module.css";

/**
 * A tooth-shaped photo frame: a smooth, symmetric molar (two-lobed crown, soft waist,
 * two rounded roots). The photo is clipped to the tooth; a white enamel rim edged with a
 * fine sky line and a crown highlight sit over it.
 * Without a photo the tooth is soft sky enamel with the logo's tooth mark in it.
 */
const TOOTH =
  "M0.5 0.075 C0.58 0.02 0.75 0 0.86 0.06 C0.97 0.12 1 0.25 0.97 0.36 C0.95 0.44 0.9 0.5 0.89 0.58 C0.88 0.7 0.86 0.86 0.8 0.95 C0.76 1 0.69 1 0.66 0.95 C0.62 0.88 0.6 0.78 0.5 0.76 C0.4 0.78 0.38 0.88 0.34 0.95 C0.31 1 0.24 1 0.2 0.95 C0.14 0.86 0.12 0.7 0.11 0.58 C0.1 0.5 0.05 0.44 0.03 0.36 C0 0.25 0.03 0.12 0.14 0.06 C0.25 0 0.42 0.02 0.5 0.075 Z";

export function ToothFrame({
  image,
  sizes,
  className,
  id,
}: {
  image: SiteImage;
  sizes: string;
  className?: string;
  /** Unique per page: the clip path's id */
  id: string;
}) {
  return (
    <div className={[styles.frame, className].filter(Boolean).join(" ")}>
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true" focusable="false">
        <defs>
          <clipPath id={id} clipPathUnits="objectBoundingBox">
            <path d={TOOTH} />
          </clipPath>
        </defs>
      </svg>
      <div className={styles.shape} style={{ clipPath: `url(#${id})` }}>
        {image.src ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes={sizes}
            placeholder="blur"
            style={{ objectFit: "cover", objectPosition: image.position ?? "center" }}
          />
        ) : (
          <div className={styles.fallback} role="img" aria-label={image.alt}>
            <ToothMark className={styles.mark} />
          </div>
        )}
        <span className={styles.sheen} aria-hidden="true" />
      </div>
      {/* White enamel rim over the photo's edge, with a fine sky line just outside it */}
      <svg className={styles.rim} viewBox="0 0 1 1" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <path d={TOOTH} className={styles.rimSky} />
        <path d={TOOTH} className={styles.rimWhite} />
      </svg>
    </div>
  );
}
