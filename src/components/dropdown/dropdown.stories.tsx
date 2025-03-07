import type { Meta, StoryObj } from '@storybook/react';
import type { DropdownChoice } from './dropdown.types';
import { useState } from 'react';
import { expect, fn, userEvent, within } from '@storybook/test';
import Dropdown from './dropdown.component';
import MaxWidth from '../../../.storybook/decorators/max-width';

const generateChoices = (arr: number[]): DropdownChoice[] =>
  arr.map((a) => ({
    value: a.toString(),
    label: `${a} year`,
  }));

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  decorators: [MaxWidth(340)],
  args: {
    choices: generateChoices([
      2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014,
    ]),
    choice: null,
    placeholder: 'Select an option',
    noResult: 'No result',
    isSearchHidden: false,
    isSuccessHighlighted: false,
    closeButton: 'Close',
    onChange: fn(),
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [choice, setChoice] = useState<DropdownChoice[] | null>(args.choice);

    return (
      <Dropdown
        {...args}
        choice={choice}
        onChange={(choice) => {
          setChoice(choice);
          args.onChange(choice);
        }}
      />
    );
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SingleSelection: Story = {
  name: 'Single selection',
  args: {
    multiple: false,
  },
  /**
   * Test:
   * - Check that value has placeholder value;
   * - Click to open dropdown
   * - Box is shown, search is shown, all choices are displayed
   * - Close is not shown on single choice
   */
  play: async ({ args, canvasElement, step }) => {
    const value = within(canvasElement).getByTestId('dropdown-value');
    const border = within(canvasElement).getByTestId('dropdown-border');
    await step('Open dropdown, filter input is empty and in focus, all choices are displayed', async () => {
      await expect(value).toHaveTextContent(args.placeholder || '');
      await userEvent.click(border);
      const box = within(canvasElement).getByTestId('dropdown-box');
      const search = within(canvasElement).getByTestId('dropdown-search');
      const input = within(canvasElement).getByTestId('dropdown-input');
      const choices = within(canvasElement).getAllByTestId('dropdown-choice');
      const close = within(canvasElement).queryByTestId('dropdown-close');
      await expect(box).toBeInTheDocument();
      await expect(search).toBeInTheDocument();
      await expect(input).toHaveValue('');
      await expect(input).toHaveFocus();
      await expect(choices.length).toEqual(args.choices.length);
      await expect(close).not.toBeInTheDocument();
    });
    await step('Enter "201" to filter input, filter is applied, close dropdown with outside click', async () => {
      const input = within(canvasElement).getByTestId('dropdown-input');
      await userEvent.type(input, '201');
      const choicesUpdated = within(canvasElement).getAllByTestId('dropdown-choice');
      await expect(choicesUpdated.length).toEqual(5);
      await userEvent.click(canvasElement);
    });
    await step('Reopen dropdown, check filter is preserved, selecting "2011 year" closes dropdown', async () => {
      const box = within(canvasElement).queryByTestId('dropdown-box');
      await expect(box).not.toBeInTheDocument();
      await userEvent.click(border);
      const inputAfterReopen = within(canvasElement).getByTestId('dropdown-input');
      await expect(inputAfterReopen).toHaveFocus();
      await expect(inputAfterReopen).toHaveValue('201');
      const choices = within(canvasElement).getAllByTestId('dropdown-choice');
      await expect(choices.length).toEqual(5);
      await userEvent.click(choices[1]);
    });
    await step('Dropdown is closed. Selected label is displayed', async () => {
      const box = within(canvasElement).queryByTestId('dropdown-box');
      await expect(box).not.toBeInTheDocument();
      await expect(value).toHaveTextContent('2011 year');
      await expect(args.onChange).toHaveBeenNthCalledWith(1, [{ value: '2011', label: '2011 year' }]);
    });
    await step('Open dropdown, clear filter, all choices are displayed', async () => {
      await userEvent.click(border);
      await userEvent.keyboard('[Backspace]');
      await userEvent.keyboard('[Backspace]');
      await userEvent.keyboard('[Backspace]');
      const input = within(canvasElement).getByTestId('dropdown-input');
      const choices = within(canvasElement).getAllByTestId('dropdown-choice');
      await expect(input).toHaveValue('');
      await expect(choices.length).toEqual(args.choices.length);
    });
    await step('Close dropdown. Selected label is still displayed, onChange was called only once', async () => {
      await userEvent.click(canvasElement);
      await expect(value).toHaveTextContent('2011 year');
      await expect(args.onChange).toBeCalledTimes(1);
    });
  },
};

export const MultipleSelection: Story = {
  name: 'Multiple selection',
  args: {
    multiple: true,
  },
};

export const WithCloseAndOpen: Story = {
  name: 'With onClose and onOpen ',
  args: {
    ...SingleSelection.args,
    onClose: fn(),
    onOpen: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const border = within(canvasElement).getByTestId('dropdown-border');
    await userEvent.click(border);
    const box = within(canvasElement).getByTestId('dropdown-box');
    await expect(args.onOpen).toHaveBeenNthCalledWith(1, box.offsetHeight, box.offsetWidth);
    await userEvent.click(canvasElement);
    await expect(args.onClose).toHaveBeenNthCalledWith(1);
  },
};

export const SingleSelectionWithChoice: Story = {
  name: 'Single selection with choice ',
  args: {
    ...SingleSelection.args,
    choice: [{ value: '2009', label: '2009 year' }],
  },
  play: async ({ canvasElement, args }) => {
    const value = within(canvasElement).getByTestId('dropdown-value');
    await expect(value).toHaveTextContent((args.choice || []).map((c) => c.label).join(', '));
  },
};

export const MultipleSelectionWithChoice: Story = {
  name: 'Multiple selection with choice ',
  args: {
    ...MultipleSelection.args,
    choice: [
      { value: '2001', label: '2001 year' },
      { value: '2009', label: '2009 year' },
    ],
  },
  play: async ({ canvasElement, args }) => {
    const value = within(canvasElement).getByTestId('dropdown-value');
    await expect(value).toHaveTextContent((args.choice || []).map((c) => c.label).join(', '));
  },
};

export const SingleSelectionWithoutSearch: Story = {
  name: 'Single selection without search ',
  args: {
    ...SingleSelection.args,
    isSearchHidden: true,
  },
  play: async ({ canvasElement }) => {
    const border = within(canvasElement).getByTestId('dropdown-border');
    await userEvent.click(border);
    const search = within(canvasElement).queryByTestId('dropdown-search');
    await expect(search).not.toBeInTheDocument();
    await userEvent.click(canvasElement);
  },
};

export const MultipleSelectionWithoutSearch: Story = {
  name: 'Multiple selection without search ',
  args: {
    ...MultipleSelection.args,
    isSearchHidden: true,
  },
  play: async ({ canvasElement }) => {
    const border = within(canvasElement).getByTestId('dropdown-border');
    await userEvent.click(border);
    const search = within(canvasElement).queryByTestId('dropdown-search');
    const close = within(canvasElement).getByTestId('dropdown-close');
    await expect(search).not.toBeInTheDocument();
    await expect(close).toBeInTheDocument();
    await userEvent.click(canvasElement);
  },
};
