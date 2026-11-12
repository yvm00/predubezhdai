import { create } from 'zustand';

export type SectionId = 'hero' | 'context' | 'archive';
export type CursorTheme = 'light' | 'dark';

interface UIState {
  activeSection: SectionId;
  isTransitioning: boolean;
  cursorSection: string;

  setActiveSection: (section: SectionId) => void;
  setIsTransitioning: (value: boolean) => void;
  setCursorSection: (section: SectionId) => void;
}

export const useUIStore = create<UIState>((set) => ({
  activeSection: 'hero',
  cursorSection: 'hero',
  isTransitioning: false,

  setActiveSection: (section) => set({ activeSection: section }),

  setCursorSection: (section) => set({ cursorSection: section }),

  setIsTransitioning: (value) => set({ isTransitioning: value }),
}));
