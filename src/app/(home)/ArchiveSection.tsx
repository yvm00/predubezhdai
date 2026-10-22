'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import useIsDesktop from '@/src/hooks/useIsDesktop';
import { productsData } from '@/src/data/productsData';
import { useUIStore } from '@/src/store/useUIStore';

export default function ArchiveSection() {
  const isDesktop = useIsDesktop();
  const activeSection = useUIStore((state) => state.activeSection);

  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isDesktop) return;

    const viewport = viewportRef.current;
    const canvas = canvasRef.current;
    if (!viewport || !canvas) return;

    let isListening = false;

    const moveX = gsap.quickTo(canvas, 'x', { duration: 0.8, ease: 'power3.out' });
    const moveY = gsap.quickTo(canvas, 'y', { duration: 0.8, ease: 'power3.out' });

    const updateCamera = (event: MouseEvent) => {
      const bounds = viewport.getBoundingClientRect();
      
      const progressX = (event.clientX - bounds.left) / bounds.width - 0.5;
      const progressY = (event.clientY - bounds.top) / bounds.height - 0.5;

      const maxX = canvas.clientWidth - viewport.clientWidth;
      const maxY = canvas.clientHeight - viewport.clientHeight;

      moveX(-maxX / 2 - progressX * maxX);
      moveY(-maxY / 2 - progressY * maxY);
    };

    if (activeSection === 'archive') {
      const maxX = canvas.scrollWidth - viewport.clientWidth;
      const maxY = canvas.scrollHeight - viewport.clientHeight;

      gsap.killTweensOf(canvas);
      gsap.set(canvas, {
        x: -maxX / 2,
        y: -maxY / 2,
      });

      if (!isListening) {
        window.addEventListener('mousemove', updateCamera);
        isListening = true;
      }
    } else {
      if (isListening) {
        window.removeEventListener('mousemove', updateCamera);
        isListening = false;
      }
      gsap.to(canvas, { x: '-30vw', y: '-30vh', duration: 0.5 });
    }

    return () => {
      window.removeEventListener('mousemove', updateCamera);
    };
  }, [isDesktop, activeSection]);

  return (
    <section ref={sectionRef} id='archive' className='relative w-full bg-white select-none'>
      {isDesktop !== false && (
        <div ref={viewportRef} className='relative h-screen w-full bg-white z-10 overflow-hidden'>
          <div
            ref={canvasRef}
            className='absolute top-0 left-0 w-[160vw] h-[160vh] grid grid-cols-3 gap-x-[clamp(24px,_19vw,_500px)] gap-y-[clamp(24px,_6vh,_70px)] grid-rows-[37.86%_26.57%_35.57%] items-center justify-items-center'
          >
            {productsData.map((product, index) => (
              <Link
                key={product.id}
                href={`/product/${product.slug}`}
                className='archive-product group flex aspect-[4/3] w-full h-full items-center justify-center'
              >
                <div className='relative w-full h-full mix-blend-multiply transition-transform duration-300 group-hover:scale-105'>
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes='33vw'
                    priority
                    className={`object-contain ${
                      index % 3 === 0
                        ? 'object-right'
                        : index % 3 === 2
                          ? 'object-left'
                          : 'object-center'
                    }`}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
