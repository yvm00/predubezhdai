'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Props {
  children: React.ReactNode;
}

export default function Transition({ children }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const context = wrapper.querySelector<HTMLElement>('#context');
    const archive = wrapper.querySelector<HTMLElement>('#archive');
    const stage = wrapper.querySelector<HTMLElement>('.transition-stage');

    if (!context || !archive || !stage) return;

    const mm = gsap.matchMedia();

    mm.add('(min-width: 1024px)', () => {
      gsap.set(context, {
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 2,
      });

      gsap.set(archive, {
        autoAlpha: 0,
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 3,
        backgroundColor: 'transparent',
      });

      const products = gsap.utils.toArray<HTMLElement>(
        archive.querySelectorAll('.archive-product'),
      );

      gsap.set(products, {
        autoAlpha: 0,
        scale: 0.88,
        transformOrigin: 'center center',
      });

      const timeline = gsap.timeline({
        paused: true,
        defaults: { ease: 'power3.inOut' },
      });

      timeline
        .to(
          context,
          {
            autoAlpha: 0,
            duration: 0.6,
            ease: 'power2.out',
          },
          0,
        )
        .to(
          archive,
          {
            autoAlpha: 1,
            duration: 0.4,
            ease: 'power2.out',
          },
          0,
        )
        .to(
          products,
          {
            autoAlpha: 1,
            scale: 1,
            duration: 0.5,
            stagger: {
              each: 0.15,
              from: 'random',
            },
            ease: 'power2.out',
          },
          0.15,
        );

      const trigger = ScrollTrigger.create({
        trigger: wrapper,
        start: 'top top',
        end: '+=20%',
        pin: stage,
        pinSpacing: true,
        onLeave: () => {
          timeline.play();
        },
        onEnterBack: () => {
          timeline.reverse();
        },
      });

      return () => {
        trigger.kill();
        timeline.kill();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <div ref={wrapperRef} className='relative w-full'>
      <div className='transition-stage relative min-h-screen lg:h-dvh lg:min-h-0 lg:overflow-hidden w-full bg-white'>
        {children}
      </div>
    </div>
  );
}
