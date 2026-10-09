import type { CSSProperties } from "react";
import { DataTable } from "@/components/ui/DataTable";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Rich } from "@/components/ui/Rich";
import SiteLink from "@/components/ui/SiteLink";
import { lwInvisalign, lwRest } from "@/content/pages/locations/nj";
import c from "../restorative/Common.module.css";
import styles from "./Lawrenceville.module.css";

/**
 * Lawrenceville, NJ sections (order and heading levels follow 02 Content.md). The Invisalign
 * offer matches /special-offers/; no conditional service+location links (handoff). Designs
 * used on this page only: the six-week check-up calendar with the four steps, the braces
 * table beside the teen card, and the everyday-care chips.
 */

/** Invisalign for adults and teens: the four steps on a six-week calendar, the table, Invisalign Teen */
export function AlignerCalendar() {
  const inv = lwInvisalign;
  return (
    <section className={c.section} aria-labelledby="lw-invisalign-title">
      <div className="container">
        <div className={styles.head}>
          <div className={c.copy}>
            <p className="label" data-reveal>
              Invisalign
            </p>
            <h2 id="lw-invisalign-title" data-reveal>
              {inv.title}
            </h2>
            <p className="lead" data-reveal>
              {inv.intro}
            </p>
          </div>
          <div className={styles.strip} aria-hidden="true" data-inview data-reveal>
            <span className={styles.stripTitle}>
              <Icon name="calendarCheck" size={18} /> Six weeks, one trip
            </span>
            <span className={styles.weeks}>
              {[1, 2, 3, 4, 5, 6].map((w) => (
                <span key={w} className={styles.week} style={{ "--i": w } as CSSProperties}>
                  <span className={styles.weekBar} />
                  {w % 2 === 0 ? (
                    <span className={w === 6 ? styles.pinVisit : styles.pinSwap}>
                      <Icon name={w === 6 ? "pin" : "aligner"} size={16} />
                    </span>
                  ) : null}
                  <span className={styles.weekLabel}>
                    <span className={styles.weekWord}>Week </span>
                    {w}
                  </span>
                </span>
              ))}
            </span>
            <span className={styles.stripKey}>
              <span className={styles.keySwap}>
                <Icon name="aligner" size={14} /> New aligners at home
              </span>
              <span className={styles.keyVisit}>
                <Icon name="pin" size={14} /> Check-up with us
              </span>
            </span>
          </div>
        </div>
        <ol className={styles.steps}>
          {inv.steps.map((step) => (
            <li key={step.lead} data-reveal>
              <span className={styles.stepIcon} aria-hidden="true">
                <Icon name={step.icon as IconName} size={22} />
              </span>
              <p>
                <strong>{step.lead}</strong> {step.text}
              </p>
            </li>
          ))}
        </ol>
        <div className={styles.more} data-reveal>
          <SiteLink href={inv.link.href} className="text-link">
            {inv.link.label} <Icon name="arrow" size={16} />
          </SiteLink>
        </div>
        <div className={styles.pair}>
          <div className={styles.braces}>
            <h3 data-reveal>{inv.braces.title}</h3>
            <div data-reveal>
              <DataTable label="Invisalign compared with metal braces" head={inv.braces.head} rows={inv.braces.rows} highlight={1} />
            </div>
          </div>
          <div className={styles.teen}>
            <span className={styles.teenDots} aria-hidden="true" data-reveal>
              {[1, 0.6, 0.25].map((o) => (
                <span key={o} style={{ "--o": o } as CSSProperties} />
              ))}
            </span>
            <h3 data-reveal>{inv.teen.title}</h3>
            <p data-reveal>
              <Rich text={inv.teen.text} />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/** The rest of your care: the copy with the everyday services as chips */
export function RestOfCare() {
  const chips: { icon: IconName; name: string }[] = [
    { icon: "toothClean", name: "Check-ups & cleanings" },
    { icon: "smile", name: "Children's visits" },
    { icon: "shield", name: "Crowns & fillings" },
    { icon: "firstAid", name: "Same-day emergencies" },
  ];
  return (
    <section className={`${c.section} ${c.sky}`} aria-labelledby="lw-rest-title">
      <div className="container">
        <div className={styles.rest}>
          <div className={c.copy}>
            <p className="label" data-reveal>
              Everyday care
            </p>
            <h2 id="lw-rest-title" data-reveal>
              {lwRest.title}
            </h2>
            <p data-reveal>
              <Rich text={lwRest.text} />
            </p>
          </div>
          <ul role="list" className={styles.chips} aria-hidden="true">
            {chips.map((chip) => (
              <li key={chip.name} data-reveal>
                <span>
                  <Icon name={chip.icon} size={20} />
                </span>
                {chip.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
