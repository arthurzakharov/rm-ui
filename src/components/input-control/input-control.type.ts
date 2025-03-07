export type InputControlShape = 'radio' | 'checkbox';

export type InputControlSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

export interface InputControlProps {
  shape: InputControlShape;
  checked: boolean;
  hovered?: boolean;
  error?: boolean;
  focused?: boolean;
  disabled?: boolean;
  size?: InputControlSize;
  className?: string;
}
