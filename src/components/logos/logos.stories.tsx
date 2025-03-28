import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import Logos from './logos.component';
import MaxWidthDecorator from '../../../.storybook/decorators/max-width';

const meta: Meta<typeof Logos> = {
  component: Logos,
  title: 'Components/Logos',
  decorators: [MaxWidthDecorator(600)],
  args: {
    tlsSrc: './tls.png',
    tuvSrc: './tuv.jpeg',
  },
};

export default meta;

type Story = StoryObj<typeof Logos>;

export const ShowTUVAndTLS: Story = {
  name: 'Show TUV and TLS',
  args: {
    show: ['tuv', 'tls'],
  },
  play: async ({ args, canvasElement }) => {
    const tuv = within(canvasElement).getByTestId('tuv');
    const tls = within(canvasElement).getByTestId('tls');
    await expect(tuv).toBeInTheDocument();
    await expect(tls).toBeInTheDocument();
    await expect(tuv).toHaveAttribute('src', args.tuvSrc);
    await expect(within(tls).getByRole('img')).toHaveAttribute('src', args.tlsSrc);
    await expect(tls).toHaveTextContent('Höchste');
    await expect(tls).toHaveTextContent('Datensicherheit.');
  },
};

export const ShowTUV: Story = {
  name: 'Show only TUV',
  args: {
    show: ['tuv'],
  },
  play: async ({ canvasElement }) => {
    const tuv = within(canvasElement).getByTestId('tuv');
    const tls = within(canvasElement).queryByTestId('tls');
    await expect(tuv).toBeInTheDocument();
    await expect(tls).not.toBeInTheDocument();
  },
};

export const ShowTLS: Story = {
  name: 'Show only TLS',
  args: {
    show: ['tls'],
  },
  play: async ({ canvasElement }) => {
    const tuv = within(canvasElement).queryByTestId('tuv');
    const tls = within(canvasElement).getByTestId('tls');
    await expect(tuv).not.toBeInTheDocument();
    await expect(tls).toBeInTheDocument();
  },
};
