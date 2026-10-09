"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import styles from "./Legal.module.css";

/**
 * "On this page": the document's H2s as in-page links; the section being read is marked
 * current. Plain anchors, so it works without JavaScript too.
 */
export function LegalIndex({ items }: { items: { id: string; label: string }[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const sections = items.map((item) => document.getElementById(item.id)).filter((el): el is HTMLElement => !!el);
    let frame = 0;
    const update = () => {
      frame = 0;
      // The last section whose top has passed a line a third of the way down the screen
      const line = window.innerHeight / 3;
      let current = sections[0]?.id;
      for (const section of sections) if (section.getBoundingClientRect().top <= line) current = section.id;
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [items]);

  return (
    <nav className={styles.index} aria-label="On this page">
      <p className={styles.indexTitle}>On this page</p>
      <ol role="list">
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`} aria-current={active === item.id ? "true" : undefined}>
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Prints the page (the print stylesheet hides the header, footer and navigation) */
export function PrintButton({ label = "Print this page", className }: { label?: string; className?: string }) {
  return (
    <button type="button" className={className ?? styles.print} onClick={() => window.print()} data-track="print_click">
      <Icon name="printer" size={18} />
      <span>{label}</span>
    </button>
  );
}
