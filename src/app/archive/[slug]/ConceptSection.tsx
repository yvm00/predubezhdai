'use client';

import { useUIStore } from '@/src/store/useUIStore';
import { Product } from '@/src/types/product';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function ConceptSection({ product }: { product: Product }) {
  const setActiveSection = useUIStore((state) => state.setActiveSection);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setActiveSection('archive');
  }, []);

  return (
    <section
      ref={sectionRef}
      className='w-full min-h-dvh bg-white text-black select-none flex items-center'
    >
      <div className='grid w-full grid-cols-1 md:h-dvh md:grid-cols-2 gap-5 md:gap-0'>
        <div className='relative w-full aspect-[4/5] md:aspect-auto md:h-dvh'>
          <Image
            src={product.images.conceptMainImage}
            alt={product.title}
            fill
            priority
            sizes='(max-width: 1023px) 100vw, 50vw'
            className='object-cover'
          />
          <div className='absolute bottom-0 left-0 w-full flex justify-between items-center p-5 text-white text-lg sm:text-xl xl:text-[32px]'>
            <h1 className='font-light'>{product.title}</h1>
            <span className='font-light'>{product.volume}</span>
          </div>
        </div>

        <div className='grid grid-rows-[auto_auto] px-5 max-w-[1024px] lg:h-full md:grid-rows-2 '>
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
            <span className='col-span-2 text-[16px] text-neutral-400 font-medium'>
              Concept
            </span>
            <div className='col-span-10 xl:col-span-8 space-y-[32px] lg:space-y-[54px]'>
              <p>{product.conceptText.concept1}</p>
              <p>{product.conceptText.concept2}</p>
              <p>{product.conceptText.notes}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
