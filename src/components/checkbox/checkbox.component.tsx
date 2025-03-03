import type { FC, MouseEvent, ChangeEvent } from 'react';
import type { CheckboxProps } from './checkbox.type';
import { useState } from 'react';
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
  const [focused, setFocused] = useState<boolean>(false);

  const onLabelClick = (e: MouseEvent<HTMLLabelElement>): void => {
    if (disabled || focused) return;
    e.preventDefault();
    onChange(!value, name);
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (disabled) return;
    e.stopPropagation();
    onChange(!value, name);
  };

  const onInputFocus = (): void => {
    if (disabled) return;
    setFocused(true);
    onFocus(name);
  };

  const onInputBlur = (): void => {
    if (disabled) return;
    setFocused(false);
    onBlur(name);
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
          onFocus={onInputFocus}
          onBlur={onInputBlur}
          onChange={onInputChange}
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
