import { MeasuresMessages } from '@enums/measures-messages.enum';
import { RadarType } from '@enums/radar-type.enum';
import { StreetType } from '@enums/street-type.enum';
import { ICatalog } from '@interfaces/catalog.interface';
import { IFine } from '@interfaces/fine.interfaces';
import { getExceedingSpeed, getMessages, getRadarValue } from './store-helper';

const mockCatalog: ICatalog[] = [
  {
    type: StreetType.INNER_TOWN,
    measures: [
      { speed: { from: 1, to: 15 }, message: MeasuresMessages.WARNING },
      { speed: { from: 16, to: 25 }, message: MeasuresMessages.ADVERTISEMENT },
      { speed: { from: 26, to: 999 }, message: MeasuresMessages.REMOVE_1_MONTH_LICENSE },
    ],
  },
];

describe('getRadarValue', () => {
  it('returns 3 for LASER_FIX', () => {
    expect(getRadarValue(RadarType.LASER_FIX)).toBe(3);
  });

  it('returns 5 for RADAR_FIX', () => {
    expect(getRadarValue(RadarType.RADAR_FIX)).toBe(5);
  });

  it('returns 7 for RADAR_MOBILE', () => {
    expect(getRadarValue(RadarType.RADAR_MOBILE)).toBe(7);
  });

  it('returns 0 for null', () => {
    expect(getRadarValue(null)).toBe(0);
  });

  it('returns 0 for unknown string', () => {
    expect(getRadarValue('UNKNOWN')).toBe(0);
  });
});

describe('getExceedingSpeed', () => {
  it('returns 0 when netSpeed is 0', () => {
    expect(getExceedingSpeed(0, 50, 3)).toBe(0);
  });

  it('returns 0 when netSpeed is null', () => {
    expect(getExceedingSpeed(null, 50, 3)).toBe(0);
  });

  it('returns 0 when allowedSpeed is null', () => {
    expect(getExceedingSpeed(80, null, 3)).toBe(0);
  });

  it('returns 0 when radarValue is null', () => {
    expect(getExceedingSpeed(80, 50, null)).toBe(0);
  });

  it('calculates correctly with LASER_FIX tolerance (3 km/h)', () => {
    expect(getExceedingSpeed(80, 50, 3)).toBe(27);
  });

  it('calculates correctly with RADAR_FIX tolerance (5 km/h)', () => {
    expect(getExceedingSpeed(80, 50, 5)).toBe(25);
  });

  it('calculates correctly with RADAR_MOBILE tolerance (7 km/h)', () => {
    expect(getExceedingSpeed(80, 50, 7)).toBe(23);
  });

  it('returns negative value when measured speed is below limit', () => {
    expect(getExceedingSpeed(50, 70, 3)).toBe(-23);
  });
});

describe('getMessages', () => {
  const baseFine: IFine = {
    streetTyp: StreetType.INNER_TOWN,
    allowedSpeed: 50,
    netSpeed: 80,
    radarTyp: RadarType.LASER_FIX,
  };

  it('returns correct message when speed matches a catalog entry', () => {
    // 80 - 50 - 3 = 27 → REMOVE_1_MONTH_LICENSE range (26–999)
    const result = getMessages(baseFine, mockCatalog, MeasuresMessages.NO_CONSEQUENCES);
    expect(result).toBe(MeasuresMessages.REMOVE_1_MONTH_LICENSE);
  });

  it('returns WARNING for low exceeding speed (within 1–15 range)', () => {
    const fine: IFine = { ...baseFine, netSpeed: 60 }; // 60 - 50 - 3 = 7
    const result = getMessages(fine, mockCatalog, MeasuresMessages.NO_CONSEQUENCES);
    expect(result).toBe(MeasuresMessages.WARNING);
  });

  it('returns ADVERTISEMENT for mid-range exceeding speed (16–25)', () => {
    const fine: IFine = { ...baseFine, netSpeed: 73 }; // 73 - 50 - 3 = 20
    const result = getMessages(fine, mockCatalog, MeasuresMessages.NO_CONSEQUENCES);
    expect(result).toBe(MeasuresMessages.ADVERTISEMENT);
  });

  it('returns fallback when no catalog entry matches the street type', () => {
    const fine: IFine = { ...baseFine, streetTyp: StreetType.HIGHWAY };
    const result = getMessages(fine, mockCatalog, MeasuresMessages.NO_CONSEQUENCES);
    expect(result).toBe(MeasuresMessages.NO_CONSEQUENCES);
  });

  it('returns fallback when exceeding speed is 0 (not in any range)', () => {
    const fine: IFine = { ...baseFine, netSpeed: 53 }; // 53 - 50 - 3 = 0 → no range starts at 0
    const result = getMessages(fine, mockCatalog, MeasuresMessages.NO_CONSEQUENCES);
    expect(result).toBe(MeasuresMessages.NO_CONSEQUENCES);
  });

  it('returns fallback when all IFine fields are null', () => {
    const fine: IFine = { streetTyp: null, allowedSpeed: null, netSpeed: null, radarTyp: null };
    const result = getMessages(fine, mockCatalog, MeasuresMessages.NO_CONSEQUENCES);
    expect(result).toBe(MeasuresMessages.NO_CONSEQUENCES);
  });
});
