import { C } from "./colors";

export const mono = "'JetBrains Mono', 'Fira Code', monospace";
export const serif = "'Instrument Serif', 'Playfair Display', Georgia, serif";
export const sans = "'Inter', system-ui, sans-serif";

/** Shared scale — body 17px+, UI labels 12px+ (avoid below 11px) */
export const type = {
  body: 17,
  bodySm: 16,
  label: 13,
  labelSm: 12,
  caption: 12,
  nav: 13,
};

/** Primary reading copy */
export const body = {
  fontFamily: sans,
  fontSize: type.body,
  lineHeight: 1.75,
  fontWeight: 400,
  color: C.text,
};

/** Secondary copy */
export const bodyMuted = {
  fontFamily: sans,
  fontSize: type.bodySm,
  lineHeight: 1.75,
  fontWeight: 400,
  color: C.textMuted,
};

/** Uppercase mono labels (nav, section tags, form labels) */
export const label = {
  fontFamily: mono,
  fontSize: type.labelSm,
  fontWeight: 700,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
};
