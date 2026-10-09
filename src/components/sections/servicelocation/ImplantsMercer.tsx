import type { CSSProperties } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Portrait } from "@/components/ui/Portrait";
import { Rich } from "@/components/ui/Rich";
import { images } from "@/content/images";
import { diVisits, diWhy } from "@/content/pages/servicelocation";
import c from "../restorative/Common.module.css";
import styles from "./ImplantsMercer.module.css";

/**
 * Dental Implants, Mercer County NJ sections (order and heading levels follow 02 Content.md).
 * Offer wording as on /special-offers/; no net price; sedation only as "ask us" (handoff).
 * Designs used on this page only: the quote-check card, the four reasons across the river,
 * and the eight-month implant runway.
 */

/** Hero visual: what one quote should cover, ticked, with the offer stamp (decorative) */
export function QuoteCheck() {
  const parts = [
    { name: "Titanium post", note: "Replaces the root" },
    { name: "Abutment", note: "Connects post & crown" },
    { name: "Crown", note: "The tooth you see" },
  ];
  return (
    <div className={styles.quote} aria-hidden="true">
      <span className={styles.quoteTop}>
        <span className={styles.quoteTitle}>One fee covers all three</span>
        <span className={styles.stamp}>
          <strong>$500 off</strong>
          <small>regular $3,500</small>
        </span>
      </span>
      <span className={styles.parts}>
        {parts.map((part, i) => (
          <span key={part.name} className={styles.part} style={{ "--i": i } as CSSProperties}>
            <span className={styles.partTick}>
              <Icon name="check" size={16} strokeWidth={2.8} />
            </span>
            <span className={styles.partText}>
              <strong>{part.name}</strong>
              <small>{part.note}</small>
            </span>
          </span>
        ))}
      </span>
      <span className={styles.quoteFoot}>
        <Icon name="chat" size={16} /> Free consultation &amp; second opinion
      </span>
    </div>
  );
}

/** Why NJ patients cross the river: four reasons as tiles, then the two dentists */
export function RiverReasons() {
  return (
    <section className={`${c.section} ${c.pearl}`} aria-labelledby="di-why-title">
      <div className="container">
        <div className={c.head}>
          <p className="label" data-reveal>
            Across the river
          </p>
          <h2 id="di-why-title" data-reveal>
            {diWhy.title}
          </h2>
          <p className="lead" data-reveal>
            {diWhy.intro}
          </p>
        </div>
        <ul role="list" className={styles.reasons}>
          {diWhy.items.map((item) => (
            <li key={item.lead} data-reveal>
              <span className={styles.reasonIcon} aria-hidden="true">
                <Icon name={item.icon as IconName} size={24} />
              </span>
              <p>
                <strong>{item.lead}</strong> <Rich text={item.text} />
              </p>
            </li>
          ))}
        </ul>
        <div className={styles.dentists}>
          <span className={styles.faces} aria-hidden="true" data-reveal>
            <Portrait image={images.drBhalala} ratio="1 / 1" sizes="64px" className={styles.face} />
            <Portrait image={images.drGadria} ratio="1 / 1" sizes="64px" className={styles.face} />
          </span>
          <p data-reveal>{diWhy.after}</p>
        </div>
      </div>
    </section>
  );
}

/** What to expect, visit by visit: the four visits on an eight-month runway, then the tip */
export function ImplantRunway() {
  const v = diVisits;
  const icons: IconName[] = ["chat", "implant", "clock", "tooth"];
  return (
    <section className={c.section} aria-labelledby="di-visits-title">
      <div className="container">
        <div className={c.head}>
          <p className="label" data-reveal>
            Visit by visit
          </p>
          <h2 id="di-visits-title" data-reveal>
            {v.title}
          </h2>
          <p className="lead" data-reveal>
            {v.intro}
          </p>
        </div>
        <div className={styles.runway} aria-hidden="true" data-inview data-reveal>
          <span className={styles.runwayTrack}>
            <span className={styles.runwayFill} />
          </span>
          <span className={styles.runwayScale}>
            <span>Consultation</span>
            <span>Six to eight months</span>
            <span>Your new tooth</span>
          </span>
        </div>
        <ol className={styles.visits}>
          {v.steps.map((step, i) => (
            <li key={step.lead} data-reveal>
              <span className={styles.visitIcon} aria-hidden="true">
                <Icon name={icons[i]} size={22} />
              </span>
              <p>
                <strong>{step.lead}</strong> {step.text}
              </p>
            </li>
          ))}
        </ol>
        <p className={c.note} data-reveal>
          <Icon name="implant" size={20} />
          <span>
            <Rich text={v.after} />
          </span>
        </p>
        <p className={styles.tip} data-reveal>
          <span className={styles.tipIcon} aria-hidden="true">
            <Icon name="calendar" size={22} />
          </span>
          <span>
            <strong>{v.tip.lead}</strong> {v.tip.text}
          </span>
        </p>
      </div>
    </section>
  );
}
