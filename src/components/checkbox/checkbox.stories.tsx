import type { Meta, StoryObj } from '@storybook/react';
import { fn, userEvent, within, expect } from '@storybook/test';
import { useState } from 'react';
import Checkbox from './checkbox.component';
import css from './checkbox.module.css';
import MaxWidth from '../../../.storybook/decorators/max-width';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  decorators: [MaxWidth(340)],
  args: {
    value: false,
    label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    name: 'checkbox',
    onChange: fn(),
    className: '',
    invalid: false,
    disabled: false,
    info: undefined,
    onFocus: fn(),
    onBlur: fn(),
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<boolean>(args.value);

    return (
      <Checkbox
        {...args}
        value={value}
        onChange={(value, name) => {
          args.onChange(value, name);
          setValue(value);
        }}
      />
    );
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  args: {
    className: undefined,
    invalid: undefined,
    disabled: undefined,
    info: undefined,
    onFocus: undefined,
    onBlur: undefined,
  },
  play: async ({ canvasElement, args }) => {
    const checkbox = within(canvasElement).getByTestId('checkbox');
    const checkboxInfo = within(canvasElement).queryByTestId('checkbox-info');
    const checkboxInput = within(canvasElement).getByTestId('checkbox-input');
    await expect(checkbox.className).toEqual(css.Checkbox);
    await expect(checkbox).not.toHaveClass(css.CheckboxError);
    await expect(checkboxInfo).not.toBeInTheDocument();
    await expect(checkboxInput).not.toBeDisabled();
    await userEvent.click(checkbox);
    await expect(args.onChange).toHaveBeenNthCalledWith(1, !args.value, args.name);
    await userEvent.tab();
    await userEvent.keyboard('[Space]');
    await userEvent.tab();
    await expect(args.onChange).toHaveBeenNthCalledWith(2, args.value, args.name);
    await userEvent.click(canvasElement);
  },
};

export const Disabled: Story = {
  name: 'Disabled',
  args: {
    disabled: true,
  },
  play: async ({ canvasElement, args }) => {
    const checkbox = within(canvasElement).getByTestId('checkbox');
    const checkboxInput = within(canvasElement).getByTestId('checkbox-input');
    await expect(checkboxInput).toBeDisabled();
    await userEvent.tab();
    await expect(args.onFocus).not.toBeCalled();
    await expect(args.onBlur).not.toBeCalled();
    await userEvent.click(checkbox);
    await expect(args.onChange).not.toBeCalled();
  },
};

export const Invalid: Story = {
  name: 'Invalid',
  args: {
    invalid: true,
  },
  play: async ({ canvasElement }) => {
    const checkbox = within(canvasElement).getByTestId('checkbox');
    await expect(checkbox).toHaveClass(css.CheckboxError);
  },
};

export const WithInfo: Story = {
  name: 'WithInfo',
  args: {
    info: 'Nam a metus quis erat blandit pellentesque. Fusce eget nisl ipsum. Nulla aliquam aliquet nunc, at bibendum ex vestibulum id.',
  },
  play: async ({ canvasElement }) => {
    const checkboxInfo = within(canvasElement).getByTestId('checkbox-info');
    await expect(checkboxInfo).toBeInTheDocument();
  },
};

export const WithClassName: Story = {
  name: 'WithClassName',
  args: {
    className: 'custom-class-name',
  },
  play: async ({ canvasElement, args }) => {
    const checkbox = within(canvasElement).getByTestId('checkbox');
    await expect(checkbox.className).toEqual(`${css.Checkbox} ${args.className}`);
  },
};

export const WithFocusEvents: Story = {
  name: 'WithFocusEvents',
  args: {
    onFocus: fn(),
    onBlur: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const checkboxInput = within(canvasElement).getByTestId('checkbox-input');
    await userEvent.tab();
    await expect(args.onFocus).toHaveBeenNthCalledWith(1, args.name);
    await expect(checkboxInput).toHaveFocus();
    await userEvent.tab();
    await expect(args.onBlur).toHaveBeenNthCalledWith(1, args.name);
    await expect(checkboxInput).not.toHaveFocus();
  },
};
