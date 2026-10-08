import type { CSSProperties } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";
import SiteLink from "@/components/ui/SiteLink";
import { infHow, infLink, infSteps } from "@/content/pages/patient/care";
import styles from "./Infection.module.css";

/**
 * Infection Control sections (order and heading levels follow 02 Content.md). Designs used
 * on this page only: the cycle card, the agency tiles and the three-step sequence. No
 * safety badges or certifications (handoff).
 */

/** Hero visual: the routine as a cycle, each stage filling in turn (decorative) */
export function CycleCard() {
  const stages: { icon: IconName; name: string; note: string }[] = [
    { icon: "toothClean", name: "Sterilize", note: "Autoclave before every use" },
    { icon: "drop", name: "Disinfect", note: "Surfaces & hands" },
    { icon: "shield", name: "Single-use", note: "Disposables, gloves & masks" },
  ];
  return (
    <div className={styles.cycle} aria-hidden="true">
      <span className={styles.cycleKicker}>Every visit</span>
      <ol className={styles.stages}>
        {stages.map((stage, i) => (
          <li key={stage.name} className={styles.stage} style={{ "--i": i } as CSSProperties}>
            <span className={styles.stageIcon}>
              <Icon name={stage.icon} size={22} />
            </span>
            <span className={styles.stageText}>
              <span className={styles.stageName}>{stage.name}</span>
              <span className={styles.stageNote}>{stage.note}</span>
            </span>
            <span className={styles.stageBar}>
              <span />
            </span>
          </li>
        ))}
      </ol>
      <span className={styles.cycleFoot}>
        <Icon name="check" size={16} strokeWidth={2.4} />
        Guidelines from OSHA, the EPA & the CDC
      </span>
    </div>
  );
}

/** How it works: the three agencies as tiles */
export function Agencies() {
  return (
    <section className={styles.how} aria-labelledby="inf-how-title">
      <div className="container">
        <div className={styles.howHead}>
          <h2 id="inf-how-title" data-reveal>
            {infHow.title}
          </h2>
          <p className="lead" data-reveal>
            {infHow.intro}
          </p>
        </div>
        <ul role="list" className={styles.agencies}>
          {infHow.bodies.map((body) => (
            <li key={body.short} className={styles.agency} data-reveal>
              <strong className={styles.agencyShort}>{body.short}</strong>{" "}
              <span className={styles.agencyName}>{body.text}</span>
            </li>
          ))}
        </ul>
        <p className={styles.howAfter} data-reveal>
          {infHow.after}
        </p>
      </div>
    </section>
  );
}

/** Sterilization, disinfection, single-use: three H2 sections joined into one sequence */
export function SafetySteps() {
  return (
    <div className={styles.steps}>
      <div className={`container ${styles.stepsInner}`}>
        {infSteps.map((step) => (
          <section key={step.id} id={step.id} className={styles.step} aria-labelledby={`${step.id}-title`} data-reveal>
            <span className={styles.stepIcon} aria-hidden="true">
              <Icon name={step.icon as IconName} size={28} />
            </span>
            <div className={styles.stepCopy}>
              <h2 id={`${step.id}-title`}>{step.title}</h2>
              <p>{step.text}</p>
            </div>
          </section>
        ))}
        <div className={styles.stepsFoot} data-reveal>
          <SiteLink href={infLink.href} className="text-link">
            {infLink.label} <Icon name="arrow" size={16} />
          </SiteLink>
        </div>
      </div>
    </div>
  );
}
