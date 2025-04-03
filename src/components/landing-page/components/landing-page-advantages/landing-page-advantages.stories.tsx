import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import LandingPageAdvantages from './landing-page-advantages.component';
import MaxWidthDecorator from '../../../../../.storybook/decorators/max-width';
import css from './landing-page-advantages.module.css';

const meta = {
  title: 'Components/LandingPage/LandingPageAdvantages',
  decorators: [MaxWidthDecorator(1030)],
  component: LandingPageAdvantages,
  args: {
    title: 'Vorteile beim Einspruch mit SOS Verkehrsrecht',
    list: [
      'Größte Verkehrsrechtskanzlei in Deutschland',
      'Erfahrung aus über 150.000 Mandate',
      'Einfach und unkompliziert',
      'Sofortige Hilfe',
      'Deutschlandweit tätig',
    ],
    imageSrc: '/tablets-dlp.jpg',
    imageAlt: 'tablets-dlp',
    button: 'Vollmacht',
    onButtonClick: fn(),
  },
} satisfies Meta<typeof LandingPageAdvantages>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  args: {
    imageSrc: undefined,
    imageAlt: undefined,
    button: undefined,
    className: undefined,
    onButtonClick: undefined,
  },
  play: async ({ canvasElement, args }) => {
    const advantages = within(canvasElement).getByTestId('landing-page-advantages');
    const head = within(canvasElement).getByTestId('landing-page-advantages-head');
    const items = within(canvasElement).getAllByTestId('landing-page-advantages-list-item');
    const image = within(canvasElement).queryByTestId('landing-page-advantages-image');
    const button = within(canvasElement).queryByTestId('landing-page-advantages-button');
    await expect(advantages.className).toEqual(css.Advantages);
    await expect(head).toBeInTheDocument();
    await expect(head).toHaveTextContent(args.title);
    await expect(items.length).toEqual(args.list.length);
    for (const item of items) {
      const i = items.indexOf(item);
      await expect(item).toHaveTextContent(args.list[i]);
    }
    await expect(image).not.toBeInTheDocument();
    await expect(button).not.toBeInTheDocument();
  },
};

export const WithImageAndButton: Story = {
  name: 'With image and button',
  args: {
    ...Default.args,
    imageSrc: '/tablets-dlp.jpg',
    imageAlt: 'tablets-dlp',
    button: 'Vollmacht',
    onButtonClick: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const advantages = within(canvasElement).getByTestId('landing-page-advantages');
    const topLine = within(canvasElement).queryByTestId('landing-page-advantages-top-line');
    const bottomLine = within(canvasElement).queryByTestId('landing-page-advantages-bottom-line');
    const image = within(canvasElement).getByTestId('landing-page-advantages-image');
    const button = within(canvasElement).getByTestId('landing-page-advantages-button');
    const cta = within(button).getByRole('button');
    await expect(advantages.className).toEqual(`${css.Advantages} ${css.AdvantagesWithImage}`);
    await expect(topLine).not.toBeInTheDocument();
    await expect(bottomLine).not.toBeInTheDocument();
    await expect(image).toBeInTheDocument();
    await expect(image).toHaveAttribute('alt', args.imageAlt);
    await expect(image).toHaveAttribute('src', args.imageSrc);
    await expect(button).toBeInTheDocument();
    await expect(cta).toHaveTextContent(args.button || '');
    await userEvent.click(cta);
    await expect(args.onButtonClick).toHaveBeenNthCalledWith(1);
  },
};

export const WithImageAndWithoutButton: Story = {
  name: 'With image and without button',
  args: {
    ...Default.args,
    imageSrc: '/tablets-dlp.jpg',
    imageAlt: 'tablets-dlp',
  },
  play: async ({ canvasElement }) => {
    const button = within(canvasElement).queryByTestId('landing-page-advantages-button');
    const image = within(canvasElement).getByTestId('landing-page-advantages-image');
    await expect(button).not.toBeInTheDocument();
    await expect(image).toBeInTheDocument();
  },
};

export const WithoutImageAndButton: Story = {
  name: 'Without image and button',
  args: {
    ...Default.args,
  },
  play: async ({ canvasElement }) => {
    const advantages = within(canvasElement).getByTestId('landing-page-advantages');
    const button = within(canvasElement).queryByTestId('landing-page-advantages-button');
    const image = within(canvasElement).queryByTestId('landing-page-advantages-image');
    await expect(advantages.className).toEqual(css.Advantages);
    await expect(button).not.toBeInTheDocument();
    await expect(image).not.toBeInTheDocument();
  },
};
