import type { CSSProperties } from "react";
import { DataTable } from "@/components/ui/DataTable";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Rich } from "@/components/ui/Rich";
import { brCandidate, brCare, brHow, brSteps, brVersus } from "@/content/pages/restorative/replace";
import styles from "./Bridges.module.css";

/**
 * Dental Bridges sections (order and heading levels follow 02 Content.md). Designs used on
 * this page only: the span drawing across the gap, the bridge anatomy board, the candidate
 * check, the bridge-vs-implant table, the three-appointment span and the care strip.
 */

const crown =
  "M8 18c3 0 5 1 8 1s5-1 8-1c5 0 7 4 7 9 0 4-2 7-3 12H9c-1-5-3-8-3-12 0-5 2-9 2-9Z";

/** Hero visual: two abutment teeth, the replacement tooth lowering into the gap (decorative) */
export function BridgeSpan() {
  return (
    <div className={styles.span} aria-hidden="true">
      <svg viewBox="0 0 320 220" className={styles.spanArt}>
        <defs>
          <linearGradient id="br-gum" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f6cfd0" />
            <stop offset="1" stopColor="#e5959c" />
          </linearGradient>
        </defs>
        <path d="M0 150c50 0 70-10 160-10s110 10 160 10v70H0Z" fill="url(#br-gum)" />
        {/* Abutment teeth with their crowns */}
        <g transform="translate(14 44) scale(2.6)">
          <path d={crown} fill="#ffffff" stroke="#1b3d6e" strokeWidth="1.1" />
          <path d="M10 39h16l-2 18H12Z" fill="#f5f1ea" stroke="#1b3d6e" strokeWidth="1" />
        </g>
        <g transform="translate(206 44) scale(2.6)">
          <path d={crown} fill="#ffffff" stroke="#1b3d6e" strokeWidth="1.1" />
          <path d="M10 39h16l-2 18H12Z" fill="#f5f1ea" stroke="#1b3d6e" strokeWidth="1" />
        </g>
        {/* The span joining them, and the replacement tooth */}
        <path className={styles.connector} d="M92 92h136" stroke="#6dbde8" strokeWidth="8" strokeLinecap="round" pathLength={1} />
        <g className={styles.pontic}>
          <g transform="translate(110 44) scale(2.6)">
            <path d={crown} fill="#e5f4fb" stroke="#1b6e9f" strokeWidth="1.1" />
          </g>
        </g>
      </svg>
      <div className={styles.spanLabels}>
        <span>Abutment</span>
        <span className={styles.labelMain}>Replacement tooth</span>
        <span>Abutment</span>
      </div>
      <span className={styles.spanFoot}>
        <Icon name="calendar" size={16} /> Two or three appointments
      </span>
    </div>
  );
}

