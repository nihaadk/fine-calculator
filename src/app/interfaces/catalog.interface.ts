import { StreetType } from '../enums/street-type.enum';
import { Measure } from './measure.interface';

export interface FineCatalog {
  type: StreetType;
  measures: Measure[];
}
