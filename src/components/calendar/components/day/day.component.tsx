import { Fragment } from 'react';
import clsx from 'clsx';
import { useCalendarContext } from '../../calendar.context';
import { createDate, isCalendarDayEqualsToDate } from '../../../../utils/functions';
import css from './day.module.css';

export default function Day() {
  const { date, dayNames, calendarData, onCalendarClick } = useCalendarContext();

  return (
    <Fragment>
      <div className={css.DayNames}>
        {dayNames.map((dayName, i) => (
          <div key={i} className={css.DayName}>
            {dayName}
          </div>
        ))}
      </div>
      {calendarData.map((week, weekIndex) => (
        <div key={weekIndex} className={css.Week}>
          {week.map((calendarDay, dayIndex) => (
            <button
              data-testid="day"
              key={dayIndex}
              type="button"
              disabled={calendarDay.outOfPeriod}
              className={clsx(css.Day, {
                [css.DayOutOfPeriod]: calendarDay.outOfPeriod,
                [css.DayNotFromThisMonth]: calendarDay.notThisMonth,
                [css.DayToday]: isCalendarDayEqualsToDate(calendarDay, new Date()),
                [css.DaySelected]: isCalendarDayEqualsToDate(calendarDay, date),
              })}
              onClick={() => onCalendarClick(createDate(calendarDay.day, calendarDay.month, calendarDay.year))}
            >
              {calendarDay.day}
            </button>
          ))}
        </div>
      ))}
    </Fragment>
  );
}

Day.displayName = 'CalendarDay';