/** How a bridge works: fixed (two ways), removable, materials */
export function HowBridge() {
  return (
    <section className={styles.how} aria-labelledby="br-how-title">
      <div className="container">
        <div className={styles.howHead}>
          <p className="label" data-reveal>
            How it works
          </p>
          <h2 id="br-how-title" data-reveal>
            {brHow.title}
          </h2>
          <p className="lead" data-reveal>
            {brHow.intro}
          </p>
        </div>
        <div className={styles.anatomy}>
          <div className={styles.fixed}>
            <h3 data-reveal>{brHow.fixed.title}</h3>
            <p data-reveal>{brHow.fixed.intro}</p>
            <ul role="list" className={styles.ways}>
              {brHow.fixed.items.map((item, i) => (
                <li key={item.lead} data-reveal>
                  <span className={styles.wayIcon} aria-hidden="true">
                    <Icon name={i ? "layers" : "veneer"} size={22} />
                  </span>
                  <p>
                    <strong>{item.lead}</strong> {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.removable}>
            <span className={styles.sideIcon} aria-hidden="true" data-reveal>
              <Icon name="case" size={24} />
            </span>
            <h3 data-reveal>{brHow.removable.title}</h3>
            <p data-reveal>{brHow.removable.text}</p>
          </div>
          <div className={styles.materialsCard}>
            <span className={styles.metalStrip} aria-hidden="true" data-reveal>
              <span className={styles.mPorcelain} />
              <span className={styles.mGold} />
              <span className={styles.mAlloy} />
            </span>
            <h3 data-reveal>{brHow.materials.title}</h3>
            <p data-reveal>{brHow.materials.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Are you a good candidate: a four-point check */
export function BridgeCandidate() {
  return (
    <section className={styles.candidate} aria-labelledby="br-candidate-title">
      <div className={`container ${styles.candidateGrid}`}>
        <div className={styles.candidateCopy}>
          <p className="label" data-reveal>
            Candidates
          </p>
          <h2 id="br-candidate-title" data-reveal>
            {brCandidate.title}
          </h2>
          <p className="lead" data-reveal>
            {brCandidate.intro}
          </p>
        </div>
        <div className={styles.check}>
          <ul role="list">
            {brCandidate.items.map((item) => (
              <li key={item.text} data-reveal>
                <span className={styles.checkIcon} aria-hidden="true">
                  <Icon name={item.icon as IconName} size={22} />
                </span>
                {item.text}
                <span className={styles.checkTick} aria-hidden="true">
                  <Icon name="check" size={14} strokeWidth={2.6} />
                </span>
              </li>
            ))}
          </ul>
          <p className={styles.checkAfter} data-reveal>
            {brCandidate.after}
          </p>
        </div>
      </div>
    </section>
  );
}

/** Bridge vs implant: the comparison table */
export function BridgeVsImplant() {
  return (
    <section className={styles.versus} aria-labelledby="br-versus-title">
      <div className="container">
        <div className={styles.versusHead}>
          <p className="label" data-reveal>
            Compare
          </p>
          <h2 id="br-versus-title" data-reveal>
            {brVersus.title}
          </h2>
          <p className="lead" data-reveal>
            {brVersus.intro}
          </p>
        </div>
        <div data-reveal>
          <DataTable label={brVersus.title} head={brVersus.head} rows={brVersus.rows} highlight={1} className={styles.table} />
        </div>
        <p className={styles.versusAfter} data-reveal>
          <Rich text={brVersus.after} />
        </p>
      </div>
    </section>
  );
}

/** Getting a bridge: three appointments spanned like a bridge */
export function BridgeSteps() {
  return (
    <section className={styles.steps} aria-labelledby="br-steps-title">
      <div className="container">
        <div className={styles.stepsHead}>
          <p className="label" data-reveal>
            The appointments
          </p>
          <h2 id="br-steps-title" data-reveal>
            {brSteps.title}
          </h2>
          <p className="lead" data-reveal>
            {brSteps.intro}
          </p>
        </div>
        <div className={styles.deck} data-grow>
          <span className={styles.deckLine} aria-hidden="true">
            <span data-grow-item />
          </span>
          <ol className={styles.piers}>
            {brSteps.steps.map((step, i) => (
              <li key={step.lead} style={{ "--i": i } as CSSProperties} data-reveal>
                <span className={styles.pierIcon} aria-hidden="true">
                  <Icon name={step.icon as IconName} size={24} />
                </span>
                <p>
                  <strong>{step.lead}</strong> {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
        <p className={styles.stepsAfter} data-reveal>
          <Rich text={brSteps.after} />
        </p>
      </div>
    </section>
  );
}

/** Care and how long it lasts: a 7-10 year band with the habits */
export function BridgeCare() {
  return (
    <section className={styles.care} aria-labelledby="br-care-title">
      <div className="container">
        <div className={styles.careCard}>
          <div className={styles.careCopy}>
            <h2 id="br-care-title" data-reveal>
              {brCare.title}
            </h2>
            <p data-reveal>{brCare.intro}</p>
            <span className={styles.years} aria-hidden="true" data-reveal>
              <span className={styles.yearsFigure}>7–10</span>
              <span>years or longer</span>
            </span>
          </div>
          <ul role="list" className={styles.careList}>
            {brCare.items.map((item) => (
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
