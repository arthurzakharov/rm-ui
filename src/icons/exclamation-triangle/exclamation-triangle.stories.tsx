import type { Meta, StoryObj } from '@storybook/react';
import Icon from "./exclamation-triangle.component";

const meta = {
  title: "Icons/IconExclamationTriangle",
  component: Icon,
  argTypes: {
    width: { control: "number", name: "Width" },
    color: { control: "color", name: "Color" },
  },
  args: {
    width: 80,
    color: "#00b649",
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'IconExclamationTriangle'
};
