import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import LandingPageButton from './landing-page-button.component';
import css from './landing-page-button.module.css';

const meta = {
  title: 'Components/LandingPage/LandingPageButton',
  component: LandingPageButton,
  args: {
    text: "See Option",
    optimizely: 'landing-cta',
    onClick: fn()
  }
} satisfies Meta<typeof LandingPageButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  args: {
    disabled: undefined,
    optimizely: undefined,
    fullWidth: undefined
  },
  play: async ({ canvasElement, args }) => {
    const button = within(canvasElement).getByTestId('landing-page-button');
    await expect(button.className).toEqual(css.LandingPageButton);
    await expect(button).toHaveTextContent(args.text);
    await expect(button).toHaveAttribute('data-opti', 'landing-cta');
    await expect(button).not.toBeDisabled();
    await expect(button).not.toHaveClass(css.LandingPageButtonFullWidth);
  },
};

export const Enabled: Story = {
  name: 'Enabled',
  args: {
    disabled: false
  },
  play: async ({ canvasElement, args }) => {
    const button = within(canvasElement).getByTestId('landing-page-button');
    await userEvent.click(button);
    await expect(button).not.toBeDisabled();
    await expect(button).not.toHaveFocus();
    await expect(args.onClick).toHaveBeenNthCalledWith(1)
  },
};

export const Disabled: Story = {
  name: 'Disabled',
  args: {
    disabled: true
  },
  play: async ({ canvasElement, args }) => {
    const button = within(canvasElement).getByTestId('landing-page-button');
    await userEvent.click(button);
    await expect(button).toBeDisabled();
    await expect(args.onClick).not.toHaveBeenCalled();
  },
};

export const NotFullWidth: Story = {
  name: 'Not Full Width',
  args: {
    fullWidth: false
  },
  play: async ({ canvasElement }) => {
    const button = within(canvasElement).getByTestId('landing-page-button');
    await expect(button).not.toHaveClass(css.LandingPageButtonFullWidth);
  },
};

export const FullWidth: Story = {
  name: 'FullWidth',
  args: {
    fullWidth: true,
  },
  play: async ({ canvasElement }) => {
    const button = within(canvasElement).getByTestId('landing-page-button');
    await expect(button).toHaveClass(css.LandingPageButtonFullWidth);
  },
};

export const CustomClassName: Story = {
  name: 'Custom className',
  args: {
    className: 'xxx'
  },
  play: async ({ canvasElement, args }) => {
    const button = within(canvasElement).getByTestId('landing-page-button');
    await expect(button).toHaveClass(args.className || "");
  },
};
