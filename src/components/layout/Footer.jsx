import { C } from "../../theme/colors";
import { mono } from "../../theme/typography";

export default function Footer() {
  return (
    <footer style={{
      padding: "20px clamp(24px, 6vw, 120px)",
      background: "transparent",
      borderTop: `1px solid ${C.border}`,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 12,
      position: "relative",
      zIndex: 1,
    }}>
      <span style={{ fontFamily: mono, fontSize: 11, color: C.textMuted, letterSpacing: "0.06em" }}>
        © 2025 Eric Bowser — Execute & Engrave LLC
      </span>
      <span style={{ fontFamily: mono, fontSize: 11, color: C.textMuted, letterSpacing: "0.06em" }}>
        Salt Lake City, UT
      </span>
    </footer>
  );
}
