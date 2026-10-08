import type { CSSProperties } from "react";
import { DataTable } from "@/components/ui/DataTable";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Rich } from "@/components/ui/Rich";
import SiteLink from "@/components/ui/SiteLink";
import {
  pcCheckups,
  pcCost,
  pcGlance,
  pcGum,
  pcKids,
  pcNotSure,
  pcProtect,
} from "@/content/pages/general/hub";
import styles from "./PreventiveHub.module.css";

/**
 * Preventive Care hub sections (order and heading levels follow 02 Content.md). Designs used
 * on this page only: the layered tooth, the service directory, the one-hour visit track,
 * the growth-chart kids cards, the gum depth stack, the signpost table and the pay tiles.
 */

/** Hero visual: one tooth in its gum with the four layers of prevention pointing at it (decorative) */
export function LayeredTooth() {
  const layers: { icon: IconName; name: string; part: string; cls: string }[] =
    [
      { icon: "shield", name: "Sealants", part: "Grooves", cls: styles.layerA },
      { icon: "drop", name: "Fluoride", part: "Enamel", cls: styles.layerB },
      {
        icon: "toothClean",
        name: "Cleaning",
        part: "Gumline",
        cls: styles.layerC,
      },
      {
        icon: "search",
        name: "Screening",
        part: "Soft tissue",
        cls: styles.layerD,
      },
    ];
  return (
    <div className={styles.layered} aria-hidden="true">
      <svg viewBox="0 0 400 420" className={styles.layeredArt}>
        <defs>
          <linearGradient id="pc-enamel" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset="1" stopColor="#e5f4fb" />
          </linearGradient>
          <linearGradient id="pc-gum" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f6cfd0" />
            <stop offset="1" stopColor="#e5959c" />
          </linearGradient>
          {/* The gum fades out at the sides and bottom instead of ending in a box */}
          <radialGradient id="pc-fade" cx="0.5" cy="0.3" r="0.62">
            <stop offset="0.55" stopColor="#fff" />
            <stop offset="1" stopColor="#000" />
          </radialGradient>
          <mask
            id="pc-gum-mask"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="400"
            height="420"
          >
            <rect x="0" y="200" width="400" height="220" fill="url(#pc-fade)" />
          </mask>
        </defs>
        <g className={styles.tooth} transform="translate(40 30) scale(0.8)">
          <path
            d="M140 70c28 0 44 14 60 14s32-14 60-14c40 0 60 34 60 76 0 40-17 64-27 102-10 42-15 78-41 78-31 0-25-66-52-66s-21 66-52 66c-26 0-31-36-41-78-10-38-27-62-27-102 0-42 20-76 60-76Z"
            fill="url(#pc-enamel)"
            stroke="#1b3d6e"
            strokeWidth="3"
          />
          <path
            d="M112 112c10-18 26-26 42-24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="9"
            strokeLinecap="round"
            opacity="0.9"
          />
          {/* The grooves, sealed in sky */}
          <path
            className={styles.groove}
            d="M150 104c18 18 32 8 50 24 18-16 32-6 50-24"
            fill="none"
            stroke="#6dbde8"
            strokeWidth="6"
            strokeLinecap="round"
            pathLength={1}
          />
        </g>
        <g mask="url(#pc-gum-mask)">
          <path
            className={styles.gum}
            d="M0 256c60 0 86-30 132-30 30 0 44 10 68 10s38-10 68-10c46 0 72 30 132 30v164H0Z"
            fill="url(#pc-gum)"
          />
          <path
            d="M0 256c60 0 86-30 132-30 30 0 44 10 68 10s38-10 68-10c46 0 72 30 132 30"
            fill="none"
            stroke="#d98089"
            strokeWidth="3"
          />
        </g>
        {/* Leader lines from each layer to its part of the tooth */}
        <g
          className={styles.leaders}
          fill="none"
          stroke="#1b6e9f"
          strokeWidth="1.6"
          strokeDasharray="4 5"
        >
          <path d="M112 54 172 121" />
          <path d="M300 54 290 150" />
          <path d="M88 336 150 231" />
          <path d="M318 384 262 302" />
        </g>
        <g fill="#1b3d6e" className={styles.dots}>
          <circle cx="172" cy="121" r="6" />
          <circle cx="290" cy="150" r="6" />
          <circle cx="150" cy="231" r="6" />
          <circle cx="262" cy="302" r="6" />
        </g>
      </svg>
      {layers.map((layer, i) => (
        <span
          key={layer.name}
          className={`${styles.layer} ${layer.cls}`}
          style={{ "--i": i } as CSSProperties}
        >
          <span className={styles.layerIcon}>
            <Icon name={layer.icon} size={18} />
          </span>
          <span className={styles.layerText}>
            <span className={styles.layerName}>{layer.name}</span>
            <span className={styles.layerPart}>{layer.part}</span>
          </span>
        </span>
      ))}
    </div>
  );
}

