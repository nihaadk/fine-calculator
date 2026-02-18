import { HttpClient } from '@angular/common/http';
import { computed, inject } from '@angular/core';
import { Theme } from '@enums/theme.enum';
import { ICatalog } from '@interfaces/catalog.interface';
import { IFine } from '@interfaces/fine.interfaces';
import { patchState, signalStore, withComputed, withHooks, withMethods, withState } from '@ngrx/signals';
import {
  getExceedingSpeed,
  getMessages as getMessage,
  getRadarValue,
} from '@utils/store-helper';
import { forkJoin } from 'rxjs';
import { MeasuresMessages } from '../enums/measures-messages.enum';
import { initiState } from './init.state';
import { withThemeState } from './theme.store';

export const NO_CONSEQUENCES = MeasuresMessages.NO_CONSEQUENCES;
export const NO_FINE = MeasuresMessages.NO_FINE;

export const Store = signalStore(
  { providedIn: 'root' },
  withThemeState(),
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
  withHooks({
    onInit(store) {
      const http = inject(HttpClient);
      forkJoin({
        fine: http.get<ICatalog[]>('/assets/catalogs/fine-catalog.json'),
        measure: http.get<ICatalog[]>('/assets/catalogs/measure-catalog.json'),
      }).subscribe(({ fine, measure }) => {
        patchState(store, { fineCatalog: fine, measureCatalog: measure });
      });
    },
  }),
);
