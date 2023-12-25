import { MeasuresMessages } from '../enums/measures-messages.enum';
import { StreetType } from '../enums/street-type.enum';
import { Catalog } from '../interfaces/catalog.interface';

export const MEASURE_CATALOG_STATE: Catalog[] = [
  {
    type: StreetType.INNER_TOWN,
    measures: [
      {
        message: MeasuresMessages.WARNING,
        speed: {
          from: 16,
          to: 20,
        },
      },
      {
        message: MeasuresMessages.REMOVE_1_MONTH_LICENSE,
        speed: {
          from: 21,
          to: 24,
        },
      },
      {
        message: MeasuresMessages.REMOVE_3_MONTH_LICENSE,
        speed: {
          from: 25,
          to: 150,
        },
      },
    ],
  },
  {
    type: StreetType.OUT_OF_TOWN,
    measures: [
      {
        message: MeasuresMessages.WARNING,
        speed: {
          from: 21,
          to: 25,
        },
      },
      {
        message: MeasuresMessages.REMOVE_1_MONTH_LICENSE,
        speed: {
          from: 26,
          to: 29,
        },
      },
      {
        message: MeasuresMessages.REMOVE_3_MONTH_LICENSE,
        speed: {
          from: 30,
          to: 150,
        },
      },
    ],
  },
  {
    type: StreetType.HIGHWAY,
    measures: [
      {
        message: MeasuresMessages.WARNING,
        speed: {
          from: 26,
          to: 30,
        },
      },
      {
        message: MeasuresMessages.REMOVE_1_MONTH_LICENSE,
        speed: {
          from: 31,
          to: 34,
        },
      },
      {
        message: MeasuresMessages.REMOVE_3_MONTH_LICENSE,
        speed: {
          from: 35,
          to: 150,
        },
      },
    ],
  },
];
