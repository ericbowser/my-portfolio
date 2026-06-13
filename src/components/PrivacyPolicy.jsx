import { useEffect } from "react";

const VIVID = ["#00E5A0", "#FF6B35", "#3B82F6", "#E040FB", "#FACC15"];

const SECTIONS = [
  {
    title: "Overview",
    content:
      "TrackMoto is a motorcycle mileage and expense tracking application developed by Execute & Engrave LLC. This policy explains what data the app accesses, how it is used, and how it is protected. We built TrackMoto to work entirely on your device. We do not run servers that collect your data, and we do not sell or share your information with third parties.",
  },
  {
    title: "Data We Access",
    items: [
      { label: "Location / GPS", detail: "Accessed only when the GPS Speedometer feature is actively in use. Used solely to calculate real-time speed and session statistics. Never transmitted off your device." },
      { label: "Mileage entries", detail: "Dates, distances, and notes you manually enter. Stored locally on your device only." },
      { label: "Receipt photos", detail: "Images you capture or upload for expense tracking. Stored locally on your device only." },
      { label: "Expense categories and amounts", detail: "Optional fields you choose to fill in. Stored locally on your device only." },
    ],
  },
  {
    title: "How Your Data Is Stored",
    content:
      "All data is stored exclusively on your device using local storage (AsyncStorage). TrackMoto has no backend, no cloud sync, and no account system. Your data never leaves your phone unless you choose to export or share it yourself.",
  },
  {
    title: "Data Sharing",
    content:
      "We do not share, sell, rent, or transmit your personal data to any third party — ever. TrackMoto does not include advertising SDKs, analytics trackers, or any third-party data collection libraries.",
  },
  {
    title: "Permissions Requested",
    items: [
      { label: "Location (Fine / GPS)", detail: "Required for the speedometer feature. You may deny this permission; all other app features will continue to work normally." },
      { label: "Camera / Photo Library", detail: "Required to capture or attach receipt images. Optional use only." },
    ],
  },
  {
    title: "Data Retention & Deletion",
    content:
      "You are in full control of your data at all times. Any mileage entry, receipt, or expense record can be deleted from within the app. Uninstalling TrackMoto removes all locally stored data from your device.",
  },
  {
    title: "Children's Privacy",
    content:
      "TrackMoto is not directed at children under the age of 13. We do not knowingly collect any information from children. If you believe a child has provided personal information through this app, please contact us and we will take appropriate action.",
  },
  {
    title: "Changes to This Policy",
    content:
      "If we update this policy, we will revise the effective date at the top of this page. Continued use of TrackMoto following any update constitutes your acceptance of the revised policy.",
  },
];

