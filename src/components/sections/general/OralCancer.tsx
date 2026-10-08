import type { CSSProperties } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Rich } from "@/components/ui/Rich";
import { ocCheck, ocOften, ocRisk, ocSigns, ocWhy } from "@/content/pages/general/oral-cancer";
import styles from "./OralCancer.module.css";

/**
 * Oral Cancer Screening sections (order and heading levels follow 02 Content.md). No images
 * of lesions and no statistics (handoff). Designs used on this page only: the areas-checked
 * scan card, the close-up note, the four verb cards, the two-week strip, the risk tiles and
 * the every-visit band.
 */

/** Hero visual: the areas the dentist checks, ticked off as a scan line passes (decorative) */
export function AreasScan() {
  const areas = ["Lips", "Cheeks", "Gums", "Tongue", "Floor of the mouth", "Roof of the mouth", "Throat", "Neck"];
  return (
    <div className={styles.scan} aria-hidden="true">
      <div className={styles.scanHead}>
        <span className={styles.scanIcon}>
          <Icon name="search" size={20} />
        </span>
        <span>
          <span className={styles.scanTitle}>Areas checked</span>
          <span className={styles.scanSub}>A few minutes · every checkup</span>
        </span>
      </div>
      <ul role="list" className={styles.areas}>
        {areas.map((area, i) => (
          <li key={area} style={{ "--i": i } as CSSProperties}>
            <span className={styles.areaName}>{area}</span>
            <span className={styles.areaLine} />
            <span className={styles.areaTick}>
              <Icon name="check" size={12} strokeWidth={3} />
            </span>
          </li>
        ))}
      </ul>
      <span className={styles.beam} />
    </div>
  );
}

/** Why it matters: the copy beside a navy close-up note */
export function WhyScreening() {
  return (
    <section className={styles.why} aria-labelledby="oc-why-title">
      <div className={`container ${styles.whyGrid}`}>
        <div className={styles.whyCopy}>
          <p className="label" data-reveal>
            Early changes
          </p>
          <h2 id="oc-why-title" data-reveal>
            {ocWhy.title}
          </h2>
          <p data-reveal>{ocWhy.paragraphs[0]}</p>
        </div>
        <div className={styles.closeUp} data-reveal>
          <span className={styles.closeIcon} aria-hidden="true">
            <Icon name="eye" size={30} />
          </span>
          <p>{ocWhy.paragraphs[1]}</p>
        </div>
      </div>
    </section>
  );
}

/** What we check: four verbs, then the biopsy note */
export function WhatWeCheck() {
  return (
    <section className={styles.check} aria-labelledby="oc-check-title">
      <div className="container">
        <div className={styles.checkHead}>
          <p className="label" data-reveal>
            During your exam
          </p>
          <h2 id="oc-check-title" data-reveal>
            {ocCheck.title}
          </h2>
          <p className="lead" data-reveal>
            {ocCheck.intro}
          </p>
        </div>
        <ol className={styles.verbs}>
          {ocCheck.steps.map((step) => (
            <li key={step.lead} className={styles.verb} data-reveal>
              <span className={styles.verbIcon} aria-hidden="true">
                <Icon name={step.icon as IconName} size={30} />
              </span>
              <p>
                <strong className={styles.verbLead}>{step.lead}</strong> {step.text}
              </p>
            </li>
          ))}
        </ol>
        <p className={styles.biopsy} data-reveal>
          <span className={styles.biopsyIcon} aria-hidden="true">
            <Icon name="flask" size={24} />
          </span>
          <span>{ocCheck.after}</span>
        </p>
      </div>
    </section>
  );
}

/** Warning signs: the two-week strip, then the signs in two columns */
export function WarningSigns() {
  return (
    <section className={styles.signs} aria-labelledby="oc-signs-title">
      <div className="container">
        <div className={styles.signsHead}>
          <div className={styles.signsCopy}>
            <p className="label" data-reveal>
              When to call
            </p>
            <h2 id="oc-signs-title" data-reveal>
              {ocSigns.title}
            </h2>
            <p className="lead" data-reveal>
              <Rich text={ocSigns.intro} />
            </p>
          </div>
          <div className={styles.fortnight} aria-hidden="true" data-inview data-reveal>
            <span className={styles.fortnightLabel}>More than two weeks</span>
            <span className={styles.days}>
              {Array.from({ length: 14 }, (_, i) => (
                <span key={i} style={{ "--i": i } as CSSProperties} />
              ))}
            </span>
            <span className={styles.fortnightEnd}>
              <Icon name="phone" size={16} /> See a dentist or doctor
            </span>
          </div>
        </div>
        <ul role="list" className={styles.signList}>
          {ocSigns.items.map((item) => (
            <li key={item} data-reveal>
              <span aria-hidden="true">
                <Icon name="alert" size={18} />
              </span>
              {item}
            </li>
          ))}
        </ul>
        <p className={styles.signsCall} data-reveal>
          <Icon name="phone" size={22} />
          <span>
            <Rich text={ocSigns.after} />
          </span>
        </p>
      </div>
    </section>
  );
}

/** Who is at higher risk: six tiles */
export function HigherRisk() {
  return (
    <section className={styles.risk} aria-labelledby="oc-risk-title">
      <div className={`container ${styles.riskGrid}`}>
        <div className={styles.riskCopy}>
          <p className="label" data-reveal>
            Risk factors
          </p>
          <h2 id="oc-risk-title" data-reveal>
            {ocRisk.title}
          </h2>
          <p className="lead" data-reveal>
            {ocRisk.intro}
          </p>
          <p className={styles.riskAfter} data-reveal>
            {ocRisk.after}
          </p>
        </div>
        <ul role="list" className={styles.riskTiles}>
          {ocRisk.items.map((item) => (
            <li key={item.text} data-reveal>
              <span className={styles.riskIcon} aria-hidden="true">
                <Icon name={item.icon as IconName} size={24} />
              </span>
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** How often: every checkup, twice a year */
export function ScreeningOften() {
  return (
    <section className={styles.often} aria-labelledby="oc-often-title">
      <div className="container">
        <div className={styles.oftenBand}>
          <div className={styles.oftenMarks} aria-hidden="true" data-reveal>
            <span>
              <Icon name="calendarCheck" size={22} />
            </span>
            <span>
              <Icon name="calendarCheck" size={22} />
            </span>
          </div>
          <div className={styles.oftenCopy}>
            <h2 id="oc-often-title" data-reveal>
              {ocOften.title}
            </h2>
            <p data-reveal>
              <Rich text={ocOften.text} />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
