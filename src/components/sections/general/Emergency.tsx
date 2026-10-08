import type { CSSProperties } from "react";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Rich } from "@/components/ui/Rich";
import SiteLink from "@/components/ui/SiteLink";
import { emEr, emFirst, emGuideNav, emGuides, emHeroLink, emPay, emSafety } from "@/content/pages/general/emergency";
import { membershipPlan, practice } from "@/content/site";
import { BoardStatus, EmergencyHours } from "./EmergencyLive";
import styles from "./Emergency.module.css";

/**
 * Emergency Dentistry sections (order and heading levels follow 02 Content.md). Call-only
 * CTAs, the ER line always visible, no "24/7" or Sunday claims (handoff). Designs used on
 * this page only: the same-day board, the call-first rail with the hours table, the field
 * guide with its sticky menu, the ER card, the member exam panel and the phone call bar.
 */

/** Hero visual: today's board with a slot held for emergencies (decorative, live status) */
export function SameDayBoard() {
  const slots = [
    { w: 70, kind: "booked" },
    { w: 45, kind: "booked" },
    { w: 100, kind: "held" },
    { w: 55, kind: "booked" },
    { w: 80, kind: "booked" },
  ];
  return (
    <div className={styles.board} aria-hidden="true">
      <div className={styles.boardHead}>
        <span className={styles.boardTitle}>Today&apos;s schedule</span>
        <BoardStatus />
      </div>
      <ul role="list" className={styles.slots}>
        {slots.map((slot, i) => (
          <li key={i} className={slot.kind === "held" ? styles.slotHeld : styles.slot} style={{ "--i": i } as CSSProperties}>
            {slot.kind === "held" ? (
              <>
                <span className={styles.slotIcon}>
                  <Icon name="firstAid" size={18} />
                </span>
                <span className={styles.slotText}>
                  <span className={styles.slotName}>Held for emergencies</span>
                  <span className={styles.slotNote}>Focused 30-minute exam</span>
                </span>
              </>
            ) : (
              <span className={styles.slotBar} style={{ width: `${slot.w}%` }} />
            )}
          </li>
        ))}
      </ul>
      <span className={styles.boardFoot}>
        <Icon name="calendar" size={16} /> Saturdays 8 am – 2 pm too
      </span>
    </div>
  );
}

/** Under the hero button: the hours link and the always-visible ER line (bold) */
export function HeroSafety() {
  return (
    <div className={styles.heroExtra}>
      <SiteLink href={emHeroLink.href} className="text-link" data-track="click_directions">
        {emHeroLink.label} <Icon name="arrow" size={16} />
      </SiteLink>
      <p className={styles.safety}>
        <Icon name="alert" size={20} />
        <strong>{emSafety}</strong>
      </p>
    </div>
  );
}

