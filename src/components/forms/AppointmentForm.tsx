"use client";

import { useActionState, useEffect, useRef, useState, type FormEvent } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Rich } from "@/components/ui/Rich";
import { appointmentForm } from "@/content/pages/contact";
import { schedulingForm } from "@/content/pages/patient/scheduling";
import { formFields } from "@/content/pages/shared";
import { practice } from "@/content/site";
import { submitAppointment } from "@/lib/appointment";
import {
  fieldLimits,
  formatPhone,
  patientOptions,
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

type Patient = (typeof patientOptions)[number];

/** The two opening boxes: existing patient, then new patient */
const PATHS: { value: Patient; icon: IconName; text: string }[] = [
  { value: patientOptions[0], icon: "calendarCheck", text: formFields.paths.existing },
  { value: patientOptions[1], icon: "user", text: formFields.paths.new },
];

/** Analytics: the event name, which form and the patient type, never any field values */
function pushEvent(event: string, variant: FormVariant, detail: Record<string, string> = {}) {
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, form: `appointment_${variant}`, page_path: window.location.pathname, ...detail });
}

/** Text fields (checked when you leave them); the service boxes are checked when they change */
const TEXT_FIELDS: FieldName[] = ["name", "phone", "email", "message"];

/** "new" or "existing" for analytics (no personal details) */
const patientType = (patient: string) => (patient === patientOptions[1] ? "new" : "existing");

/**
 * The appointment request form (id="appointment-form") on Contact Us and Scheduling (the
 * user's requests, 15 Oct 2026). It opens with one question only: two square boxes side by
 * side, Existing Patient and New Patient. Choosing one hides the boxes and shows the form:
 * the chosen type with a "Change" link, then full name, phone number, email address and
 * services (checkboxes, select all that apply), all required with an asterisk, and a message
 * (optional). Both steps stay in the HTML (`hidden`), so typed values survive a change of
 * mind, and one submit sends everything. The heading, button, notes and thank-you are each
 * page's own. The same rules run in the browser (a field is checked when you leave it, and
 * again as you type while it shows a message) and on the server (the real check). The phone
 * number is tidied to (215) 860-4600 format when you leave it. On success the thank-you
 * replaces the form in place. Events: form_start on the first choice or edit, then
 * form_submit (contact) or generate_lead (scheduling), with the patient type.
 */
