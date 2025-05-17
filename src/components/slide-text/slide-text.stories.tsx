import type { Meta, StoryObj } from '@storybook/react';
import SlideText from './slide-text.component';
import { fn } from '@storybook/test';

const meta = {
  title: 'Components/SlideText',
  component: SlideText,
  args: {
    errorMessage: 'Something went wrong.',
    isErrorShown: false,
    onChange: fn(),
    large: true,
    type: 'text',
    placeholder: 'Enter text here',
  },
} satisfies Meta<typeof SlideText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultSlideText: Story = {
  name: 'SlideText',
};
