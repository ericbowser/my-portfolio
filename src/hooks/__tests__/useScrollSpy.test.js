import { renderHook, act } from "@testing-library/react";
import { useScrollSpy } from "../useScrollSpy";

describe("useScrollSpy", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="about" style="height: 100px"></div>
      <div id="experience" style="height: 100px"></div>
    `;

    Element.prototype.getBoundingClientRect = jest.fn(function mockRect() {
      const tops = { about: 0, experience: 200 };
      return { top: tops[this.id] ?? 500 };
    });
  });

  it("starts with the default section active", () => {
    const { result } = renderHook(() => useScrollSpy(["about", "experience"]));
    expect(result.current.active).toBe("about");
  });

  it("scrolls to a section when requested", () => {
    const scrollIntoView = jest.fn();
    document.getElementById("experience").scrollIntoView = scrollIntoView;

    const { result } = renderHook(() => useScrollSpy(["about", "experience"]));

    act(() => {
      result.current.scrollTo("experience");
    });

    expect(result.current.active).toBe("experience");
    expect(scrollIntoView).toHaveBeenCalledWith({ behavior: "smooth" });
  });
});
