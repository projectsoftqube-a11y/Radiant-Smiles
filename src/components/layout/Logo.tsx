import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/brand/logo.svg";
import { practice } from "@/content/site";
import styles from "./Logo.module.css";

/** The master vector logo (docs/brand/logo.svg), linked to the home page. */
export function Logo({ className, priority = false }: { className?: string; priority?: boolean }) {
  return (
    <Link href="/" className={[styles.logo, className].filter(Boolean).join(" ")} aria-label={`${practice.name}, home`}>
      <Image src={logo} alt={practice.name} unoptimized priority={priority} className={styles.image} />
    </Link>
  );
}
