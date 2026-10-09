import type { CSSProperties } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";
import SiteLink from "@/components/ui/SiteLink";
import { peNervous, peTech } from "@/content/pages/locations/nj";
import c from "../restorative/Common.module.css";
import styles from "./Pennington.module.css";

/**
 * Pennington, NJ sections (order and heading levels follow 02 Content.md). A short page by
 * design; technology items stay until the practice says otherwise (handoff). Designs used
 * on this page only: the calm-breath card with the comfort list, and the chair-side
 * technology dial.
 */

/** Nervous patients: the explain-first promise, a slow breathing glow, and comfort you can ask for */
export function CalmCard() {
  const n = peNervous;
  return (
    <section className={`${c.section} ${c.sky}`} aria-labelledby="pe-nervous-title">
      <div className="container">
        <div className={styles.calm}>
          <div className={c.copy}>
            <p className="label" data-reveal>
              Nervous patients
            </p>
            <h2 id="pe-nervous-title" data-reveal>
              {n.title}
            </h2>
            <p className="lead" data-reveal>
              {n.intro}
            </p>
            <span className={styles.order} aria-hidden="true" data-reveal>
              <span>What we found</span>
              <Icon name="arrow" size={16} />
              <span>What we recommend</span>
              <Icon name="arrow" size={16} />
              <span>What it costs</span>
              <Icon name="arrow" size={16} />
              <span className={styles.orderYou}>You decide</span>
            </span>
          </div>
          <div className={styles.comfort}>
            <span className={styles.breath} aria-hidden="true" data-reveal>
              <span className={styles.breathDot} />
              <span className={styles.breathText}>Take your time</span>
            </span>
            <h3 data-reveal>{n.comfort.title}</h3>
            <ul role="list">
              {n.comfort.items.map((item) => (
                <li key={item.lead} data-reveal>
                  <span className={styles.comfortIcon} aria-hidden="true">
                    <Icon name={item.icon as IconName} size={20} />
                  </span>
                  <p>
                    <strong>{item.lead}</strong> {item.text}
                  </p>
                </li>
              ))}
            </ul>
            <div data-reveal>
              <SiteLink href={n.link.href} className="text-link">
                {n.link.label} <Icon name="arrow" size={16} />
              </SiteLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Technology you'll notice: four tools around the chair */
export function ChairTech() {
  return (
    <section className={c.section} aria-labelledby="pe-tech-title">
      <div className="container">
        <div className={c.headCenter}>
          <p className="label" data-reveal>
            In the chair
          </p>
          <h2 id="pe-tech-title" data-reveal>
            {peTech.title}
          </h2>
        </div>
        <ul role="list" className={styles.tech}>
          {peTech.items.map((item, i) => (
            <li key={item.lead} className={styles.tool} style={{ "--i": i } as CSSProperties} data-reveal>
              <span className={styles.toolIcon} aria-hidden="true">
                <Icon name={item.icon as IconName} size={26} />
              </span>
              <p>
                <strong>{item.lead}</strong> {item.text}
              </p>
            </li>
          ))}
        </ul>
        <div className={styles.techLink} data-reveal>
          <SiteLink href={peTech.link.href} className="text-link">
            {peTech.link.label} <Icon name="arrow" size={16} />
          </SiteLink>
        </div>
      </div>
    </section>
  );
}
