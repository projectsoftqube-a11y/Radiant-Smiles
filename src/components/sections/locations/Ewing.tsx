import type { CSSProperties } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Rich } from "@/components/ui/Rich";
import { ewGums, ewWest, ewWork } from "@/content/pages/locations/nj";
import c from "../restorative/Common.module.css";
import styles from "./Ewing.module.css";

/**
 * Ewing, NJ sections (order and heading levels follow 02 Content.md). West Trenton is a
 * section here, not its own page (handoff). Designs used on this page only: the township
 * neighbourhood tags, the gum-care path from deep cleaning to maintenance, and the
 * after-work clock.
 */

/** West Trenton and the rest of the township: copy beside the neighbourhood tags */
export function TownshipTags() {
  return (
    <section className={`${c.section} ${c.pearl}`} aria-labelledby="ew-west-title">
      <div className={`container ${c.split}`}>
        <div className={c.copy}>
          <p className="label" data-reveal>
            Ewing Township
          </p>
          <h2 id="ew-west-title" data-reveal>
            {ewWest.title}
          </h2>
          {ewWest.paragraphs.map((text) => (
            <p key={text.slice(0, 24)} data-reveal>
              <Rich text={text} />
            </p>
          ))}
        </div>
        <div className={styles.tags} aria-hidden="true" data-reveal>
          <span className={styles.tagsTitle}>
            <Icon name="pin" size={18} /> Covered by this page
          </span>
          <span className={styles.tagCloud}>
            {ewWest.places.map((place, i) => (
              <span key={place} className={i === 0 ? styles.tagMain : undefined}>
                {place}
              </span>
            ))}
          </span>
          <span className={styles.tagsFoot}>
            <Icon name="directions" size={16} /> Bear Tavern Road to I-295
          </span>
        </div>
      </div>
    </section>
  );
}

/** Healthy gums: the intro, then four treatments as a path (H3 each) */
export function GumPath() {
  return (
    <section className={c.section} aria-labelledby="ew-gums-title">
      <div className="container">
        <div className={c.head}>
          <p className="label" data-reveal>
            Gum care
          </p>
          <h2 id="ew-gums-title" data-reveal>
            {ewGums.title}
          </h2>
          <p className="lead" data-reveal>
            {ewGums.intro}
          </p>
        </div>
        <div className={styles.path} data-inview>
          {ewGums.items.map((item, i) => (
            <div key={item.key} className={styles.step} style={{ "--i": i } as CSSProperties}>
              <span className={styles.stepNode} aria-hidden="true" data-reveal>
                <Icon name={item.icon as IconName} size={22} />
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

/** Appointments that fit around work: the copy beside the after-work clock */
export function AfterWork() {
  return (
    <section className={`${c.section} ${c.sky}`} aria-labelledby="ew-work-title">
      <div className={`container ${c.split}`}>
        <div className={styles.clock} aria-hidden="true" data-inview data-reveal>
          <span className={styles.clockTitle}>Wednesday &amp; Thursday</span>
          <span className={styles.bar}>
            <span className={styles.barWork} />
            <span className={styles.barLate} />
          </span>
          <span className={styles.barScale}>
            <span>9 am</span>
            <span>Work day</span>
            <span>6 pm</span>
          </span>
          <span className={styles.clockNote}>
            <Icon name="car" size={18} /> Over the bridge after work
          </span>
          <span className={styles.sat}>
            <strong>Saturday</strong> 8 am – 2 pm
          </span>
        </div>
        <div className={c.copy}>
          <p className="label" data-reveal>
            Hours
          </p>
          <h2 id="ew-work-title" data-reveal>
            {ewWork.title}
          </h2>
          {ewWork.paragraphs.map((text) => (
            <p key={text.slice(0, 24)} data-reveal>
              <Rich text={text} />
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
