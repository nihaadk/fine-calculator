import { RadarType } from '@enums/radar-type.enum';
import { StreetType } from '@enums/street-type.enum';

export interface IFine {
  streetTyp: StreetType | null;
  allowedSpeed: number | null;
  netSpeed: number | null;
  radarTyp: RadarType | null;
}