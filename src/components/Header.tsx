'use client';

import { useUIStore } from '../store/useUIStore';

export default function Header() {
  const activeSection = useUIStore((state) => state.activeSection);

  const labels = {
    hero: 'manifesto',
    context: 'context',
    archive: 'archive',
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 p-5 select-none pointer-events-none  ${activeSection === 'hero' ? 'bg-transparent text-white' : 'bg-white/75 text-black backdrop-blur-sm'}`}
    >
      <div className='flex items-center justify-between'>
        <p className='font-syne text-[20px]'>PREDUBEZHDAI</p>
        <p className='font-jost font-light text-[20px]'>
          {labels[activeSection]}
        </p>
      </div>
    </header>
  );
}
