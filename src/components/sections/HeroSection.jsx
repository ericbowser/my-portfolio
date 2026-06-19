import { HERO_LINKS } from "../../data/contact";
import { C } from "../../theme/colors";
import { mono, serif, body } from "../../theme/typography";
import SkillsPanel from "../skills/SkillsPanel";
import Reveal from "../ui/Reveal";

export default function HeroSection() {
  return (
    <section id="about" style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "120px clamp(16px, 3.5vw, 40px) 80px",
      background: "transparent",
      position: "relative",
      zIndex: 1,
    }}>
      <div className="hero-inner" style={{
        width: "100%",
        maxWidth: 1100,
        margin: "0 auto",
      }}>
        <Reveal>
          <p style={{
            fontFamily: mono, fontSize: 12, fontWeight: 700,
            letterSpacing: "0.2em", textTransform: "uppercase",
            color: C.vermillion, marginBottom: 28,
          }}>
            Full Stack Software Engineer
          </p>
        </Reveal>

        <div className="hero-split" style={{
          display: "flex",
          gap: "clamp(24px, 3.5vw, 40px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }}>
          <div className="hero-intro" style={{
            flex: "0 1 420px",
            minWidth: 0,
          }}>
            <Reveal delay={80}>
              <h1 style={{
                fontFamily: serif,
                fontSize: "clamp(48px, 8vw, 96px)",
                fontWeight: 400, lineHeight: 0.95, color: C.text,
                margin: 0, letterSpacing: "-0.03em",
              }}>
                Eric{" "}
                <span
                  style={{ color: C.maroon }}
                  title="Ryan"
                  aria-label="Ryan"
                >
                  R
                </span>
                <br />
                Bowser
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <div style={{ maxWidth: 400, marginTop: 36 }}>
              <p style={{
                ...body,
                fontSize: 17,
                lineHeight: 1.8,
                margin: 0,
              }}>
                  10+ years building mission-critical applications in C#/.NET, React,
                  and Node.js. Specializing in performance optimization, cloud
                  architecture, and full-stack modernization. Currently pursuing AWS
                  and CompTIA Cloud+ certifications.
                </p>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div style={{ display: "flex", gap: 20, marginTop: 36, flexWrap: "wrap" }}>
                {HERO_LINKS.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: mono, fontSize: 11, fontWeight: 700,
                      letterSpacing: "0.1em", textTransform: "uppercase",
                      color: C.text, textDecoration: "none",
                      padding: "10px 0", borderBottom: `2px solid ${l.accent}`,
                      transition: "color 0.25s",
                    }}
                  >
                    {l.label} ↗
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div
              id="skills"
              className="hero-skills"
              style={{
                flex: "1 1 380px",
                minWidth: 280,
                maxWidth: 460,
                paddingTop: 4,
              }}
            >
              <SkillsPanel compact />
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .hero-split {
            flex-direction: column !important;
            flex-wrap: wrap !important;
            gap: 40px !important;
          }
          .hero-intro {
            flex: 1 1 auto !important;
          }
          .hero-skills {
            max-width: 100% !important;
            padding-top: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
