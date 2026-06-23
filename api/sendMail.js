import axios from "axios";

/**
 * URL of the external email microservice.
 * Set VITE_ASSIST_EMAIL_URL in .env (see .env.example).
 *
 * Expected contract:
 *   POST { subject?, text, from? }
 *   Optional header: Authorization: Bearer {EMAIL_API_KEY}
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

  const apiKey = process.env.EMAIL_API_KEY || "";
  const { name, email, subject, message } = formData;
  const payload = {
    subject,
    text: message,
    from: name && email ? `${name} <${email}>` : (email || undefined),
  };
  return axios.post(url, payload, {
    headers: {
      "Content-Type": "application/json",
      ...(apiKey && { Authorization: `Bearer ${apiKey}` }),
    },
  });
}
