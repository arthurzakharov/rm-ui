import type { Action, State } from './types';
import { create } from 'zustand';
import { produce } from 'immer';

export const useStore = create<State & Action>()((set) => ({
  appHeaderElement: null,
  mainElement: null,
  successBoxElement: null,
  setAppHeaderElement: (ref) =>
    set(
      produce((state: State) => {
        state.appHeaderElement = ref;
      }),
    ),
  setMainElement: (ref) =>
    set(
      produce((state: State) => {
        state.mainElement = ref;
      }),
    ),
  setSuccessBoxElement: (ref) =>
    set(
      produce((state: State) => {
        state.successBoxElement = ref;
      }),
    ),
}));
