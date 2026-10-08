import { ToothMark } from "@/components/ui/Brand";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Rich } from "@/components/ui/Rich";
import SiteLink from "@/components/ui/SiteLink";
import { hubCards, hubFacts } from "@/content/pages/patient/hub";
import styles from "./Hub.module.css";

/**
 * Patient Information hub (order and heading levels follow 02 Content.md). Designs used
 * on this page only: the visit pass (the quick facts strip, plain text) and the bento of
 * section cards, one per section, each with its H2 and its links as written.
 */

/** Hero visual: a "visit pass" carrying the quick facts strip as a real list */
export function VisitPass() {
  return (
    <div className={styles.pass}>
      <div className={styles.passTop} aria-hidden="true">
        <ToothMark className={styles.passMark} />
        <span>
          <span className={styles.passKicker}>Your visit</span>
          <span className={styles.passName}>Radiant Smiles @ Floral Vale</span>
        </span>
      </div>
      <ul role="list" className={styles.passFacts}>
        {hubFacts.map((fact, i) => (
          <li key={fact.text} style={{ animationDelay: `${0.75 + i * 0.1}s` }}>
            <span className={styles.passIcon} aria-hidden="true">
              <Icon name={fact.icon as IconName} size={20} />
            </span>
            {fact.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** The six sections as a bento of cards */
export function HubCards() {
  return (
    <section className={styles.cards} aria-label="Patient information topics">
      <div className={`container ${styles.bento}`}>
        {hubCards.map((card) => (
          <article key={card.id} id={card.id} className={`${styles.card} ${styles[`card-${card.id}`]}`} data-reveal>
            <span className={styles.cardIcon} aria-hidden="true">
              <Icon name={card.icon as IconName} size={24} />
            </span>
            <h2 className={styles.cardTitle}>{card.title}</h2>
            {card.paragraphs.map((text) => (
              <p key={text.slice(0, 24)}>
                <Rich text={text} />
              </p>
            ))}
            {card.bullets ? (
              <ul role="list" className={styles.bullets}>
                {card.bullets.map((bullet) => (
                  <li key={bullet.lead}>
                    <Icon name="check" size={16} strokeWidth={2.2} />
                    <span>
                      <strong>{bullet.lead}</strong> {bullet.text}
                    </span>
                  </li>
                ))}
              </ul>
            ) : null}
            <ul role="list" className={card.linkList ? `${styles.links} ${styles.linkList}` : styles.links}>
              {card.links.map((link) => (
                <li key={link.href}>
                  <SiteLink href={link.href} className={card.linkList ? styles.listLink : "text-link"} data-track="click_hub_card">
                    {link.label} <Icon name={card.linkList ? "arrowUpRight" : "arrow"} size={16} />
                  </SiteLink>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
