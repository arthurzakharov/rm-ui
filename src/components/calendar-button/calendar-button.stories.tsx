import type { Meta, StoryObj } from '@storybook/react';
import { fn, within, expect, userEvent } from '@storybook/test';
import { withReactContext } from 'storybook-react-context';
import CalendarButton from './calendar-button.component';
import WithCalendarCSSVars from '../../../.storybook/decorators/withCalendarCSSVars';
import { CalendarContext } from '../calendar/calendar.context';

const meta = {
  title: 'Components/Calendar/Components/CalendarButton',
  component: CalendarButton,
  decorators: [WithCalendarCSSVars, withReactContext],
  parameters: {
    layout: 'centered',
    reactContext: {
      context: CalendarContext,
      contextValue: {
        open: false,
        onCalendarButton: fn(),
      },
    },
  },
} satisfies Meta<typeof CalendarButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ClosedState: Story = {
  name: 'Closed state',
  parameters: {
    reactContext: {
      contextValue: {
        open: false,
      },
    },
  },
  play: async ({ canvasElement, parameters }) => {
    const button = within(canvasElement).getByTestId('calendar-button');
    await userEvent.click(button);
    await expect(parameters.reactContext.contextValue.onCalendarButton).toHaveBeenCalledOnce();
    await userEvent.click(canvasElement);
  },
};

export const OpenedState: Story = {
  name: 'Opened state',
  parameters: {
    reactContext: {
      contextValue: {
        open: true,
      },
    },
  },
  play: async ({ canvasElement, parameters }) => {
    const button = within(canvasElement).getByTestId('calendar-button');
    await userEvent.click(button);
    await expect(parameters.reactContext.contextValue.onCalendarButton).not.toBeCalled();
  },
};
