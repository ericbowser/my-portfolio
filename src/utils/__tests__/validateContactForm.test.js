import { isContactFormValid, validateContactForm } from "../validateContactForm";

describe("validateContactForm", () => {
  it("flags missing required fields", () => {
    const errors = validateContactForm({ name: "", email: "", message: "" });
    expect(errors).toEqual({
      name: "Name is required",
      email: "Email is required",
      message: "Message is required",
    });
  });

  it("flags invalid email addresses", () => {
    const errors = validateContactForm({
      name: "Eric",
      email: "not-an-email",
      message: "Hello",
    });
    expect(errors.email).toBe("Email address is invalid");
  });

  it("returns true when the form is valid", () => {
    expect(isContactFormValid({
      name: "Eric",
      email: "eric@example.com",
      message: "Hello",
    })).toBe(true);
  });
});
