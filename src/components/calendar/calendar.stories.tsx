import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Calendar from './calendar.component';

const meta = {
  title: 'Components/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  args: { name: 'date', value: '', onChange: fn() },
  render: (args) => {
    return (
      <div>
        <style lang="css">
          {`
            :root {
              --calendar-primary: #e4e;
            }
          `}
        </style>
        <Calendar {...args} />
      </div>
    )
  }
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Calendar',
};
