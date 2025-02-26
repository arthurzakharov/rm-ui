import { useCalendarContext } from '../calendar/calendar.context';
import { cn, isCalendarDayEqualsToDate } from '../../utils/functions';
import css from './calendar-day.module.css';

const CalendarDay = () => {
  const { date, dayNames, calendarData, onCalendarClick } = useCalendarContext();

  return (
    <>
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
              key={dayIndex}
              type="button"
              disabled={calendarDay.outOfPeriod}
              className={cn(css.CalendarDay, {
                [css.CalendarDayOutOfPeriod]: calendarDay.outOfPeriod,
                [css.CalendarDayNotFromThisMonth]: calendarDay.notThisMonth,
                [css.CalendarDayToday]: isCalendarDayEqualsToDate(calendarDay, new Date()),
                [css.CalendarDaySelected]: isCalendarDayEqualsToDate(calendarDay, date),
              })}
              onClick={() => onCalendarClick(new Date(calendarDay.year, calendarDay.month, calendarDay.day))}
            >
              {calendarDay.day}
            </button>
          ))}
        </div>
      ))}
    </>
  );
};

CalendarDay.displayName = 'CalendarDay';

export default CalendarDay;
