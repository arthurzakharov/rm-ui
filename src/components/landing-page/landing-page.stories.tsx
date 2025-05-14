import type { Meta, StoryObj } from '@storybook/react';
import LandingPage from './landing-page.component';
import BUSSGELDCHECK from './mocks/answers/bussgeldcheck';
import Prio3 from './mocks/prios/prio-3/prio-3';
import Prio16 from './mocks/prios/prio-16/prio-16';
import Prio9 from './mocks/prios/prio-9/prio-9';
import MaxWidthDecorator from '../../../.storybook/decorators/max-width';

const meta = {
  title: 'Components/LandingPage',
  component: LandingPage,
  decorators: [MaxWidthDecorator(1110)],
  args: {
    config: {},
    loaded: true,
    appHeaderRef: null,
    submitted: false,
    tlsSrc: '/tls.png',
    tuvSrc: '/tuv.jpeg',
    overrides: {},
  },
} satisfies Meta<typeof LandingPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LandingPagePrio3: Story = {
  name: 'LandingPage / Prio 3',
  args: {
    prio: Prio3,
    data: BUSSGELDCHECK.VERSION_1.FORM_ANSWERS,
    answers: BUSSGELDCHECK.VERSION_1.FORM_MAPS,
  },
};

export const LandingPagePrio9: Story = {
  name: 'LandingPage / Prio 9',
  args: {
    prio: Prio9,
    data: BUSSGELDCHECK.VERSION_1.FORM_ANSWERS,
    answers: BUSSGELDCHECK.VERSION_1.FORM_MAPS,
  },
};

export const LandingPagePrio16: Story = {
  name: 'LandingPage / Prio 16',
  args: {
    prio: Prio16,
    data: BUSSGELDCHECK.VERSION_1.FORM_ANSWERS,
    answers: BUSSGELDCHECK.VERSION_1.FORM_MAPS,
  },
};
