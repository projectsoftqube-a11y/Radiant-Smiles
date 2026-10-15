import { Icon } from "@/components/ui/Icon";
import { MediaFrame } from "@/components/ui/MediaFrame";
import SiteLink from "@/components/ui/SiteLink";
import { ToConfirm } from "@/components/ui/ToConfirm";
import { images } from "@/content/images";
import { homeDoctors } from "@/content/pages/home";
import { dentists } from "@/content/site";
import styles from "./Doctors.module.css";

/**
 * "Meet Our Dentists" (redesign 5, client feedback 15 Oct 2026: no photos inside tooth frames,
 * and a title that doesn't name only two dentists). A split header (title and intro beside
 * the Temple credential), then one profile card per dentist: the portrait in a plain rounded
 * frame beside the name, focus chips, bio and bio link. The two dentists who are joining show
 * as one slim strip below until the practice sends their details. Dr. Bhalala's portrait is
 * a placeholder until his headshot arrives.
 */
export function Doctors() {
  return (
    <section className={styles.section} aria-labelledby="home-doctors-title">
      <div className="container">
        <header className={styles.head}>
          <div className={styles.headCopy}>
            <p className="label" data-reveal>
              Your dentists
            </p>
            <h2 id="home-doctors-title" data-reveal>
              {homeDoctors.title}
            </h2>
            <p className="lead" data-reveal>
              {homeDoctors.intro}
            </p>
          </div>
          <p className={styles.credential} data-reveal aria-hidden="true">
            <span className={styles.credentialIcon}>
              <Icon name="graduation" size={26} />
            </span>
            <span>
              <strong>{dentists.gadria.school}</strong>
              <small>Where both our dentists trained</small>
            </span>
          </p>
        </header>

        <ul role="list" className={styles.team}>
          {homeDoctors.doctors.map((doctor) => (
            <li key={doctor.key} className={styles.profile} data-reveal>
              <div className={styles.photo}>
                <MediaFrame
                  image={images[doctor.image]}
                  ratio="4 / 5"
                  sizes="(max-width: 767px) 90vw, (max-width: 1199px) 45vw, 280px"
                  position="50% 22%"
                  className={styles.frame}
                />
                <span className={styles.degree} aria-hidden="true">
                  DMD
                </span>
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
        </ul>

        {/* The two dentists joining soon: one slim strip until their details arrive */}
        <div className={styles.joining} data-reveal>
          <span className={styles.joiningFaces} aria-hidden="true">
            {homeDoctors.upcoming.map((slot) => (
              <span key={slot.key} className={styles.joiningFace}>
                <Icon name="user" size={22} />
              </span>
            ))}
          </span>
          <div className={styles.joiningCopy}>
            <p className={styles.joiningTitle}>{homeDoctors.upcomingTitle}</p>
            <p className={styles.joiningText}>{homeDoctors.upcomingText}</p>
          </div>
          <ToConfirm note={homeDoctors.upcomingNote} />
        </div>
      </div>
    </section>
  );
}
