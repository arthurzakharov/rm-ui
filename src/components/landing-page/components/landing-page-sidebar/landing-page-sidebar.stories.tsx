import type { Meta, StoryObj } from '@storybook/react';
import type { Question } from '../landing-page-questions/landing-page-questions.type';
import { fn } from '@storybook/test';
import LandingPageSidebar from './landing-page-sidebar.component';
import MaxWidthDecorator from '../../../../../.storybook/decorators/max-width';

const ORDERED_LIST: Question = {
  id: 124971,
  type: '###OrderedList###',
  hideTop: false,
  hideBottom: false,
  title: '',
  body: [
    {
      type: '###OrderedList###',
      content: '',
      props: {
        title: 'Jetzt Vollmacht erteilen',
        list: [
          'Sie erteilen uns die Vollmacht. Dies geht ganz einfach Online und dauert nur 2 Minuten.',
          'Wir fordern Ihre Akte an und unsere Rechtsanwälte beginnen mit der Arbeit an ihrem Fall. Sollten wir Rückfragen haben oder Ihre Zuarbeit benötigen, melden wir uns umgehend bei Ihnen.',
        ],
      },
    },
  ],
};

const BUTTON: Question = {
  id: 124972,
  type: '###AdvantageList###',
  hideTop: false,
  hideBottom: false,
  title: '',
  body: [
    {
      type: '###Button###',
      content: '',
      props: {
        text: 'Vollmacht ansehen',
        onClick: fn(),
      },
    },
  ],
};

const LOGOS: Question = {
  id: 124973,
  type: '###AdvantageList###',
  hideTop: false,
  hideBottom: false,
  title: '',
  body: [
    {
      type: '###Logos###',
      content: '',
      props: {
        show: ['tuv', 'tls'],
        tlsSrc: './tls.png',
        tuvSrc: './tuv.jpeg',
      },
    },
  ],
};

const CONTACT_US: Question = {
  id: 124974,
  type: '###AdvantageList###',
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
      },
    },
  ],
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
    list: [ORDERED_LIST, BUTTON, LOGOS, CONTACT_US],
  },
};
