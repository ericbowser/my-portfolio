import { C } from "./colors";

export const mono = "'JetBrains Mono', 'Fira Code', monospace";
export const serif = "'Instrument Serif', 'Playfair Display', Georgia, serif";
export const sans = "'Inter', system-ui, sans-serif";

/** Primary reading copy — white, comfortable weight */
export const body = {
  fontFamily: sans,
  fontSize: 16,
  lineHeight: 1.75,
  fontWeight: 400,
  color: C.text,
};

/** Secondary copy — still readable, slightly softer */
export const bodyMuted = {
  fontFamily: sans,
  fontSize: 15,
  lineHeight: 1.75,
  fontWeight: 400,
  color: C.textMuted,
};
