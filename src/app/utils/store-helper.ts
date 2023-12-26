import { MeasuresMessages } from '../enums/measures-messages.enum';
import { RadarType } from '../enums/radar-type.enum';
import { ICatalog } from '../interfaces/catalog.interface';
import { IFine } from '../interfaces/fine.interfaces';
import { IMeasure } from '../interfaces/measure.interface';

export const getMessages = (
  fine: IFine,
  catalog: ICatalog[],
  noFine: MeasuresMessages,
): string => {
  const netSpeed: number = Number(fine.netSpeed);
  const allowedSpeed: number = Number(fine.allowedSpeed);
  const streetTyp: string = fine.streetTyp ?? '';
  const radarTyp: string = fine.radarTyp ?? '';
  const radarValue = getRadarValue(radarTyp);

  const exceedingSpeed: number = getExceedingSpeed(netSpeed, allowedSpeed, radarValue);
  const catalogItem: ICatalog | undefined = catalog.find(({ type }) => type === streetTyp);
  const message: IMeasure | undefined = catalogItem?.measures.find(
    ({ speed }) => exceedingSpeed >= speed.from && exceedingSpeed <= speed.to,
  );

  return message ? message.message : noFine;
};

export const getExceedingSpeed = (
  netSpeed: number | null,
  allowedSpeed: number | null,
  radarValue: number | null,
): number => {
  if (netSpeed === 0) return 0;

  if (netSpeed === null || allowedSpeed === null || radarValue === null) return 0;

  return netSpeed - allowedSpeed - radarValue;
};

export const getRadarValue = (radar: string | null): number => {
  if (radar === null) return 0;

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
