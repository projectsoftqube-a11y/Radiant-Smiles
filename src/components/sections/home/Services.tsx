import { homeServices } from "@/content/pages/home";
import { ServiceTabs } from "./ServiceTabs";
import styles from "./Services.module.css";

/**
 * All 32 services in the five groups (H3 each), as even tabs: group names on the left, the
 * chosen group's photo and services on the right. Every service is a crawlable link.
 */
export function Services() {
  return (
    <section className={styles.section} aria-labelledby="home-services-title">
      <div className="container">
        <div className={styles.head}>
          <p className="label" data-reveal>
            Services
          </p>
          <h2 id="home-services-title" data-reveal>
            {homeServices.title}
          </h2>
          <p className={`lead ${styles.intro}`} data-reveal>
            {homeServices.intro}
          </p>
        </div>

        <ServiceTabs />
      </div>
    </section>
  );
}
