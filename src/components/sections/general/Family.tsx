import type { CSSProperties } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Portrait } from "@/components/ui/Portrait";
import { Rich } from "@/components/ui/Rich";
import SiteLink from "@/components/ui/SiteLink";
import { images } from "@/content/images";
import {
  famAges,
  famCheckups,
  famChildren,
  famCosmetic,
  famDentists,
  famEmergency,
  famGeneral,
  famPay,
  famRestorative,
} from "@/content/pages/general/family";
import { FamilyPlan } from "./FamilyPlan";
import styles from "./Family.module.css";

/**
 * Family Dentistry sections (order and heading levels follow 02 Content.md). Designs used on
 * this page only: the house of teeth, the age ribbon, the definition card, the twin panels,
 * the restorative tiles, the cosmetic band, the emergency strip, the two portrait cards and
 * the family membership calculator.
 */

const toothPath =
  "M7.2 3.6c1.6 0 2.9.9 4.8.9s3.2-.9 4.8-.9c2.3 0 3.7 2 3.7 4.6 0 2.3-1 3.9-1.6 6.3-.6 2.6-.9 6-2.6 6-1.9 0-1.8-4.6-4.3-4.6s-2.4 4.6-4.3 4.6c-1.7 0-2-3.4-2.6-6-.6-2.4-1.6-4-1.6-6.3 0-2.6 1.4-4.6 3.7-4.6Z";

/** Hero visual: a house drawn in line, with a family of teeth growing in size inside (decorative) */
export function ToothHouse() {
  const family = [
    { size: 0.6, name: "Toddlers" },
    { size: 0.8, name: "Kids & teens" },
    { size: 1, name: "Adults" },
    { size: 0.92, name: "Older adults" },
  ];
  return (
    <div className={styles.house} aria-hidden="true">
      <svg viewBox="0 0 400 360" className={styles.houseArt} preserveAspectRatio="none">
        <path className={styles.houseLine} d="M30 158 200 26l170 132" pathLength={1} />
        <path className={styles.houseWall} d="M62 136v196h276V136" pathLength={1} />
        <path className={styles.houseChimney} d="M296 86V44h30v64" pathLength={1} />
      </svg>
      <div className={styles.family}>
        {family.map((member, i) => (
          <span key={member.name} className={styles.member} style={{ "--s": member.size, "--i": i } as CSSProperties}>
            <svg viewBox="0 0 24 24" className={styles.memberTooth}>
              <path d={toothPath} />
            </svg>
            <span className={styles.memberName}>{member.name}</span>
          </span>
        ))}
      </div>
      <span className={styles.houseSign}>
        <Icon name="home" size={16} /> One office · 117 Floral Vale Blvd
      </span>
    </div>
  );
}

/** For every age: a ribbon of four life stages, each band a little longer */
export function EveryAge() {
  return (
    <section className={styles.ages} aria-labelledby="fam-ages-title">
      <div className="container">
        <div className={styles.agesHead}>
          <p className="label" data-reveal>
            Every age
          </p>
          <h2 id="fam-ages-title" data-reveal>
            {famAges.title}
          </h2>
          <p className="lead" data-reveal>
            {famAges.intro}
          </p>
        </div>
        <ul role="list" className={styles.ribbon} data-inview>
          {famAges.stages.map((stage, i) => (
            <li key={stage.lead} className={styles.stage} style={{ "--s": stage.scale, "--i": i } as CSSProperties} data-reveal>
              <span className={styles.stageBand} aria-hidden="true">
                <span />
              </span>
              <span className={styles.stageIcon} aria-hidden="true">
                <Icon name={stage.icon as IconName} size={26} />
              </span>
              <p>
                <strong>{stage.lead}</strong> {stage.text}
              </p>
            </li>
          ))}
        </ul>
        <p className={styles.agesAfter} data-reveal>
          <Icon name="chat" size={22} />
          <span>{famAges.after}</span>
        </p>
      </div>
    </section>
  );
}

