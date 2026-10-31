'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Product } from '@/src/types/product';

export default function InfoSection({ product }: { product: Product }) {
  const sectionRef = useRef<HTMLDivElement>(null);

  const macroImages = [
    product.images.macroImages.macro1,
    product.images.macroImages.macro2,
    product.images.macroImages.macro3,
  ];

  return (
    <section id='archive' ref={sectionRef} className='w-full min-h-screen bg-white text-black select-none flex items-center'>
      <div className='grid grid-rows-2 lg:grid-rows-none lg:grid-cols-2 w-full h-full gap-5 pt-20 pb-5 lg:gap-0  max-w-[1920px] mx-auto items-center '>
        <div className='flex items-center justify-center w-full h-full'>
          <div
            className='relative w-full h-full max-h-[45vh] aspect-[3/4] 
                  lg:max-h-[85vh]'
          >
            <Image
              src={product.images.productMainImage}
              alt={product.title}
              fill
              priority
              sizes='(max-width: 768px) 320px, 530px'
              className='object-contain'
            />
          </div>
        </div>

        <div className='grid grid-rows-2 h-full pr-5 gap-5 lg:gap-0 '>
          <div className='flex justify-center lg:justify-end  gap-[10px] w-full'>
            {macroImages.map((imgSrc, index) => (
              <div
                key={index}
                className='relative aspect-square overflow-hidden max-w-[100px] lg:max-w-[200px]'
              >
                <Image
                  src={imgSrc}
                  alt={`macro-${index}`}
                  fill
                  priority
                  sizes='(max-width: 1024px) 150px, 200px'
                  className='object-contain'
                />
              </div>
            ))}
          </div>
          <div className='grid grid-cols-12 items-start content-start gap-[32px]'>
            <span className='col-span-2 text-neutral-400'>How to use</span>
            <p className='col-span-10'>{product.infoText.howToUse}</p>
            <span className='col-span-2 text-neutral-400'>Ingredients</span>
            <p className='col-span-10 '>{product.infoText.ingredients}</p>
            <span className='col-span-2 text-neutral-400 '>Shelf life</span>
            <p className='col-span-10 '>{product.infoText.shelfLife}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
