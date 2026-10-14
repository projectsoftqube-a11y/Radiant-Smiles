"use client";

import { useActionState, useEffect, useRef, useState, type FormEvent } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Rich } from "@/components/ui/Rich";
import { schedulingForm, schedulingWorkflow as wf } from "@/content/pages/patient/scheduling";
import { dentists, practice } from "@/content/site";
import { submitAppointment } from "@/lib/appointment";
import {
  anyDentist,
  existingReasonOptions,
  fieldLimits,
  formatPhone,
  heardOptions,
  insuranceOptions,
  isNewPatient,
  newReasonOptions,
  patientOptions,
  phoneDigits,
  validateAppointment,
  type AppointmentState,
  type FieldErrors,
  type FieldName,
} from "@/lib/appointment-validation";
import f from "./AppointmentForm.module.css";
import s from "./SchedulingForm.module.css";

type Patient = (typeof patientOptions)[number];

/** The fields on each step; an error on a field sends the visitor back to its step */
const STEP_FIELDS: FieldName[][] = [["patient"], ["name", "phone", "email"], ["reason", "insurance", "plan", "heard", "dentist", "times"]];
const stepOf = (name: FieldName) => STEP_FIELDS.findIndex((fields) => fields.includes(name));

const PATHS: { value: Patient; key: "new" | "existing"; icon: IconName }[] = [
  { value: patientOptions[0], key: "new", icon: "user" },
  { value: patientOptions[1], key: "existing", icon: "calendarCheck" },
];

const dentistOptions = [anyDentist, ...Object.values(dentists).map((dentist) => dentist.shortName)];

/** Analytics: event names, the step and the patient path only, never any field values */
function pushEvent(event: string, detail: Record<string, string | number> = {}) {
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, form: "appointment_scheduling", page_path: window.location.pathname, ...detail });
}

/**
 * "Request an appointment" on the Scheduling page, as a New Patient / Existing Patient
 * workflow (client feedback, 14 Oct 2026):
 *   1  About you        two large cards: new or existing patient
 *   2  Contact details  name, phone, email
 *   3  Your visit       new: reason, insurance (+ plan), how they heard of us
 *                       existing: reason, preferred dentist
 *                       both: preferred days and times, then send
 * Every step stays in the HTML (later steps are `hidden`), so one form submits everything to
 * the same server action. Each step is checked before moving on, with the shared rules in
 * lib/appointment-validation; a server error sends the visitor back to that field's step.
 */
