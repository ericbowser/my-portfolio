import { C } from "../theme/colors";

/** Headline stack — visible at a glance without scrolling */
export const CORE_STACK = [
  { label: "C# / .NET", accent: C.vermillion },
  { label: "React", accent: C.teal },
  { label: "TypeScript", accent: C.forest },
  { label: "Node.js", accent: C.amber },
  { label: "Azure", accent: C.vermillion },
  { label: "Docker", accent: C.teal },
  { label: "PostgreSQL", accent: C.forest },
  { label: "React Native", accent: C.amber },
];

/** Compact category rows — horizontal chips, no long vertical lists */
export const SKILL_CATEGORIES = [
  {
    id: "backend",
    label: "Backend",
    accent: C.vermillion,
    skills: ["ASP.NET Core", "Web API", "Express", "Entity Framework", "Dapper", "REST / OpenAPI"],
  },
  {
    id: "frontend",
    label: "Frontend",
    accent: C.teal,
    skills: ["Tailwind CSS", "WPF / MVVM", "Vite", "Responsive UI", "Component Libraries"],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    accent: C.forest,
    skills: ["Azure Functions", "Cosmos DB", "GitHub Actions", "Azure DevOps", "NGINX", "CI/CD"],
  },
  {
    id: "practices",
    label: "Data & Practices",
    accent: C.amber,
    skills: ["SQL Server", "JWT / Auth0", "Microservices", "TDD / Jest", "SOLID", "Performance Tuning"],
  },
];
