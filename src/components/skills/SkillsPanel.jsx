import { useState } from "react";
import { CORE_STACK, SKILL_CATEGORIES } from "../../data/skills";
import { C } from "../../theme/colors";
import { mono, sans } from "../../theme/typography";

function SkillChip({ label, accent, large = false }) {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: sans,
        fontSize: large ? 16 : 15,
        fontWeight: 500,
        lineHeight: 1.3,
        padding: large ? "12px 20px" : "10px 16px",
        border: `1px solid ${hovered ? accent : C.border}`,
        color: hovered ? accent : C.text,
        background: hovered ? `${accent}12` : C.surface,
        transition: "color 0.2s, border-color 0.2s, background 0.2s",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </span>
  );
}

function CategoryRow({ category, compact = false }) {
  if (compact) {
    return (
      <div style={{
        padding: "14px 0",
        borderBottom: `1px solid ${C.borderSubtle}`,
      }}>
        <span style={{
          display: "block",
          fontFamily: mono,
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: category.accent,
          borderLeft: `3px solid ${category.accent}`,
          paddingLeft: 10,
          marginBottom: 10,
        }}>
          {category.label}
        </span>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {category.skills.map((skill) => (
            <SkillChip key={skill} label={skill} accent={category.accent} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="skills-category-row" style={{
      display: "grid",
      gridTemplateColumns: "minmax(140px, 180px) 1fr",
      gap: "16px 24px",
      alignItems: "center",
      padding: "16px 0",
      borderBottom: `1px solid ${C.borderSubtle}`,
    }}>
      <span style={{
        fontFamily: mono,
        fontSize: 13,
        fontWeight: 700,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: category.accent,
        borderLeft: `3px solid ${category.accent}`,
        paddingLeft: 12,
      }}>
        {category.label}
      </span>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
        {category.skills.map((skill) => (
          <SkillChip key={skill} label={skill} accent={category.accent} />
        ))}
      </div>
    </div>
  );
}

export default function SkillsPanel({ compact = false }) {
  return (
    <>
      <p style={{
        fontFamily: mono,
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: C.textMuted,
        marginBottom: compact ? 20 : 16,
      }}>
        Skills
      </p>

      {!compact && (
        <p style={{
          fontFamily: mono,
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: C.textMuted,
          marginBottom: 12,
        }}>
          Primary Stack
        </p>
      )}

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: compact ? 10 : 12,
        marginBottom: compact ? 24 : 32,
      }}>
        {CORE_STACK.map(({ label, accent }) => (
          <SkillChip key={label} label={label} accent={accent} large />
        ))}
      </div>

      <div>
        {SKILL_CATEGORIES.map((category) => (
          <CategoryRow key={category.id} category={category} compact={compact} />
        ))}
      </div>

      {!compact && (
        <style>{`
          @media (max-width: 640px) {
            .skills-category-row {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      )}
    </>
  );
}
