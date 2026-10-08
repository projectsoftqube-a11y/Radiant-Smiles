"use client";

import { useActionState, useEffect, useRef, useState, type FormEvent } from "react";
import { Icon } from "@/components/ui/Icon";
import { Rich } from "@/components/ui/Rich";
import { appointmentForm } from "@/content/pages/contact";
import { practice } from "@/content/site";
import { submitAppointment } from "@/lib/appointment";
import { fieldLimits, validateAppointment, type AppointmentState, type FieldErrors, type FieldName } from "@/lib/appointment-validation";
import styles from "./AppointmentForm.module.css";

/**
 * Appointment request form (contact page, id="appointment-form"). Fields and wording as
 * in the content file. The same rules run in the browser (instant messages) and on the
 * server (the real check). On success the thank-you message replaces the form in place,
 * and a "form_submit" event is pushed to the dataLayer.
 */
export function AppointmentForm() {
  const [state, formAction, pending] = useActionState<AppointmentState, FormData>(submitAppointment, { status: "idle" });
  const [localErrors, setLocalErrors] = useState<FieldErrors>({});
  const formRef = useRef<HTMLFormElement>(null);
  const doneRef = useRef<HTMLDivElement>(null);
  const copy = appointmentForm;

  const serverErrors = state.status === "invalid" ? state.errors : {};
  const errors: FieldErrors = { ...serverErrors, ...localErrors };

  useEffect(() => {
    if (state.status === "sent") {
      doneRef.current?.focus();
      window.dataLayer = window.dataLayer ?? [];
      window.dataLayer.push({ event: "form_submit", form: "appointment", page_path: window.location.pathname });
    }
    if (state.status === "invalid") formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();
  }, [state]);

  // Check in the browser first; only a clean form goes to the server
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    const check = validateAppointment(new FormData(event.currentTarget)).errors;
    setLocalErrors(check);
    if (Object.keys(check).length) {
      event.preventDefault();
      requestAnimationFrame(() => formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus());
    }
  };

  // Editing a field clears its message (and the shared phone/email one)
  const onInput = (event: FormEvent<HTMLFormElement>) => {
    const name = (event.target as HTMLInputElement).name as FieldName;
    if (!localErrors[name]) return;
    const next = { ...localErrors };
    delete next[name];
    if (name === "phone" || name === "email") {
      delete next.phone;
      delete next.email;
    }
    setLocalErrors(next);
  };

  if (state.status === "sent") {
    return (
      <div id="appointment-form" className={styles.card}>
        <div ref={doneRef} className={styles.done} tabIndex={-1} role="status">
          <span className={styles.doneIcon} aria-hidden="true">
            <Icon name="check" size={30} strokeWidth={2.2} />
          </span>
          <p className={styles.doneText}>{copy.thanks}</p>
          <a href={practice.phone.href} className={styles.donePhone} data-track="call_click_contact_form">
            <Icon name="phone" size={18} />
            {practice.phone.display}
          </a>
        </div>
      </div>
    );
  }

  const field = (name: FieldName) => ({
    id: `appt-${name}`,
    name,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `appt-${name}-error` : undefined,
  });

  const message = (name: FieldName) =>
    errors[name] ? (
      <p id={`appt-${name}-error`} className={styles.error}>
        <Icon name="alert" size={16} />
        {errors[name]}
      </p>
    ) : null;

  return (
    <div id="appointment-form" className={styles.card}>
      <p className={styles.heading}>{copy.heading}</p>
      <form ref={formRef} action={formAction} onSubmit={onSubmit} onInput={onInput} noValidate className={styles.form}>
        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor="appt-name">{copy.fields.name}</label>
            <input {...field("name")} type="text" autoComplete="name" maxLength={fieldLimits.name} required />
            {message("name")}
          </div>
        </div>
        <div className={`${styles.row} ${styles.two}`}>
          <div className={styles.field}>
            <label htmlFor="appt-phone">{copy.fields.phone}</label>
            <input {...field("phone")} type="tel" autoComplete="tel" inputMode="tel" maxLength={fieldLimits.phone} />
            {message("phone")}
          </div>
          <div className={styles.field}>
            <label htmlFor="appt-email">{copy.fields.email}</label>
            <input {...field("email")} type="email" autoComplete="email" maxLength={fieldLimits.email} />
            {message("email")}
          </div>
        </div>
        <fieldset
          className={styles.choice}
          aria-invalid={errors.patient ? true : undefined}
          aria-describedby={errors.patient ? "appt-patient-error" : undefined}
        >
          <legend>{copy.fields.patient}</legend>
          <div className={styles.options}>
            {copy.patientOptions.map((option, i) => (
              <label key={option} className={styles.option}>
                <input type="radio" name="patient" value={option} required={i === 0} />
                <span>{option}</span>
              </label>
            ))}
          </div>
          {message("patient")}
        </fieldset>
        <div className={styles.field}>
          <label htmlFor="appt-times">{copy.fields.times}</label>
          <input {...field("times")} type="text" maxLength={fieldLimits.times} />
          {message("times")}
        </div>
        <div className={styles.field}>
          <label htmlFor="appt-message">{copy.fields.message}</label>
          <textarea
            {...field("message")}
            rows={4}
            maxLength={fieldLimits.message}
            aria-describedby={errors.message ? "appt-message-note appt-message-error" : "appt-message-note"}
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
            <Icon name="alert" size={18} />
            {state.message}
          </p>
        ) : null}

        <div className={styles.submitRow}>
          <button type="submit" className={styles.submit} disabled={pending} data-track="appointment_click_contact_form">
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
