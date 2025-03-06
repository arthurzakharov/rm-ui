import type { Meta, StoryObj } from '@storybook/react';
import InputControl from './input-control.component';

const meta = {
  title: 'Components/InputControl',
  component: InputControl,
  args: {
    checked: true,
    hovered: true,
    error: true,
    focused: true,
    disabled: true,
    className: 'custom-class-name',
  },
} satisfies Meta<typeof InputControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckboxShape: Story = {
  name: 'Checkbox shape',
  args: {
    shape: 'checkbox',
  },
};

export const RadioShape: Story = {
  name: 'Radio shape',
  args: {
    shape: 'radio',
  },
};
