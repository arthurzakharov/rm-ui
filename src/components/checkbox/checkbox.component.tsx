import type { MouseEvent, FC } from 'react';
import type { CheckboxProps } from './checkbox.type';
import { cn } from '../../utils/functions';
import css from './checkbox.module.css';

const Checkbox: FC<CheckboxProps> = ({
  value,
  label,
  name,
  onChange,
  className = '',
  invalid = false,
  disabled = false,
  info = '',
  onFocus = () => {},
  onBlur = () => {},
}) => {
  const onLabelClick = (e: MouseEvent<HTMLLabelElement>): void => {
    if (disabled) return;
    if (e.pageX && e.pageY) {
      e.preventDefault();
      onChange(!value, name);
    }
  };

  return (
    <label
      data-testid="checkbox"
      htmlFor={name}
      className={cn(css.Checkbox, className, { [css.CheckboxError]: invalid })}
      onClick={onLabelClick}
    >
      <div className={css.CheckboxContent}>
        <input
          data-testid="checkbox-input"
          checked={value}
          disabled={disabled}
          id={name}
          name={name}
          value={String(value)}
          type="checkbox"
          className={css.CheckboxInput}
          onFocus={() => onFocus(name)}
          onBlur={() => onBlur(name)}
          onChange={() => onChange(!value, name)}
        />
        <div className={css.CheckboxSquare} />
        <div className={css.CheckboxLabel} dangerouslySetInnerHTML={{ __html: label }} />
      </div>
      {!!info && (
        <div data-testid="checkbox-info" className={css.CheckboxInfo} dangerouslySetInnerHTML={{ __html: info }} />
      )}
    </label>
  );
};

Checkbox.displayName = 'Checkbox';

export default Checkbox;
