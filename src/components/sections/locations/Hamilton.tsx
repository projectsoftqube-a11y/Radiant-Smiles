import { Icon, type IconName } from "@/components/ui/Icon";
import { Rich } from "@/components/ui/Rich";
import { haDentures, haPlaces, haSaturday } from "@/content/pages/locations/nj";
import c from "../restorative/Common.module.css";
import styles from "./Hamilton.module.css";

/**
 * Hamilton, NJ sections (order and heading levels follow 02 Content.md). The communities are
 * sections of this page, and it is always "Hamilton, NJ" (handoff). Designs used on this
 * page only: the neighbourhood postcards, the Saturday calendar page, and the denture
 * service shelf.
 */

/** Hamilton Square, Mercerville and Yardville: one postcard per community */
export function Postcards() {
  return (
    <section className={`${c.section} ${c.pearl}`} aria-labelledby="ha-places-title">
      <div className="container">
        <div className={c.head}>
          <p className="label" data-reveal>
            Hamilton Township
          </p>
          <h2 id="ha-places-title" data-reveal>
            {haPlaces.title}
          </h2>
          <p className="lead" data-reveal>
            {haPlaces.intro}
          </p>
        </div>
        <ul role="list" className={styles.cards}>
          {haPlaces.items.map((item) => (
            <li key={item.lead} className={styles.card} data-reveal>
              <span className={styles.cardTop} aria-hidden="true">
                <span className={styles.postmark}>
                  <Icon name="pin" size={14} /> Hamilton, NJ
                </span>
                <span className={styles.stamp}>{item.zip ? item.zip : <Icon name="pin" size={18} />}</span>
              </span>
              <p className={styles.cardText}>
                <strong>{item.lead}</strong> {item.text}
              </p>
            </li>
          ))}
        </ul>
        <p className={c.note} data-reveal>
          <Icon name="pin" size={20} />
          <span>{haPlaces.after}</span>
        </p>
      </div>
    </section>
  );
}

/** Open on Saturdays: the copy beside a calendar page */
export function SaturdayPage() {
  return (
    <section className={c.section} aria-labelledby="ha-saturday-title">
      <div className={`container ${c.split}`}>
        <div className={styles.calendar} aria-hidden="true" data-reveal>
          <span className={styles.calTop}>Saturday</span>
          <span className={styles.calBody}>
            <span className={styles.calHours}>8 am – 2 pm</span>
            <span className={styles.calList}>
              <span>
                <Icon name="users" size={16} /> Family check-ups
              </span>
              <span>
                <Icon name="smile" size={16} /> Denture appointments
              </span>
              <span>
                <Icon name="refresh" size={16} /> Same-day denture repairs
              </span>
            </span>
          </span>
        </div>
        <div className={c.copy}>
          <p className="label" data-reveal>
            Weekends
          </p>
          <h2 id="ha-saturday-title" data-reveal>
            {haSaturday.title}
          </h2>
          <p data-reveal>
            <Rich text={haSaturday.text} />
          </p>
        </div>
      </div>
    </section>
  );
}

/** Dentures, relines and same-day repairs: the intro, then each service on a shelf */
export function DentureShelf() {
  const d = haDentures;
  const meta: Record<string, { icon: IconName; when: string }> = {
    new: { icon: "smile", when: "Full, partial or immediate" },
    hard: { icon: "layers", when: "About every two years" },
    soft: { icon: "drop", when: "One to two years" },
    palliative: { icon: "heart", when: "A few weeks" },
    repair: { icon: "refresh", when: "Often the same day" },
  };
  return (
    <section className={`${c.section} ${c.blush}`} aria-labelledby="ha-dentures-title">
      <div className="container">
        <div className={c.head}>
          <p className="label" data-reveal>
            Dentures
          </p>
          <h2 id="ha-dentures-title" data-reveal>
            {d.title}
          </h2>
          <p className="lead" data-reveal>
            {d.intro}
          </p>
        </div>
        <ul role="list" className={styles.shelf}>
          {d.items.map((item) => (
            <li key={item.key} className={item.key === "repair" ? styles.shelfRepair : undefined} data-reveal>
              <span className={styles.shelfTop} aria-hidden="true">
                <span className={styles.shelfIcon}>
                  <Icon name={meta[item.key].icon} size={22} />
                </span>
                <span className={styles.shelfWhen}>{meta[item.key].when}</span>
              </span>
              <p>
                <strong>{item.lead}</strong> <Rich text={item.text} />
              </p>
            </li>
          ))}
        </ul>
        <p className={c.note} data-reveal>
          <Icon name="implant" size={20} />
          <span>
            <Rich text={d.after} />
          </span>
        </p>
      </div>
    </section>
  );
}
