import Image from 'next/image';

export default function ContextSection() {
  return (
    <section id='context' className='min-h-screen bg-white'>
      <div className='mx-auto w-full max-w-[1920px] px-5'>
        <div className='context-copy mt-5 grid grid-cols-1 md:grid-cols-12 gap-[15px] '>
          <div className='col-span-4 pt-[23px]'>
            <h2 className='text-[48px] font-semibold leading-none tracking-tight'>
              KATARSIS
            </h2>

            <p className='mt-[18px] max-w-xs text-[24px] font-light italic leading-[1.15] text-neutral-500'>
              (n.) an intimacy in the sense of the sacred
            </p>
          </div>

          <div className='col-span-8'>
            <p className='mb-3 text-[16px] leading-none text-neutral-400'>
              Description
            </p>

            <div className='text-[18px] leading-[1.2]'>
              <p>
                A stage where the truth falls right into your hands. When you
                find yourself morally purified, whether you want to or not,
                simply because the time has come. You come to embrace yourself,
                becoming tenderness itself. Life asks questions, and the answers
                emerge on their own in the thick smoke of incense.
              </p>

              <p className='mt-6'>
                Legs crossed in svastikasana, it feels as if everything around
                is intensifying to the point where you begin to hear phantom,
                fateful bells. This is how personal liberation arrives. Now
                &apos;on the other side&apos; of human existence. A moment so
                fragile and reverent that it is impossible to put into words.
              </p>
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
