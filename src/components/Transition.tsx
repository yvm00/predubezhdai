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

    mm.add('(min-width: 300px)', () => {
      gsap.set(context, {
        position: 'relative',
        width: '100%',
        height: 'auto',
        zIndex: 2,
        autoAlpha: 1,
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
        defaults: {
          ease: 'power3.inOut',
        },
        onComplete: () => {
          setActiveSection('archive');
          setIsTransitioning(false);

          gsap.set(archive, {
            pointerEvents: 'auto',
          });
        },
        onReverseComplete: () => {
          setIsTransitioning(false);

          gsap.set(archive, {
            pointerEvents: 'none',
          });
        },
      });

      timeline
        .to(
          context,
          {
            autoAlpha: 0,
            duration: 0.5,
          },
          0,
        )
        .to(
          archive,
          {
            autoAlpha: 1,
            duration: 0.5,
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
              each: 0.05,
              from: 'random',
            },
          },
          0.1,
        );

      const mainTrigger = ScrollTrigger.create({
        id: 'archive-transition',
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
          setActiveSection('context');
          setIsTransitioning(true);
          timeline.reverse();
        },
      });

      const params = new URLSearchParams(window.location.search);
      const targetSection = params.get('section');

      if (targetSection === 'archive' || targetSection === 'context') {
        const isArchive = targetSection === 'archive';

        timeline.progress(isArchive ? 1 : 0, true).pause();

        gsap.set(context, {
          autoAlpha: isArchive ? 0 : 1,
        });

        gsap.set(archive, {
          autoAlpha: isArchive ? 1 : 0,
          pointerEvents: isArchive ? 'auto' : 'none',
        });

        gsap.set(products, {
          autoAlpha: isArchive ? 1 : 0,
          scale: isArchive ? 1 : 0.88,
        });

        setActiveSection(targetSection);
        setIsTransitioning(false);

        window.scrollTo({
          top: isArchive ? mainTrigger.end + 1 : mainTrigger.start - 1,
          behavior: 'instant',
        });

        ScrollTrigger.update();

        const images = Array.from(context.querySelectorAll('img'));

        Promise.all([
          document.fonts.ready,
          ...images.map((image) => image.decode().catch(() => undefined)),
        ]).then(() => {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              ScrollTrigger.refresh();

              window.scrollTo({
                top: isArchive ? mainTrigger.end + 1 : mainTrigger.start - 1,
                behavior: 'instant',
              });

              ScrollTrigger.update();

              setActiveSection(targetSection);

              window.history.replaceState({}, '', '/');
            });
          });
        });
      }

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
