export const ACCENTS = {
  vermillion: "#D64933",
  teal: "#1B6B93",
  forest: "#2D8653",
  amber: "#C4841D",
};

export const WEB_PROJECTS = [
  {
    id: "docu-create",
    title: "DocuCreate",
    subtitle: "Rental Lease Generator",
    status: "live",
    featured: true,
    bento: "featured",
    accent: ACCENTS.teal,
    stack: ["React", "Node.js", "Stripe", "PDF Generation"],
    description:
      "Full-stack platform for creating, customizing, and signing rental lease agreements. Live product serving customers with secure document workflows and payment integration.",
    highlights: [
      "Wizard-driven lease creation with live preview",
      "Stripe checkout for document unlock and download",
      "Secure document access with recovery PIN flow",
      "Production deployment at docu-create.com",
    ],
    links: {
      github: "https://github.com/ericbowser/DocuCreate",
      live: "https://docu-create.com",
    },
  },
  {
    id: "affiliate",
    title: "Affiliate",
    subtitle: "Rockhound Utah — Field Guide & Commerce",
    status: "live",
    featured: false,
    bento: "wide",
    accent: ACCENTS.amber,
    stack: ["React", "Node.js", "Affiliate APIs", "Content CMS"],
    description:
      "Live web application for rockhoundutah.com — combining field guide content, affiliate integrations, and a polished reader experience for Utah rock collecting.",
    highlights: [
      "Production site at rockhoundutah.com",
      "Content-driven layout with affiliate monetization",
      "Responsive design for field and desktop use",
    ],
    links: {
      github: "https://github.com/ericbowser/Affiliate",
      live: "https://rockhoundutah.com",
    },
  },
  {
    id: "cloudprepper",
    title: "CloudPrepper",
    subtitle: "Cloud Certification Study Platform",
    status: "live",
    featured: false,
    bento: "wide",
    accent: ACCENTS.vermillion,
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker"],
    description:
      "Full-stack study platform for CompTIA Cloud+ and AWS certifications with spaced repetition, practice exams, and real-time progress analytics.",
    highlights: [
      "410+ question bank with Bloom's Taxonomy difficulty tracks",
      "JWT auth, admin panel, and Docker deployment",
      "Dual frontend and API repositories",
    ],
    links: {
      github: "https://github.com/ericbowser/CloudPrepper",
      backend: "https://github.com/ericbowser/cloud_prepper_api",
    },
  },
  {
    id: "nettrade",
    title: "NetTrade",
    subtitle: "Alpaca Markets Backtesting & Trading",
    status: "in-dev",
    featured: false,
    bento: "standard",
    accent: ACCENTS.forest,
    stack: [".NET", "Alpaca API", "Backtesting", "Trading Strategies"],
    description:
      "Backtesting and trading application powered by Alpaca.Markets. Strategy evaluation, paper trading workflows, and performance analytics for systematic trading.",
    highlights: [
      "Alpaca.Markets API integration",
      "Strategy backtesting engine",
      "Paper and live trading pipeline architecture",
    ],
    links: {
      github: "https://github.com/ericbowser/NetTrade",
    },
  },
  {
    id: "lasertags",
    title: "LaserTags",
    subtitle: "Smart Pet ID Tags & QR Profiles",
    status: "live",
    featured: false,
    bento: "standard",
    accent: ACCENTS.forest,
    stack: ["React", "Node.js", "PostgreSQL", "Docker", "JWT", "QR"],
    description:
      "End-to-end application for smart pet ID tags with QR code generation, owner contact profiles, and JWT-secured management.",
    highlights: [
      "QR profiles accessible without a dedicated app",
      "JWT authentication and PostgreSQL persistence",
      "Containerized deployment",
    ],
    links: {
      github: "https://github.com/ericbowser/LaserTags",
      backend: "https://github.com/ericbowser/backendlaser",
    },
  },
  {
    id: "boxes-js",
    title: "Boxes.js",
    subtitle: "Parametric Box Generator for Laser Cutting",
    status: "live",
    featured: false,
    bento: "standard",
    accent: ACCENTS.teal,
    stack: ["React 19", "Vite 7", "Tailwind CSS 4", "SVG"],
    description:
      "Browser-based parametric finger-joint box generator with live SVG preview, kerf compensation, and laser-ready export.",
    highlights: [
      "Pure geometry engine decoupled from UI",
      "Four edge joint types with kerf and play controls",
      "Validated with physical acrylic test cuts",
    ],
    links: {
      github: "https://github.com/ericbowser/Boxes.js",
    },
  },
  {
    id: "ai-assistant",
    title: "AI Assistant Suite",
    subtitle: "Multi-Provider AI Toolkit",
    status: "live",
    featured: false,
    bento: "standard",
    accent: ACCENTS.amber,
    stack: ["React", "TypeScript", "Node.js", "Express", "OpenAI", "Gemini", "Claude"],
    description:
      "Unified AI toolkit integrating OpenAI, Google Gemini, and Anthropic Claude with real-time streaming and secure API key management.",
    highlights: [
      "Multi-provider abstraction with streaming responses",
      "Secure backend gateway for API credentials",
      "TypeScript throughout",
    ],
    links: {
      github: "https://github.com/ericbowser/Assist",
      frontend: "https://github.com/ericbowser/AssistFront",
    },
  },
  {
    id: "portfolio",
    title: "Portfolio & Email Service",
    subtitle: "Containerized Microservices",
    status: "live",
    featured: false,
    bento: "standard",
    accent: ACCENTS.vermillion,
    stack: ["React", "Tailwind CSS", "Docker", "SendGrid", "NGINX"],
    description:
      "Production-grade portfolio with containerized email backend, NGINX reverse proxy, and SSL/TLS via Cloudflare.",
    highlights: [
      "Microservices architecture with Docker",
      "SendGrid email integration",
      "Cloudflare SSL termination",
    ],
    links: {
      live: "https://erb-think.com",
      github: "https://github.com/ericbowser/my-portfolio",
    },
  },
];

