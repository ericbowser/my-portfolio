import { useState, useEffect, useRef, useCallback } from "react";

// ─── VIBRANT PALETTE ────────────────────────────────────
// Base B&W canvas. Color arrives as sparkle + light.
// Vivid 1:  #00E5A0  (electric green)
// Vivid 2:  #FF6B35  (hot coral)
// Vivid 3:  #3B82F6  (bright blue)
// Vivid 4:  #E040FB  (vivid magenta)
// Vivid 5:  #FACC15  (golden yellow)

const VIVID = ["#00E5A0", "#FF6B35", "#3B82F6", "#E040FB", "#FACC15"];

// ─── DATA ───────────────────────────────────────────────

const EXPERIENCE = [
  {
    company: "Visible Supply Chain (Maersk)",
    role: "Supply Chain / Integrations Specialist",
    period: "Feb 2023 — Dec 2023",
    color: "#3B82F6",
    bullets: [
      "Migrated .NET Standard 4.61 hybrid app to .NET Core 7.0 for Azure deployment",
      "Reduced API response times by 40% through strategic caching and LINQ optimization",
      "Architected PostgreSQL → Azure Cosmos DB migration with zero downtime",
      "Built multithreaded carrier API integration system (USPS, FedEx) with retry logic",
    ],
  },
  {
    company: "Willis Towers Watson",
    role: "Full Stack Software Engineer",
    period: "2016 — Aug 2022",
    color: "#00E5A0",
    bullets: [
      "Led migration of legacy .NET applications to .NET Core, improving performance 30%",
      "Developed 50+ reusable React/TypeScript components for enterprise UI library",
      "Architected RESTful APIs with Auth0, JWT, and Microsoft Identity",
      "Established coding standards reducing frontend development time by 25%",
    ],
  },
  {
    company: "Independent Developer & Cloud Architect",
    role: "Execute & Engrave LLC",
    period: "Jan 2024 — Present",
    color: "#FF6B35",
    bullets: [
      "Built 3 production-ready full-stack applications during professional development period",
      "Pursuing CompTIA Cloud+ and AWS Solutions Architect certifications",
      "Architected multi-AI platform integrating OpenAI, Gemini, and Claude APIs",
      "Containerized all projects with Docker for consistent deployment pipelines",
    ],
  },
];

const PROJECTS = [
  {
    title: "CloudPrepper",
    subtitle: "Cloud Certification Study Platform",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker"],
    splash: "#00E5A0",
    description:
      "Full-stack study platform for CompTIA Cloud+ and AWS certifications. Implements spaced repetition algorithms, practice exams, and real-time progress analytics.",
    links: {
      frontend: "https://github.com/ericbowser/CloudPrepper",
      backend: "https://github.com/ericbowser/cloud_prepper_api",
    },
  },
  {
    title: "AI Assistant Suite",
    subtitle: "Multi-Provider AI Toolkit",
    stack: ["React", "TypeScript", "Node.js", "Express", "API Integration"],
    splash: "#E040FB",
    description:
      "Unified AI toolkit integrating OpenAI, Google Gemini, and Anthropic Claude. Features real-time streaming, prompt engineering patterns, and secure API key management.",
    links: {
      frontend: "https://github.com/ericbowser/AssistFront",
      backend: "https://github.com/ericbowser/Assist",
    },
  },
  {
    title: "Pet ID Tags",
    subtitle: "Full-Stack QR Application",
    stack: ["React", "Node.js", "PostgreSQL", "Docker", "JWT"],
    splash: "#3B82F6",
    description:
      "End-to-end application for smart pet ID tags with QR code generation, JWT authentication, and containerized microservices deployment.",
    links: {
      frontend: "https://github.com/ericbowser/LaserTags",
      backend: "https://github.com/ericbowser/backendlaser",
    },
  },
  {
    title: "Portfolio & Email Service",
    subtitle: "Containerized Microservices",
    stack: ["React", "Tailwind CSS", "Docker", "SendGrid", "NGINX"],
    splash: "#FF6B35",
    description:
      "Production-grade portfolio with containerized email backend. Demonstrates microservices architecture, NGINX reverse proxy, and SSL/TLS via Cloudflare.",
    links: {
      live: "https://erb-think.com",
      github: "https://github.com/ericbowser/my-portfolio",
    },
  },
];

