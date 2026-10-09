import type { CSSProperties } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Rich } from "@/components/ui/Rich";
import { hoImplants, hoTitusville } from "@/content/pages/locations/nj";
import c from "../restorative/Common.module.css";
import styles from "./Hopewell.module.css";

/**
 * Hopewell, NJ sections (order and heading levels follow 02 Content.md). Titusville and
 * Washington Crossing, NJ are a section here; no drive time for Hopewell Borough; the
 * implant offer matches /special-offers/ (handoff). Designs used on this page only: the
 * nested-township card, and the tooth-replacement options with the healing months.
 */

/** Titusville and Washington Crossing, NJ: copy beside the township nesting card */
export function TownshipNest() {
  const t = hoTitusville;
  return (
    <section className={`${c.section} ${c.pearl}`} aria-labelledby="ho-titusville-title">
      <div className={`container ${c.split}`}>
        <div className={c.copy}>
          <p className="label" data-reveal>
            Hopewell Township
          </p>
          <h2 id="ho-titusville-title" data-reveal>
            {t.title}
          </h2>
          <p data-reveal>{t.text}</p>
          <h3 className={styles.subTitle} data-reveal>
            {t.township.title}
          </h3>
          <p data-reveal>
            <Rich text={t.township.text} />
          </p>
        </div>
        <div className={styles.nest} aria-hidden="true" data-reveal>
          <span className={styles.nestName}>Hopewell Township</span>
          <span className={styles.nestTag}>Largest in Mercer County by area</span>
          <span className={styles.nestInner}>
            <span className={`${styles.place} ${styles.placeRiver}`}>
              <strong>Titusville</strong>
              <small>On NJ-29, by the river</small>
            </span>
            <span className={`${styles.place} ${styles.placeRiver}`}>
              <strong>Washington Crossing, NJ</strong>
              <small>The toll-free bridge</small>
            </span>
            <span className={styles.place}>
              <strong>Hopewell Borough</strong>
              <small>Farther from the river</small>
            </span>
            <span className={styles.place}>
              <strong>Pennington</strong>
              <small>Has its own page</small>
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}

/** Replacing missing teeth: four options (H3 each) and the healing months */
export function ReplaceOptions() {
  const icons: Record<string, IconName> = { single: "implant", healing: "clock", retained: "screw", dentures: "smile" };
  const months = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <section className={c.section} aria-labelledby="ho-implants-title">
      <div className="container">
        <div className={styles.head}>
          <div className={c.copy}>
            <p className="label" data-reveal>
              Missing teeth
            </p>
            <h2 id="ho-implants-title" data-reveal>
              {hoImplants.title}
            </h2>
            <p className="lead" data-reveal>
              {hoImplants.intro}
            </p>
          </div>
          <div className={styles.months} aria-hidden="true" data-inview data-reveal>
            <span className={styles.monthsTitle}>Placement to final crown</span>
            <span className={styles.monthBar}>
              {months.map((m) => (
                <span key={m} className={m > 6 ? styles.monthMaybe : undefined} style={{ "--i": m } as CSSProperties} />
              ))}
            </span>
            <span className={styles.monthScale}>
              <span>Post placed</span>
              <span>Six to eight months</span>
            </span>
            <span className={styles.offer}>
              <strong>$500 off</strong> implant, abutment &amp; crown
            </span>
          </div>
        </div>
        <div className={styles.options}>
          {hoImplants.items.map((item) => (
            <div key={item.key} className={styles.option}>
              <span className={styles.optionIcon} aria-hidden="true" data-reveal>
                <Icon name={icons[item.key]} size={24} />
              </span>
              <h3 data-reveal>{item.title}</h3>
              <p data-reveal>
                <Rich text={item.text} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
