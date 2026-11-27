import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { homeHours } from "@/content/pages/home";
import { practice } from "@/content/site";
import { MapEmbed } from "./MapEmbed";
import styles from "./LocationMap.module.css";

/**
 * The office map, full width just above the footer (client, 27 Nov 2026; it was the last
 * part of the Office Hours & Location section). Google's own place card sits at the map's
 * top left; our address card sits on the right, in line with the site container. Phones:
 * the map, then the card overlapping its bottom edge.
 */
export function LocationMap() {
  return (
    <section className={styles.section} aria-label={`Map & directions to ${practice.name}`}>
      <div className={styles.map}>
        <MapEmbed title={`Map: ${practice.name}, ${practice.address.street}, ${practice.address.city}, ${practice.address.region}`} src={practice.mapEmbedUrl} />
      </div>
      <div className={`container ${styles.inner}`}>
        <div className={styles.card} data-reveal>
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
    </section>
  );
}
