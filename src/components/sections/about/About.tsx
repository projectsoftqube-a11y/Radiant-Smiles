import Image from "next/image";
import type { CSSProperties } from "react";
import { MapEmbed } from "@/components/sections/home/MapEmbed";
import { ToothMark } from "@/components/ui/Brand";
import { Icon, type IconName } from "@/components/ui/Icon";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Portrait } from "@/components/ui/Portrait";
import { Rays } from "@/components/ui/Rays";
import SiteLink from "@/components/ui/SiteLink";
import { images } from "@/content/images";
import { aboutApproach, aboutDentists, aboutGlance, aboutStaff, aboutTechnology, aboutVisit } from "@/content/pages/about";
import { practice } from "@/content/site";
import styles from "./About.module.css";

/**
 * About Us sections (order and heading levels follow 02 Content.md). Each design here is
 * used on this page only: the fact bento, the fact sheet, the arched pillars,
 * the dentist cards, the team strip, the navy technology band and the office card + map.
 */

/**
 * Hero visual: a bento of the practice's key facts (decorative; the intro says the
 * same): a patient photo, the year it opened, the two dentists, Saturday hours and the
 * address. Tiles pop in one after another.
 */
export function AboutBento() {
  const gadria = images.drGadria;
  return (
    <div className={styles.bento} aria-hidden="true">
      <div className={`${styles.tile} ${styles.tilePhoto}`}>
        {images.homeFamilyPill.src ? (
          <Image src={images.homeFamilyPill.src} alt="" fill sizes="(max-width: 991px) 45vw, 260px" priority style={{ objectFit: "cover", objectPosition: "35% 30%" }} />
        ) : null}
      </div>
      <div className={`${styles.tile} ${styles.tileYear}`}>
        <span className={styles.tileLabel}>Since</span>
        <span className={styles.year}>
          {"2009".split("").map((digit, i) => (
            <span key={i} className={styles.digit}>
              <span style={{ "--d": i } as CSSProperties}>{digit}</span>
            </span>
          ))}
        </span>
      </div>
      <div className={`${styles.tile} ${styles.tileDocs}`}>
        <span className={styles.avatars}>
          <span className={styles.avatar}>
            <ToothMark className={styles.avatarMark} />
          </span>
          <span className={styles.avatar}>
            {gadria.src ? <Image src={gadria.src} alt="" fill sizes="56px" style={{ objectFit: "cover", objectPosition: "60% 20%" }} /> : null}
          </span>
        </span>
        <span className={styles.tileStrong}>Two Temple-trained dentists</span>
      </div>
      <div className={`${styles.tile} ${styles.tileHours}`}>
        <Icon name="calendar" size={24} />
        <span className={styles.tileStrong}>Open Saturdays</span>
        <span className={styles.tileSmall}>8 am – 2 pm</span>
      </div>
      <div className={`${styles.tile} ${styles.tilePlace}`}>
        <span className={styles.placeIcon}>
          <Icon name="pin" size={22} />
        </span>
        <span>
          <span className={styles.tileStrong}>{practice.address.street}</span>
          <span className={styles.tileSmall}>
            {practice.address.city}, {practice.address.region}
          </span>
        </span>
      </div>
    </div>
  );
}

