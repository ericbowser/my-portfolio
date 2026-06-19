import { C } from "../../theme/colors";

export default function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;600;700&family=Inter:wght@400;500;600&display=swap');
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      html { scroll-behavior: smooth; background: ${C.void}; }
      body {
        margin: 0;
        padding: 0;
        font-family: 'Inter', system-ui, sans-serif;
        font-weight: 400;
        color: ${C.text};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
        background: ${C.void};
      }
      ::selection { background: ${C.vermillion}; color: ${C.white}; }
      @media (max-width: 640px) {
        nav { padding: 0 16px !important; }
        nav > div:last-child { gap: 14px !important; }
        nav > div:last-child button { font-size: 9px !important; letter-spacing: 0.04em !important; }
      }
    `}</style>
  );
}
