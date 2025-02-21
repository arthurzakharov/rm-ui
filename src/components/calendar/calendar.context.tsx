import type { CalendarContextStore } from './calendar.type';
import { createContext, useContext } from 'react';

export const CalendarContext = createContext<CalendarContextStore | null>(null);

CalendarContext.displayName = 'CalendarContext';

export const useCalendarContext = () => {
  const context = useContext(CalendarContext);
  if (!context) throw new Error('Must be used within CalendarContext');
  return context;
};
