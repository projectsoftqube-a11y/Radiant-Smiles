"use client";

import { useEffect, useState } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";
import styles from "./Staff.module.css";

/**
 * Sticky menu beside the role chapters: in-page links that follow the scroll (the
 * chapter in the middle of the screen is marked current). Plain anchors, so it works
 * without JavaScript too.
 */
export function RoleNav({ items }: { items: { id: string; label: string; icon: IconName }[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const sections = items.map((item) => document.getElementById(item.id)).filter((el): el is HTMLElement => !!el);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length) setActive(visible[0].target.id);
      },
      // A thin band across the middle of the screen
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className={styles.roleNav} aria-label="Team roles" data-reveal>
      <ol role="list">
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`} className={styles.roleLink} aria-current={active === item.id ? "true" : undefined}>
              <span className={styles.roleLinkIcon} aria-hidden="true">
                <Icon name={item.icon} size={20} />
              </span>
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
