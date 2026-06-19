import { useEffect, useState } from "react";
import { NAV_ITEMS } from "../../data/navigation";
import { ACCENT_CYCLE, C } from "../../theme/colors";
import { mono } from "../../theme/typography";

export default function Nav({ active, onNav }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: "rgba(10, 10, 10, 0.85)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      borderBottom: `1px solid ${C.border}`,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0 clamp(20px, 4vw, 60px)", height: 52,
      transition: "box-shadow 0.3s",
      boxShadow: scrolled ? "0 1px 0 rgba(255,255,255,0.04)" : "none",
    }}>
      <span style={{
        fontFamily: mono, fontSize: 12, fontWeight: 700,
        letterSpacing: "0.18em", textTransform: "uppercase", color: C.text,
      }}>
        Eric Bowser
      </span>
      <div style={{ display: "flex", gap: 32 }}>
        {NAV_ITEMS.map((item, i) => {
          const id = item.toLowerCase();
          const isActive = active === id;
          return (
            <button
              key={item}
              type="button"
              onClick={() => onNav(id)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                fontFamily: mono, fontSize: 12,
                fontWeight: isActive ? 600 : 400,
                letterSpacing: "0.1em", textTransform: "uppercase",
                color: isActive ? C.text : C.textMuted,
                padding: "4px 0",
                borderBottom: isActive ? `2px solid ${ACCENT_CYCLE[i % 4]}` : "2px solid transparent",
                transition: "color 0.2s, border-color 0.2s",
              }}
            >
              {item}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
