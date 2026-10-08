import Image from "next/image";
import { Fragment } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";
import SiteLink from "@/components/ui/SiteLink";
import { images, type ImageKey } from "@/content/images";
import { homeFamily } from "@/content/pages/home";
import { Jaw } from "./Jaw";
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
 * and the "Nervous?" note. The section ends with the lower teeth (the four first-visit
 * steps) in a pink gum: the inside of the mouth whose upper teeth close the hero.
 * No image/text split and no cards over a photo.
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

      {/* Lower teeth: the four steps of a first visit, set in the lower gum, so with the
          hero's upper teeth the page reads as a smiling mouth (decorative summary of the
          paragraph above). On desktop this "floor" starts pressed up against the upper teeth
          (mouth closed, content covered) and slides down as the page scrolls, opening the
          mouth to reveal the section (MotionController, data-mouth-floor). */}
      <div className={styles.floor} data-mouth-floor>
        {/* Tongue (trial, 7 Oct 2026; remove this element and .tongue in the CSS to drop it):
            rises behind the lower teeth, its base hidden by the lower gum */}
        <svg className={styles.tongue} viewBox="0 0 400 220" preserveAspectRatio="none" aria-hidden="true" focusable="false">
          <defs>
            <radialGradient id="rs-tongue" cx="0.5" cy="0.2" r="0.85">
              <stop offset="0" stopColor="#f5b9bf" />
              <stop offset="0.6" stopColor="#ec9ea7" />
              <stop offset="1" stopColor="#de8590" />
            </radialGradient>
            <radialGradient id="rs-tongue-sheen">
              <stop offset="0" stopColor="#ffffff" stopOpacity="0.38" />
              <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="rs-tongue-groove" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#d27782" stopOpacity="0" />
              <stop offset="0.3" stopColor="#d27782" stopOpacity="0.6" />
              <stop offset="1" stopColor="#d27782" stopOpacity="0.15" />
            </linearGradient>
          </defs>
          <path d="M0 220 C0 95 85 8 200 8 C315 8 400 95 400 220 Z" fill="url(#rs-tongue)" />
          {/* Centre groove and a soft highlight */}
          <path d="M200 26 C196 80 204 128 200 186" fill="none" stroke="url(#rs-tongue-groove)" strokeWidth="3" strokeLinecap="round" />
          <ellipse cx="145" cy="66" rx="90" ry="34" fill="url(#rs-tongue-sheen)" />
          <ellipse cx="258" cy="70" rx="60" ry="24" fill="url(#rs-tongue-sheen)" opacity="0.6" />
        </svg>
        <div className="container">
          <ol className={styles.lowerTeeth} aria-hidden="true">
            {visitSteps.map((step) => (
              <li key={step.label} className={styles.lowerTooth} data-tooth>
                <span className={styles.stepIcon}>
                  <Icon name={step.icon} size={30} strokeWidth={1.5} />
                </span>
                <span className={styles.stepLabel}>{step.label}</span>
              </li>
            ))}
          </ol>
        </div>
        <Jaw jaw="lower" outside="var(--pearl-50)" />
      </div>
    </section>
  );
}
