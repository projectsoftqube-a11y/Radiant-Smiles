import { Rich } from "./Rich";
import styles from "./DataTable.module.css";

/**
 * A real HTML table (handoffs: <th> header cells, horizontal scroll inside its own box on
 * phones). Cells may carry inline [label](/path) links. `rowHeaders` makes the first cell
 * of each row a row header; `highlight` tints one column (the recommended option).
 */
export function DataTable({
  label,
  head,
  rows,
  rowHeaders = true,
  highlight,
  className,
}: {
  /** Accessible name of the scroll region and the table's caption */
  label: string;
  head: string[];
  rows: string[][];
  rowHeaders?: boolean;
  highlight?: number;
  className?: string;
}) {
  const cell = (i: number) => (highlight === i ? styles.hl : undefined);
  return (
    <div className={[styles.scroll, className].filter(Boolean).join(" ")} role="region" aria-label={label} tabIndex={0}>
      <table className={styles.table}>
        <caption className="visually-hidden">{label}</caption>
        <thead>
          <tr>
            {head.map((text, i) => (
              <th key={i} scope="col" className={cell(i)}>
                {text || <span className="visually-hidden">{label}</span>}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]}>
              {row.map((text, i) =>
                i === 0 && rowHeaders ? (
                  <th key={i} scope="row">
                    <Rich text={text} />
                  </th>
                ) : (
                  <td key={i} className={cell(i)}>
                    <Rich text={text} />
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
