import Image from "next/image";
import type { CSSProperties } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";
import SiteLink from "@/components/ui/SiteLink";
import { ToothMark } from "@/components/ui/Brand";
import { Portrait } from "@/components/ui/Portrait";
import { images } from "@/content/images";
import { practice } from "@/content/site";
import { staffDentists, staffRoles, staffTeam, teamMembers } from "@/content/pages/staff";
import { RoleNav } from "./RoleNav";
import styles from "./Staff.module.css";

/**
 * Meet the Staff sections (order and heading levels follow 02 Content.md). Designs used
 * on this page only: the care-team panel, the team grid and the role chapters with a
 * sticky menu that follows the scroll.
 */

/** Short summaries of each role, taken from its chapter below (decorative) */
const roleNotes: Record<string, string> = {
  hygienists: "Cleanings, X-rays & home-care tips",
  "dental-assistants": "Chairside during treatment",
  "front-desk": "Booking, plans & insurance",
};

/**
 * Hero visual: the care team as one panel. The two dentists lead it (avatars), and the
 * three roles follow as rows that slide in one after another (decorative).
 */
export function StaffHeroCards() {
  return (
    <div className={styles.crew} aria-hidden="true">
      <div className={styles.crewHead}>
        <span className={styles.crewAvatars}>
          <span className={styles.crewAvatar}>
            <ToothMark className={styles.crewMark} />
          </span>
          <span className={styles.crewAvatar}>
            {images.drGadria.src ? (
              <Image src={images.drGadria.src} alt="" fill sizes="64px" style={{ objectFit: "cover", objectPosition: "60% 20%" }} />
            ) : null}
          </span>
        </span>
        <span>
          <span className={styles.crewTitle}>Your care team</span>
          <span className={styles.crewSub}>Dr. Bhalala &amp; Dr. Gadria, with</span>
        </span>
      </div>
      <ul role="list" className={styles.crewRoles}>
        {staffRoles.map((role, i) => (
          <li key={role.id} className={styles.crewRole} style={{ "--i": i } as CSSProperties}>
            <span className={styles.crewIcon}>
              <Icon name={role.icon as IconName} size={24} strokeWidth={1.6} />
            </span>
            <span>
              <span className={styles.crewName}>{role.short}</span>
              <span className={styles.crewNote}>{roleNotes[role.id]}</span>
            </span>
          </li>
        ))}
      </ul>
      <span className={styles.crewFoot}>
        <Icon name="pin" size={16} />
        {practice.address.street}
      </span>
    </div>
  );
}

/**
 * The team: one card per person, the dentists first, then hygienists, dental assistants
 * and front desk (fed from teamMembers once the practice supplies names and photos).
 */
export function StaffTeam() {
  const order = ["Dental Hygienist", "Dental Assistant", "Front Desk"];
  const members = [...teamMembers].sort((a, b) => order.indexOf(a.role) - order.indexOf(b.role));
  return (
    <section className={styles.team} aria-labelledby="staff-team-title">
      <div className="container">
        <div className={styles.teamHead}>
          <p className="label" data-reveal>
            Our team
          </p>
          <h2 id="staff-team-title" data-reveal>
            {staffTeam.title}
          </h2>
          <p className="lead" data-reveal>
            {staffTeam.text}
          </p>
        </div>
        <ul role="list" className={styles.members}>
          {staffDentists.map((dentist) => (
            <li key={dentist.name} className={`${styles.member} ${styles.memberDentist}`} data-reveal>
              <Portrait image={images[dentist.image]} sizes="(max-width: 575px) 80vw, 300px" className={styles.memberPortrait} />
              <span className={styles.memberRole}>Dentist</span>
              <span className={styles.memberName}>{dentist.name}</span>
              <span className={styles.memberLine}>{dentist.line}</span>
              <SiteLink href={dentist.link.href} className={`text-link ${styles.memberLink}`}>
                {dentist.link.label} <Icon name="arrow" size={16} />
              </SiteLink>
            </li>
          ))}
          {members.map((member) => (
            <li key={member.name} className={styles.member} data-reveal>
              <span className={styles.memberPhoto}>
                <Image
                  src={member.photo}
                  alt={`${member.name}, ${member.role} at Radiant Smiles @ Floral Vale in Yardley, PA`}
                  fill
                  sizes="(max-width: 575px) 90vw, 280px"
                  style={{ objectFit: "cover" }}
                />
              </span>
              <span className={styles.memberRole}>{member.role}</span>
              <span className={styles.memberName}>{member.name}</span>
              {member.line ? <span className={styles.memberLine}>{member.line}</span> : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** The three roles as chapters: a sticky menu on the left, each role's section on the right */
export function StaffRoles() {
  return (
    <div className={styles.roles}>
      <div className={`container ${styles.rolesGrid}`}>
        <RoleNav items={staffRoles.map((role) => ({ id: role.id, label: role.short, icon: role.icon as IconName }))} />
        <div className={styles.chapters}>
          {staffRoles.map((role) => (
            <section key={role.id} id={role.id} className={styles.chapter} aria-labelledby={`${role.id}-title`}>
              <span className={styles.chapterArt} aria-hidden="true" data-reveal>
                <Icon name={role.icon as IconName} size={44} strokeWidth={1.3} />
              </span>
              <div className={styles.chapterCopy}>
                <h2 id={`${role.id}-title`} data-reveal>
                  {role.title}
                </h2>
                <p data-reveal>{role.text}</p>
                {role.link ? (
                  <div data-reveal>
                    <SiteLink href={role.link.href} className="text-link">
                      {role.link.label} <Icon name="arrow" size={16} />
                    </SiteLink>
                  </div>
                ) : null}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
