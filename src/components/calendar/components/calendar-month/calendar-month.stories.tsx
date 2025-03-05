import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import { withReactContext } from 'storybook-react-context';
import CalendarMonth from './calendar-month.component';
import WithCalendarCssVars from '../../../../../.storybook/decorators/with-calendar-css-vars';
import MaxWidthDecorator from '../../../../../.storybook/decorators/max-width';
import { CalendarContext } from '../../calendar.context';
import { MONTH } from '../../../../utils/enums';
import css from './calendar-month.module.css';

const meta = {
  title: 'Components/Calendar/Components/CalendarMonth',
  component: CalendarMonth,
  decorators: [MaxWidthDecorator(240), WithCalendarCssVars, withReactContext],
  parameters: {
    layout: 'centered',
    reactContext: {
      context: CalendarContext,
      contextValue: {
        monthNames: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
        startPosition: new Date(1988, MONTH.MARCH, 19),
        yearList: [
          1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994,
          1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012,
          2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030,
        ],
        date: null,
        onCalendarClick: fn(),
      },
    },
  },
} satisfies Meta<typeof CalendarMonth>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NoSelectedDate: Story = {
  name: 'Without selected date',
  play: async ({ canvasElement, parameters }) => {
    const calendarMonth = within(canvasElement).getByTestId('calendar-month');
    const monthButtons = within(canvasElement).getAllByTestId('calendar-month-button');
    await expect(calendarMonth).toHaveClass(css.CalendarMonth);
    await expect(calendarMonth).not.toHaveClass(css.CalendarMonthYearSmallList);
    await userEvent.click(monthButtons[MONTH.MARCH]);
    const yearButtons = within(canvasElement).getAllByTestId('calendar-month-button');
    await userEvent.click(yearButtons[11]);
    await expect(parameters.reactContext.contextValue.onCalendarClick).toHaveBeenNthCalledWith(
      1,
      new Date('1988-03-01T00:00:00.000Z'),
    );
    await userEvent.click(canvasElement);
  },
};

export const SelectedDate: Story = {
  name: 'With selected date',
  parameters: {
    reactContext: {
      contextValue: {
        date: new Date(2016, MONTH.JUNE, 6),
      },
    },
  },
  play: async ({ canvasElement }) => {
    const calendarMonth = within(canvasElement).getByTestId('calendar-month');
    await expect(calendarMonth).toHaveClass(css.CalendarMonth);
    await expect(calendarMonth).not.toHaveClass(css.CalendarMonthYearSmallList);
  },
};

export const SelectedDateOutOfYearList: Story = {
  name: 'Selected date out of YearList',
  parameters: {
    reactContext: {
      contextValue: {
        date: new Date(2040, MONTH.JUNE, 6),
      },
    },
  },
};

export const StartPositionOutOfYearList: Story = {
  name: 'Start position out of YearList',
  parameters: {
    reactContext: {
      contextValue: {
        startPosition: new Date(2040, MONTH.JUNE, 6),
      },
    },
  },
};

export const ShortYearList: Story = {
  name: 'Short YearList',
  parameters: {
    reactContext: {
      contextValue: {
        startPosition: new Date(2022, MONTH.MARCH, 19),
        yearList: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026],
      },
    },
  },
  play: async ({ canvasElement }) => {
    const calendarMonth = within(canvasElement).getByTestId('calendar-month');
    await expect(calendarMonth).toHaveClass(css.CalendarMonth);
    await expect(calendarMonth).toHaveClass(css.CalendarMonthYearSmallList);
  },
};
