import type { RefObject } from 'react';
import type { WEEK_DAY } from './enums';
import type { CalendarDay, MaskExplanation } from '../components/calendar/calendar.type';

export const getYearsBetween = ([start, end]: [Date, Date]): number[] => {
  const startYear = start.getFullYear();
  const endYear = end.getFullYear();
  if (start > end) {
    return [];
  } else {
    return Array.from({ length: endYear - startYear + 1 }, (_, i) => startYear + i);
  }
};

export const generateCalendar = (
  weekStart: WEEK_DAY,
  [month, year]: [number, number],
  [start, end]: [Date, Date],
): CalendarDay[][] => {
  const date = createDate(1, month, year);
  const firstDay = date.getDay();
  const daysInMonth = getDaysInMonth(month, year);
  const daysInPreviousMonth = getDaysInPreviousMonth(month, year);
  const previousMonth = month === 0 ? 11 : month - 1;
  const previousYear = month === 0 ? year - 1 : year;
  const nextMonth = month === 11 ? 0 : month + 1;
  const nextYear = month === 11 ? year + 1 : year;

  const calendar: CalendarDay[][] = [];
  let week: CalendarDay[] = [];
  let day = 1;

  let offset = (firstDay - weekStart + 7) % 7;

  if (offset < 0) {
    offset += 7;
  }

  for (let i = offset; i > 0; i--) {
    const currentDate = createDate(daysInPreviousMonth - i + 1, previousMonth, previousYear);
    week.push({
      outOfPeriod: currentDate < start || currentDate > end,
      notThisMonth: true,
      day: daysInPreviousMonth - i + 1,
      year: previousYear,
      month: previousMonth,
    });
  }

  while (day <= daysInMonth) {
    const currentDate = createDate(day, month, year);
    week.push({
      outOfPeriod: currentDate < start || currentDate > end,
      notThisMonth: false,
      day,
      year,
      month,
    });
    day++;

    if (week.length === 7) {
      calendar.push(week);
      week = [];
    }
  }

  if (week.length > 0) {
    let nextMonthDay = 1;
    while (week.length < 7) {
      const currentDate = createDate(nextMonthDay, nextMonth, nextYear);
      week.push({
        outOfPeriod: currentDate < start || currentDate > end,
        notThisMonth: true,
        day: nextMonthDay,
        year: nextYear,
        month: nextMonth,
      });
      nextMonthDay++;
    }
    calendar.push(week);
  }

  return calendar;
};

export const getNextIndex = (array: unknown[], index: number, direction: 'forward' | 'backward'): number => {
  if (array.length === 0 || index < 0 || index >= array.length) return -1;
  if (direction === 'forward') {
    return (index + 1) % array.length;
  } else {
    return (index - 1 + array.length) % array.length;
  }
};

export const formatNumberWithLeadingZero = (number: number): string => {
  if (number === 0) {
    return '0';
  } else if (number < 10 && number >= 0) {
    return '0' + number;
  } else {
    return String(number);
  }
};

export const convertDateToMaskFormat = (date: Date, maskExplanation: MaskExplanation): string => {
  const [separator, ...explanations] = maskExplanation;
  return explanations
    .map((key) => {
      switch (key) {
        case 'd':
          return formatNumberWithLeadingZero(date.getDate());
        case 'm':
          return formatNumberWithLeadingZero(date.getMonth() + 1);
        case 'y':
          return date.getFullYear();
      }
    })
    .join(separator);
};

export const convertMaskFormatToDate = (date: string, maskExplanation: MaskExplanation): Date | null => {
  const [separator, ...explanations] = maskExplanation;
  const dateArray = date.split(separator);
  const { day, month, year } = explanations.reduce(
    (date, key, currentIndex) => {
      switch (key) {
        case 'd':
          date.day = Number(dateArray[currentIndex]) || NaN;
          break;
        case 'm':
          date.month = Number(dateArray[currentIndex]) || NaN;
          break;
        case 'y':
          date.year = Number(dateArray[currentIndex]) || NaN;
          break;
      }
      return date;
    },
    {
      day: explanations.includes('d') ? NaN : 1,
      month: NaN,
      year: NaN,
    },
  );
  const convertedDate = createDate(day, month - 1, year);
  const localeConvertedDate = convertedDate.toLocaleDateString('en-US', {
    month: 'numeric',
    day: 'numeric',
    year: 'numeric',
  });
  if (localeConvertedDate === `${month}/${day}/${year}`) {
    return convertedDate;
  } else {
    return null;
  }
};

