import { computed } from '@angular/core';
import { Theme } from '@enums/theme.enum';
import {
  patchState,
  signalStoreFeature,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';

export type ThemeState = { theme: Theme };

const THEME_KEY = 'app-theme';

export const withThemeState = () => {
  return signalStoreFeature(
    withState<ThemeState>({ theme: Theme.LIGHT }),
    withComputed(({ theme }) => ({
      getCurrenTheme: computed(() => theme()),
      isDarkTheme: computed(() => theme() === Theme.DARK),
      isLightTheme: computed(() => theme() === Theme.LIGHT),
    })),
    withMethods(store => ({
      toggleTheme() {
        const newTheme = store.isDarkTheme() ? Theme.LIGHT : Theme.DARK;
        patchState(store, { theme: newTheme });
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem(THEME_KEY, newTheme);
      },
    })),
    withHooks({
      onInit(store) {
        const stored = localStorage.getItem(THEME_KEY) as Theme | null;
        const theme =
          stored === Theme.DARK || stored === Theme.LIGHT ? stored : Theme.LIGHT;
        patchState(store, { theme });
        document.documentElement.setAttribute('data-theme', theme);
      },
    }),
  );
};
