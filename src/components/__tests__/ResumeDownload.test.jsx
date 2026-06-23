import { render, screen } from "@testing-library/react";
import ResumeDownload from "../ui/ResumeDownload";

describe("ResumeDownload", () => {
  it("renders PDF and DOCX download links in hero variant", () => {
    render(<ResumeDownload variant="hero" />);

    expect(screen.getByTestId("resume-download-hero")).toBeInTheDocument();
    expect(screen.getByLabelText("Download resume as PDF")).toHaveAttribute(
      "download",
      "Eric_Bowser_Resume_2026.pdf",
    );
    expect(screen.getByLabelText("Download resume as DOCX")).toHaveAttribute(
      "download",
      "Eric_Bowser_Resume_2026.docx",
    );
  });

  it("renders compact nav variant", () => {
    render(<ResumeDownload variant="nav" />);

    expect(screen.getByTestId("resume-download-nav")).toBeInTheDocument();
    expect(screen.getAllByRole("link")).toHaveLength(2);
  });
});
