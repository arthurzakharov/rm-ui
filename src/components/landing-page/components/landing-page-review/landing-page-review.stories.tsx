import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import MaxWidthDecorator from '../../../../../.storybook/decorators/max-width';
import LandingPageReview from './landing-page-review.component';

const meta = {
  title: 'Components/LandingPage/LandingPageReview',
  decorators: [MaxWidthDecorator(768)],
  component: LandingPageReview,
  args: {
    reviews: [
      {
        message:
          'Sehr zu empfehlen. Ich musste mich um Nichts kümmern und bekam dann die positive Antwort, dass der Fall eingestellt wird - dankeschön an das professionelle Team.',
        name: 'Anja S.',
        link: {
          href: 'https://www.ausgezeichnet.org/bewertungen-sos-verkehrsrecht.de-68VSTZ',
          text: 'Ausgezeichnet.org',
        },
      },
      {
        message:
          'Sehr kompetente Kanzlei. Alle bürokratischen Hürden werden einem abgenommen. Schnell und zuverlässig. Immer wieder gerne.',
        name: 'J. Jack',
        link: {
          href: 'https://goo.gl/maps/2Sd9m69yRPHvkBPx6',
          text: 'Google Maps',
        },
      },
      {
        message:
          'Ich brauchte das erste mal Rechtsbeistand im Verkehrsrecht und meine Wahl bereue ich nicht. Ich war zu schnell unterwegs und wurde geblitzt. Die Kanzlei hat sich um alles gekümmert. Ein Tag nach der Anfrage bekam ich einen Anruf und wurde über alles aufgeklärt. Nach ein paar Wochen wurde das Verfahren eingestellt. Ich bin sehr zu Frieden und kann die Kanzlei nur empfehlen. Ich danke vielmals für den tollen Rechtsbeistand.',
        name: 'John',
        link: {
          href: 'https://www.ausgezeichnet.org/bewertungen-sos-verkehrsrecht.de-68VSTZ',
          text: 'Ausgezeichnet.org',
        },
      },
    ],
  },
} satisfies Meta<typeof LandingPageReview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  args: {
    hideTopSeparator: undefined,
    hideBottomSeparator: undefined,
  },
  play: async ({ args, canvasElement }) => {
    const topLine = within(canvasElement).getByTestId('landing-page-review-top-line');
    const bottomLine = within(canvasElement).getByTestId('landing-page-review-bottom-line');
    const reviews = within(canvasElement).getAllByTestId('landing-page-review-item');
    await expect(topLine).toBeInTheDocument();
    await expect(bottomLine).toBeInTheDocument();
    for (const review of reviews) {
      const i = reviews.indexOf(review);
      await expect(within(review).getByTestId('landing-page-review-message')).toHaveTextContent(
        args.reviews[i].message,
      );
      await expect(within(review).getByTestId('landing-page-review-name')).toHaveTextContent(args.reviews[i].name);
      await expect(within(review).getByRole('link')).toHaveTextContent(args.reviews[i].link.text);
      await expect(within(review).getByRole('link')).toHaveAttribute('href', args.reviews[i].link.href);
    }
  },
};

export const WithoutTopLine: Story = {
  name: 'Without top line',
  args: {
    hideTopSeparator: true,
    hideBottomSeparator: false,
  },
  play: async ({ canvasElement }) => {
    const topLine = within(canvasElement).queryByTestId('landing-page-review-top-line');
    const bottomLine = within(canvasElement).getByTestId('landing-page-review-bottom-line');
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
    const topLine = within(canvasElement).getByTestId('landing-page-review-top-line');
    const bottomLine = within(canvasElement).queryByTestId('landing-page-review-bottom-line');
    await expect(topLine).toBeInTheDocument();
    await expect(bottomLine).not.toBeInTheDocument();
  },
};