export const MOBILE_PROJECTS = [
  {
    id: "gig-app-switcher",
    title: "GigAppSwitcher",
    subtitle: "Gig Worker Command Center",
    status: "in-dev",
    platform: "Expo / React Native",
    accent: ACCENTS.amber,
    stack: ["React Native", "Expo", "Android", "Notifications"],
    description:
      "Android command center for gig workers — jump between DoorDash, Uber Eats, and Instacart with notification-based activity tracking. Currently in field testing.",
    highlights: [
      "Native notification listener for gig app activity",
      "Quick-launch between delivery platforms",
      "Field-tested APK via EAS build pipeline",
    ],
    links: {
      github: "https://github.com/ericbowser/GigAppSwitcher",
    },
  },
  {
    id: "trackmoto",
    title: "trackmoto",
    subtitle: "Motorcycle Tracking App",
    status: "coming-soon",
    platform: "React Native",
    accent: ACCENTS.teal,
    stack: ["React Native", "Android", "Google Play"],
    description:
      "React Native application for motorcycle enthusiasts — tracking rides, maintenance, and ride data. Preparing for Google Play Store deployment.",
    highlights: [
      "Mobile-first ride and maintenance tracking",
      "Google Play Store release in progress",
    ],
    links: {
      github: "https://github.com/ericbowser/trackmoto",
    },
  },
];

export const STATUS_LABELS = {
  live: { label: "Live", color: ACCENTS.forest },
  "in-dev": { label: "In Dev", color: ACCENTS.amber },
  "coming-soon": { label: "Soon", color: "#8A8A8A" },
};

export const LINK_LABELS = {
  github: "GitHub",
  live: "Live",
  backend: "API",
  frontend: "Frontend",
  playStore: "Play Store",
};
