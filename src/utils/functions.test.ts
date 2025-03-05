import { describe, expect, test } from 'vitest';
import { createRef } from 'react';
import {
  cn,
  getYearsBetween,
  generateCalendar,
  getNextIndex,
  formatNumberWithLeadingZero,
  convertDateToMaskFormat,
  convertMaskFormatToDate,
  adjustDateToPeriod,
  isDateInPeriod,
  isCalendarDayEqualsToDate,
  getYearButtonRef,
  createDate,
  getDaysInMonth,
  getDaysInPreviousMonth,
} from './functions';
import { WEEK_DAY, MONTH } from './enums';

describe('📍 - cn', () => {
  test('Singe className passed returns passed className', () => {
    expect(cn('')).toEqual('');
    expect(cn('foo')).toEqual('foo');
  });
  test('Several classNames passed returns merged classNames with space', () => {
    expect(cn('foo', 'bar')).toEqual('foo bar');
    expect(cn('foo', 'bar', 'too')).toEqual('foo bar too');
    expect(cn('foo', '', 'bar')).toEqual('foo bar');
    expect(cn('foo', 'bar', '')).toEqual('foo bar');
    expect(cn('foo', '')).toEqual('foo');
    expect(cn('foo', ' ')).toEqual('foo');
    expect(cn('foo', ' ', 'bar')).toEqual('foo bar');
    expect(cn('foo', 'bar', ' ')).toEqual('foo bar');
  });
  test('Passed Records with true values are added to base className', () => {
    expect(cn('foo', { bar: true })).toEqual('foo bar');
    expect(cn('foo', { bar: true, car: true })).toEqual('foo bar car');
    expect(cn('foo', { bar: true }, { car: true })).toEqual('foo bar car');
  });
  test('Passed Records with false values are ignored', () => {
    expect(cn('foo', { bar: false })).toEqual('foo');
    expect(cn('foo', { bar: false, car: false })).toEqual('foo');
    expect(cn('foo', { bar: false }, { car: false })).toEqual('foo');
  });
  test('Passed empty Records is ignored', () => {
    expect(cn('foo', {})).toEqual('foo');
    expect(cn('foo', {}, {})).toEqual('foo');
  });
  test('classNames passed as strings or Records are trimmed', () => {
    expect(cn('foo ', 'bar ', { ['too ']: true })).toEqual('foo bar too');
  });
});

describe('📍 - getYearsBetween', () => {
  test('Start date is before end date, returns array of years including start and end year', () => {
    expect(getYearsBetween([createDate(1, MONTH.JANUARY, 2000), createDate(1, MONTH.JANUARY, 2001)])).toEqual([
      2000, 2001,
    ]);
    expect(getYearsBetween([createDate(1, MONTH.JANUARY, 2000), createDate(1, MONTH.JANUARY, 2003)])).toEqual([
      2000, 2001, 2002, 2003,
    ]);
  });
  test('Start date is after end date, returns empty array', () => {
    expect(getYearsBetween([createDate(1, MONTH.JANUARY, 2001), createDate(1, MONTH.JANUARY, 2000)])).toEqual([]);
    expect(getYearsBetween([createDate(10, MONTH.NOVEMBER, 2000), createDate(1, MONTH.JANUARY, 2000)])).toEqual([]);
  });
  test('Start date year equals end date year, returns array with this year', () => {
    expect(getYearsBetween([createDate(1, MONTH.JANUARY, 2000), createDate(10, MONTH.NOVEMBER, 2000)])).toEqual([2000]);
    expect(getYearsBetween([createDate(1, MONTH.JANUARY, 2000), createDate(1, MONTH.JANUARY, 2000)])).toEqual([2000]);
  });
});

