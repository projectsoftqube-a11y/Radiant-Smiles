import type { CSSProperties } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Rich } from "@/components/ui/Rich";
import SiteLink from "@/components/ui/SiteLink";
import { homeCareCall, homeCareCards, homeCareExtraction, homeCareJump } from "@/content/pages/patient/care";
import { napLine } from "@/content/site";
import styles from "./HomeCare.module.css";

/**
 * Home Care Instructions sections (order and heading levels follow 02 Content.md). Each H2
 * has the handoff's id (#extraction, #filling, #crown-bridge, #root-canal, #cosmetic,
 * #when-to-call) so staff can send a direct link. Designs used on this page only: the
 * recovery clock, the jump list, the timed extraction steps, the aftercare cards and the
 * call-us alert. Prints cleanly as a handout (print styles below).
 */

/** Hero visual: the first days after an extraction as a timeline (decorative) */
export function RecoveryClock() {
  const marks = [
    { when: "30–45 min", what: "Bite on gauze" },
    { when: "24 hours", what: "Rest; brush the rest of your mouth" },
    { when: "48 hours", what: "Swelling usually goes down" },
    { when: "72 hours", what: "Clot protected; back to normal" },
  ];
  return (
    <div className={styles.clock} aria-hidden="true">
      <span className={styles.clockKicker}>After an extraction</span>
      <ol className={styles.clockList}>
        {marks.map((mark, i) => (
          <li key={mark.when} style={{ "--i": i } as CSSProperties}>
            <span className={styles.clockWhen}>{mark.when}</span>
            <span className={styles.clockWhat}>{mark.what}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

/** "On this page" jump list under the hero */
export function JumpList() {
  return (
    <nav className={styles.jumpNav} aria-label="On this page">
      <p className={styles.jumpTitle}>On this page</p>
      <ul role="list" className={styles.jump}>
        {homeCareJump.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`} className={styles.jumpLink} data-track="click_jump_link">
              <Icon name={item.icon as IconName} size={16} />
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/** After tooth extraction: five timed steps (a real ordered list) */
export function ExtractionSteps() {
  return (
    <section id="extraction" className={styles.extraction} aria-labelledby="extraction-title">
      <div className="container">
        <div className={styles.extractionHead}>
          <p className="label" data-reveal>
            Extraction
          </p>
          <h2 id="extraction-title" data-reveal>
            {homeCareExtraction.title}
          </h2>
          <p className="lead" data-reveal>
            {homeCareExtraction.intro}
          </p>
        </div>
        <ol className={styles.timeline}>
          {homeCareExtraction.steps.map((step) => (
            <li key={step.lead} className={styles.tstep} data-reveal>
              <span className={styles.when} aria-hidden="true">
                {step.when}
              </span>
              <p className={styles.tcard}>
                <strong>{step.lead}</strong> {step.text}
              </p>
            </li>
          ))}
        </ol>
        <div className={styles.extractionFoot} data-reveal>
          <SiteLink href={homeCareExtraction.link.href} className="text-link">
            {homeCareExtraction.link.label} <Icon name="arrow" size={16} />
          </SiteLink>
        </div>
      </div>
    </section>
  );
}

/** Filling, crown or bridge, root canal, cosmetic work: four cards, each with its H2 */
export function AftercareCards() {
  return (
    <div className={styles.cards}>
      <div className={`container ${styles.cardGrid}`}>
        {homeCareCards.map((card) => (
          <section key={card.id} id={card.id} className={styles.card} aria-labelledby={`${card.id}-title`} data-reveal>
            <span className={styles.cardIcon} aria-hidden="true">
              <Icon name={(homeCareJump.find((j) => j.id === card.id)?.icon ?? "tooth") as IconName} size={24} />
            </span>
            <h2 id={`${card.id}-title`}>{card.title}</h2>
            <p>{card.intro}</p>
            <ul role="list" className={styles.cardList}>
              {card.items.map((item) => (
                <li key={item.lead}>
                  <Icon name="check" size={16} strokeWidth={2.4} />
                  <span>
                    <strong>{item.lead}</strong> {item.text}
                  </span>
                </li>
              ))}
            </ul>
            {card.link ? (
              <SiteLink href={card.link.href} className="text-link">
                {card.link.label} <Icon name="arrow" size={16} />
              </SiteLink>
            ) : null}
          </section>
        ))}
      </div>
    </div>
  );
}

/** When to call us: an alert card with the warning signs */
export function WhenToCall() {
  return (
    <section id="when-to-call" className={styles.call} aria-labelledby="when-to-call-title">
      <div className="container">
        <div className={styles.alert} data-reveal>
          <span className={styles.alertIcon} aria-hidden="true">
            <Icon name="alert" size={30} />
          </span>
          <div className={styles.alertCopy}>
            <h2 id="when-to-call-title">{homeCareCall.title}</h2>
            <p>
              <Rich text={homeCareCall.intro} />
            </p>
            <ul role="list" className={styles.signs}>
              {homeCareCall.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>{homeCareCall.after}</p>
            <SiteLink href={homeCareCall.link.href} className={`text-link ${styles.alertLink}`}>
              {homeCareCall.link.label} <Icon name="arrow" size={16} />
            </SiteLink>
          </div>
        </div>
        {/* Printed handouts keep the practice's details */}
        <p className={styles.printNap}>{napLine}</p>
      </div>
    </section>
  );
}
