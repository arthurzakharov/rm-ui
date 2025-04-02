import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import MaxWidthDecorator from '../../../../../.storybook/decorators/max-width';
import LandingPageHowTo from './landing-page-how-to.component';

const meta = {
  title: 'Components/LandingPage/LandingPageHowTo',
  decorators: [MaxWidthDecorator(555)],
  component: LandingPageHowTo,
  args: {
    orderedList: {
      head: 'Jetzt Vollmacht erteilen',
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
} satisfies Meta<typeof LandingPageHowTo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  args: {
    hideTopSeparator: undefined,
    hideBottomSeparator: undefined,
  },
};

export const WithoutTopLine: Story = {
  name: 'Without top line',
  args: {
    hideTopSeparator: true,
    hideBottomSeparator: false,
  },
  play: async ({ canvasElement }) => {
    const topLine = within(canvasElement).queryByTestId('landing-page-how-to-top-line');
    const bottomLine = within(canvasElement).getByTestId('landing-page-how-to-bottom-line');
    await expect(topLine).not.toBeInTheDocument();
    await expect(bottomLine).toBeInTheDocument();
  },
};

export const WithoutBottomLine: Story = {
  name: 'Without bottom line',
  args: {
    hideTopSeparator: false,
    hideBottomSeparator: true,
  },
  play: async ({ canvasElement }) => {
    const topLine = within(canvasElement).getByTestId('landing-page-how-to-top-line');
    const bottomLine = within(canvasElement).queryByTestId('landing-page-how-to-bottom-line');
    await expect(topLine).toBeInTheDocument();
    await expect(bottomLine).not.toBeInTheDocument();
  },
};

export const WithoutBothLines: Story = {
  name: 'Without both lines',
  args: {
    hideTopSeparator: true,
    hideBottomSeparator: true,
  },
  play: async ({ canvasElement }) => {
    const topLine = within(canvasElement).queryByTestId('landing-page-how-to-top-line');
    const bottomLine = within(canvasElement).queryByTestId('landing-page-how-to-bottom-line');
    await expect(topLine).not.toBeInTheDocument();
    await expect(bottomLine).not.toBeInTheDocument();
  },
};
