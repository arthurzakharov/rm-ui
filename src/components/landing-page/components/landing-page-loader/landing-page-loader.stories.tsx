import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import LandingPageLoader from './landing-page-loader.component';

const meta = {
  title: 'Components/LandingPage/LandingPageLoader',
  component: LandingPageLoader,
} satisfies Meta<typeof LandingPageLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  args: {
    text: undefined,
  },
  play: async ({ canvasElement }) => {
    const loader = within(canvasElement).getByTestId('landing-page-loader');
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
    const loader = within(canvasElement).getByTestId('landing-page-loader');
    await expect(loader).toContainHTML(args.text || '');
  },
};
