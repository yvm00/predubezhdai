'use client';

import { useUIStore } from '@/src/store/useUIStore';
import { Product } from '@/src/types/product';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function ConceptSection({ product }: { product: Product }) {
  const setActiveSection = useUIStore((state) => state.setActiveSection);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
      setActiveSection('archive')
  }, []);

  return (
    <section id='archive' ref={sectionRef} className='w-full h-screen'>
      <div className='grid grid-rows-2 lg:grid-rows-none lg:grid-cols-2 w-full h-full gap-5 lg:gap-0'>
        <div className='relative h-full w-full'>
          <Image
            src={product.images.conceptMainImage}
            alt={product.title}
            fill
            priority
            className='object-cover'
          />
          <div className='absolute bottom-0 left-0 w-full flex justify-between items-center p-5 text-white text-lg sm:text-2xl xl:text-[32px]'>
            <h1 className='font-light'>{product.title}</h1>
            <span className='font-light'>{product.volume}</span>
          </div>
        </div>

        <div className='grid grid-rows-2 h-full px-5 gap-5 lg:gap-0'>
          <div className='flex items-center justify-center'>
            <div className='relative aspect-[268/262] w-full max-w-[200px] lg:max-w-[270px]'>
              <Image
                src={product.images.swatchImage}
                alt='swatch'
                fill
                sizes='(max-width: 768px) 150px, 270px'
                className='object-contain'
              />
            </div>
          </div>
          <div className='grid md:grid-cols-12 items-start gap-4'>
            <span className='col-span-2 text-[16px] text-neutral-400 font-medium'>
              Concept
            </span>
            <div className='col-span-10 xl:col-span-8 space-y-[54px]'>
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
