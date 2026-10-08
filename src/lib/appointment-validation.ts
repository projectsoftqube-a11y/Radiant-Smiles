/**
 * Appointment request rules, shared by the form (instant messages) and the server action
 * (the real check: nothing from the request is trusted). Two forms use them, each with the
 * fields its content file lists:
 *   contact     name, phone, email, new or existing patient, preferred days and times,
 *               message (optional). Phone or email is required (contact handoff).
 *   scheduling  name and phone (required), email (optional), new or existing patient,
 *               preferred days and times, reason for visit (a select, not free text).
 */

export type FormVariant = "contact" | "scheduling";
export type FieldName = "name" | "phone" | "email" | "patient" | "times" | "message" | "reason";
export type FieldErrors = Partial<Record<FieldName, string>>;

export type AppointmentState =
  | { status: "idle" }
  | { status: "invalid"; errors: FieldErrors }
  | { status: "error"; message: string }
  | { status: "sent" };

export const fieldLimits = { name: 80, phone: 30, email: 120, times: 200, message: 1000 } as const;

export const patientOptions = ["New patient", "Existing patient"] as const;
export const reasonOptions = ["Checkup and cleaning", "New patient visit", "Tooth pain", "Cosmetic consultation", "Other"] as const;

const value = (data: FormData, name: FieldName) => String(data.get(name) ?? "").trim();

export const formVariant = (data: FormData): FormVariant => (data.get("variant") === "scheduling" ? "scheduling" : "contact");

export function validateAppointment(data: FormData) {
  const variant = formVariant(data);
  const errors: FieldErrors = {};
  const name = value(data, "name");
  const phone = value(data, "phone");
  const email = value(data, "email");
  const patient = value(data, "patient");
  const times = value(data, "times");
  const message = value(data, "message");
  const reason = value(data, "reason");

  if (name.length < 2) errors.name = "Please enter your name.";
  else if (name.length > fieldLimits.name) errors.name = "Please shorten your name.";

  const digits = phone.replace(/\D/g, "");
  const phoneOk = digits.length >= 10 && digits.length <= 15 && phone.length <= fieldLimits.phone;
  if (variant === "scheduling") {
    if (!phone) errors.phone = "Please enter a phone number so we can confirm your time.";
    else if (!phoneOk) errors.phone = "Please check the phone number.";
  } else {
    if (!phone && !email) {
      errors.phone = "Please give us a phone number or an email address.";
      errors.email = "Please give us a phone number or an email address.";
    }
    if (phone && !phoneOk) errors.phone = "Please check the phone number.";
  }
  if (email && (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > fieldLimits.email)) {
    errors.email = "Please check the email address.";
  }

  if (variant === "contact") {
    if (!(patientOptions as readonly string[]).includes(patient)) errors.patient = "Please choose new or existing patient.";
  } else if (patient && !(patientOptions as readonly string[]).includes(patient)) {
    errors.patient = "Please choose new or existing patient.";
  }
  if (reason && !(reasonOptions as readonly string[]).includes(reason)) errors.reason = "Please choose a reason from the list.";
  if (times.length > fieldLimits.times) errors.times = "Please shorten this a little.";
  if (message.length > fieldLimits.message) errors.message = "Please shorten your message.";

  const fields: [string, string][] = [
    ["Name", name],
    ["Phone", phone || "(not given)"],
    ["Email", email || "(not given)"],
    ["Patient", patient || "(not given)"],
    ["Preferred days and times", times || "(not given)"],
    ...(variant === "scheduling"
      ? ([["Reason for visit", reason || "(not given)"]] as [string, string][])
      : ([["Message", message || "(none)"]] as [string, string][])),
  ];
  return { variant, errors, fields };
}
