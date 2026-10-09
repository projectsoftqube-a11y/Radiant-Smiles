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

      // Handoff events on every page: click_call for any tel: link, click_request_appointment
      // for any link to the scheduling page or its form
      const anchor = (event.target as Element | null)?.closest<HTMLAnchorElement>("a[href]");
      if (anchor) {
        const href = anchor.getAttribute("href") ?? "";
        const generic = href.startsWith("tel:")
          ? "click_call"
          : href.includes("/patient-information/scheduling/") || href === "#appointment-form"
            ? "click_request_appointment"
            : null;
        const push = (name: string) => {
          window.dataLayer = window.dataLayer ?? [];
          window.dataLayer.push({ event: name, link_url: anchor.href, page_path: window.location.pathname });
        };
        if (generic) push(generic);
        // Treatment-page handoffs name the events click_book / call_click / appointment_click
        if (generic === "click_call") push("call_click");
        if (generic === "click_request_appointment") {
          push("click_book");
          push("appointment_click");
        }
        if (href.includes("/carecredit/")) push("financing_click");
        // A page can add its own call event for every phone link on it (emergency:
        // click_call_emergency), set once on the page's wrapper
        const scoped = generic === "click_call" ? document.querySelector<HTMLElement>("[data-call-event]")?.dataset.callEvent : undefined;
        if (scoped) push(scoped);
        // Links to the special offers page (cleaning handoff: click_offer)
        if (href.includes("/special-offers/")) {
          push("click_offer");
          push("offer_click");
        }
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
