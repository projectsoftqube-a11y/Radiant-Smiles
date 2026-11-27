import { homeHours } from "@/content/pages/home";
import { WeekHours } from "./WeekHours";
import styles from "./Hours.module.css";

/**
 * Office hours & location: the heading and a live open/closed status beside the week as a
 * column chart (Saturday in navy). The map with the address card moved to just above the
 * footer (LocationMap; client, 27 Nov 2026).
 */
export function Hours() {
  return (
    <section className={styles.section} aria-labelledby="home-hours-title">
      <div className="container">
        <div className={styles.top}>
          <div className={styles.copy}>
            <p className="label" data-reveal>
              Visit us
            </p>
            <h2 id="home-hours-title" data-reveal>
              {homeHours.title}
            </h2>
            <p className={`lead ${styles.intro}`} data-reveal>
              {homeHours.intro}
            </p>
          </div>
          <div className={styles.weekWrap} data-reveal>
            <WeekHours />
          </div>
        </div>
      </div>
    </section>
  );
}
