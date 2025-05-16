import type { Meta, StoryObj } from '@storybook/react';
import StarRating from './star-rating.component';
import { expect, within } from '@storybook/test';
import css from './star-rating.module.css';

const meta = {
  title: 'Components/StarRating',
  component: StarRating,
  args: {
    rate: 4,
    size: 20,
    color: '#ffd336',
  },
} satisfies Meta<typeof StarRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultStarRating: Story = {
  name: 'Default StarRating',
  args: {
    rate: undefined,
    size: undefined,
    color: undefined,
  },
  play: async ({ canvasElement }) => {
    const stars = within(canvasElement).getAllByTestId('star');
    await expect(stars.length).toEqual(5);
    for (const star of stars) {
      await expect(star).toHaveAttribute('height', '16');
      await expect(star).toHaveAttribute('width', '16');
      await expect(star).not.toHaveAttribute('stroke');
      await expect(star).not.toHaveAttribute('fill');
      await expect(star).toHaveClass(css.StarCustomColor);
    }
  },
};

export const CustomStarRating: Story = {
  name: 'Custom StarRating',
  play: async ({ args, canvasElement }) => {
    const stars = within(canvasElement).getAllByTestId('star');
    await expect(stars.length).toEqual(args.rate);
    for (const star of stars) {
      await expect(star).toHaveAttribute('height', args.size?.toString());
      await expect(star).toHaveAttribute('width', args.size?.toString());
      await expect(star).toHaveAttribute('stroke', args.color);
      await expect(star).toHaveAttribute('fill', args.color);
      await expect(star).not.toHaveClass(css.StarCustomColor);
    }
  },
};