export const adjustDateToPeriod = (date: Date | null, init: Date, [start, end]: [Date, Date]): Date => {
  const checkDate = date || init;
  if (checkDate) {
    const isWithinPeriod = isDateInPeriod(checkDate, [start, end]);
    if (isWithinPeriod) {
      return checkDate === date ? date : init;
    } else {
      return checkDate < start ? start : end;
    }
  } else {
    return start;
  }
};

export const isDateInPeriod = (date: Date | null, [start, end]: [Date, Date]): boolean => {
  if (!date) return false;
  return date >= start && date <= end;
};

export const isCalendarDayEqualsToDate = (calendarDay: CalendarDay, date: Date | null): boolean => {
  return (
    !!date &&
    date.getDate() === calendarDay.day &&
    date.getMonth() === calendarDay.month &&
    date.getFullYear() === calendarDay.year
  );
};

export const getYearButtonRef = <T>(
  isMonth: boolean,
  [buttonYear, selectedYear, startYear]: [string, string, string],
  [selectedRef, startRef]: [RefObject<T>, RefObject<T>],
): RefObject<T> | null => {
  if (!isMonth && buttonYear === selectedYear) return selectedRef;
  if (!isMonth && buttonYear === startYear) return startRef;
  return null;
};

export const generateStyleTag = (source: CSSStyleDeclaration, className: string): string => {
  const cssVariableNames = [
    '--calendar-accent',
    '--calendar-error',
    '--calendar-primary',
    '--calendar-border-radius',
    '--calendar-border-width',
    '--calendar-background',
    '--calendar-icon-background',
    '--calendar-input-masked-font-size',
    '--calendar-input-masked-line-height',
    '--calendar-input-masked-placeholder',
    '--calendar-input-masked-border',
    '--modal-button-selected-text',
    '--modal-horizontal-padding',
    '--modal-vertical-padding',
    '--modal-font-size',
    '--modal-line-height',
    '--modal-button-size',
    '--modal-button-gap',
    '--modal-background',
  ];
  const cssVariables: Record<string, string> = {
    ['font-family']: source.getPropertyValue('font-family'),
  };
  cssVariableNames.forEach((variableName) => {
    const value = source.getPropertyValue(variableName);
    if (value) {
      cssVariables[variableName] = value;
    }
  });
  return `
    .${className} {
      ${Object.entries(cssVariables)
        .map(([variable, value]) => `${variable}: ${value};`)
        .join('\n')}
    }
  `;
};

export const scroll = (element: HTMLElement, parent: HTMLElement): void => {
  const clientHeight = element.offsetParent?.clientHeight || 0;
  const buttonTop = element.offsetTop;
  const buttonStyles = window.getComputedStyle(element);
  const marginTop = parseInt(buttonStyles.getPropertyValue('margin-top'));
  const marginBottom = parseInt(buttonStyles.getPropertyValue('margin-bottom'));
  const buttonHeight = element.offsetHeight + Math.ceil((marginTop + marginBottom) / 2);
  parent.scrollTo({
    top: buttonTop - Math.ceil(clientHeight / 2) + buttonHeight,
    behavior: 'smooth',
  });
};

export const isNumberInRange = ([start, end]: [number, number], num: number) => num >= start && num <= end;

export const createDate = (day: number, month: number, year: number, endDayTime = false): Date => {
  const date = new Date();
  date.setUTCFullYear(year);
  date.setUTCMonth(month);
  date.setUTCDate(day);
  date.setUTCHours(endDayTime ? 23 : 0);
  date.setUTCMinutes(endDayTime ? 59 : 0);
  date.setUTCSeconds(endDayTime ? 59 : 0);
  date.setUTCMilliseconds(0);
  return date;
};

export const getDaysInMonth = (month: number, year: number): number => {
  const currentDate = createDate(1, month, year);
  currentDate.setUTCMonth(currentDate.getUTCMonth() + 1);
  currentDate.setUTCDate(0);
  return currentDate.getDate();
};

export const getDaysInPreviousMonth = (month: number, year: number): number => getDaysInMonth(month - 1, year);

export const getElementSize = (element: HTMLElement, withoutMargins = false): [number, number] => {
  const elementStyles = window.getComputedStyle(element);
  const marginX = !withoutMargins
    ? Number.parseInt(elementStyles.getPropertyValue('margin-left')) +
      Number.parseInt(elementStyles.getPropertyValue('margin-right'))
    : 0;
  const marginY = !withoutMargins
    ? Number.parseInt(elementStyles.getPropertyValue('margin-top')) +
      Number.parseInt(elementStyles.getPropertyValue('margin-bottom'))
    : 0;
  return [element.clientHeight + marginY, element.clientWidth + marginX];
};
