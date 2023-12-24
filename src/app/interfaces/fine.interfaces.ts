import { FineCatalog } from './catalog.interface';

export interface Fine {
  strassentyp: string;
  allowedSpeed: number;
  netSpeed: number;
  radartyp: string;
  fineCatalog: FineCatalog[];
}
