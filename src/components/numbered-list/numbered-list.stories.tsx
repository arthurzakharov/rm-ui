import type { Meta, StoryObj } from '@storybook/react';
import NumberedList from './numbered-list.component';
import { expect, within } from '@storybook/test';
import css from './numbered-list.module.css';

const meta = {
  title: 'Components/NumberedList',
  component: NumberedList,
  render: () => (
    <NumberedList>
      <div>
        <b>Sie klicken auf den unteren Button,</b> um auf die Online Vollmacht zu gelangen.
      </div>
      <>
        Bei der Kostenübersicht <b>klicken Sie auf “Ich bin rechtschutzverischert”.</b>
      </>
      {
        '<b>Sie erteilen uns die Vollmacht,</b> teilen uns Ihre Versicherungsdaten mit und wir stellen automatisch die Deckungsanfrage bei Ihrer Versicherung.'
      }
    </NumberedList>
  ),
} satisfies Meta<typeof NumberedList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultNumberedList: Story = {
  name: 'NumberedList',
  play: async ({ canvasElement }) => {
    const items = within(canvasElement).getAllByTestId('numbered-list-item');
    const strings = within(canvasElement).getAllByTestId('numbered-list-string');
    const components = within(canvasElement).getAllByTestId('numbered-list-component');
    await expect(items.length).toEqual(3);
    await expect(strings.length).toEqual(1);
    await expect(components.length).toEqual(2);
    for (const item of items) {
      const idx = items.indexOf(item);
      await expect(item.querySelector('.' + css.Circle)).toHaveTextContent((idx + 1).toString());
    }
  },
};
