import type { CSSProperties } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Rich } from "@/components/ui/Rich";
import { asBridges, asCare, asNewJersey, asPennsylvania, type TownCard } from "@/content/pages/locations/hub";
import c from "../restorative/Common.module.css";
import styles from "./AreasHub.module.css";

/**
 * Areas We Serve hub sections (order and heading levels follow 02 Content.md). Town cards are
 * a crawlable list under the two state H2s; the on-hold towns are never linked; bridge facts
 * as written, no toll amounts (handoff). Designs used on this page only: the drive-time
 * ladder (Trenton, "about 15 minutes", is a single mark), the state town boards, the five bridges across the river, and the care list.
 */

/** Hero visual: every town on one drive-time scale, nearest first (decorative) */
export function DriveLadder() {
  const rows = [
    { name: "Lower Makefield", from: 0, to: 10, pa: true },
    { name: "Morrisville", from: 5, to: 10, pa: true },
    { name: "Trenton", from: 15, to: 15 },
    { name: "Ewing", from: 15, to: 20 },
    { name: "Hopewell", from: 15, to: 20 },
    { name: "Washington Crossing", from: 15, to: 20, pa: true },
    { name: "Hamilton", from: 20, to: 25 },
    { name: "Lawrenceville", from: 20, to: 25 },
    { name: "Pennington", from: 20, to: 25 },
    { name: "New Hope", from: 25, to: 30, pa: true },
  ];
  return (
    <div className={styles.ladder} aria-hidden="true">
      <span className={styles.ladderTitle}>
        <Icon name="car" size={18} /> Within about 30 minutes
      </span>
      <ul className={styles.ladderRows}>
        {rows.map((row, i) => (
          <li key={row.name} style={{ "--from": row.from / 30, "--to": row.to / 30, "--i": i } as CSSProperties}>
            <span className={styles.ladderName}>{row.name}</span>
            <span className={styles.ladderTrack}>
              <span className={row.pa ? styles.barPa : styles.barNj} />
            </span>
          </li>
        ))}
      </ul>
      <span className={styles.ladderScale}>
        <span>0</span>
        <span>10</span>
        <span>20</span>
        <span>30 min</span>
      </span>
      <span className={styles.ladderKey}>
        <span className={styles.keyPa}>Pennsylvania</span>
        <span className={styles.keyNj}>New Jersey</span>
      </span>
    </div>
  );
}

/** One state's towns: the H2, the intro and the town cards (H3 each, the whole card a link) */
export function StateTowns({ state }: { state: "pa" | "nj" }) {
  const s = state === "pa" ? asPennsylvania : asNewJersey;
  const id = `as-${state}-title`;
  return (
    <section className={`${c.section} ${state === "pa" ? c.pearl : c.sky}`} aria-labelledby={id}>
      <div className="container">
        <div className={styles.stateHead}>
          <span className={`${styles.stateBadge} ${state === "pa" ? styles.badgePa : styles.badgeNj}`} aria-hidden="true" data-reveal>
            {state === "pa" ? "PA" : "NJ"}
          </span>
          <div className={c.copy}>
            <h2 id={id} data-reveal>
              {s.title}
            </h2>
            <p className="lead" data-reveal>
              {s.intro}
            </p>
          </div>
        </div>
        <ul role="list" className={`${styles.towns} ${state === "nj" ? styles.townsNj : ""}`}>
          {s.towns.map((town: TownCard) => (
            <li key={town.href} className={styles.town} data-reveal>
              <span className={styles.townTop} aria-hidden="true">
                <span className={styles.drive}>
                  <Icon name="clock" size={14} /> {town.drive}
                </span>
                <Icon name="arrowUpRight" size={18} />
              </span>
              <h3>{town.title}</h3>
              <p>
                <Rich text={town.text} />
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Getting here across the river: five bridges laid across the Delaware */
export function RiverBridges() {
  return (
    <section className={c.section} aria-labelledby="as-bridges-title">
      <div className="container">
        <div className={c.head}>
          <p className="label" data-reveal>
            Bridges
          </p>
          <h2 id="as-bridges-title" data-reveal>
            {asBridges.title}
          </h2>
          <p className="lead" data-reveal>
            {asBridges.intro}
          </p>
        </div>
        <div className={styles.river}>
          <span className={styles.bank} aria-hidden="true" data-reveal>
            <span>New Jersey</span>
          </span>
          <ul role="list" className={styles.bridges}>
            {asBridges.items.map((item) => (
              <li key={item.key} className={item.toll === "Toll-free" ? styles.bridgeFree : undefined} data-reveal>
                <span className={styles.toll} aria-hidden="true">
                  {item.toll}
                </span>
                <p>
                  <strong>{item.lead}</strong> {item.text}
                </p>
              </li>
            ))}
          </ul>
          <span className={`${styles.bank} ${styles.bankPa}`} aria-hidden="true" data-reveal>
            <span>Pennsylvania</span>
          </span>
        </div>
        <p className={c.note} data-reveal>
          <Icon name="directions" size={20} />
          <span>
            <Rich text={asBridges.after} />
          </span>
        </p>
      </div>
    </section>
  );
}

/** Care people travel for: the copy beside the four kinds of care */
export function TravelCare() {
  return (
    <section className={`${c.section} ${c.pearl}`} aria-labelledby="as-care-title">
      <div className={`container ${styles.care}`}>
        <div className={c.copy}>
          <p className="label" data-reveal>
            Worth the drive
          </p>
          <h2 id="as-care-title" data-reveal>
            {asCare.title}
          </h2>
          <p data-reveal>{asCare.intro}</p>
        </div>
        <ul role="list" className={styles.careList}>
          {asCare.items.map((item) => (
            <li key={item.lead} data-reveal>
              <span className={styles.careIcon} aria-hidden="true">
                <Icon name={item.icon as IconName} size={22} />
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

