import { FinePrice } from '../enums/fine-price.enum';
import { StreetType } from '../enums/street-type.enum';
import { ICatalog } from '../interfaces/catalog.interface';

export const FINE_CATALOG_STATE: ICatalog[] = [
  {
    type: StreetType.INNER_TOWN,
    measures: [
      {
        message: FinePrice.FINE_40_CHF,
        speed: {
          from: 1,
          to: 5,
        },
      },
      {
        message: FinePrice.FINE_120_CHF,
        speed: {
          from: 6,
          to: 10,
        },
      },
      {
        message: FinePrice.FINE_250_CHF,
        speed: {
          from: 11,
          to: 15,
        },
      },
      {
        message: FinePrice.POLICE_REPORT,
        speed: {
          from: 16,
          to: 20,
        },
      },
      {
        message: FinePrice.POLICE_REPORT,
        speed: {
          from: 21,
          to: 25,
        },
      },
      {
        message: FinePrice.POLICE_REPORT,
        speed: {
          from: 25,
          to: 120,
        },
      },
    ],
  },
  {
    type: StreetType.INNER_TOWN,
    measures: [
      {
        message: FinePrice.FINE_40_CHF,
        speed: {
          from: 1,
          to: 5,
        },
      },
      {
        message: FinePrice.FINE_100_CHF,
        speed: {
          from: 6,
          to: 10,
        },
      },
      {
        message: FinePrice.FINE_160_CHF,
        speed: {
          from: 11,
          to: 15,
        },
      },
      {
        message: FinePrice.FINE_240_CHF,
        speed: {
          from: 16,
          to: 20,
        },
      },
      {
        message: FinePrice.POLICE_REPORT,
        speed: {
          from: 21,
          to: 25,
        },
      },
      {
        message: FinePrice.POLICE_REPORT,
        speed: {
          from: 25,
          to: 120,
        },
      },
    ],
  },
  {
    type: StreetType.INNER_TOWN,
    measures: [
      {
        message: FinePrice.FINE_20_CHF,
        speed: {
          from: 1,
          to: 5,
        },
      },
      {
        message: FinePrice.FINE_60_CHF,
        speed: {
          from: 6,
          to: 10,
        },
      },
      {
        message: FinePrice.FINE_120_CHF,
        speed: {
          from: 11,
          to: 15,
        },
      },
      {
        message: FinePrice.FINE_180_CHF,
        speed: {
          from: 16,
          to: 20,
        },
      },
      {
        message: FinePrice.FINE_260_CHF,
        speed: {
          from: 21,
          to: 25,
        },
      },
      {
        message: FinePrice.POLICE_REPORT,
        speed: {
          from: 25,
          to: 120,
        },
      },
    ],
  },
];
