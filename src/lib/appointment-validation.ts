/**
 * Appointment request rules, shared by the form (instant messages) and the server action
 * (the real check: nothing from the request is trusted). Two forms use them, each with the
 * fields its content file lists:
 *   contact     name, phone, email, new or existing patient (required); preferred days and
 *               times, message (optional).
 *   scheduling  name, phone, email, new or existing patient, reason for visit (required; the
 *               reason is a select, not free text); preferred days and times (optional).
 * The handoffs asked for "phone or email" (contact) and an optional email (scheduling); the
 * user asked for every core field to be required (9 Oct 2026).
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

/** Required on each form (marked with an asterisk; the user's request, 9 Oct 2026) */
export const requiredFields: Record<FormVariant, FieldName[]> = {
  contact: ["name", "phone", "email", "patient"],
  scheduling: ["name", "phone", "email", "patient", "reason"],
};

/** Letters (any language), spaces, apostrophes, hyphens and periods; at least two letters */
const NAME = /^[\p{L}][\p{L}\p{M}' .-]*[\p{L}.]$/u;

/** name@domain.tld: no spaces, one @, no doubled or edge dots, a 2+ letter ending */
const EMAIL = /^[A-Za-z0-9](?:[A-Za-z0-9._%+-]*[A-Za-z0-9_%+-])?@[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?)*\.[A-Za-z]{2,}$/;

/**
 * US phone number: 10 digits after an optional leading 1 / +1; separators ( ) - . and spaces
 * allowed; the area code and exchange can't start with 0 or 1 (NANP).
 */
export function phoneDigits(phone: string): string | null {
  if (!/^[\d\s().+-]+$/.test(phone)) return null;
  let digits = phone.replace(/\D/g, "");
  if (digits.length === 11 && digits.startsWith("1")) digits = digits.slice(1);
  if (digits.length !== 10 || /^[01]/.test(digits) || /^[01]/.test(digits.slice(3))) return null;
  return digits;
}

/** (215) 860-4600 */
export const formatPhone = (digits: string) => `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;

export function validateAppointment(data: FormData) {
  const variant = formVariant(data);
  const required = requiredFields[variant];
  const errors: FieldErrors = {};
  const name = value(data, "name");
  const phone = value(data, "phone");
  const email = value(data, "email");
  const patient = value(data, "patient");
  const times = value(data, "times");
  const message = value(data, "message");
  const reason = value(data, "reason");

  if (!name) errors.name = "Please enter your name.";
  else if (name.length > fieldLimits.name) errors.name = "Please enter a shorter name.";
  else if (name.length < 2 || !NAME.test(name)) errors.name = "Please enter a valid name.";

  if (!phone) {
    if (required.includes("phone")) errors.phone = "Please enter your phone number.";
  } else if (phone.length > fieldLimits.phone || !phoneDigits(phone)) {
    errors.phone = "Please enter a valid 10-digit phone number.";
  }

  if (!email) {
    if (required.includes("email")) errors.email = "Please enter your email address.";
  } else if (email.length > fieldLimits.email || !EMAIL.test(email) || email.includes("..")) {
    errors.email = "Please enter a valid email address.";
  }

  if (!(patientOptions as readonly string[]).includes(patient)) {
    if (patient || required.includes("patient")) errors.patient = "Please select new or existing patient.";
  }
  if (!(reasonOptions as readonly string[]).includes(reason)) {
    if (reason || required.includes("reason")) errors.reason = "Please select a reason for your visit.";
  }
  if (times.length > fieldLimits.times) errors.times = "Please enter shorter preferred days and times.";
  if (message.length > fieldLimits.message) errors.message = "Please enter a shorter message.";

  const fields: [string, string][] = [
    ["Name", name],
    ["Phone", phoneDigits(phone) ? formatPhone(phoneDigits(phone)!) : phone || "(not given)"],
    ["Email", email || "(not given)"],
    ["Patient", patient || "(not given)"],
    ["Preferred days and times", times || "(not given)"],
    ...(variant === "scheduling"
      ? ([["Reason for visit", reason || "(not given)"]] as [string, string][])
      : ([["Message", message || "(none)"]] as [string, string][])),
  ];
  return { variant, errors, fields };
}
