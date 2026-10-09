import { Icon, type IconName } from "@/components/ui/Icon";
import { Portrait } from "@/components/ui/Portrait";
import { Rich } from "@/components/ui/Rich";
import { images } from "@/content/images";
import { moFamily, moRepairs, moSameDay } from "@/content/pages/locations/pa";
import c from "../restorative/Common.module.css";
import { SafetyLine } from "./Location";
import styles from "./Morrisville.module.css";

/**
 * Morrisville, PA sections (order and heading levels follow 02 Content.md). No ZIP outside
 * the NAP; the 911 line stays visible (handoff). Designs used on this page only: the
 * same-day card, the repair bench, and the household card with the two dentists.
 */

/** Same-day problems: the copy and safety line beside the "what counts" card */
export function SameDayCard() {
  const s = moSameDay;
  return (
    <section className={`${c.section} ${c.blush}`} aria-labelledby="mo-sameday-title">
      <div className={`container ${styles.sameDay}`}>
        <div className={c.copy}>
          <p className="label" data-reveal>
            Same-day help
          </p>
          <h2 id="mo-sameday-title" data-reveal>
            {s.title}
          </h2>
          <p className="lead" data-reveal>
            {s.intro}
          </p>
          <p data-reveal>
            <Rich text={s.after} />
          </p>
          <SafetyLine />
        </div>
        <div className={styles.counts}>
          <span className={styles.countsTop} aria-hidden="true" data-reveal>
            <Icon name="clock" size={18} /> Same-day slots every business day
          </span>
          <p className={styles.countsTitle} data-reveal>
            {s.listIntro}
          </p>
          <ul role="list">
            {s.items.map((item) => (
              <li key={item.text} data-reveal>
                <span className={styles.countIcon} aria-hidden="true">
                  <Icon name={item.icon as IconName} size={20} />
                </span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/** Quick repairs: the microscope band and four repair tiles */
export function RepairBench() {
  const icons: Record<string, IconName> = { filling: "drop", crown: "shield", root: "toothClean", implant: "implant" };
  return (
    <section className={c.section} aria-labelledby="mo-repairs-title">
      <div className="container">
        <div className={styles.benchHead}>
          <div className={c.copy}>
            <p className="label" data-reveal>
              Repairs
            </p>
            <h2 id="mo-repairs-title" data-reveal>
              {moRepairs.title}
            </h2>
          </div>
          <p className={styles.scope} data-reveal>
            <Icon name="microscope" size={22} />
            <span>{moRepairs.intro}</span>
          </p>
        </div>
        <ul role="list" className={styles.bench}>
          {moRepairs.items.map((item) => (
            <li key={item.key} className={styles.tool} data-reveal>
              <span className={styles.toolIcon} aria-hidden="true">
                <Icon name={icons[item.key]} size={26} />
              </span>
              <p>
                <strong>{item.lead}</strong> <Rich text={item.text} />
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Family dentistry: the copy, then the household card with the two dentists */
export function HouseholdCard() {
  return (
    <section className={`${c.section} ${c.pearl}`} aria-labelledby="mo-family-title">
      <div className={`container ${c.split}`}>
        <div className={c.copy}>
          <p className="label" data-reveal>
            Family care
          </p>
          <h2 id="mo-family-title" data-reveal>
            {moFamily.title}
          </h2>
          <p data-reveal>
            <Rich text={moFamily.text} />
          </p>
        </div>
        <div className={styles.who}>
          <span className={styles.whoFaces} aria-hidden="true" data-reveal>
            <Portrait image={images.drBhalala} ratio="1 / 1" sizes="96px" className={styles.whoFace} />
            <Portrait image={images.drGadria} ratio="1 / 1" sizes="96px" className={styles.whoFace} />
          </span>
          <h3 data-reveal>{moFamily.who.title}</h3>
          <p data-reveal>
            <Rich text={moFamily.who.text} />
          </p>
        </div>
      </div>
    </section>
  );
}
