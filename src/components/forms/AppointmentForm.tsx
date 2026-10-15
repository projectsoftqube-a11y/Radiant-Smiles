"use client";

import { useActionState, useEffect, useRef, useState, type FormEvent } from "react";
import { Icon } from "@/components/ui/Icon";
import { Rich } from "@/components/ui/Rich";
import { appointmentForm } from "@/content/pages/contact";
import { schedulingForm } from "@/content/pages/patient/scheduling";
import { formFields } from "@/content/pages/shared";
import { practice } from "@/content/site";
import { submitAppointment } from "@/lib/appointment";
import {
  fieldLimits,
  formatPhone,
  phoneDigits,
  requiredFields,
  serviceOptions,
  validateAppointment,
  type AppointmentState,
  type FieldErrors,
  type FieldName,
  type FormVariant,
} from "@/lib/appointment-validation";
import styles from "./AppointmentForm.module.css";

/** Analytics: the event name and which form, never any field values */
function pushEvent(event: string, variant: FormVariant) {
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, form: `appointment_${variant}`, page_path: window.location.pathname });
}

const FIELDS: FieldName[] = ["name", "phone", "email", "service", "message"];

/**
 * The appointment request form (id="appointment-form") on Contact Us and Scheduling. Both ask
 * the same five things (the user's request, 15 Oct 2026): full name, phone number, email
 * address and service (required, with an asterisk), and a message (optional). The heading,
 * button, notes and thank-you are each page's own. The same rules run in the browser (a field
 * is checked when you leave it, and again as you type while it shows a message) and on the
 * server (the real check). The phone number is tidied to (215) 860-4600 format when you leave
 * it. On success the thank-you replaces the form in place. Events: form_start on the first
 * edit, then form_submit (contact) or generate_lead (scheduling).
 */
