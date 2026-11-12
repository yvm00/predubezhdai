'use client';

import useTextReveal from '@/src/hooks/useTextReveal';
import { useUIStore } from '@/src/store/useUIStore';
import { Product } from '@/src/types/product';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function ConceptSection({ product }: { product: Product }) {
  const setActiveSection = useUIStore((state) => state.setActiveSection);
  const setCursorSection = useUIStore((state) => state.setCursorSection);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setActiveSection('archive');
    setCursorSection('archive');
  }, [setActiveSection, setCursorSection]);

  useTextReveal(sectionRef, {
    start: 'top 75%',
    duration: 0.75,
    delay: 0.15,
  });

  return (
    <section
      id='concept'
      ref={sectionRef}
      className='lg:sticky lg:top-0 lg:z-0 flex min-h-dvh w-full items-center overflow-hidden bg-white text-black select-none'
    >
      <div className='grid w-full grid-cols-1 gap-5 md:h-dvh md:grid-cols-2 md:gap-0'>
        <div className='relative aspect-[4/5] w-full md:aspect-auto md:h-dvh'>
          <Image
            src={product.images.conceptMainImage}
            alt={product.title}
            fill
            priority
            sizes='(max-width: 1023px) 100vw, 50vw'
            className='object-cover'
          />
          <div className='absolute bottom-0 left-0 flex w-full items-center justify-between p-5 text-white'>
            <div className='overflow-hidden'>
              <h1 className='reveal-text text-lg font-light sm:text-xl xl:text-[32px]'>
                {product.title}
              </h1>
            </div>

            <div className='overflow-hidden'>
              <p className='reveal-text text-lg font-light sm:text-xl xl:text-[32px]'>
                {product.volume}
              </p>
            </div>
          </div>
        </div>

        <div className='grid max-w-[1024px] grid-rows-[auto_auto] px-5 md:h-full md:grid-rows-2'>
          <div className='flex items-start md:items-center justify-center py-[50px] md:py-0'>
            <div className='relative aspect-square w-full max-w-[200px]'>
              <Image
                src={product.images.swatchImage}
                alt='swatch'
                fill
                sizes='(max-width: 1023px) 100vw, 50vw'
                className='object-contain'
              />
            </div>
          </div>

          <div className='grid lg:grid-cols-12 items-start gap-4 md:gap-0'>
            <div className='overflow-hidden col-span-4 md:col-span-2'>
              <span className='reveal-text block text-[16px] text-neutral-400 font-medium'>
                Concept
              </span>
            </div>

            <div className='col-span-10 xl:col-span-8 space-y-[32px] lg:space-y-[54px]'>
              <div className='overflow-hidden'>
                <p className='reveal-text'>{product.conceptText.concept1}</p>
              </div>

              <div className='overflow-hidden'>
                <p className='reveal-text'>{product.conceptText.concept2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
