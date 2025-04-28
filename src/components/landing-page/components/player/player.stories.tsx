import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import Player from './player.component';
import MaxWidthDecorator from '../../../../../.storybook/decorators/max-width';
import css from './player.module.css';

const meta = {
  title: 'Components/Player',
  decorators: [MaxWidthDecorator(555)],
  component: Player,
  args: {
    videoId: 'KJDcZmVg1fA',
    description: 'Noi3e MC',
    onPlay: fn(),
  },
} satisfies Meta<typeof Player>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  args: {
    onPlay: undefined,
  },
  play: async ({ args, canvasElement }) => {
    const link = within(canvasElement).getByTestId('player-link');
    const source = within(canvasElement).getByTestId('player-source');
    const image = within(canvasElement).getByTestId('player-image');
    const frame = within(canvasElement).queryByTestId('player-frame');
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
      const player = within(canvasElement).getByTestId('player');
      const button = within(canvasElement).getByTestId('player-button');
      const frame = within(canvasElement).queryByTestId('player-frame');
      const link = within(canvasElement).getByTestId('player-link');
      await expect(frame).not.toBeInTheDocument();
      await expect(link).toBeInTheDocument();
      await expect(player).toHaveClass(css.PlayerEnabled);
      await expect(button).toHaveClass(css.ButtonEnabled);
      await userEvent.click(player);
      await expect(args.onPlay).toHaveBeenNthCalledWith(1, args.videoId);
    });
    await step('Video is on. Image is gone.', async () => {
      const frame = within(canvasElement).getByTestId('player-frame');
      const link = within(canvasElement).queryByTestId('player-link');
      await expect(frame).toBeInTheDocument();
      await expect(link).not.toBeInTheDocument();
      await expect(frame.getAttribute('src')).toContain(args.videoId);
    });
    await step('Video is off.', async () => {
      const frame = within(canvasElement).getByTestId('player-frame');
      await userEvent.click(frame);
    });
  },
};

export const PlayKeyStroke: Story = {
  name: 'Play with key stroke',
  play: async ({ args, canvasElement, step }) => {
    await step('Initial state and click', async () => {
      const button = within(canvasElement).getByTestId('player-button');
      await userEvent.tab();
      await expect(button).toHaveFocus();
      await userEvent.keyboard('[Space]');
      await expect(args.onPlay).toHaveBeenNthCalledWith(1, args.videoId);
    });
    await step('Video is on. Image is gone.', async () => {
      const frame = within(canvasElement).getByTestId('player-frame');
      const link = within(canvasElement).queryByTestId('player-link');
      await expect(frame).toBeInTheDocument();
      await expect(link).not.toBeInTheDocument();
    });
    await step('Video is off.', async () => {
      const frame = within(canvasElement).getByTestId('player-frame');
      await userEvent.click(frame);
    });
  },
};