export function AppointmentForm({ variant = "contact" }: { variant?: FormVariant }) {
  const copy = variant === "scheduling" ? schedulingForm : appointmentForm;
  const [state, formAction, pending] = useActionState<AppointmentState, FormData>(submitAppointment, { status: "idle" });
  const [localErrors, setLocalErrors] = useState<FieldErrors>({});
  const formRef = useRef<HTMLFormElement>(null);
  const doneRef = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  const serverErrors = state.status === "invalid" ? state.errors : {};
  const errors: FieldErrors = { ...serverErrors, ...localErrors };

  useEffect(() => {
    if (state.status === "sent") {
      doneRef.current?.focus();
      pushEvent(variant === "scheduling" ? "generate_lead" : "form_submit", variant);
    }
    if (state.status === "invalid") formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();
  }, [state, variant]);

  // Check in the browser first; only a clean form goes to the server
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    const check = validateAppointment(new FormData(event.currentTarget)).errors;
    setLocalErrors(check);
    if (Object.keys(check).length) {
      event.preventDefault();
      requestAnimationFrame(() => formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus());
    }
  };

  // Check one field against the shared rules and show or clear its message
  const checkField = (name: FieldName) => {
    if (!formRef.current) return;
    const error = validateAppointment(new FormData(formRef.current)).errors[name];
    setLocalErrors((current) => {
      if (current[name] === error) return current;
      const next = { ...current };
      if (error) next[name] = error;
      else delete next[name];
      return next;
    });
  };

  // First edit: form_start. While a field shows a message, it is re-checked as you type.
  const onInput = (event: FormEvent<HTMLFormElement>) => {
    if (!started.current) {
      started.current = true;
      pushEvent("form_start", variant);
    }
    const target = event.target as HTMLInputElement;
    const name = target.name as FieldName;
    // The service choice is checked as soon as it changes
    if (errors[name] || target.tagName === "SELECT") checkField(name);
  };

  // Leaving a field checks it; a valid phone number is tidied to (215) 860-4600
  const onBlur = (event: FormEvent<HTMLFormElement>) => {
    const target = event.target as HTMLInputElement;
    const name = target.name as FieldName;
    if (!FIELDS.includes(name)) return;
    if (name === "phone") {
      const digits = phoneDigits(target.value.trim());
      if (digits) target.value = formatPhone(digits);
    }
    checkField(name);
  };

  if (state.status === "sent") {
    return (
      <div id="appointment-form" className={styles.card}>
        <div ref={doneRef} className={styles.done} tabIndex={-1} role="status">
          <span className={styles.doneIcon} aria-hidden="true">
            <Icon name="check" size={30} strokeWidth={2.2} />
          </span>
          <p className={styles.doneText}>
            <Rich text={copy.thanks} />
          </p>
          <a href={practice.phone.href} className={styles.donePhone} data-track={`call_click_${variant}_form`}>
            <Icon name="phone" size={18} />
            {practice.phone.display}
          </a>
        </div>
      </div>
    );
  }

  const isRequired = (name: FieldName) => requiredFields.includes(name);

  const field = (name: FieldName, extra?: string) => ({
    id: `appt-${name}`,
    name,
    required: isRequired(name),
    "aria-required": isRequired(name) ? true : undefined,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": [extra, errors[name] ? `appt-${name}-error` : null].filter(Boolean).join(" ") || undefined,
  });

  const message = (name: FieldName) =>
    errors[name] ? (
      <p id={`appt-${name}-error`} className={styles.error}>
        {errors[name]}
      </p>
    ) : null;

  // Required fields carry an asterisk (the user's request: no "(required)" / "(optional)" text)
  const label = (name: FieldName, text: string) => (
    <label htmlFor={`appt-${name}`}>
      {text}
      {isRequired(name) ? (
        <span className={styles.req} aria-hidden="true">
          *
        </span>
      ) : null}
    </label>
  );

  return (
    <div id="appointment-form" className={styles.card}>
      <p className={styles.heading}>{copy.heading}</p>
      <form ref={formRef} action={formAction} onSubmit={onSubmit} onInput={onInput} onBlur={onBlur} noValidate className={styles.form}>
        <input type="hidden" name="variant" value={variant} />
        <div className={styles.field}>
          {label("name", formFields.name)}
          <input {...field("name")} type="text" autoComplete="name" maxLength={fieldLimits.name} />
          {message("name")}
        </div>
        <div className={`${styles.row} ${styles.two}`}>
          <div className={styles.field}>
            {label("phone", formFields.phone)}
            <input {...field("phone")} type="tel" autoComplete="tel" inputMode="tel" maxLength={fieldLimits.phone} placeholder="(215) 555-0123" />
            {message("phone")}
          </div>
          <div className={styles.field}>
            {label("email", formFields.email)}
            <input {...field("email")} type="email" autoComplete="email" inputMode="email" maxLength={fieldLimits.email} placeholder="name@example.com" />
            {message("email")}
          </div>
        </div>

        <div className={styles.field}>
          {label("service", formFields.service)}
          <span className={styles.select}>
            <select {...field("service")} defaultValue="">
              <option value="">{formFields.servicePlaceholder}</option>
              {serviceOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </span>
          {message("service")}
        </div>

        <div className={styles.field}>
          {label("message", formFields.message)}
          <textarea
            {...field("message", "appt-message-note")}
            rows={4}
            maxLength={fieldLimits.message}
            placeholder={formFields.messagePlaceholder}
          />
          <p id="appt-message-note" className={styles.note}>
            {copy.messageNote}
          </p>
          {message("message")}
        </div>

        {/* Honeypot: hidden from people and screen readers */}
        <div className={styles.trap} aria-hidden="true" data-decor-bleed>
          <label htmlFor="appt-company">Company</label>
          <input id="appt-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        {state.status === "error" ? (
          <p className={styles.formError} role="alert">
            {state.message}
          </p>
        ) : null}

        <div className={styles.submitRow}>
          <button type="submit" className={styles.submit} disabled={pending} data-track={`appointment_submit_${variant}`}>
            {pending ? "Sending…" : copy.button}
          </button>
          <p className={styles.privacy}>
            <Rich text={copy.privacy} />
          </p>
        </div>
      </form>
    </div>
  );
}
