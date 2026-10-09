import type { CSSProperties } from "react";
import { Icon } from "@/components/ui/Icon";
import { Rays } from "@/components/ui/Rays";
import SiteLink from "@/components/ui/SiteLink";
import { homeAreas } from "@/content/pages/home";
import { OFFICE, PLACES, RIVER } from "@/content/areaMap";
import styles from "./Areas.module.css";

/**
 * Both banks of the Delaware as an approximate map: the river winds through, the office
 * glows with light rays, and route lines draw out to each town on scroll (data-draw). Each town is one unit (dot +
 * name pill), the pill on the side away from the office so no route line runs under a name.
 * Town names are links to their pages (Yardley is home). Phones get a list below the map.
 * On-hold towns are never shown.
 */
export function Areas() {
  const towns = [...homeAreas.pennsylvania.towns, ...homeAreas.newJersey.towns];

  return (
    <section className={styles.section} aria-labelledby="home-areas-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <p className="label" data-reveal>
            Areas we serve
          </p>
          <h2 id="home-areas-title" data-reveal>
            {homeAreas.title}
          </h2>
          <p className={styles.intro} data-reveal>
            {homeAreas.intro}
          </p>
          <div data-reveal>
            <SiteLink href={homeAreas.link.href} className="text-link">
              {homeAreas.link.label} <Icon name="arrow" size={16} />
            </SiteLink>
          </div>

          {/* Phones: the town list (the map's labels hide there) */}
          <div className={styles.lists}>
            {[homeAreas.pennsylvania, homeAreas.newJersey].map((state) => (
              <div key={state.title} data-reveal>
                <p className={styles.listTitle}>{state.title}</p>
                <ul role="list" className={styles.list}>
                  {state.towns.map((town) => (
                    <li key={town.name}>
                      {"href" in town && town.href ? (
                        <SiteLink href={town.href} className={styles.listLink}>
                          {town.name}
                          <Icon name="arrowUpRight" size={14} />
                        </SiteLink>
                      ) : (
                        <span className={`${styles.listLink} ${styles.listHome}`}>
                          <Icon name="pin" size={14} />
                          {town.name}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.map} data-reveal>
          <svg className={styles.canvas} viewBox="0 0 1000 700" preserveAspectRatio="xMidYMid meet" aria-hidden="true" data-draw>
            <defs>
              <linearGradient id="rs-nj" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="var(--sky-50)" />
                <stop offset="1" stopColor="var(--sky-100)" />
              </linearGradient>
            </defs>
            {/* New Jersey bank (east of the river) */}
            <path d={`${RIVER} L1000 700 L1000 0 Z`} fill="url(#rs-nj)" />
            {/* State names */}
            <text x="40" y="684" className={styles.state}>PENNSYLVANIA</text>
            <text x="930" y="70" className={`${styles.state} ${styles.stateRight}`}>NEW JERSEY</text>
            {/* The river */}
            <path d={RIVER} className={styles.riverBank} />
            <path d={RIVER} className={styles.river} pathLength={1} />
            <text className={styles.riverName}>
              <textPath href="#rs-river-label" startOffset="8%">Delaware River</textPath>
            </text>
            <path id="rs-river-label" d="M248 112 S303 207 318 242 S343 307 358 342 S393 427 418 462" fill="none" />
            {/* Route lines from the office to each town */}
            {towns.map((town) => {
              const p = PLACES[town.name];
              if (!p || p.side === "office") return null;
              const from = p.from ? PLACES[p.from] : OFFICE;
              const mx = (from.x + p.x) / 2;
              const my = (from.y + p.y) / 2 - 40;
              return <path key={town.name} d={`M${from.x} ${from.y} Q${mx} ${my} ${p.x} ${p.y}`} className={styles.route} pathLength={1} />;
            })}
          </svg>

          {/* The office: glowing pin with light rays */}
          <div className={styles.office} style={{ "--x": OFFICE.x / 10, "--y": OFFICE.y / 7 } as CSSProperties} aria-hidden="true">
            <Rays className={styles.officeRays} count={13} spread={200} inner={0.3} />
            <span className={styles.officePin}>
              <Icon name="pin" size={22} />
            </span>
          </div>

          {/* Town labels: links on the map (desktop and tablet) */}
          <ul role="list" className={styles.labels}>
            {towns.map((town) => {
              const p = PLACES[town.name];
              if (!p) return null;
              const style = { "--x": p.x / 10, "--y": p.y / 7 } as CSSProperties;
              const home = !("href" in town && town.href);
              const cls = [styles.label, styles[`label-${p.side ?? "right"}`]].join(" ");
              return (
                <li key={town.name} className={cls} style={style}>
                  {/* The dot sits exactly on the town; the pill beside it, away from the office */}
                  {home ? null : <span className={styles.dot} aria-hidden="true" />}
                  {!home && "href" in town && town.href ? (
                    <SiteLink href={town.href} className={styles.pill}>
                      {town.name}
                    </SiteLink>
                  ) : (
                    <span className={`${styles.pill} ${styles.pillHome}`}>{town.name}</span>
                  )}
                </li>
              );
            })}
          </ul>

          <p className={styles.mapNote} aria-hidden="true">
            Approximate map
          </p>
        </div>
      </div>
    </section>
  );
}
