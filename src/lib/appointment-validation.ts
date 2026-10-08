/**
 * Appointment request rules, shared by the form (instant messages) and the server action
 * (the real check: nothing from the request is trusted). Fields as listed in the contact
 * page's content file: name, phone, email, new or existing patient, preferred days and
 * times, message (optional). Phone or email is required (handoff).
 */

export type FieldName = "name" | "phone" | "email" | "patient" | "times" | "message";
export type FieldErrors = Partial<Record<FieldName, string>>;

export type AppointmentState =
  | { status: "idle" }
  | { status: "invalid"; errors: FieldErrors }
  | { status: "error"; message: string }
  | { status: "sent" };

export const fieldLimits = { name: 80, phone: 30, email: 120, times: 200, message: 1000 } as const;

const value = (data: FormData, name: FieldName) => String(data.get(name) ?? "").trim();

export function validateAppointment(data: FormData) {
  const errors: FieldErrors = {};
  const name = value(data, "name");
  const phone = value(data, "phone");
  const email = value(data, "email");
  const patient = value(data, "patient");
  const times = value(data, "times");
  const message = value(data, "message");

  if (name.length < 2) errors.name = "Please enter your name.";
  else if (name.length > fieldLimits.name) errors.name = "Please shorten your name.";

  const digits = phone.replace(/\D/g, "");
  if (!phone && !email) {
    errors.phone = "Please give us a phone number or an email address.";
    errors.email = "Please give us a phone number or an email address.";
  }
  if (phone && (digits.length < 10 || digits.length > 15 || phone.length > fieldLimits.phone)) {
    errors.phone = "Please check the phone number.";
  }
  if (email && (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > fieldLimits.email)) {
    errors.email = "Please check the email address.";
  }

  if (patient !== "New patient" && patient !== "Existing patient") errors.patient = "Please choose new or existing patient.";
  if (times.length > fieldLimits.times) errors.times = "Please shorten this a little.";
  if (message.length > fieldLimits.message) errors.message = "Please shorten your message.";

  const fields: [string, string][] = [
    ["Name", name],
    ["Phone", phone || "(not given)"],
    ["Email", email || "(not given)"],
    ["Patient", patient],
    ["Preferred days and times", times || "(not given)"],
    ["Message", message || "(none)"],
  ];
  return { errors, fields };
}
