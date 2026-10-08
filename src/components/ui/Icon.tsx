import type { SVGProps } from "react";

/** Line icons drawn on a 24px grid with a 1.6px stroke (inherit currentColor). */
const paths = {
  phone: (
    <path d="M6.6 3.5h2.6l1.4 4-2 1.4a12 12 0 0 0 6.5 6.5l1.4-2 4 1.4v2.6a2 2 0 0 1-2.2 2A17 17 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2Z" />
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4M8 13.5h3M8 17h3M14 13.5h2" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" />
      <circle cx="12" cy="10" r="2.4" />
    </>
  ),
  bolt: <path d="M13 3 5.5 13.5H12L11 21l7.5-10.5H12L13 3Z" />,
  search: (
    <>
      <circle cx="10.8" cy="10.8" r="6.3" />
      <path d="m15.5 15.5 5 5" />
    </>
  ),
  banknote: (
    <>
      <rect x="2.5" y="6" width="19" height="12" rx="2" />
      <circle cx="12" cy="12" r="2.6" />
      <path d="M6 9.5v5M18 9.5v5" />
    </>
  ),
  cheque: (
    <>
      <rect x="2.5" y="6" width="19" height="12" rx="2" />
      <path d="M6 10h7M6 13.5h4M14 14.5c1-.8 1.6-2.2 2.6-2.2s.8 1.6 1.9 1.6" />
    </>
  ),
  calendarCheck: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" />
      <path d="m9 14.6 2.1 2.1 4-4.2" />
    </>
  ),
  badgeDollar: (
    <>
      <path d="M12 2.8 14.4 4.6l3-.2.9 2.9 2.4 1.8-1 2.9 1 2.9-2.4 1.8-.9 2.9-3-.2L12 21.2l-2.4-1.8-3 .2-.9-2.9-2.4-1.8 1-2.9-1-2.9 2.4-1.8.9-2.9 3 .2L12 2.8Z" />
      <path d="M14.2 9.4c-.4-.8-1.2-1.2-2.2-1.2-1.3 0-2.2.7-2.2 1.7 0 2.4 4.6 1.3 4.6 3.9 0 1-1 1.8-2.4 1.8-1.1 0-2-.5-2.4-1.3M12 7v1.2M12 15.6v1.3" />
    </>
  ),
  tooth: (
    <path d="M7.2 3.6c1.6 0 2.9.9 4.8.9s3.2-.9 4.8-.9c2.3 0 3.7 2 3.7 4.6 0 2.3-1 3.9-1.6 6.3-.6 2.6-.9 6-2.6 6-1.9 0-1.8-4.6-4.3-4.6s-2.4 4.6-4.3 4.6c-1.7 0-2-3.4-2.6-6-.6-2.4-1.6-4-1.6-6.3 0-2.6 1.4-4.6 3.7-4.6Z" />
  ),
  /* Teeth cleaning: a toothbrush (handle, head, bristles) angled onto a tooth */
  toothClean: (
    <>
      <path d="M5.4 10c1 0 1.7.5 2.7.5s1.7-.5 2.7-.5c1.4 0 2.2 1.2 2.2 2.7 0 1.3-.5 2.3-.9 3.7-.3 1.6-.5 3.5-1.5 3.5-1.1 0-1.1-2.7-2.5-2.7s-1.4 2.7-2.5 2.7c-1 0-1.2-1.9-1.5-3.5-.4-1.4-.9-2.4-.9-3.7 0-1.5.8-2.7 2.2-2.7Z" />
      <g transform="rotate(-30 17 12)">
        <rect x="16.2" y="11" width="1.7" height="10.5" rx="0.85" />
        <path d="M17 9.6V11" />
        <rect x="15.9" y="2.4" width="2.3" height="7.2" rx="1" />
        <path d="M12.6 3.6h3.3M12.6 5.3h3.3M12.6 7h3.3M12.6 8.6h3.3" />
      </g>
    </>
  ),
  xray: (
    <>
      <rect x="3" y="4.5" width="18" height="15" rx="2.5" />
      <path d="M8 8.5c.8 1 .8 2.2 0 3.2s-.8 2.2 0 3.2M12 8v7.5M16 8.5c-.8 1-.8 2.2 0 3.2s.8 2.2 0 3.2" />
    </>
  ),
  bell: (
    <>
      <path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.5 2H4.5l1.5-2Z" />
      <path d="M10 20.5a2 2 0 0 0 4 0" />
    </>
  ),
  /* Learning: an open book */
  book: (
    <>
      <path d="M12 6.5c-1.8-1.3-4.3-2-7.5-2V18c3.2 0 5.7.7 7.5 2 1.8-1.3 4.3-2 7.5-2V4.5c-3.2 0-5.7.7-7.5 2Z" />
      <path d="M12 6.5V20" />
    </>
  ),
  /* Dental implant: a crown on an abutment and a threaded post */
  implant: (
    <>
      <path d="M7.5 3c1.3 0 2.4.7 4.5.7s3.2-.7 4.5-.7C18.1 3 19 4.3 19 5.9c0 1.5-.7 2.5-1.1 3.6H6.1C5.7 8.4 5 7.4 5 5.9 5 4.3 5.9 3 7.5 3Z" />
      <path d="M10 9.5v2h4v-2M10 11.5l.6 9h2.8l.6-9M9.3 14h5.4M9.6 16.5h4.8M10 19h4" />
    </>
  ),
  /* Clear aligner: a U-shaped tray seen from above */
  aligner: (
    <path d="M4 9.5C4 6.2 7.6 4 12 4s8 2.2 8 5.5v7c0 1.4-1 2.5-2.3 2.5s-2.2-1.1-2.2-2.5V11c0-1.4-1.6-2.5-3.5-2.5S8.5 9.6 8.5 11v5.5C8.5 17.9 7.6 19 6.3 19S4 17.9 4 16.5Z" />
  ),
  /* Whitening: a tooth with a shine on its crown */
  whiten: (
    <>
      <path d="M7.2 3.6c1.6 0 2.9.9 4.8.9s3.2-.9 4.8-.9c2.3 0 3.7 2 3.7 4.6 0 2.3-1 3.9-1.6 6.3-.6 2.6-.9 6-2.6 6-1.9 0-1.8-4.6-4.3-4.6s-2.4 4.6-4.3 4.6c-1.7 0-2-3.4-2.6-6-.6-2.4-1.6-4-1.6-6.3 0-2.6 1.4-4.6 3.7-4.6Z" />
      <path d="M6.5 10.2c-.3-2.1.8-3.7 2.8-3.9M15.6 6.6l.9-.9" />
    </>
  ),
  /* Veneer: a tooth with a thin shell over its front */
  veneer: (
    <>
      <path d="M7.2 3.6c1.6 0 2.9.9 4.8.9s3.2-.9 4.8-.9c2.3 0 3.7 2 3.7 4.6 0 2.3-1 3.9-1.6 6.3-.6 2.6-.9 6-2.6 6-1.9 0-1.8-4.6-4.3-4.6s-2.4 4.6-4.3 4.6c-1.7 0-2-3.4-2.6-6-.6-2.4-1.6-4-1.6-6.3 0-2.6 1.4-4.6 3.7-4.6Z" />
      <path d="M6 8c1.8 1.3 4 1.9 6 1.9s4.2-.6 6-1.9" />
    </>
  ),
  /* Dental microscope */
  microscope: (
    <>
      <path d="m10.4 3 3.6 1.9-3.4 6.6-3.6-1.8Z" />
      <path d="m8.4 11.3-1 2M5 20.5h13M15.2 20.5a6 6 0 0 0-2.7-10.6M9 17h5" />
    </>
  ),
  clipboard: (
    <>
      <rect x="5" y="4.5" width="14" height="16.5" rx="2" />
      <path d="M9 4.5V3.6c0-.6.4-1.1 1-1.1h4c.6 0 1 .5 1 1.1v.9M8.5 10h7M8.5 13.5h7M8.5 17h4" />
    </>
  ),
  firstAid: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
      <path d="M12 8v8M8 12h8" />
    </>
  ),
  tag: (
    <>
      <path d="M3.5 12.6V4.5a1 1 0 0 1 1-1h8.1l7.9 7.9a1 1 0 0 1 0 1.4l-8.1 8.1a1 1 0 0 1-1.4 0l-7.5-8.3Z" />
      <circle cx="8.3" cy="8.3" r="1.5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 5.8v5.6c0 4.4 3 7.9 7 9.6 4-1.7 7-5.2 7-9.6V5.8L12 3Z" />
      <path d="m9 12 2.2 2.2L15.5 10" />
    </>
  ),
  arrow: <path d="M4.5 12h15m-5.5-5.5L19.5 12 14 17.5" />,
  arrowUpRight: <path d="M7 17 17 7M8.5 7H17v8.5" />,
  directions: (
    <>
      <path d="m12 2.8 9.2 9.2-9.2 9.2L2.8 12 12 2.8Z" />
      <path d="M9 14.5v-2a1.5 1.5 0 0 1 1.5-1.5H15m-2-2 2 2-2 2" />
    </>
  ),
  check: <path d="m5 12.5 4.2 4.2L19 7" />,
  menu: <path d="M4 7h16M4 12h16M4 17h10" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  chevron: <path d="m6 9 6 6 6-6" />,
  headphones: (
    <>
      <path d="M4 15v-3a8 8 0 0 1 16 0v3" />
      <rect x="3.5" y="14" width="4" height="6.5" rx="1.5" />
      <rect x="16.5" y="14" width="4" height="6.5" rx="1.5" />
    </>
  ),
  alert: (
    <>
      <path d="M12 3.5 2.8 19.5h18.4L12 3.5Z" />
      <path d="M12 10v4.5M12 17.2v.3" />
    </>
  ),
  drop: <path d="M12 3.5s-6 6.6-6 11a6 6 0 0 0 12 0c0-4.4-6-11-6-11Z" />,
  card: (
    <>
      <rect x="2.5" y="5.5" width="19" height="13" rx="2" />
      <path d="M2.5 10h19M6 14.5h4" />
    </>
  ),
  star: <path d="m12 3.5 2.6 5.4 5.9.8-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.8L12 3.5Z" />,
  user: (
    <>
      <circle cx="12" cy="8.5" r="3.8" />
      <path d="M4.5 20.5a7.5 7.5 0 0 1 15 0" />
    </>
  ),
  graduation: (
    <>
      <path d="m2.5 9 9.5-4.5L21.5 9 12 13.5 2.5 9Z" />
      <path d="M6.5 11v4.5c1.5 1.5 3.5 2.3 5.5 2.3s4-.8 5.5-2.3V11M21.5 9v5" />
    </>
  ),
  chat: (
    <>
      <path d="M4 5.5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-9l-4.5 3.5v-3.5H4a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1Z" />
      <path d="M7.5 10h9M7.5 13h5.5" />
    </>
  ),
  mirror: (
    <>
      <circle cx="16" cy="7" r="4" />
      <path d="M13.2 9.8 3.5 19.5M15 5.5a2 2 0 0 1 2.5 0" />
    </>
  ),
  heart: <path d="M12 20s-7.5-4.6-7.5-10a4.3 4.3 0 0 1 7.5-2.9A4.3 4.3 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10Z" />,
  car: (
    <>
      <path d="M4 16.5V12l2-5h12l2 5v4.5M3 16.5h18v2.5h-3v-2.5M6 19v-2.5" />
      <path d="M4 12h16M7 14.3h1.5M15.5 14.3H17" />
    </>
  ),
  camera: (
    <>
      <path d="M3.5 8.5a1.5 1.5 0 0 1 1.5-1.5h2.8l1.5-2.5h5.4l1.5 2.5H19a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-1.5 1.5H5a1.5 1.5 0 0 1-1.5-1.5v-9Z" />
      <circle cx="12" cy="12.8" r="3.6" />
    </>
  ),
  accessible: (
    <>
      <circle cx="12" cy="4.5" r="1.6" />
      <path d="M12 7.5v6h5l2 5M12 10h4.5M8.5 11.5a5.5 5.5 0 1 0 7.8 6.8" />
    </>
  ),
} as const;

export type IconName = keyof typeof paths;

type IconProps = SVGProps<SVGSVGElement> & { name: IconName; size?: number };

export function Icon({ name, size = 20, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {paths[name]}
    </svg>
  );
}
