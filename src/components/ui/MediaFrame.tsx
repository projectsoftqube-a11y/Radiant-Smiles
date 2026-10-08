import Image from "next/image";
import type { CSSProperties } from "react";
import type { SiteImage } from "@/content/images";
import { ToothMark } from "@/components/ui/Brand";
import { ToConfirm } from "@/components/ui/ToConfirm";
import styles from "./MediaFrame.module.css";

type MediaFrameProps = {
  image: SiteImage;
  /** CSS aspect ratio, e.g. "4 / 5". Omit to fill the parent (parent sets the size). */
  ratio?: string;
  sizes: string;
  /** Above-the-fold image: fetched with high priority, never lazy */
  priority?: boolean;
  /** Curtain wipe on load (hero) or on scroll (MotionController hook) */
  reveal?: "load" | "scroll";
  /** Arched top, echoing the crown of the tooth in the logo */
  arch?: boolean;
  className?: string;
  position?: string;
  quality?: 75 | 85;
};

/**
 * Image slot with a fixed aspect ratio (no layout shift). While a real photo is still
 * to come (`src: null`), it shows a labelled "to confirm" placeholder in the brand palette.
 */
export function MediaFrame({ image, ratio, sizes, priority, reveal, arch, className, position, quality }: MediaFrameProps) {
  const classes = [styles.frame, arch ? styles.arch : null, ratio ? null : styles.fill, reveal === "load" ? styles.revealLoad : null, className]
    .filter(Boolean)
    .join(" ");
  const style: CSSProperties = ratio ? { aspectRatio: ratio } : {};

  return (
    <div className={classes} style={style} data-reveal-media={reveal === "scroll" ? "" : undefined}>
      <div className={styles.inner}>
        {image.src ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes={sizes}
            quality={quality}
            placeholder="blur"
            {...(priority ? { fetchPriority: "high" as const, loading: "eager" as const } : {})}
            style={{ objectFit: "cover", objectPosition: position ?? image.position ?? "center" }}
          />
        ) : (
          <div className={styles.placeholder} role="img" aria-label={image.alt}>
            <ToothMark className={styles.placeholderMark} />
            <span className={styles.placeholderLabel}>
              <ToConfirm note={image.brief} />
            </span>
          </div>
        )}
      </div>
      {reveal ? <span className={styles.curtain} aria-hidden="true" /> : null}
    </div>
  );
}
