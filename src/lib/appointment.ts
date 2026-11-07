"use server";

import { headers } from "next/headers";
import nodemailer from "nodemailer";
import { practice } from "@/content/site";
import { validateAppointment, type AppointmentState } from "./appointment-validation";

/**
 * Appointment request handler for both website forms (Contact Us and Scheduling). A public
 * endpoint, so every field is checked again here and nothing from the request is trusted.
 *
 * Delivery (user, 7 Nov 2026): each request is emailed over SMTP to the practice inbox,
 * info@radiant-smiles.com, with Reply-To set to the visitor so the team can answer directly.
 * The settings live in .env.local (see .env.example): SMTP_HOST, SMTP_PORT, SMTP_SECURE,
 * SMTP_USER, SMTP_PASS, plus optional MAIL_FROM and MAIL_TO. Until the SMTP password is set,
 * the form asks visitors to call. Nothing from a submission is logged, and the form asks for
 * no medical details.
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

/** The SMTP settings, or null while they are incomplete (no host, or a user without a password) */
function smtpSettings() {
  const host = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS ?? "";
  if (!host || (user && !pass)) return null;
  const port = Number(process.env.SMTP_PORT) || 465;
  const secure = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : port === 465;
  return {
    transport: {
      host,
      port,
      secure,
      auth: user ? { user, pass } : undefined,
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 20_000,
    },
    from: process.env.MAIL_FROM?.trim() || `"${practice.name} Website" <${user || practice.email.display}>`,
    to: process.env.MAIL_TO?.trim() || practice.email.display,
  };
}

const escapeHtml = (text: string) =>
  text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** The email: a plain-text body and a simple HTML table with the same rows */
function buildEmail(fields: [string, string][], source: string) {
  const sent = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date());
  const rows: [string, string][] = [...fields, ["Sent from", source], ["Received", `${sent} (Eastern)`]];
  const text = [
    "New appointment request from the website",
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "Reply to this email to answer the patient directly.",
  ].join("\n");
  const html = `<!doctype html><html><body style="margin:0;padding:24px;background:#f2f8fd;font-family:Arial,Helvetica,sans-serif;color:#142238">
<table role="presentation" style="width:100%;max-width:600px;margin:0 auto;background:#ffffff;border:1px solid #d9e6f2;border-radius:12px;border-collapse:separate;overflow:hidden">
<tr><td style="padding:20px 24px;background:#1b3d6e;color:#ffffff;font-size:18px;font-weight:bold">New appointment request</td></tr>
<tr><td style="padding:16px 24px 8px"><table role="presentation" style="width:100%;border-collapse:collapse;font-size:15px;line-height:1.5">
${rows
  .map(
    ([label, value]) =>
      `<tr><th style="text-align:left;vertical-align:top;padding:8px 16px 8px 0;border-bottom:1px solid #e6eef6;color:#4a5b70;font-weight:600;white-space:nowrap">${escapeHtml(label)}</th><td style="padding:8px 0;border-bottom:1px solid #e6eef6;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`,
  )
  .join("\n")}
</table></td></tr>
<tr><td style="padding:8px 24px 20px;font-size:13px;color:#4a5b70">Reply to this email to answer the patient directly.</td></tr>
</table></body></html>`;
  return { text, html };
}

export async function submitAppointment(_previous: AppointmentState, data: FormData): Promise<AppointmentState> {
  // Honeypot: real visitors never see or fill this field
  if (String(data.get("company") ?? "").trim() !== "") return { status: "sent" };

  const { variant, errors, fields } = validateAppointment(data);
  if (Object.keys(errors).length) return { status: "invalid", errors };

  const requestHeaders = await headers();
  const ip = (requestHeaders.get("x-forwarded-for") ?? "").split(",")[0].trim() || "unknown";
  if (rateLimited(ip)) return { status: "error", message: `Too many requests in a short time. ${fallback}` };

  const smtp = smtpSettings();
  if (!smtp) return { status: "error", message: `Online requests aren't available right now. ${fallback}` };

  const value = (label: string) => fields.find(([key]) => key === label)?.[1] ?? "";
  const name = value("Full name");
  const patient = value("Patient");
  const source = variant === "scheduling" ? "Scheduling page" : "Contact Us page";
  const { text, html } = buildEmail(fields, source);

  try {
    await nodemailer.createTransport(smtp.transport).sendMail({
      from: smtp.from,
      to: smtp.to,
      replyTo: { name, address: value("Email address") },
      subject: `Website appointment request: ${name}${patient ? ` (${patient})` : ""}`,
      text,
      html,
    });
    return { status: "sent" };
  } catch (error) {
    // The error code only: never any of the visitor's details
    console.error("Appointment email not sent:", (error as { code?: string }).code ?? "unknown error");
    return { status: "error", message: `We couldn't send your request. ${fallback}` };
  }
}
