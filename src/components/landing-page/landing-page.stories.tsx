import type { Meta, StoryObj } from '@storybook/react';
import LandingPage from './landing-page.component';
import BUSSGELDCHECK from './mocks/answers/bussgeldcheck';
import Prio3 from './mocks/prios/prio-3/prio-3';
import Prio16 from './mocks/prios/prio-16/prio-16';
import Prio9 from './mocks/prios/prio-9/prio-9';
import MaxWidthDecorator from '../../../.storybook/decorators/max-width';

const meta = {
  title: 'Components/LandingPage/Versions',
  component: LandingPage,
  decorators: [MaxWidthDecorator(1110)],
  args: {
    config: {},
    answers: {},
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

const Prio3Base: Story = {
  args: {
    prio: Prio3,
  },
};
const Prio9Base: Story = {
  args: {
    prio: Prio9,
  },
};
const Prio16Base: Story = {
  args: {
    prio: Prio16,
  },
};

export const Prio3V1: Story = {
  name: 'Prio 3 / V1',
  args: {
    ...Prio3Base.args,
    answers: BUSSGELDCHECK.VERSION_1,
  },
};

export const Prio9V1: Story = {
  name: 'Prio 9 / V1',
  args: {
    ...Prio9Base.args,
    answers: BUSSGELDCHECK.VERSION_1,
  },
};

export const Prio9V2: Story = {
  name: 'Prio 9 / V2',
  args: {
    ...Prio9Base.args,
    answers: BUSSGELDCHECK.VERSION_2,
  },
};

export const Prio16V1: Story = {
  name: 'Prio 16 / V1',
  args: {
    ...Prio16Base.args,
    answers: BUSSGELDCHECK.VERSION_1,
  },
};
