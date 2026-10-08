import { ToothMark } from "@/components/ui/Brand";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Portrait } from "@/components/ui/Portrait";
import { Rays } from "@/components/ui/Rays";
import SiteLink from "@/components/ui/SiteLink";
import { images } from "@/content/images";
import type { DoctorPage } from "@/content/pages/doctors";
import styles from "./Doctor.module.css";

/**
 * Dentist bio sections, shared by the two bio pages (same kind of page, one layout).
 * Order and heading levels follow each page's 02 Content.md; parts only one bio has
 * (degrees list, memberships) render only where present.
 */

/**
 * Hero visual: the portrait in an arch set over an offset navy arch, with a name plate
 * overlapping its base (name, role and key facts). Without a headshot the arch is soft
 * sky enamel with the logo's tooth mark, so it reads as designed, not missing.
 */
export function DoctorPortrait({ page }: { page: DoctorPage }) {
  const image = images[page.image];
  return (
    <div className={styles.profile} aria-hidden="true">
      <div className={styles.arch}>
        {image.src ? (
          <Portrait image={image} sizes="(max-width: 991px) 80vw, 420px" priority reveal="load" className={styles.photo} />
        ) : (
          <div className={styles.monogram}>
            <ToothMark className={styles.monogramMark} />
          </div>
        )}
      </div>
      <div className={styles.plate}>
        <span className={styles.plateName}>{page.hero.h1}</span>
        <span className={styles.plateRole}>Dentist · Radiant Smiles @ Floral Vale</span>
        <ul role="list" className={styles.plateFacts}>
          {page.badges.map((badge) => (
            <li key={badge.text}>
              <span className={styles.factIcon}>
                <Icon name={badge.icon as IconName} size={18} />
              </span>
              {badge.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/** About: the story on the left, "your dentist in Yardley" as a located card on the right */
export function DoctorAbout({ page }: { page: DoctorPage }) {
  return (
    <section className={styles.about} aria-labelledby={`${page.key}-about-title`}>
      <div className={`container ${styles.aboutGrid}`}>
        <div className={styles.aboutCopy}>
          <p className="label" data-reveal>
            About
          </p>
          <h2 id={`${page.key}-about-title`} data-reveal>
            {page.about.title}
          </h2>
          <p className="lead" data-reveal>
            {page.about.text}
          </p>
        </div>
        <div className={styles.located} data-reveal>
          <span className={styles.locatedPin} aria-hidden="true">
            <Icon name="pin" size={24} />
          </span>
          <h3>{page.about.sub.title}</h3>
          <p>{page.about.sub.text}</p>
        </div>
      </div>
    </section>
  );
}

/** Education: degrees as a two-stop journey (or the story), memberships as plaques */
export function DoctorEducation({ page }: { page: DoctorPage }) {
  const { education } = page;
  return (
    <section className={styles.education} aria-labelledby={`${page.key}-education-title`}>
      <Rays className={styles.educationRays} count={17} spread={140} inner={0.3} scroll />
      <div className="container">
        <div className={styles.educationHead}>
          <p className="label" data-reveal>
            Training
          </p>
          <h2 id={`${page.key}-education-title`} data-reveal>
            {education.title}
          </h2>
          {education.intro ? (
            <p className="lead" data-reveal>
              {education.intro}
            </p>
          ) : null}
        </div>

        {education.degrees ? (
          <div className={styles.journeyWrap} data-grow>
            <span className={styles.journeyLine} aria-hidden="true">
              <span data-grow-item />
            </span>
            <ul role="list" className={styles.journey}>
            {education.degrees.map((degree) => (
              <li key={degree.lead} className={styles.stop} data-reveal>
                <span className={styles.stopMark} aria-hidden="true">
                  <Icon name="graduation" size={26} />
                </span>
                <span className={styles.stopPlace} aria-hidden="true">
                  {degree.place}
                </span>
                <p>
                  <strong>{degree.lead}</strong> {degree.text}
                </p>
              </li>
            ))}
            </ul>
          </div>
        ) : null}

        {education.paragraphs ? (
          <div className={styles.story}>
            <span className={styles.storyMark} aria-hidden="true" data-reveal>
              <Icon name="graduation" size={34} strokeWidth={1.4} />
            </span>
            <div className={styles.storyText}>
              {education.paragraphs.map((text) => (
                <p key={text.slice(0, 24)} data-reveal>
                  {text}
                </p>
              ))}
            </div>
          </div>
        ) : null}

        {education.memberships ? (
          <div className={styles.memberships}>
            <h3 data-reveal>{education.memberships.title}</h3>
            <ul role="list" className={styles.plaques}>
              {education.memberships.items.map((item) => (
                <li key={item} className={styles.plaque} data-reveal>
                  <Icon name="shield" size={22} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
}

/** Approach: the philosophy, with the linked pages as large arrow cards */
export function DoctorApproach({ page }: { page: DoctorPage }) {
  return (
    <section className={styles.approach} aria-labelledby={`${page.key}-approach-title`}>
      <div className={`container ${styles.approachGrid}`}>
        <div className={styles.approachCopy}>
          <p className="label" data-reveal>
            Patient care
          </p>
          <h2 id={`${page.key}-approach-title`} data-reveal>
            {page.approach.title}
          </h2>
          {page.approach.paragraphs.map((text) => (
            <p key={text.slice(0, 24)} data-reveal>
              {text}
            </p>
          ))}
        </div>
        <ul role="list" className={styles.cards}>
          {page.approach.links.map((link) => (
            <li key={link.href} data-reveal>
              <SiteLink href={link.href} className={styles.card}>
                <span>{link.label}</span>
                <span className={styles.cardArrow} aria-hidden="true">
                  <Icon name="arrowUpRight" size={20} />
                </span>
              </SiteLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Outside the office: a warm note */
export function DoctorOutside({ page }: { page: DoctorPage }) {
  return (
    <section className={styles.outside} aria-labelledby={`${page.key}-outside-title`}>
      <div className="container">
        <div className={styles.note} data-reveal>
          <span className={styles.noteIcon} aria-hidden="true">
            <Icon name="heart" size={26} />
          </span>
          <div>
            <h2 id={`${page.key}-outside-title`}>{page.outside.title}</h2>
            <p>{page.outside.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
