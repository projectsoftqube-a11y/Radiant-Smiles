/**
 * Map positions on a 1000 × 700 canvas, roughly following the real geography (the office
 * west of the river; Washington Crossing and New Hope up River Road; the New Jersey towns
 * fanned out east of the river), then spaced so that every name pill sits on the side of
 * its dot away from the office and no route line runs under a name (checked by
 * tools/from-amazing-smiles/qa/mapcheck.mjs). It's an approximate map, labelled as such.
 */
export const OFFICE = { x: 340, y: 560 };
export type Place = { x: number; y: number; side?: "left" | "right" | "bottom" | "office"; from?: string };
export const PLACES: Record<string, Place> = {
  // The office is in Yardley: its pin carries the name
  Yardley: { ...OFFICE, side: "office" },
  "Lower Makefield": { x: 225, y: 500, side: "left" },
  Morrisville: { x: 556, y: 620, side: "bottom" },
  "Washington Crossing": { x: 270, y: 330, side: "left" },
  // Up River Road from Washington Crossing
  "New Hope": { x: 190, y: 110, side: "left", from: "Washington Crossing" },
  Hopewell: { x: 438, y: 100 },
  Pennington: { x: 528, y: 207 },
  Ewing: { x: 545, y: 355 },
  Lawrenceville: { x: 745, y: 368 },
  "Mercer County": { x: 726, y: 456 },
  Trenton: { x: 740, y: 560 },
  Hamilton: { x: 800, y: 658 },
};

/** The Delaware River, north (top) to south (bottom right) */
export const RIVER =
  "M170 0 C200 35 235 65 260 100 S315 195 330 230 S355 295 370 330 S405 415 430 450 S480 515 520 540 S580 580 610 600 S650 630 660 650 S672 685 675 700";
