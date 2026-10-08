import type { CSSProperties } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Rich } from "@/components/ui/Rich";
import SiteLink from "@/components/ui/SiteLink";
import { flExpect, flHome, flHow, flNecessary, flSafety, flWho } from "@/content/pages/general/fluoride";
import styles from "./Fluoride.module.css";

/**
 * Fluoride Treatment sections (order and heading levels follow 02 Content.md). Designs used
 * on this page only: the enamel lattice, the mineral magnet, the benefit tiles, the
 * stopwatch strip, the statement band, the measured-drop safety card and the home routine.
 */

/** Hexagon centres for a small honeycomb (decorative) */
const cells = (() => {
  const out: { x: number; y: number; d: number }[] = [];
  const r = 26;
  const w = Math.sqrt(3) * r;
  for (let row = 0; row < 6; row++) {
    for (let col = 0; col < 6; col++) {
      const x = 40 + col * w + (row % 2 ? w / 2 : 0);
      const y = 40 + row * r * 1.5;
      out.push({ x: Math.round(x * 10) / 10, y, d: Math.round(Math.hypot(x - 170, y - 150)) });
    }
  }
  return out;
})();

const hex = (x: number, y: number, r = 24) =>
  Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i - Math.PI / 6;
    return `${Math.round((x + r * Math.cos(a)) * 10) / 10},${Math.round((y + r * Math.sin(a)) * 10) / 10}`;
  }).join(" ");

/** Hero visual: the enamel's crystal rebuilding, cell by cell (decorative) */
export function EnamelLattice() {
  return (
    <div className={styles.lattice} aria-hidden="true">
      <svg viewBox="0 0 340 300" className={styles.latticeArt}>
        {cells.map((cell, i) => (
          <polygon
            key={i}
            points={hex(cell.x, cell.y)}
            className={i % 5 === 0 ? styles.cellDeep : styles.cell}
            style={{ "--d": cell.d } as CSSProperties}
          />
        ))}
      </svg>
      <span className={styles.latticeTag}>
        <Icon name="drop" size={16} /> Remineralization
      </span>
      <div className={styles.latticeFoot}>
        <span>
          <Icon name="timer" size={16} /> Just a few minutes
        </span>
        <span>
          <Icon name="calendarCheck" size={16} /> Added to a checkup
        </span>
      </div>
    </div>
  );
}

/** How fluoride protects: acid pulls minerals out, fluoride draws them back */
export function HowFluoride() {
  return (
    <section className={styles.how} aria-labelledby="fl-how-title">
      <div className={`container ${styles.howGrid}`}>
        <div className={styles.howCopy}>
          <p className="label" data-reveal>
            The science
          </p>
          <h2 id="fl-how-title" data-reveal>
            {flHow.title}
          </h2>
          {flHow.paragraphs.map((text) => (
            <p key={text.slice(0, 24)} data-reveal>
              {text}
            </p>
          ))}
        </div>
        <div className={styles.magnet} aria-hidden="true" data-inview data-reveal>
          <div className={styles.magnetStage}>
            <span className={styles.magnetTitle}>
              <Icon name="alert" size={16} /> Acid pulls minerals out
            </span>
            <span className={styles.enamel}>
              {Array.from({ length: 7 }, (_, i) => (
                <span key={i} className={styles.mineralOut} style={{ "--i": i } as CSSProperties} />
              ))}
            </span>
          </div>
          <div className={styles.magnetStage}>
            <span className={styles.magnetTitle}>
              <Icon name="drop" size={16} /> Fluoride draws them back
            </span>
            <span className={`${styles.enamel} ${styles.enamelBack}`}>
              {Array.from({ length: 7 }, (_, i) => (
                <span key={i} className={styles.mineralIn} style={{ "--i": i } as CSSProperties} />
              ))}
            </span>
          </div>
          <div className={`${styles.magnetStage} ${styles.harder}`}>
            <span className={styles.magnetTitle}>
              <Icon name="shield" size={16} /> A harder crystal
            </span>
            <span className={`${styles.enamel} ${styles.enamelHard}`} />
          </div>
        </div>
      </div>
    </section>
  );
}

