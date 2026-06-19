import { render, screen } from "@testing-library/react";
import Portfolio from "../Portfolio";

jest.mock("../../hooks/useScrollSpy", () => ({
  useScrollSpy: () => ({
    active: "about",
    scrollTo: jest.fn(),
  }),
}));

jest.mock("../layout/SparkleBackground", () => () => null);

describe("Portfolio", () => {
  it("renders primary navigation and sections", () => {
    render(<Portfolio />);

    expect(screen.getAllByText(/Eric Bowser/i).length).toBeGreaterThan(0);
    expect(screen.getByRole("button", { name: "About" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Experience" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Projects" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Skills" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Contact" })).toBeInTheDocument();
    expect(screen.getByText(/Let's build/i)).toBeInTheDocument();
    expect(screen.getByTestId("contact-form")).toBeInTheDocument();
  });
});
