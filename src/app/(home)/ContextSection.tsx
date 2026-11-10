'use client';

import Image from 'next/image';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import { useLayoutEffect, useRef } from 'react';
import useTextReveal from '@/src/hooks/useTextReveal';

gsap.registerPlugin(ScrollTrigger);

export default function ContextSection() {
  const contextRef = useRef<HTMLDivElement>(null);

  useTextReveal(contextRef, {
    start: 'top 75%',
    duration: 0.75,
    delay: 0.15,
  });

  return (
    <section
      id='context'
      ref={contextRef}
      className='relative z-10 min-h-dvh w-full bg-white select-none'
    >
      <div className='mx-auto w-full max-w-[1920px] px-5 py-16 lg:py-24 flex flex-col gap-12 lg:gap-16'>
        <div className='context-copy mt-5 grid grid-cols-1 md:grid-cols-12 gap-[15px] items-start '>
          <div className='col-span-4 pt-[23px]'>
            <div className='overflow-hidden'>
              <h2 className='reveal-title text-[48px] font-semibold leading-none tracking-tight'>
                KATARSIS
              </h2>

              <div className='mt-[18px] overflow-hidden'>
                <p className='reveal-text max-w-xs text-[24px] font-light italic leading-[1.15] text-neutral-500'>
                  (n.) an intimacy in the sense of the sacred
                </p>
              </div>
            </div>
          </div>

          <div className='col-span-8'>
            <div className='mb-3 overflow-hidden'>
              <p className='reveal-text text-[16px] leading-none text-neutral-400'>
                Description
              </p>
            </div>

            <div className='text-[18px] leading-[1.2]'>
              <div className='overflow-hidden'>
                <p className='reveal-text'>
                  A stage where the truth falls right into your hands. When you
                  find yourself morally purified, whether you want to or not,
                  simply because the time has come. You come to embrace
                  yourself, becoming tenderness itself. Life asks questions, and
                  the answers emerge on their own in the thick smoke of incense.
                </p>
              </div>

              <div className='mt-6 overflow-hidden'>
                <p className='reveal-text'>
                  Legs crossed in svastikasana, it feels as if everything around
                  is intensifying to the point where you begin to hear phantom,
                  fateful bells. This is how personal liberation arrives. Now
                  &apos;on the other side&apos; of human existence. A moment so
                  fragile and reverent that it is impossible to put into words.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-9 grid grid-cols-1 md:grid-cols-12 gap-[15px]'>
          <div className='col-span-12 md:col-span-4'>
            <div className='relative aspect-[457/441] w-full'>
              <Image
                src='/context/context_1.png'
                alt='context_1'
                fill
                sizes='(max-width: 768px) 100vw, 33vw'
                className='h-auto w-full object-cover'
              />
            </div>
          </div>

          <div className='hidden md:col-span-8 md:block'>
            <div className='relative aspect-[928/592] w-full'>
              <Image
                src='/context/context_2.png'
                alt='context_2'
                fill
                sizes='(max-width: 768px) 100vw, 66vw'
                className='h-auto w-full object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
