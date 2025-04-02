import type { Meta, StoryObj } from '@storybook/react';
import MaxWidthDecorator from '../../../../../.storybook/decorators/max-width';
import LandingPageAccordion from './landing-page-accordion.component';
import { expect, userEvent, within } from '@storybook/test';
import css from './landing-page-accordion.module.css';

const meta = {
  title: 'Components/LandingPage/LandingPageAccordion',
  decorators: [MaxWidthDecorator(555)],
  component: LandingPageAccordion,
  args: {
    blocks: [
      {
        title: '<b>1.</b> Lorem ipsum dolor sit amet, consectetur adipiscing',
        content:
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi<br/><br/>ut aliquip ex ea commodo consequat.',
      },
      {
        title: '<b>2.</b> Lorem ipsum dolor sit amet, consectetur adipiscing',
        content:
          'Ut enim ad <b>minim veniam</b>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        title: '<b>3.</b> Lorem ipsum dolor sit amet, consectetur adipiscing',
        content:
          '<i>Ut enim ad minim veniam</i>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
    ],
  },
} satisfies Meta<typeof LandingPageAccordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  args: {
    head: undefined,
  },
  play: async ({ args, canvasElement, step }) => {
    const ARROW_CLOSE = `${css.Arrow} ${css.ArrowClose}`;
    const ARROW_OPEN = `${css.Arrow} ${css.ArrowOpen}`;
    const CLOSED = 'height: 0px;';

    const blocks = within(canvasElement).getAllByTestId('landing-page-accordion-block');

    await step('Check initial state, all blocks are closed', async () => {
      const head = within(canvasElement).queryByTestId('landing-page-accordion-head');
      await expect(head).not.toBeInTheDocument();
      for (const block of blocks) {
        const i = blocks.indexOf(block);
        const arrow = within(block).getByTestId('landing-page-accordion-arrow');
        const body = within(block).getByTestId('landing-page-accordion-body');
        const text = within(block).getByTestId('landing-page-accordion-text');
        const content = within(block).getByTestId('landing-page-accordion-content');
        await expect(arrow.className).toEqual(ARROW_CLOSE);
        await expect(body).toHaveAttribute('style', 'height: 0px;');
        await expect(text).toContainHTML(args.blocks[i].title);
        await expect(content).toContainHTML(args.blocks[i].content);
      }
    });

    await step('Click first block, only it is opened', async () => {
      await userEvent.click(within(blocks[0]).getByTestId('landing-page-accordion-title'));
      const arrows = within(canvasElement).getAllByTestId('landing-page-accordion-arrow');
      const bodies = within(canvasElement).getAllByTestId('landing-page-accordion-body');
      await expect(arrows[0].className).toEqual(ARROW_OPEN);
      await expect(arrows[1].className).toEqual(ARROW_CLOSE);
      await expect(arrows[2].className).toEqual(ARROW_CLOSE);
      await expect(bodies[0]).not.toHaveAttribute('style', 'height: 0px;');
      await expect(bodies[1]).toHaveAttribute('style', 'height: 0px;');
      await expect(bodies[2]).toHaveAttribute('style', 'height: 0px;');
    });

    await step('Click second block, second block is opened, other are closed', async () => {
      await userEvent.click(within(blocks[1]).getByTestId('landing-page-accordion-title'));
      await expect(within(blocks[0]).getByTestId('landing-page-accordion-arrow').className).toEqual(ARROW_CLOSE);
      await expect(within(blocks[1]).getByTestId('landing-page-accordion-arrow').className).toEqual(ARROW_OPEN);
      await expect(within(blocks[2]).getByTestId('landing-page-accordion-arrow').className).toEqual(ARROW_CLOSE);
      await expect(within(blocks[0]).getByTestId('landing-page-accordion-body')).toHaveAttribute('style', CLOSED);
      await expect(within(blocks[1]).getByTestId('landing-page-accordion-body')).not.toHaveAttribute('style', CLOSED);
      await expect(within(blocks[2]).getByTestId('landing-page-accordion-body')).toHaveAttribute('style', CLOSED);
    });

    await step('Click second opened block closes it, all are closed', async () => {
      await userEvent.click(within(blocks[1]).getByTestId('landing-page-accordion-title'));
      await expect(within(blocks[0]).getByTestId('landing-page-accordion-arrow').className).toEqual(ARROW_CLOSE);
      await expect(within(blocks[1]).getByTestId('landing-page-accordion-arrow').className).toEqual(ARROW_CLOSE);
      await expect(within(blocks[2]).getByTestId('landing-page-accordion-arrow').className).toEqual(ARROW_CLOSE);
      await expect(within(blocks[0]).getByTestId('landing-page-accordion-body')).toHaveAttribute('style', CLOSED);
      await expect(within(blocks[1]).getByTestId('landing-page-accordion-body')).toHaveAttribute('style', CLOSED);
      await expect(within(blocks[2]).getByTestId('landing-page-accordion-body')).toHaveAttribute('style', CLOSED);
    });
  },
};

export const WithHead: Story = {
  name: 'With head',
  args: {
    head: '<b>FAQ:</b> Weitere häufig gestellte Fragen',
  },
  play: async ({ args, canvasElement }) => {
    const head = within(canvasElement).getByTestId('landing-page-accordion-head');
    await expect(head).toContainHTML(args.head || '');
  },
};
