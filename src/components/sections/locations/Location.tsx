import { MapEmbed } from "@/components/sections/home/MapEmbed";
import { OFFICE, PLACES, RIVER } from "@/content/areaMap";
import { Button } from "@/components/ui/Button";
import { DataTable } from "@/components/ui/DataTable";
import { Icon } from "@/components/ui/Icon";
import { Rich } from "@/components/ui/Rich";
import SiteLink from "@/components/ui/SiteLink";
import { directionsLink, safetyLine, type Block, type RouteFacts } from "@/content/pages/locations/common";
import { practice } from "@/content/site";
import styles from "./Location.module.css";

/**
 * The location-page frame shared by the eleven town pages (like the hero, FAQ and closing
 * CTA): the route map in the hero, the Getting Here section with the office map, the block
 * renderer for content whose shape varies by town, and the visible 911 safety line. Each
 * town's own sections live in its own file.
 */

/** Hero visual: the drive from the town to the office, on the same map as the home page (decorative) */
export function RouteMap({ route }: { route: RouteFacts }) {
  const town = PLACES[route.place];
  const pad = 130;
  let minX = Math.min(town.x, OFFICE.x) - pad;
  let maxX = Math.max(town.x, OFFICE.x) + pad;
  let minY = Math.min(town.y, OFFICE.y) - pad;
  let maxY = Math.max(town.y, OFFICE.y) + pad;
  // Make room for a side label (about 15 units per character at the map's type size)
  const labelW = route.place.length * 15 + 40;
  if (town.side === "left") minX = Math.min(minX, town.x - labelW);
  if (town.side === "right") maxX = Math.max(maxX, town.x + labelW);
  // Keep a 4:3 frame, at least 420 wide
  const w = Math.max(maxX - minX, 420, ((maxY - minY) * 4) / 3);
  const h = (w * 3) / 4;
  const cx = (minX + maxX) / 2;
  const cy = (minY + maxY) / 2;
  minX = cx - w / 2;
  maxX = cx + w / 2;
  minY = cy - h / 2;
  maxY = cy + h / 2;
  // A gentle curve between the two pins
  const mx = (town.x + OFFICE.x) / 2 + (town.y - OFFICE.y) * 0.18;
  const my = (town.y + OFFICE.y) / 2 - (town.x - OFFICE.x) * 0.18;
  const others = Object.entries(PLACES).filter(([name]) => name !== route.place && name !== "Yardley");
  const label = route.place;
  return (
    <div className={styles.route} aria-hidden="true">
      <div className={styles.routeTop}>
        <span className={styles.drive}>{route.drive}</span>
        <span className={styles.driveNote}>
          <Icon name="car" size={16} /> by car, depending on traffic
        </span>
      </div>
      <div className={styles.routeMap}>
        <svg viewBox={`${minX.toFixed(0)} ${minY.toFixed(0)} ${w.toFixed(0)} ${h.toFixed(0)}`} className={styles.routeSvg}>
          <path d={RIVER} className={styles.river} />
          <path d={RIVER} className={styles.riverLine} />
          {others.map(([name, p]) => (
            <circle key={name} cx={p.x} cy={p.y} r="7" className={styles.otherDot} />
          ))}
          <path d={`M${town.x} ${town.y}Q${mx.toFixed(0)} ${my.toFixed(0)} ${OFFICE.x} ${OFFICE.y}`} className={styles.routeLine} pathLength={1} />
          <circle cx={town.x} cy={town.y} r="13" className={styles.townDot} />
          <rect x={OFFICE.x - 15} y={OFFICE.y - 15} width="30" height="30" rx="9" className={styles.officePin} />
          <text
            x={town.side === "left" ? town.x - 24 : town.side === "right" ? town.x + 24 : town.x}
            y={town.side === "bottom" ? town.y + 44 : town.side === "left" || town.side === "right" ? town.y + 9 : town.y - 26}
            textAnchor={town.side === "left" ? "end" : town.side === "right" ? "start" : "middle"}
            className={styles.mapLabel}
          >
            {label}
          </text>
          <text x={OFFICE.x} y={OFFICE.y + 44} textAnchor="middle" className={`${styles.mapLabel} ${styles.mapLabelOffice}`}>
            Our office
          </text>
          <text x={minX + 22} y={maxY - 22} className={styles.stateLabel} textAnchor="start">
            PA
          </text>
          <text x={maxX - 22} y={minY + 44} className={styles.stateLabel} textAnchor="end">
            NJ
          </text>
        </svg>
      </div>
      <div className={styles.routeFoot}>
        <span className={styles.roads}>
          <Icon name="directions" size={16} /> {route.roads}
        </span>
        <span className={styles.chips}>
          {route.chips.map((chip) => (
            <span key={chip}>{chip}</span>
          ))}
        </span>
      </div>
    </div>
  );
}

/** Content blocks in file order (paragraphs, H3s, lists, a table, the directions link) */
export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        if ("p" in block) {
          return (
            <p key={i} data-reveal>
              <Rich text={block.p} />
            </p>
          );
        }
        if ("h3" in block) {
          return (
            <h3 key={i} className={styles.blockH3} data-reveal>
              {block.h3}
            </h3>
          );
        }
        if ("ul" in block) {
          return (
            <ul key={i} role="list" className={styles.blockList}>
              {block.ul.map((item) => (
                <li key={item.text} data-reveal>
                  <span className={styles.blockTick} aria-hidden="true">
                    <Icon name="directions" size={14} />
                  </span>
                  <span>
                    {item.lead ? <strong>{item.lead}</strong> : null} <Rich text={item.text} />
                  </span>
                </li>
              ))}
            </ul>
          );
        }
        if ("table" in block) {
          return (
            <div key={i} className={styles.blockTable} data-reveal>
              <DataTable label={block.table.label} head={block.table.head} rows={block.table.rows} />
            </div>
          );
        }
        return (
          <div key={i} data-reveal>
            <SiteLink href={directionsLink.href} className="text-link">
              {directionsLink.label} <Icon name="arrow" size={16} />
            </SiteLink>
          </div>
        );
      })}
    </>
  );
}

/** Getting here: the route copy beside the office map and the directions button */
export function GettingHere({ id, title, blocks, area }: { id: string; title: string; blocks: Block[]; area: string }) {
  return (
    <section className={styles.here} aria-labelledby={id}>
      <div className={`container ${styles.hereGrid}`}>
        <div className={styles.hereCopy}>
          <p className="label" data-reveal>
            Directions
          </p>
          <h2 id={id} data-reveal>
            {title}
          </h2>
          <Blocks blocks={blocks} />
        </div>
        <div className={styles.mapCard} data-reveal>
          <div className={styles.mapFrame}>
            <MapEmbed src={practice.mapEmbedUrl} title={`Map: Radiant Smiles @ Floral Vale, the route from ${area}`} />
          </div>
          <div className={styles.mapFoot}>
            <span className={styles.mapAddress}>
              <Icon name="pin" size={18} />
              <span>
                {practice.address.street}, {practice.address.city}, {practice.address.region} {practice.address.postalCode}
              </span>
            </span>
            <Button href={practice.directionsUrl} icon="directions" variant="outline" external>
              Get directions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/** The 911 line under emergency copy, always visible (never in an accordion) */
export function SafetyLine({ className }: { className?: string }) {
  return (
    <p className={[styles.safety, className].filter(Boolean).join(" ")} data-reveal>
      <span className={styles.safetyIcon} aria-hidden="true">
        <Icon name="alert" size={20} />
      </span>
      <span>{safetyLine}</span>
    </p>
  );
}
