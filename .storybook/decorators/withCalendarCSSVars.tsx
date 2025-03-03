import type { ReactNode } from 'react';
import css from '../../src/components/calendar/calendar.module.css';

const WithCalendarCSSVars = (storyFn: () => ReactNode) => {
  return <div className={css.Calendar}>{storyFn()}</div>;
};

export default WithCalendarCSSVars;
