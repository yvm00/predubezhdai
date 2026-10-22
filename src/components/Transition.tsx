'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useUIStore } from '@/src/store/useUIStore';

gsap.registerPlugin(ScrollTrigger);

interface Props {
  children: React.ReactNode;
}

export default function Transition({ children }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const setActiveSection = useUIStore((state) => state.setActiveSection);
  const setIsTransitioning = useUIStore((state) => state.setIsTransitioning);

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const context = wrapper.querySelector<HTMLElement>('#context');
    const archive = wrapper.querySelector<HTMLElement>('#archive');

    if (!context || !archive) return;

    const mm = gsap.matchMedia();

    mm.add('(min-width: 1024px)', () => {
      gsap.set(context, {
        position: 'relative',
        width: '100%',
        height: 'auto',
        zIndex: 2,
      });

      gsap.set(archive, {
        autoAlpha: 0,
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100vh',
        zIndex: 3,
        pointerEvents: 'none',
      });

      const products = gsap.utils.toArray<HTMLElement>(
        archive.querySelectorAll('.archive-product'),
      );

      gsap.set(products, {
        autoAlpha: 0,
        scale: 0.88,
      });

      const timeline = gsap.timeline({
        paused: true,
        defaults: { ease: 'power3.inOut' },
        onComplete: () => {
          setActiveSection('archive');
          setIsTransitioning(false);
          gsap.set(archive, { pointerEvents: 'auto' });
        },
        onReverseComplete: () => {
          setActiveSection('context');
          setIsTransitioning(false);
          gsap.set(archive, { pointerEvents: 'none' });
        },
      });

      timeline
        .to(context, { autoAlpha: 0, duration: 0.5 }, 0)
        .to(archive, { autoAlpha: 1, duration: 0.5 }, 0)
        .to(
          products,
          {
            autoAlpha: 1,
            scale: 1,
            duration: 0.5,
            stagger: { each: 0.05, from: 'random' },
          },
          0.1,
        );

      const mainTrigger = ScrollTrigger.create({
        trigger: context,
        start: 'bottom bottom',
        end: '+=100%',
        pin: true,
        pinSpacing: true,
        onEnter: () => {
          setIsTransitioning(true);
          timeline.play();
        },
        onLeaveBack: () => {
          setIsTransitioning(true);
          timeline.reverse();
        },
      });

      return () => {
        mainTrigger.kill();
        timeline.kill();
      };
    });

    return () => mm.revert();
  }, [setActiveSection, setIsTransitioning]);

  return (
    <div ref={wrapperRef} className='relative w-full bg-white'>
      <div className='transition-stage relative w-full'>{children}</div>
    </div>
  );
}
