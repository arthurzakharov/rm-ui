import type { Meta, StoryObj } from '@storybook/react';
import Icon from "./check.component";

const meta = {
  title: "Icons/IconCheck",
  component: Icon,
  argTypes: {
    width: { control: "number", name: "width" },
    fill: { control: "color", name: "color" },
  },
  args: {
    width: 80,
    fill: "#00b649",
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'IconCheck'
};
