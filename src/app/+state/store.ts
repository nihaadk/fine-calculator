import { computed } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { Theme } from '../enums/theme.enum';
import { Fine } from '../interfaces/fine.interfaces';
import { MeasuresMessages } from '../enums/measures-messages.enum';
import { initiState } from './init.state';
import { getMessages as getMessage, getRadarValue } from '../utils/store-helper';

export const NO_CONSEQUENCES = MeasuresMessages.NO_CONSEQUENCES;
export const NO_FINE = MeasuresMessages.NO_FINE;

export const Store = signalStore(
  { providedIn: 'root' },
  withState(initiState),
  withComputed(({ fine, measureCatalog, fineCatalog }) => ({
    netSpeed: computed(() => fine().netSpeed),
    allowedSpeed: computed(() => fine().allowedSpeed),
    radarValue: computed(() => getRadarValue(fine().radartyp)),
    exceedingSpeed: computed(() =>
      fine().netSpeed === 0
        ? 0
        : fine().netSpeed - fine().allowedSpeed - getRadarValue(fine().radartyp),
    ),
    getMeasureMessage: computed(() => getMessage(fine(), measureCatalog(), NO_CONSEQUENCES)),
    getFineMessage: computed(() => getMessage(fine(), fineCatalog(), NO_FINE)),
  })),
  withMethods(({ fine, theme, ...store }) => ({
    updateFine: (fine: Fine) => patchState(store, { fine }),
    updateTheme: (theme: Theme) => patchState(store, { theme }),
  })),
);
