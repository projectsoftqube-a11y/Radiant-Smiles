import { Icon } from "@/components/ui/Icon";
import { Rays } from "@/components/ui/Rays";
import SiteLink from "@/components/ui/SiteLink";
import { ToothFrame } from "@/components/ui/ToothFrame";
import { images } from "@/content/images";
import { homeDoctors } from "@/content/pages/home";
import { dentists } from "@/content/site";
import styles from "./Doctors.module.css";

/**
 * Copy on the left (intro, then each dentist's H3, bio and link); on the right the two
 * portraits in tooth-shaped frames, side by side on light rays, each with a name plate.
 * Dr. Bhalala has no photo yet (the current site shows a silhouette), so his tooth is
 * soft sky enamel with the logo's tooth mark in it.
 */
export function Doctors() {
  return (
    <section className={styles.section} aria-labelledby="home-doctors-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
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

          <div className={styles.bios}>
            {homeDoctors.doctors.map((doctor) => (
              <article key={doctor.key} className={styles.bio} data-reveal>
                <h3 className={styles.name}>{doctor.name}</h3>
                <p>{doctor.bio}</p>
                <SiteLink href={doctor.link.href} className="text-link">
                  {doctor.link.label} <Icon name="arrow" size={16} />
                </SiteLink>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.teeth}>
          <Rays className={styles.rays} count={21} spread={170} inner={0.36} scroll />
          {homeDoctors.doctors.map((doctor) => (
            <figure key={doctor.key} className={styles.tooth} data-reveal>
              <ToothFrame
                id={`rs-doctor-tooth-${doctor.key}`}
                image={images[doctor.image]}
                sizes="(max-width: 991px) 45vw, 22vw"
              />
              <figcaption className={styles.plate} aria-hidden="true">
                <span className={styles.plateName}>{doctor.name.replace(/, DMD$/, "")}</span>
                <span className={styles.plateRole}>DMD</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