/** What is general dentistry: a definition card beside the list of everyday care */
export function GeneralDentistry() {
  return (
    <section className={styles.general} aria-labelledby="fam-general-title">
      <div className={`container ${styles.generalGrid}`}>
        <div className={styles.definition}>
          <p className="label" data-reveal>
            General dentistry
          </p>
          <h2 id="fam-general-title" data-reveal>
            {famGeneral.title}
          </h2>
          <p className={styles.defText} data-reveal>
            {famGeneral.text}
          </p>
        </div>
        <div className={styles.includes}>
          <p className={styles.includesIntro} data-reveal>
            {famGeneral.listIntro}
          </p>
          <ul role="list" className={styles.includesList}>
            {famGeneral.list.map((item) => (
              <li key={item.text} data-reveal>
                <span className={styles.includesIcon} aria-hidden="true">
                  <Icon name={item.icon as IconName} size={22} />
                </span>
                <p>
                  <Rich text={item.text} />
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/** Checkups and children's dentistry: two panels side by side, each its own section */
export function TwinPanels() {
  const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
  return (
    <div className={styles.twins}>
      <div className={`container ${styles.twinGrid}`}>
        <section className={`${styles.twin} ${styles.twinSky}`} aria-labelledby="fam-checkups-title" data-reveal>
          <div className={styles.calendar} aria-hidden="true" data-inview>
            {months.map((m, i) => (
              <span key={i} className={i === 2 || i === 8 ? styles.monthOn : styles.month}>
                {m}
              </span>
            ))}
          </div>
          <h2 id="fam-checkups-title">{famCheckups.title}</h2>
          <p>
            <Rich text={famCheckups.text} />
          </p>
        </section>
        <section className={`${styles.twin} ${styles.twinBlush}`} aria-labelledby="fam-children-title" data-reveal>
          <span className={styles.firstBirthday} aria-hidden="true">
            <span className={styles.birthdayFigure}>1</span>
            <span className={styles.birthdayText}>First visit just after the first birthday</span>
          </span>
          <h2 id="fam-children-title">{famChildren.title}</h2>
          <p>
            <Rich text={famChildren.text} />
          </p>
        </section>
      </div>
    </div>
  );
}

/** Restorative care: four tiles, then the microscope note */
export function Restorative() {
  return (
    <section className={styles.restore} aria-labelledby="fam-restore-title">
      <div className="container">
        <div className={styles.restoreHead}>
          <p className="label" data-reveal>
            Under one roof
          </p>
          <h2 id="fam-restore-title" data-reveal>
            {famRestorative.title}
          </h2>
          <p className="lead" data-reveal>
            {famRestorative.intro}
          </p>
        </div>
        <ul role="list" className={styles.restoreTiles}>
          {famRestorative.list.map((item) => (
            <li key={item.text} data-reveal>
              <span className={styles.restoreIcon} aria-hidden="true">
                <Icon name={item.icon as IconName} size={28} />
              </span>
              {item.text}
            </li>
          ))}
        </ul>
        <p className={styles.microscope} data-reveal>
          <span className={styles.microscopeIcon} aria-hidden="true">
            <Icon name="microscope" size={26} />
          </span>
          <span>
            <Rich text={famRestorative.after} />
          </span>
        </p>
      </div>
    </section>
  );
}

/** Cosmetic care: a pearl band with three treatment chips */
export function Cosmetic() {
  const chips: { icon: IconName; name: string }[] = [
    { icon: "whiten", name: "Whitening trays" },
    { icon: "veneer", name: "Bonding & veneers" },
    { icon: "aligner", name: "Clear aligners" },
  ];
  return (
    <section className={styles.cosmetic} aria-labelledby="fam-cosmetic-title">
      <div className={`container ${styles.cosmeticGrid}`}>
        <div className={styles.cosmeticCopy}>
          <p className="label" data-reveal>
            Brighter & straighter
          </p>
          <h2 id="fam-cosmetic-title" data-reveal>
            {famCosmetic.title}
          </h2>
          <p data-reveal>
            <Rich text={famCosmetic.text} />
          </p>
        </div>
        <ul role="list" className={styles.cosmeticChips} aria-hidden="true">
          {chips.map((chip, i) => (
            <li key={chip.name} style={{ "--i": i } as CSSProperties} data-reveal>
              <span>
                <Icon name={chip.icon} size={26} />
              </span>
              {chip.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Emergency: a slim red-edged strip */
export function FamilyEmergency() {
  return (
    <section className={styles.emergency} aria-labelledby="fam-emergency-title">
      <div className="container">
        <div className={styles.emergencyStrip} data-reveal>
          <span className={styles.emergencyIcon} aria-hidden="true">
            <Icon name="firstAid" size={28} />
          </span>
          <div className={styles.emergencyCopy}>
            <h2 id="fam-emergency-title">{famEmergency.title}</h2>
            <p>
              <Rich text={famEmergency.text} />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Meet your family dentists: two arched portraits with their bio lines */
export function FamilyDentists() {
  return (
    <section className={styles.dentists} aria-labelledby="fam-dentists-title">
      <div className="container">
        <div className={styles.dentistsHead}>
          <p className="label" data-reveal>
            Your dentists
          </p>
          <h2 id="fam-dentists-title" data-reveal>
            {famDentists.title}
          </h2>
          <p className="lead" data-reveal>
            {famDentists.intro}
          </p>
        </div>
        <ul role="list" className={styles.dentistCards}>
          {famDentists.people.map((person) => (
            <li key={person.key} className={styles.dentistCard} data-reveal>
              <Portrait image={images[person.key]} ratio="4 / 5" sizes="(max-width: 767px) 80vw, 260px" reveal="scroll" className={styles.dentistPhoto} />
              <p>
                <strong>
                  <SiteLink href={person.href} className={styles.dentistName}>
                    {person.name}
                  </SiteLink>
                </strong>{" "}
                {person.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** With or without insurance: the ways to pay beside the family plan calculator */
export function FamilyPay() {
  return (
    <section className={styles.pay} aria-labelledby="fam-pay-title">
      <div className={`container ${styles.payGrid}`}>
        <div className={styles.payCopy}>
          <p className="label" data-reveal>
            Paying for care
          </p>
          <h2 id="fam-pay-title" data-reveal>
            {famPay.title}
          </h2>
          <p className="lead" data-reveal>
            {famPay.intro}
          </p>
          <ul role="list" className={styles.payList}>
            {famPay.items.map((item) => (
              <li key={item.lead} data-reveal>
                <span className={styles.payTick} aria-hidden="true">
                  <Icon name="check" size={14} strokeWidth={2.6} />
                </span>
                <p>
                  <strong>{item.lead}</strong> <Rich text={item.text} />
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div data-reveal>
          <FamilyPlan />
        </div>
      </div>
    </section>
  );
}
