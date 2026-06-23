import { RESUME_FILES } from "../../data/resume";
import { C } from "../../theme/colors";
import { mono, type } from "../../theme/typography";

const baseLink = {
  fontFamily: mono,
  fontWeight: 700,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: C.text,
  textDecoration: "none",
  transition: "color 0.25s, border-color 0.25s",
};

export default function ResumeDownload({ variant = "hero" }) {
  if (variant === "nav") {
    return (
      <div
        data-testid="resume-download-nav"
        style={{ display: "flex", alignItems: "center", gap: 0, marginLeft: 8 }}
      >
        {RESUME_FILES.map((file, i) => (
          <a
            key={file.label}
            href={file.href}
            download={file.download}
            title={`Download ${file.downloadLabel}`}
            aria-label={`Download resume as ${file.label}`}
            style={{
              ...baseLink,
              fontSize: type.labelSm,
              padding: "6px 10px",
              border: `1px solid ${C.border}`,
              borderRight: i < RESUME_FILES.length - 1 ? "none" : `1px solid ${C.border}`,
              background: C.surface,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = file.accent;
              e.currentTarget.style.borderColor = file.accent;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = C.text;
              e.currentTarget.style.borderColor = C.border;
            }}
          >
            {file.label}
          </a>
        ))}
      </div>
    );
  }

  return (
    <div
      data-testid="resume-download-hero"
      style={{ display: "flex", gap: 20, flexWrap: "wrap", alignItems: "center" }}
    >
      <span style={{
        fontFamily: mono,
        fontSize: type.labelSm,
        fontWeight: 700,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: C.textMuted,
      }}>
        Resume
      </span>
      {RESUME_FILES.map((file) => (
        <a
          key={file.label}
          href={file.href}
          download={file.download}
          title={`Download ${file.downloadLabel}`}
          aria-label={`Download resume as ${file.label}`}
          style={{
            ...baseLink,
            fontSize: type.labelSm,
            padding: "10px 0",
            borderBottom: `2px solid ${file.accent}`,
          }}
        >
          {file.label} ↓
        </a>
      ))}
    </div>
  );
}
