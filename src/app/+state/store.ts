import { computed, signal } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { Theme } from '../enums/theme.enum';
import { Fine } from '../interfaces/fine.interfaces';
import { StreetType } from '../enums/street-type.enum';
import { MeasuresMessages } from '../enums/measures-messages.enum';

export const innerTown = {
  type: StreetType.INNER_TOWN,
  measures: [
    {
      message: MeasuresMessages.WARNING,
      speed: {
        from: 16,
        to: 20,
      },
    },
    {
      message: MeasuresMessages.REMOVE_1_MONTH_LICENSE,
      speed: {
        from: 21,
        to: 24,
      },
    },
    {
      message: MeasuresMessages.REMOVE_3_MONTH_LICENSE,
      speed: {
        from: 25,
        to: 150,
      },
    },
  ],
};

export const outTown = {
  type: StreetType.OUT_OF_TOWN,
  measures: [
    {
      message: MeasuresMessages.WARNING,
      speed: {
        from: 21,
        to: 25,
      },
    },
    {
      message: MeasuresMessages.REMOVE_1_MONTH_LICENSE,
      speed: {
        from: 26,
        to: 29,
      },
    },
    {
      message: MeasuresMessages.REMOVE_3_MONTH_LICENSE,
      speed: {
        from: 30,
        to: 150,
      },
    },
  ],
};

export const highway = {
  type: StreetType.HIGHWAY,
  measures: [
    {
      message: MeasuresMessages.WARNING,
      speed: {
        from: 26,
        to: 30,
      },
    },
    {
      message: MeasuresMessages.REMOVE_1_MONTH_LICENSE,
      speed: {
        from: 31,
        to: 34,
      },
    },
    {
      message: MeasuresMessages.REMOVE_3_MONTH_LICENSE,
      speed: {
        from: 35,
        to: 150,
      },
    },
  ],
};

export const initiState = {
  fine: {
    strassentyp: '',
    allowedSpeed: 0,
    netSpeed: 0,
    radartyp: '',
  } as Fine,
  theme: Theme.LIGHT,
  fineCatalog: [innerTown, outTown, highway],
};

export const Store = signalStore(
  { providedIn: 'root' },
  withState(initiState),
  withComputed(({ fine, fineCatalog }) => ({
    netSpeedComp: computed(() => fine().netSpeed),
    allowedSpeedComp: computed(() => fine().allowedSpeed),
    getFineMessage: computed(() => {
      const exceedingSpeed = fine().netSpeed - fine().allowedSpeed;
      const catalog = fineCatalog().find(({ type }) => type === fine().strassentyp);
      const measure = catalog?.measures.find(
        ({ speed }) => exceedingSpeed >= speed.from && exceedingSpeed <= speed.to,
      );
      return measure ? measure.message : MeasuresMessages.NO_CONSEQUENCES;
    }),
  })),
  withMethods(({ fine, theme, ...store }) => ({
    updateFine: (fine: Fine) => patchState(store, { fine }),
    updateTheme: (theme: Theme) => patchState(store, { theme }),
  })),
);