const SKILLS = {
  "Languages & Frameworks": {
    color: "#00E5A0",
    items: [
      "C# / .NET Core 8", "ASP.NET Core Web API", "React.js", "TypeScript",
      "Node.js / Express", "WPF / MVVM", "HTML5 / CSS3", "Tailwind CSS",
    ],
  },
  "Cloud & DevOps": {
    color: "#FF6B35",
    items: [
      "Azure App Service", "Azure Functions", "Cosmos DB", "Docker",
      "GitHub Actions", "Azure DevOps", "TeamCity", "NGINX",
    ],
  },
  "Data & Security": {
    color: "#3B82F6",
    items: [
      "SQL Server / T-SQL", "PostgreSQL", "Entity Framework Core", "Dapper",
      "JWT / Auth0", "OAuth2 / OIDC", "Key Vault", "SSL / TLS",
    ],
  },
  Practices: {
    color: "#E040FB",
    items: [
      "REST / OpenAPI", "Microservices", "SOLID Principles", "TDD / xUnit / Jest",
      "Agile / Scrum", "CI/CD Pipelines", "Design Patterns", "Performance Tuning",
    ],
  },
};

// ─── SPARKLE CANVAS (HERO BACKGROUND) ───────────────────

function SparkleCanvas() {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const animRef = useRef(null);
  const mouse = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w, h;

    const resize = () => {
      w = canvas.width = canvas.parentElement.offsetWidth;
      h = canvas.height = canvas.parentElement.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const count = 80;
    particles.current = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 3 + 1,
      color: VIVID[Math.floor(Math.random() * VIVID.length)],
      alpha: Math.random() * 0.6 + 0.2,
      twinkleSpeed: Math.random() * 0.02 + 0.01,
      twinkleOffset: Math.random() * Math.PI * 2,
      life: 1,
    }));

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    canvas.addEventListener("mousemove", handleMouseMove);

    let frame = 0;
    const loop = () => {
      ctx.clearRect(0, 0, w, h);
      frame++;

      particles.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        const dx = p.x - mouse.current.x;
        const dy = p.y - mouse.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150 && dist > 0) {
          const force = (150 - dist) / 150 * 0.5;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }

        p.vx *= 0.99;
        p.vy *= 0.99;

        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        const twinkle = Math.sin(frame * p.twinkleSpeed + p.twinkleOffset);
        const alpha = p.alpha * (0.5 + twinkle * 0.5);

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(frame * 0.005 + p.twinkleOffset);
        ctx.globalAlpha = alpha;

        const s = p.size * (0.8 + twinkle * 0.4);

        ctx.shadowBlur = s * 4;
        ctx.shadowColor = p.color;

        ctx.beginPath();
        ctx.moveTo(0, -s * 2);
        ctx.lineTo(s * 0.4, -s * 0.4);
        ctx.lineTo(s * 2, 0);
        ctx.lineTo(s * 0.4, s * 0.4);
        ctx.lineTo(0, s * 2);
        ctx.lineTo(-s * 0.4, s * 0.4);
        ctx.lineTo(-s * 2, 0);
        ctx.lineTo(-s * 0.4, -s * 0.4);
        ctx.closePath();
        ctx.fillStyle = p.color;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(0, 0, s * 0.3, 0, Math.PI * 2);
        ctx.fillStyle = "#FFF";
        ctx.globalAlpha = alpha * 0.8;
        ctx.fill();

        ctx.restore();
      });

      ctx.globalAlpha = 0.06;
      ctx.strokeStyle = "#FFF";
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.current.length; i++) {
        for (let j = i + 1; j < particles.current.length; j++) {
          const a = particles.current[i];
          const b = particles.current[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 120) {
            ctx.globalAlpha = 0.06 * (1 - d / 120);
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      animRef.current = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute", inset: 0, width: "100%", height: "100%",
        pointerEvents: "auto", zIndex: 0,
      }}
    />
  );
}

// ─── SPARKLE TRAIL (on hover for cards) ─────────────────