describe('📍 - generateCalendar', () => {
  test('Not leap year February 2025, check 29th and 28th', () => {
    const calendar = generateCalendar(
      WEEK_DAY.MONDAY,
      [MONTH.FEBRUARY, 2025],
      [createDate(1, MONTH.JANUARY, 2023), createDate(1, MONTH.JANUARY, 2026, true)],
    );
    expect(calendar.length).toEqual(5);
    expect(calendar[4][4]).toEqual({
      outOfPeriod: false,
      notThisMonth: false,
      day: 28,
      year: 2025,
      month: 1,
    });
    expect(calendar[4][5]).toEqual({
      outOfPeriod: false,
      notThisMonth: true,
      day: 1,
      year: 2025,
      month: 2,
    });
  });
  test('Not leap year February 2100, check 29th and 28th (Even 2100 divides by 4)', () => {
    const calendar = generateCalendar(
      WEEK_DAY.MONDAY,
      [MONTH.FEBRUARY, 2100],
      [createDate(1, MONTH.JANUARY, 2099), createDate(1, MONTH.JANUARY, 2101, true)],
    );
    expect(calendar.length).toEqual(4);
    expect(calendar[3][6]).toEqual({
      outOfPeriod: false,
      notThisMonth: false,
      day: 28,
      year: 2100,
      month: 1,
    });
    expect(calendar[3][7]).toBeUndefined();
  });
  test('Leap year February 2024, check 29th and 28th', () => {
    const calendar = generateCalendar(
      WEEK_DAY.MONDAY,
      [MONTH.FEBRUARY, 2024],
      [createDate(1, MONTH.JANUARY, 2023), createDate(1, MONTH.JANUARY, 2026, true)],
    );
    expect(calendar.length).toEqual(5);
    expect(calendar[4][2]).toEqual({
      outOfPeriod: false,
      notThisMonth: false,
      day: 28,
      year: 2024,
      month: 1,
    });
    expect(calendar[4][3]).toEqual({
      outOfPeriod: false,
      notThisMonth: false,
      day: 29,
      year: 2024,
      month: 1,
    });
    expect(calendar[4][4]).toEqual({
      outOfPeriod: false,
      notThisMonth: true,
      day: 1,
      year: 2024,
      month: 2,
    });
  });
  test('Check 30 and 31 days months', () => {
    const PERIOD: [Date, Date] = [createDate(1, MONTH.JANUARY, 2023), createDate(1, MONTH.JANUARY, 2026, true)];
    const januar = generateCalendar(WEEK_DAY.MONDAY, [MONTH.JANUARY, 2024], PERIOD);
    const march = generateCalendar(WEEK_DAY.MONDAY, [MONTH.MARCH, 2024], PERIOD);
    const april = generateCalendar(WEEK_DAY.MONDAY, [MONTH.APRIL, 2024], PERIOD);
    const may = generateCalendar(WEEK_DAY.MONDAY, [MONTH.MAY, 2024], PERIOD);
    const june = generateCalendar(WEEK_DAY.MONDAY, [MONTH.JUNE, 2024], PERIOD);
    const july = generateCalendar(WEEK_DAY.MONDAY, [MONTH.JULY, 2024], PERIOD);
    const august = generateCalendar(WEEK_DAY.MONDAY, [MONTH.AUGUST, 2024], PERIOD);
    const september = generateCalendar(WEEK_DAY.MONDAY, [MONTH.SEPTEMBER, 2024], PERIOD);
    const october = generateCalendar(WEEK_DAY.MONDAY, [MONTH.OCTOBER, 2024], PERIOD);
    const november = generateCalendar(WEEK_DAY.MONDAY, [MONTH.NOVEMBER, 2024], PERIOD);
    const december = generateCalendar(WEEK_DAY.MONDAY, [MONTH.DECEMBER, 2024], PERIOD);
    expect(januar[4][2].day).toEqual(31);
    expect(januar[4][3].day).toEqual(1);
    expect(march.length).toEqual(5);
    expect(march[4][6].day).toEqual(31);
    expect(march[4][7]).toBeUndefined();
    expect(april[4][1].day).toEqual(30);
    expect(april[4][2].day).toEqual(1);
    expect(may[4][4].day).toEqual(31);
    expect(may[4][5].day).toEqual(1);
    expect(june.length).toEqual(5);
    expect(june[4][6].day).toEqual(30);
    expect(june[4][7]).toBeUndefined();
    expect(july[4][2].day).toEqual(31);
    expect(july[4][3].day).toEqual(1);
    expect(august[4][5].day).toEqual(31);
    expect(august[4][6].day).toEqual(1);
    expect(september[5][0].day).toEqual(30);
    expect(september[5][1].day).toEqual(1);
    expect(october[4][3].day).toEqual(31);
    expect(october[4][4].day).toEqual(1);
    expect(november[4][5].day).toEqual(30);
    expect(november[4][6].day).toEqual(1);
    expect(december[5][1].day).toEqual(31);
    expect(december[5][2].day).toEqual(1);
  });
  test('May 2024, check days within and outside of month, detect ranges', () => {
    const may = generateCalendar(
      WEEK_DAY.MONDAY,
      [MONTH.MAY, 2024],
      [createDate(1, MONTH.JANUARY, 2023), createDate(1, MONTH.JANUARY, 2026)],
    );
    expect(may.length).toEqual(5);
    expect(may[0][0].notThisMonth).toBeTruthy();
    expect(may[0][1].notThisMonth).toBeTruthy();
    expect(may[0][2].notThisMonth).toBeFalsy();
    expect(may[4][4].notThisMonth).toBeFalsy();
    expect(may[4][5].notThisMonth).toBeTruthy();
    expect(may[4][6].notThisMonth).toBeTruthy();
  });
  test('Every week contains only 7 days', () => {
    const may = generateCalendar(
      WEEK_DAY.MONDAY,
      [MONTH.MAY, 2024],
      [createDate(1, MONTH.JANUARY, 2023), createDate(1, MONTH.JANUARY, 2026, true)],
    );
    may.forEach((week) => expect(week.length).toEqual(7));
  });
  test('If month is not fully in period, days that are out of period has outOfPeriod: true', () => {
    const may = generateCalendar(
      WEEK_DAY.MONDAY,
      [MONTH.MAY, 2024],
      [createDate(15, MONTH.MAY, 2024), createDate(1, MONTH.JANUARY, 2026, true)],
    );
    expect(may.length).toEqual(5);
    expect(may[0][0].outOfPeriod).toBeTruthy();
    expect(may[2][1].outOfPeriod).toBeTruthy();
    expect(may[2][2].outOfPeriod).toBeFalsy();
    expect(may[4][6].outOfPeriod).toBeFalsy();
  });
  test('weekStart will change the order of first day in a week', () => {
    const mayFirstMonday = generateCalendar(
      WEEK_DAY.MONDAY,
      [MONTH.MAY, 2024],
      [createDate(15, MONTH.MAY, 2024), createDate(1, MONTH.JANUARY, 2026)],
    );
    const mayFirstSunday = generateCalendar(
      WEEK_DAY.SUNDAY,
      [MONTH.MAY, 2024],
      [createDate(15, MONTH.MAY, 2024), createDate(1, MONTH.JANUARY, 2026)],
    );
    expect(mayFirstMonday.length).toEqual(5);
    expect(mayFirstMonday[0][0].day).toEqual(29);
    expect(mayFirstMonday[1][0].day).toEqual(6);
    expect(mayFirstMonday[2][0].day).toEqual(13);
    expect(mayFirstMonday[3][0].day).toEqual(20);
    expect(mayFirstMonday[4][0].day).toEqual(27);
    expect(mayFirstSunday.length).toEqual(5);
    expect(mayFirstSunday[0][0].day).toEqual(28);
    expect(mayFirstSunday[1][0].day).toEqual(5);
    expect(mayFirstSunday[2][0].day).toEqual(12);
    expect(mayFirstSunday[3][0].day).toEqual(19);
    expect(mayFirstSunday[4][0].day).toEqual(26);
  });
});

