"use client";

import { useId, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { homeInsurance } from "@/content/pages/home";
import { insurancePlans, practice } from "@/content/site";
import styles from "./Insurance.module.css";

const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

/**
 * Live plan checker: type an insurer and the accepted PPO plans that match appear with a
 * tick (from site.ts). Wording follows the fact sheet's rule: "accept", never "in-network";
 * coverage always needs a call to verify. With no search, the plans named in the copy show.
 */
export function PlanChecker() {
  const [query, setQuery] = useState("");
  const inputId = useId();
  const q = norm(query);
  const matches = q ? insurancePlans.filter((plan) => norm(plan).includes(q)) : [];
  const shown = q ? matches : homeInsurance.featuredPlans;

  return (
    <div className={styles.checker}>
      <label htmlFor={inputId} className={styles.checkerLabel}>
        Check your plan
      </label>
      <div className={styles.field}>
        <Icon name="search" size={22} />
        <input
          id={inputId}
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Type your insurer, e.g. Delta Dental"
          autoComplete="off"
          spellCheck={false}
        />
      </div>

      <p className={styles.result} aria-live="polite">
        {!q
          ? `${insurancePlans.length} PPO plans on our list, including:`
          : matches.length
            ? `${matches.length} ${matches.length === 1 ? "plan" : "plans"} on our accepted list`
            : `We don't see that plan on our list. Call ${practice.phone.display} and we'll check your coverage.`}
      </p>

      {shown.length ? (
        <ul role="list" className={styles.plans}>
          {shown.map((plan) => (
            <li key={plan} className={styles.plan}>
              <span className={styles.tick} aria-hidden="true">
                <Icon name="check" size={14} strokeWidth={2.4} />
              </span>
              {plan}
            </li>
          ))}
        </ul>
      ) : (
        <a href={practice.phone.href} className={styles.callPlan} data-track="call_click_plan_checker">
          <Icon name="phone" size={18} />
          Call {practice.phone.display}
        </a>
      )}
    </div>
  );
}