function useSparkleTrail(color) {
  const containerRef = useRef(null);
  const sparklesRef = useRef([]);
  const [, forceUpdate] = useState(0);
  const lastSpawn = useRef(0);

  const handleMouseMove = useCallback((e) => {
    const now = Date.now();
    if (now - lastSpawn.current < 40) return;
    lastSpawn.current = now;

    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const sparkle = {
      id: now + Math.random(),
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      color: VIVID[Math.floor(Math.random() * VIVID.length)],
      size: Math.random() * 6 + 3,
      rotation: Math.random() * 360,
      createdAt: now,
    };
    sparklesRef.current = [...sparklesRef.current.filter(s => now - s.createdAt < 700), sparkle];
    forceUpdate(n => n + 1);
  }, []);

  const sparkleElements = sparklesRef.current.map((s) => {
    const age = (Date.now() - s.createdAt) / 700;
    return (
      <div
        key={s.id}
        style={{
          position: "absolute",
          left: s.x,
          top: s.y,
          width: s.size,
          height: s.size,
          pointerEvents: "none",
          zIndex: 10,
          transform: `translate(-50%, -50%) scale(${1 - age}) rotate(${s.rotation + age * 180}deg)`,
          opacity: 1 - age,
        }}
      >
        <svg viewBox="0 0 24 24" style={{ width: "100%", height: "100%" }}>
          <path
            d="M12 0L14.2 8.5L24 12L14.2 15.5L12 24L9.8 15.5L0 12L9.8 8.5Z"
            fill={s.color}
          />
        </svg>
      </div>
    );
  });

  return { containerRef, handleMouseMove, sparkleElements };
}

// ─── REVEAL HOOK ────────────────────────────────────────

function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function Reveal({ children, delay = 0 }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ─── NAV ────────────────────────────────────────────────

function Nav({ active, onNav }) {
  const items = ["About", "Experience", "Projects", "Skills", "Contact"];
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: "#FFFFFF", borderBottom: "1px solid #000",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0 clamp(20px, 4vw, 60px)", height: 56,
    }}>
      <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 13, letterSpacing: "0.15em", textTransform: "uppercase" }}>
        Eric Bowser
      </span>
      <div style={{ display: "flex", gap: 28 }}>
        {items.map((it, i) => (
          <button key={it} onClick={() => onNav(it.toLowerCase())} style={{
            background: "none", border: "none", cursor: "pointer",
            fontFamily: "'IBM Plex Mono', monospace", fontSize: 12,
            letterSpacing: "0.1em", textTransform: "uppercase",
            color: active === it.toLowerCase() ? "#000" : "#888",
            borderBottom: active === it.toLowerCase() ? `2px solid ${VIVID[i % 5]}` : "2px solid transparent",
            paddingBottom: 2, transition: "color 0.2s, border-color 0.3s",
          }}>
            {it}
          </button>
        ))}
      </div>
    </nav>
  );
}

function SectionLabel({ number, label, dark = false }) {
  const idx = parseInt(number) - 1;
  const color = VIVID[idx >= 0 ? idx : 0];
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 48 }}>
      <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: dark ? "#666" : "#888", letterSpacing: "0.1em" }}>
        {number}
      </span>
      <div style={{ width: 40, height: 2, background: color }} />
      <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", color: dark ? "#FFF" : "#000" }}>
        {label}
      </span>
    </div>
  );
}

// ─── HERO ───────────────────────────────────────────────

