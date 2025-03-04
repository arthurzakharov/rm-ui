import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { fn, within, expect, userEvent } from '@storybook/test';
import CalendarSelect from './calendar-select.component';
import WithCalendarCSSVars from '../../../.storybook/decorators/withCalendarCSSVars.tsx';

const meta = {
  title: 'Components/Calendar/Components/CalendarSelect',
  component: CalendarSelect,
  decorators: [WithCalendarCSSVars],
  args: {
    options: ['2000', '2001', '2002', 2003, 2004, 2005],
    onChange: fn(),
  },
  parameters: {
    layout: 'centered',
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<number>(args.value);

    return (
      <CalendarSelect
        {...args}
        value={value}
        onChange={(value) => {
          setValue(value);
          args.onChange(value);
        }}
      />
    );
  },
} satisfies Meta<typeof CalendarSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'CalendarSelect',
  args: {
    value: 0,
  },
  play: async ({ canvasElement, args }) => {
    const lessBtn = within(canvasElement).getByTestId('calendar-select-less');
    const moreBtn = within(canvasElement).getByTestId('calendar-select-more');
    const options = within(canvasElement).queryAllByTestId('calendar-select-option');
    const select = within(canvasElement).getByTestId('calendar-select');
    await expect(options.length).toEqual(args.options.length);
    await expect(select).toHaveValue('0');
    await userEvent.click(lessBtn);
    await expect(select).toHaveValue('5');
    await userEvent.click(moreBtn);
    await expect(select).toHaveValue('0');
    await userEvent.selectOptions(select, '1');
    await expect(args.onChange).toHaveBeenNthCalledWith(1, 5);
    await expect(args.onChange).toHaveBeenNthCalledWith(2, 0);
    await expect(args.onChange).toHaveBeenNthCalledWith(3, 1);
    await userEvent.click(canvasElement);
  },
};

export const ValueOutOfOptionsLess: Story = {
  name: 'Value out of options list (less)',
  args: {
    value: -1,
  },
  play: async ({ canvasElement, args }) => {
    const lessBtn = within(canvasElement).getByTestId('calendar-select-less');
    const select = within(canvasElement).getByTestId('calendar-select');
    await expect(select).toHaveValue('0');
    await userEvent.click(lessBtn);
    await expect(args.onChange).toHaveBeenNthCalledWith(1, 5);
    await userEvent.click(canvasElement);
  },
};

export const ValueOutOfOptionsMore: Story = {
  name: 'Value out of options list (more)',
  args: {
    value: 10,
  },
  play: async ({ canvasElement, args }) => {
    const moreBtn = within(canvasElement).getByTestId('calendar-select-more');
    const select = within(canvasElement).getByTestId('calendar-select');
    await expect(select).toHaveValue('0');
    await userEvent.click(moreBtn);
    await expect(args.onChange).toHaveBeenNthCalledWith(1, 1);
    await userEvent.click(canvasElement);
  },
};
