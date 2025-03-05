export interface CalendarSelectProps {
  value: number;
  options: (string | number)[];
  onChange: (value: number) => void;
}
