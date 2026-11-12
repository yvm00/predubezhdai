'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import { useUIStore } from '@/src/store/useUIStore';
import { homeSections, SectionId, sectionLabels } from '../types/sections';

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const activeSection = useUIStore((state) => state.activeSection);

  const isHome = pathname === '/';

  const handleSectionClick = (section: SectionId) => {
    setIsOpen(false);

    if (!isHome) {
      window.location.href = `/?section=${section}`;
      return;
    }

    const trigger = ScrollTrigger.getById('archive-transition');

    if (section === 'archive' && trigger) {
      window.scrollTo({
        top: trigger.end + 1,
        behavior: 'smooth',
      });
      return;
    }

    if (section === 'context' && trigger) {
      window.scrollTo({
        top: trigger.start - 1,
        behavior: 'smooth',
      });
      return;
    }

    if (section === 'hero') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 px-5 pt-5 select-none ${
        activeSection === 'hero'
          ? 'bg-transparent text-white'
          : 'text-black backdrop-blur-sm'
      }`}
    >
      <div className='flex items-center justify-between'>
        <Link
          href='/'
          onClick={() => {
            if (isHome) {
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              });
            }
          }}
          className='font-syne text-[20px] hover:text-red-500'
        >
          PREDUBEZHDAI
        </Link>

        <div
          className='relative'
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <button
            type='button'
            onClick={() => setIsOpen((prev) => !prev)}
            className='font-jost font-light text-[20px] hover:text-red-500'
          >
            {sectionLabels[activeSection]}
          </button>

          {isOpen && (
            <nav className='absolute right-0 top-full flex flex-col items-end'>
              {homeSections.map((section) => (
                <button
                  key={section}
                  type='button'
                  onClick={() => handleSectionClick(section)}
                  className={`font-jost font-light text-[20px] hover:text-red-500 ${
                    isHome && activeSection === section ? 'text-red-500' : ''
                  }`}
                >
                  {sectionLabels[section]}
                </button>
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
