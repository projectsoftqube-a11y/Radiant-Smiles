"use client";

import { hours } from "@/content/site";
import { clock, useOfficeStatus } from "@/lib/office-hours";
import styles from "./Emergency.module.css";

/** Live open/closed line for the hero board (Yardley time, nothing on the server) */
export function BoardStatus() {
  const live = useOfficeStatus();
  return (
    <span className={live?.open ? `${styles.boardStatus} ${styles.statusOpen}` : styles.boardStatus}>
      <span className={styles.statusDot} />
      {live ? live.text : "Same-day slots every business day"}
    </span>
  );
}

/** The hours table (a real table, hours from site.ts), today's row marked once known */
export function EmergencyHours() {
  const live = useOfficeStatus();
  return (
    <div className={styles.hoursWrap} role="region" aria-label="Office hours" tabIndex={0}>
      <table className={styles.hours}>
        <caption className="visually-hidden">Office hours</caption>
        <thead>
          <tr>
            <th scope="col">Day</th>
            <th scope="col">Hours</th>
          </tr>
        </thead>
        <tbody>
          {hours.map((day, i) => (
            <tr key={day.day} className={live?.todayIndex === i ? styles.today : undefined}>
              <th scope="row">
                {day.day}
                {live?.todayIndex === i ? <span className={styles.todayTag}>Today</span> : null}
              </th>
              <td>{day.opens && day.closes ? `${clock(day.opens)} to ${clock(day.closes)}` : "Closed"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
