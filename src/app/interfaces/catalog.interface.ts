import { StreetType } from '../enums/street-type.enum';
import { Measure } from './measure.interface';

export interface Catalog {
  type: StreetType;
  measures: Measure[];
}
