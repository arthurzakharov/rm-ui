import type { FC } from 'react';
import type { InputControlProps } from './input-control.type';
import { cn } from '../../utils/functions';
import css from './input-control.module.css';

const InputControl: FC<InputControlProps> = ({
  shape,
  checked,
  hovered = false,
  error = false,
  focused = false,
  disabled = false,
  size = 'md',
  className = '',
}) => (
  <div
    data-control-size={size}
    data-control-shape={shape}
    className={cn(css.InputControl, className, {
      [css.InputControlChecked]: checked,
      [css.InputControlHovered]: hovered,
      [css.InputControlError]: error,
      [css.InputControlFocused]: focused,
      [css.InputControlDisabled]: disabled,
    })}
  />
);

InputControl.displayName = 'InputControl';

export default InputControl;
