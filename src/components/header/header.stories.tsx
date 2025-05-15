import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Header from './header.component';
import MaxWidthDecorator from '../../../.storybook/decorators/max-width';

const meta: Meta<typeof Header> = {
  component: Header,
  title: 'Components/Header',
  decorators: [MaxWidthDecorator(1140)],
  args: {
    config: {
      showAlert: false,
      alertMessage:
        '<b>Aktuelle Information</b>: Trotz Corona-Krise steht Ihnen unser Bußgeldcheck wie gewohnt zur Verfügung.',
      alertCss: {
        background: '#eff3f5',
        color: '#1a446f',
      },
      info: 'Kostenlose Erstberatung',
      phone: '030 2555 858 00',
      openingTimes: 'Mo-Fr von 8-20 Uhr',
      enableStickyMobileHead: true,
    },
    selectedKeyword: '',
    logoSrc: 'logo.svg',
    logoMobileSrc: 'logo-mobile.svg',
    headerRef: null,
    onClick: fn,
  },
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  name: 'Header',
};
