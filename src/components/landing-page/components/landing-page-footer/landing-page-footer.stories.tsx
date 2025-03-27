import type { Meta, StoryObj } from '@storybook/react';
import type {
  LandingPageAdvantageList,
  LandingPageAdvantageListNoButton,
  LandingPageContactUs,
} from './landing-page-footer.types';
import { expect, fn, within } from '@storybook/test';
import LandingPageFooter from './landing-page-footer.component';
import MaxWidthDecorator from '../../../../../.storybook/decorators/max-width';

const ADVANTAGES: LandingPageAdvantageList = {
  id: 'advantage-list',
  type: '###AdvantageList###',
  head: 'Vorteile beim Einspruch mit SOS Verkehrsrecht',
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
  onClick: fn(),
};

const ADVANTAGES_NO_BUTTON: LandingPageAdvantageListNoButton = {
  id: 'advantage-list-no-button',
  type: '###AdvantageListNoButton###',
  head: 'Vorteile beim Einspruch mit SOS Verkehrsrecht',
  list: [
    'Größte Verkehrsrechtskanzlei in Deutschland',
    'Erfahrung aus über 150.000 Mandate',
    'Einfach und unkompliziert',
    'Sofortige Hilfe',
    'Deutschlandweit tätig',
  ],
  imageSrc: '/tablets-dlp.jpg',
  imageAlt: 'tablets-dlp',
};

const CONTACT_US: LandingPageContactUs = {
  id: 'contact-us',
  type: '###ContactUs###',
  submitted: false,
  onClick: fn(),
  head: 'Sie haben noch Fragen?',
  main: 'Vereinbaren Sie jetzt kostenlos und unverbindliches Erstgepräch',
  button: 'Kontaktieren Sie uns',
  success: 'Vielen Dank, wir haben Ihre Anfrage erhalten.',
};

const meta = {
  title: 'Components/LandingPage/LandingPageFooter',
  component: LandingPageFooter,
  decorators: [MaxWidthDecorator(1030)],
} satisfies Meta<typeof LandingPageFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AdvantagesAndContactUs: Story = {
  name: 'Advantages and Contact',
  args: {
    items: [ADVANTAGES, CONTACT_US],
  },
  play: async ({ canvasElement }) => {
    const advantageList = within(canvasElement).queryByTestId('advantage-list');
    const advantageListNoButton = within(canvasElement).queryByTestId('advantage-list-no-button');
    const contactUs = within(canvasElement).queryByTestId('contact-us');
    await expect(advantageList).toBeInTheDocument();
    await expect(advantageListNoButton).not.toBeInTheDocument();
    await expect(contactUs).toBeInTheDocument();
  },
};

export const AdvantagesNoButtonAndContactUs: Story = {
  name: 'AdvantagesNoButton and Contact',
  args: {
    items: [ADVANTAGES_NO_BUTTON, CONTACT_US],
  },
  play: async ({ canvasElement }) => {
    const advantageList = within(canvasElement).queryByTestId('advantage-list');
    const advantageListNoButton = within(canvasElement).queryByTestId('advantage-list-no-button');
    const contactUs = within(canvasElement).queryByTestId('contact-us');
    await expect(advantageList).not.toBeInTheDocument();
    await expect(advantageListNoButton).toBeInTheDocument();
    await expect(contactUs).toBeInTheDocument();
  },
};

export const OnlyAdvantages: Story = {
  name: 'Only Advantages',
  args: {
    items: [ADVANTAGES],
  },
  play: async ({ canvasElement }) => {
    const advantageList = within(canvasElement).queryByTestId('advantage-list');
    const advantageListNoButton = within(canvasElement).queryByTestId('advantage-list-no-button');
    const contactUs = within(canvasElement).queryByTestId('contact-us');
    await expect(advantageList).toBeInTheDocument();
    await expect(advantageListNoButton).not.toBeInTheDocument();
    await expect(contactUs).not.toBeInTheDocument();
  },
};

export const OnlyAdvantagesNoButton: Story = {
  name: 'Only AdvantagesNoButton',
  args: {
    items: [ADVANTAGES_NO_BUTTON],
  },
  play: async ({ canvasElement }) => {
    const advantageList = within(canvasElement).queryByTestId('advantage-list');
    const advantageListNoButton = within(canvasElement).queryByTestId('advantage-list-no-button');
    const contactUs = within(canvasElement).queryByTestId('contact-us');
    await expect(advantageList).not.toBeInTheDocument();
    await expect(advantageListNoButton).toBeInTheDocument();
    await expect(contactUs).not.toBeInTheDocument();
  },
};

export const OnlyContactUs: Story = {
  name: 'Only ContactUs',
  args: {
    items: [CONTACT_US],
  },
  play: async ({ canvasElement }) => {
    const advantageList = within(canvasElement).queryByTestId('advantage-list');
    const advantageListNoButton = within(canvasElement).queryByTestId('advantage-list-no-button');
    const contactUs = within(canvasElement).queryByTestId('contact-us');
    await expect(advantageList).not.toBeInTheDocument();
    await expect(advantageListNoButton).not.toBeInTheDocument();
    await expect(contactUs).toBeInTheDocument();
  },
};
