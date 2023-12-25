import { Fine } from '../interfaces/fine.interfaces';
import { Catalog } from '../interfaces/catalog.interface';
import { MeasuresMessages } from '../enums/measures-messages.enum';
import { Measure } from '../interfaces/measure.interface';
import { RadarType } from '../enums/radar-type.enum';

export const getMessages = (
  fine: Fine,
  catalog: Catalog[],
  noFine: MeasuresMessages,
): string => {
  const { netSpeed, allowedSpeed, strassentyp, radartyp } = fine;
  const radarValue = getRadarValue(radartyp);
  const exceedingSpeed: number = getExceedingSpeed(netSpeed, allowedSpeed, radarValue);
  const catalogItem: Catalog | undefined = catalog.find(({ type }) => type === strassentyp);
  const message: Measure | undefined = catalogItem?.measures.find(
    ({ speed }) => exceedingSpeed >= speed.from && exceedingSpeed <= speed.to,
  );

  return message ? message.message : noFine;
};

export const getExceedingSpeed = (
  netSpeed: number,
  allowedSpeed: number,
  radarValue: number,
): number => {
  if (netSpeed === 0) return 0;
  return netSpeed - allowedSpeed - radarValue;
};

export const getRadarValue = (radar: string): number => {
  switch (radar) {
    case RadarType.LASER_FIX:
      return 3;
    case RadarType.RADAR_FIX:
      return 5;
    case RadarType.RADAR_MOBILE:
      return 7;

    default:
      return 0;
  }
};
