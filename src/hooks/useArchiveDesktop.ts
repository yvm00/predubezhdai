'use client';

import { useEffect } from 'react';
import gsap from 'gsap';

interface Props {
  breakpoint: string | null;
  activeSection: string;
  viewportRef: React.RefObject<HTMLDivElement | null>;
  canvasRef: React.RefObject<HTMLDivElement | null>;
}

export function useArchiveDesktop({
  breakpoint,
  activeSection,
  viewportRef,
  canvasRef,
}: Props) {
  useEffect(() => {
    if (breakpoint !== 'desktop') return;

    const viewport = viewportRef.current;
    const canvas = canvasRef.current;

    if (!viewport || !canvas) return;

    const moveX = gsap.quickTo(canvas, 'x', {
      duration: 0.8,
      ease: 'power3.out',
    });

    const moveY = gsap.quickTo(canvas, 'y', {
      duration: 0.8,
      ease: 'power3.out',
    });

    const updateCamera = (event: MouseEvent) => {
      const bounds = viewport.getBoundingClientRect();

      const progressX = (event.clientX - bounds.left) / bounds.width - 0.5;

      const progressY = (event.clientY - bounds.top) / bounds.height - 0.5;

      const maxX = Math.max(0, canvas.scrollWidth - viewport.clientWidth);
      const maxY = Math.max(0, canvas.scrollHeight - viewport.clientHeight);

      moveX(-maxX / 2 - progressX * maxX);
      moveY(-maxY / 2 - progressY * maxY);
    };

    if (activeSection === 'archive') {
      const maxX = Math.max(0, canvas.scrollWidth - viewport.clientWidth);
      const maxY = Math.max(0, canvas.scrollHeight - viewport.clientHeight);

      gsap.killTweensOf(canvas);

      gsap.set(canvas, {
        x: -maxX / 2,
        y: -maxY / 2,
      });

      window.addEventListener('mousemove', updateCamera);
    } else {
      window.removeEventListener('mousemove', updateCamera);

      gsap.to(canvas, {
        x: '-30vw',
        y: '-30vh',
        duration: 0.5,
      });
    }

    return () => {
      window.removeEventListener('mousemove', updateCamera);
      moveX.tween.kill();
      moveY.tween.kill();
    };
  }, [breakpoint, activeSection, viewportRef, canvasRef]);
}
