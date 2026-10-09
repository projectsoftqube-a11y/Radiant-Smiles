import type { CSSProperties } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Rich } from "@/components/ui/Rich";
import { nhBetween, nhCosmetic, nhPlanned } from "@/content/pages/locations/pa";
import c from "../restorative/Common.module.css";
import styles from "./NewHope.module.css";

/**
 * New Hope, PA sections (order and heading levels follow 02 Content.md). Whitening offer
 * matches /special-offers/ (handoff). Designs used on this page only: the three treatments on
 * the road, the one-visit checklist with the hours, and the today-or-next-slot fork.
 */

/** Cosmetic dentistry with fewer trips: three treatments along the road south */
export function CosmeticRoad() {
  return (
    <section className={c.section} aria-labelledby="nh-cosmetic-title">
      <div className="container">
        <div className={c.head}>
          <p className="label" data-reveal>
            Cosmetic care
          </p>
          <h2 id="nh-cosmetic-title" data-reveal>
            {nhCosmetic.title}
          </h2>
          <p className="lead" data-reveal>
            {nhCosmetic.intro}
          </p>
        </div>
        <div className={styles.road} aria-hidden="true" data-inview>
          <span className={styles.roadLine} />
          <span className={styles.car}>
            <Icon name="car" size={20} />
          </span>
        </div>
        <div className={styles.stops}>
          {nhCosmetic.items.map((item, i) => (
            <div key={item.key} className={styles.stop} style={{ "--i": i } as CSSProperties}>
              <span className={styles.stopTop} aria-hidden="true" data-reveal>
                <span className={styles.stopIcon}>
                  <Icon name={item.icon as IconName} size={24} />
                </span>
                <span className={styles.stopBadge}>{item.trips}</span>
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

/** A visit planned around the drive: the copy beside the one-visit checklist and the hours */
export function OneTrip() {
  const jobs = ["Digital X-rays", "Teeth & gums checked under magnification", "A cleaning", "Whitening, bonding or veneers talked through"];
  return (
    <section className={`${c.section} ${c.pearl}`} aria-labelledby="nh-planned-title">
      <div className={`container ${c.split}`}>
        <div className={styles.trip} aria-hidden="true" data-reveal>
          <span className={styles.tripTitle}>
            <Icon name="clipboard" size={18} /> One visit, several jobs
          </span>
          <ul>
            {jobs.map((job) => (
              <li key={job}>
                <span className={styles.tripTick}>
                  <Icon name="check" size={14} strokeWidth={2.8} />
                </span>
                {job}
              </li>
            ))}
          </ul>
          <span className={styles.tripHours}>
            <span>
              <strong>Sat</strong> 8 am – 2 pm
            </span>
            <span>
              <strong>Wed &amp; Thu</strong> until 6 pm
            </span>
          </span>
        </div>
        <div className={c.copy}>
          <p className="label" data-reveal>
            Fewer trips
          </p>
          <h2 id="nh-planned-title" data-reveal>
            {nhPlanned.title}
          </h2>
          {nhPlanned.paragraphs.map((text) => (
            <p key={text.slice(0, 24)} data-reveal>
              <Rich text={text} />
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

/** If something goes wrong between visits: the copy beside the today-or-next-slot fork */
export function BetweenFork() {
  return (
    <section className={c.section} aria-labelledby="nh-between-title">
      <div className="container">
        <div className={styles.fork}>
          <div className={styles.forkCopy}>
            <p className="label" data-reveal>
              Between visits
            </p>
            <h2 id="nh-between-title" data-reveal>
              {nhBetween.title}
            </h2>
            <p data-reveal>
              <Rich text={nhBetween.text} />
            </p>
          </div>
          <div className={styles.forkArt} aria-hidden="true" data-reveal>
            <span className={styles.forkStart}>
              <Icon name="phone" size={18} /> Call us first
            </span>
            <span className={styles.forkLines} />
            <span className={styles.forkWays}>
              <span className={styles.forkToday}>
                <Icon name="car" size={18} /> Drive in today
              </span>
              <span className={styles.forkLater}>
                <Icon name="calendar" size={18} /> Next routine slot
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
