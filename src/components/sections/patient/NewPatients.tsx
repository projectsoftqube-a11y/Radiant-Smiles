import { Icon, type IconName } from "@/components/ui/Icon";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Rich } from "@/components/ui/Rich";
import SiteLink from "@/components/ui/SiteLink";
import { images } from "@/content/images";
import { npBring, npExpect, npFacts, npForms, npSpecial } from "@/content/pages/patient/new-patients";
import styles from "./NewPatients.module.css";

/**
 * New Patients sections (order and heading levels follow 02 Content.md). Designs used on
 * this page only: the welcome arch with fact chips, the first-visit path, the bring-along
 * checklist with the health note, the $89 band and the forms slip.
 */

/** Hero visual: an arched photo with the quick facts strip pinned around it (a real list) */
export function WelcomeArch() {
  return (
    <div className={styles.welcome}>
      <MediaFrame image={images.npHero} ratio="4 / 5" sizes="(max-width: 991px) 70vw, 380px" priority reveal="load" arch className={styles.welcomePhoto} />
      <ul role="list" className={styles.chips}>
        {npFacts.map((fact, i) => (
          <li key={fact.text} className={styles.chip} style={{ animationDelay: `${1 + i * 0.12}s` }}>
            <span className={styles.chipIcon} aria-hidden="true">
              <Icon name={fact.icon as IconName} size={18} />
            </span>
            {fact.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** First visit: four steps on a path that draws as it scrolls in (a real ordered list) */
export function FirstVisit() {
  return (
    <section className={styles.expect} aria-labelledby="np-expect-title">
      <div className="container">
        <div className={styles.expectHead}>
          <p className="label" data-reveal>
            Your first visit
          </p>
          <h2 id="np-expect-title" data-reveal>
            {npExpect.title}
          </h2>
          <p className="lead" data-reveal>
            {npExpect.intro}
          </p>
        </div>
        <div className={styles.pathWrap} data-grow>
          <span className={styles.path} aria-hidden="true">
            <span data-grow-item />
          </span>
          <ol className={styles.steps}>
            {npExpect.steps.map((step) => (
              <li key={step.lead} className={styles.step} data-reveal>
                <span className={styles.stepIcon} aria-hidden="true">
                  <Icon name={step.icon as IconName} size={26} />
                </span>
                <p>
                  <strong className={styles.stepLead}>{step.lead}</strong> {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
        <p className={styles.expectAfter} data-reveal>
          <Icon name="calendarCheck" size={22} />
          <span>{npExpect.after}</span>
        </p>
      </div>
    </section>
  );
}

/** What to bring: a checklist card, with "Tell us about your health" (H3) beside it */
export function BringList() {
  return (
    <section className={styles.bring} aria-labelledby="np-bring-title">
      <div className={`container ${styles.bringGrid}`}>
        <div className={styles.bringCard}>
          <p className="label" data-reveal>
            Before you come
          </p>
          <h2 id="np-bring-title" data-reveal>
            {npBring.title}
          </h2>
          <p data-reveal>{npBring.intro}</p>
          <ul role="list" className={styles.checklist}>
            {npBring.items.map((item) => (
              <li key={item.lead} data-reveal>
                <span className={styles.checkIcon} aria-hidden="true">
                  <Icon name={item.icon as IconName} size={22} />
                </span>
                <p>
                  <strong>{item.lead}</strong> {item.text}
                </p>
                <span className={styles.tick} aria-hidden="true">
                  <Icon name="check" size={14} strokeWidth={2.6} />
                </span>
              </li>
            ))}
          </ul>
        </div>
        <aside className={styles.health} data-reveal>
          <span className={styles.healthIcon} aria-hidden="true">
            <Icon name="heart" size={26} />
          </span>
          <h3>{npBring.health.title}</h3>
          <p>{npBring.health.text}</p>
        </aside>
      </div>
    </section>
  );
}

/** $89 special for uninsured patients: the page's one navy band */
export function SpecialBand() {
  return (
    <section className={styles.special} aria-labelledby="np-special-title">
      <div className={`container ${styles.specialGrid}`}>
        <div className={styles.priceTile} aria-hidden="true" data-reveal>
          <span className={styles.priceLabel}>New patient visit</span>
          <span className={styles.price}>
            $<span data-count="89">89</span>
          </span>
          <span className={styles.priceIncludes}>Cleaning · X-rays · Exam</span>
        </div>
        <div className={styles.specialCopy}>
          <p className="label label-inverse" data-reveal>
            No insurance?
          </p>
          <h2 id="np-special-title" data-reveal>
            {npSpecial.title}
          </h2>
          {npSpecial.paragraphs.map((text) => (
            <p key={text.slice(0, 24)} data-reveal>
              {text}
            </p>
          ))}
          <div className={styles.specialLinks} data-reveal>
            {npSpecial.links.map((link) => (
              <SiteLink key={link.href} href={link.href} className={`text-link ${styles.lightLink}`} data-track={link.track}>
                {link.label} <Icon name="arrow" size={16} />
              </SiteLink>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/** Forms to fill in before you arrive: a slip */
export function FormsSlip() {
  return (
    <section className={styles.forms} aria-labelledby="np-forms-title">
      <div className="container">
        <div className={styles.slip} data-reveal>
          <span className={styles.slipIcon} aria-hidden="true">
            <Icon name="clipboard" size={30} />
          </span>
          <div className={styles.slipCopy}>
            <h2 id="np-forms-title">{npForms.title}</h2>
            {npForms.paragraphs.map((text) => (
              <p key={text.slice(0, 24)}>
                <Rich text={text} />
              </p>
            ))}
            <div className={styles.slipActions}>
              <SiteLink href={npForms.link.href} className="text-link" data-track="click_patient_forms">
                {npForms.link.label} <Icon name="arrow" size={16} />
              </SiteLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
