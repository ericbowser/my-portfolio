import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactForm from "../contact/ContactForm";

jest.mock("../../../api/sendMail", () => ({
  __esModule: true,
  default: jest.fn(),
}));

import sendMail from "../../../api/sendMail";

describe("ContactForm", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("shows validation errors for an empty submission", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.click(screen.getByRole("button", { name: /send message/i }));

    expect(await screen.findByText("Name is required")).toBeInTheDocument();
    expect(screen.getByText("Email is required")).toBeInTheDocument();
    expect(screen.getByText("Message is required")).toBeInTheDocument();
    expect(sendMail).not.toHaveBeenCalled();
  });

  it("submits valid form data to the email API", async () => {
    sendMail.mockResolvedValue({ data: { success: true } });
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.type(screen.getByLabelText(/name/i), "Jane Doe");
    await user.type(screen.getByLabelText(/^email$/i), "jane@example.com");
    await user.type(screen.getByLabelText(/message/i), "Let's connect.");
    await user.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect(sendMail).toHaveBeenCalledWith(
        expect.objectContaining({
          name: "Jane Doe",
          email: "jane@example.com",
          message: "Let's connect.",
        }),
      );
    });

    expect(await screen.findByTestId("contact-success")).toBeInTheDocument();
  });

  it("shows an error when the API request fails", async () => {
    sendMail.mockRejectedValue(new Error("Network error"));
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.type(screen.getByLabelText(/name/i), "Jane Doe");
    await user.type(screen.getByLabelText(/^email$/i), "jane@example.com");
    await user.type(screen.getByLabelText(/message/i), "Hello");
    await user.click(screen.getByRole("button", { name: /send message/i }));

    expect(await screen.findByTestId("contact-submit-error")).toBeInTheDocument();
  });
});
