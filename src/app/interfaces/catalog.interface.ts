import { StreetType } from '@enums/street-type.enum';
import { IMeasure } from './measure.interface';

export interface ICatalog {
  type: StreetType;
  measures: IMeasure[];
}
