import { MOBILE_PROJECTS, WEB_PROJECTS } from "../../data/projects";
import { C } from "../../theme/colors";
import { SECTION_PADDING, sectionStyle } from "../../theme/layout";
import { mono } from "../../theme/typography";
import Reveal from "../ui/Reveal";
import SectionTag from "../ui/SectionTag";
import { BentoProjectGrid, MobileProjectRow } from "../projects/ProjectGrids";

function SubsectionHeading({ label }) {
  return (
    <h3 style={{
      fontFamily: mono, fontSize: 12, fontWeight: 700,
      letterSpacing: "0.18em", textTransform: "uppercase",
      color: C.textMuted, margin: "0 0 28px",
      paddingBottom: 12, borderBottom: `1px solid ${C.border}`,
    }}>
      {label}
    </h3>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" style={{ ...sectionStyle, padding: SECTION_PADDING }}>
      <Reveal><SectionTag number="02" label="Projects" /></Reveal>

      <Reveal delay={60}>
        <SubsectionHeading label="Web Applications" />
        <BentoProjectGrid projects={WEB_PROJECTS} />
      </Reveal>

      <Reveal delay={120}>
        <div style={{ marginTop: 72 }}>
          <SubsectionHeading label="React Native Applications" />
          <MobileProjectRow projects={MOBILE_PROJECTS} />
        </div>
      </Reveal>
    </section>
  );
}
