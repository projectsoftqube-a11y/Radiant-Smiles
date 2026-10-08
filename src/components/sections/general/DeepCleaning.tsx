import type { CSSProperties } from "react";
import { DataTable } from "@/components/ui/DataTable";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Rich } from "@/components/ui/Rich";
import { dcAfter, dcComfort, dcHow, dcNecessary, dcSigns, dcVersus } from "@/content/pages/general/deep-cleaning";
import styles from "./DeepCleaning.module.css";

/**
 * Deep Teeth Cleaning sections (order and heading levels follow 02 Content.md). Never
 * "periodontist" (handoff). Designs used on this page only: the probe gauge, the comparison
 * table, the sign tiles, the steps descending below the gumline, the comfort note, the
 * necessary split and the aftercare road.
 */

/** Hero visual: a probe-depth gauge, healthy up to 3 mm, deeper in pink (decorative) */
export function ProbeGauge() {
  const marks = [1, 2, 3, 4, 5, 6];
  return (
    <div className={styles.gauge} aria-hidden="true">
      <div className={styles.gaugeHead}>
        <span className={styles.gaugeTitle}>Gum pocket depth</span>
        <span className={styles.gaugeSub}>Measured before a deep cleaning</span>
      </div>
      <div className={styles.gaugeBody}>
        <span className={styles.scale}>
          {marks.map((mm) => (
            <span key={mm} className={mm > 3 ? styles.markDeep : styles.mark}>
              <span>{mm} mm</span>
            </span>
          ))}
        </span>
        <span className={styles.probe}>
          <span className={styles.probeTip} />
        </span>
        <span className={styles.zones}>
          <span className={styles.zoneHealthy}>
            <Icon name="check" size={14} strokeWidth={2.6} /> Up to 3 mm
          </span>
          <span className={styles.zoneDeep}>
            <Icon name="alert" size={14} /> Deeper than 3 mm
          </span>
        </span>
      </div>
      <span className={styles.gaugeFoot}>
        <Icon name="layers" size={16} /> Scaling & root planing
      </span>
    </div>
  );
}

/** Deep vs regular: the comparison table, the deep cleaning column highlighted */
export function Versus() {
  return (
    <section className={styles.versus} aria-labelledby="dc-versus-title">
      <div className="container">
        <div className={styles.versusHead}>
          <p className="label" data-reveal>
            Above or below the gumline
          </p>
          <h2 id="dc-versus-title" data-reveal>
            {dcVersus.title}
          </h2>
          <p className="lead" data-reveal>
            {dcVersus.intro}
          </p>
        </div>
        <div data-reveal>
          <DataTable label={dcVersus.title} head={dcVersus.head} rows={dcVersus.rows} highlight={2} className={styles.table} />
        </div>
      </div>
    </section>
  );
}

/** Signs you need a deep cleaning: six tiles, then the gum disease note */
export function Signs() {
  return (
    <section className={styles.signs} aria-labelledby="dc-signs-title">
      <div className={`container ${styles.signsGrid}`}>
        <div className={styles.signsCopy}>
          <p className="label" data-reveal>
            What the dentist looks for
          </p>
          <h2 id="dc-signs-title" data-reveal>
            {dcSigns.title}
          </h2>
          <p className="lead" data-reveal>
            {dcSigns.intro}
          </p>
          <p className={styles.signsAfter} data-reveal>
            {dcSigns.after}
          </p>
        </div>
        <ul role="list" className={styles.signTiles}>
          {dcSigns.items.map((item) => (
            <li key={item.text} data-reveal>
              <span className={styles.signIcon} aria-hidden="true">
                <Icon name={item.icon as IconName} size={22} />
              </span>
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** How it works: the first three steps above the gumline, the rest below it */
export function Descend() {
  const above = dcHow.steps.slice(0, 3);
  const below = dcHow.steps.slice(3);
  const step = (s: (typeof dcHow.steps)[number], i: number) => (
    <li key={s.lead} style={{ "--i": i } as CSSProperties} data-reveal>
      <span className={styles.descendIcon} aria-hidden="true">
        <Icon name={s.icon as IconName} size={22} />
      </span>
      <p>
        <strong>{s.lead}</strong> <Rich text={s.text} />
      </p>
    </li>
  );
  return (
    <section className={styles.how} aria-labelledby="dc-how-title">
      <div className="container">
        <div className={styles.howHead}>
          <p className="label" data-reveal>
            Step by step
          </p>
          <h2 id="dc-how-title" data-reveal>
            {dcHow.title}
          </h2>
          <p className="lead" data-reveal>
            {dcHow.intro}
          </p>
        </div>
        <ol className={styles.descend}>
          {above.map((s, i) => step(s, i))}
          <li className={styles.gumline} aria-hidden="true" data-reveal>
            <span>Below the gumline</span>
          </li>
          {below.map((s, i) => step(s, i + 3))}
        </ol>
        <p className={styles.howAfter} data-reveal>
          <Icon name="calendar" size={20} />
          <span>{dcHow.after}</span>
        </p>
      </div>
    </section>
  );
}

/** Staying comfortable: a headphones note */
export function Comfort() {
  return (
    <section className={styles.comfort} aria-labelledby="dc-comfort-title">
      <div className="container">
        <div className={styles.comfortCard}>
          <span className={styles.comfortIcon} aria-hidden="true" data-reveal>
            <Icon name="headphones" size={32} />
          </span>
          <div className={styles.comfortCopy}>
            <h2 id="dc-comfort-title" data-reveal>
              {dcComfort.title}
            </h2>
            <p data-reveal>{dcComfort.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Is deep cleaning necessary: the answer beside what it helps with */
export function DeepNecessary() {
  return (
    <section className={styles.necessary} aria-labelledby="dc-necessary-title">
      <div className={`container ${styles.necessaryGrid}`}>
        <div className={styles.necessaryCopy}>
          <p className="label" data-reveal>
            The short answer
          </p>
          <h2 id="dc-necessary-title" data-reveal>
            {dcNecessary.title}
          </h2>
          <p className="lead" data-reveal>
            {dcNecessary.intro}
          </p>
        </div>
        <div className={styles.helps}>
          <ul role="list" className={styles.helpsList}>
            {dcNecessary.items.map((item) => (
              <li key={item} data-reveal>
                <span aria-hidden="true">
                  <Icon name="shield" size={20} />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <p className={styles.helpsAfter} data-reveal>
            {dcNecessary.after}
          </p>
        </div>
      </div>
    </section>
  );
}

/** Aftercare and what comes next: a road of three stops */
export function AfterRoad() {
  return (
    <section className={styles.after} aria-labelledby="dc-after-title">
      <div className="container">
        <div className={styles.afterHead}>
          <p className="label" data-reveal>
            After your deep cleaning
          </p>
          <h2 id="dc-after-title" data-reveal>
            {dcAfter.title}
          </h2>
        </div>
        <div className={styles.road} data-grow>
          <span className={styles.roadLine} aria-hidden="true">
            <span data-grow-item />
          </span>
          {dcAfter.stages.map((stage) => (
            <div key={stage.name} className={styles.stop} data-reveal>
              <span className={styles.stopIcon} aria-hidden="true">
                <Icon name={stage.icon as IconName} size={24} />
              </span>
              <span className={styles.stopName} aria-hidden="true">
                {stage.name}
              </span>
              <p>
                <Rich text={stage.text} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
