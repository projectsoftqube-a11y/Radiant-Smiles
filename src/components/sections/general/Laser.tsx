import type { CSSProperties } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Rich } from "@/components/ui/Rich";
import { lzBenefits, lzCandidate, lzHow, lzRecovery } from "@/content/pages/general/laser";
import styles from "./Laser.module.css";

/**
 * Gum Disease Laser Therapy sections (order and heading levels follow 02 Content.md). No
 * laser brand or model anywhere (handoff). Designs used on this page only: the laser beam,
 * the beam-lit steps, the navy benefit grid, the candidate checklist with the frenectomy
 * note and the recovery list.
 */

/** Hero visual: a dental laser tip lighting the gum tissue (decorative) */
export function LaserBeam() {
  return (
    <div className={styles.beamCard} aria-hidden="true">
      <svg viewBox="0 0 340 300" className={styles.beamArt}>
        <defs>
          <linearGradient id="lz-beam" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#a9daf3" stopOpacity="0.1" />
            <stop offset="1" stopColor="#6dbde8" />
          </linearGradient>
          <radialGradient id="lz-spot">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset="0.35" stopColor="#a9daf3" />
            <stop offset="1" stopColor="#6dbde8" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="lz-gum" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f6cfd0" />
            <stop offset="1" stopColor="#c86b76" />
          </linearGradient>
        </defs>
        {/* Two teeth set in gum tissue */}
        <g fill="#ffffff" stroke="#a9daf3" strokeWidth="2.5">
          <path d="M60 110c0-24 14-40 40-40s40 16 40 40v60H60Z" />
          <path d="M170 104c0-24 14-40 40-40s40 16 40 40v66h-80Z" />
        </g>
        <path d="M20 168c30 0 50-10 80-10s40 10 70 10 40-10 70-10 40 10 80 10v132H20Z" fill="url(#lz-gum)" />
        {/* The handpiece and its beam */}
        <g className={styles.handpiece}>
          <path d="M318 18 236 100" stroke="#e3e7ec" strokeWidth="18" strokeLinecap="round" />
          <path d="M318 18 236 100" stroke="#c4d3e6" strokeWidth="6" strokeLinecap="round" opacity="0.6" />
          <path d="M236 100l-14 14" stroke="#1b6e9f" strokeWidth="8" strokeLinecap="round" />
        </g>
        <path className={styles.ray} d="M220 116 168 170" stroke="url(#lz-beam)" strokeWidth="5" strokeLinecap="round" />
        <circle className={styles.spot} cx="166" cy="172" r="26" fill="url(#lz-spot)" />
      </svg>
      <div className={styles.beamTags}>
        <span>
          <Icon name="ban" size={16} /> No scalpel
        </span>
        <span>
          <Icon name="ban" size={16} /> No drill
        </span>
        <span>
          <Icon name="drop" size={16} /> Often little bleeding
        </span>
      </div>
    </div>
  );
}

/** How it works: five steps joined by a beam of light */
export function LaserSteps() {
  return (
    <section className={styles.how} aria-labelledby="lz-how-title">
      <div className="container">
        <div className={styles.howHead}>
          <p className="label" data-reveal>
            The treatment
          </p>
          <h2 id="lz-how-title" data-reveal>
            {lzHow.title}
          </h2>
          <p className="lead" data-reveal>
            {lzHow.intro}
          </p>
        </div>
        <div className={styles.beamRow} data-inview>
          <span className={styles.lightLine} aria-hidden="true" />
          <ol className={styles.beamSteps}>
            {lzHow.steps.map((step, i) => (
              <li key={step.lead} style={{ "--i": i } as CSSProperties} data-reveal>
                <span className={styles.node} aria-hidden="true">
                  <Icon name={step.icon as IconName} size={22} />
                </span>
                <p>
                  <strong>{step.lead}</strong> <Rich text={step.text} />
                </p>
              </li>
            ))}
          </ol>
        </div>
        <p className={styles.howAfter} data-reveal>
          <Icon name="chat" size={20} />
          <span>
            <Rich text={lzHow.after} />
          </span>
        </p>
      </div>
    </section>
  );
}

/** Benefits: the page's navy band, six tiles */
export function Benefits() {
  return (
    <section className={styles.benefits} aria-labelledby="lz-benefits-title">
      <div className="container">
        <div className={styles.benefitsHead}>
          <p className="label label-inverse" data-reveal>
            Why a laser
          </p>
          <h2 id="lz-benefits-title" data-reveal>
            {lzBenefits.title}
          </h2>
          <p className="lead" data-reveal>
            {lzBenefits.intro}
          </p>
        </div>
        <ul role="list" className={styles.benefitGrid}>
          {lzBenefits.items.map((item) => (
            <li key={item.lead} data-reveal>
              <span className={styles.benefitIcon} aria-hidden="true">
                <Icon name={item.icon as IconName} size={24} />
              </span>
              <p>
                <strong>{item.lead}</strong> {item.text}
              </p>
            </li>
          ))}
        </ul>
        <p className={styles.benefitsAfter} data-reveal>
          {lzBenefits.after}
        </p>
      </div>
    </section>
  );
}

/** Who is a candidate: the signs, the frenectomy note and the options paragraph */
export function Candidate() {
  return (
    <section className={styles.candidate} aria-labelledby="lz-candidate-title">
      <div className={`container ${styles.candidateGrid}`}>
        <div className={styles.candidateCopy}>
          <p className="label" data-reveal>
            Is it for you
          </p>
          <h2 id="lz-candidate-title" data-reveal>
            {lzCandidate.title}
          </h2>
          <p className="lead" data-reveal>
            {lzCandidate.intro}
          </p>
          <ul role="list" className={styles.candidateList}>
            {lzCandidate.items.map((item) => (
              <li key={item} data-reveal>
                <span aria-hidden="true">
                  <Icon name="check" size={14} strokeWidth={2.6} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.candidateSide}>
          <p className={styles.frenectomy} data-reveal>
            <span className={styles.frenIcon} aria-hidden="true">
              <Icon name="bolt" size={22} />
            </span>
            <span>{lzCandidate.frenectomy}</span>
          </p>
          <p className={styles.options} data-reveal>
            <Rich text={lzCandidate.after} />
          </p>
        </div>
      </div>
    </section>
  );
}

/** Recovery: four steps back to normal, on a filling bar */
export function Recovery() {
  return (
    <section className={styles.recovery} aria-labelledby="lz-recovery-title">
      <div className={`container ${styles.recoveryGrid}`}>
        <div className={styles.recoveryCopy}>
          <p className="label" data-reveal>
            Afterwards
          </p>
          <h2 id="lz-recovery-title" data-reveal>
            {lzRecovery.title}
          </h2>
          <p className="lead" data-reveal>
            {lzRecovery.intro}
          </p>
        </div>
        <div className={styles.recoveryCard}>
          <span className={styles.recoveryBar} aria-hidden="true" data-grow>
            <span data-grow-item />
          </span>
          <ul role="list" className={styles.recoveryList}>
            {lzRecovery.items.map((item) => (
              <li key={item.text} data-reveal>
                <span aria-hidden="true">
                  <Icon name={item.icon as IconName} size={20} />
                </span>
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
