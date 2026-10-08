"use client";

import type { CSSProperties } from "react";
import { hours } from "@/content/site";
import { clock, toHours, useOfficeStatus } from "@/lib/office-hours";
import styles from "./Hours.module.css";

/** Chart scale: 8 am to 6 pm covers every opening hour. */
const SCALE_START = 8;
const SCALE_END = 18;
const ticks = [8, 10, 12, 14, 16, 18];
const tickLabel = (h: number) => (h === 12 ? "12 pm" : h < 12 ? `${h} am` : `${h - 12} pm`);

/**
 * The week as a column chart: every day on one 8 am – 6 pm scale, the opening hours filled
 * like a bar on a clock face. Saturday is the navy column; today's column and a live
 * "open now / closed now" status are worked out in Yardley time on the visitor's device.
 * The chart is decorative (aria-hidden); a visually hidden table carries the hours.
 */
export function WeekHours() {
  const live = useOfficeStatus();

  return (
    <div className={styles.week}>
      <p className={`${styles.status} ${live ? (live.open ? styles.isOpen : styles.isClosed) : ""}`} aria-live="polite">
        <span className={styles.statusDot} aria-hidden="true" />
        <span>{live ? live.text : "Office hours"}</span>
      </p>

      <table className="visually-hidden">
        <caption>Office hours, Monday to Sunday</caption>
        <thead>
          <tr>
            <th scope="col">Day</th>
            <th scope="col">Hours</th>
          </tr>
        </thead>
        <tbody>
          {hours.map((day) => (
            <tr key={day.day}>
              <th scope="row">{day.day}</th>
              <td>{day.label}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.chart} aria-hidden="true" data-rise>
        <div className={styles.axis}>
          {ticks.map((h) => (
            <span key={h} style={{ "--at": (h - SCALE_START) / (SCALE_END - SCALE_START) } as CSSProperties}>
              {tickLabel(h)}
            </span>
          ))}
        </div>
        <div className={styles.columns}>
          {hours.map((day, i) => {
            const open = day.opens && day.closes;
            const start = open ? (toHours(day.opens!) - SCALE_START) / (SCALE_END - SCALE_START) : 0;
            const span = open ? (toHours(day.closes!) - toHours(day.opens!)) / (SCALE_END - SCALE_START) : 1;
            const classes = [
              styles.col,
              day.day === "Saturday" ? styles.saturday : null,
              open ? null : styles.closedDay,
              live?.todayIndex === i ? styles.today : null,
            ]
              .filter(Boolean)
              .join(" ");
            return (
              <div key={day.day} className={classes}>
                <span className={styles.dayName}>
                  {day.short}
                  {live?.todayIndex === i ? <em>Today</em> : null}
                </span>
                <span className={styles.track}>
                  {open ? (
                    <span className={styles.bar} data-rise-item style={{ "--start": start, "--span": span } as CSSProperties}>
                      <span>{clock(day.opens!).replace(":00", "")}</span>
                      <span>{clock(day.closes!).replace(":00", "")}</span>
                    </span>
                  ) : (
                    <span className={styles.closedLabel}>Closed</span>
                  )}
                </span>
                {day.day === "Saturday" ? <span className={styles.flag}>Open Saturdays</span> : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
