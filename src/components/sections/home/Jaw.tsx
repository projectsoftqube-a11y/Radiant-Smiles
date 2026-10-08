"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import styles from "./Jaw.module.css";

type Point = [number, number];
type Box = { left: number; right: number; top: number; height: number };
type Shape = {
  w: number;
  h: number;
  /** Gum margin (or a plain smile line when the teeth wrap) */
  margin: string;
  gum: string | null;
  /** Region beyond the gum's outer edge (lower jaw: flows into the next section) */
  outside: string | null;
  /** Region past the biting edges (upper jaw: the white inside the mouth) */
  inside: string | null;
  bandTop: number;
  bandBottom: number;
  sideTeeth: string[];
  mouthClip: string;
};

const f = (n: number) => n.toFixed(1);

/** Smooth path through points (Catmull-Rom converted to cubic Béziers). */
function smoothPath(points: Point[]): string {
  let d = `M${f(points[0][0])} ${f(points[0][1])}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] ?? points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] ?? p2;
    d += ` C${f(p1[0] + (p2[0] - p0[0]) / 6)} ${f(p1[1] + (p2[1] - p0[1]) / 6)}, ${f(p2[0] - (p3[0] - p1[0]) / 6)} ${f(p2[1] - (p3[1] - p1[1]) / 6)}, ${f(p2[0])} ${f(p2[1])}`;
  }
  return d;
}

/** How far the gum reaches onto a tooth: at its sides (papilla) and at its middle */
const PAPILLA = 46;
const CREST = 20;
const GUM = 22;

/** Offset of an element within an ancestor (ignores transforms, so entrance animations don't skew it) */
function offsetWithin(el: HTMLElement, root: HTMLElement) {
  let x = 0;
  let y = 0;
  let node: HTMLElement | null = el;
  while (node && node !== root) {
    x += node.offsetLeft;
    y += node.offsetTop;
    node = node.offsetParent as HTMLElement | null;
  }
  return { x, y };
}

/**
 * A row of teeth set in a pink gum, drawn from the real positions of the section's
 * `[data-tooth]` tiles. Used twice on the home page: the upper jaw at the bottom of the
 * hero and the lower jaw at the bottom of the Family section, so together they read as
 * a smiling mouth.
 *
 * All geometry is worked out "gum side up" (jaw coordinates); the lower jaw is the same
 * drawing flipped vertically, so its gum sits below the teeth and the teeth point up.
 * When the tiles sit in one row, the gum arches over each tooth and dips between teeth,
 * decorative side teeth continue the row (2.5 or 1.5 per side) on the same curves, and
 * everything runs off both screen edges. When the tiles wrap, a plain smile line is drawn.
 */
export function Jaw({ jaw, inside, outside }: { jaw: "upper" | "lower"; inside?: string; outside?: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const [shape, setShape] = useState<Shape | null>(null);

  useEffect(() => {
    const svg = ref.current;
    const section = svg?.parentElement;
    if (!svg || !section) return;

    const measure = () => {
      const w = section.clientWidth;
      const h = section.clientHeight;
      const tiles = [...section.querySelectorAll<HTMLElement>("[data-tooth]")];
      if (!tiles.length || !w) return;

      // Tile boxes in jaw coordinates (y measured from the gum side)
      const boxes: Box[] = tiles
        .map((tile) => {
          const { x, y } = offsetWithin(tile, section);
          const height = tile.offsetHeight;
          const top = jaw === "upper" ? y : h - (y + height);
          return { left: x, right: x + tile.offsetWidth, top, height };
        })
        .sort((a, b) => a.left - b.left);

      const cx = w / 2;
      const mid = (b: Box) => (b.left + b.right) / 2;
      const bottomOf = (b: Box) => b.top + b.height;
      const lowestTop = Math.max(...boxes.map((b) => b.top));
      const highestTop = Math.min(...boxes.map((b) => b.top));
      const oneRow = boxes.every((b) => Math.abs(b.top - lowestTop) < b.height * 0.6);

      if (!oneRow) {
        // Teeth wrap (phones): a shallow smile line beyond them, no gum
        const depth = Math.min(46, w * 0.06);
        if (jaw === "upper") {
          const y = Math.max(...boxes.map(bottomOf)) + 28;
          const margin = smoothPath([
            [0, y - depth],
            [cx, y],
            [w, y - depth],
          ]);
          setShape({ w, h, margin, gum: null, outside: null, inside: `${margin} L${f(w)} ${f(h + 4)} L0 ${f(h + 4)} Z`, bandTop: 0, bandBottom: 0, sideTeeth: [], mouthClip: "" });
        } else {
          const y = Math.max(highestTop - 24 - depth, 4);
          const margin = smoothPath([
            [0, y + depth],
            [cx, y],
            [w, y + depth],
          ]);
          setShape({ w, h, margin, gum: null, outside: `${margin} L${f(w)} -4 L0 -4 Z`, inside: null, bandTop: 0, bandBottom: 0, sideTeeth: [], mouthClip: "" });
        }
        return;
      }

      const first = boxes[0];
      const last = boxes[boxes.length - 1];
      const centre = boxes[Math.floor(boxes.length / 2)];
      const gap = boxes.length > 1 ? boxes[1].left - first.right : 8;

      // Two parabolas fitted to the main teeth: one through the gum-side edges, one
      // through the biting edges. Side teeth sit on the same curves.
      const fit = (yc: number, yf: number) => {
        const denom = (mid(first) - cx) ** 2 - (mid(centre) - cx) ** 2;
        const k = Math.abs(denom) < 1 ? 0 : (yc - yf) / denom;
        const y0 = yc + k * (mid(centre) - cx) ** 2;
        return (x: number) => y0 - k * (x - cx) ** 2;
      };
      const rawTop = fit(centre.top, first.top);
      const rawBottom = fit(bottomOf(centre), bottomOf(first));
      // Lower jaw: beyond the main row the curves ease off (its four teeth make a short,
      // steep curve that would climb far too high toward the edges)
      const soften = (fn: (x: number) => number, limit: number) => (x: number) => {
        if (jaw === "upper") return fn(x);
        const ref = x < cx ? mid(first) : mid(last);
        const inside = x < cx ? x >= ref : x <= ref;
        if (inside) return fn(x);
        const base = fn(ref);
        return base + limit * Math.tanh((fn(x) - base) / limit);
      };
      const topAt = soften(rawTop, 30);
      const bottomAt = soften(rawBottom, 45);

      const side = (dir: -1 | 1) => {
        const edge = dir === -1 ? first : last;
        const outerW = edge.right - edge.left;
        const span = dir === -1 ? edge.left : w - edge.right;
        const teeth: Box[] = [];
        if (span < 40) return teeth;
        // 2.5 teeth (the last half off-screen) while they stay a good size, else 1.5,
        // else one running off the edge. Each tooth is 86% of the one before.
        const layouts = [
          { sizes: [1, 0.86, 0.74], visible: 2.37, gaps: 2 },
          { sizes: [1, 0.86], visible: 1.43, gaps: 1 },
        ];
        let widths = [span * 1.4];
        for (const layout of layouts) {
          const a = (span - layout.gaps * gap) / layout.visible;
          if (a >= outerW * 0.42) {
            widths = layout.sizes.map((size) => a * size);
            break;
          }
        }
        let cursor = dir === -1 ? edge.left - gap : edge.right + gap;
        for (const width of widths) {
          const left = dir === -1 ? cursor - width : cursor;
          const right = left + width;
          const x = (left + right) / 2;
          const top = topAt(x);
          teeth.push({ left, right, top, height: Math.max(bottomAt(x) - top, 44) });
          cursor = dir === -1 ? left - gap : right + gap;
        }
        return dir === -1 ? teeth.reverse() : teeth;
      };
      const leftTeeth = side(-1);
      const rightTeeth = side(1);
      const all = [...leftTeeth, ...boxes, ...rightTeeth];

      // The gum runs past both screen edges at full thickness
      const cornerLx = Math.min(all[0].left, 0) - 24;
      const cornerRx = Math.max(all[all.length - 1].right, w) + 24;
      const cornerL: Point = [cornerLx, topAt(cornerLx) - GUM];
      const cornerR: Point = [cornerRx, topAt(cornerRx) - GUM];

      // Gum margin over every tooth: papilla, crest arch, papilla
      let scallop = `M${f(cornerLx)} ${f(topAt(cornerLx) + PAPILLA)} L${f(all[0].left)} ${f(all[0].top + PAPILLA)}`;
      all.forEach((b, i) => {
        const tw = b.right - b.left;
        scallop += ` C${f(b.left + tw * 0.08)} ${f(b.top + CREST)}, ${f(b.left + tw * 0.25)} ${f(b.top + CREST - 4)}, ${f(b.left + tw / 2)} ${f(b.top + CREST - 4)}`;
        scallop += ` C${f(b.right - tw * 0.25)} ${f(b.top + CREST - 4)}, ${f(b.right - tw * 0.08)} ${f(b.top + CREST)}, ${f(b.right)} ${f(b.top + PAPILLA)}`;
        const next = all[i + 1];
        if (next) {
          const gx = (b.right + next.left) / 2;
          const gy = Math.max(b.top, next.top) + PAPILLA + 6;
          scallop += ` L${f(gx)} ${f(gy)} L${f(next.left)} ${f(next.top + PAPILLA)}`;
        }
      });
      scallop += ` L${f(cornerRx)} ${f(topAt(cornerRx) + PAPILLA)} L${f(cornerR[0])} ${f(cornerR[1])}`;

      // Outer edge of the gum: a smooth curve a little beyond the teeth. The lower jaw
      // uses one clean parabola (corner to corner), lifted just enough to clear every tooth
      let topPoints: Point[] = [cornerL, ...all.map((b) => [mid(b), b.top - GUM] as Point), cornerR];
      if (jaw === "lower") {
        const yC = centre.top - GUM;
        const yE = Math.min(cornerL[1], cornerR[1]);
        const span = Math.max(cx - cornerLx, cornerRx - cx);
        const curve = (x: number) => yC + (yE - yC) * ((x - cx) / span) ** 2;
        const over = Math.max(0, ...all.map((b) => curve(mid(b)) - (b.top - GUM)));
        topPoints = Array.from({ length: 25 }, (_, i) => {
          const x = cornerLx + ((cornerRx - cornerLx) * i) / 24;
          return [x, curve(x) - over] as Point;
        });
      }
      const outer = smoothPath(topPoints);
      const gum = `${scallop} ${smoothPath([...topPoints].reverse()).replace(/^M[^C]+/, "")} Z`;

      const sideTeeth = [...leftTeeth, ...rightTeeth].map((b) => {
        const rx = (b.right - b.left) / 2;
        const ry = Math.min(rx * 0.85, b.height * 0.45, 40);
        const bottom = b.top + b.height;
        return `M${f(b.left)} ${f(b.top)} V${f(bottom - ry)} A${f(rx)} ${f(ry)} 0 0 0 ${f(b.right)} ${f(bottom - ry)} V${f(b.top)} Z`;
      });

      setShape({
        w,
        h,
        margin: scallop,
        gum,
        outside: `${outer} L${f(cornerRx)} -4 L${f(cornerLx)} -4 Z`,
        inside: `${scallop} L${f(cornerRx)} ${f(h + 4)} L${f(cornerLx)} ${f(h + 4)} Z`,
        bandTop: Math.min(...topPoints.map((p) => p[1])),
        bandBottom: lowestTop + PAPILLA + 6,
        sideTeeth,
        // Reaches well past the layer's far edge, so teeth that rise beyond it (lower jaw,
        // mouth closed) are never cut flat
        mouthClip: `${outer} L${f(cornerRx)} ${f(h + 600)} L${f(cornerLx)} ${f(h + 600)} Z`,
      });
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(section);
    document.fonts?.ready.then(measure);
    return () => observer.disconnect();
  }, [jaw]);

  const viewBox = shape ? `0 0 ${shape.w} ${shape.h}` : "0 0 1 1";
  const flip = shape && jaw === "lower" ? `translate(0 ${shape.h}) scale(1 -1)` : undefined;
  const id = (name: string) => `rs-${jaw}-${name}`;
  const jawClass = jaw === "lower" ? styles.lower : styles.upper;

  return (
    <>
      {/* Behind the tiles: the inside of the mouth */}
      <svg ref={ref} className={`${styles.back} ${jawClass}`} viewBox={viewBox} preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <g transform={flip}>
          {shape?.inside && inside ? <path className={styles.inside} d={shape.inside} style={{ fill: inside } as CSSProperties} /> : null}
          {shape && !shape.gum ? <path className={styles.line} d={shape.margin} pathLength={1} /> : null}
        </g>
      </svg>

      {/* The decorative side teeth, on the same level as the tile row */}
      <svg className={`${styles.teeth} ${jawClass}`} viewBox={viewBox} preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id={id("tooth")} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f2f3f4" />
            <stop offset="0.35" stopColor="#ffffff" />
          </linearGradient>
          {shape?.mouthClip ? (
            <clipPath id={id("mouth")} clipPathUnits="userSpaceOnUse">
              <path d={shape.mouthClip} />
            </clipPath>
          ) : null}
        </defs>
        <g transform={flip}>
          <g className={styles.sideTeeth}>
            <g clipPath={shape?.mouthClip ? `url(#${id("mouth")})` : undefined}>
              {shape?.sideTeeth.map((tooth, i) => (
                <path key={i} className={styles.sideTooth} d={tooth} fill={`url(#${id("tooth")})`} />
              ))}
            </g>
          </g>
        </g>
      </svg>

      {/* In front of the tiles: the gum, its margin line, and what lies beyond it */}
      <svg className={`${styles.front} ${jawClass}`} viewBox={viewBox} preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <defs>
          {shape?.gum ? (
            <linearGradient id={id("gum")} gradientUnits="userSpaceOnUse" x1="0" x2="0" y1={shape.bandTop} y2={shape.bandBottom}>
              <stop offset="0" stopColor="#f6cfd0" />
              <stop offset="0.55" stopColor="#f0b2b6" />
              <stop offset="1" stopColor="#e5959c" />
            </linearGradient>
          ) : null}
        </defs>
        <g transform={flip}>
          {shape?.outside && outside ? <path d={shape.outside} style={{ fill: outside } as CSSProperties} /> : null}
          {shape?.gum ? (
            <>
              <path className={styles.gum} d={shape.gum} fill={`url(#${id("gum")})`} />
              <path className={styles.margin} d={shape.margin} pathLength={1} />
            </>
          ) : null}
        </g>
      </svg>
    </>
  );
}
