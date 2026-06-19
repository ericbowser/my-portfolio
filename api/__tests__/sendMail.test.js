/** @jest-environment node */
import axios from "axios";
import sendMail, { getEmailUrl } from "../sendMail";

jest.mock("axios");

describe("sendMail client", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    process.env.VITE_ASSIST_EMAIL_URL = "http://localhost:32636/sendEmail";
  });

  it("resolves the configured email URL", () => {
    expect(getEmailUrl()).toBe("http://localhost:32636/sendEmail");
  });

  it("posts form data to the email API", async () => {
    axios.post.mockResolvedValue({ status: 200, data: { success: true } });

    const formData = {
      name: "Jane",
      email: "jane@example.com",
      subject: "Hi",
      message: "Hello there",
    };

    const response = await sendMail(formData);

    expect(axios.post).toHaveBeenCalledWith(
      "http://localhost:32636/sendEmail",
      formData,
      { headers: { "Content-Type": "application/json" } },
    );
    expect(response.data.success).toBe(true);
  });

  it("throws when no email URL is configured", async () => {
    delete process.env.VITE_ASSIST_EMAIL_URL;
    await expect(sendMail({ name: "Jane", email: "j@x.com", message: "Hi" })).rejects.toThrow(
      /VITE_ASSIST_EMAIL_URL is not configured/i,
    );
  });
});
