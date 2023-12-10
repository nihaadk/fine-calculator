import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { Fine } from '../interfaces/fine.interfaces';
import { computed } from '@angular/core';

export const initiState: Fine = {
  strassentyp: '',
  allowedSpeed: 0,
  netSpeed: 0,
  radartyp: '',
};

export const FineStore = signalStore(
  { providedIn: 'root' },
  withState({ fine: initiState }),
  withComputed(({ fine }) => ({
    netSpeedComp: computed(() => fine().netSpeed),
    allowedSpeedComp: computed(() => fine().allowedSpeed),
    exceedingSpeed: computed(() => fine().netSpeed - fine().allowedSpeed),
  })),
  withMethods(({ fine, ...store }) => ({
    update: (fine: Fine) => patchState(store, { fine }),
  })),
);