describe('📍 - getNextIndex', () => {
  test('Forward if index is within array returns next element or first element if index is last one', () => {
    expect(getNextIndex([10, 20, 30], 0, 'forward')).toBe(1);
    expect(getNextIndex([10, 20, 30], 1, 'forward')).toBe(2);
    expect(getNextIndex([10, 20, 30], 2, 'forward')).toBe(0);
  });
  test('Backward if index is within array returns previous element or last element if index is first one', () => {
    expect(getNextIndex([10, 20, 30], 0, 'backward')).toBe(2);
    expect(getNextIndex([10, 20, 30], 1, 'backward')).toBe(0);
    expect(getNextIndex([10, 20, 30], 2, 'backward')).toBe(1);
  });
  test('If index is out of array returns -1 no matter if its forward or backward', () => {
    expect(getNextIndex([10, 20, 30], -1, 'forward')).toBe(-1);
    expect(getNextIndex([10, 20, 30], 3, 'forward')).toBe(-1);
    expect(getNextIndex([10, 20, 30], -1, 'backward')).toBe(-1);
    expect(getNextIndex([10, 20, 30], 3, 'backward')).toBe(-1);
  });
  test('If array is empty returns -1', () => {
    expect(getNextIndex([], 0, 'forward')).toBe(-1);
    expect(getNextIndex([], 0, 'backward')).toBe(-1);
  });
});

