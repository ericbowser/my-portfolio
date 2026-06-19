import { useEffect, useState } from "react";
import { SCROLL_OFFSET } from "../theme/layout";

export function useScrollSpy(sectionIds, defaultSection = "about") {
  const [active, setActive] = useState(defaultSection);

  useEffect(() => {
    const onScroll = () => {
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.getBoundingClientRect().top <= SCROLL_OFFSET) {
          setActive(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionIds]);

  const scrollTo = (id) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return { active, scrollTo };
}
