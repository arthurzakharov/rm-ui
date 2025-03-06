import type { FC } from 'react';
import type { InputControlProps } from './input-control.type';
import { cn } from '../../utils/functions';
import css from './input-control.module.css';

const InputControl: FC<InputControlProps> = ({ shape, checked, hovered, error, focused, disabled, className = '' }) => {
  return (
    <div
      className={cn(css.InputControl, className, {
        [css.InputControlCheckbox]: shape === 'checkbox',
        [css.InputControlRadio]: shape === 'radio',
        [css.InputControlChecked]: checked,
        [css.InputControlHovered]: hovered,
        [css.InputControlError]: error,
        [css.InputControlFocused]: focused,
        [css.InputControlDisabled]: disabled,
      })}
    />
  );
};

InputControl.displayName = 'InputControl';

export default InputControl;