describe('📍 - formatNumberWithLeadingZero', () => {
  test('Add leading zero to single digits', () => {
    expect(formatNumberWithLeadingZero(0)).toEqual('0');
    expect(formatNumberWithLeadingZero(1)).toEqual('01');
    expect(formatNumberWithLeadingZero(10)).toEqual('10');
  });
  test('Do not add leading zero if digit is negative', () => {
    expect(formatNumberWithLeadingZero(-10)).toEqual('-10');
    expect(formatNumberWithLeadingZero(-1)).toEqual('-1');
  });
  test('If digit is NaN returns string "NaN"', () => {
    expect(formatNumberWithLeadingZero(NaN)).toEqual('NaN');
  });
});

describe('📍 - convertDateToMaskFormat', () => {
  test('Use precision day level mask converts Date to mask formatted string', () => {
    expect(convertDateToMaskFormat(createDate(1, MONTH.FEBRUARY, 2000), ['/', 'd', 'm', 'y'])).toEqual('01/02/2000');
    expect(convertDateToMaskFormat(createDate(15, MONTH.DECEMBER, 2000), ['/', 'd', 'm', 'y'])).toEqual('15/12/2000');
  });
  test('Use precision month level mask converts Date to mask formatted string', () => {
    expect(convertDateToMaskFormat(createDate(1, MONTH.FEBRUARY, 2000), ['/', 'm', 'y'])).toEqual('02/2000');
    expect(convertDateToMaskFormat(createDate(15, MONTH.DECEMBER, 2000), ['/', 'm', 'y'])).toEqual('12/2000');
  });
  test('Mask can change order of day, month, year and separators in output ', () => {
    expect(convertDateToMaskFormat(createDate(1, MONTH.FEBRUARY, 2000), ['-', 'm', 'd', 'y'])).toEqual('02-01-2000');
    expect(convertDateToMaskFormat(createDate(15, MONTH.DECEMBER, 2000), ['-', 'm', 'd', 'y'])).toEqual('12-15-2000');
    expect(convertDateToMaskFormat(createDate(1, MONTH.FEBRUARY, 2000), ['-', 'y', 'm'])).toEqual('2000-02');
    expect(convertDateToMaskFormat(createDate(15, MONTH.DECEMBER, 2000), ['-', 'y', 'm'])).toEqual('2000-12');
  });
});

describe('📍 - convertMaskFormatToDate', () => {
  test('Using default mask for day precision DD/MM/YYYY', () => {
    expect(convertMaskFormatToDate('01/02/2000', ['/', 'd', 'm', 'y'])).toEqual(createDate(1, MONTH.FEBRUARY, 2000));
    expect(convertMaskFormatToDate('15/12/2000', ['/', 'd', 'm', 'y'])).toEqual(createDate(15, MONTH.DECEMBER, 2000));
  });
  test('Using default mask for month precision MM/YYYY', () => {
    expect(convertMaskFormatToDate('02/2000', ['/', 'm', 'y'])).toEqual(createDate(1, MONTH.FEBRUARY, 2000));
    expect(convertMaskFormatToDate('12/2000', ['/', 'm', 'y'])).toEqual(createDate(1, MONTH.DECEMBER, 2000));
  });
  test('Using custom mask for day precision MM-YYYY-DD', () => {
    expect(convertMaskFormatToDate('02-2000-01', ['-', 'm', 'y', 'd'])).toEqual(createDate(1, MONTH.FEBRUARY, 2000));
    expect(convertMaskFormatToDate('12-2000-15', ['-', 'm', 'y', 'd'])).toEqual(createDate(15, MONTH.DECEMBER, 2000));
  });
  test('Using custom mask for month precision YYYY-MM', () => {
    expect(convertMaskFormatToDate('2000-01', ['-', 'y', 'm'])).toEqual(createDate(1, MONTH.JANUARY, 2000));
    expect(convertMaskFormatToDate('2000-12', ['-', 'y', 'm'])).toEqual(createDate(1, MONTH.DECEMBER, 2000));
  });
  test('Pass not real or not complete date, return null', () => {
    expect(convertMaskFormatToDate('99/44/1111', ['/', 'd', 'm', 'y'])).toBeNull();
    expect(convertMaskFormatToDate('00/00/0000', ['/', 'd', 'm', 'y'])).toBeNull();
    expect(convertMaskFormatToDate('DD/MM/YYYY', ['/', 'd', 'm', 'y'])).toBeNull();
    expect(convertMaskFormatToDate('20/03/1YYY', ['/', 'd', 'm', 'y'])).toBeNull();
    expect(convertMaskFormatToDate('99/1111', ['/', 'm', 'y'])).toBeNull();
    expect(convertMaskFormatToDate('00/0000', ['/', 'm', 'y'])).toBeNull();
    expect(convertMaskFormatToDate('MM/YYYY', ['/', 'm', 'y'])).toBeNull();
    expect(convertMaskFormatToDate('03/1YYY', ['/', 'm', 'y'])).toBeNull();
  });
});

