"use client";

import { useEffect, useState } from "react";
import styles from "./BlogHub.module.css";

type Topic = { key: string; label: string; count: number };

/**
 * Topic filter over the "Latest Posts" groups ([data-topic-group]). Without JavaScript every
 * group shows. A jump link to #topic-… (the topic index) selects that topic too.
 */
export function TopicFilter({ total, topics }: { total: number; topics: Topic[] }) {
  const [active, setActive] = useState("all");

  useEffect(() => {
    document.querySelectorAll<HTMLElement>("[data-topic-group]").forEach((group) => {
      group.hidden = active !== "all" && group.dataset.topicGroup !== active;
    });
  }, [active]);

  useEffect(() => {
    const onHash = () => {
      const key = window.location.hash.replace("#topic-", "");
      if (!topics.some((t) => t.key === key)) return;
      setActive(key);
      requestAnimationFrame(() => document.getElementById(`topic-${key}`)?.scrollIntoView({ block: "start" }));
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [topics]);

  const options = [{ key: "all", label: "All topics", count: total }, ...topics];
  return (
    <div className={styles.filter} role="group" aria-label="Show articles by topic">
      {options.map((option) => (
        <button key={option.key} type="button" className={styles.filterButton} aria-pressed={active === option.key} onClick={() => setActive(option.key)}>
          {option.label} <span>{option.count}</span>
        </button>
      ))}
    </div>
  );
}
