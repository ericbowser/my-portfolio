import { useState } from "react";
import Reveal from "../ui/Reveal";
import ProjectLinks from "./ProjectLinks";
import StatusPill from "./StatusPill";
import { C } from "../../theme/colors";
import { mono, serif, body, bodyMuted, type } from "../../theme/typography";

export default function ProjectCard({ project, index, size = "standard", variant = "web" }) {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const isFeatured = size === "featured";
  const hasHighlights = project.highlights?.length > 0;

  return (
    <Reveal delay={index * 50} fill>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => hasHighlights && setExpanded(!expanded)}
        style={{
          border: `1px solid ${hovered ? project.accent : C.border}`,
          padding: isFeatured ? 40 : 28,
          cursor: hasHighlights ? "pointer" : "default",
          position: "relative", overflow: "hidden",
          transition: "border-color 0.3s, box-shadow 0.3s",
          boxShadow: hovered ? `0 0 28px ${project.accent}22` : "none",
          height: "100%", boxSizing: "border-box",
          background: C.surface,
          display: "flex", flexDirection: "column",
        }}
      >
        <div style={{
          position: "absolute", top: 0, left: 0, bottom: 0, width: 3,
          background: project.accent,
          opacity: hovered ? 1 : 0.5,
          transition: "opacity 0.3s",
        }} />

        <div style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "flex-start", gap: 12, marginBottom: 16,
        }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
            <StatusPill status={project.status} />
            {variant === "mobile" && project.platform && (
              <span style={{
                fontFamily: mono, fontSize: type.caption, fontWeight: 600,
                letterSpacing: "0.1em", textTransform: "uppercase",
                color: C.textDim, padding: "4px 8px",
                border: `1px solid ${C.border}`,
              }}>
                {project.platform}
              </span>
            )}
          </div>
          <span style={{
            fontFamily: mono, fontSize: type.labelSm, fontWeight: 700,
            color: hovered ? project.accent : C.textDim,
            letterSpacing: "0.1em",
          }}>
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <h3 style={{
          fontFamily: serif,
          fontSize: isFeatured ? "clamp(28px, 3vw, 36px)" : 22,
          fontWeight: 400, margin: "0 0 6px", color: C.text,
        }}>
          {project.title}
        </h3>
        <p style={{
          fontFamily: mono, fontSize: type.labelSm, fontWeight: 500,
          color: C.textMuted, letterSpacing: "0.05em", margin: "0 0 16px",
        }}>
          {project.subtitle}
        </p>
        <p style={{
          ...body,
          fontSize: isFeatured ? type.body : type.bodySm,
          margin: "0 0 20px",
          ...(isFeatured ? {} : { flex: 1 }),
        }}>
          {project.description}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
          {project.stack.map((t) => (
            <span key={t} style={{
              fontFamily: mono, fontSize: type.caption, fontWeight: 600,
              letterSpacing: "0.08em", textTransform: "uppercase",
              padding: "5px 12px",
              border: `1px solid ${hovered ? project.accent : C.border}`,
              color: hovered ? project.accent : C.text,
              transition: "color 0.3s, border-color 0.3s",
            }}>
              {t}
            </span>
          ))}
        </div>

        <ProjectLinks project={project} hovered={hovered} />

        {hasHighlights && (
          <>
            <div style={{
              maxHeight: expanded ? 240 : 0, overflow: "hidden",
              transition: "max-height 0.35s ease",
            }}>
              <ul style={{
                marginTop: 20, paddingLeft: 0, listStyle: "none",
                display: "flex", flexDirection: "column", gap: 10,
                borderTop: `1px solid ${C.border}`, paddingTop: 16,
              }}>
                {project.highlights.map((h) => (
                  <li key={h} style={{
                    ...bodyMuted,
                    fontSize: type.bodySm,
                    paddingLeft: 14,
                    borderLeft: `2px solid ${project.accent}`,
                  }}>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
            <span style={{
              display: "inline-block", marginTop: 14,
              fontFamily: mono, fontSize: type.labelSm, fontWeight: 700,
              color: expanded ? project.accent : C.textDim,
              letterSpacing: "0.1em", textTransform: "uppercase",
            }}>
              {expanded ? "— Collapse" : "+ Highlights"}
            </span>
          </>
        )}
      </div>
    </Reveal>
  );
}
