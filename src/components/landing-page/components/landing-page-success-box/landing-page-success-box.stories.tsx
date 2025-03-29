import type { Meta, StoryObj } from '@storybook/react';
import LandingPageSuccessBox from './landing-page-success-box.component';
import MaxWidthDecorator from '../../../../../.storybook/decorators/max-width';

const meta = {
  title: 'Components/LandingPage/LandingPageSuccessBox',
  component: LandingPageSuccessBox,
  decorators: [MaxWidthDecorator(615)],
  args: {
    color: '#00b649',
    head: {
      primary: 'Primary text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      secondary: 'Secondary text. Lorem ipsum dolor sit amet.',
    },
    main: [
      {
        type: 'title',
        data: 'SuccessBoxTitleComponent 1. lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        type: 'html',
        data: "<div style='margin: 10px 0;'>SuccessBoxHtmlComponent 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>",
      },
      {
        type: 'list',
        data: [
          {
            type: 'check',
            content:
              '<span>Tatvorwurf [0]:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            subContent: [
              'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            ],
          },
          {
            type: 'check',
            content:
              '<span>Tatvorwurf [1]:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          },
          {
            type: 'question',
            content:
              '<span>Tatvorwurf [2]:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          },
          {
            type: 'exclamation',
            content:
              '<span>Tatvorwurf [3]:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          },
          {
            type: 'cross',
            content:
              '<span>Tatvorwurf [4]:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          },
        ],
      },
    ],
  },
} satisfies Meta<typeof LandingPageSuccessBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'LandingPageSuccessBox',
};
