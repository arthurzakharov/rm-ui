import type { Meta, StoryObj } from '@storybook/react';
import LandingPage from './landing-page.component';
import { BUSSGELDCHECK } from './mocks/answers';
import { DATA_1, DATA_2 } from './mocks/form-answers';
import Prio3 from './mocks/prios/prio-3/prio-3.json';
import Prio16 from './mocks/prios/prio-16/prio-16.json';
import MaxWidthDecorator from '../../../.storybook/decorators/max-width';

const meta = {
  title: 'Components/LandingPage',
  component: LandingPage,
  decorators: [MaxWidthDecorator(1100)],
  args: {
    loaded: true,
    prio: Prio3,
    answers: BUSSGELDCHECK,
    data: DATA_1,
  },
} satisfies Meta<typeof LandingPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'LandingPage',
};

export const LandingPagePrio16: Story = {
  name: 'LandingPage / Prio 16',
  args: {
    loaded: true,
    prio: Prio16,
    answers: BUSSGELDCHECK,
    data: DATA_2,
  },
};
