import { Fragment } from 'react';
import clsx from 'clsx';
import { useCalendarContext } from '../../calendar.context';
import { createDate, isCalendarDayEqualsToDate } from '../../../../utils/functions';
import css from './calendar-day.module.css';

const CalendarDay = () => {
  const { date, dayNames, calendarData, onCalendarClick } = useCalendarContext();

  return (
    <Fragment>
      <div className={css.CalendarDayNames}>
        {dayNames.map((dayName, i) => (
          <div key={i} className={css.CalendarDayName}>
            {dayName}
          </div>
        ))}
      </div>
      {calendarData.map((week, weekIndex) => (
        <div key={weekIndex} className={css.CalendarWeek}>
          {week.map((calendarDay, dayIndex) => (
            <button
              data-testid="calendar-day"
              key={dayIndex}
              type="button"
              disabled={calendarDay.outOfPeriod}
              className={clsx(css.CalendarDay, {
                [css.CalendarDayOutOfPeriod]: calendarDay.outOfPeriod,
                [css.CalendarDayNotFromThisMonth]: calendarDay.notThisMonth,
                [css.CalendarDayToday]: isCalendarDayEqualsToDate(calendarDay, new Date()),
                [css.CalendarDaySelected]: isCalendarDayEqualsToDate(calendarDay, date),
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
};

CalendarDay.displayName = 'CalendarDay';

export default CalendarDay;
