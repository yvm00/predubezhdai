'use client';

import { useLayoutEffect, RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

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
    delay = 0.2,
  }: UseTextRevealProps = {},
) {
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let titleSplit: SplitText | undefined;
    let textSplit: SplitText | undefined;

    const ctx = gsap.context(() => {
      const titles = container.querySelectorAll('.reveal-title');
      const texts = container.querySelectorAll('.reveal-text');

      if (!titles.length && !texts.length) return;

      if (titles.length) {
        titleSplit = SplitText.create(titles, {
          type: 'chars',
          mask: 'chars',
        });
      }

      if (texts.length) {
        textSplit = SplitText.create(texts, {
          type: 'lines',
          mask: 'lines',
        });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: trigger ? container.querySelector(trigger) : container,
          start,          
        },
      });

      if (titleSplit) {
        tl.fromTo(
          titleSplit.chars,
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 0.05,
            stagger: 0.055,
            ease: 'power3.out',
          },
          0,
        );
      }

      if (textSplit) {
        tl.from(
          textSplit.lines,
          {
            yPercent: 110,
            autoAlpha: 0,
            duration: duration * 0.85,
            stagger: 0.12,
            ease: 'power3.out',
          },
          delay,
        );
      }
    }, container);

    return () => {
      ctx.revert();
      titleSplit?.revert();
      textSplit?.revert();
    };
  }, [containerRef, trigger, start, duration, delay]);
}
