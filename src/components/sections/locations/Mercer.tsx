import { Icon, type IconName } from "@/components/ui/Icon";
import { Rich } from "@/components/ui/Rich";
import SiteLink from "@/components/ui/SiteLink";
import { OFFICE, PLACES, RIVER } from "@/content/areaMap";
import { meEmergency, meFamily, meOffers, meTowns } from "@/content/pages/locations/nj";
import c from "../restorative/Common.module.css";
import { SafetyLine } from "./Location";
import styles from "./Mercer.module.css";

/**
 * Mercer County, NJ sections (order and heading levels follow 02 Content.md). Town names
 * appear only as the six link anchors; all six NJ town pages are linked (handoff). Designs
 * used on this page only: the county map with the six town links, the family checklist,
 * the call-first emergency panel, and the two offer coupons.
 */

/** Mercer County town pages: the six links beside a small map of their dots (unlabelled) */
export function CountyTowns() {
  const towns = meTowns.links.map((l) => PLACES[l.place]);
  return (
    <section className={`${c.section} ${c.pearl}`} aria-labelledby="me-towns-title">
      <div className={`container ${styles.towns}`}>
        <div className={c.copy}>
          <p className="label" data-reveal>
            Town pages
          </p>
          <h2 id="me-towns-title" data-reveal>
            {meTowns.title}
          </h2>
          <p data-reveal>{meTowns.intro}</p>
          <ul role="list" className={styles.links}>
            {meTowns.links.map((link, i) => (
              <li key={link.href} data-reveal>
                <span className={styles.linkNum} aria-hidden="true">
                  {String.fromCharCode(65 + i)}
                </span>
                <SiteLink href={link.href} className={styles.link}>
                  {link.label}
                </SiteLink>
                <Icon name="arrow" size={16} />
              </li>
            ))}
          </ul>
          <p data-reveal>
            <Rich text={meTowns.after} />
          </p>
        </div>
        <div className={styles.map} aria-hidden="true" data-reveal>
          <svg viewBox="300 40 600 660" className={styles.mapSvg}>
            <path d={RIVER} className={styles.river} />
            {towns.map((t, i) => (
              <path key={i} d={`M${OFFICE.x} ${OFFICE.y}L${t.x} ${t.y}`} className={styles.spoke} />
            ))}
            {towns.map((t, i) => (
              <g key={`d${i}`}>
                <circle cx={t.x} cy={t.y} r="22" className={styles.townDot} />
                <text x={t.x} y={t.y + 8} className={styles.townLetter}>
                  {String.fromCharCode(65 + i)}
                </text>
              </g>
            ))}
            <rect x={OFFICE.x - 18} y={OFFICE.y - 18} width="36" height="36" rx="10" className={styles.office} />
            <text x={OFFICE.x + 30} y={OFFICE.y + 60} className={styles.officeLabel}>
              Our office
            </text>
            <text x="880" y="100" className={styles.state}>
              NJ
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}

/** A dentist for the whole family: the copy beside the family checklist */
export function FamilyChecklist() {
  return (
    <section className={c.section} aria-labelledby="me-family-title">
      <div className={`container ${c.split}`}>
        <div className={c.copy}>
          <p className="label" data-reveal>
            Family care
          </p>
          <h2 id="me-family-title" data-reveal>
            {meFamily.title}
          </h2>
          <p data-reveal>{meFamily.intro}</p>
        </div>
        <ul role="list" className={styles.checklist}>
          {meFamily.items.map((item) => (
            <li key={item.text} data-reveal>
              <span className={styles.checkIcon} aria-hidden="true">
                <Icon name={item.icon as IconName} size={22} />
              </span>
              <span>
                <Rich text={item.text} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Emergency care from across the river: the call-first panel and the 911 line */
export function CallFirst() {
  return (
    <section className={`${c.section} ${c.blush}`} aria-labelledby="me-emergency-title">
      <div className="container">
        <div className={styles.emergency}>
          <span className={styles.emergencyIcon} aria-hidden="true" data-reveal>
            <Icon name="phone" size={30} />
          </span>
          <div className={styles.emergencyCopy}>
            <p className="label" data-reveal>
              Emergencies
            </p>
            <h2 id="me-emergency-title" data-reveal>
              {meEmergency.title}
            </h2>
            <p data-reveal>
              <Rich text={meEmergency.text} />
            </p>
            <SafetyLine />
          </div>
        </div>
      </div>
    </section>
  );
}

/** Implants and Invisalign for New Jersey patients: two offer coupons */
export function OfferCoupons() {
  return (
    <section className={c.section} aria-labelledby="me-offers-title">
      <div className="container">
        <div className={c.headCenter}>
          <p className="label" data-reveal>
            Current offers
          </p>
          <h2 id="me-offers-title" data-reveal>
            {meOffers.title}
          </h2>
        </div>
        <ul role="list" className={styles.coupons}>
          {meOffers.items.map((item) => (
            <li key={item.key} className={styles.coupon} data-reveal>
              <span className={styles.couponStub} aria-hidden="true">
                <Icon name={item.icon as IconName} size={26} />
                <strong>{item.figure}</strong>
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
