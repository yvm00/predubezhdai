'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useIsDesktop from '@/src/hooks/useIsDesktop';
import { productsData } from '@/src/shared/data/productsData';

gsap.registerPlugin(ScrollTrigger);

export default function ArchiveSection() {
  const isDesktop = useIsDesktop();

  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isDesktop) return;

    const section = sectionRef.current;
    const viewport = viewportRef.current;
    const canvas = canvasRef.current;

    if (!section || !viewport || !canvas) return;

    const ctx = gsap.context(() => {
      gsap.set(canvas, {
        x: '-30vw',
        y: '-30vh',
      });

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

        const maxX = canvas.clientWidth - viewport.clientWidth;
        const maxY = canvas.clientHeight - viewport.clientHeight;

        moveX(-maxX / 2 - progressX * maxX);
        moveY(-maxY / 2 - progressY * maxY);
      };

      ScrollTrigger.create({
        trigger: viewport,
        start: 'top top',
        end: '+=100%',
        scrub: true,
        onEnter: () => {
          const maxX = canvas.scrollWidth - viewport.clientWidth;
          const maxY = canvas.scrollHeight - viewport.clientHeight;

          gsap.set(canvas, {
            x: -maxX / 2,
            y: -maxY / 2,
          });

          viewport.addEventListener('mousemove', updateCamera);
        },
        onLeaveBack: () => {
          gsap.set(canvas, { x: 0, y: 0 });
          viewport.removeEventListener('mousemove', updateCamera);
        },
      });
    }, section);

    return () => ctx.revert();
  }, [isDesktop]);

  return (
    <section
      ref={sectionRef}
      id='archive'
      className='relative w-full bg-white select-none'
    >
      <div className=''>
        {
          isDesktop !== false && (
            <div
              ref={viewportRef}
              className='relative h-screen w-full bg-white z-10'
            >
              <div
                ref={canvasRef}
                className='absolute top-0 left-0  w-[160vw] h-[160vh] grid grid-cols-3 gap-x-[clamp(24px,_19vw,_500px)] gap-y-[clamp(24px,_6vh,_70px)] grid-rows-[37.86%_26.57%_35.57%]  items-center justify-items-center'
              >
                {productsData.map((product, index) => (
                  <Link
                    key={product.id}
                    href={`/product/${product.slug}`}
                    className='archive-product group flex aspect-[4/3] w-full  h-full items-center justify-center'
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
          )
          // : (
          //   <div className='grid grid-cols-2 items-start gap-x-4 gap-y-8 px-5 py-24 bg-white text-black'>
          //     {productsData.map((product) => (
          //       <Link
          //         key={product.id}
          //         href={`/product/${product.slug}`}
          //         className='block bg-neutral-50 p-4 rounded'
          //       >
          //         <div className='relative w-full aspect-square mix-blend-multiply'>
          //           <Image
          //             src={product.image}
          //             alt={product.title}
          //             fill
          //             sizes='50vw'
          //             className='object-contain'
          //           />
          //         </div>
          //         <span className='block mt-4 font-mono text-xs uppercase tracking-wider text-neutral-800'>
          //           {product.title}
          //         </span>
          //       </Link>
          //     ))}
          //   </div>
          // )
        }
      </div>
    </section>
  );
}
