export interface InputMaskedProps {
  name: string;
  value: string;
  mask: string;
  inputClassName?: string;
  placeholderClassName?: string;
  onChange: (value: string, name: string) => void;
  onFocus?: (name: string) => void;
  onBlur?: (name: string) => void;
}