describe('📍 - adjustDateToPeriod', () => {
  test('If date is after period return end date of period', () => {
    const start = createDate(10, MONTH.NOVEMBER, 1990);
    const end = createDate(10, MONTH.NOVEMBER, 1994, true);
    expect(
      adjustDateToPeriod(createDate(10, MONTH.NOVEMBER, 2000), createDate(10, MONTH.NOVEMBER, 1992), [start, end]),
    ).toEqual(end);
  });
  test('If date is before period return first date of period', () => {
    const start = createDate(10, MONTH.NOVEMBER, 1990);
    const end = createDate(10, MONTH.NOVEMBER, 1994, true);
    expect(
      adjustDateToPeriod(createDate(10, MONTH.NOVEMBER, 1980), createDate(10, MONTH.NOVEMBER, 1992), [start, end]),
    ).toEqual(start);
  });
  test('If date is within period return date', () => {
    const start = createDate(10, MONTH.NOVEMBER, 1990);
    const end = createDate(10, MONTH.NOVEMBER, 1994, true);
    const date = createDate(10, MONTH.NOVEMBER, 1992);
    expect(adjustDateToPeriod(date, createDate(10, MONTH.NOVEMBER, 1992), [start, end])).toEqual(date);
  });
  test('If date is null and init is within period return init date', () => {
    const start = createDate(10, MONTH.NOVEMBER, 1990);
    const end = createDate(10, MONTH.NOVEMBER, 1994, true);
    const init = createDate(10, MONTH.NOVEMBER, 1992);
    expect(adjustDateToPeriod(null, init, [start, end])).toEqual(init);
  });
  test('If date is null and init is before period return first date of period', () => {
    const start = createDate(10, MONTH.NOVEMBER, 1990);
    const end = createDate(10, MONTH.NOVEMBER, 1994, true);
    const init = createDate(10, MONTH.NOVEMBER, 1980);
    expect(adjustDateToPeriod(null, init, [start, end])).toEqual(start);
  });
  test('If date is null and init is after period return last date of period', () => {
    const start = createDate(10, MONTH.NOVEMBER, 1990);
    const end = createDate(10, MONTH.NOVEMBER, 1994, true);
    const init = createDate(10, MONTH.NOVEMBER, 1996);
    expect(adjustDateToPeriod(null, init, [start, end])).toEqual(end);
  });
});