/** At a Glance: the service directory, a real table (stacked cards on phones) */
export function Glance() {
  return (
    <section className={styles.glance} aria-labelledby="pc-glance-title">
      <div className="container">
        <div className={styles.glanceHead}>
          <p className="label" data-reveal>
            Services
          </p>
          <h2 id="pc-glance-title" data-reveal>
            {pcGlance.title}
          </h2>
          <p className="lead" data-reveal>
            {pcGlance.intro}
          </p>
        </div>
        <div
          className={styles.directory}
          role="region"
          aria-label={pcGlance.title}
          tabIndex={0}
          data-reveal
        >
          <table className={styles.dirTable}>
            <caption className="visually-hidden">{pcGlance.title}</caption>
            <thead>
              <tr>
                {pcGlance.head.map((text) => (
                  <th key={text} scope="col">
                    {text}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {pcGlance.rows.map((row) => (
                <tr key={row.href}>
                  <th scope="row">
                    <span className={styles.dirName}>
                      <span className={styles.dirIcon} aria-hidden="true">
                        <Icon name={row.icon as IconName} size={22} />
                      </span>
                      <SiteLink href={row.href} className={styles.dirLink}>
                        {row.label}
                      </SiteLink>
                    </span>
                  </th>
                  <td data-head={pcGlance.head[1]}>{row.does}</td>
                  <td data-head={pcGlance.head[2]}>
                    <span className={styles.dirFor}>{row.for}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/** Checkups and cleanings: the hour-long visit as a track, then the two H3 notes */
export function Checkups() {
  return (
    <section className={styles.checkups} aria-labelledby="pc-checkups-title">
      <div className={`container ${styles.checkGrid}`}>
        <div className={styles.checkCopy}>
          <p className="label" data-reveal>
            Twice a year
          </p>
          <h2 id="pc-checkups-title" data-reveal>
            {pcCheckups.title}
          </h2>
          {pcCheckups.paragraphs.map((text) => (
            <p key={text.slice(0, 24)} className="lead" data-reveal>
              {text}
            </p>
          ))}
          <p data-reveal>{pcCheckups.listIntro}</p>
          <p className={styles.checkMore} data-reveal>
            <Rich text={pcCheckups.more} />
          </p>
        </div>
        <div className={styles.hour} data-inview>
          <span className={styles.hourHead} aria-hidden="true" data-reveal>
            <Icon name="clock" size={18} /> About an hour
          </span>
          <ul role="list" className={styles.hourList}>
            {pcCheckups.list.map((item, i) => (
              <li
                key={item.text}
                style={{ "--i": i } as CSSProperties}
                data-reveal
              >
                <span className={styles.hourIcon} aria-hidden="true">
                  <Icon name={item.icon as IconName} size={20} />
                </span>
                {item.text}
              </li>
            ))}
          </ul>
          <span className={styles.hourLine} aria-hidden="true" />
        </div>
      </div>
      <div className={`container ${styles.subs}`}>
        {pcCheckups.subs.map((sub) => (
          <div key={sub.title} className={styles.sub} data-reveal>
            <span className={styles.subIcon} aria-hidden="true">
              <Icon name={sub.icon as IconName} size={24} />
            </span>
            <h3>{sub.title}</h3>
            <p>
              <Rich text={sub.text} />
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/** Preventive care for kids: three cards stepping up a growth chart */
export function Kids() {
  return (
    <section className={styles.kids} aria-labelledby="pc-kids-title">
      <div className={`container ${styles.kidsGrid}`}>
        <div className={styles.kidsCopy}>
          <p className="label" data-reveal>
            From age one
          </p>
          <h2 id="pc-kids-title" data-reveal>
            {pcKids.title}
          </h2>
          <p className="lead" data-reveal>
            {pcKids.text}
          </p>
        </div>
        <div className={styles.chart} data-inview>
          <span className={styles.ruler} aria-hidden="true" />
          <ul role="list" className={styles.steps}>
            {pcKids.items.map((item, i) => (
              <li
                key={item.text}
                className={styles.stepCard}
                style={{ "--i": i } as CSSProperties}
                data-reveal
              >
                <span className={styles.stepIcon} aria-hidden="true">
                  <Icon name={item.icon as IconName} size={24} />
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

/** Gum health: the page's navy band; treatments stack deeper below a gumline */
export function GumHealth() {
  return (
    <section className={styles.gum} aria-labelledby="pc-gum-title">
      <div className={`container ${styles.gumGrid}`}>
        <div className={styles.gumCopy}>
          <p className="label label-inverse" data-reveal>
            Gum care
          </p>
          <h2 id="pc-gum-title" data-reveal>
            {pcGum.title}
          </h2>
          <p data-reveal>{pcGum.text}</p>
        </div>
        <div className={styles.depth}>
          <p className={styles.depthIntro} data-reveal>
            {pcGum.listIntro}
          </p>
          <ul role="list" className={styles.depthList} data-inview>
            {pcGum.items.map((item, i) => (
              <li
                key={item.slice(0, 30)}
                style={{ "--i": i } as CSSProperties}
                data-reveal
              >
                <span className={styles.depthBar} aria-hidden="true">
                  <span />
                </span>
                <p>
                  <Rich text={item} />
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/** Protecting your teeth: a guard note */
export function Protect() {
  return (
    <section className={styles.protect} aria-labelledby="pc-protect-title">
      <div className="container">
        <div className={styles.protectCard}>
          <span className={styles.protectIcon} aria-hidden="true" data-reveal>
            <Icon name="moon" size={34} />
          </span>
          <div className={styles.protectCopy}>
            <h2 id="pc-protect-title" data-reveal>
              {pcProtect.title}
            </h2>
            <p data-reveal>
              <Rich text={pcProtect.text} />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Not sure what you need: a signpost table */
export function NotSure() {
  return (
    <section className={styles.notSure} aria-labelledby="pc-notsure-title">
      <div className={`container ${styles.notSureGrid}`}>
        <div className={styles.notSureCopy}>
          <p className="label" data-reveal>
            Where to start
          </p>
          <h2 id="pc-notsure-title" data-reveal>
            {pcNotSure.title}
          </h2>
          <p className="lead" data-reveal>
            {pcNotSure.intro}
          </p>
        </div>
        <div data-reveal>
          <DataTable
            label={pcNotSure.title}
            head={pcNotSure.head}
            rows={pcNotSure.rows}
            rowHeaders={false}
            className={styles.signpost}
          />
        </div>
      </div>
    </section>
  );
}

/** What preventive care costs: four pay tiles */
export function HubCost() {
  return (
    <section className={styles.cost} aria-labelledby="pc-cost-title">
      <div className="container">
        <div className={styles.costHead}>
          <p className="label" data-reveal>
            Cost & insurance
          </p>
          <h2 id="pc-cost-title" data-reveal>
            {pcCost.title}
          </h2>
          <p className="lead" data-reveal>
            {pcCost.text}
          </p>
        </div>
        <ul role="list" className={styles.tiles}>
          {pcCost.items.map((item) => (
            <li key={item.lead} className={styles.tile} data-reveal>
              <span className={styles.tileIcon} aria-hidden="true">
                <Icon name={item.icon as IconName} size={24} />
              </span>
              <p>
                <strong className={styles.tileLead}>{item.lead}</strong>{" "}
                <Rich text={item.text} />
              </p>
            </li>
          ))}
        </ul>
        <p className={styles.costAfter} data-reveal>
          <Icon name="card" size={20} />
          <span>{pcCost.after}</span>
        </p>
      </div>
    </section>
  );
}
