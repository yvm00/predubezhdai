'use client';

import { useEffect, useState } from 'react';

type Breakpoint = 'mobile' | 'tablet' | 'desktop';

export default function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState<Breakpoint | null>(null);

  useEffect(() => {
    const mobile = window.matchMedia('(max-width: 767px)');
    const tablet = window.matchMedia('(min-width: 768px) and (max-width: 1023px)');
    const desktop = window.matchMedia('(min-width: 1024px)');

    const updateBreakpoint = () => {
      if (desktop.matches) {
        setBreakpoint('desktop');
      } else if (tablet.matches) {
        setBreakpoint('tablet');
      } else {
        setBreakpoint('mobile');
      }
    };

    updateBreakpoint();

    mobile.addEventListener('change', updateBreakpoint);
    tablet.addEventListener('change', updateBreakpoint);
    desktop.addEventListener('change', updateBreakpoint);

    return () => {
      mobile.removeEventListener('change', updateBreakpoint);
      tablet.removeEventListener('change', updateBreakpoint);
      desktop.removeEventListener('change', updateBreakpoint);
    };
  }, []);

  return breakpoint;
}