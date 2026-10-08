"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import SiteLink from "@/components/ui/SiteLink";
import { images } from "@/content/images";
import { homeServices } from "@/content/pages/home";
import styles from "./Services.module.css";

/**
 * The five service groups as tabs (≥992px): group names on the left, the chosen group's
 * photo and services on the right, all on one even line. Every panel (with its H3 and
 * links) is always in the HTML; below 992px the tabs hide and all five panels stack.
 *
 * Scroll-driven (≥992px, motion allowed): the block pins under the header and the groups
 * take turns as the page scrolls, one after another; the active tab's line fills with
 * the scroll. After the last group the page moves on. A click jumps to that group's
 * share of the scroll, so the tabs and the scroll always agree.
 */
export function ServiceTabs() {
  const groups = homeServices.groups;
  const [active, setActive] = useState(0);
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<ScrollTrigger | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 992px) and (prefers-reduced-motion: no-preference)", () => {
        const el = root.current;
        if (!el) return;
        const n = groups.length;
        // The fixed header's height once scrolled (top bar collapsed)
        const headerH = () =>
          parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) *
          parseFloat(getComputedStyle(document.documentElement).fontSize);
        el.dataset.scrollDriven = "";
        let current = -1;
        trigger.current = ScrollTrigger.create({
          trigger: el,
          // Centred in the space under the header, or at its top if the block is taller
          start: () => {
            const free = window.innerHeight - headerH();
            return `top ${headerH() + Math.max(0, (free - el.offsetHeight) / 2)}px`;
          },
          end: () => `+=${window.innerHeight * 0.6 * n}`,
          pin: true,
          refreshPriority: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const at = self.progress * n;
            const index = Math.min(n - 1, Math.floor(at));
            el.style.setProperty("--tab-progress", String(self.progress >= 1 ? 1 : at - index));
            if (index !== current) {
              current = index;
              setActive(index);
            }
          },
        });
        return () => {
          trigger.current = null;
          delete el.dataset.scrollDriven;
          el.style.removeProperty("--tab-progress");
        };
      });
    },
    { scope: root },
  );

  /** Choose a group; while scroll-driven, scroll to the middle of its share instead */
  const select = (index: number) => {
    setActive(index);
    const st = trigger.current;
    if (st) window.scrollTo({ top: st.start + ((index + 0.5) / groups.length) * (st.end - st.start) });
  };

  return (
    <div className={styles.tabs} ref={root}>
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
              onClick={() => select(i)}
              onKeyDown={(event) => {
                if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
                event.preventDefault();
                const next = (active + (event.key === "ArrowDown" ? 1 : groups.length - 1)) % groups.length;
                select(next);
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
              <span className={styles.tabProgress} aria-hidden="true" />
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
