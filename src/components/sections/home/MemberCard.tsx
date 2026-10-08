"use client";

import { useRef, type PointerEvent } from "react";
import { ToothMark } from "@/components/ui/Brand";
import { membershipPlan, practice } from "@/content/site";
import styles from "./Membership.module.css";

/**
 * Decorative membership card (the table beside it carries the real content, so this
 * is aria-hidden). It tilts toward the pointer on devices with a fine pointer.
 */
export function MemberCard() {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse" || !ref.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    ref.current.style.setProperty("--rx", `${(-y * 10).toFixed(2)}deg`);
    ref.current.style.setProperty("--ry", `${(x * 12).toFixed(2)}deg`);
    ref.current.style.setProperty("--gx", `${((x + 0.5) * 100).toFixed(1)}%`);
    ref.current.style.setProperty("--gy", `${((y + 0.5) * 100).toFixed(1)}%`);
  };

  const onLeave = () => {
    ref.current?.style.setProperty("--rx", "0deg");
    ref.current?.style.setProperty("--ry", "0deg");
  };

  return (
    <div className={styles.cardStage} aria-hidden="true">
      <div ref={ref} className={styles.memberCard} onPointerMove={onMove} onPointerLeave={onLeave}>
        <div className={styles.cardTop}>
          <ToothMark className={styles.cardMark} />
          <span className={styles.cardKind}>In-office membership</span>
        </div>
        <p className={styles.cardPrice}>
          ${membershipPlan.yearly}
          <span>/ year</span>
        </p>
        <div className={styles.cardBottom}>
          <span className={styles.cardName}>{practice.name}</span>
          <span className={styles.cardExtra}>+${membershipPlan.additionalMember} each family member</span>
        </div>
      </div>
    </div>
  );
}
