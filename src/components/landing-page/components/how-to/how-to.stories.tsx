import type { Meta, StoryObj } from '@storybook/react';
import MaxWidthDecorator from '../../../../../.storybook/decorators/max-width';
import HowTo from './how-to.component';

const meta = {
  title: 'Components/HowTo',
  decorators: [MaxWidthDecorator(555)],
  component: HowTo,
  args: {
    orderedList: {
      title: 'Jetzt Vollmacht erteilen',
      list: [
        'Sie erteilen uns die Vollmacht. Dies geht ganz einfach Online und dauert nur 2 Minuten.',
        'Wir fordern Ihre Akte an und unsere Rechtsanwälte beginnen mit der Arbeit an ihrem Fall. Sollten wir Rückfragen haben oder Ihre Zuarbeit benötigen, melden wir uns umgehend bei Ihnen.',
      ],
    },
    logos: {
      show: ['tuv', 'tls'],
      tlsSrc: './tls.png',
      tuvSrc: './tuv.jpeg',
    },
  },
} satisfies Meta<typeof HowTo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'HowTo',
};
