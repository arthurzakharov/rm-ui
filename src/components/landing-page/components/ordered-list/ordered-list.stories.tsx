import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import OrderedList from './ordered-list.component';
import MaxWidthDecorator from '../../../../../.storybook/decorators/max-width';

const meta: Meta<typeof OrderedList> = {
  component: OrderedList,
  title: 'Components/LandingPage/OrderedList',
  decorators: [MaxWidthDecorator(315)],
  args: {
    title: 'Jetzt Vollmacht erteilen',
    list: [
      'Sie erteilen uns die Vollmacht. Dies geht ganz einfach Online und dauert nur 2 Minuten.',
      'Wir fordern Ihre Akte an und unsere Rechtsanwälte beginnen mit der Arbeit an ihrem Fall. Sollten wir Rückfragen haben oder Ihre Zuarbeit benötigen, melden wir uns umgehend bei Ihnen.',
    ],
  },
};

export default meta;

type Story = StoryObj<typeof OrderedList>;

export const Default: Story = {
  name: 'Show TUV and TLS',
  play: async ({ args, canvasElement }) => {
    const head = within(canvasElement).getByTestId('ordered-list-title');
    const items = within(canvasElement).getAllByTestId('ordered-list-item');
    await expect(head).toHaveTextContent(args.title || '');
    for (const item of items) {
      const i = items.indexOf(item);
      await expect(item).toHaveTextContent((args.list || [])[i]);
    }
  },
};