function HeroSection() {
  return (
    <section id="about" style={{
      minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center",
      padding: "120px clamp(24px, 6vw, 120px) 80px", background: "#000",
      position: "relative", overflow: "hidden",
    }}>
      <SparkleCanvas />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Reveal>
          <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", color: "#666", marginBottom: 24 }}>
            Full Stack Software Engineer
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(48px, 8vw, 96px)", fontWeight: 400, lineHeight: 1.0, color: "#FFF", margin: 0, letterSpacing: "-0.02em" }}>
            Eric<br />Bowser
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <div style={{ maxWidth: 520, marginTop: 40 }}>
            <p style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 16, lineHeight: 1.7, color: "#AAA", margin: 0 }}>
              10+ years building mission-critical applications in C#/.NET, React,
              and Node.js. Specializing in performance optimization, cloud
              architecture, and full-stack modernization. Currently pursuing AWS
              and CompTIA Cloud+ certifications.
            </p>
          </div>
        </Reveal>
        <Reveal delay={300}>
          <div style={{ display: "flex", gap: 20, marginTop: 40, flexWrap: "wrap" }}>
            {[
              { label: "GitHub", href: "https://github.com/ericbowser" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/erbowser/" },
              { label: "Portfolio", href: "https://erb-think.com" },
            ].map((l, i) => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" style={{
                fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase",
                color: "#FFF", textDecoration: "none", borderBottom: `1px solid ${VIVID[i]}`, paddingBottom: 2, transition: "color 0.3s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = VIVID[i]; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "#FFF"; }}
              >
                {l.label} ↗
              </a>
            ))}
          </div>
        </Reveal>
        <Reveal delay={350}>
          <div style={{ display: "flex", gap: 0, marginTop: 56, fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, letterSpacing: "0.08em" }}>
            {["C# / .NET", "React", "TypeScript", "Azure", "Docker", "Node.js"].map((t, i) => (
              <span key={t} style={{ color: VIVID[i % 5], marginRight: 16 }}>
                {i > 0 && <span style={{ color: "#333", marginRight: 16 }}>·</span>}
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── EXPERIENCE ─────────────────────────────────────────

function ExperienceSection() {
  const [expanded, setExpanded] = useState(null);
  return (
    <section id="experience" style={{ padding: "100px clamp(24px, 6vw, 120px)", background: "#FFF", color: "#000" }}>
      <Reveal><SectionLabel number="01" label="Experience" /></Reveal>
      <div>
        {EXPERIENCE.map((exp, i) => (
          <Reveal key={i} delay={i * 100}>
            <div style={{ borderTop: `1px solid ${expanded === i ? exp.color : "#D0D0D0"}`, padding: "36px 0", cursor: "pointer", transition: "border-color 0.4s ease" }} onClick={() => setExpanded(expanded === i ? null : i)}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12 }}>
                <div>
                  <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 400, margin: 0, color: expanded === i ? exp.color : "#000", transition: "color 0.4s ease" }}>{exp.company}</h3>
                  <p style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 14, color: "#888", margin: "8px 0 0 0" }}>{exp.role}</p>
                </div>
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: "#888", letterSpacing: "0.05em", whiteSpace: "nowrap" }}>{exp.period}</span>
              </div>
              <div style={{ maxHeight: expanded === i ? 400 : 0, overflow: "hidden", transition: "max-height 0.4s ease" }}>
                <ul style={{ marginTop: 24, paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                  {exp.bullets.map((b, j) => (
                    <li key={j} style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 14, lineHeight: 1.6, color: "#555", paddingLeft: 16, borderLeft: `2px solid ${exp.color}` }}>{b}</li>
                  ))}
                </ul>
              </div>
              <span style={{ display: "inline-block", fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: expanded === i ? exp.color : "#888", marginTop: 16, letterSpacing: "0.1em", textTransform: "uppercase", transition: "color 0.3s" }}>
                {expanded === i ? "— Collapse" : "+ Details"}
              </span>
            </div>
          </Reveal>
        ))}
        <div style={{ borderTop: "1px solid #D0D0D0" }} />
      </div>
    </section>
  );
}

// ─── PROJECTS ───────────────────────────────────────────

function ProjectCard({ project, index }) {
  const { containerRef, handleMouseMove, sparkleElements } = useSparkleTrail(project.splash);
  const [hovered, setHovered] = useState(false);
  return (
    <Reveal delay={index * 80}>
      <div ref={containerRef} onMouseMove={handleMouseMove} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
        style={{ border: "1px solid #D0D0D0", padding: 32, cursor: "default", position: "relative", overflow: "hidden", transition: "border-color 0.3s, box-shadow 0.3s", borderColor: hovered ? project.splash : "#D0D0D0", boxShadow: hovered ? `0 0 30px ${project.splash}22, 0 0 60px ${project.splash}11` : "none", height: "100%", boxSizing: "border-box", background: "#FFF" }}>
        {sparkleElements}
        <div style={{ position: "absolute", inset: 0, background: project.splash, opacity: hovered ? 0.04 : 0, transition: "opacity 0.4s ease", pointerEvents: "none", zIndex: 0 }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: hovered ? project.splash : "#888", letterSpacing: "0.1em", transition: "color 0.3s" }}>0{index + 1}</span>
            <div style={{ display: "flex", gap: 12 }}>
              {Object.entries(project.links).map(([key, url]) => (
                <a key={key} href={url} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "#888", textDecoration: "none", borderBottom: "1px solid transparent", transition: "color 0.2s, border-color 0.2s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = project.splash; e.currentTarget.style.borderColor = project.splash; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "#888"; e.currentTarget.style.borderColor = "transparent"; }}>
                  {key} ↗
                </a>
              ))}
            </div>
          </div>
          <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 28, fontWeight: 400, margin: "20px 0 4px", color: "#000" }}>{project.title}</h3>
          <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: "#888", letterSpacing: "0.05em", margin: "0 0 16px" }}>{project.subtitle}</p>
          <p style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 14, lineHeight: 1.7, color: "#555", margin: "0 0 20px" }}>{project.description}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {project.stack.map((t) => (
              <span key={t} style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", padding: "4px 10px", border: `1px solid ${hovered ? project.splash + "66" : "#D0D0D0"}`, color: hovered ? project.splash : "#555", transition: "color 0.3s, border-color 0.3s" }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" style={{ padding: "100px clamp(24px, 6vw, 120px)", background: "#FFF" }}>
      <Reveal><SectionLabel number="02" label="Projects" /></Reveal>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 1, background: "#D0D0D0", border: "1px solid #D0D0D0" }}>
        {PROJECTS.map((p, i) => (
          <div key={i} style={{ background: "#FFF" }}><ProjectCard project={p} index={i} /></div>
        ))}
      </div>
    </section>
  );
}

