import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { MapEmbed } from "@/components/sections/home/MapEmbed";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import SiteLink from "@/components/ui/SiteLink";
import { contactDirections, contactFirstVisit, contactHours, contactParking, contactRequest } from "@/content/pages/contact";
import { practice } from "@/content/site";
import { HoursTable, OpenStatus, TodayHours } from "./ContactLive";
import styles from "./Contact.module.css";

/**
 * Contact Us sections (order and heading levels follow 02 Content.md). Designs used on
 * this page only: the contact panel, the call + form split, the hours timetable, the
 * route list beside the map and the two closing notes.
 */

/**
 * Hero panel: a navy band with the live open/closed status and today's hours, the NAP
 * block as plain text (identical to the footer and the Google Business Profile), then
 * two action tiles: call and directions.
 */
export function ContactCard() {
  return (
    <div className={styles.panel}>
      <div className={styles.panelTop}>
        <OpenStatus />
        <p className={styles.todayLine}>
          <Icon name="clock" size={18} />
          <TodayHours />
        </p>
      </div>
      <div className={styles.panelBody}>
        <span className={styles.panelPin} aria-hidden="true">
          <Icon name="pin" size={24} />
        </span>
        <address className={styles.address}>
          <strong>{practice.name}</strong>
          <br />
          {practice.address.street}
          <br />
          {practice.address.city}, {practice.address.region} {practice.address.postalCode}
        </address>
        <p className={styles.phoneLine}>
          <strong>Phone:</strong>{" "}
          <a href={practice.phone.href} data-track="call_click_contact_card">
            {practice.phone.display}
          </a>
        </p>
      </div>
      <div className={styles.actions}>
        <a href={practice.phone.href} className={styles.action} data-track="call_click_contact_card">
          <span className={styles.actionIcon} aria-hidden="true">
            <Icon name="phone" size={22} />
          </span>
          <span>
            <span className={styles.actionTitle}>Call us</span>
            <span className={styles.actionSub}>{practice.phone.display}</span>
          </span>
        </a>
        <a
          href={practice.directionsUrl}
          className={styles.action}
          target="_blank"
          rel="noopener noreferrer"
          data-track="directions_click"
        >
          <span className={styles.actionIcon} aria-hidden="true">
            <Icon name="directions" size={22} />
          </span>
          <span>
            <span className={styles.actionTitle}>Directions</span>
            <span className={styles.actionSub}>Google Maps</span>
          </span>
        </a>
      </div>
    </div>
  );
}

/** Call or request: the phone and urgent note on the left, the form on the right */
export function ContactRequest() {
  return (
    <section className={styles.request} aria-labelledby="contact-request-title">
      <div className={`container ${styles.requestGrid}`}>
        <div className={styles.requestCopy}>
          <p className="label" data-reveal>
            Book a visit
          </p>
          <h2 id="contact-request-title" data-reveal>
            {contactRequest.title}
          </h2>
          <p className="lead" data-reveal>
            {contactRequest.text}
          </p>
          <a href={practice.phone.href} className={styles.bigPhone} data-track="call_click_contact_request" data-reveal>
            <span className={styles.bigPhoneIcon} aria-hidden="true">
              <Icon name="phone" size={26} />
            </span>
            <span>{practice.phone.display}</span>
          </a>
          <p className={styles.urgent} data-reveal>
            <span className={styles.urgentIcon} aria-hidden="true">
              <Icon name="firstAid" size={22} />
            </span>
            <span>{contactRequest.urgent}</span>
          </p>
        </div>
        <div className={styles.formWrap} data-reveal>
          <AppointmentForm />
        </div>
      </div>
    </section>
  );
}

/** Hours: the timetable with today marked, and the after-work note */
export function ContactHours() {
  return (
    <section className={styles.hours} aria-labelledby="contact-hours-title">
      <div className={`container ${styles.hoursGrid}`}>
        <div className={styles.hoursCopy}>
          <p className="label" data-reveal>
            Opening times
          </p>
          <h2 id="contact-hours-title" data-reveal>
            {contactHours.title}
          </h2>
          <p className={styles.afterWork} data-reveal>
            <span className={styles.afterWorkIcon} aria-hidden="true">
              <Icon name="clock" size={24} />
            </span>
            <span>{contactHours.note}</span>
          </p>
        </div>
        <div className={styles.timetable} data-reveal>
          <HoursTable />
        </div>
      </div>
    </section>
  );
}

/** Directions: the route table beside the map, then finding the office */
export function ContactDirections() {
  return (
    <section className={styles.directions} aria-labelledby="contact-directions-title">
      <div className="container">
        <div className={styles.directionsHead}>
          <p className="label" data-reveal>
            Getting here
          </p>
          <h2 id="contact-directions-title" data-reveal>
            {contactDirections.title}
          </h2>
          <p className="lead" data-reveal>
            {contactDirections.intro}
          </p>
        </div>
        <div className={styles.directionsGrid}>
          <div className={styles.routes} data-reveal>
            <table className={styles.routeTable}>
              <caption className="visually-hidden">Typical drive times to the office, depending on traffic</caption>
              <thead>
                <tr>
                  <th scope="col">Coming from</th>
                  <th scope="col">Approx. drive</th>
                  <th scope="col">Main route</th>
                </tr>
              </thead>
              <tbody>
                {contactDirections.routes.map((route) => (
                  <tr key={route.from}>
                    <th scope="row">
                      <span className={styles.routeIcon} aria-hidden="true">
                        <Icon name="car" size={18} />
                      </span>
                      {route.from}
                    </th>
                    <td>
                      <span className={styles.time}>{route.time}</span>
                    </td>
                    <td>{route.route}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className={styles.mapSide} data-reveal>
            <div className={styles.map}>
              <MapEmbed src={practice.mapEmbedUrl} title={`Map: ${practice.name}, ${practice.address.street}, ${practice.address.city}, ${practice.address.region}`} />
            </div>
            <Button href={practice.directionsUrl} icon="directions" track="directions_click" external>
              {contactDirections.button}
            </Button>
          </div>
        </div>
        <div className={styles.finding} data-reveal>
          <h3>{contactDirections.sub.title}</h3>
          <p>{contactDirections.sub.text}</p>
        </div>
      </div>
    </section>
  );
}

/** Parking & access and before your first visit: two notes side by side */
export function ContactNotes() {
  return (
    <div className={styles.notes}>
      <div className={`container ${styles.notesGrid}`}>
        <section className={styles.noteCard} aria-labelledby="contact-parking-title" data-reveal>
          <span className={styles.noteIcon} aria-hidden="true">
            <Icon name="accessible" size={26} />
          </span>
          <h2 id="contact-parking-title">{contactParking.title}</h2>
          <p>{contactParking.text}</p>
        </section>
        <section className={`${styles.noteCard} ${styles.noteSky}`} aria-labelledby="contact-first-title" data-reveal>
          <span className={styles.noteIcon} aria-hidden="true">
            <Icon name="clipboard" size={26} />
          </span>
          <h2 id="contact-first-title">{contactFirstVisit.title}</h2>
          <p>{contactFirstVisit.text}</p>
          <div className={styles.noteLinks}>
            {contactFirstVisit.links.map((link) => (
              <SiteLink key={link.href} href={link.href} className="text-link">
                {link.label} <Icon name="arrow" size={16} />
              </SiteLink>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
