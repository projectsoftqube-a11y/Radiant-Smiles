/**
 * Appointment request rules, shared by the form (instant messages) and the server action
 * (the real check: nothing from the request is trusted). Both forms on the site (Contact Us
 * and Scheduling) ask the same five things (the user's request, 15 Oct 2026): full name, phone
 * number, email address and service (required), and a message (optional). This replaces the
 * content files' field lists and the Scheduling page's New / Existing Patient workflow.
 */

export type FormVariant = "contact" | "scheduling";
export type FieldName = "name" | "phone" | "email" | "service" | "message";
export type FieldErrors = Partial<Record<FieldName, string>>;

export type AppointmentState =
  | { status: "idle" }
  | { status: "invalid"; errors: FieldErrors }
  | { status: "error"; message: string }
  | { status: "sent" };

export const fieldLimits = { name: 80, phone: 30, email: 120, message: 1000 } as const;

/** The "Services" choices: the main treatments, then "Other" for anything else */
export const serviceOptions = [
  "New Patient Visit",
  "Checkup & Cleaning",
  "Emergency Visit",
  "Dental Implants",
  "Invisalign",
  "Teeth Whitening",
  "Porcelain Veneers",
  "Crowns & Bridges",
  "Fillings",
  "Root Canal",
  "Dentures",
  "Gum Care",
  "Children's Dentistry",
  "Other",
] as const;

const value = (data: FormData, name: FieldName) => String(data.get(name) ?? "").trim();

export const formVariant = (data: FormData): FormVariant => (data.get("variant") === "scheduling" ? "scheduling" : "contact");

/** Required on both forms (marked with an asterisk; the user's request, 9 and 15 Oct 2026) */
export const requiredFields: FieldName[] = ["name", "phone", "email", "service"];

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
  const errors: FieldErrors = {};
  const name = value(data, "name");
  const phone = value(data, "phone");
  const email = value(data, "email");
  const service = value(data, "service");
  const message = value(data, "message");

  if (!name) errors.name = "Please enter your name.";
  else if (name.length > fieldLimits.name) errors.name = "Please enter a shorter name.";
  else if (name.length < 2 || !NAME.test(name)) errors.name = "Please enter a valid name.";

  if (!phone) errors.phone = "Please enter your phone number.";
  else if (phone.length > fieldLimits.phone || !phoneDigits(phone)) errors.phone = "Please enter a valid 10-digit phone number.";

  if (!email) errors.email = "Please enter your email address.";
  else if (email.length > fieldLimits.email || !EMAIL.test(email) || email.includes("..")) {
    errors.email = "Please enter a valid email address.";
  }

  if (!(serviceOptions as readonly string[]).includes(service)) errors.service = "Please choose a service.";

  if (message.length > fieldLimits.message) errors.message = "Please enter a shorter message.";

  const digits = phoneDigits(phone);
  const fields: [string, string][] = [
    ["Full name", name],
    ["Phone number", digits ? formatPhone(digits) : phone],
    ["Email address", email],
    ["Service", service],
    ["Message", message || "(none)"],
  ];
  return { variant, errors, fields };
}