export default function PrivacyPolicy() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500&family=Source+Serif+4:ital,wght@0,300;0,400;0,600;1,400&family=Playfair+Display:wght@400;500;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    document.title = "Privacy Policy — TrackMoto";
  }, []);

  return (
    <div style={{ background: "#000", color: "#FFF", minHeight: "100vh", margin: 0, padding: 0 }}>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { margin: 0; padding: 0; -webkit-font-smoothing: antialiased; }
        ::selection { background: #FF6B35; color: #FFF; }
      `}</style>

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "#000", borderBottom: "1px solid #222",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 clamp(20px, 4vw, 60px)", height: 56,
      }}>
        <a href="/" style={{
          fontFamily: "'IBM Plex Mono', monospace", fontSize: 13,
          letterSpacing: "0.15em", textTransform: "uppercase",
          color: "#FFF", textDecoration: "none",
          transition: "color 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#FF6B35")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#FFF")}
        >
          ← Execute &amp; Engrave
        </a>
        <span style={{
          fontFamily: "'IBM Plex Mono', monospace", fontSize: 11,
          letterSpacing: "0.15em", textTransform: "uppercase", color: "#555",
        }}>
          TrackMoto
        </span>
      </nav>

      {/* ── HERO ── */}
      <header style={{
        padding: "120px clamp(24px, 6vw, 120px) 64px",
        borderBottom: "1px solid #222",
      }}>
        <p style={{
          fontFamily: "'IBM Plex Mono', monospace", fontSize: 11,
          letterSpacing: "0.2em", textTransform: "uppercase",
          color: "#FF6B35", marginBottom: 20,
        }}>
          Execute &amp; Engrave LLC
        </p>
        <h1 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 400,
          lineHeight: 1.05, color: "#FFF", margin: "0 0 24px",
          letterSpacing: "-0.02em",
        }}>
          Privacy Policy
        </h1>
        <p style={{
          fontFamily: "'IBM Plex Mono', monospace", fontSize: 12,
          color: "#555", letterSpacing: "0.08em",
        }}>
          Effective Date: June 11, 2025 &nbsp;·&nbsp; Last Updated: June 11, 2025
        </p>
      </header>

      {/* ── CONTENT ── */}
      <main style={{ maxWidth: 800, margin: "0 auto", padding: "64px clamp(24px, 6vw, 80px) 100px" }}>
        {SECTIONS.map((section, i) => (
          <div key={i} style={{ marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid #222" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <span style={{
                fontFamily: "'IBM Plex Mono', monospace", fontSize: 11,
                color: VIVID[i % 5], letterSpacing: "0.1em",
              }}>
                0{i + 1}
              </span>
              <div style={{ width: 32, height: 1, background: VIVID[i % 5] }} />
              <h2 style={{
                fontFamily: "'IBM Plex Mono', monospace", fontSize: 12,
                fontWeight: 500, letterSpacing: "0.14em",
                textTransform: "uppercase", color: "#FFF",
              }}>
                {section.title}
              </h2>
            </div>

            {section.content && (
              <p style={{
                fontFamily: "'Source Serif 4', Georgia, serif",
                fontSize: 15, lineHeight: 1.75, color: "#999",
              }}>
                {section.content}
              </p>
            )}

            {section.items && (
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 16 }}>
                {section.items.map((item, j) => (
                  <li key={j} style={{
                    paddingLeft: 16,
                    borderLeft: `2px solid ${VIVID[i % 5]}55`,
                  }}>
                    <span style={{
                      fontFamily: "'IBM Plex Mono', monospace", fontSize: 12,
                      color: VIVID[i % 5], display: "block", marginBottom: 4,
                      letterSpacing: "0.05em",
                    }}>
                      {item.label}
                    </span>
                    <span style={{
                      fontFamily: "'Source Serif 4', Georgia, serif",
                      fontSize: 14, lineHeight: 1.7, color: "#777",
                    }}>
                      {item.detail}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {/* ── CONTACT ── */}
        <div style={{
          background: "#111", border: "1px solid #222",
          padding: "32px", marginTop: 8,
        }}>
          <h2 style={{
            fontFamily: "'IBM Plex Mono', monospace", fontSize: 12,
            fontWeight: 500, letterSpacing: "0.14em",
            textTransform: "uppercase", color: "#FFF", marginBottom: 20,
          }}>
            Contact
          </h2>
          <p style={{
            fontFamily: "'Source Serif 4', Georgia, serif",
            fontSize: 15, color: "#999", marginBottom: 12,
          }}>
            Questions or concerns about this privacy policy? Reach out:
          </p>
          <p style={{
            fontFamily: "'IBM Plex Mono', monospace", fontSize: 13,
            color: "#FFF", lineHeight: 2,
          }}>
            Execute &amp; Engrave LLC<br />
            <a href="mailto:info@execute-engrave.com" style={{
              color: "#FF6B35", textDecoration: "none",
              borderBottom: "1px solid #FF6B3555",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#FF6B35")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#FF6B3555")}
            >
              info@execute-engrave.com
            </a>
          </p>
        </div>
      </main>

      {/* ── FOOTER ── */}
      <footer style={{
        padding: "24px clamp(24px, 6vw, 120px)",
        borderTop: "1px solid #222",
        display: "flex", justifyContent: "space-between",
        alignItems: "center", flexWrap: "wrap", gap: 12,
      }}>
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: "#555", letterSpacing: "0.08em" }}>
          © 2025 Execute &amp; Engrave LLC — All rights reserved
        </span>
        <a href="/" style={{
          fontFamily: "'IBM Plex Mono', monospace", fontSize: 11,
          color: "#555", letterSpacing: "0.08em", textDecoration: "none",
          transition: "color 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#FF6B35")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
        >
          execute-engrave.com ↗
        </a>
      </footer>
    </div>
  );
}
