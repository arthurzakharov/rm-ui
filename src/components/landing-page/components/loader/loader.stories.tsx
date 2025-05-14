import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import Loader from './loader.component';

const meta = {
  title: 'Components/LandingPage/Loader',
  component: Loader,
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  args: {
    text: undefined,
  },
  play: async ({ canvasElement }) => {
    const loader = within(canvasElement).getByTestId('loader');
    await expect(loader).toContainHTML(
      '<strong>Vielen Dank.</strong> Bitte haben Sie einen Augenblick Geduld, wir analysieren gerade Ihre Angaben...',
    );
  },
};

export const CustomText: Story = {
  name: 'Custom text',
  args: {
    text: 'Thanks for being with us',
  },
  play: async ({ args, canvasElement }) => {
    const loader = within(canvasElement).getByTestId('loader');
    await expect(loader).toContainHTML(args.text || '');
  },
};
