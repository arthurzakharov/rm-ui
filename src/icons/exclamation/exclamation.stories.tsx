import type { Meta, StoryObj } from '@storybook/react';
import iconArgs from '../../../.storybook/common/icon-args';
import Icon from './exclamation.component';

const meta = {
  title: 'Icons/IconExclamation',
  component: Icon,
  ...iconArgs,
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'IconExclamation',
};
