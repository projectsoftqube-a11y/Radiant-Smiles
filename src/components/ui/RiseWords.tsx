import { Fragment, type CSSProperties } from "react";
import styles from "./RiseWords.module.css";

/**
 * Splits a heading into words that rise out of their own masks, one after another.
 * Pure CSS, so it runs at first paint and never delays the largest contentful paint.
 * `strong` words (zero-based indexes) are set in the heavier weight.
 */
export function RiseWords({ text, start = 0, strong = [] }: { text: string; start?: number; strong?: number[] }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, i) => (
        <Fragment key={`${word}-${i}`}>
          <span className={styles.word}>
            <span
              className={strong.includes(i) ? `${styles.inner} ${styles.strong}` : styles.inner}
              style={{ "--i": start + i } as CSSProperties}
            >
              {word}
            </span>
          </span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </>
  );
}