/** Who benefits: five tiles */
export function WhoBenefits() {
  return (
    <section className={styles.who} aria-labelledby="fl-who-title">
      <div className="container">
        <div className={styles.whoHead}>
          <p className="label" data-reveal>
            Higher cavity risk
          </p>
          <h2 id="fl-who-title" data-reveal>
            {flWho.title}
          </h2>
          <p className="lead" data-reveal>
            {flWho.intro}
          </p>
        </div>
        <ul role="list" className={styles.whoTiles}>
          {flWho.items.map((item) => (
            <li key={item.lead} data-reveal>
              <span className={styles.whoIcon} aria-hidden="true">
                <Icon name={item.icon as IconName} size={26} />
              </span>
              <p>
                <strong>{item.lead}</strong>
                {item.text ? ` ${item.text}` : null}
              </p>
            </li>
          ))}
        </ul>
        <p className={styles.whoAfter} data-reveal>
          {flWho.after}
        </p>
      </div>
    </section>
  );
}

/** What to expect: four steps on a stopwatch strip */
export function FluorideExpect() {
  return (
    <section className={styles.expect} aria-labelledby="fl-expect-title">
      <div className={`container ${styles.expectGrid}`}>
        <div className={styles.expectCopy}>
          <p className="label" data-reveal>
            At your visit
          </p>
          <h2 id="fl-expect-title" data-reveal>
            {flExpect.title}
          </h2>
          <p className="lead" data-reveal>
            {flExpect.intro}
          </p>
          <p data-reveal>
            <Rich text={flExpect.after} />
          </p>
        </div>
        <div className={styles.watch}>
          <span className={styles.watchBar} aria-hidden="true" data-grow>
            <span data-grow-item />
          </span>
          <ol className={styles.watchSteps}>
            {flExpect.steps.map((step) => (
              <li key={step.text} data-reveal>
                <span className={styles.watchIcon} aria-hidden="true">
                  <Icon name={step.icon as IconName} size={22} />
                </span>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/** Is fluoride treatment necessary: a statement band */
export function Necessary() {
  return (
    <section className={styles.necessary} aria-labelledby="fl-necessary-title">
      <div className={`container ${styles.necessaryGrid}`}>
        <h2 id="fl-necessary-title" data-reveal>
          {flNecessary.title}
        </h2>
        <div className={styles.necessaryCopy}>
          <p className={styles.necessaryLead} data-reveal>
            {flNecessary.paragraphs[0]}
          </p>
          <p className={styles.pairing} data-reveal>
            <span className={styles.pairIcons} aria-hidden="true">
              <Icon name="drop" size={20} />
              <Icon name="shield" size={20} />
            </span>
            <span>
              <Rich text={flNecessary.paragraphs[1]} />
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

/** Fluoride safety: a measured drop beside the copy */
export function Safety() {
  return (
    <section className={styles.safety} aria-labelledby="fl-safety-title">
      <div className="container">
        <div className={styles.safetyCard}>
          <div className={styles.measure} aria-hidden="true" data-inview data-reveal>
            <span className={styles.measureDrop}>
              <Icon name="drop" size={44} />
            </span>
            <span className={styles.measureScale}>
              {Array.from({ length: 6 }, (_, i) => (
                <span key={i} className={i < 2 ? styles.tickOn : undefined} />
              ))}
            </span>
            <span className={styles.measureText}>Small, measured amount</span>
          </div>
          <div className={styles.safetyCopy}>
            <p className="label" data-reveal>
              Safety
            </p>
            <h2 id="fl-safety-title" data-reveal>
              {flSafety.title}
            </h2>
            {flSafety.paragraphs.map((text) => (
              <p key={text.slice(0, 24)} data-reveal>
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/** Fluoride at home: the daily routine, morning and night */
export function AtHome() {
  return (
    <section className={styles.home} aria-labelledby="fl-home-title">
      <div className={`container ${styles.homeGrid}`}>
        <div className={styles.homeCopy}>
          <p className="label" data-reveal>
            Between visits
          </p>
          <h2 id="fl-home-title" data-reveal>
            {flHome.title}
          </h2>
          <p className="lead" data-reveal>
            {flHome.intro}
          </p>
          <div data-reveal>
            <SiteLink href={flHome.link.href} className="text-link">
              {flHome.link.label} <Icon name="arrow" size={16} />
            </SiteLink>
          </div>
        </div>
        <div className={styles.routine}>
          <span className={styles.routineSky} aria-hidden="true">
            <Icon name="sun" size={22} />
            <span className={styles.routineArc} />
            <Icon name="moon" size={22} />
          </span>
          <ul role="list" className={styles.routineList}>
            {flHome.items.map((item) => (
              <li key={item.text} data-reveal>
                <span className={styles.routineIcon} aria-hidden="true">
                  <Icon name={item.icon as IconName} size={22} />
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
