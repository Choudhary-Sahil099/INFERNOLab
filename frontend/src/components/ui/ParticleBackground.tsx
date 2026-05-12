import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  size: number;
  speed: number;
  drift: number;
  opacity: number;
  hue: number;
};

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();

    window.addEventListener("resize", resize);
    const createParticle = (
      randomY = false
    ): Particle => ({
      x: Math.random() * canvas.width,

      y: randomY
        ? Math.random() * canvas.height
        : canvas.height + 20,

      size: Math.random() * 2.5 + 0.5,

      speed: Math.random() * 0.8 + 0.3,

      drift: (Math.random() - 0.5) * 0.4,

      opacity: randomY
        ? Math.random()
        : 0.6 + Math.random() * 0.3,

      hue: Math.floor(
        Math.random() * 30
      ) + 10,
    });

    const particles: Particle[] = Array.from(
      { length: 80 },
      () => createParticle(true)
    );

    let animationFrame: number;

    const animate = () => {
      ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
      );

      particles.forEach((p) => {
        p.y -= p.speed;

        p.x += p.drift;

        p.opacity -= 0.001;

        if (
          p.y < -20 ||
          p.opacity <= 0
        ) {
          Object.assign(
            p,
            createParticle(false)
          );
        }

        ctx.save();

        ctx.globalAlpha = Math.max(
          0,
          p.opacity
        );
        ctx.shadowBlur = 10;

        ctx.shadowColor = `hsl(${p.hue},100%,55%)`;

        ctx.fillStyle = `hsl(${p.hue},100%,60%)`;

        ctx.beginPath();

        ctx.arc(
          p.x,
          p.y,
          p.size,
          0,
          Math.PI * 2
        );

        ctx.fill();

        ctx.restore();
      });

      animationFrame =
        requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener(
        "resize",
        resize
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="
        fixed
        inset-0
        pointer-events-none
        z-0
      "
    />
  );
};

export default ParticleBackground;