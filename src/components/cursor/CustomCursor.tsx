'use client';

import { useEffect } from 'react';
import { useUIStore } from '@/src/store/useUIStore';
import { useCursorStore } from '@/src/store/useCursorStore';
import AsciiTrail from './AsciiTrail';
import CircleCursor from './CircleCursor';

export default function CustomCursor() {
  const cursorSection = useUIStore((state) => state.cursorSection);
  const mode = useCursorStore((state) => state.mode);
  const setMode = useCursorStore((state) => state.setMode);

  useEffect(() => {
    setMode(cursorSection === 'hero' ? 'ascii' : 'lens');
  }, [cursorSection, setMode]);

  return mode === 'ascii' ? <AsciiTrail /> : <CircleCursor />;
}