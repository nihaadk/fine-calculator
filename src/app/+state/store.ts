import { computed } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { Theme } from '../enums/theme.enum';
import { Fine } from '../interfaces/fine.interfaces';

export const initiState: Fine = {
  strassentyp: '',
  allowedSpeed: 0,
  netSpeed: 0,
  radartyp: '',
};

export const initiTheme = Theme.LIGHT;

export const Store = signalStore(
  { providedIn: 'root' },
  withState({ fine: initiState, theme: initiTheme }),
  withComputed(({ fine }) => ({
    netSpeedComp: computed(() => fine().netSpeed),
    allowedSpeedComp: computed(() => fine().allowedSpeed),
    exceedingSpeed: computed(() => fine().netSpeed - fine().allowedSpeed),
  })),
  withMethods(({ fine, theme, ...store }) => ({
    updateFine: (fine: Fine) => patchState(store, { fine }),
    updateTheme: (theme: Theme) => patchState(store, { theme }),
  })),
);