describe('📍 - isDateInPeriod', () => {
  test('If date is null return false', () => {
    const start = createDate(1, MONTH.FEBRUARY, 2001);
    const end = createDate(1, MONTH.FEBRUARY, 2002, true);
    expect(isDateInPeriod(null, [start, end])).toBeFalsy();
  });
  test('If date is not in period return false', () => {
    const start = createDate(1, MONTH.FEBRUARY, 2001);
    const end = createDate(1, MONTH.FEBRUARY, 2002, true);
    expect(isDateInPeriod(createDate(1, MONTH.FEBRUARY, 2000), [start, end])).toBeFalsy();
    expect(isDateInPeriod(createDate(1, MONTH.FEBRUARY, 2003), [start, end])).toBeFalsy();
  });
  test('If date is in period return true', () => {
    const start = createDate(1, MONTH.FEBRUARY, 2001);
    const end = createDate(1, MONTH.FEBRUARY, 2003, true);
    expect(isDateInPeriod(createDate(1, MONTH.FEBRUARY, 2002), [start, end])).toBeTruthy();
  });
  test('Date is on edge values, period is counted as included dates', () => {
    const start = createDate(10, MONTH.FEBRUARY, 2001);
    const end = createDate(10, MONTH.FEBRUARY, 2002, true);
    expect(isDateInPeriod(createDate(10, MONTH.FEBRUARY, 2001), [start, end])).toBeTruthy();
    expect(isDateInPeriod(createDate(10, MONTH.FEBRUARY, 2002), [start, end])).toBeTruthy();
    expect(isDateInPeriod(createDate(9, MONTH.FEBRUARY, 2001), [start, end])).toBeFalsy();
    expect(isDateInPeriod(createDate(11, MONTH.FEBRUARY, 2002), [start, end])).toBeFalsy();
  });
});

describe('📍 - isCalendarDayEqualsToDate', () => {
  test('If CalendarDay equals Date return true', () => {
    expect(
      isCalendarDayEqualsToDate(
        { outOfPeriod: false, notThisMonth: false, day: 12, month: MONTH.FEBRUARY, year: 2020 },
        createDate(12, MONTH.FEBRUARY, 2020),
      ),
    ).toBeTruthy();
    expect(
      isCalendarDayEqualsToDate(
        { outOfPeriod: true, notThisMonth: true, day: 12, month: MONTH.FEBRUARY, year: 2020 },
        createDate(12, MONTH.FEBRUARY, 2020),
      ),
    ).toBeTruthy();
  });
  test('If CalendarDay does not equal Date return false', () => {
    expect(
      isCalendarDayEqualsToDate(
        { outOfPeriod: false, notThisMonth: false, day: 12, month: MONTH.FEBRUARY, year: 2020 },
        createDate(12, MONTH.MARCH, 2020),
      ),
    ).toBeFalsy();
    expect(
      isCalendarDayEqualsToDate(
        { outOfPeriod: true, notThisMonth: true, day: 12, month: MONTH.FEBRUARY, year: 2020 },
        createDate(12, MONTH.MARCH, 2020),
      ),
    ).toBeFalsy();
  });
  test('If date is null, return false', () => {
    expect(
      isCalendarDayEqualsToDate(
        { outOfPeriod: true, notThisMonth: true, day: 12, month: MONTH.FEBRUARY, year: 2020 },
        null,
      ),
    ).toBeFalsy();
  });
});

describe('📍 - getYearButtonRef', () => {
  test('Returns null is isMonth is true. Ref can be returned only for years', () => {
    const selectedRef = createRef<HTMLButtonElement>();
    const startRef = createRef<HTMLButtonElement>();
    expect(getYearButtonRef(true, ['2025', '2025', '2000'], [selectedRef, startRef])).toBeNull();
  });
  test('Return null when buttonYear matches neither selectedYear nor startYear', () => {
    const selectedRef = createRef<HTMLButtonElement>();
    const startRef = createRef<HTMLButtonElement>();
    expect(getYearButtonRef(false, ['2030', '2025', '2000'], [selectedRef, startRef])).toBeNull();
  });
  test('Return selectedRef when buttonYear matches selectedYear', () => {
    const selectedRef = createRef<HTMLButtonElement>();
    const startRef = createRef<HTMLButtonElement>();
    expect(getYearButtonRef(false, ['2025', '2025', '2000'], [selectedRef, startRef])).toBe(selectedRef);
  });
  test('Return startRef when buttonYear matches startYear', () => {
    const selectedRef = createRef<HTMLButtonElement>();
    const startRef = createRef<HTMLButtonElement>();
    expect(getYearButtonRef(false, ['2020', '2025', '2020'], [selectedRef, startRef])).toBe(startRef);
  });
});

