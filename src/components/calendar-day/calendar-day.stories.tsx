import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import { withReactContext } from 'storybook-react-context';
import CalendarDay from './calendar-day.component';
import css from './calendar-day.module.css';
import WithCalendarCSSVars from '../../../.storybook/decorators/withCalendarCSSVars';
import { CalendarContext } from '../calendar/calendar.context';
import { generateCalendar } from '../../utils/functions';
import { MONTH, WEEK_DAY } from '../../utils/enums';

const TODAY = new Date();

const meta = {
  title: 'Components/Calendar/Components/CalendarDay',
  component: CalendarDay,
  decorators: [WithCalendarCSSVars, withReactContext],
  parameters: {
    layout: 'centered',
    reactContext: {
      context: CalendarContext,
      contextValue: {
        date: null,
        dayNames: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        calendarData: generateCalendar(
          WEEK_DAY.MONDAY,
          [MONTH.MARCH, 2024],
          [new Date(2024, MONTH.FEBRUARY, 1), new Date(2024, MONTH.MARCH, 31)],
        ),
        onCalendarClick: fn(),
      },
    },
  },
} satisfies Meta<typeof CalendarDay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullyInPeriod: Story = {
  name: 'Fully in period',
  play: async ({ canvasElement, parameters }) => {
    const days = within(canvasElement).getAllByTestId('calendar-day');
    await expect(days[0]).toHaveClass(css.CalendarDayNotFromThisMonth);
    await expect(days[3]).toHaveClass(css.CalendarDayNotFromThisMonth);
    await expect(days[4]).not.toHaveClass(css.CalendarDayNotFromThisMonth);
    await userEvent.click(days[22]);
    await expect(parameters.reactContext.contextValue.onCalendarClick).toHaveBeenNthCalledWith(
      1,
      new Date(2024, MONTH.MARCH, 19),
    );
  },
};

export const NotFullyInPeriod: Story = {
  name: 'Not fully in period',
  parameters: {
    reactContext: {
      contextValue: {
        calendarData: generateCalendar(
          WEEK_DAY.MONDAY,
          [MONTH.MARCH, 2024],
          [new Date(2024, MONTH.FEBRUARY, 1), new Date(2024, MONTH.MARCH, 20)],
        ),
      },
    },
  },
  play: async ({ canvasElement }) => {
    const days = within(canvasElement).getAllByTestId('calendar-day');
    await expect(days[23]).not.toHaveClass(css.CalendarDayOutOfPeriod);
    await expect(days[24]).toHaveClass(css.CalendarDayOutOfPeriod);
    await expect(days[34]).toHaveClass(css.CalendarDayOutOfPeriod);
    await expect(days[23]).not.toBeDisabled();
    await expect(days[24]).toBeDisabled();
    await expect(days[34]).toBeDisabled();
  },
};

export const SelectedDate: Story = {
  name: 'Selected date',
  parameters: {
    reactContext: {
      contextValue: {
        date: new Date(2024, MONTH.MARCH, 19),
      },
    },
  },
  play: async ({ canvasElement }) => {
    const days = within(canvasElement).getAllByTestId('calendar-day');
    await expect(days[22]).toHaveClass(css.CalendarDaySelected);
    await expect(days[22]).toHaveTextContent('19');
  },
};

export const TodayDate: Story = {
  name: 'Today date',
  parameters: {
    reactContext: {
      contextValue: {
        calendarData: generateCalendar(
          WEEK_DAY.MONDAY,
          [TODAY.getMonth(), TODAY.getFullYear()],
          [
            new Date(TODAY.getFullYear(), TODAY.getMonth() - 2, 1),
            new Date(TODAY.getFullYear(), TODAY.getMonth() + 2, 1),
          ],
        ),
      },
    },
  },
  play: async ({ canvasElement }) => {
    const days = within(canvasElement).getAllByTestId('calendar-day');
    const today = days.find((day) => day.className.includes(css.CalendarDayToday));
    await expect(today).not.toBeUndefined();
    await expect(today).toHaveTextContent(new Date().getDate().toString());
  },
};
