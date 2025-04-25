import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, within } from '@storybook/test';
import LandingPageFooter from './landing-page-footer.component';
import MaxWidthDecorator from '../../../../../.storybook/decorators/max-width';
import { Question } from '../landing-page-questions/landing-page-questions.type';

const ADVANTAGES: Question = {
  id: 124973,
  type: '###AdvantageList###',
  hideTop: false,
  hideBottom: false,
  title: '',
  body: [
    {
      type: '###AdvantageList###',
      content: '',
      props: {
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
        button: 'Vollmacht ansehen',
        onButtonClick: fn(),
      },
    },
  ],
};

const ADVANTAGES_NO_BUTTON: Question = {
  id: 124973,
  type: '###AdvantageListNoButton###',
  hideTop: false,
  hideBottom: false,
  title: '',
  body: [
    {
      type: '###AdvantageList###',
      content: '',
      props: {
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
      },
    },
  ],
};

const CONTACT_US: Question = {
  id: 823464,
  type: '###ContactUs###',
  hideTop: false,
  hideBottom: false,
  title: '',
  body: [
    {
      type: '###ContactUs###',
      content: '',
      props: {
        submitted: false,
        onClick: fn(),
        title: 'Sie haben noch Fragen?',
        main: 'Vereinbaren Sie jetzt kostenlos und unverbindliches Erstgepräch',
        button: 'Kontaktieren Sie uns',
        success: 'Vielen Dank, wir haben Ihre Anfrage erhalten.',
        sidebar: false,
      },
    },
  ],
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
    list: [ADVANTAGES, CONTACT_US],
  },
  play: async ({ canvasElement }) => {
    const advantageList = within(canvasElement).queryByTestId('###AdvantageList###');
    const advantageListNoButton = within(canvasElement).queryByTestId('###AdvantageListNoButton###');
    const contactUs = within(canvasElement).queryByTestId('###ContactUs###');
    await expect(advantageList).toBeInTheDocument();
    await expect(advantageListNoButton).not.toBeInTheDocument();
    await expect(contactUs).toBeInTheDocument();
  },
};

export const AdvantagesNoButtonAndContactUs: Story = {
  name: 'AdvantagesNoButton and Contact',
  args: {
    list: [ADVANTAGES_NO_BUTTON, CONTACT_US],
  },
  play: async ({ canvasElement }) => {
    const advantageList = within(canvasElement).queryByTestId('###AdvantageList###');
    const advantageListNoButton = within(canvasElement).queryByTestId('###AdvantageListNoButton###');
    const contactUs = within(canvasElement).queryByTestId('###ContactUs###');
    await expect(advantageList).not.toBeInTheDocument();
    await expect(advantageListNoButton).toBeInTheDocument();
    await expect(contactUs).toBeInTheDocument();
  },
};

export const OnlyAdvantages: Story = {
  name: 'Only Advantages',
  args: {
    list: [ADVANTAGES],
  },
  play: async ({ canvasElement }) => {
    const advantageList = within(canvasElement).queryByTestId('###AdvantageList###');
    const advantageListNoButton = within(canvasElement).queryByTestId('###AdvantageListNoButton###');
    const contactUs = within(canvasElement).queryByTestId('###ContactUs###');
    await expect(advantageList).toBeInTheDocument();
    await expect(advantageListNoButton).not.toBeInTheDocument();
    await expect(contactUs).not.toBeInTheDocument();
  },
};

export const OnlyAdvantagesNoButton: Story = {
  name: 'Only AdvantagesNoButton',
  args: {
    list: [ADVANTAGES_NO_BUTTON],
  },
  play: async ({ canvasElement }) => {
    const advantageList = within(canvasElement).queryByTestId('###AdvantageList###');
    const advantageListNoButton = within(canvasElement).queryByTestId('###AdvantageListNoButton###');
    const contactUs = within(canvasElement).queryByTestId('###ContactUs###');
    await expect(advantageList).not.toBeInTheDocument();
    await expect(advantageListNoButton).toBeInTheDocument();
    await expect(contactUs).not.toBeInTheDocument();
  },
};

export const OnlyContactUs: Story = {
  name: 'Only ContactUs',
  args: {
    list: [CONTACT_US],
  },
  play: async ({ canvasElement }) => {
    const advantageList = within(canvasElement).queryByTestId('###AdvantageList###');
    const advantageListNoButton = within(canvasElement).queryByTestId('###AdvantageListNoButton###');
    const contactUs = within(canvasElement).queryByTestId('###ContactUs###');
    await expect(advantageList).not.toBeInTheDocument();
    await expect(advantageListNoButton).not.toBeInTheDocument();
    await expect(contactUs).toBeInTheDocument();
  },
};
