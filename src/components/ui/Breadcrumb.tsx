import SiteLink from "@/components/ui/SiteLink";
import type { Crumb } from "@/lib/schema";
import styles from "./Breadcrumb.module.css";

/**
 * Visible breadcrumb (Home › … › this page). Its items match the page's BreadcrumbList
 * schema exactly; the last item is the current page and is not a link.
 */
export function Breadcrumb({ items, className }: { items: Crumb[]; className?: string }) {
  return (
    <nav aria-label="Breadcrumb" className={[styles.breadcrumb, className].filter(Boolean).join(" ")}>
      <ol role="list">
        {items.map((item, index) =>
          index === items.length - 1 ? (
            <li key={item.path}>
              <span aria-current="page">{item.name}</span>
            </li>
          ) : (
            <li key={item.path}>
              <SiteLink href={item.path}>{item.name}</SiteLink>
              <svg className={styles.separator} viewBox="0 0 8 12" aria-hidden="true" focusable="false">
                <path d="m2 1.5 4 4.5-4 4.5" />
              </svg>
            </li>
          ),
        )}
      </ol>
    </nav>
  );
}
