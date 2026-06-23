/** @jest-environment node */
import axios from "axios";
import sendMail, { getEmailUrl } from "../sendMail";

jest.mock("axios");

describe("sendMail client", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    process.env.VITE_ASSIST_EMAIL_URL = "http://localhost:32636/sendEmail";
    delete process.env.EMAIL_API_KEY;
  });

  it("resolves the configured email URL", () => {
    expect(getEmailUrl()).toBe("http://localhost:32636/sendEmail");
  });

  it("posts transformed payload to the email microservice", async () => {
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
      {
        subject: "Hi",
        text: "Hello there",
        from: "Jane <jane@example.com>",
      },
      { headers: { "Content-Type": "application/json" } },
    );
    expect(response.data.success).toBe(true);
  });

  it("includes Authorization header when EMAIL_API_KEY is set", async () => {
    process.env.EMAIL_API_KEY = "test-key";
    axios.post.mockResolvedValue({ status: 200, data: { success: true } });

    await sendMail({
      name: "Jane",
      email: "jane@example.com",
      message: "Hello",
    });

    expect(axios.post).toHaveBeenCalledWith(
      expect.any(String),
      expect.any(Object),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer test-key",
        },
      },
    );
  });

  it("throws when no email URL is configured", async () => {
    delete process.env.VITE_ASSIST_EMAIL_URL;
    await expect(sendMail({ name: "Jane", email: "j@x.com", message: "Hi" })).rejects.toThrow(
      /VITE_ASSIST_EMAIL_URL is not configured/i,
    );
  });
});
