export type InputControlShape = 'radio' | 'checkbox';

export interface InputControlProps {
  shape: InputControlShape;
  checked: boolean;
  hovered: boolean;
  error: boolean;
  focused: boolean;
  disabled: boolean;
  className?: string;
}
