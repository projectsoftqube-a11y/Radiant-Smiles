/**
 * "Radiant" light rays: fine lines fanning out from one point, the site's signature
 * graphic. Each line has pathLength=1 so it can draw itself, on load (CSS, `animate`)
 * or on scroll (MotionController `data-draw`).
 */
export function Rays({
  count = 23,
  spread = 180,
  inner = 0.34,
  className,
  animate = false,
  scroll = false,
}: {
  /** Number of rays */
  count?: number;
  /** Fan angle in degrees, centered on "up" */
  spread?: number;
  /** Where each ray starts, as a share of the radius (leaves a clear core) */
  inner?: number;
  className?: string;
  /** Draw on page load (hero) */
  animate?: boolean;
  /** Draw when scrolled into view */
  scroll?: boolean;
}) {
  const cx = 500;
  const cy = 500;
  const r = 480;
  const lines = Array.from({ length: count }, (_, i) => {
    const t = count === 1 ? 0.5 : i / (count - 1);
    const angle = ((-90 - spread / 2 + spread * t) * Math.PI) / 180;
    // Alternate long and short rays for a shimmer rather than a hard fan
    const outer = i % 2 === 0 ? r : r * 0.78;
    return {
      x1: cx + Math.cos(angle) * r * inner,
      y1: cy + Math.sin(angle) * r * inner,
      x2: cx + Math.cos(angle) * outer,
      y2: cy + Math.sin(angle) * outer,
      delay: Math.abs(t - 0.5) * 0.9,
    };
  });

  return (
    <svg
      className={className}
      viewBox="0 0 1000 520"
      preserveAspectRatio="xMidYMax meet"
      aria-hidden="true"
      focusable="false"
      data-draw={scroll ? "" : undefined}
      data-rays-animate={animate ? "" : undefined}
    >
      {lines.map((line, i) => (
        <line
          key={i}
          x1={line.x1.toFixed(1)}
          y1={line.y1.toFixed(1)}
          x2={line.x2.toFixed(1)}
          y2={line.y2.toFixed(1)}
          pathLength={1}
          style={animate ? { animationDelay: `${0.35 + line.delay}s` } : undefined}
        />
      ))}
    </svg>
  );
}