export function SchedulingForm() {
  const [state, formAction, pending] = useActionState<AppointmentState, FormData>(submitAppointment, { status: "idle" });
  const [step, setStep] = useState(0);
  const [patient, setPatient] = useState<Patient | "">("");
  const [insurance, setInsurance] = useState("");
  const [localErrors, setLocalErrors] = useState<FieldErrors>({});
  const formRef = useRef<HTMLFormElement>(null);
  const doneRef = useRef<HTMLDivElement>(null);
  const titleRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const started = useRef(false);
  const moved = useRef(false);

  const newPatient = isNewPatient(patient);
  const serverErrors = state.status === "invalid" ? state.errors : {};
  const errors: FieldErrors = { ...serverErrors, ...localErrors };

  // Sent: thank-you in place. Server says invalid: back to the first wrong field's step.
  useEffect(() => {
    if (state.status === "sent") {
      doneRef.current?.focus();
      pushEvent("generate_lead", { patient_type: newPatient ? "new" : "existing" });
    }
    if (state.status === "invalid") {
      const first = STEP_FIELDS.flat().find((name) => state.errors[name]);
      if (first) goTo(stepOf(first), first);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- runs once per server answer
  }, [state]);

  // After a step change, move focus to the new step's title (screen readers hear it)
  useEffect(() => {
    if (!moved.current) return;
    titleRefs.current[step]?.focus();
  }, [step]);

  function goTo(next: number, focusField?: FieldName) {
    moved.current = !focusField;
    setStep(next);
    if (focusField) {
      requestAnimationFrame(() => formRef.current?.querySelector<HTMLElement>(`[name="${focusField}"]`)?.focus());
    }
  }

  // Check the given fields against the shared rules; show their messages; true if clean
  function check(fields: FieldName[]) {
    if (!formRef.current) return true;
    const all = validateAppointment(new FormData(formRef.current)).errors;
    setLocalErrors((current) => {
      const next = { ...current };
      for (const name of fields) {
        if (all[name]) next[name] = all[name];
        else delete next[name];
      }
      return next;
    });
    const firstBad = fields.find((name) => all[name]);
    if (firstBad) requestAnimationFrame(() => formRef.current?.querySelector<HTMLElement>(`[name="${firstBad}"]`)?.focus());
    return !firstBad;
  }

  function choosePath(value: Patient) {
    if (!started.current) {
      started.current = true;
      pushEvent("form_start");
    }
    setPatient(value);
    setInsurance("");
    setLocalErrors((current) => {
      const next = { ...current };
      delete next.patient;
      return next;
    });
    pushEvent("form_step", { step: 2, patient_type: isNewPatient(value) ? "new" : "existing" });
    goTo(1);
  }

  function next() {
    if (!check(STEP_FIELDS[step])) return;
    pushEvent("form_step", { step: step + 2, patient_type: newPatient ? "new" : "existing" });
    goTo(step + 1);
  }

  // Send: everything is checked; any problem opens its step
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    const all = validateAppointment(new FormData(event.currentTarget)).errors;
    setLocalErrors(all);
    const first = STEP_FIELDS.flat().find((name) => all[name]);
    if (first) {
      event.preventDefault();
      goTo(stepOf(first), first);
    }
  };

  // While a field shows a message it is re-checked as you type; choices on change
  const onInput = (event: FormEvent<HTMLFormElement>) => {
    if (!started.current) {
      started.current = true;
      pushEvent("form_start");
    }
    const target = event.target as HTMLInputElement;
    const name = target.name as FieldName;
    if (name === "insurance") setInsurance(target.value);
    if (errors[name] || target.type === "radio" || target.tagName === "SELECT") check([name]);
  };

  // Leaving a field checks it; a valid phone number is tidied to (215) 860-4600
  const onBlur = (event: FormEvent<HTMLFormElement>) => {
    const target = event.target as HTMLInputElement;
    const name = target.name as FieldName;
    if (!STEP_FIELDS.flat().includes(name) || target.type === "radio") return;
    if (name === "phone") {
      const digits = phoneDigits(target.value.trim());
      if (digits) target.value = formatPhone(digits);
    }
    if (target.value.trim() || errors[name]) check([name]);
  };

  if (state.status === "sent") {
    return (
      <div id="appointment-form" className={f.card}>
        <div ref={doneRef} className={f.done} tabIndex={-1} role="status">
          <span className={f.doneIcon} aria-hidden="true">
            <Icon name="check" size={30} strokeWidth={2.2} />
          </span>
          <p className={f.doneText}>
            <Rich text={schedulingForm.thanks} />
          </p>
          <a href={practice.phone.href} className={f.donePhone} data-track="call_click_scheduling_form">
            <Icon name="phone" size={18} />
            {practice.phone.display}
          </a>
        </div>
      </div>
    );
  }

  const isRequired = (name: FieldName) =>
    ["name", "phone", "email", "patient", "reason"].includes(name) || (name === "insurance" && newPatient);

  const field = (name: FieldName, extra?: string) => ({
    id: `sched-${name}`,
    name,
    required: isRequired(name),
    "aria-required": isRequired(name) ? true : undefined,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": [extra, errors[name] ? `sched-${name}-error` : null].filter(Boolean).join(" ") || undefined,
  });

  const message = (name: FieldName) =>
    errors[name] ? (
      <p id={`sched-${name}-error`} className={f.error}>
        {errors[name]}
      </p>
    ) : null;

  const req = (name: FieldName) =>
    isRequired(name) ? (
      <span className={f.req} aria-hidden="true">
        *
      </span>
    ) : null;

  const select = (name: FieldName, label: string, options: readonly string[], extra?: string) => (
    <div className={f.field}>
      <label htmlFor={`sched-${name}`}>
        {label}
        {req(name)}
      </label>
      <span className={f.select}>
        <select {...field(name, extra)} defaultValue="">
          <option value="">Choose one</option>
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </span>
      {message(name)}
    </div>
  );

  const stepTitle = (index: number, text: string) => (
    <p
      ref={(node) => {
        titleRefs.current[index] = node;
      }}
      className={s.stepTitle}
      tabIndex={-1}
    >
      {text}
    </p>
  );

  // Steps 2 and 3 show the chosen path, with a way back to change it
  const pathChip = patient ? (
    <p className={s.pathChip}>
      <Icon name={newPatient ? "user" : "calendarCheck"} size={16} />
      <span>{patient}</span>
      <button type="button" className={s.change} onClick={() => goTo(0)}>
        {wf.change}
      </button>
    </p>
  ) : null;

  return (
    <div id="appointment-form" className={`${f.card} ${s.card}`}>
      <p className={f.heading}>{schedulingForm.heading}</p>

      {/* Progress: three steps, the current one filled */}
      <ol className={s.progress} aria-label="Form progress">
        {wf.steps.map((label, i) => (
          <li key={label} className={i < step ? s.done : i === step ? s.current : undefined} aria-current={i === step ? "step" : undefined}>
            <span className={s.dot} aria-hidden="true">
              {i < step ? <Icon name="check" size={14} strokeWidth={2.4} /> : i + 1}
            </span>
            <span className={s.stepLabel}>{label}</span>
          </li>
        ))}
      </ol>
      <p className="visually-hidden" aria-live="polite">
        Step {step + 1} of {wf.steps.length}: {wf.steps[step]}
      </p>

      <form ref={formRef} action={formAction} onSubmit={onSubmit} onInput={onInput} onBlur={onBlur} noValidate className={f.form}>
        <input type="hidden" name="variant" value="scheduling" />
        <input type="hidden" name="patient" value={patient} />

        {/* 1 · New or existing patient */}
        <div className={s.step} hidden={step !== 0}>
          {stepTitle(0, wf.start)}
          <div className={s.paths} role="group" aria-describedby={errors.patient ? "sched-patient-error" : undefined}>
            {PATHS.map((path) => (
              <button
                key={path.key}
                type="button"
                className={s.path}
                aria-pressed={patient === path.value}
                onClick={() => choosePath(path.value)}
              >
                <span className={s.pathIcon} aria-hidden="true">
                  <Icon name={path.icon} size={26} strokeWidth={1.7} />
                </span>
                <span className={s.pathTitle}>{wf.paths[path.key].title}</span>
                <span className={s.pathText}>{wf.paths[path.key].text}</span>
                <span className={s.pathGo} aria-hidden="true">
                  <Icon name="arrow" size={18} />
                </span>
              </button>
            ))}
          </div>
          {message("patient")}
        </div>

        {/* 2 · Contact details */}
        <div className={s.step} hidden={step !== 1}>
          {stepTitle(1, wf.steps[1])}
          {pathChip}
          <div className={f.field}>
            <label htmlFor="sched-name">
              {schedulingForm.fields.name}
              {req("name")}
            </label>
            <input {...field("name")} type="text" autoComplete="name" maxLength={fieldLimits.name} />
            {message("name")}
          </div>
          <div className={`${f.row} ${f.two}`}>
            <div className={f.field}>
              <label htmlFor="sched-phone">
                {schedulingForm.fields.phone}
                {req("phone")}
              </label>
              <input {...field("phone")} type="tel" autoComplete="tel" inputMode="tel" maxLength={fieldLimits.phone} placeholder="(215) 555-0123" />
              {message("phone")}
            </div>
            <div className={f.field}>
              <label htmlFor="sched-email">
                {schedulingForm.fields.email}
                {req("email")}
              </label>
              <input {...field("email")} type="email" autoComplete="email" inputMode="email" maxLength={fieldLimits.email} placeholder="name@example.com" />
              {message("email")}
            </div>
          </div>
          <div className={s.nav}>
            <button type="button" className={s.back} onClick={() => goTo(0)}>
              <Icon name="arrow" size={16} className={s.backIcon} />
              {wf.back}
            </button>
            <button type="button" className={f.submit} onClick={next}>
              {wf.next}
            </button>
          </div>
        </div>

        {/* 3 · Your visit (fields depend on the path) */}
        <div className={s.step} hidden={step !== 2}>
          {stepTitle(2, wf.steps[2])}
          {pathChip}
          {/* Keyed by path, so switching paths starts the visit questions fresh */}
          <div key={patient} className={s.visit}>
            {select("reason", schedulingForm.fields.reason, newPatient ? newReasonOptions : existingReasonOptions, "sched-reason-note")}

            {newPatient ? (
              <>
                <fieldset
                  className={f.choice}
                  aria-invalid={errors.insurance ? true : undefined}
                  aria-describedby={errors.insurance ? "sched-insurance-error" : undefined}
                >
                  <legend>
                    {wf.fields.insurance}
                    {req("insurance")}
                  </legend>
                  <div className={s.insurance}>
                    {insuranceOptions.map((option, i) => (
                      <label key={option} className={f.option}>
                        <input type="radio" name="insurance" value={option} required={i === 0} />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                  {message("insurance")}
                </fieldset>
                {insurance === insuranceOptions[0] ? (
                  <div className={`${f.field} ${s.reveal}`}>
                    <label htmlFor="sched-plan">{wf.fields.plan}</label>
                    <input {...field("plan", "sched-plan-hint")} type="text" maxLength={fieldLimits.plan} />
                    <p id="sched-plan-hint" className={f.note}>
                      {wf.planHint}
                    </p>
                    {message("plan")}
                  </div>
                ) : null}
                {select("heard", wf.fields.heard, heardOptions)}
              </>
            ) : (
              select("dentist", wf.fields.dentist, dentistOptions)
            )}

            <div className={f.field}>
              <label htmlFor="sched-times">{schedulingForm.fields.times}</label>
              <input {...field("times", "sched-times-hint")} type="text" maxLength={fieldLimits.times} />
              <p id="sched-times-hint" className={f.note}>
                {schedulingForm.timesHint}
              </p>
              {message("times")}
            </div>
          </div>

          <p id="sched-reason-note" className={f.privacyNote}>
            <Icon name="shield" size={18} />
            {schedulingForm.note}
          </p>

          {/* Honeypot: hidden from people and screen readers */}
          <div className={f.trap} aria-hidden="true" data-decor-bleed>
            <label htmlFor="sched-company">Company</label>
            <input id="sched-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
          </div>

          {state.status === "error" ? (
            <p className={f.formError} role="alert">
              {state.message}
            </p>
          ) : null}

          <div className={s.nav}>
            <button type="button" className={s.back} onClick={() => goTo(1)}>
              <Icon name="arrow" size={16} className={s.backIcon} />
              {wf.back}
            </button>
            <button type="submit" className={f.submit} disabled={pending} data-track="appointment_submit_scheduling">
              {pending ? "Sending…" : schedulingForm.button}
            </button>
          </div>
          <p className={f.privacy}>
            <Rich text={schedulingForm.privacy} />
          </p>
        </div>
      </form>
    </div>
  );
}
