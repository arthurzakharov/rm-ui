import type { Meta, StoryObj } from '@storybook/react';
import iconArgs from '../../../.storybook/common/icon-args';
import Icon from './check-circle.component';

const meta = {
  title: 'Icons/IconCheckCircle',
  component: Icon,
  ...iconArgs,
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'IconCheckCircle',
};
