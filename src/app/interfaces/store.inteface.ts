import { Theme } from '../enums/theme.enum';
import { ICatalog } from './catalog.interface';
import { IFine } from './fine.interfaces';

export interface IStore {
  fine: IFine;
  theme: Theme;
  measureCatalog: ICatalog[];
  fineCatalog: ICatalog[];
}
