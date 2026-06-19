import { useState } from "react";
import { EXPERIENCE } from "../../data/experience";
import { C } from "../../theme/colors";
import { SECTION_PADDING, sectionStyle } from "../../theme/layout";
import { mono, serif, body, bodyMuted } from "../../theme/typography";
import Reveal from "../ui/Reveal";
import SectionTag from "../ui/SectionTag";

export default function ExperienceSection() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="experience" style={{
      ...sectionStyle,
      padding: SECTION_PADDING,
      color: C.text,
    }}>
      <Reveal><SectionTag number="01" label="Experience" /></Reveal>
      <div>
        {EXPERIENCE.map((exp, i) => (
          <Reveal key={exp.company} delay={i * 80}>
            <div
              style={{
                borderTop: `1px solid ${expanded === i ? exp.accent : C.border}`,
                padding: "40px 0", cursor: "pointer",
                transition: "border-color 0.3s",
              }}
              onClick={() => setExpanded(expanded === i ? null : i)}
            >
              <div style={{
                display: "flex", justifyContent: "space-between",
                alignItems: "flex-start", flexWrap: "wrap", gap: 12,
              }}>
                <div>
                  <h3 style={{
                    fontFamily: serif,
                    fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 400,
                    margin: 0, color: expanded === i ? exp.accent : C.text,
                    transition: "color 0.3s",
                  }}>
                    {exp.company}
                  </h3>
                  <p style={{
                    ...bodyMuted,
                    margin: "8px 0 0 0",
                  }}>
                    {exp.role}
                  </p>
                </div>
                <span style={{
                  fontFamily: mono, fontSize: 13,
                  color: C.textMuted, letterSpacing: "0.04em", whiteSpace: "nowrap",
                }}>
                  {exp.period}
                </span>
              </div>

              <div style={{
                maxHeight: expanded === i ? 400 : 0, overflow: "hidden",
                transition: "max-height 0.4s ease",
              }}>
                <ul style={{
                  marginTop: 28, paddingLeft: 0, listStyle: "none",
                  display: "flex", flexDirection: "column", gap: 16,
                }}>
                  {exp.bullets.map((b) => (
                    <li key={b} style={{
                      ...body,
                      fontSize: 15,
                      paddingLeft: 16,
                      borderLeft: `2px solid ${exp.accent}`,
                    }}>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <span style={{
                display: "inline-block",
                fontFamily: mono, fontSize: 11, fontWeight: 700,
                color: expanded === i ? exp.accent : C.textMuted,
                marginTop: 20, letterSpacing: "0.1em", textTransform: "uppercase",
                transition: "color 0.3s",
              }}>
                {expanded === i ? "— Collapse" : "+ Details"}
              </span>
            </div>
          </Reveal>
        ))}
        <div style={{ borderTop: `1px solid ${C.border}` }} />
      </div>
    </section>
  );
}
