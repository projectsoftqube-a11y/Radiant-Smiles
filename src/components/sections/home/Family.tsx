import Image from "next/image";
import { Fragment } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";
import SiteLink from "@/components/ui/SiteLink";
import { images, type ImageKey } from "@/content/images";
import { homeFamily } from "@/content/pages/home";
import styles from "./Family.module.css";

/** The four parts of a first visit named in the paragraph, as a journey (decorative) */
const visitSteps: { icon: IconName; label: string }[] = [
  { icon: "xray", label: "Digital X-rays" },
  { icon: "tooth", label: "Teeth & gums" },
  { icon: "toothClean", label: "Cleaning" },
  { icon: "clipboard", label: "Plan & cost" },
];

/** A small rounded photo set inline between the words of the heading (decorative) */
function PhotoPill({ image, wide = false }: { image: ImageKey; wide?: boolean }) {
  const img = images[image];
  if (!img.src) return null;
  return (
    <span className={wide ? `${styles.pill} ${styles.pillWide}` : styles.pill} aria-hidden="true">
      <Image
        src={img.src}
        alt=""
        fill
        sizes="12rem"
        placeholder="blur"
        style={{ objectFit: "cover", objectPosition: img.position ?? "center" }}
      />
    </span>
  );
}

/**
 * Editorial, centred: the H2 is set large with two photo pills between its words (the
 * heading text itself is unchanged), then the opening statement, the first-visit paragraph
 * with its four steps as simple cards (client, 26 Nov 2026: they were lower teeth in a
 * pink gum), and the "Nervous?" note. No image/text split and no cards over a photo.
 */
export function Family() {
  const [opening, firstVisit, nervous] = homeFamily.paragraphs;
  return (
    <section className={styles.section} aria-labelledby="home-family-title">
      <div className="container">
        <div className={styles.head}>
          <p className="label" data-reveal>
            Family dentistry
          </p>
          {/* The content-file title, with a photo after "Dentistry" and after "Explained" */}
          <h2 id="home-family-title" className={styles.title} data-reveal>
            {homeFamily.title.split(" ").map((word, i, words) => (
              <Fragment key={i}>
                {word}
                {word === "Dentistry" ? (
                  <>
                    {" "}
                    <PhotoPill image="homeFamily" wide />
                  </>
                ) : null}
                {word === "Explained" ? (
                  <>
                    {" "}
                    <PhotoPill image="homeFamilyPill" />
                  </>
                ) : null}
                {i < words.length - 1 ? " " : null}
              </Fragment>
            ))}
          </h2>
          <p className={styles.statement} data-reveal>
            {opening}
          </p>
        </div>

        <div className={styles.visit}>
          <p className={`label ${styles.visitLabel}`} data-reveal>
            Your first visit
          </p>
          <p className={styles.visitText} data-reveal>
            {firstVisit}
          </p>
          {/* The four parts of the visit named in the paragraph (decorative summary) */}
          <ol className={styles.steps} aria-hidden="true">
            {visitSteps.map((step) => (
              <li key={step.label} className={styles.step} data-reveal>
                <span className={styles.stepIcon}>
                  <Icon name={step.icon} size={28} strokeWidth={1.5} />
                </span>
                <span className={styles.stepLabel}>{step.label}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className={styles.nervous} data-reveal>
          <span className={styles.nervousIcon}>
            <Icon name="headphones" size={26} strokeWidth={1.6} />
          </span>
          <p>{nervous}</p>
        </div>

        <div className={styles.foot} data-reveal>
          <SiteLink href={homeFamily.link.href} className="text-link">
            {homeFamily.link.label} <Icon name="arrow" size={16} />
          </SiteLink>
        </div>
      </div>
    </section>
  );
}
