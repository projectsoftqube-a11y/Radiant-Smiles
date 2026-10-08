"use client";

import { useSyncExternalStore } from "react";
import { hours } from "@/content/site";

/**
 * Live office status in the practice's own time zone (Yardley, PA), worked out on the
 * visitor's device and refreshed every minute. Nothing is computed on the server, so a
 * cached page never shows a stale "open now". Shared by the home hours chart and the
 * contact page.
 */

/** "08:30" → 8.5 */
export const toHours = (time: string) => {
  const [h, m] = time.split(":").map(Number);
  return h + m / 60;
};

/** "08:00" → "8:00 am" */
export const clock = (time: string) => {
  const [h, m] = time.split(":").map(Number);
  return `${h % 12 || 12}:${String(m).padStart(2, "0")} ${h < 12 ? "am" : "pm"}`;
};

const subscribe = (onChange: () => void) => {
  const id = window.setInterval(onChange, 60_000);
  return () => window.clearInterval(id);
};

const getSnapshot = () => {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  }).formatToParts(new Date());
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  return `${get("weekday")}|${Number(get("hour")) % 24}|${get("minute")}`;
};

const getServerSnapshot = () => "";

export type OfficeStatus = { open: boolean; text: string; todayIndex: number };

/** Open/closed right now, and when the office next opens. */
export function officeStatus(now: string): OfficeStatus | null {
  if (!now) return null;
  const [weekday, hh, mm] = now.split("|");
  const minutes = Number(hh) * 60 + Number(mm);
  const todayIndex = hours.findIndex((d) => d.day === weekday);
  const today = hours[todayIndex];
  if (today?.opens && today.closes) {
    const open = toHours(today.opens) * 60;
    const close = toHours(today.closes) * 60;
    if (minutes >= open && minutes < close) return { open: true, text: `Open now · until ${clock(today.closes)}`, todayIndex };
    if (minutes < open) return { open: false, text: `Closed now · opens today at ${clock(today.opens)}`, todayIndex };
  }
  for (let i = 1; i <= 7; i++) {
    const next = hours[(todayIndex + i) % 7];
    if (next.opens) return { open: false, text: `Closed now · opens ${next.day} at ${clock(next.opens)}`, todayIndex };
  }
  return { open: false, text: "Closed now", todayIndex };
}

/** The live status; null on the server and before hydration. */
export function useOfficeStatus() {
  const now = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return officeStatus(now);
}
