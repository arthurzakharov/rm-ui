import type { FC } from 'react';
import type { CalendarProviderProps } from './calendar.type';
import { useCallback, useMemo, useState, useEffect } from 'react';
import { CalendarContext } from './calendar.context';
import {
  adjustDateToPeriod,
  convertDateToMaskFormat,
  convertMaskFormatToDate,
  generateCalendar,
  getNextIndex,
  getYearsBetween,
  isDateInPeriod,
} from '../../utils/functions';

const CalendarProvider: FC<CalendarProviderProps> = ({
  calendarRef,
  name,
  value,
  precision,
  maskExplanation,
  period,
  startPosition,
  dayNames,
  monthNames,
  weekStart,
  rootElementId,
  modalTill,
  modalWidthDebounce,
  closeButton,
  onDateChange,
  children,
}) => {
  const yearList = getYearsBetween(period);
  const dateFromMaskValue = convertMaskFormatToDate(value, maskExplanation);
  const date = isDateInPeriod(dateFromMaskValue, period) ? dateFromMaskValue : null;

  const [monthIndex, setMonthIndex] = useState<number>(-1);
  const [yearIndex, setYearIndex] = useState<number>(-1);
  const [open, setOpen] = useState<boolean>(false);

  const onMonthIndexChange = useCallback(
    (newMonthIndex: number) => {
      setMonthIndex(newMonthIndex);
      if (newMonthIndex === 11 && monthIndex === 0) {
        setYearIndex((prev) => getNextIndex(yearList, prev, 'backward'));
      }
      if (newMonthIndex === 0 && monthIndex === 11) {
        setYearIndex((prev) => getNextIndex(yearList, prev, 'forward'));
      }
    },
    [monthIndex, yearList],
  );

  const onYearIndexChange = useCallback((newYearIndex: number) => setYearIndex(newYearIndex), []);

  const onCalendarClick = useCallback(
    (date: Date): void => {
      setOpen(false);
      onDateChange(convertDateToMaskFormat(date, maskExplanation), name);
    },
    [onDateChange, maskExplanation, name],
  );

  const calendarData = useMemo(
    () => generateCalendar(weekStart, [monthIndex, yearList[yearIndex]], period),
    [monthIndex, yearIndex, yearList, period, weekStart],
  );

  useEffect(() => {
    const newDate = convertMaskFormatToDate(value, maskExplanation);
    if (!open && newDate && value && isDateInPeriod(newDate, period)) {
      setMonthIndex(newDate.getMonth());
      setYearIndex(yearList.indexOf(newDate.getFullYear()));
    }
    if (!open && newDate && value && !isDateInPeriod(newDate, period)) {
      const initialDate = adjustDateToPeriod(newDate, startPosition, period);
      setMonthIndex(initialDate.getMonth());
      setYearIndex(yearList.indexOf(initialDate.getFullYear()));
    }
    if (!open && !newDate) {
      const initialDate = adjustDateToPeriod(date, startPosition, period);
      setMonthIndex(initialDate.getMonth());
      setYearIndex(yearList.indexOf(initialDate.getFullYear()));
    }
  }, [value, maskExplanation, period, yearList, open, startPosition, date]);

  return (
    <CalendarContext.Provider
      value={{
        calendarRef,
        name,
        period,
        precision,
        startPosition,
        weekStart,
        closeButton,
        dayNames,
        monthNames,
        rootElementId,
        modalTill,
        modalWidthDebounce,
        onDateChange,
        calendarData,
        monthIndex,
        yearIndex,
        open,
        date,
        yearList,
        onMonthIndexChange,
        onYearIndexChange,
        onCalendarClick,
        onCloseButton: () => setOpen(false),
        onCalendarButton: () => setOpen(true),
        onOutsideClick: () => setOpen(false),
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};

export default CalendarProvider;
