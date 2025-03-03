import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Calendar from './calendar.component';
import { MONTH, WEEK_DAY } from '../../utils/enums';
import { useState } from 'react';

const meta = {
  title: 'Components/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  args: {
    name: 'date',
    value: '',
    mode: 'dropdown',
    precision: 'day',
    startPosition: new Date(1988, MONTH.MARCH, 19),
    rootElementId: 'root',
    modalTill: 1024,
    modalWidthDebounce: 250,
    period: [new Date(1920, MONTH.FEBRUARY, 15), new Date(2045, MONTH.FEBRUARY, 1)],
    mask: 'TT/MM/JJJJ',
    maskExplanation: ['/', 'd', 'm', 'y'],
    dayNames: ['M', 'D', 'M', 'D', 'F', 'S', 'S'],
    monthNames: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
    weekStart: WEEK_DAY.MONDAY,
    closeButton: 'Schließen',
    modalPosition: 'absolute',
    onChange: fn(),
    onFocus: fn(),
    onBlur: fn(),
    onOpen: fn(),
    onClose: fn(),
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<string | undefined>(args.value);

    return (
      <Calendar
        {...args}
        value={value}
        onChange={(value, withinPeriod, name) => {
          args.onChange(value, withinPeriod, name);
          setValue(value);
        }}
      />
    );
  },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ModeTextMonth: Story = {
  name: 'ModeTextMonth',
  args: {
    mode: 'text',
    precision: 'month',
    mask: 'MM/JJJJ',
    maskExplanation: ['/', 'm', 'y'],
  },
};

export const ModeTextDay: Story = {
  name: 'ModeTextDay',
  args: {
    mode: 'text',
    precision: 'day',
    mask: 'TT/MM/JJJJ',
    maskExplanation: ['/', 'd', 'm', 'y'],
  },
};

export const ModeDropdownMonth: Story = {
  name: 'ModeDropdownMonth',
  args: {
    mode: 'dropdown',
    precision: 'month',
    mask: 'MM/JJJJ',
    maskExplanation: ['/', 'm', 'y'],
  },
};

export const ModeDropdownDay: Story = {
  name: 'ModeDropdownDay',
  args: {
    mode: 'dropdown',
    precision: 'day',
    mask: 'TT/MM/JJJJ',
    maskExplanation: ['/', 'd', 'm', 'y'],
  },
};
