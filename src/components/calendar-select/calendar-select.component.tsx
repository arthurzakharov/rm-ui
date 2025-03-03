import type { ChangeEvent, FC } from 'react';
import type { CalendarSelectProps } from './calendar-select.type';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getNextIndex, isNumberInRange } from '../../utils/functions';
import css from './calendar-select.module.css';

const CalendarSelect: FC<CalendarSelectProps> = ({ value, options, onChange }) => (
  <div className={css.CalendarSelect}>
    <button
      data-testid="calendar-select-less"
      type="button"
      className={css.CalendarSelectArrow}
      onClick={() =>
        onChange(getNextIndex(options, isNumberInRange([0, options.length], value) ? value : 0, 'backward'))
      }
    >
      <ChevronLeft strokeWidth={2} width={20} height={20} />
    </button>
    <select
      data-testid="calendar-select"
      value={isNumberInRange([0, options.length], value) ? value : 0}
      className={css.CalendarSelectElement}
      onChange={(e: ChangeEvent<HTMLSelectElement>) => onChange(Number(e.target.value))}
    >
      {options.map((option, optionIndex) => (
        <option data-testid="calendar-select-option" key={option} value={optionIndex}>
          {option}
        </option>
      ))}
    </select>
    <button
      data-testid="calendar-select-more"
      type="button"
      className={css.CalendarSelectArrow}
      onClick={() =>
        onChange(getNextIndex(options, isNumberInRange([0, options.length], value) ? value : 0, 'forward'))
      }
    >
      <ChevronRight strokeWidth={2} width={20} height={20} />
    </button>
  </div>
);

CalendarSelect.displayName = 'CalendarSelect';

export default CalendarSelect;
