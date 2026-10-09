import type { ReactNode } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";
import SiteLink from "@/components/ui/SiteLink";
import styles from "./Button.module.css";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "light" | "ghost-light" | "sky";
  icon?: IconName;
  /** Icon after the label instead of before */
  iconEnd?: IconName;
  /** dataLayer event name(s), comma-separated (TrackClicks) */
  track?: string;
  /** Extra event details, sent as data-track-<key> attributes */
  trackData?: Record<string, string>;
  className?: string;
  external?: boolean;
  /** A long label: smaller type on phones, and no icon below 390px, so it stays on one line */
  long?: boolean;
};

/**
 * Call to action. Labels never wrap, and buttons never move on hover or press:
 * only colours change (CLAUDE.md). tel:/external links are plain anchors; internal
 * links go through SiteLink.
 */
export function Button({ href, children, variant = "primary", icon, iconEnd, track, trackData, className, external, long }: ButtonProps) {
  const extra = Object.fromEntries(Object.entries(trackData ?? {}).map(([key, value]) => [`data-track-${key}`, value]));
  const classes = [styles.button, styles[variant], long ? styles.long : undefined, className].filter(Boolean).join(" ");
  const content = (
    <>
      {icon ? <Icon name={icon} size={18} /> : null}
      <span>{children}</span>
      {iconEnd ? <Icon name={iconEnd} size={18} className={styles.iconEnd} /> : null}
    </>
  );

  if (/^(tel:|mailto:|https?:)/.test(href)) {
    return (
      <a
        href={href}
        className={classes}
        data-track={track}
        {...extra}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <SiteLink href={href} className={classes} data-track={track} {...extra}>
      {content}
    </SiteLink>
  );
}
