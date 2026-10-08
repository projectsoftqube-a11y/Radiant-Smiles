import type { CSSProperties } from "react";
import { DataTable } from "@/components/ui/DataTable";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Rich } from "@/components/ui/Rich";
import { ngCare, ngCompare, ngMake, ngSigns, ngWork } from "@/content/pages/general/night-guards";
import styles from "./NightGuards.module.css";

/**
 * Night Guards sections (order and heading levels follow 02 Content.md). TMJ only as a
 * possible cause of jaw pain; no prices (handoff). Designs used on this page only: the night
 * arch, the morning signs, the three-guard table, the two-visit lab journey, the shielded
 * dental work and the care routine.
 */

const toothPath =
  "M7.2 3.6c1.6 0 2.9.9 4.8.9s3.2-.9 4.8-.9c2.3 0 3.7 2 3.7 4.6 0 2.3-1 3.9-1.6 6.3-.6 2.6-.9 6-2.6 6-1.9 0-1.8-4.6-4.3-4.6s-2.4 4.6-4.3 4.6c-1.7 0-2-3.4-2.6-6-.6-2.4-1.6-4-1.6-6.3 0-2.6 1.4-4.6 3.7-4.6Z";

/** Hero visual: the night sky, an upper arch of teeth and the guard settling over them (decorative) */
export function NightArch() {
  const teeth = Array.from({ length: 8 }, (_, i) => {
    const t = (i - 3.5) / 3.5;
    return { x: 50 + t * 40, y: 36 + (1 - t * t) * 16, r: 180 - t * 26 };
  });
  return (
    <div className={styles.night} aria-hidden="true">
      <span className={styles.moon}>
        <Icon name="moon" size={30} />
      </span>
      <span className={styles.zzz}>Z z z</span>
      <div className={styles.arch}>
        <span className={styles.gum} />
        {teeth.map((tooth, i) => (
          <svg
            key={i}
            viewBox="0 0 24 24"
            className={styles.archTooth}
            style={{ left: `${tooth.x}%`, top: `${tooth.y}%`, "--r": `${tooth.r}deg` } as CSSProperties}
          >
            <path d={toothPath} />
          </svg>
        ))}
        <span className={styles.guard} />
      </div>
      <div className={styles.nightTags}>
        <span>
          <Icon name="flask" size={16} /> Lab-made
        </span>
        <span>
          <Icon name="check" size={16} /> Made from an impression of your teeth
        </span>
      </div>
    </div>
  );
}

/** Signs you grind: six morning signs, then the TMJ and protection notes */
export function GrindSigns() {
  return (
    <section className={styles.signs} aria-labelledby="ng-signs-title">
      <div className="container">
        <div className={styles.signsHead}>
          <p className="label" data-reveal>
            Bruxism
          </p>
          <h2 id="ng-signs-title" data-reveal>
            {ngSigns.title}
          </h2>
          <p className="lead" data-reveal>
            {ngSigns.intro}
          </p>
        </div>
        <ul role="list" className={styles.morning}>
          {ngSigns.items.map((item) => (
            <li key={item.text} data-reveal>
              <span className={styles.morningIcon} aria-hidden="true">
                <Icon name={item.icon as IconName} size={24} />
              </span>
              {item.text}
            </li>
          ))}
        </ul>
        <div className={styles.signsNotes}>
          <p className={styles.tmj} data-reveal>
            <Icon name="chat" size={22} />
            <span>{ngSigns.paragraphs[0]}</span>
          </p>
          <p className={styles.force} data-reveal>
            <Icon name="shield" size={22} />
            <span>
              <Rich text={ngSigns.paragraphs[1]} />
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

/** Custom vs store-bought: the three-guard table, custom highlighted */
export function GuardTable() {
  return (
    <section className={styles.compare} aria-labelledby="ng-compare-title">
      <div className="container">
        <div className={styles.compareHead}>
          <p className="label" data-reveal>
            Three kinds of guard
          </p>
          <h2 id="ng-compare-title" data-reveal>
            {ngCompare.title}
          </h2>
          <p className="lead" data-reveal>
            {ngCompare.intro}
          </p>
        </div>
        <div data-reveal>
          <DataTable label={ngCompare.title} head={ngCompare.head} rows={ngCompare.rows} highlight={3} className={styles.guardTable} />
        </div>
        <p className={styles.compareAfter} data-reveal>
          {ngCompare.after}
        </p>
      </div>
    </section>
  );
}

/** How we make it: visit, lab, visit */
export function LabJourney() {
  return (
    <section className={styles.make} aria-labelledby="ng-make-title">
      <div className="container">
        <div className={styles.makeHead}>
          <p className="label" data-reveal>
            Two visits
          </p>
          <h2 id="ng-make-title" data-reveal>
            {ngMake.title}
          </h2>
          <p className="lead" data-reveal>
            {ngMake.intro}
          </p>
        </div>
        <ol className={styles.journey}>
          {ngMake.steps.map((step) => (
            <li key={step.lead} className={step.tag === "Dental lab" ? styles.labStop : undefined} data-reveal>
              <span className={styles.journeyTag} aria-hidden="true">
                <Icon name={step.icon as IconName} size={18} />
                {step.tag}
              </span>
              <p>
                <strong>{step.lead}</strong> {step.text}
              </p>
            </li>
          ))}
        </ol>
        <p className={styles.makeAfter} data-reveal>
          <Icon name="case" size={20} />
          <span>{ngMake.after}</span>
        </p>
      </div>
    </section>
  );
}

/** Protects your dental work: a guard over fillings, crowns, bridges and implants */
export function DentalWork() {
  const work: { icon: IconName; name: string }[] = [
    { icon: "tooth", name: "Fillings" },
    { icon: "veneer", name: "Crowns" },
    { icon: "layers", name: "Bridges" },
    { icon: "implant", name: "Implants" },
  ];
  return (
    <section className={styles.work} aria-labelledby="ng-work-title">
      <div className="container">
        <div className={styles.workCard}>
          <div className={styles.shielded} aria-hidden="true" data-reveal>
            <span className={styles.shieldBand}>
              <Icon name="shield" size={20} /> Night guard
            </span>
            <span className={styles.workRow}>
              {work.map((w) => (
                <span key={w.name}>
                  <Icon name={w.icon} size={22} />
                  {w.name}
                </span>
              ))}
            </span>
          </div>
          <div className={styles.workCopy}>
            <h2 id="ng-work-title" data-reveal>
              {ngWork.title}
            </h2>
            {ngWork.paragraphs.map((text) => (
              <p key={text.slice(0, 24)} data-reveal>
                <Rich text={text} />
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/** Caring for your night guard: the daily routine */
export function GuardCare() {
  return (
    <section className={styles.care} aria-labelledby="ng-care-title">
      <div className="container">
        <div className={styles.careHead}>
          <p className="label" data-reveal>
            Daily care
          </p>
          <h2 id="ng-care-title" data-reveal>
            {ngCare.title}
          </h2>
          <p className="lead" data-reveal>
            {ngCare.intro}
          </p>
        </div>
        <ul role="list" className={styles.routine}>
          {ngCare.items.map((item) => (
            <li key={item.text} data-reveal>
              <span className={styles.routineIcon} aria-hidden="true">
                <Icon name={item.icon as IconName} size={24} />
              </span>
              {item.text}
            </li>
          ))}
        </ul>
        <p className={styles.careAfter} data-reveal>
          <Icon name="phone" size={20} />
          <span>{ngCare.after}</span>
        </p>
      </div>
    </section>
  );
}
