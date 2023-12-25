import { Catalog } from './catalog.interface';

export interface Fine {
  strassentyp: string;
  allowedSpeed: number;
  netSpeed: number;
  radartyp: string;
  mesaureCatalog: Catalog[];
  fineCatalog: Catalog[];
}
