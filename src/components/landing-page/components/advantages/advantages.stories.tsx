import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import Advantages from './advantages.component';
import MaxWidthDecorator from '../../../../../.storybook/decorators/max-width';
import css from './advantages.module.css';

const meta = {
  title: 'Components/LandingPage/Advantages',
  decorators: [MaxWidthDecorator(1030)],
  component: Advantages,
  args: {
    title: 'Vorteile beim Einspruch mit SOS Verkehrsrecht',
    list: [
      'Größte Verkehrsrechtskanzlei in Deutschland',
      'Erfahrung aus über 150.000 Mandate',
      'Einfach und unkompliziert',
      'Sofortige Hilfe',
      'Deutschlandweit tätig',
    ],
    button: 'Vollmacht',
    onButtonClick: fn(),
  },
} satisfies Meta<typeof Advantages>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  args: {
    button: undefined,
    onButtonClick: undefined,
  },
  play: async ({ canvasElement, args }) => {
    const advantages = within(canvasElement).getByTestId('advantages');
    const head = within(canvasElement).getByTestId('advantages-head');
    const items = within(canvasElement).getAllByTestId('advantages-list-item');
    const image = within(canvasElement).queryByTestId('advantages-image');
    const button = within(canvasElement).queryByTestId('advantages-button');
    await expect(advantages.className).toEqual(css.Advantages);
    await expect(head).toBeInTheDocument();
    await expect(head).toHaveTextContent(args.title || '');
    await expect(items.length).toEqual((args.list || []).length);
    for (const item of items) {
      const i = items.indexOf(item);
      await expect(item).toHaveTextContent((args.list || [])[i]);
    }
    await expect(image).not.toBeInTheDocument();
    await expect(button).not.toBeInTheDocument();
  },
};

export const WithImageAndButton: Story = {
  name: 'With image and button',
  args: {
    ...Default.args,
    button: 'Vollmacht',
    onButtonClick: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const advantages = within(canvasElement).getByTestId('advantages');
    const topLine = within(canvasElement).queryByTestId('advantages-top-line');
    const bottomLine = within(canvasElement).queryByTestId('advantages-bottom-line');
    const image = within(canvasElement).getByTestId('advantages-image');
    const button = within(canvasElement).getByTestId('advantages-button');
    const cta = within(button).getByRole('button');
    await expect(advantages.className).toEqual(`${css.Advantages} ${css.AdvantagesWithImage}`);
    await expect(topLine).not.toBeInTheDocument();
    await expect(bottomLine).not.toBeInTheDocument();
    await expect(image).toBeInTheDocument();
    await expect(button).toBeInTheDocument();
    await expect(cta).toHaveTextContent(args.button || '');
    await userEvent.click(cta);
    await expect(args.onButtonClick).toHaveBeenNthCalledWith(1);
  },
};

export const WithoutImageAndButton: Story = {
  name: 'Without image and button',
  args: {
    ...Default.args,
  },
  play: async ({ canvasElement }) => {
    const advantages = within(canvasElement).getByTestId('advantages');
    const button = within(canvasElement).queryByTestId('advantages-button');
    const image = within(canvasElement).queryByTestId('advantages-image');
    await expect(advantages.className).toEqual(css.Advantages);
    await expect(button).not.toBeInTheDocument();
    await expect(image).not.toBeInTheDocument();
  },
};
