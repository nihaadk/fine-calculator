import { IStore } from '../interfaces/store.inteface';
import { FINE_CATALOG_STATE } from './fine-catalog.state';
import { MEASURE_CATALOG_STATE } from './measures-catalog.state';

export const initiState: IStore = {
  fine: {
    streetTyp: null,
    allowedSpeed: 0,
    netSpeed: 0,
    radarTyp: null,
  },
  measureCatalog: MEASURE_CATALOG_STATE,
  fineCatalog: FINE_CATALOG_STATE,
};
