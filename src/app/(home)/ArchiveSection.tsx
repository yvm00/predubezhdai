'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useUIStore } from '@/src/store/useUIStore';
import { Product } from '@/src/types/product';
import useBreakpoint from '@/src/hooks/useIsDesktop';
import { useArchiveDesktop } from '@/src/hooks/useArchiveDesktop';
import { useArchiveMobile } from '@/src/hooks/useArchiveMobile';

const canvasBaseClass = `
  archive-canvas
  absolute top-0 left-0
  grid grid-cols-3
  items-center justify-items-center
`;

const productClass = `
  archive-product group
  flex items-center justify-center
  w-full h-full
`;

const imageClass = `
  relative w-full h-full
  mix-blend-multiply
  transition-transform duration-300
  group-hover:scale-105
`;

export default function ArchiveSection({ products }: { products: Product[] }) {
  const breakpoint = useBreakpoint();
  const activeSection = useUIStore((state) => state.activeSection);

  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  useArchiveDesktop({
    breakpoint,
    activeSection,
    viewportRef,
    canvasRef,
  });

  useArchiveMobile({
    breakpoint,
    activeSection,
    viewportRef,
    canvasRef,
  });

  const isDesktop = breakpoint === 'desktop';

  const canvasLayout = isDesktop
    ? `
      w-[160vw] h-[160dvh]
      grid-rows-[37.86%_26.57%_35.57%]
      gap-x-[clamp(24px,_19vw,_500px)]
      gap-y-[clamp(24px,_6vh,_70px)]
    `
    : `
      w-[180vw] h-max
      grid-rows-[42vh_42vh_42vh]
      gap-x-[6vw]
      gap-y-[15vw]
    `;

  return (
    <section
      ref={sectionRef}
      id='archive'
      className='relative w-full bg-white select-none'
    >
      <div
        ref={viewportRef}
        className={`
          relative h-dvh w-full
          overflow-hidden bg-white z-10
          ${!isDesktop ? 'touch-none' : ''}
        `}
      >
        <div
          ref={canvasRef}
          className={`${canvasBaseClass} ${canvasLayout}`}
          style={
            !isDesktop
              ? {
                  top: '50%',
                  left: '50%',
                  transform:
                    'translate(-50%, -50%) scale(var(--mesh-scale, 1))',
                  transformOrigin: 'center center',
                }
              : undefined
          }
        >
          {products.map((product, index) => (
            <Link
              key={product.id}
              href={`/archive/${product.slug}`}
              draggable={false}
              className={`
                ${productClass}
                ${isDesktop ? 'aspect-[4/3]' : ''}
              `}
            >
              <div className={imageClass}>
                <Image
                  data-cursos='hover'
                  src={product.images.archiveImage}
                  alt={product.title}
                  fill
                  sizes='60vw'
                  priority
                  draggable={false}
                  className={`
                    object-contain
                    ${
                      index % 3 === 0
                        ? 'object-right'
                        : index % 3 === 2
                          ? 'object-left'
                          : 'object-center'
                    }
                  `}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
