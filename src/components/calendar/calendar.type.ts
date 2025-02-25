import type { PropsWithChildren, RefObject } from 'react';
import type { WEEK_DAY } from '../../utils/enums';

export type MonthNames = [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
];

export type Mode = 'text' | 'dropdown';

export type ModalPosition = 'absolute' | 'static';

export type DayNames = [string, string, string, string, string, string, string];

export type Precision = 'month' | 'day';

export type Period = [Date, Date];

export type MaskExplanationKey = 'd' | 'm' | 'y';

export type MaskExplanation = [string, MaskExplanationKey, MaskExplanationKey, MaskExplanationKey?];

export type CalendarDay = {
  outOfPeriod: boolean;
  notThisMonth: boolean;
  day: number;
  year: number;
  month: number;
};

interface DateSelectorContextBase {
  calendarRef: RefObject<HTMLDivElement>;
  calendarModalRef: RefObject<HTMLDivElement>;
  precision: Precision;
  startPosition: Date;
  dayNames: DayNames;
  monthNames: MonthNames;
  period: Period;
  weekStart: WEEK_DAY;
  name: string;
  rootElementId: string;
  modalTill: number;
  modalWidthDebounce: number;
  closeButton: string;
  modalPosition: ModalPosition;
  onDateChange: (value: string, withinPeriod: boolean, name: string) => void;
  onOpenModal: (name: string, element: HTMLDivElement) => void;
  onCloseModal: (name: string) => void;
}

export interface CalendarContextStore extends DateSelectorContextBase {
  calendarData: CalendarDay[][];
  date: Date | null;
  yearList: number[];
  monthIndex: number;
  yearIndex: number;
  open: boolean;
  onMonthIndexChange: (value: number) => void;
  onYearIndexChange: (value: number) => void;
  onCloseButton: () => void;
  onCalendarButton: () => void;
  onOutsideClick: () => void;
  onCalendarClick: (date: Date) => void;
}

export interface CalendarProviderProps extends PropsWithChildren, DateSelectorContextBase {
  value: string;
  maskExplanation: MaskExplanation;
}

export interface CalendarProps {
  name: string;
  onChange: (value: string, withinPeriod: boolean, name: string) => void;
  value?: string;
  mode?: Mode;
  precision?: Precision;
  startPosition?: Date;
  rootElementId?: string;
  modalTill?: number;
  modalWidthDebounce?: number;
  period?: Period;
  mask?: string;
  maskExplanation?: MaskExplanation;
  dayNames?: DayNames;
  monthNames?: MonthNames;
  weekStart?: WEEK_DAY;
  closeButton?: string;
  modalPosition?: ModalPosition;
  onFocus?: (name: string) => void;
  onBlur?: (name: string) => void;
  onOpen?: (name: string, element: HTMLDivElement) => void;
  onClose?: (name: string) => void;
}
