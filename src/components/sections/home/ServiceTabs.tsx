"use client";

import Image from "next/image";
import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import SiteLink from "@/components/ui/SiteLink";
import { images } from "@/content/images";
import { homeServices } from "@/content/pages/home";
import styles from "./Services.module.css";

/**
 * The six service groups as tabs (≥992px): group names on the left, the chosen group's
 * photo and services on the right, all on one even line. Every panel (with its H3 and
 * links) is always in the HTML; below 992px the tabs hide and all six panels stack. A group
 * with a current special (Dental Implants: $500 off) shows it as a ticket under its links.
 * Plain click tabs: no pinning and no scroll progress line (client feedback, 15 Oct 2026).
 */
export function ServiceTabs() {
  const groups = homeServices.groups;
  const [active, setActive] = useState(0);

  return (
    <div className={styles.tabs}>
      <div className={styles.tabList} role="tablist" aria-label="Service groups" aria-orientation="vertical">
        {groups.map((group, i) => {
          const img = images[group.image];
          return (
            <button
              key={group.id}
              type="button"
              role="tab"
              id={`svc-tab-${group.id}`}
              aria-selected={i === active}
              aria-controls={`svc-panel-${group.id}`}
              tabIndex={i === active ? 0 : -1}
              className={i === active ? `${styles.tab} ${styles.tabActive}` : styles.tab}
              onClick={() => setActive(i)}
              onKeyDown={(event) => {
                if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
                event.preventDefault();
                const next = (active + (event.key === "ArrowDown" ? 1 : groups.length - 1)) % groups.length;
                setActive(next);
                document.getElementById(`svc-tab-${groups[next].id}`)?.focus();
              }}
              data-reveal
            >
              <span className={styles.thumb} aria-hidden="true">
                {img.src ? <Image src={img.src} alt="" fill sizes="56px" style={{ objectFit: "cover", objectPosition: img.position ?? "center" }} /> : null}
              </span>
              <span className={styles.tabText}>
                <span className={styles.tabName}>{group.title}</span>
                <span className={styles.tabCount}>{group.links.length} services</span>
              </span>
              <Icon name="arrow" size={18} className={styles.tabArrow} />
            </button>
          );
        })}
      </div>

      <div className={styles.panels} data-reveal>
        {groups.map((group, i) => {
          const img = images[group.image];
          return (
            <article
              key={group.id}
              id={`svc-panel-${group.id}`}
              role="tabpanel"
              aria-labelledby={`svc-tab-${group.id}`}
              className={i === active ? `${styles.panel} ${styles.panelActive}` : styles.panel}
            >
              <div className={styles.panelMedia}>
                {img.src ? (
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 991px) 92vw, 55vw"
                    placeholder="blur"
                    style={{ objectFit: "cover", objectPosition: img.position ?? "center" }}
                  />
                ) : null}
                <span className={styles.panelShade} aria-hidden="true" />
                <h3 className={styles.panelTitle}>{group.title}</h3>
              </div>
              <ul role="list" className={styles.links}>
                {group.links.map((link) => (
                  <li key={link.href}>
                    <SiteLink href={link.href} className={styles.link}>
                      <span>{link.label}</span>
                      <Icon name="arrowUpRight" size={16} />
                    </SiteLink>
                  </li>
                ))}
              </ul>
              {group.offer ? (
                <SiteLink href={group.offer.href} className={styles.offer} data-track="offer_click" data-track-offer={group.offer.label}>
                  <span className={styles.offerIcon} aria-hidden="true">
                    <Icon name="tag" size={20} />
                  </span>
                  <span className={styles.offerText}>
                    <strong>{group.offer.label}</strong>
                    <span>{group.offer.detail}</span>
                  </span>
                  <Icon name="arrow" size={18} className={styles.offerArrow} />
                </SiteLink>
              ) : null}
              {group.hub ? (
                <SiteLink href={group.hub.href} className={`text-link ${styles.hub}`}>
                  {group.hub.label} <Icon name="arrow" size={16} />
                </SiteLink>
              ) : null}
            </article>
          );
        })}
      </div>
    </div>
  );
}
