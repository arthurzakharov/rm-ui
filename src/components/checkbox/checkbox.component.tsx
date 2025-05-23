import type { MouseEvent, ChangeEvent } from 'react';
import type { CheckboxProps } from './checkbox.type';
import { useState } from 'react';
import clsx from 'clsx';
import InputControl from '../input-control/input-control.component';
import css from './checkbox.module.css';

export default function Checkbox(props: CheckboxProps) {
  const {
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
  } = props;
  const [focused, setFocused] = useState<boolean>(false);
  const [hovered, setHovered] = useState<boolean>(false);

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
      className={clsx(css.Checkbox, className, { [css.CheckboxError]: invalid })}
      onClick={onLabelClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
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
        <InputControl
          shape="checkbox"
          checked={value}
          hovered={hovered}
          error={invalid}
          focused={focused}
          disabled={disabled}
        />
        <div className={css.CheckboxLabel} dangerouslySetInnerHTML={{ __html: label }} />
      </div>
      {!!info && (
        <div data-testid="checkbox-info" className={css.CheckboxInfo} dangerouslySetInnerHTML={{ __html: info }} />
      )}
    </label>
  );
}

Checkbox.displayName = 'Checkbox';