/** Call us first: four steps on a rail, beside the hours table */
export function CallFirst() {
  return (
    <section className={styles.first} aria-labelledby="em-first-title">
      <div className={`container ${styles.firstGrid}`}>
        <div className={styles.firstCopy}>
          <p className="label" data-reveal>
            Same day
          </p>
          <h2 id="em-first-title" data-reveal>
            {emFirst.title}
          </h2>
          <p className="lead" data-reveal>
            <Rich text={emFirst.intro} />
          </p>
          <ol className={styles.rail}>
            {emFirst.steps.map((step) => (
              <li key={step.lead} data-reveal>
                <span className={styles.railIcon} aria-hidden="true">
                  <Icon name={step.icon as IconName} size={20} />
                </span>
                <p>
                  <strong>{step.lead}</strong> {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
        <div className={styles.hoursCard} data-reveal>
          <span className={styles.hoursKicker}>
            <Icon name="clock" size={18} /> Office hours
          </span>
          <EmergencyHours />
        </div>
      </div>
    </section>
  );
}

const tones: Record<string, string> = { red: styles.toneRed, amber: styles.toneAmber, sky: styles.toneSky };

/** The six emergencies as a field guide: a sticky menu beside one card per H2 */
export function FieldGuide() {
  return (
    <div className={styles.guide}>
      <div className={`container ${styles.guideGrid}`}>
        <nav className={styles.guideNav} aria-label="Dental emergencies on this page">
          <p className={styles.guideNavTitle} data-reveal>
            Jump to
          </p>
          <ul role="list">
            {emGuides.map((g) => (
              <li key={g.id} data-reveal>
                <a href={`#${g.id}`}>
                  <span aria-hidden="true">
                    <Icon name={g.icon as IconName} size={18} />
                  </span>
                  {emGuideNav[g.id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.guideCards}>
          {emGuides.map((g) => (
            <section key={g.id} id={g.id} className={`${styles.card} ${tones[g.tone]}`} aria-labelledby={`${g.id}-title`}>
              <div className={styles.cardHead}>
                <span className={styles.cardIcon} aria-hidden="true" data-reveal>
                  <Icon name={g.icon as IconName} size={26} />
                </span>
                <h2 id={`${g.id}-title`} data-reveal>
                  {g.title}
                </h2>
              </div>
              {g.id === "knocked-out-tooth" ? (
                <span className={styles.clock} aria-hidden="true" data-reveal>
                  <span className={styles.clockBar} data-grow>
                    <span data-grow-item />
                  </span>
                  <span className={styles.clockText}>
                    <Icon name="timer" size={16} /> Ideally within 30 minutes
                  </span>
                </span>
              ) : null}
              {g.paragraphs.map((text) => (
                <p key={text.slice(0, 24)} data-reveal>
                  <Rich text={text} />
                </p>
              ))}
              {g.listIntro ? (
                <p className={styles.cardIntro} data-reveal>
                  {g.listIntro}
                </p>
              ) : null}
              {g.list ? (
                <ul role="list" className={styles.cardList}>
                  {g.list.map((item) => (
                    <li key={item} data-reveal>
                      <span aria-hidden="true">
                        <Icon name="check" size={14} strokeWidth={2.6} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
              {g.steps ? (
                <ol className={styles.cardSteps}>
                  {g.steps.map((step) => (
                    <li key={step.text} className={step.lead ? styles.stepKey : undefined} data-reveal>
                      <p>
                        {step.lead ? <strong>{step.lead}</strong> : null}
                        {step.lead ? " " : null}
                        {step.text}
                      </p>
                    </li>
                  ))}
                </ol>
              ) : null}
              {g.after?.map((text) => (
                <p key={text.slice(0, 24)} className={g.steps ? styles.never : undefined} data-reveal>
                  <Rich text={text} />
                </p>
              ))}
              {g.alert ? (
                <p className={styles.cardAlert} data-reveal>
                  <strong>
                    <Rich text={g.alert} />
                  </strong>
                </p>
              ) : null}
              {g.call && typeof g.call === "object" ? (
                <div data-reveal>
                  <Button href={g.call.href} icon="phone" variant="primary" track={g.call.track} className={styles.cardCall}>
                    {g.call.label}
                  </Button>
                </div>
              ) : null}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

/** When to go to the ER instead: a red card */
export function ErCard() {
  return (
    <section className={styles.er} aria-labelledby="em-er-title">
      <div className="container">
        <div className={styles.erCard}>
          <div className={styles.erHead}>
            <span className={styles.erIcon} aria-hidden="true" data-reveal>
              <Icon name="alert" size={30} />
            </span>
            <h2 id="em-er-title" data-reveal>
              {emEr.title}
            </h2>
          </div>
          <p data-reveal>{emEr.intro}</p>
          <ul role="list" className={styles.erList}>
            {emEr.items.map((item) => (
              <li key={item} data-reveal>
                {item}
              </li>
            ))}
          </ul>
          <p className={styles.erAfter} data-reveal>
            {emEr.after}
          </p>
        </div>
      </div>
    </section>
  );
}

/** Emergency care without insurance: the member exam panel beside the ways to pay */
export function EmergencyPay() {
  return (
    <section className={styles.pay} aria-labelledby="em-pay-title">
      <div className={`container ${styles.payGrid}`}>
        <div className={styles.payCopy}>
          <p className="label" data-reveal>
            No insurance needed
          </p>
          <h2 id="em-pay-title" data-reveal>
            {emPay.title}
          </h2>
          <p className="lead" data-reveal>
            {emPay.intro}
          </p>
          <ul role="list" className={styles.payList}>
            {emPay.items.map((item) => (
              <li key={item.lead} data-reveal>
                <p>
                  <strong>{item.lead}</strong> <Rich text={item.text} />
                </p>
              </li>
            ))}
          </ul>
          <p className={styles.payAfter} data-reveal>
            {emPay.after}
          </p>
        </div>
        <div className={styles.exam} aria-hidden="true" data-reveal>
          <span className={styles.examKicker}>Membership plan members only</span>
          <span className={styles.examPrice}>
            $<span data-count={membershipPlan.emergencyExam}>{membershipPlan.emergencyExam}</span>
          </span>
          <span className={styles.examNote}>Emergency exam with an X-ray, per visit</span>
          <span className={styles.examRule} />
          <span className={styles.examPlus}>
            <Icon name="card" size={16} /> Plan members: 15% off emergency treatment
          </span>
        </div>
      </div>
    </section>
  );
}

/** Phones: a call bar stays at the bottom of the screen on this page (handoff) */
export function CallBar() {
  return (
    <div className={styles.callBar} data-anim>
      <a href={practice.phone.href} className={styles.callBarLink} data-track="call_click_emergency_sticky">
        <Icon name="phone" size={20} />
        Call {practice.phone.display}
      </a>
    </div>
  );
}
