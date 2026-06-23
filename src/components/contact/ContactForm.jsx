import { useState } from "react";
import sendMail from "../../../api/sendMail";
import { C } from "../../theme/colors";
import { mono, sans, body, type } from "../../theme/typography";
import { validateContactForm } from "../../utils/validateContactForm";

const INITIAL_FORM = { name: "", email: "", subject: "", message: "" };

export default function ContactForm() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [submitError, setSubmitError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
    if (submitError) setSubmitError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validateContactForm(formData);
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setStatus("submitting");
    setSubmitError("");

    try {
      await sendMail(formData);
      setStatus("success");
      setFormData(INITIAL_FORM);
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setSubmitError("Unable to send your message. Please try again or email info@execute-engrave.com directly.");
    }
  };

  if (status === "success") {
    return (
      <div data-testid="contact-success" style={{ maxWidth: 520, padding: "24px 0" }}>
        <p style={{ ...body, margin: 0 }}>
          Message sent — thank you. I&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  const fieldStyle = (hasError) => ({
    width: "100%",
    fontFamily: sans,
    fontSize: type.bodySm,
    padding: "12px 14px",
    background: C.surface,
    border: `1px solid ${hasError ? C.vermillion : C.border}`,
    color: C.text,
    outline: "none",
  });

  const labelStyle = {
    display: "block",
    fontFamily: mono,
    fontSize: type.labelSm,
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: C.textMuted,
    marginBottom: 8,
  };

  return (
    <form
      onSubmit={handleSubmit}
      data-testid="contact-form"
      style={{ maxWidth: 520, display: "flex", flexDirection: "column", gap: 20 }}
      noValidate
    >
      <div>
        <label htmlFor="contact-name" style={labelStyle}>Name</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          style={fieldStyle(errors.name)}
          placeholder="Your name"
        />
        {errors.name && <p style={{ color: C.vermillion, fontSize: 13, marginTop: 6 }}>{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="contact-email" style={labelStyle}>Email</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          style={fieldStyle(errors.email)}
          placeholder="you@example.com"
        />
        {errors.email && <p style={{ color: C.vermillion, fontSize: 13, marginTop: 6 }}>{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="contact-subject" style={labelStyle}>Subject</label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          style={fieldStyle(false)}
          placeholder="Optional"
        />
      </div>

      <div>
        <label htmlFor="contact-message" style={labelStyle}>Message</label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          style={{ ...fieldStyle(errors.message), resize: "vertical" }}
          placeholder="Your message"
        />
        {errors.message && <p style={{ color: C.vermillion, fontSize: 13, marginTop: 6 }}>{errors.message}</p>}
      </div>

      {submitError && (
        <p data-testid="contact-submit-error" style={{ color: C.vermillion, fontSize: 14, margin: 0 }}>
          {submitError}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        style={{
          alignSelf: "flex-start",
          fontFamily: mono,
          fontSize: type.labelSm,
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: C.text,
          background: "transparent",
          border: `1px solid ${C.border}`,
          padding: "14px 32px",
          cursor: status === "submitting" ? "wait" : "pointer",
          opacity: status === "submitting" ? 0.6 : 1,
        }}
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
