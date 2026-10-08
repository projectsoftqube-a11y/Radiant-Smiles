"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/**
 * Conversion events for local SEO measurement (home handoff: call clicks per position,
 * appointment request, directions and "See all special offers"). Any element with
 * `data-track="<event>"` pushes `{ event }` to window.dataLayer, ready for GTM once it
 * is added. No third-party script is loaded here. One element may fire several events
 * ("offer_click,call_click") and add details through data-track-* attributes.
 */
export function TrackClicks() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      // Placeholder links to pages not built yet (SiteLink): stay put instead of jumping
      // to the top. Runs in the capture phase, before Lenis's anchor handling.
      const pending = (event.target as Element | null)?.closest("a[data-pending-link]");
      if (pending) {
        event.preventDefault();
        event.stopPropagation();
      }

      const target = (event.target as Element | null)?.closest<HTMLElement>("[data-track]");
      const names = target?.dataset.track;
      if (!target || !names) return;
      // Extra details from data-track-* attributes (e.g. data-track-offer="implants")
      const details: Record<string, string> = {};
      for (const [key, value] of Object.entries(target.dataset)) {
        if (key.startsWith("track") && key !== "track" && value) details[key.slice(5).toLowerCase()] = value;
      }
      window.dataLayer = window.dataLayer ?? [];
      // Several events may be listed (e.g. "offer_click,call_click")
      for (const name of names.split(",")) {
        window.dataLayer.push({
          event: name.trim(),
          ...details,
          link_url: target instanceof HTMLAnchorElement ? target.href : undefined,
          page_path: window.location.pathname,
        });
      }
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
