"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import styles from "./BlogPost.module.css";

/** A thin bar along the top of the screen that fills as the article is read */
export function ReadingProgress({ target }: { target: string }) {
  const bar = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const article = document.getElementById(target);
    if (!article || !bar.current) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = article.getBoundingClientRect();
      const total = rect.height - window.innerHeight * 0.6;
      const done = Math.min(1, Math.max(0, (window.innerHeight * 0.4 - rect.top) / Math.max(total, 1)));
      bar.current?.style.setProperty("--read", done.toFixed(4));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [target]);

  return (
    <span className={styles.progress} aria-hidden="true">
      <span ref={bar} />
    </span>
  );
}

/**
 * "In this article": the post's H2s as in-page links; the one being read is marked
 * current. Plain anchors, so it works without JavaScript too.
 */
export function PostToc({ items }: { items: { id: string; label: string }[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const headings = items.map((item) => document.getElementById(item.id)).filter((el): el is HTMLElement => !!el);
    const onScroll = () => {
      // The last heading that has passed a line a third of the way down the screen
      const line = window.innerHeight / 3;
      let current = headings[0]?.id;
      for (const heading of headings) if (heading.getBoundingClientRect().top <= line) current = heading.id;
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [items]);

  return (
    <nav className={styles.toc} aria-label="In this article">
      <p className={styles.railTitle}>In this article</p>
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

/** Share: copy the link, Facebook, email */
export function ShareLinks({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.prompt("Copy this link", url);
    }
  };

  return (
    <div className={styles.share}>
      <p className={styles.railTitle}>Share</p>
      <div className={styles.shareRow}>
        <button type="button" className={styles.shareButton} onClick={copy} aria-label="Copy link to this article">
          <Icon name={copied ? "check" : "link"} size={18} />
        </button>
        <a
          className={styles.shareButton}
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Facebook (opens in a new tab)"
          data-track="share_click"
          data-track-method="facebook"
        >
          <Icon name="facebook" size={18} />
        </a>
        <a
          className={styles.shareButton}
          href={`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`}
          aria-label="Share by email"
          data-track="share_click"
          data-track-method="email"
        >
          <Icon name="mail" size={18} />
        </a>
        <span className={styles.copied} role="status">
          {copied ? "Link copied" : ""}
        </span>
      </div>
    </div>
  );
}
