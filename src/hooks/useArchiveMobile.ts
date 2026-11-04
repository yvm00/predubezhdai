'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface Props {
  breakpoint: string | null;
  activeSection: string;
  viewportRef: React.RefObject<HTMLDivElement | null>;
  canvasRef: React.RefObject<HTMLDivElement | null>;
}

export function useArchiveMobile({
  breakpoint,
  activeSection,
  viewportRef,
  canvasRef,
}: Props) {
  const isDragging = useRef(false);
  const hasMoved = useRef(false);

  useEffect(() => {
    if (breakpoint === null || breakpoint === 'desktop') return;
    if (activeSection !== 'archive') return;

    const viewport = viewportRef.current;
    const canvas = canvasRef.current;

    if (!viewport || !canvas) return;

    gsap.set(canvas, {
      x: 0,
      y: 0,
    });

    const moveX = gsap.quickTo(canvas, 'x', {
      duration: 0.15,
      ease: 'power2.out',
    });

    const moveY = gsap.quickTo(canvas, 'y', {
      duration: 0.15,
      ease: 'power2.out',
    });

    let startPointerX = 0;
    let startPointerY = 0;
    let startCanvasX = 0;
    let startCanvasY = 0;

    const getBounds = () => ({
      maxX: Math.max(0, canvas.scrollWidth - viewport.clientWidth),
      maxY: Math.max(0, canvas.scrollHeight - viewport.clientHeight),
    });

    const handlePointerDown = (event: PointerEvent) => {
      if (event.pointerType === 'mouse') return;
      if (event.button !== 0) return;

      isDragging.current = true;
      hasMoved.current = false;

      startPointerX = event.clientX;
      startPointerY = event.clientY;

      const position = gsap.getProperty(canvas, 'x') as number;
      const positionY = gsap.getProperty(canvas, 'y') as number;

      startCanvasX = position;
      startCanvasY = positionY;

      viewport.setPointerCapture(event.pointerId);
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (!isDragging.current) return;

      const deltaX = event.clientX - startPointerX;
      const deltaY = event.clientY - startPointerY;

      if (Math.abs(deltaX) > 7 || Math.abs(deltaY) > 7) {
        hasMoved.current = true;
      }

      if (!hasMoved.current) return;

      const { maxX, maxY } = getBounds();

      const nextX = Math.max(
        -maxX / 2,
        Math.min(maxX / 2, startCanvasX + deltaX),
      );
      const nextY = Math.max(
        -maxY / 2,
        Math.min(maxY / 2, startCanvasY + deltaY),
      );

      moveX(nextX);
      moveY(nextY);
    };

    const handlePointerUp = () => {
      isDragging.current = false;
    };

    const handleClickCapture = (event: MouseEvent) => {
      if (!hasMoved.current) return;

      event.preventDefault();
      event.stopPropagation();

      hasMoved.current = false;
    };

    viewport.addEventListener('pointerdown', handlePointerDown);
    viewport.addEventListener('pointermove', handlePointerMove);
    viewport.addEventListener('pointerup', handlePointerUp);
    viewport.addEventListener('pointercancel', handlePointerUp);
    viewport.addEventListener('click', handleClickCapture, true);

    return () => {
      viewport.removeEventListener('pointerdown', handlePointerDown);
      viewport.removeEventListener('pointermove', handlePointerMove);
      viewport.removeEventListener('pointerup', handlePointerUp);
      viewport.removeEventListener('pointercancel', handlePointerUp);
      viewport.removeEventListener('click', handleClickCapture, true);

      moveX.tween.kill();
      moveY.tween.kill();

      isDragging.current = false;
      hasMoved.current = false;
    };
  }, [breakpoint, activeSection, viewportRef, canvasRef]);
}
