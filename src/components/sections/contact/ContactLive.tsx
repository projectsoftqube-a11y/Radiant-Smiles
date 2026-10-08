"use client";

import { hours } from "@/content/site";
import { useOfficeStatus } from "@/lib/office-hours";
import styles from "./Contact.module.css";

/** Live "Open now / Closed now" pill (Yardley time, on the visitor's device). */
export function OpenStatus() {
  const live = useOfficeStatus();
  return (
    <p className={`${styles.status} ${live ? (live.open ? styles.isOpen : styles.isClosed) : ""}`} aria-live="polite">
      <span className={styles.statusDot} aria-hidden="true" />
      <span>{live ? live.text : "Office hours"}</span>
    </p>
  );
}

/** Today's opening hours (Yardley time), e.g. "Today: 9:00 am – 6:00 pm" */
export function TodayHours() {
  const live = useOfficeStatus();
  const today = live ? hours[live.todayIndex] : null;
  return <span>{today ? `Today: ${today.label}` : "Open six days a week"}</span>;
}

/**
 * Office hours as a real table, matching the home page, the footer and the schema
 * (site.ts). Today's row is marked once the visitor's device knows the day.
 */
export function HoursTable() {
  const live = useOfficeStatus();
  return (
    <table className={styles.table}>
      <caption className="visually-hidden">Office hours, Monday to Sunday</caption>
      <thead>
        <tr>
          <th scope="col">Day</th>
          <th scope="col">Hours</th>
        </tr>
      </thead>
      <tbody>
        {hours.map((day, i) => {
          const today = live?.todayIndex === i;
          const late = day.closes === "18:00";
          const classes = [today ? styles.today : null, day.opens ? null : styles.closed].filter(Boolean).join(" ") || undefined;
          return (
            <tr key={day.day} className={classes} aria-current={today ? "date" : undefined}>
              <th scope="row">
                {day.day}
                {today ? <span className={styles.todayTag}>Today</span> : null}
              </th>
              <td>
                {day.label}
                {late ? (
                  <span className={styles.flag} aria-hidden="true">
                    Late
                  </span>
                ) : null}
                {day.day === "Saturday" ? (
                  <span className={`${styles.flag} ${styles.flagSat}`} aria-hidden="true">
                    Saturday
                  </span>
                ) : null}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