export function AppointmentForm({ variant = "contact" }: { variant?: FormVariant }) {
  const copy = variant === "scheduling" ? schedulingForm : appointmentForm;
  const [state, formAction, pending] = useActionState<AppointmentState, FormData>(submitAppointment, { status: "idle" });
  const [patient, setPatient] = useState<Patient | "">("");
  const [step, setStep] = useState<"choose" | "details">("choose");
  const [localErrors, setLocalErrors] = useState<FieldErrors>({});
  const formRef = useRef<HTMLFormElement>(null);
  const doneRef = useRef<HTMLDivElement>(null);
  const chosenRef = useRef<HTMLParagraphElement>(null);
  const pathRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const started = useRef(false);

  const serverErrors = state.status === "invalid" ? state.errors : {};
  const errors: FieldErrors = { ...serverErrors, ...localErrors };

  const start = () => {
    if (started.current) return;
    started.current = true;
    pushEvent("form_start", variant);
  };

  // Focus the first field with a message; a missing patient type reopens the boxes
  const focusFirstInvalid = (found: FieldErrors) => {
    if (found.patient) {
      setStep("choose");
      requestAnimationFrame(() => pathRefs.current[0]?.focus());
      return;
    }
    requestAnimationFrame(() => formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus());
  };

  useEffect(() => {
    if (state.status === "sent") {
      doneRef.current?.focus();
      pushEvent(variant === "scheduling" ? "generate_lead" : "form_submit", variant, { patient_type: patientType(patient) });
    }
    if (state.status === "invalid") focusFirstInvalid(state.errors);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- runs once per server answer
  }, [state]);

  // Choosing a box hides the boxes and shows the form, with focus on the chosen type
  const choose = (value: Patient) => {
    start();
    setPatient(value);
    setLocalErrors((current) => {
      const next = { ...current };
      delete next.patient;
      return next;
    });
    setStep("details");
    requestAnimationFrame(() => chosenRef.current?.focus());
  };

  // "Change": back to the two boxes (the typed fields keep their values)
  const change = () => {
    setStep("choose");
    const index = PATHS.findIndex((path) => path.value === patient);
    requestAnimationFrame(() => pathRefs.current[Math.max(0, index)]?.focus());
  };

  // Check in the browser first; only a clean form goes to the server
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    const check = validateAppointment(new FormData(event.currentTarget)).errors;
    setLocalErrors(check);
    if (Object.keys(check).length) {
      event.preventDefault();
      focusFirstInvalid(check);
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
    start();
    const target = event.target as HTMLInputElement;
    const name = target.name as FieldName;
    // The service boxes are checked as soon as they change
    if (errors[name] || target.type === "checkbox") checkField(name);
  };

  // Leaving a field checks it; a valid phone number is tidied to (215) 860-4600
  const onBlur = (event: FormEvent<HTMLFormElement>) => {
    const target = event.target as HTMLInputElement;
    const name = target.name as FieldName;
    if (!TEXT_FIELDS.includes(name)) return;
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
  const asterisk = (name: FieldName) =>
    isRequired(name) ? (
      <span className={styles.req} aria-hidden="true">
        *
      </span>
    ) : null;

  const label = (name: FieldName, text: string) => (
    <label htmlFor={`appt-${name}`}>
      {text}
      {asterisk(name)}
    </label>
  );

  const chosen = PATHS.find((path) => path.value === patient);

  return (
    <div id="appointment-form" className={styles.card}>
      <p className={styles.heading}>{copy.heading}</p>
      <form ref={formRef} action={formAction} onSubmit={onSubmit} onInput={onInput} onBlur={onBlur} noValidate className={styles.form}>
        <input type="hidden" name="variant" value={variant} />
        <input type="hidden" name="patient" value={patient} />

        {/* First, only this: existing or new patient, as two square boxes side by side */}
        <div className={styles.chooser} hidden={step !== "choose"}>
          <p id="appt-patient-title" className={styles.chooserTitle}>
            {formFields.patientPrompt}
          </p>
          <div
            className={styles.paths}
            role="group"
            aria-labelledby="appt-patient-title"
            aria-describedby={errors.patient ? "appt-patient-error" : undefined}
          >
            {PATHS.map((path, i) => (
              <button
                key={path.value}
                ref={(node) => {
                  pathRefs.current[i] = node;
                }}
                type="button"
                className={styles.path}
                aria-pressed={patient === path.value}
                onClick={() => choose(path.value)}
              >
                <span className={styles.pathIcon} aria-hidden="true">
                  <Icon name={path.icon} size={30} strokeWidth={1.7} />
                </span>
                <span className={styles.pathTitle}>{path.value}</span>
                <span className={styles.pathText}>{path.text}</span>
                <span className={styles.pathGo} aria-hidden="true">
                  <Icon name="arrow" size={18} />
                </span>
              </button>
            ))}
          </div>
          {message("patient")}
        </div>

        {/* Then the form, under the chosen type */}
        <div className={styles.details} hidden={step !== "details"}>
          <p ref={chosenRef} className={styles.chosen} tabIndex={-1}>
            {chosen ? (
              <span className={styles.chosenIcon} aria-hidden="true">
                <Icon name={chosen.icon} size={18} />
              </span>
            ) : null}
            <span className={styles.chosenName}>{patient}</span>
            <button type="button" className={styles.change} onClick={change}>
              {formFields.change}
            </button>
          </p>

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

          {/* Services: select all that apply */}
          <fieldset className={styles.choice} aria-describedby={errors.service ? "appt-service-error" : undefined}>
            <legend>
              {formFields.service}
              {asterisk("service")}
              <span className={styles.legendHint}>{formFields.serviceHint}</span>
            </legend>
            <div className={styles.checks}>
              {serviceOptions.map((option) => (
                <label key={option.value} className={styles.check}>
                  <input type="checkbox" name="service" value={option.value} aria-invalid={errors.service ? true : undefined} />
                  <span className={styles.checkName}>{option.value}</span>
                  {option.hint ? <span className={styles.checkHint}>{option.hint}</span> : null}
                </label>
              ))}
            </div>
            {message("service")}
          </fieldset>

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
        </div>
      </form>
    </div>
  );
}
