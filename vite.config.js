import dotenv from "dotenv";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";

dotenv.config();

const host = process.env.HOST || "localhost";
const port = Number(process.env.PORT) || 3000;
const isDevelopment = process.env.NODE_ENV === "development";

export default defineConfig({
  plugins: [react()],
  envPrefix: ["VITE_"],
  define: {
    "process.env.VITE_ASSIST_EMAIL_URL": JSON.stringify(process.env.VITE_ASSIST_EMAIL_URL || ""),
    "process.env.EMAIL_API_KEY": JSON.stringify(process.env.EMAIL_API_KEY || ""),
  },
  build: {
    outDir: "dist",
    sourcemap: isDevelopment,
  },
  server: {
    port,
    host,
    open: false,
    ...(isDevelopment ? {} : {
      https: {
        cert: "ssl/server.crt",
        key: "ssl/server.key",
      },
    }),
  },
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
});
