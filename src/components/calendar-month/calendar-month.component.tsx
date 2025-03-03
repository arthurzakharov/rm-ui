import { useEffect, useRef, useState } from 'react';
import { useCalendarContext } from '../calendar/calendar.context';
import { cn, getYearButtonRef, scroll } from '../../utils/functions';
import css from './calendar-month.module.css';

const CalendarMonth = () => {
  const { monthNames, startPosition, yearList, date, onCalendarClick } = useCalendarContext();
  const [isMonthStep, setIsMonthStep] = useState<boolean>(true);
  const [month, setMonth] = useState<string>('');
  const [year, setYear] = useState<string>('');
  const wrapperRef = useRef<HTMLDivElement>(null);
  const yearRef = useRef<HTMLButtonElement>(null);
  const yearStartRef = useRef<HTMLButtonElement>(null);

  const renderButtons = (items: string[], isMonth: boolean) =>
    items.map((name) => (
      <button
        key={name}
        type="button"
        ref={getYearButtonRef(isMonth, [name, year, String(startPosition.getFullYear())], [yearRef, yearStartRef])}
        className={cn(css.CalendarMonthButton, {
          [css.CalendarMonthButtonSelected]: name === (isMonth ? month : year),
        })}
        onClick={() => {
          setIsMonthStep((prev) => !prev);
          if (isMonth) {
            setMonth(name);
          } else {
            setYear(name);
            onCalendarClick(new Date(+name, monthNames.indexOf(month), 1));
          }
        }}
      >
        {name}
      </button>
    ));

  useEffect(() => {
    if (!wrapperRef.current || isMonthStep) return;
    if (yearRef.current) scroll(yearRef.current, wrapperRef.current);
    if (!yearRef.current && yearStartRef.current) scroll(yearStartRef.current, wrapperRef.current);
  }, [isMonthStep]);

  useEffect(() => {
    if (date) {
      setMonth(monthNames[date.getMonth()]);
      setYear(String(date.getFullYear()));
    }
  }, [date, monthNames]);

  return (
    <div
      ref={wrapperRef}
      className={cn(css.CalendarMonth, {
        [css.CalendarMonthYearSmallList]: yearList.length <= 12,
      })}
    >
      {renderButtons(isMonthStep ? monthNames : yearList.map(String), isMonthStep)}
    </div>
  );
};

CalendarMonth.displayName = 'CalendarMonth';

export default CalendarMonth;
