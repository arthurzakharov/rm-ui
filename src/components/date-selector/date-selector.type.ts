export interface IDateSelector {
  name: string;
  mask?: string;
  value?: string;
  onChange: (value: string, name: string) => void;
  onFocus?: (name: string) => void;
  onBlur?: (name: string) => void;
}
