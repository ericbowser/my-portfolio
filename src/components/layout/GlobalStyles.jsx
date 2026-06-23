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
        nav > div:last-child { gap: 10px !important; flex-wrap: wrap !important; justify-content: flex-end !important; }
        nav > div:last-child button { font-size: 11px !important; letter-spacing: 0.06em !important; }
        nav [data-testid="resume-download-nav"] a { font-size: 10px !important; padding: 6px 8px !important; }
      }
    `}</style>
  );
}
