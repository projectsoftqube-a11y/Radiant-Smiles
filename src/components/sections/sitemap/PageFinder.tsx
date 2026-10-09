"use client";

import { useEffect, useId, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import styles from "./Sitemap.module.css";

/**
 * "Find a page": filters the server-rendered lists as you type (titles only). Without
 * JavaScript every link shows. Groups and states with no match hide; a note offers a call.
 */
export function PageFinder({ labels }: { labels: string[] }) {
  const id = useId();
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();
  const total = labels.length;
  const shown = q ? labels.filter((label) => label.toLowerCase().includes(q)).length : total;

  useEffect(() => {
    let visible = 0;
    document.querySelectorAll<HTMLElement>("[data-sitemap-item]").forEach((item) => {
      const match = !q || (item.dataset.sitemapItem ?? "").includes(q);
      item.hidden = !match;
      if (match) visible++;
    });
    document.querySelectorAll<HTMLElement>("[data-sitemap-sub], [data-sitemap-group]").forEach((box) => {
      box.hidden = !!q && !box.querySelector("[data-sitemap-item]:not([hidden])");
    });
    const empty = document.querySelector<HTMLElement>("[data-sitemap-empty]");
    if (empty) empty.hidden = visible > 0;
  }, [q]);

  return (
    <div className={styles.finder} role="search">
      <label htmlFor={id} className={styles.finderLabel}>
        Find a page
      </label>
      <div className={styles.finderField}>
        <Icon name="search" size={20} />
        <input
          id={id}
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Try “implants” or “Trenton”"
          autoComplete="off"
        />
        {query ? (
          <button type="button" onClick={() => setQuery("")} aria-label="Clear search">
            <Icon name="close" size={18} />
          </button>
        ) : null}
      </div>
      <p className={styles.finderStatus} aria-live="polite">
        {query ? `${shown} of ${total} pages match` : `${total} pages, grouped by topic`}
      </p>
    </div>
  );
}
