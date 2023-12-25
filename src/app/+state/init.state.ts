import { Theme } from '../enums/theme.enum';
import { Fine } from '../interfaces/fine.interfaces';
import { FINE_CATALOG_STATE } from './fine-catalog.state';
import { MEASURE_CATALOG_STATE } from './measures-catalog.state';

export const initiState = {
  fine: {
    strassentyp: '',
    allowedSpeed: 0,
    netSpeed: 0,
    radartyp: '',
  } as Fine,
  theme: Theme.LIGHT,
  measureCatalog: MEASURE_CATALOG_STATE,
  fineCatalog: FINE_CATALOG_STATE,
};
