import styles from "./ToConfirm.module.css";

/**
 * Visible "to confirm" marker for staging (CLAUDE.md: unconfirmed items stay visible
 * and are listed before launch). Remove the prop that feeds it once the practice confirms.
 */
export function ToConfirm({ note, inverse = false }: { note: string; inverse?: boolean }) {
  return (
    <span className={inverse ? `${styles.tag} ${styles.inverse}` : styles.tag}>
      <span className={styles.badge}>To confirm</span>
      <span>{note}</span>
    </span>
  );
}
