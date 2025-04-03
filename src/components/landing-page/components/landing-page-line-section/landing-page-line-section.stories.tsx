import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import MaxWidthDecorator from '../../../../../.storybook/decorators/max-width';
import LandingPageLineSection from './landing-page-line-section.component';

const meta = {
  title: 'Components/LandingPage/LandingPageLineSection',
  decorators: [MaxWidthDecorator(555)],
  component: LandingPageLineSection,
  render: (args) => (
    <LandingPageLineSection {...args}>
      <div style={{ width: '100%', height: 100, background: '#eee' }} />
    </LandingPageLineSection>
  ),
} satisfies Meta<typeof LandingPageLineSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithBothLines: Story = {
  name: 'With both lines',
  args: {
    hideTop: false,
    hideBottom: false,
  },
  play: async ({ canvasElement }) => {
    const top = within(canvasElement).queryByTestId('landing-page-top-line');
    const bottom = within(canvasElement).getByTestId('landing-page-bottom-line');
    await expect(top).not.toBeInTheDocument();
    await expect(bottom).toBeInTheDocument();
  },
};

export const WithoutBothLines: Story = {
  name: 'Without both lines',
  args: {
    hideTop: true,
    hideBottom: true,
  },
  play: async ({ canvasElement }) => {
    const top = within(canvasElement).queryByTestId('landing-page-top-line');
    const bottom = within(canvasElement).queryByTestId('landing-page-bottom-line');
    await expect(top).not.toBeInTheDocument();
    await expect(bottom).not.toBeInTheDocument();
  },
};

export const WithoutTop: Story = {
  name: 'Without top line',
  args: {
    hideTop: true,
    hideBottom: false,
  },
  play: async ({ canvasElement }) => {
    const top = within(canvasElement).queryByTestId('landing-page-top-line');
    const bottom = within(canvasElement).getByTestId('landing-page-bottom-line');
    await expect(top).not.toBeInTheDocument();
    await expect(bottom).toBeInTheDocument();
  },
};

export const WithoutBottom: Story = {
  name: 'Without bottom line',
  args: {
    hideTop: false,
    hideBottom: true,
  },
  play: async ({ canvasElement }) => {
    const top = within(canvasElement).getByTestId('landing-page-top-line');
    const bottom = within(canvasElement).queryByTestId('landing-page-bottom-line');
    await expect(top).toBeInTheDocument();
    await expect(bottom).not.toBeInTheDocument();
  },
};
