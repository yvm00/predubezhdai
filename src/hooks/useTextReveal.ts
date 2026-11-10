'use client';

import { useLayoutEffect, RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface UseTextRevealProps {
  trigger?: string;
  start?: string;
  duration?: number;
  delay?: number;
}

export default function useTextReveal(
  containerRef: RefObject<HTMLElement | null>,
  {
    trigger,
    start = 'top 75%',
    duration = 0.65,
    delay = 0.15,
  }: UseTextRevealProps = {},
) {
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const titleLines = container.querySelectorAll('.reveal-title');
      const textLines = container.querySelectorAll('.reveal-text');

      const elements = [...titleLines, ...textLines];

      if (!elements.length) return;

      gsap.set(elements, {
        yPercent: 110,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: trigger ? container.querySelector(trigger) : container,
          start,
          once: true,
        },
      });

      tl.to(titleLines, {
        yPercent: 0,
        duration,
        ease: 'power3.out',
      }, 0);

      tl.to(textLines, {
        yPercent: 0,
        duration: duration * 0.85,
        ease: 'power3.out',
      }, delay);
    }, container);

    return () => ctx.revert();
  }, [containerRef, trigger, start, duration, delay]);
}