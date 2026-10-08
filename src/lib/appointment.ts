"use server";

import { headers } from "next/headers";
import { practice } from "@/content/site";
import { validateAppointment, type AppointmentState } from "./appointment-validation";

/**
 * Appointment request handler for the contact page form. A public endpoint, so every
 * field is checked again here and nothing from the request is trusted.
 *
 * Delivery: the contact handoff asks for a HIPAA-appropriate form processor, still to be
 * confirmed with the practice. The request is posted as JSON to FORM_ENDPOINT (set in the
 * environment once the processor is chosen; optional FORM_ENDPOINT_TOKEN is sent as a
 * bearer token). Until then the form asks visitors to call. Nothing from a submission is
 * logged, and the form asks for no medical details.
 */

const fallback = `Please call ${practice.phone.display} and our team will help you book.`;

// Per-instance limit: 5 requests per IP in 10 minutes (the honeypot does the rest)
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const recent = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const hits = (recent.get(ip) ?? []).filter((time) => now - time < WINDOW_MS);
  hits.push(now);
  recent.set(ip, hits);
  if (recent.size > 5000) recent.clear();
  return hits.length > MAX_PER_WINDOW;
}

export async function submitAppointment(_previous: AppointmentState, data: FormData): Promise<AppointmentState> {
  // Honeypot: real visitors never see or fill this field
  if (String(data.get("company") ?? "").trim() !== "") return { status: "sent" };

  const { errors, fields } = validateAppointment(data);
  if (Object.keys(errors).length) return { status: "invalid", errors };

  const requestHeaders = await headers();
  const ip = (requestHeaders.get("x-forwarded-for") ?? "").split(",")[0].trim() || "unknown";
  if (rateLimited(ip)) return { status: "error", message: `Too many requests in a short time. ${fallback}` };

  const endpoint = process.env.FORM_ENDPOINT;
  if (!endpoint) return { status: "error", message: `Online requests aren't available right now. ${fallback}` };

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.FORM_ENDPOINT_TOKEN ? { Authorization: `Bearer ${process.env.FORM_ENDPOINT_TOKEN}` } : {}),
      },
      body: JSON.stringify({
        subject: `Appointment request: ${fields[0][1]}`,
        source: "Website contact page",
        fields: Object.fromEntries(fields),
      }),
      cache: "no-store",
    });
    if (!response.ok) throw new Error(`Form endpoint answered ${response.status}`);
    return { status: "sent" };
  } catch {
    return { status: "error", message: `We couldn't send your request. ${fallback}` };
  }
}
