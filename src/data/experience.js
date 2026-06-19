import { C } from "../theme/colors";

export const EXPERIENCE = [
  {
    company: "Visible Supply Chain (Maersk)",
    role: "Supply Chain / Integrations Specialist",
    period: "Feb 2023 — Dec 2023",
    accent: C.teal,
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
    accent: C.forest,
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
    accent: C.vermillion,
    bullets: [
      "Built 3 production-ready full-stack applications during professional development period",
      "Pursuing CompTIA Cloud+ and AWS Solutions Architect certifications",
      "Architected multi-AI platform integrating OpenAI, Gemini, and Claude APIs",
      "Containerized all projects with Docker for consistent deployment pipelines",
    ],
  },
];
