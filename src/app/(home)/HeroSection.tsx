'use client';

import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import { useUIStore } from '@/src/store/useUIStore';
import useBreakpoint from '@/src/hooks/useIsDesktop';
gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const setActiveSection = useUIStore((state) => state.setActiveSection);
  const setCursorSection = useUIStore((state) => state.setCursorSection);
  const breakpoint = useBreakpoint();

  useEffect(() => {
    setCursorSection('hero');

    const headerTrigger = ScrollTrigger.create({
      trigger: heroRef.current,
      start: 'top top',
      end: '+=95%',
      onLeave: () => setActiveSection('context'),
      onEnterBack: () => setActiveSection('hero'),
    });

    const cursorTrigger = ScrollTrigger.create({
      trigger: heroRef.current,
      start: 'top top',
      end: '+=35%',
      onLeave: () => setCursorSection('context'),
      onEnterBack: () => setCursorSection('hero'),
    });

    return () => {
      headerTrigger.kill();
      cursorTrigger.kill();
    };
  }, [setActiveSection, setCursorSection]);

  useEffect(() => {
    const video = videoRef.current;

    if (!video || breakpoint === null) return;

    video.src =
      breakpoint === 'desktop' || breakpoint === 'tablet'
        ? '/video/flower-desktop.webm'
        : '/video/flower-mobile.webm';

    video.load();
    video.playbackRate = 0.6;
    video.play().catch(() => {});
  }, [breakpoint]);

  return (
    <section
      id='hero'
      ref={heroRef}
      className='sticky top-0 z-0 h-dvh w-full overflow-hidden'
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className={`absolute inset-0 h-full w-full object-cover mix-blend-screen ${
          breakpoint === 'desktop' || breakpoint === 'tablet'
            ? 'object-[60%_40%]'
            : 'object-center'
        }`}
      />
    </section>
  );
}
