import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import LandingPagePlayer from './landing-page-player.component';
import MaxWidthDecorator from '../../../../../.storybook/decorators/max-width';
import css from './landing-page-player.module.css';

const meta = {
  title: 'Components/LandingPage/LandingPagePlayer',
  component: LandingPagePlayer,
  args: {
    videoId: 'KJDcZmVg1fA',
    description: 'Noi3e MC',
    onPlay: fn(),
  },
  decorators: [MaxWidthDecorator(1030)],
} satisfies Meta<typeof LandingPagePlayer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  args: {
    onPlay: undefined,
  },
  play: async ({ args, canvasElement }) => {
    const link = within(canvasElement).getByTestId('landing-page-player-link');
    const source = within(canvasElement).getByTestId('landing-page-player-source');
    const image = within(canvasElement).getByTestId('landing-page-player-image');
    const frame = within(canvasElement).queryByTestId('landing-page-player-frame');
    await expect(link).toBeInTheDocument();
    await expect(source).toBeInTheDocument();
    await expect(image).toBeInTheDocument();
    await expect(frame).not.toBeInTheDocument();
    await expect(link.getAttribute('href')).toBeNull();
    await expect(source.getAttribute('srcSet')).toContain(args.videoId);
    await expect(image.getAttribute('src')).toContain(args.videoId);
    await expect(image.getAttribute('alt')).toContain(args.description);
  },
};

export const PlayClick: Story = {
  name: 'Play with click',
  play: async ({ args, canvasElement, step }) => {
    await step('Initial state and click', async () => {
      const player = within(canvasElement).getByTestId('landing-page-player');
      const button = within(canvasElement).getByTestId('landing-page-button');
      const frame = within(canvasElement).queryByTestId('landing-page-player-frame');
      const link = within(canvasElement).getByTestId('landing-page-player-link');
      await expect(frame).not.toBeInTheDocument();
      await expect(link).toBeInTheDocument();
      await expect(player).toHaveClass(css.PlayerEnabled);
      await expect(button).toHaveClass(css.ButtonEnabled);
      await userEvent.click(player);
      await expect(args.onPlay).toHaveBeenNthCalledWith(1, args.videoId);
    });
    await step('Video is on. Image is gone.', async () => {
      const frame = within(canvasElement).getByTestId('landing-page-player-frame');
      const link = within(canvasElement).queryByTestId('landing-page-player-link');
      await expect(frame).toBeInTheDocument();
      await expect(link).not.toBeInTheDocument();
      await expect(frame.getAttribute('src')).toContain(args.videoId);
    });
    await step('Video is off.', async () => {
      const frame = within(canvasElement).getByTestId('landing-page-player-frame');
      await userEvent.click(frame);
    });
  },
};

export const PlayKeyStroke: Story = {
  name: 'Play with key stroke',
  play: async ({ args, canvasElement, step }) => {
    await step('Initial state and click', async () => {
      const button = within(canvasElement).getByTestId('landing-page-button');
      await userEvent.tab();
      await expect(button).toHaveFocus();
      await userEvent.keyboard('[Space]');
      await expect(args.onPlay).toHaveBeenNthCalledWith(1, args.videoId);
    });
    await step('Video is on. Image is gone.', async () => {
      const frame = within(canvasElement).getByTestId('landing-page-player-frame');
      const link = within(canvasElement).queryByTestId('landing-page-player-link');
      await expect(frame).toBeInTheDocument();
      await expect(link).not.toBeInTheDocument();
    });
    await step('Video is off.', async () => {
      const frame = within(canvasElement).getByTestId('landing-page-player-frame');
      await userEvent.click(frame);
    });
  },
};
