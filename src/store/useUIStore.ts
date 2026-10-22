import { create } from 'zustand';

export type SectionId = 'hero' | 'context' | 'archive';
export type CursorTheme = 'light' | 'dark';

interface UIState {
  activeSection: SectionId;
  cursorTheme: CursorTheme;
  isTransitioning: boolean;

  setActiveSection: (section: SectionId) => void;
  setCursorTheme: (theme: CursorTheme) => void;
  setIsTransitioning: (value: boolean) => void;
}

export const useUIStore = create<UIState>((set) => ({
  activeSection: 'hero',
  cursorTheme: 'light',
  isTransitioning: false,

  setActiveSection: (section) =>
    set({ activeSection: section }),

  setCursorTheme: (theme) =>
    set({ cursorTheme: theme }),

  setIsTransitioning: (value) =>
    set({ isTransitioning: value }),
}));