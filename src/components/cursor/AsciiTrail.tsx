'use client';

import { useEffect, useRef } from 'react';

type Particle = {
  x: number;
  y: number;
  char: string;
  life: number;
};

export default function AsciiTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    const chars = '01.+•';
    const particles: Particle[] = [];

    let mouseX = 0;
    let mouseY = 0;

    let cursorX = 0;
    let cursorY = 0;

    let lastX = 0;
    let lastY = 0;

    let isInitialized = false;
    let isCursorInitialized = false;

    const spacing = 18;
    const lifetime = 40;
    const ease = 0.12;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isCursorInitialized) {
        cursorX = mouseX;
        cursorY = mouseY;
        lastX = mouseX;
        lastY = mouseY;

        isCursorInitialized = true;
        isInitialized = true;
      }
    };

    const leave = () => {
      isInitialized = false;
      isCursorInitialized = false;
    };

    window.addEventListener('mousemove', move);
    document.documentElement.addEventListener('mouseleave', leave);

    let frame: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (isInitialized) {
        cursorX += (mouseX - cursorX) * ease;
        cursorY += (mouseY - cursorY) * ease;

        const distance = Math.hypot(
          cursorX - lastX,
          cursorY - lastY
        );

        if (distance >= spacing) {
          const steps = Math.floor(distance / spacing);

          for (let i = 1; i <= steps; i++) {
            const t = i / steps;

            particles.push({
              x: lastX + (cursorX - lastX) * t,
              y: lastY + (cursorY - lastY) * t,
              char: chars[Math.floor(Math.random() * chars.length)],
              life: lifetime,
            });
          }

          lastX = cursorX;
          lastY = cursorY;
        }

        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = '20px monospace';

        for (let i = particles.length - 1; i >= 0; i--) {
          const p = particles[i];

          p.life--;

          ctx.globalAlpha = p.life / lifetime;
          ctx.fillText(p.char, p.x, p.y);

          if (p.life <= 0) {
            particles.splice(i, 1);
          }
        }

        ctx.globalAlpha = 1;
        ctx.font = '35px monospace';
        ctx.fillText('*', cursorX, cursorY);
      } else {
        particles.length = 0;
      }

      frame = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('mousemove', move);
      document.documentElement.removeEventListener('mouseleave', leave);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[9999] pointer-events-none"
    />
  );
}