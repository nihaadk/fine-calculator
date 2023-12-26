import { computed } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { MeasuresMessages } from '../enums/measures-messages.enum';
import { Theme } from '../enums/theme.enum';
import { IFine } from '../interfaces/fine.interfaces';
import {
  getExceedingSpeed,
  getMessages as getMessage,
  getRadarValue,
} from '../utils/store-helper';
import { initiState } from './init.state';

export const NO_CONSEQUENCES = MeasuresMessages.NO_CONSEQUENCES;
export const NO_FINE = MeasuresMessages.NO_FINE;

export const Store = signalStore(
  { providedIn: 'root' },
  withState(initiState),
  withComputed(({ fine, measureCatalog, fineCatalog }) => ({
    netSpeed: computed(() => fine().netSpeed),
    allowedSpeed: computed(() => fine().allowedSpeed),
    radarValue: computed(() => getRadarValue(fine().radarTyp)),
    exceedingSpeed: computed(() =>
      fine().netSpeed === 0
        ? 0
        : getExceedingSpeed(
            fine().netSpeed,
            fine().allowedSpeed,
            getRadarValue(fine().radarTyp),
          ),
    ),
    getMeasureMessage: computed(() => getMessage(fine(), measureCatalog(), NO_CONSEQUENCES)),
    getFineMessage: computed(() => getMessage(fine(), fineCatalog(), NO_FINE)),
  })),
  withMethods(({ fine, theme, ...store }) => ({
    updateFine: (fine: IFine) => patchState(store, { fine }),
    updateTheme: (theme: Theme) => patchState(store, { theme }),
  })),
);
