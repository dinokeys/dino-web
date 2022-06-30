import { defineStore } from 'pinia';

export interface Darkmode {
  mode: string;
}

export type DarkmodeOption = Darkmode | null;

interface DarkmodeState {
  value: DarkmodeOption;
}

const state = (): DarkmodeState => ({
  value: process.client
    ? localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
      ? { mode: 'dark' }
      : { mode: 'light' }
    : null,
});

const getters = {
  getMode: (state: DarkmodeState) => {
    return state.value;
  },
};

export const useDarkmodeStore = defineStore('darkmodeStore', {
  state,
  getters,
  actions: {
    update(mode: string) {
      switch (mode) {
        case 'light':
          this.value = { mode: 'light' };
          if (process.client && typeof window !== 'undefined') {
            localStorage.theme = 'light';
            document.documentElement.classList.remove('dark');
          }
          break;
        case 'dark':
          this.value = { mode: 'dark' };
          if (process.client && typeof window !== 'undefined') {
            localStorage.theme = 'dark';
            document.documentElement.classList.add('dark');
          }
          break;
        default:
          break;
      }
    },
  },
});
