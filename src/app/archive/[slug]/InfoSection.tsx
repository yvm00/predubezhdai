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
    <section className='min-h-dvh w-full bg-white text-black select-none px-4 pt-5 md:pt-20 pb-10 lg:min-h-dvh lg:px-5 lg:py-0 lg:flex lg:items-center'>

      <div className='mx-auto grid w-full max-w-[1440px] grid-cols-[2fr_1fr] lg:grid-cols-2 lg:grid-rows-2 lg:h-full lg:max-h-[85vh] items-center gap-y-[50px] lg:gap-x-[15px] lg:gap-y-[50px]'>
        
        <div className='col-span-1 flex items-center justify-center lg:row-span-2 lg:col-span-1'>
          <div className='relative w-full h-full max-h-[55vh] aspect-[3/4] lg:max-h-[85vh]'>
            <Image
              src={product.images.productMainImage}
              alt={product.title}
              fill
              priority
              sizes='(max-width: 1023px) 100vw, 50vw'
              className='object-contain'
            />
          </div>
        </div>

        <div className='col-span-1 grid grid-cols-1 lg:flex lg:justify-end gap-[10px] w-full lg:row-start-1 lg:col-start-2 lg:items-center'>
          {macroImages.map((imgSrc, index) => (
            <div
              key={index}
              className='relative aspect-square overflow-hidden max-w-[100px] lg:max-w-[200px] lg:w-full'
            >
              <Image
                src={imgSrc}
                alt={`macro-${index}`}
                fill
                priority
                sizes='(max-width: 1023px) 100vw, 50vw'
                className='object-contain'
              />
            </div>
          ))}
        </div>

        <div className='col-span-2 grid grid-cols-1 md:gap-[32px] leading-[1.25] md:col-span-5 md:grid-cols-[2fr_10fr] md:gap-x-[15px] lg:row-start-2 lg:col-start-2 lg:col-span-1 lg:content-start'>         
            <span className='text-neutral-400 pb-[15px] md:p-0'>How to use</span>
            <p>{product.infoText.howToUse}</p>      
         
            <span className='text-neutral-400 pt-[32px] pb-[15px] md:p-0'>Ingredients</span>
            <p>{product.infoText.ingredients}</p>       

            <span className='text-neutral-400 pt-[32px] pb-[15px] md:p-0'>Shelf life</span>
            <p>{product.infoText.shelfLife}</p>
        </div>

      </div>
    </section>
  );
}
