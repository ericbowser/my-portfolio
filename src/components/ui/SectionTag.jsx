import { ACCENT_CYCLE, C } from "../../theme/colors";
import { mono } from "../../theme/typography";

export default function SectionTag({ number, label, marginBottom = 56 }) {
  const accent = ACCENT_CYCLE[(parseInt(number, 10) - 1) % 4];

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom }}>
      <span style={{
        fontFamily: mono, fontSize: 12, fontWeight: 700,
        color: accent, letterSpacing: "0.1em",
      }}>
        {number}
      </span>
      <div style={{ width: 48, height: 1, background: C.border }} />
      <span style={{
        fontFamily: mono, fontSize: 12, fontWeight: 700,
        letterSpacing: "0.16em", textTransform: "uppercase", color: C.text,
      }}>
        {label}
      </span>
    </div>
  );
}
