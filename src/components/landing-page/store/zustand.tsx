import type { Action, State } from './types';
import { create } from 'zustand';

export const useStore = create<State & Action>()((set) => ({
  mainElement: null,
  successBoxElement: null,
  setMainElement: (ref) => {
    set((state) => ({
      ...state,
      mainElement: ref,
    }));
  },
  setSuccessBoxElement: (ref) => {
    set((state) => ({
      ...state,
      successBoxElement: ref,
    }));
  },
}));
