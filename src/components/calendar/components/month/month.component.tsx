import type { ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { useCalendarContext } from '../../calendar.context';
import { createDate, getYearButtonRef, scroll } from '../../../../utils/functions';
import css from './month.module.css';

export default function Month() {
  const { monthNames, startPosition, yearList, date, onCalendarClick } = useCalendarContext();
  const [isMonthStep, setIsMonthStep] = useState<boolean>(true);
  const [month, setMonth] = useState<string>('');
  const [year, setYear] = useState<string>('');
  const wrapperRef = useRef<HTMLDivElement>(null);
  const yearRef = useRef<HTMLButtonElement>(null);
  const yearStartRef = useRef<HTMLButtonElement>(null);

  const renderButtons = (items: string[], isMonth: boolean): ReactNode[] =>
    items.map((name) => (
      <button
        data-testid="month-button"
        key={name}
        type="button"
        ref={getYearButtonRef(isMonth, [name, year, String(startPosition.getFullYear())], [yearRef, yearStartRef])}
        className={clsx(css.MonthButton, {
          [css.MonthButtonSelected]: name === (isMonth ? month : year),
        })}
        onClick={() => {
          if (isMonth) {
            setMonth(name);
            setIsMonthStep(false);
          } else {
            setYear(name);
            onCalendarClick(createDate(1, monthNames.indexOf(month), +name));
          }
        }}
      >
        {name}
      </button>
    ));

  useEffect(() => {
    if (!wrapperRef.current || isMonthStep) return;
    if (yearRef.current) {
      scroll(yearRef.current, wrapperRef.current);
    }
    if (!yearRef.current && yearStartRef.current) {
      scroll(yearStartRef.current, wrapperRef.current);
    }
  }, [isMonthStep]);

  useEffect(() => {
    if (date) {
      setMonth(monthNames[date.getMonth()]);
      setYear(String(date.getFullYear()));
    }
  }, [date, monthNames]);

  return (
    <div
      data-testid="month"
      ref={wrapperRef}
      className={clsx(css.Month, {
        [css.MonthYearSmallList]: yearList.length <= 12,
      })}
    >
      {renderButtons(isMonthStep ? monthNames : yearList.map(String), isMonthStep)}
    </div>
  );
}

Month.displayName = 'CalendarMonth';
