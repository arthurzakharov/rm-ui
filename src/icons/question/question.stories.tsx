import type { Meta, StoryObj } from '@storybook/react';
import Icon from "./question.component";

const meta = {
  title: "Icons/IconQuestion",
  component: Icon,
  argTypes: {
    width: { control: "number", name: "Width" },
    fill: { control: "color", name: "Color" },
  },
  args: {
    width: 80,
    fill: "#00b649",
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'IconQuestion'
};
