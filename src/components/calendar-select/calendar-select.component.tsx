import type { ChangeEvent, FC } from 'react';
import type { CalendarSelectProps } from './calendar-select.type';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getNextIndex } from '../../utils/functions';
import css from './calendar-select.module.css';

const CalendarSelect: FC<CalendarSelectProps> = ({ value, options, onChange }) => (
  <div className={css.CalendarSelect}>
    <button
      type="button"
      className={css.CalendarSelectArrow}
      onClick={() => onChange(getNextIndex(options, value, 'backward'))}
    >
      <ChevronLeft strokeWidth={2} width={20} height={20} />
    </button>
    <select
      value={value}
      className={css.CalendarSelectElement}
      onChange={(e: ChangeEvent<HTMLSelectElement>) => onChange(Number(e.target.value))}
    >
      {options.map((option, optionIndex) => (
        <option key={option} value={optionIndex}>
          {option}
        </option>
      ))}
    </select>
    <button
      type="button"
      className={css.CalendarSelectArrow}
      onClick={() => onChange(getNextIndex(options, value, 'forward'))}
    >
      <ChevronRight strokeWidth={2} width={20} height={20} />
    </button>
  </div>
);

export default CalendarSelect;
