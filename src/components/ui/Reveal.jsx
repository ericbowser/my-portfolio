import { useReveal } from "../../hooks/useReveal";

export default function Reveal({ children, delay = 0, fill = false }) {
  const [ref, visible] = useReveal();

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
        ...(fill ? { height: "100%", display: "flex", flexDirection: "column" } : {}),
      }}
    >
      {children}
    </div>
  );
}
