import { Meta } from '@storybook/react';

type IconArgs = {
  argTypes: Meta['argTypes'];
  args: Meta['args'];
};

const iconArgs: IconArgs = {
  argTypes: {
    width: { control: 'number', name: 'width' },
    fill: { control: 'color', name: 'color' },
  },
  args: {
    width: 80,
    fill: '#00b649',
  },
};

export default iconArgs;
