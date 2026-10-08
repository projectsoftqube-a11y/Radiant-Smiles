import type { SiteImage } from "@/content/images";
import { ToothMark } from "./Brand";
import { MediaFrame } from "./MediaFrame";
import styles from "./Portrait.module.css";

/**
 * A dentist's portrait in the arched frame. Until a real headshot exists (`src: null`),
 * the arch is soft sky enamel with the logo's tooth mark: never a silhouette, initials or
 * stock photo (handoff), and no "to confirm" label (user request on the home page).
 */
export function Portrait({
  image,
  sizes,
  ratio = "4 / 5",
  priority,
  reveal,
  className,
}: {
  image: SiteImage;
  sizes: string;
  ratio?: string;
  priority?: boolean;
  reveal?: "load" | "scroll";
  className?: string;
}) {
  if (image.src) {
    return <MediaFrame image={image} ratio={ratio} sizes={sizes} priority={priority} reveal={reveal} arch className={className} />;
  }
  return (
    <div className={[styles.fallback, className].filter(Boolean).join(" ")} style={{ aspectRatio: ratio }} role="img" aria-label={image.alt}>
      <ToothMark className={styles.mark} />
    </div>
  );
}
