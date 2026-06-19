import axios from "axios";

/**
 * URL of the external email microservice.
 * Set VITE_ASSIST_EMAIL_URL in .env (see .env.example).
 *
 * Expected contract:
 *   POST { name, email, subject?, message }
 *   → 200 { success: true }
 */
export function getEmailUrl() {
  return process.env.VITE_ASSIST_EMAIL_URL || "";
}

export default async function sendMail(formData, url = getEmailUrl()) {
  if (!url) {
    throw new Error(
      "VITE_ASSIST_EMAIL_URL is not configured. Point it at your email microservice.",
    );
  }

  return axios.post(url, { ...formData }, {
    headers: { "Content-Type": "application/json" },
  });
}
