export interface CheckboxProps {
  value: boolean;
  label: string;
  name: string;
  onChange: (value: boolean, name: string) => void;
  invalid?: boolean;
  disabled?: boolean;
  info?: string;
  onFocus?: (name: string) => void;
  onBlur?: (name: string) => void;
}
