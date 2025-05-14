import type { Meta, StoryObj } from '@storybook/react';
import { expect, waitFor, within } from '@storybook/test';
import LogoBoard from './logo-board.component';
import MaxWidthDecorator from '../../../../../.storybook/decorators/max-width';

const meta = {
  title: 'Components/LandingPage/LogoBoard',
  decorators: [MaxWidthDecorator(555)],
  component: LogoBoard,
  args: {
    logos: [
      {
        name: '01-arag.png',
      },
      {
        name: '02-adac.png',
      },
      {
        name: '03-hug-coburg.png',
      },
      {
        name: '04-allianz.png',
      },
      {
        name: '05-roland.png',
      },
      {
        name: '06-oerag.png',
      },
      {
        name: '11-deutsche-direkt.png',
      },
      {
        name: '07-advocard.png',
      },
      {
        name: '08-das.png',
      },
      {
        name: '09-devk.png',
      },
      {
        name: '10-lvm.png',
      },
      {
        name: '12-concordia.png',
      },
      {
        name: '13-rv.png',
      },
      {
        name: '14-debeka.png',
      },
      {
        name: '15-auxilia.png',
      },
      {
        name: '16-nrv.png',
      },
      {
        name: '17-wuerttenbergische.png',
      },
      {
        name: '18-zurich.png',
      },
      {
        name: '19-allrecht.png',
      },
      {
        name: '20-itzehoer.png',
      },
      {
        name: '21-rechtsschutzunion.png',
      },
      {
        name: '22-dmb.png',
      },
      {
        name: '23-wgv.png',
      },
      {
        name: '24-vgh.png',
      },
      {
        name: '25-diecontinentale.png',
      },
      {
        name: '26-mecklenburgische.png',
      },
      {
        name: '27-bgv.png',
      },
      {
        name: '28-provinzial.png',
      },
      {
        name: '29-vhv.png',
      },
      {
        name: '30-ergo.png',
      },
      {
        name: '31-ideal.png',
      },
      {
        name: '32-hdi.png',
      },
      {
        name: '33-janitos.png',
      },
      {
        name: '34-axa.png',
      },
      {
        name: '35-deurag.png',
      },
    ],
  },
} satisfies Meta<typeof LogoBoard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
};

export const NotDefinedPriority: Story = {
  name: 'Not defined priority',
  args: {
    logos: [
      {
        name: '01-arag.png',
      },
      {
        name: '02-adac.png',
      },
      {
        name: '03-hug-coburg.png',
      },
      {
        name: '04-allianz.png',
      },
      {
        name: '05-roland.png',
      },
    ],
  },
  play: async ({ args, canvasElement }) => {
    const images = within(canvasElement).getAllByTestId('logo-board-image');
    await expect(images.length).toEqual(5);
    for (const logoName of args.logos.map((logo) => logo.name)) {
      const i = args?.logos.map((logo) => logo.name).indexOf(logoName);
      await expect(images[i].getAttribute('src')).toContain(logoName);
      await expect(images[i].getAttribute('alt')).toEqual(logoName);
    }
  },
};

export const DefinedPriority: Story = {
  name: 'Defined priority',
  args: {
    logos: [
      {
        name: '01-arag.png',
      },
      {
        name: '02-adac.png',
        priority: 1,
      },
      {
        name: '03-hug-coburg.png',
        priority: 2,
      },
      {
        name: '04-allianz.png',
        priority: 3,
      },
      {
        name: '05-roland.png',
      },
    ],
  },
  play: async ({ canvasElement }) => {
    const images = within(canvasElement).getAllByTestId('logo-board-image');
    await expect(images[0].getAttribute('alt')).toContain('04-allianz.png');
    await expect(images[1].getAttribute('alt')).toContain('03-hug-coburg.png');
    await expect(images[2].getAttribute('alt')).toContain('01-arag.png');
    await expect(images[3].getAttribute('alt')).toContain('02-adac.png');
    await expect(images[4].getAttribute('alt')).toContain('05-roland.png');
  },
};

export const NotFoundImage: Story = {
  name: 'Not found image',
  args: {
    logos: [
      {
        name: '01-arag.png',
      },
      {
        name: 'not-found.png',
      },
      {
        name: '02-adac.png',
      },
      {
        name: '03-hug-coburg.png',
      },
      {
        name: '04-allianz.png',
      },
      {
        name: '05-roland.png',
      },
    ],
  },
  play: async ({ canvasElement }) => {
    await waitFor(async () => {
      const images = within(canvasElement).queryAllByTestId('logo-board-image');
      const notFound = within(canvasElement).queryAllByTestId('logo-board-not-found');
      await expect(images.length).toEqual(5);
      await expect(notFound.length).toEqual(1);
    });
  },
};
