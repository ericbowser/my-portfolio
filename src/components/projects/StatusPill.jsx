import { STATUS_LABELS } from "../../data/projects";
import { mono } from "../../theme/typography";

export default function StatusPill({ status }) {
  const { label, color } = STATUS_LABELS[status] || STATUS_LABELS["in-dev"];

  return (
    <span style={{
      fontFamily: mono, fontSize: 9, fontWeight: 700,
      letterSpacing: "0.12em", textTransform: "uppercase",
      padding: "4px 10px", border: `1px solid ${color}`,
      color, background: `${color}18`,
    }}>
      {label}
    </span>
  );
}
