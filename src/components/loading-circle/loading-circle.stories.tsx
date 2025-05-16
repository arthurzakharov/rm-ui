import type { Meta, StoryObj } from '@storybook/react';
import LoadingCircle from './loading-circle.component';
import { expect, within } from '@storybook/test';
import css from './loading-circle.module.css';

const meta = {
  title: 'Components/LoadingCircle',
  component: LoadingCircle,
  args: {
    success: true,
    fail: false,
    className: 'xxx',
  },
} satisfies Meta<typeof LoadingCircle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoadingCirclePending: Story = {
  name: 'LoadingCircle pending',
  args: {
    success: false,
    fail: false,
  },
  play: async ({ args, canvasElement }) => {
    const circle = within(canvasElement).getByTestId('loading-circle');
    const draw = within(canvasElement).getByTestId('loading-draw');
    await expect(circle).toHaveClass(css.LoadingCircle);
    await expect(circle).not.toHaveClass(css.Completed);
    await expect(circle).not.toHaveClass(css.Failed);
    await expect(circle).toHaveClass(args.className || '');
    await expect(draw).toHaveClass(css.Circle);
    await expect(draw).not.toHaveClass(css.Show);
    await expect(draw).not.toHaveClass(css.Checkmark);
    await expect(draw).not.toHaveClass(css.Cross);
  },
};

export const LoadingCircleSuccess: Story = {
  name: 'LoadingCircle success',
  args: {
    success: true,
    fail: false,
  },
  play: async ({ canvasElement }) => {
    const circle = within(canvasElement).getByTestId('loading-circle');
    const draw = within(canvasElement).getByTestId('loading-draw');
    await expect(circle).toHaveClass(css.Completed);
    await expect(circle).not.toHaveClass(css.Failed);
    await expect(draw).toHaveClass(css.Show);
    await expect(draw).toHaveClass(css.Checkmark);
    await expect(draw).not.toHaveClass(css.Cross);
  },
};

export const LoadingCircleFail: Story = {
  name: 'LoadingCircle fail',
  args: {
    success: false,
    fail: true,
  },
  play: async ({ canvasElement }) => {
    const circle = within(canvasElement).getByTestId('loading-circle');
    const draw = within(canvasElement).getByTestId('loading-draw');
    await expect(circle).toHaveClass(css.Completed);
    await expect(circle).toHaveClass(css.Failed);
    await expect(draw).toHaveClass(css.Show);
    await expect(draw).not.toHaveClass(css.Checkmark);
    await expect(draw).toHaveClass(css.Cross);
  },
};

export const LoadingCircleBoth: Story = {
  name: 'LoadingCircle both states are active',
  args: {
    success: true,
    fail: true,
  },
  play: async ({ canvasElement }) => {
    const circle = within(canvasElement).getByTestId('loading-circle');
    const draw = within(canvasElement).getByTestId('loading-draw');
    await expect(circle).toHaveClass(css.Completed);
    await expect(circle).not.toHaveClass(css.Failed);
    await expect(draw).toHaveClass(css.Show);
    await expect(draw).not.toHaveClass(css.Checkmark);
    await expect(draw).not.toHaveClass(css.Cross);
  },
};
