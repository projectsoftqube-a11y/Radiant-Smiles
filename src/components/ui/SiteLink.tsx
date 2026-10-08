import NextLink from "next/link";
import type { AnchorHTMLAttributes } from "react";
import { getRoute, isLive } from "@/content/routes";

type SiteLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  prefetch?: boolean;
};

/**
 * Internal link. Pages that are listed in routes.ts but not built yet render as a
 * placeholder `<a href="#">` (user request, 7 Oct 2026: every link should look and feel
 * like a link on staging). A click on one does nothing (TrackClicks cancels it), and
 * `data-pending-link` records the real target. When a page's `published` flag flips to
 * true, every link to it switches to the real URL automatically.
 * Paths that are not in routes.ts (anchors, external URLs) are always real links.
 */
export default function SiteLink({ href, prefetch, children, ...rest }: SiteLinkProps) {
  const path = href.split("#")[0];
  if (getRoute(path) !== undefined && !isLive(path)) {
    return (
      <a href="#" data-pending-link={path} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <NextLink href={href} prefetch={prefetch} {...rest}>
      {children}
    </NextLink>
  );
}
