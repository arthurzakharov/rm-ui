import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import MaxWidthDecorator from '../../../../../.storybook/decorators/max-width';
import Review from './review.component';

const meta = {
  title: 'Components/LandingPage/Review',
  decorators: [MaxWidthDecorator(555)],
  component: Review,
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
} satisfies Meta<typeof Review>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default (without title)',
  args: {
    title: undefined,
  },
  play: async ({ args, canvasElement }) => {
    const title = within(canvasElement).queryByTestId('review-title');
    const reviews = within(canvasElement).getAllByTestId('review-item');
    await expect(title).not.toBeInTheDocument();
    for (const review of reviews) {
      const i = reviews.indexOf(review);
      await expect(within(review).getByTestId('review-message')).toHaveTextContent(args.reviews[i].message);
      await expect(within(review).getByTestId('review-name')).toHaveTextContent(args.reviews[i].name);
      await expect(within(review).getByRole('link')).toHaveTextContent(args.reviews[i].link.text);
      await expect(within(review).getByRole('link')).toHaveAttribute('href', args.reviews[i].link.href);
    }
  },
};

export const WithTitle: Story = {
  name: 'With title',
  args: {
    title: '<b>Erfahrungen:</b> Das sagen unsere Mandanten',
  },
  play: async ({ canvasElement }) => {
    const title = within(canvasElement).getByTestId('review-title');
    await expect(title).toBeInTheDocument();
  },
};
