import { Icon } from "@/components/ui/Icon";
import { Rays } from "@/components/ui/Rays";
import SiteLink from "@/components/ui/SiteLink";
import { ToConfirm } from "@/components/ui/ToConfirm";
import { ToothFrame } from "@/components/ui/ToothFrame";
import { images } from "@/content/images";
import { homeDoctors } from "@/content/pages/home";
import { dentists } from "@/content/site";
import styles from "./Doctors.module.css";

/**
 * "Your dentists" (redesigned for the client's feedback, 14 Oct 2026: a better presentation
 * and two more dentists coming). A centred header over one card per dentist: the portrait in
 * the site's tooth-shaped frame on a sky band with light rays, a name plate, focus chips, the
 * bio and its link, so each bio sits with its photo. The two dentists who are joining show as
 * "joining soon" cards (placeholder portrait and a "to confirm" note) until the practice sends
 * their details. Dr. Bhalala's portrait is a placeholder until his headshot arrives.
 */
export function Doctors() {
  return (
    <section className={styles.section} aria-labelledby="home-doctors-title">
      <div className="container">
        <header className={styles.head}>
          <p className="label" data-reveal>
            Your dentists
          </p>
          <h2 id="home-doctors-title" data-reveal>
            {homeDoctors.title}
          </h2>
          <p className="lead" data-reveal>
            {homeDoctors.intro}
          </p>
          <p className={styles.school} data-reveal aria-hidden="true">
            <Icon name="graduation" size={22} />
            <span>{dentists.gadria.school}</span>
          </p>
        </header>

        <ul role="list" className={styles.cards}>
          {homeDoctors.doctors.map((doctor) => (
            <li key={doctor.key} className={styles.card} data-reveal>
              <div className={styles.portrait}>
                <Rays className={styles.rays} count={15} spread={150} inner={0.4} scroll />
                <ToothFrame
                  id={`rs-doctor-tooth-${doctor.key}`}
                  image={images[doctor.image]}
                  sizes="(max-width: 575px) 60vw, (max-width: 1199px) 30vw, 16vw"
                  className={styles.tooth}
                />
                <p className={styles.plate} aria-hidden="true">
                  <span className={styles.plateName}>{doctor.name.replace(/, DMD$/, "")}</span>
                  <span className={styles.plateRole}>DMD</span>
                </p>
              </div>
              <div className={styles.body}>
                <h3 className={styles.name}>{doctor.name}</h3>
                <ul role="list" className={styles.focus} aria-hidden="true">
                  {doctor.focus.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className={styles.bio}>{doctor.bio}</p>
                <SiteLink href={doctor.link.href} className={`text-link ${styles.more}`}>
                  {doctor.link.label} <Icon name="arrow" size={16} />
                </SiteLink>
              </div>
            </li>
          ))}

          {homeDoctors.upcoming.map((slot) => (
            <li key={slot.key} className={`${styles.card} ${styles.soon}`} data-reveal>
              <div className={styles.portrait}>
                <ToothFrame
                  id={`rs-doctor-tooth-${slot.key}`}
                  image={images.doctorPlaceholder}
                  sizes="(max-width: 575px) 60vw, (max-width: 1199px) 30vw, 16vw"
                  className={styles.tooth}
                />
                <p className={styles.plate} aria-hidden="true">
                  <span className={styles.plateName}>{slot.label}</span>
                  <span className={styles.plateRole}>{slot.status}</span>
                </p>
              </div>
              <div className={styles.body}>
                <div className={styles.soonPanel}>
                  <span className={styles.soonIcon} aria-hidden="true">
                    <Icon name="users" size={24} />
                  </span>
                  <p className={styles.soonTitle}>
                    {slot.label}, {slot.status.toLowerCase()}
                  </p>
                  <p className={styles.soonText}>{homeDoctors.upcomingText}</p>
                  <ToConfirm note={homeDoctors.upcomingNote} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
