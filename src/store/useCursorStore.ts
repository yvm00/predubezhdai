import { create } from 'zustand';

export type CursorMode = 'ascii' | 'lens';

interface CursorState {
  mode: CursorMode;
  setMode: (mode: CursorMode) => void;
}

export const useCursorStore = create<CursorState>((set) => ({
  mode: 'ascii', 
  setMode: (mode) => set({ mode }),
}));
