import type { CSSProperties } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Rich } from "@/components/ui/Rich";
import { dsLast, dsProcess, dsTogether, dsWhat, dsWho } from "@/content/pages/general/sealants";
import styles from "./Sealants.module.css";

/**
 * Dental Sealants sections (order and heading levels follow 02 Content.md). Designs used on
 * this page only: the sealed molar, the groove cross-section, the recommend checklist, the
 * painted process track, the care tips and the split tooth.
 */

/** A molar's fissures: the central groove with its four branches */
const grooves = "M78 151c24-8 46 6 72 0s48-8 72 0M114 150 100 110M114 152 100 194M186 149 200 108M186 152 200 194";

/** Hero visual: a molar's chewing surface, its grooves filling with sealant (decorative) */
export function SealedMolar() {
  return (
    <div className={styles.molar} aria-hidden="true">
      <span className={styles.molarKicker}>Molar · chewing surface</span>
      <svg viewBox="0 0 300 300" className={styles.molarArt}>
        <defs>
          <radialGradient id="ds-crown" cx="0.45" cy="0.4" r="0.7">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset="1" stopColor="#e9eef3" />
          </radialGradient>
        </defs>
        {/* The crown seen from above, with its four cusps */}
        <rect x="44" y="50" width="212" height="200" rx="84" fill="url(#ds-crown)" stroke="#1b3d6e" strokeWidth="3" />
        <g fill="#ffffff" opacity="0.75">
          <ellipse cx="106" cy="104" rx="38" ry="34" />
          <ellipse cx="194" cy="104" rx="38" ry="34" />
          <ellipse cx="106" cy="198" rx="38" ry="34" />
          <ellipse cx="194" cy="198" rx="38" ry="34" />
        </g>
        {/* Grooves: dark first, then the sealant flows in along them */}
        <g fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d={grooves} stroke="#8a97a8" strokeWidth="5" />
          <path className={styles.sealant} d={grooves} stroke="#6dbde8" strokeWidth="11" pathLength={1} />
        </g>
        {/* The glossy sealed layer */}
        <path className={styles.gloss} d="M74 98c12-22 28-32 50-36" fill="none" stroke="#ffffff" strokeWidth="8" strokeLinecap="round" />
      </svg>
      <span className={`${styles.molarChip} ${styles.chipA}`}>
        <Icon name="timer" size={16} /> A few minutes per tooth
      </span>
      <span className={`${styles.molarChip} ${styles.chipB}`}>
        <Icon name="ban" size={16} /> No drilling
      </span>
    </div>
  );
}

