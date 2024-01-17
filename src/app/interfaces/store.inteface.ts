import { ICatalog } from './catalog.interface';
import { IFine } from './fine.interfaces';

export interface IStore {
  fine: IFine;
  measureCatalog: ICatalog[];
  fineCatalog: ICatalog[];
}
