import { render, screen } from "@testing-library/react";
import HeroSection from "../sections/HeroSection";

jest.mock("../skills/SkillsPanel", () => () => <div data-testid="skills-panel" />);
jest.mock("../ui/Reveal", () => ({ children }) => <div>{children}</div>);

describe("HeroSection", () => {
  it("renders the hero name, role, and skills panel", () => {
    render(<HeroSection />);

    expect(screen.getByText(/Full Stack Software Engineer/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Eric");
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Bowser");
    expect(screen.getByTitle("Ryan")).toHaveTextContent("R");
    expect(screen.getByRole("link", { name: /github/i })).toBeInTheDocument();
    expect(screen.getByTestId("skills-panel")).toBeInTheDocument();
  });
});
