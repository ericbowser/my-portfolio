export function validateContactForm({ name, email, message }) {
  const errors = {};
  if (!name?.trim()) errors.name = "Name is required";
  if (!email?.trim()) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = "Email address is invalid";
  }
  if (!message?.trim()) errors.message = "Message is required";
  return errors;
}

export function isContactFormValid(fields) {
  return Object.keys(validateContactForm(fields)).length === 0;
}
