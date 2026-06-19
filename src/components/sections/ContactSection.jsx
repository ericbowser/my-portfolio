import { CONTACT_LINKS } from "../../data/contact";
import { C } from "../../theme/colors";
import { SECTION_PADDING, sectionStyle } from "../../theme/layout";
import { mono, serif, body } from "../../theme/typography";
import Reveal from "../ui/Reveal";
import SectionTag from "../ui/SectionTag";
import ContactForm from "../contact/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" style={{
      ...sectionStyle,
      padding: SECTION_PADDING,
      color: C.text,
    }}>
      <Reveal><SectionTag number="03" label="Contact" /></Reveal>

      <Reveal delay={80}>
        <h2 style={{
          fontFamily: serif,
          fontSize: "clamp(36px, 5vw, 68px)", fontWeight: 400,
          lineHeight: 1.05, margin: "0 0 32px", maxWidth: 560,
        }}>
          Let's build<br />something together.
        </h2>
      </Reveal>

      <Reveal delay={160}>
        <p style={{
          ...body,
          maxWidth: 480, margin: "0 0 48px",
        }}>
          Open to senior full-stack, cloud engineering, and .NET modernization
          roles. Available for contract work through Execute & Engrave LLC.
        </p>
      </Reveal>

      <Reveal delay={240}>
        <div style={{ display: "flex", gap: 0, flexWrap: "wrap", marginBottom: 48 }}>
          {CONTACT_LINKS.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: mono, fontSize: 11, fontWeight: 700,
                letterSpacing: "0.1em", textTransform: "uppercase",
                color: C.text, textDecoration: "none",
                padding: "14px 32px",
                border: `1px solid ${C.border}`,
                borderRight: i < CONTACT_LINKS.length - 1 ? "none" : `1px solid ${C.border}`,
                transition: "background 0.25s, color 0.25s, border-color 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = l.accent;
                e.currentTarget.style.borderColor = l.accent;
                e.currentTarget.style.color = C.white;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = C.border;
                e.currentTarget.style.color = C.text;
              }}
            >
              {l.label} ↗
            </a>
          ))}
        </div>
      </Reveal>

      <Reveal delay={320}>
        <ContactForm />
      </Reveal>
    </section>
  );
}
