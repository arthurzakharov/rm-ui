export interface SelectProps {
  value: number;
  options: (string | number)[];
  onChange: (value: number) => void;
}
