"use client";

import { Icon } from "@/components/ui/Icon";
import { hours } from "@/content/site";
import { clock, useOfficeStatus } from "@/lib/office-hours";
import styles from "./Scheduling.module.css";

/**
 * Hero visual: the week as a planner card (decorative; the hours table below carries the
 * same hours). Six open days, Sunday closed, Saturday marked, and today and the live
 * open/closed status worked out in Yardley time on the visitor's device.
 */
export function WeekPlanner() {
  const live = useOfficeStatus();
  return (
    <div className={styles.planner} aria-hidden="true">
      <div className={styles.plannerHead}>
        <span className={styles.plannerIcon}>
          <Icon name="calendar" size={22} />
        </span>
        <span>
          <span className={styles.plannerTitle}>Open six days a week</span>
          <span className={live?.open ? `${styles.plannerStatus} ${styles.isOpen}` : styles.plannerStatus}>
            <span className={styles.dot} />
            {live ? live.text : "Saturday mornings included"}
          </span>
        </span>
      </div>
      <div className={styles.days}>
        {hours.map((day, i) => {
          const classes = [
            styles.day,
            day.opens ? null : styles.dayClosed,
            day.day === "Saturday" ? styles.daySat : null,
            live?.todayIndex === i ? styles.dayToday : null,
          ]
            .filter(Boolean)
            .join(" ");
          return (
            <span key={day.day} className={classes} style={{ animationDelay: `${0.7 + i * 0.07}s` }}>
              <span className={styles.dayName}>{day.short}</span>
              {day.opens && day.closes ? (
                <>
                  <span className={styles.dayTime}>{clock(day.opens).replace(":00", "")}</span>
                  <span className={styles.dayBar} />
                  <span className={styles.dayTime}>{clock(day.closes).replace(":00", "")}</span>
                </>
              ) : (
                <span className={styles.dayOff}>Closed</span>
              )}
            </span>
          );
        })}
      </div>
      <p className={styles.plannerFoot}>
        <Icon name="firstAid" size={18} />
        Same-day emergency openings every business day
      </p>
    </div>
  );
}

/** Office hours: a real table, each day shown as a tile; today marked once known */
export function HoursTiles() {
  const live = useOfficeStatus();
  return (
    <table className={styles.hoursTable}>
      <caption className="visually-hidden">Office hours, Monday to Sunday</caption>
      <thead className="visually-hidden">
        <tr>
          <th scope="col">Day</th>
          <th scope="col">Hours</th>
        </tr>
      </thead>
      <tbody>
        {hours.map((day, i) => {
          const classes = [
            day.opens ? null : styles.tileClosed,
            day.closes === "18:00" ? styles.tileLate : null,
            day.day === "Saturday" ? styles.tileSat : null,
            live?.todayIndex === i ? styles.tileToday : null,
          ]
            .filter(Boolean)
            .join(" ");
          return (
            <tr key={day.day} className={classes || undefined} aria-current={live?.todayIndex === i ? "date" : undefined}>
              <th scope="row">
                {day.day}
                {live?.todayIndex === i ? <span className={styles.todayTag}>Today</span> : null}
              </th>
              <td>{day.label}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
