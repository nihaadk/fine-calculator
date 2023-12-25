import { Fine } from '../interfaces/fine.interfaces';
import { Catalog } from '../interfaces/catalog.interface';
import { MeasuresMessages } from '../enums/measures-messages.enum';
import { Measure } from '../interfaces/measure.interface';

export const getMessages = (
  fine: Fine,
  catalog: Catalog[],
  noMeasuresMessages: MeasuresMessages,
): string => {
  const { netSpeed, allowedSpeed, strassentyp } = fine;
  const exceedingSpeed: number = netSpeed - allowedSpeed;
  const catalogItem: Catalog | undefined = catalog.find(({ type }) => type === strassentyp);
  const message: Measure = getCurrentMeasure(exceedingSpeed, catalogItem?.measures || []);
  return message ? message.message : noMeasuresMessages;
};

export const getCurrentMeasure = (exceedingSpeed: number, measures: Measure[]): Measure => {
  const currentMeasure = measures.find(
    ({ speed }) => exceedingSpeed >= speed.from && exceedingSpeed <= speed.to,
  );

  return currentMeasure || measures[0];
};
