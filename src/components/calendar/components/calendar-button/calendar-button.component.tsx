import { Calendar } from 'lucide-react';
import { useCalendarContext } from '../../calendar.context';
import css from './calendar-button.module.css';

const CalendarButton = () => {
  const { open, onCalendarButton } = useCalendarContext();
  return (
    <button
      data-testid="calendar-button"
      type="button"
      disabled={open}
      className={css.CalendarButton}
      onClick={() => onCalendarButton()}
    >
      <Calendar strokeWidth={2} width={14} height={14} />
    </button>
  );
};

CalendarButton.displayName = 'CalendarButton';

export default CalendarButton;
