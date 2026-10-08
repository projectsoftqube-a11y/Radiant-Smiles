"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { membershipPlan } from "@/content/site";
import styles from "./Family.module.css";

const MIN = 1;
const MAX = 8;

/**
 * Family membership: a small stepper that adds up the yearly plan for a household
 * ($150 for the first person, $75 for each additional family member, from site.ts).
 * The server renders a household of four; the visitor changes the count.
 */
export function FamilyPlan() {
  const [people, setPeople] = useState(4);
  const total = membershipPlan.yearly + membershipPlan.additionalMember * (people - 1);
  return (
    <div className={styles.plan}>
      <span className={styles.planKicker}>Membership plan calculator</span>
      <div className={styles.planRow}>
        <span className={styles.planLabel} id="fam-plan-label">
          People in your family
        </span>
        <div className={styles.stepper} role="group" aria-labelledby="fam-plan-label">
          <button type="button" onClick={() => setPeople((n) => Math.max(MIN, n - 1))} disabled={people <= MIN} aria-label="One fewer person">
            <span aria-hidden="true">−</span>
          </button>
          <output className={styles.count} aria-live="polite">
            {people}
          </output>
          <button type="button" onClick={() => setPeople((n) => Math.min(MAX, n + 1))} disabled={people >= MAX} aria-label="One more person">
            <span aria-hidden="true">+</span>
          </button>
        </div>
      </div>
      <div className={styles.people} aria-hidden="true">
        {Array.from({ length: MAX }, (_, i) => (
          <span key={i} className={i < people ? styles.personOn : styles.person}>
            <Icon name="user" size={18} />
          </span>
        ))}
      </div>
      <p className={styles.planTotal} aria-live="polite">
        <span className={styles.planFigure}>${total}</span>
        <span className={styles.planPer}>a year</span>
      </p>
      <p className={styles.planMath}>
        ${membershipPlan.yearly} for the first person{people > 1 ? ` + $${membershipPlan.additionalMember} × ${people - 1} more` : ""}
      </p>
    </div>
  );
}
