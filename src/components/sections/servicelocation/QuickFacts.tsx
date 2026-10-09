import { Icon, type IconName } from "@/components/ui/Icon";
import styles from "./QuickFacts.module.css";

/**
 * The "[Quick facts strip]" every service + location content file has under its hero
 * buttons: four short facts in one band, shared like the hero itself.
 */
export function QuickFacts({
  facts,
  tone = "sky",
  compact,
}: {
  facts: { icon: string; text: string }[];
  tone?: "sky" | "red";
  /** Two by two, inside the hero copy (the emergency page keeps it above the fold on phones) */
  compact?: boolean;
}) {
  return (
    <ul role="list" className={[styles.strip, tone === "red" ? styles.red : "", compact ? styles.compact : ""].filter(Boolean).join(" ")}>
      {facts.map((fact) => (
        <li key={fact.text}>
          <span className={styles.icon} aria-hidden="true">
            <Icon name={fact.icon as IconName} size={20} />
          </span>
          <span>{fact.text}</span>
        </li>
      ))}
    </ul>
  );
}