/** What sealants are: a groove before and after, beside the copy */
export function WhatSealants() {
  return (
    <section className={styles.what} aria-labelledby="ds-what-title">
      <div className={`container ${styles.whatGrid}`}>
        <div className={styles.whatCopy}>
          <p className="label" data-reveal>
            The basics
          </p>
          <h2 id="ds-what-title" data-reveal>
            {dsWhat.title}
          </h2>
          {dsWhat.paragraphs.map((text) => (
            <p key={text.slice(0, 24)} data-reveal>
              {text}
            </p>
          ))}
        </div>
        <div className={styles.grooves} aria-hidden="true" data-inview>
          <figure className={styles.groove} data-reveal>
            <svg viewBox="0 0 200 150">
              <path d="M0 40h50c12 0 18 8 24 26l18 52c3 8 13 8 16 0l18-52c6-18 12-26 24-26h50v110H0Z" fill="#f5f1ea" stroke="#1b3d6e" strokeWidth="2.5" />
              <g fill="#c9a86a">
                <circle cx="96" cy="104" r="5" />
                <circle cx="106" cy="96" r="4" />
                <circle cx="92" cy="88" r="3.5" />
              </g>
              {/* A bristle, too wide to reach the bottom */}
              <circle className={styles.bristle} cx="100" cy="58" r="16" fill="#6dbde8" opacity="0.85" />
            </svg>
            <figcaption>Open groove: the bristle can&apos;t reach</figcaption>
          </figure>
          <figure className={styles.groove} data-reveal>
            <svg viewBox="0 0 200 150">
              <path d="M0 40h50c12 0 18 8 24 26l18 52c3 8 13 8 16 0l18-52c6-18 12-26 24-26h50v110H0Z" fill="#f5f1ea" stroke="#1b3d6e" strokeWidth="2.5" />
              <path className={styles.fill} d="M50 40c12 0 18 8 24 26l18 52c3 8 13 8 16 0l18-52c6-18 12-26 24-26Z" fill="#a9daf3" />
              <path d="M40 40h120" stroke="#6dbde8" strokeWidth="4" strokeLinecap="round" />
              <circle className={styles.bristleSweep} cx="60" cy="24" r="16" fill="#6dbde8" opacity="0.85" />
            </svg>
            <figcaption>Sealed: smooth, nothing to cling to</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

/** Who needs sealants: a checklist card, with the cavity note below */
export function WhoNeeds() {
  return (
    <section className={styles.who} aria-labelledby="ds-who-title">
      <div className={`container ${styles.whoGrid}`}>
        <div className={styles.whoCopy}>
          <p className="label" data-reveal>
            Kids & adults
          </p>
          <h2 id="ds-who-title" data-reveal>
            {dsWho.title}
          </h2>
          <p className="lead" data-reveal>
            {dsWho.intro}
          </p>
        </div>
        <div className={styles.whoCard}>
          <ul role="list" className={styles.whoList}>
            {dsWho.items.map((item) => (
              <li key={item} data-reveal>
                <span aria-hidden="true">
                  <Icon name="check" size={16} strokeWidth={2.6} />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <p className={styles.whoNote} data-reveal>
            <Icon name="alert" size={22} />
            <span>
              <Rich text={dsWho.after} />
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

/** The sealant process: five steps along a painted track */
export function SealProcess() {
  return (
    <section className={styles.process} aria-labelledby="ds-process-title">
      <div className="container">
        <div className={styles.processHead}>
          <p className="label" data-reveal>
            Step by step
          </p>
          <h2 id="ds-process-title" data-reveal>
            {dsProcess.title}
          </h2>
          <p className="lead" data-reveal>
            {dsProcess.intro}
          </p>
        </div>
        <div className={styles.trackWrap} data-grow>
          <span className={styles.track} aria-hidden="true">
            <span data-grow-item />
          </span>
          <ol className={styles.trackSteps}>
            {dsProcess.steps.map((step, i) => (
              <li key={step.lead} style={{ "--i": i } as CSSProperties} data-reveal>
                <span className={styles.trackIcon} aria-hidden="true">
                  <Icon name={step.icon as IconName} size={24} />
                </span>
                <p>
                  <strong>{step.lead}</strong> {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
        <p className={styles.processAfter} data-reveal>
          <Icon name="clock" size={20} />
          <span>{dsProcess.after}</span>
        </p>
      </div>
    </section>
  );
}

/** How long sealants last: the copy, then three care tips */
export function HowLong() {
  return (
    <section className={styles.last} aria-labelledby="ds-last-title">
      <div className={`container ${styles.lastGrid}`}>
        <div className={styles.lastCopy}>
          <p className="label" data-reveal>
            Lasting protection
          </p>
          <h2 id="ds-last-title" data-reveal>
            {dsLast.title}
          </h2>
          <p data-reveal>{dsLast.text}</p>
          <p className={styles.lastIntro} data-reveal>
            {dsLast.listIntro}
          </p>
        </div>
        <ul role="list" className={styles.tips}>
          {dsLast.tips.map((tip) => (
            <li key={tip.text} data-reveal>
              <span className={styles.tipIcon} aria-hidden="true">
                <Icon name={tip.icon as IconName} size={24} />
              </span>
              {tip.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Sealants and fluoride: one tooth, grooves sealed on top, smooth surfaces strengthened */
export function Together() {
  return (
    <section className={styles.together} aria-labelledby="ds-together-title">
      <div className="container">
        <div className={styles.togetherCard}>
          <div className={styles.split} aria-hidden="true" data-inview data-reveal>
            <svg viewBox="0 0 160 170">
              <path
                d="M42 22c16 0 26 8 38 8s22-8 38-8c24 0 36 20 36 44 0 20-8 32-13 52-5 20-8 46-22 46-16 0-14-36-39-36s-23 36-39 36c-14 0-17-26-22-46-5-20-13-32-13-52 0-24 12-44 36-44Z"
                fill="#ffffff"
                stroke="#1b3d6e"
                strokeWidth="3"
              />
              <path className={styles.splitSides} d="M14 70c2 18 10 30 14 48M146 70c-2 18-10 30-14 48" fill="none" stroke="#a9daf3" strokeWidth="9" strokeLinecap="round" />
              <path className={styles.splitTop} d="M50 40c12 8 20 10 30 6 10 4 18 2 30-6" fill="none" stroke="#1b6e9f" strokeWidth="7" strokeLinecap="round" />
            </svg>
            <span className={`${styles.splitTag} ${styles.tagTop}`}>
              <Icon name="shield" size={16} /> Sealants: grooves
            </span>
            <span className={`${styles.splitTag} ${styles.tagSide}`}>
              <Icon name="drop" size={16} /> Fluoride: smooth surfaces
            </span>
          </div>
          <div className={styles.togetherCopy}>
            <h2 id="ds-together-title" data-reveal>
              {dsTogether.title}
            </h2>
            <p data-reveal>
              <Rich text={dsTogether.text} />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
