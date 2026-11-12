'use client';

import { useEffect, useRef } from 'react';

export default function OpticalCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let x = 0;
    let y = 0;
    let targetX = 0;
    let targetY = 0;
    let frame: number;
    let isInitialized = false;

    const move = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;

      if (!isInitialized) {
        x = targetX;
        y = targetY;
        isInitialized = true;
      }

      cursor.classList.add('is-visible');
    };

    const leave = () => {
      cursor.classList.remove('is-visible');
      isInitialized = false;
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      const isInteractive = target.closest(
        'a, button, [role="button"], [data-cursor="hover"]',
      );

      cursor.classList.toggle('is-hover', !!isInteractive);
    };

    const animate = () => {
      x += (targetX - x) * 0.18;
      y += (targetY - y) * 0.18;

      cursor.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;

      frame = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', handleHover);
    document.documentElement.addEventListener('mouseleave', leave);

    animate();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', handleHover);
      document.documentElement.removeEventListener('mouseleave', leave);
    };
  }, []);

  return <div ref={cursorRef} className='custom-cursor' />;
}
