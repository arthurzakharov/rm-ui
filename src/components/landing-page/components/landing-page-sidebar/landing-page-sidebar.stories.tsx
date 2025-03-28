import type { Meta, StoryObj } from '@storybook/react';
import type {
  LandingPageButton,
  LandingPageContactUs,
  LandingPageLogos,
  LandingPageOrderedList,
} from '../../landing-page.types';
import { fn } from '@storybook/test';
import LandingPageSidebar from './landing-page-sidebar.component';
import MaxWidthDecorator from '../../../../../.storybook/decorators/max-width';

const ORDERED_LIST: LandingPageOrderedList = {
  type: '###OrderedList###',
  head: 'Jetzt Vollmacht erteilen',
  list: [
    'Sie erteilen uns die Vollmacht. Dies geht ganz einfach Online und dauert nur 2 Minuten.',
    'Wir fordern Ihre Akte an und unsere Rechtsanwälte beginnen mit der Arbeit an ihrem Fall. Sollten wir Rückfragen haben oder Ihre Zuarbeit benötigen, melden wir uns umgehend bei Ihnen.',
  ],
};

const BUTTON: LandingPageButton = {
  type: '###Button###',
  text: 'Vollmacht ansehen',
  onClick: fn(),
};

const LOGOS: LandingPageLogos = {
  type: '###Logos###',
  show: ['tuv', 'tls'],
  tlsSrc: './tls.png',
  tuvSrc: './tuv.jpeg',
};

const CONTACT_US: LandingPageContactUs = {
  type: '###ContactUs###',
  submitted: false,
  onClick: fn(),
  head: 'Sie haben noch Fragen?',
  main: 'Vereinbaren Sie jetzt kostenlos und unverbindliches Erstgepräch',
  button: 'Kontaktieren Sie uns',
  success: 'Vielen Dank, wir haben Ihre Anfrage erhalten.',
};

const meta = {
  title: 'Components/LandingPage/LandingPageSidebar',
  component: LandingPageSidebar,
  decorators: [MaxWidthDecorator(375)],
} satisfies Meta<typeof LandingPageSidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AdvantagesAndContactUs: Story = {
  name: 'Advantages and Contact',
  args: {
    items: [ORDERED_LIST, BUTTON, LOGOS, CONTACT_US],
  },
};
