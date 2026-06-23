import { LINK_LABELS } from "../../data/projects";
import { C } from "../../theme/colors";
import { mono, type } from "../../theme/typography";

export default function ProjectLinks({ project, hovered }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
      {Object.entries(project.links).map(([key, url]) => (
        <a
          key={key}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          style={{
            fontFamily: mono, fontSize: type.labelSm, fontWeight: 700,
            letterSpacing: "0.08em", textTransform: "uppercase",
            color: hovered ? project.accent : C.text,
            textDecoration: "none", transition: "color 0.2s",
          }}
        >
          {LINK_LABELS[key] || key} ↗
        </a>
      ))}
    </div>
  );
}
