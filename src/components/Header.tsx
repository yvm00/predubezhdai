'use client';

import Link from 'next/link';
import { useUIStore } from '../store/useUIStore';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const activeSection = useUIStore((state) => state.activeSection);
  const setActiveSection = useUIStore((state) => state.setActiveSection);

  const labels = {
    hero: 'manifesto',
    context: 'context',
    archive: 'archive',
  };

  const handleArchiveClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (window.location.pathname !== '/') {
      window.location.href = '/#archive';
      return;
    }

    const context = document.getElementById('context');
    if (!context) return;

    const trigger = ScrollTrigger.getAll().find(
      (trigger) => trigger.trigger === context,
    );

    if (!trigger) return;

    window.scrollTo({
      top: trigger.end + 1,
      behavior: 'smooth',
    });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 px-5 pt-5 select-none  ${activeSection === 'hero' ? 'bg-transparent text-white' : 'text-black backdrop-blur-sm'}`}
    >
      <div className='flex items-center justify-between'>
        <Link href={`/`} onClick={() => setActiveSection('hero')} className='font-syne text-[20px] hover:text-red-500'>
          PREDUBEZHDAI
        </Link>
        <Link
          href='/'
          className='font-jost font-light text-[20px] hover:text-red-500'
        >
          {labels[activeSection]}
        </Link>
      </div>
    </header>
  );
}
