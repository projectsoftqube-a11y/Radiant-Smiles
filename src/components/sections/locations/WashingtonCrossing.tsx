import type { CSSProperties } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Rich } from "@/components/ui/Rich";
import { wcFamily, wcRestorative, wcVillages } from "@/content/pages/locations/pa";
import c from "../restorative/Common.module.css";
import styles from "./WashingtonCrossing.module.css";

/**
 * Washington Crossing, PA sections (order and heading levels follow 02 Content.md). Upper
 * Makefield is a section here, not its own page; the review is plain text (handoff). Designs
 * used on this page only: the village stops along River Road, the restorative quartet with
 * the quote, and the family band.
 */

/** Upper Makefield households: the copy beside the villages as stops along River Road */
export function VillageStops() {
  return (
    <section className={`${c.section} ${c.pearl}`} aria-labelledby="wc-villages-title">
      <div className={`container ${c.split}`}>
        <div className={c.copy}>
          <p className="label" data-reveal>
            Upper Makefield
          </p>
          <h2 id="wc-villages-title" data-reveal>
            {wcVillages.title}
          </h2>
          {wcVillages.paragraphs.map((text) => (
            <p key={text.slice(0, 24)} data-reveal>
              <Rich text={text} />
            </p>
          ))}
        </div>
        <div className={styles.line} aria-hidden="true" data-inview data-reveal>
          <span className={styles.lineTitle}>
            <Icon name="pin" size={18} /> Upper Makefield Township
          </span>
          <ol className={styles.stops}>
            {wcVillages.villages.map((name, i) => (
              <li key={name} className={i === 0 ? styles.stopMain : undefined} style={{ "--i": i } as CSSProperties}>
                <span className={styles.stopDot} />
                {name}
              </li>
            ))}
          </ol>
          <span className={styles.lineFoot}>
            <Icon name="directions" size={16} /> River Road (PA-32) to the office
          </span>
        </div>
      </div>
    </section>
  );
}

/** Restorative care: the microscope intro, four treatment cards and the patient quote */
export function RestorativeQuartet() {
  const r = wcRestorative;
  const icons: Record<string, IconName> = { crown: "shield", onlay: "layers", root: "toothClean", "3d": "xray" };
  return (
    <section className={c.section} aria-labelledby="wc-restorative-title">
      <div className="container">
        <div className={styles.quartetHead}>
          <div className={c.copy}>
            <p className="label" data-reveal>
              Restorative care
            </p>
            <h2 id="wc-restorative-title" data-reveal>
              {r.title}
            </h2>
          </div>
          <p className={styles.scope} data-reveal>
            <span className={styles.scopeIcon} aria-hidden="true">
              <Icon name="microscope" size={24} />
            </span>
            <span>{r.intro}</span>
          </p>
        </div>
        <div className={styles.quartet}>
          {r.items.map((item) => (
            <div key={item.key} className={styles.card}>
              <span className={styles.cardTop} aria-hidden="true" data-reveal>
                <span className={styles.cardIcon}>
                  <Icon name={icons[item.key]} size={22} />
                </span>
                <span className={styles.cardTag}>{item.tag}</span>
              </span>
              <h3 data-reveal>{item.title}</h3>
              <p data-reveal>
                <Rich text={item.text} />
              </p>
            </div>
          ))}
        </div>
        <figure className={styles.quote} data-reveal>
          <span className={styles.quoteMark} aria-hidden="true">
            &ldquo;
          </span>
          <blockquote>
            <p>&ldquo;{r.quote.text}&rdquo;</p>
          </blockquote>{" "}
          <figcaption>{r.quote.author}</figcaption>
        </figure>
      </div>
    </section>
  );
}

/** The whole family: one band with the everyday care it covers */
export function FamilyBand() {
  const chips: { icon: IconName; name: string }[] = [
    { icon: "calendarCheck", name: "Check-ups" },
    { icon: "toothClean", name: "Cleanings" },
    { icon: "smile", name: "Children's visits" },
    { icon: "firstAid", name: "Same-day emergencies" },
  ];
  return (
    <section className={`${c.section} ${c.sky}`} aria-labelledby="wc-family-title">
      <div className="container">
        <div className={styles.band}>
          <div className={c.copy}>
            <p className="label" data-reveal>
              Family care
            </p>
            <h2 id="wc-family-title" data-reveal>
              {wcFamily.title}
            </h2>
            <p data-reveal>
              <Rich text={wcFamily.text} />
            </p>
          </div>
          <ul role="list" className={styles.bandChips} aria-hidden="true">
            {chips.map((chip) => (
              <li key={chip.name} data-reveal>
                <Icon name={chip.icon} size={22} />
                {chip.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
