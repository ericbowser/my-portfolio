import { useEffect, useRef } from "react";
import { VIVID } from "../../theme/colors";

export default function SparkleBackground() {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let w;
    let h;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    particles.current = Array.from({ length: 140 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      size: Math.random() * 2 + 0.6,
      color: VIVID[Math.floor(Math.random() * VIVID.length)],
      alpha: Math.random() * 0.55 + 0.15,
      twinkleSpeed: Math.random() * 0.015 + 0.008,
      twinkleOffset: Math.random() * Math.PI * 2,
      kind: Math.random() > 0.75 ? "star" : "dot",
    }));

    let frame = 0;
    const loop = () => {
      ctx.clearRect(0, 0, w, h);
      frame += 1;

      particles.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -5) p.x = w + 5;
        if (p.x > w + 5) p.x = -5;
        if (p.y < -5) p.y = h + 5;
        if (p.y > h + 5) p.y = -5;

        const twinkle = Math.sin(frame * p.twinkleSpeed + p.twinkleOffset);
        const alpha = p.alpha * (0.45 + twinkle * 0.55);
        const s = p.size * (0.85 + twinkle * 0.3);

        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.shadowBlur = s * 3;
        ctx.shadowColor = p.color;

        if (p.kind === "dot") {
          ctx.beginPath();
          ctx.arc(p.x, p.y, s, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();
        } else {
          ctx.translate(p.x, p.y);
          ctx.rotate(frame * 0.003 + p.twinkleOffset);
          ctx.beginPath();
          ctx.moveTo(0, -s * 1.8);
          ctx.lineTo(s * 0.35, -s * 0.35);
          ctx.lineTo(s * 1.8, 0);
          ctx.lineTo(s * 0.35, s * 0.35);
          ctx.lineTo(0, s * 1.8);
          ctx.lineTo(-s * 0.35, s * 0.35);
          ctx.lineTo(-s * 1.8, 0);
          ctx.lineTo(-s * 0.35, -s * 0.35);
          ctx.closePath();
          ctx.fillStyle = p.color;
          ctx.fill();
        }
        ctx.restore();
      });

      animRef.current = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
