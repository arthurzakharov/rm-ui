import type { Meta, StoryObj } from '@storybook/react';
import LandingPage from './landing-page.component';
import { ANSWERS_1 } from './mocks/answers';
import { DATA_1 } from './mocks/form-answers';
import Prio3 from './mocks/prios/prio-3.json';
import MaxWidthDecorator from '../../../.storybook/decorators/max-width';

const meta = {
  title: 'Components/LandingPage',
  component: LandingPage,
  decorators: [MaxWidthDecorator(1100)],
  args: {
    loaded: true,
    prio: Prio3,
    answers: ANSWERS_1,
    data: DATA_1,
  },
} satisfies Meta<typeof LandingPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'LandingPage',
};
