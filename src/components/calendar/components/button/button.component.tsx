import { Calendar } from 'lucide-react';
import { useCalendarContext } from '../../calendar.context';
import css from './button.module.css';

export default function Button() {
  const { open, onCalendarButton } = useCalendarContext();

  return (
    <button
      data-testid="button"
      type="button"
      disabled={open}
      className={css.Button}
      onClick={() => onCalendarButton()}
    >
      <Calendar strokeWidth={2} width={14} height={14} />
    </button>
  );
}

Button.displayName = 'CalendarButton';
