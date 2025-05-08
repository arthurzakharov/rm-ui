import type { ChangeEvent } from 'react';
import type { SelectProps } from './select.type';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getNextIndex, isNumberInRange } from '../../../../utils/functions';
import css from './select.module.css';

export default function Select(props: SelectProps) {
  const { value, options, onChange } = props;

  return (
    <div className={css.Select}>
      <button
        data-testid="select-less"
        type="button"
        className={css.SelectArrow}
        onClick={() =>
          onChange(getNextIndex(options, isNumberInRange([0, options.length], value) ? value : 0, 'backward'))
        }
      >
        <ChevronLeft strokeWidth={2} width={20} height={20} />
      </button>
      <select
        data-testid="select"
        value={isNumberInRange([0, options.length], value) ? value : 0}
        className={css.SelectElement}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => onChange(Number(e.target.value))}
      >
        {options.map((option, optionIndex) => (
          <option data-testid="select-option" key={option} value={optionIndex}>
            {option}
          </option>
        ))}
      </select>
      <button
        data-testid="select-more"
        type="button"
        className={css.SelectArrow}
        onClick={() =>
          onChange(getNextIndex(options, isNumberInRange([0, options.length], value) ? value : 0, 'forward'))
        }
      >
        <ChevronRight strokeWidth={2} width={20} height={20} />
      </button>
    </div>
  );
}

Select.displayName = 'CalendarSelect';
