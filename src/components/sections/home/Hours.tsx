import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { homeHours } from "@/content/pages/home";
import { practice } from "@/content/site";
import { MapEmbed } from "./MapEmbed";
import { WeekHours } from "./WeekHours";
import styles from "./Hours.module.css";

/**
 * Office hours & location: the heading and a live open/closed status beside the week as a
 * column chart (Saturday in navy), then a full-width map with the address card on it.
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

        <div className={styles.place} data-reveal>
          <div className={styles.map}>
            <MapEmbed title={`Map: ${practice.name}, ${practice.address.street}, ${practice.address.city}, ${practice.address.region}`} src={practice.mapEmbedUrl} />
          </div>
          <div className={styles.card}>
            <span className={styles.cardIcon} aria-hidden="true">
              <Icon name="pin" size={24} />
            </span>
            <address className={styles.nap}>
              <strong className={styles.napName}>{practice.name}</strong>
              <span>{practice.address.street}</span>
              <span>
                {practice.address.city}, {practice.address.region} {practice.address.postalCode}
              </span>
              <span className={styles.phoneLine}>
                <strong>Phone:</strong>{" "}
                <a href={practice.phone.href} data-track="call_click_hours">
                  {practice.phone.display}
                </a>
              </span>
            </address>
            <Button href={practice.directionsUrl} icon="directions" external track="directions_click">
              {homeHours.directionsLabel}
            </Button>
            <p className={styles.mapNote}>
              {practice.address.township}, {practice.address.county}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