describe('📍 - createDate', () => {
  test('Create date with time at begin of day', () => {
    expect(createDate(1, 1, 2024, false)).toEqual(new Date('2024-02-01T00:00:00.000Z'));
    expect(createDate(31, 11, 2024, false)).toEqual(new Date('2024-12-31T00:00:00.000Z'));
    expect(createDate(32, 11, 2024, false)).toEqual(new Date('2024-12-01T00:00:00.000Z'));
    expect(createDate(31, 12, 2024, false)).toEqual(new Date('2024-01-31T00:00:00.000Z'));
  });
  test('Create date with time at end of day', () => {
    expect(createDate(1, 1, 2024, true)).toEqual(new Date('2024-02-01T23:59:59.000Z'));
    expect(createDate(31, 11, 2024, true)).toEqual(new Date('2024-12-31T23:59:59.000Z'));
    expect(createDate(32, 11, 2024, true)).toEqual(new Date('2024-12-01T23:59:59.000Z'));
    expect(createDate(31, 12, 2024, true)).toEqual(new Date('2024-01-31T23:59:59.000Z'));
  });
  test('endDayTime default value', () => {
    expect(createDate(1, 1, 2024)).toEqual(new Date('2024-02-01T00:00:00.000Z'));
  });
});

describe('📍 - getDaysInMonth', () => {
  test('Get days for each month (Leap year)', () => {
    expect(getDaysInMonth(MONTH.JANUARY, 2000)).toEqual(31);
    expect(getDaysInMonth(MONTH.FEBRUARY, 2000)).toEqual(29);
    expect(getDaysInMonth(MONTH.MARCH, 2000)).toEqual(31);
    expect(getDaysInMonth(MONTH.APRIL, 2000)).toEqual(30);
    expect(getDaysInMonth(MONTH.MAY, 2000)).toEqual(31);
    expect(getDaysInMonth(MONTH.JUNE, 2000)).toEqual(30);
    expect(getDaysInMonth(MONTH.JULY, 2000)).toEqual(31);
    expect(getDaysInMonth(MONTH.AUGUST, 2000)).toEqual(31);
    expect(getDaysInMonth(MONTH.SEPTEMBER, 2000)).toEqual(30);
    expect(getDaysInMonth(MONTH.OCTOBER, 2000)).toEqual(31);
    expect(getDaysInMonth(MONTH.NOVEMBER, 2000)).toEqual(30);
    expect(getDaysInMonth(MONTH.DECEMBER, 2000)).toEqual(31);
  });
  test('Get days for each month (Not leap year)', () => {
    expect(getDaysInMonth(MONTH.JANUARY, 2001)).toEqual(31);
    expect(getDaysInMonth(MONTH.FEBRUARY, 2001)).toEqual(28);
    expect(getDaysInMonth(MONTH.MARCH, 2001)).toEqual(31);
    expect(getDaysInMonth(MONTH.APRIL, 2001)).toEqual(30);
    expect(getDaysInMonth(MONTH.MAY, 2001)).toEqual(31);
    expect(getDaysInMonth(MONTH.JUNE, 2001)).toEqual(30);
    expect(getDaysInMonth(MONTH.JULY, 2001)).toEqual(31);
    expect(getDaysInMonth(MONTH.AUGUST, 2001)).toEqual(31);
    expect(getDaysInMonth(MONTH.SEPTEMBER, 2001)).toEqual(30);
    expect(getDaysInMonth(MONTH.OCTOBER, 2001)).toEqual(31);
    expect(getDaysInMonth(MONTH.NOVEMBER, 2001)).toEqual(30);
    expect(getDaysInMonth(MONTH.DECEMBER, 2001)).toEqual(31);
  });
  test('Get days for each month (Not leap year, even by 4 divides)', () => {
    expect(getDaysInMonth(MONTH.JANUARY, 2100)).toEqual(31);
    expect(getDaysInMonth(MONTH.FEBRUARY, 2100)).toEqual(28);
    expect(getDaysInMonth(MONTH.MARCH, 2100)).toEqual(31);
    expect(getDaysInMonth(MONTH.APRIL, 2100)).toEqual(30);
    expect(getDaysInMonth(MONTH.MAY, 2100)).toEqual(31);
    expect(getDaysInMonth(MONTH.JUNE, 2100)).toEqual(30);
    expect(getDaysInMonth(MONTH.JULY, 2100)).toEqual(31);
    expect(getDaysInMonth(MONTH.AUGUST, 2100)).toEqual(31);
    expect(getDaysInMonth(MONTH.SEPTEMBER, 2100)).toEqual(30);
    expect(getDaysInMonth(MONTH.OCTOBER, 2100)).toEqual(31);
    expect(getDaysInMonth(MONTH.NOVEMBER, 2100)).toEqual(30);
    expect(getDaysInMonth(MONTH.DECEMBER, 2100)).toEqual(31);
  });
});

