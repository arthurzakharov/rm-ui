import type { Meta, StoryObj } from '@storybook/react';
import LoadingSticks from './loading-sticks.component';

const meta = {
  title: 'Components/LoadingSticks',
  component: LoadingSticks,
} satisfies Meta<typeof LoadingSticks>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultLoadingSticks: Story = {
  name: 'LoadingSticks',
};