// ─── SKILLS ─────────────────────────────────────────────

function SkillItem({ item, color }) {
  const [hovered, setHovered] = useState(false);
  return (
    <li onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 14, color: hovered ? color : "#333", paddingLeft: 12, borderLeft: hovered ? `2px solid ${color}` : "1px solid #D0D0D0", transition: "color 0.2s, border-left 0.2s", cursor: "default" }}>
      {item}
    </li>
  );
}

function SkillsSection() {
  return (
    <section id="skills" style={{ padding: "100px clamp(24px, 6vw, 120px)", background: "#F0F0F0" }}>
      <Reveal><SectionLabel number="03" label="Skills" /></Reveal>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 48 }}>
        {Object.entries(SKILLS).map(([category, { color, items }], ci) => (
          <Reveal key={category} delay={ci * 80}>
            <div>
              <h4 style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#000", margin: "0 0 20px", paddingBottom: 12, borderBottom: `2px solid ${color}` }}>{category}</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {items.map((item) => (<SkillItem key={item} item={item} color={color} />))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// ─── CONTACT ────────────────────────────────────────────

function ContactSection() {
  return (
    <section id="contact" style={{ padding: "100px clamp(24px, 6vw, 120px)", background: "#000", color: "#FFF", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "relative", zIndex: 1 }}>
        <Reveal><SectionLabel number="04" label="Contact" dark /></Reveal>
        <Reveal delay={100}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 400, lineHeight: 1.1, margin: "0 0 32px", maxWidth: 600 }}>
            Let's build something together.
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 16, lineHeight: 1.7, color: "#999", maxWidth: 480, margin: "0 0 40px" }}>
            Open to senior full-stack, cloud engineering, and .NET modernization roles. Available for contract work through Execute & Engrave LLC.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            {[
              { label: "GitHub", href: "https://github.com/ericbowser" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/erbowser/" },
              { label: "Email", href: "mailto:ericbowser@gmail.com" },
            ].map((l, i) => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" style={{
                fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase",
                color: "#FFF", textDecoration: "none", padding: "12px 28px", border: "1px solid #FFF",
                transition: "background 0.3s, color 0.3s, border-color 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = VIVID[i]; e.currentTarget.style.borderColor = VIVID[i]; e.currentTarget.style.boxShadow = `0 0 20px ${VIVID[i]}44`; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "#FFF"; e.currentTarget.style.boxShadow = "none"; }}>
                {l.label} ↗
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── FOOTER ─────────────────────────────────────────────

function Footer() {
  return (
    <footer style={{ padding: "24px clamp(24px, 6vw, 120px)", background: "#000", borderTop: "1px solid #222", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
      <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: "#555", letterSpacing: "0.08em" }}>© 2025 Eric Bowser — Execute & Engrave LLC</span>
      <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: "#555", letterSpacing: "0.08em" }}>Salt Lake City, UT</span>
    </footer>
  );
}

// ─── MAIN EXPORT ────────────────────────────────────────

export default function Portfolio() {
  const [active, setActive] = useState("about");

  const scrollTo = (id) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const ids = ["about", "experience", "projects", "skills", "contact"];
    const onScroll = () => {
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.getBoundingClientRect().top <= 120) { setActive(ids[i]); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ background: "#FFF", color: "#000", margin: 0, padding: 0, overflowX: "hidden" }}>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { margin: 0; padding: 0; -webkit-font-smoothing: antialiased; }
        ::selection { background: #E040FB; color: #FFF; }
        @media (max-width: 640px) {
          nav > div:last-child { gap: 16px !important; }
          nav > div:last-child button { font-size: 10px !important; }
        }
      `}</style>
      <Nav active={active} onNav={scrollTo} />
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}