describe('📍 - getDaysInPreviousMonth', () => {
  test('Get days for each month (Leap year)', () => {
    expect(getDaysInPreviousMonth(MONTH.JANUARY, 2000)).toEqual(31);
    expect(getDaysInPreviousMonth(MONTH.FEBRUARY, 2000)).toEqual(31);
    expect(getDaysInPreviousMonth(MONTH.MARCH, 2000)).toEqual(29);
    expect(getDaysInPreviousMonth(MONTH.APRIL, 2000)).toEqual(31);
    expect(getDaysInPreviousMonth(MONTH.MAY, 2000)).toEqual(30);
    expect(getDaysInPreviousMonth(MONTH.JUNE, 2000)).toEqual(31);
    expect(getDaysInPreviousMonth(MONTH.JULY, 2000)).toEqual(30);
    expect(getDaysInPreviousMonth(MONTH.AUGUST, 2000)).toEqual(31);
    expect(getDaysInPreviousMonth(MONTH.SEPTEMBER, 2000)).toEqual(31);
    expect(getDaysInPreviousMonth(MONTH.OCTOBER, 2000)).toEqual(30);
    expect(getDaysInPreviousMonth(MONTH.NOVEMBER, 2000)).toEqual(31);
    expect(getDaysInPreviousMonth(MONTH.DECEMBER, 2000)).toEqual(30);
  });
  test('Get days for each month (Not leap year)', () => {
    expect(getDaysInPreviousMonth(MONTH.JANUARY, 2001)).toEqual(31);
    expect(getDaysInPreviousMonth(MONTH.FEBRUARY, 2001)).toEqual(31);
    expect(getDaysInPreviousMonth(MONTH.MARCH, 2001)).toEqual(28);
    expect(getDaysInPreviousMonth(MONTH.APRIL, 2001)).toEqual(31);
    expect(getDaysInPreviousMonth(MONTH.MAY, 2001)).toEqual(30);
    expect(getDaysInPreviousMonth(MONTH.JUNE, 2001)).toEqual(31);
    expect(getDaysInPreviousMonth(MONTH.JULY, 2001)).toEqual(30);
    expect(getDaysInPreviousMonth(MONTH.AUGUST, 2001)).toEqual(31);
    expect(getDaysInPreviousMonth(MONTH.SEPTEMBER, 2001)).toEqual(31);
    expect(getDaysInPreviousMonth(MONTH.OCTOBER, 2001)).toEqual(30);
    expect(getDaysInPreviousMonth(MONTH.NOVEMBER, 2001)).toEqual(31);
    expect(getDaysInPreviousMonth(MONTH.DECEMBER, 2001)).toEqual(30);
  });
  test('Get days for each month (Not leap year, even by 4 divides)', () => {
    expect(getDaysInPreviousMonth(MONTH.JANUARY, 2100)).toEqual(31);
    expect(getDaysInPreviousMonth(MONTH.FEBRUARY, 2100)).toEqual(31);
    expect(getDaysInPreviousMonth(MONTH.MARCH, 2100)).toEqual(28);
    expect(getDaysInPreviousMonth(MONTH.APRIL, 2100)).toEqual(31);
    expect(getDaysInPreviousMonth(MONTH.MAY, 2100)).toEqual(30);
    expect(getDaysInPreviousMonth(MONTH.JUNE, 2100)).toEqual(31);
    expect(getDaysInPreviousMonth(MONTH.JULY, 2100)).toEqual(30);
    expect(getDaysInPreviousMonth(MONTH.AUGUST, 2100)).toEqual(31);
    expect(getDaysInPreviousMonth(MONTH.SEPTEMBER, 2100)).toEqual(31);
    expect(getDaysInPreviousMonth(MONTH.OCTOBER, 2100)).toEqual(30);
    expect(getDaysInPreviousMonth(MONTH.NOVEMBER, 2100)).toEqual(31);
    expect(getDaysInPreviousMonth(MONTH.DECEMBER, 2100)).toEqual(30);
  });
});
