import type { InputControlProps } from './input-control.type';
import clsx from 'clsx';
import css from './input-control.module.css';

export default function InputControl(props: InputControlProps) {
  const {
    shape,
    checked,
    hovered = false,
    error = false,
    focused = false,
    disabled = false,
    size = 'md',
    className = '',
  } = props;

  return (
    <div
      data-control-size={size}
      data-control-shape={shape}
      className={clsx(css.InputControl, className, {
        [css.InputControlChecked]: checked,
        [css.InputControlHovered]: hovered,
        [css.InputControlError]: error,
        [css.InputControlFocused]: focused,
        [css.InputControlDisabled]: disabled,
      })}
    />
  );
}

InputControl.displayName = 'InputControl';
