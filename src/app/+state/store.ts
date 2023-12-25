import { computed, signal } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { Theme } from '../enums/theme.enum';
import { Fine } from '../interfaces/fine.interfaces';
import { MeasuresMessages } from '../enums/measures-messages.enum';
import { initiState } from './init.state';

export const Store = signalStore(
  { providedIn: 'root' },
  withState(initiState),
  withComputed(({ fine, measureCatalog, fineCatalog }) => ({
    netSpeedComp: computed(() => fine().netSpeed),
    allowedSpeedComp: computed(() => fine().allowedSpeed),
    getMeasureMessage: computed(() => {
      const exceedingSpeed: number = fine().netSpeed - fine().allowedSpeed;
      const item = measureCatalog().find(({ type }) => type === fine().strassentyp);

      const message = item?.measures.find(
        ({ speed }) => exceedingSpeed >= speed.from && exceedingSpeed <= speed.to,
      );

      return message ? message.message : MeasuresMessages.NO_CONSEQUENCES;
    }),
    getFineMessage: computed(() => {
      const exceedingSpeed = fine().netSpeed - fine().allowedSpeed;
      const item = fineCatalog().find(({ type }) => type === fine().strassentyp);
      const message = item?.measures.find(
        ({ speed }) => exceedingSpeed >= speed.from && exceedingSpeed <= speed.to,
      );

      return message ? message.message : MeasuresMessages.NO_FINE;
    }),
  })),
  withMethods(({ fine, theme, ...store }) => ({
    updateFine: (fine: Fine) => patchState(store, { fine }),
    updateTheme: (theme: Theme) => patchState(store, { theme }),
  })),
);
