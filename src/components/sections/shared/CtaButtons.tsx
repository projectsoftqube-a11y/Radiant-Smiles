import { Button } from "@/components/ui/Button";
import { appointmentLink, callLink, type CtaButton } from "@/content/pages/shared";

/**
 * A row of call-to-action buttons in content-file order: the first is the primary (navy)
 * button, the rest are outlined. "call" and "appointment" are the standard pair; a page
 * can also pass its own label and link (e.g. "Request Your First Visit", an external
 * CareCredit link). Analytics events: TrackClicks adds click_call / click_request_appointment.
 */
export function CtaButtons({ buttons, track, className }: { buttons: CtaButton[]; track: string; className?: string }) {
  if (!buttons.length) return null;
  return (
    <div className={className}>
      {buttons.map((button, i) => {
        const variant = i === 0 ? "primary" : "outline";
        if (button === "call") {
          return (
            <Button key="call" href={callLink.href} icon="phone" variant={variant} track={`call_click_${track}`}>
              {callLink.label}
            </Button>
          );
        }
        if (button === "appointment") {
          return (
            <Button key="appointment" href={appointmentLink.href} variant={variant} track={`appointment_click_${track}`}>
              {appointmentLink.label}
            </Button>
          );
        }
        return (
          <Button
            key={button.label}
            href={button.href}
            variant={variant}
            icon={button.href.startsWith("tel:") ? "phone" : undefined}
            iconEnd={button.external ? "arrowUpRight" : undefined}
            external={button.external}
            long={button.label.length > 28}
            track={button.track ?? `cta_click_${track}`}
          >
            {button.label}
            {button.external ? <span className="visually-hidden"> (opens in a new tab)</span> : null}
          </Button>
        );
      })}
    </div>
  );
}