/** At a glance: a fact sheet, the title on the left and the six facts as a real list */
export function AboutGlance() {
  return (
    <section className={styles.glance} aria-labelledby="about-glance-title">
      <div className={`container ${styles.glanceGrid}`}>
        <div className={styles.glanceHead}>
          <p className="label" data-reveal>
            At a glance
          </p>
          <h2 id="about-glance-title" data-reveal>
            {aboutGlance.title}
          </h2>
          <p className="lead" data-reveal>
            {aboutGlance.intro}
          </p>
        </div>
        <ul role="list" className={styles.facts}>
          {aboutGlance.items.map((item) => (
            <li key={item.lead} className={styles.fact} data-reveal>
              <span className={styles.factIcon} aria-hidden="true">
                <Icon name={item.icon as IconName} size={22} />
              </span>
              <p>
                <strong>{item.lead}</strong> {item.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Approach: the intro, then the three commitments as arched pillars (tooth crowns) */
export function AboutApproach() {
  return (
    <section className={styles.approach} aria-labelledby="about-approach-title">
      <div className="container">
        <div className={styles.approachHead}>
          <div>
            <p className="label" data-reveal>
              How we work
            </p>
            <h2 id="about-approach-title" data-reveal>
              {aboutApproach.title}
            </h2>
          </div>
          <p className="lead" data-reveal>
            {aboutApproach.text}
          </p>
        </div>
        <p className={styles.listIntro} data-reveal>
          {aboutApproach.listIntro}
        </p>
        <ul role="list" className={styles.pillars}>
          {aboutApproach.items.map((item) => (
            <li key={item.lead} className={styles.pillar} data-reveal>
              <span className={styles.pillarIcon} aria-hidden="true">
                <Icon name={item.icon as IconName} size={28} strokeWidth={1.5} />
              </span>
              <p>
                <strong className={styles.pillarLead}>{item.lead}</strong> {item.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** The two dentists as side-by-side cards, arched portrait and short bio */
export function AboutDentists() {
  return (
    <section className={styles.dentists} aria-labelledby="about-dentists-title">
      <div className="container">
        <div className={styles.centerHead}>
          <p className="label" data-reveal>
            Your dentists
          </p>
          <h2 id="about-dentists-title" data-reveal>
            {aboutDentists.title}
          </h2>
          <p className="lead" data-reveal>
            {aboutDentists.intro}
          </p>
        </div>
        <div className={styles.doctorCards}>
          {aboutDentists.doctors.map((doctor) => (
            <article key={doctor.key} className={styles.doctorCard} data-reveal>
              <Portrait image={images[doctor.image]} sizes="(max-width: 767px) 80vw, 240px" className={styles.doctorPhoto} />
              <div className={styles.doctorText}>
                <p>
                  <strong className={styles.doctorName}>{doctor.name}</strong> {doctor.text}
                </p>
                <SiteLink href={doctor.link.href} className="text-link">
                  {doctor.link.label} <Icon name="arrow" size={16} />
                </SiteLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Team: the text and link, with the three roles it names as tiles (decorative) */
export function AboutStaff() {
  const roles: { icon: IconName; name: string }[] = [
    { icon: "toothClean", name: "Hygienists" },
    { icon: "mirror", name: "Dental assistants" },
    { icon: "calendarCheck", name: "Front desk" },
  ];
  return (
    <section className={styles.staff} aria-labelledby="about-staff-title">
      <div className={`container ${styles.staffGrid}`}>
        <div className={styles.staffCopy}>
          <p className="label" data-reveal>
            Our team
          </p>
          <h2 id="about-staff-title" data-reveal>
            {aboutStaff.title}
          </h2>
          <p data-reveal>{aboutStaff.text}</p>
          <div data-reveal>
            <SiteLink href={aboutStaff.link.href} className="text-link">
              {aboutStaff.link.label} <Icon name="arrow" size={16} />
            </SiteLink>
          </div>
        </div>
        <ul role="list" className={styles.roles} aria-hidden="true">
          {roles.map((role) => (
            <li key={role.name} className={styles.role} data-reveal>
              <span className={styles.roleIcon}>
                <Icon name={role.icon} size={26} strokeWidth={1.5} />
              </span>
              <span className={styles.roleName}>{role.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Technology: the page's one navy band, microscope photo in an arch, rays in light */
export function AboutTechnology() {
  const tools: { name: string; icon: IconName }[] = [
    { name: "Dental microscopes", icon: "microscope" },
    { name: "Cone beam CT", icon: "tooth" },
    { name: "iTero scanner", icon: "camera" },
    { name: "Digital X-rays", icon: "xray" },
  ];
  return (
    <section className={styles.tech} aria-labelledby="about-tech-title">
      <Rays className={styles.techRays} count={19} spread={160} inner={0.25} scroll />
      <div className={`container ${styles.techGrid}`}>
        <div className={styles.techMedia}>
          <MediaFrame image={images.techMicroscope} ratio="4 / 5" sizes="(max-width: 991px) 80vw, 40vw" arch reveal="scroll" />
        </div>
        <div className={styles.techCopy}>
          <p className="label label-inverse" data-reveal>
            Technology
          </p>
          <h2 id="about-tech-title" data-reveal>
            {aboutTechnology.title}
          </h2>
          {aboutTechnology.paragraphs.map((text) => (
            <p key={text.slice(0, 24)} data-reveal>
              {text}
            </p>
          ))}
          <ul role="list" className={styles.tools} aria-hidden="true" data-reveal>
            {tools.map((tool) => (
              <li key={tool.name}>
                <Icon name={tool.icon} size={16} />
                {tool.name}
              </li>
            ))}
          </ul>
          <div data-reveal>
            <SiteLink href={aboutTechnology.link.href} className={`text-link ${styles.techLink}`}>
              {aboutTechnology.link.label} <Icon name="arrow" size={16} />
            </SiteLink>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Visit: the text, the office's NAP card and the map */
export function AboutVisit() {
  return (
    <section className={styles.visit} aria-labelledby="about-visit-title">
      <div className={`container ${styles.visitGrid}`}>
        <div className={styles.visitCopy}>
          <p className="label" data-reveal>
            Visit us
          </p>
          <h2 id="about-visit-title" data-reveal>
            {aboutVisit.title}
          </h2>
          <p data-reveal>{aboutVisit.text}</p>
          <address className={styles.nap} data-reveal>
            <span className={styles.napIcon} aria-hidden="true">
              <Icon name="pin" size={22} />
            </span>
            <span>
              <strong>{practice.name}</strong>
              <br />
              {practice.address.street}, {practice.address.city}, {practice.address.region} {practice.address.postalCode}
              <br />
              <a href={practice.phone.href} data-track="call_click_about_visit">
                {practice.phone.display}
              </a>
            </span>
          </address>
          <div data-reveal>
            <SiteLink href={aboutVisit.link.href} className="text-link">
              {aboutVisit.link.label} <Icon name="arrow" size={16} />
            </SiteLink>
          </div>
        </div>
        <div className={styles.map} data-reveal>
          <MapEmbed src={practice.mapEmbedUrl} title={`Map: ${practice.name}, ${practice.address.street}, ${practice.address.city}, ${practice.address.region}`} />
        </div>
      </div>
    </section>
  );
}
