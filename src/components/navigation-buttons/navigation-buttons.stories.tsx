import type { Meta, StoryObj } from '@storybook/react';
import NavigationButtons from './navigation-buttons.component';
import { expect, fn, userEvent, within } from '@storybook/test';

const meta = {
  title: 'Components/NavigationButtons',
  component: NavigationButtons,
  parameters: {
    layout: 'centered',
  },
  args: {
    showPrevious: true,
    showNext: true,
    onPrevious: fn(),
    onNext: fn(),
  },
} satisfies Meta<typeof NavigationButtons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BothShown: Story = {
  name: 'Both buttons shows',
  args: {
    showPrevious: true,
    showNext: true,
  },
  play: async ({ args, canvasElement, step }) => {
    const previousButton = within(canvasElement).getByTestId('navigation-button-previous');
    const nextButton = within(canvasElement).getByTestId('navigation-button-next');
    await step('Check buttons visibility and text', async () => {
      await expect(previousButton).toBeVisible();
      await expect(nextButton).toBeVisible();
      await expect(previousButton).toHaveTextContent('Zurück');
      await expect(nextButton).toHaveTextContent('Weiter');
    });
    await step('Click buttons, check props call and non focus state', async () => {
      await userEvent.click(previousButton);
      await expect(previousButton).not.toHaveFocus();
      await expect(args.onPrevious).toHaveBeenCalledOnce();
      await userEvent.click(nextButton);
      await expect(nextButton).not.toHaveFocus();
      await expect(args.onNext).toHaveBeenCalledOnce();
    });
  },
};

export const OnlyPrevious: Story = {
  name: 'Show only "Previous" button',
  args: {
    showPrevious: true,
    showNext: false,
  },
  play: async ({ canvasElement, step }) => {
    const previousButton = within(canvasElement).getByTestId('navigation-button-previous');
    const nextButton = within(canvasElement).getByTestId('navigation-button-next');
    await step('Check buttons visibility', async () => {
      await expect(previousButton).toBeVisible();
      await expect(nextButton).not.toBeVisible();
    });
  },
};

export const OnlyNext: Story = {
  name: 'Show only "Next" button',
  args: {
    showPrevious: false,
    showNext: true,
  },
  play: async ({ canvasElement, step }) => {
    const previousButton = within(canvasElement).getByTestId('navigation-button-previous');
    const nextButton = within(canvasElement).getByTestId('navigation-button-next');
    await step('Check buttons visibility', async () => {
      await expect(previousButton).not.toBeVisible();
      await expect(nextButton).toBeVisible();
    });
  },
};

export const CustomLabels: Story = {
  name: 'Custom labels for buttons',
  args: {
    previous: 'Previous',
    next: 'Next',
  },
  play: async ({ canvasElement, step }) => {
    const previousButton = within(canvasElement).getByTestId('navigation-button-previous');
    const nextButton = within(canvasElement).getByTestId('navigation-button-next');
    await step('Check buttons text', async () => {
      await expect(previousButton).toHaveTextContent('Previous');
      await expect(nextButton).toHaveTextContent('Next');
    });
  },
};
