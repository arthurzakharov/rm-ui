import type { Meta, StoryObj } from '@storybook/react';
import MaxWidthDecorator from '../../../../../.storybook/decorators/max-width';
import Accordion from './accordion.component';
import { expect, userEvent, within } from '@storybook/test';
import css from './accordion.module.css';

const meta = {
  title: 'Components/Accordion',
  decorators: [MaxWidthDecorator(555)],
  component: Accordion,
  args: {
    blocks: [
      {
        title: '<b>1.</b> Lorem ipsum dolor sit amet, consectetur adipiscing',
        content:
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi<br/><br/>ut aliquip ex ea commodo consequat.',
        condition: null,
      },
      {
        title: '<b>2.</b> Lorem ipsum dolor sit amet, consectetur adipiscing',
        content:
          'Ut enim ad <b>minim veniam</b>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        condition: null,
      },
      {
        title: '<b>3.</b> Lorem ipsum dolor sit amet, consectetur adipiscing',
        content:
          '<i>Ut enim ad minim veniam</i>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        condition: null,
      },
    ],
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithoutHead: Story = {
  name: 'Without head',
  args: {
    title: '',
  },
  play: async ({ args, canvasElement, step }) => {
    const ARROW_CLOSE = `${css.Arrow} ${css.ArrowClose}`;
    const ARROW_OPEN = `${css.Arrow} ${css.ArrowOpen}`;
    const CLOSED = 'height: 0px;';

    const blocks = within(canvasElement).getAllByTestId('accordion-block');

    await step('Check initial state, all blocks are closed', async () => {
      const head = within(canvasElement).queryByTestId('accordion-head');
      await expect(head).not.toBeInTheDocument();
      for (const block of blocks) {
        const i = blocks.indexOf(block);
        const arrow = within(block).getByTestId('accordion-arrow');
        const body = within(block).getByTestId('accordion-body');
        const text = within(block).getByTestId('accordion-text');
        const content = within(block).getByTestId('accordion-content');
        await expect(arrow.className).toEqual(ARROW_CLOSE);
        await expect(body).toHaveAttribute('style', 'height: 0px;');
        await expect(text).toContainHTML(args.blocks[i].title);
        await expect(content).toContainHTML(args.blocks[i].content);
      }
    });

    await step('Click first block, only it is opened', async () => {
      await userEvent.click(within(blocks[0]).getByTestId('accordion-title'));
      const arrows = within(canvasElement).getAllByTestId('accordion-arrow');
      const bodies = within(canvasElement).getAllByTestId('accordion-body');
      await expect(arrows[0].className).toEqual(ARROW_OPEN);
      await expect(arrows[1].className).toEqual(ARROW_CLOSE);
      await expect(arrows[2].className).toEqual(ARROW_CLOSE);
      await expect(bodies[0]).not.toHaveAttribute('style', 'height: 0px;');
      await expect(bodies[1]).toHaveAttribute('style', 'height: 0px;');
      await expect(bodies[2]).toHaveAttribute('style', 'height: 0px;');
    });

    await step('Click second block, second block is opened, other are closed', async () => {
      await userEvent.click(within(blocks[1]).getByTestId('accordion-title'));
      await expect(within(blocks[0]).getByTestId('accordion-arrow').className).toEqual(ARROW_CLOSE);
      await expect(within(blocks[1]).getByTestId('accordion-arrow').className).toEqual(ARROW_OPEN);
      await expect(within(blocks[2]).getByTestId('accordion-arrow').className).toEqual(ARROW_CLOSE);
      await expect(within(blocks[0]).getByTestId('accordion-body')).toHaveAttribute('style', CLOSED);
      await expect(within(blocks[1]).getByTestId('accordion-body')).not.toHaveAttribute('style', CLOSED);
      await expect(within(blocks[2]).getByTestId('accordion-body')).toHaveAttribute('style', CLOSED);
    });

    await step('Click second opened block closes it, all are closed', async () => {
      await userEvent.click(within(blocks[1]).getByTestId('accordion-title'));
      await expect(within(blocks[0]).getByTestId('accordion-arrow').className).toEqual(ARROW_CLOSE);
      await expect(within(blocks[1]).getByTestId('accordion-arrow').className).toEqual(ARROW_CLOSE);
      await expect(within(blocks[2]).getByTestId('accordion-arrow').className).toEqual(ARROW_CLOSE);
      await expect(within(blocks[0]).getByTestId('accordion-body')).toHaveAttribute('style', CLOSED);
      await expect(within(blocks[1]).getByTestId('accordion-body')).toHaveAttribute('style', CLOSED);
      await expect(within(blocks[2]).getByTestId('accordion-body')).toHaveAttribute('style', CLOSED);
    });
  },
};

export const WithHead: Story = {
  name: 'With head',
  args: {
    title: '<b>FAQ:</b> Weitere häufig gestellte Fragen',
  },
  play: async ({ args, canvasElement }) => {
    const head = within(canvasElement).getByTestId('accordion-head');
    await expect(head).toContainHTML(args.title || '');
  },
};
