import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Rich } from "@/components/ui/Rich";
import SiteLink from "@/components/ui/SiteLink";
import { schedBefore, schedEmergency, schedHours, schedRequest } from "@/content/pages/patient/scheduling";
import { HoursTiles } from "./SchedulingLive";
import styles from "./Scheduling.module.css";

/**
 * Scheduling sections (order and heading levels follow 02 Content.md). Designs used on
 * this page only: the week planner, the request desk (copy + phone beside the form), the
 * hours tiles, the emergency card and the before-your-visit notes.
 */

const flow: { icon: IconName; text: string }[] = [
  { icon: "chat", text: "Send your request" },
  { icon: "phone", text: "Our team contacts you" },
  { icon: "calendarCheck", text: "We confirm the day & time" },
];

/** Request an appointment: the form (id="appointment-form") beside the copy */
export function RequestDesk() {
  return (
    <section className={styles.request} aria-labelledby="sched-request-title">
      <div className={`container ${styles.requestGrid}`}>
        <div className={styles.requestCopy}>
          <p className="label" data-reveal>
            Book online
          </p>
          <h2 id="sched-request-title" data-reveal>
            {schedRequest.title}
          </h2>
          <p className="lead" data-reveal>
            {schedRequest.text}
          </p>
          {/* What happens after sending (decorative: the thank-you message says the same) */}
          <ol className={styles.flow} aria-hidden="true">
            {flow.map((step) => (
              <li key={step.text} data-reveal>
                <span className={styles.flowIcon}>
                  <Icon name={step.icon} size={20} />
                </span>
                {step.text}
              </li>
            ))}
          </ol>
        </div>
        <div className={styles.formWrap} data-reveal>
          <AppointmentForm variant="scheduling" />
        </div>
      </div>
    </section>
  );
}

/** Office hours: the week as tiles (a real table) and the after-work note */
export function HoursSection() {
  return (
    <section className={styles.hours} aria-labelledby="sched-hours-title">
      <div className="container">
        <div className={styles.hoursHead}>
          <div>
            <p className="label" data-reveal>
              Opening times
            </p>
            <h2 id="sched-hours-title" data-reveal>
              {schedHours.title}
            </h2>
          </div>
          <p className={styles.hoursNote} data-reveal>
            <Icon name="clock" size={22} />
            <span>{schedHours.note}</span>
          </p>
        </div>
        <div data-reveal>
          <HoursTiles />
        </div>
      </div>
    </section>
  );
}

/** Same-day emergencies: an alert card */
export function EmergencyCard() {
  return (
    <section className={styles.emergency} aria-labelledby="sched-emergency-title">
      <div className="container">
        <div className={styles.alert} data-reveal>
          <span className={styles.alertIcon} aria-hidden="true">
            <Icon name="firstAid" size={30} />
          </span>
          <div className={styles.alertCopy}>
            <h2 id="sched-emergency-title">{schedEmergency.title}</h2>
            <p>{schedEmergency.text}</p>
            <SiteLink href={schedEmergency.link.href} className={`text-link ${styles.alertLink}`}>
              {schedEmergency.link.label} <Icon name="arrow" size={16} />
            </SiteLink>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Before your appointment: three notes */
export function BeforeVisit() {
  return (
    <section className={styles.before} aria-labelledby="sched-before-title">
      <div className="container">
        <div className={styles.beforeHead}>
          <h2 id="sched-before-title" data-reveal>
            {schedBefore.title}
          </h2>
          <div data-reveal>
            <SiteLink href={schedBefore.link.href} className="text-link">
              {schedBefore.link.label} <Icon name="arrow" size={16} />
            </SiteLink>
          </div>
        </div>
        <ul role="list" className={styles.notes}>
          {schedBefore.items.map((item) => (
            <li key={item.lead} className={styles.note} data-reveal>
              <span className={styles.noteIcon} aria-hidden="true">
                <Icon name={item.icon as IconName} size={24} />
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
