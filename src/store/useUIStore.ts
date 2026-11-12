import { create } from 'zustand';
import { SectionId } from '../types/sections';


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
