import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import LandingPageContact from './landing-page-contact.component';
import css from './landing-page-contact.module.css';

const meta = {
  title: 'Components/LandingPage/LandingPageContact',
  component: LandingPageContact,
  args: {
    submitted: false,
    onClick: fn(),
  },
} satisfies Meta<typeof LandingPageContact>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  args: {
    head: undefined,
    main: undefined,
    button: undefined,
    success: undefined,
    className: undefined,
    sidebar: undefined,
  },
  play: async ({ canvasElement }) => {
    const contact = within(canvasElement).getByTestId('landing-page-contact');
    const success = within(canvasElement).queryByTestId('landing-page-contact-success');
    const wait = within(canvasElement).getByTestId('landing-page-contact-wait');
    const button = within(canvasElement).getByTestId('landing-page-contact-button');
    await expect(contact.className).toEqual(css.LandingPageContact);
    await expect(success).not.toBeInTheDocument();
    await expect(wait).toBeInTheDocument();
    await expect(wait).toHaveTextContent('Sie haben noch Fragen?');
    await expect(wait).toHaveTextContent('Vereinbaren Sie jetzt kostenlos und unverbindliches Erstgepräch');
    await expect(button).toHaveTextContent('Kontaktieren Sie uns');
  },
};

export const DefaultSubmitted: Story = {
  name: 'Default submitted',
  args: {
    ...Default.args,
    submitted: true,
  },
  play: async ({ canvasElement }) => {
    const success = within(canvasElement).getByTestId('landing-page-contact-success');
    const wait = within(canvasElement).queryByTestId('landing-page-contact-wait');
    await expect(success).toBeInTheDocument();
    await expect(success).toHaveTextContent('Vielen Dank, wir haben Ihre Anfrage erhalten.');
    await expect(wait).not.toBeInTheDocument();
  },
};

export const Submitted: Story = {
  name: 'Submitted',
  args: {
    success: 'Vielen Dank, wir haben Ihre Anfrage erhalten.',
    submitted: true,
  },
  play: async ({ canvasElement, args }) => {
    const success = within(canvasElement).getByTestId('landing-page-contact-success');
    const wait = within(canvasElement).queryByTestId('landing-page-contact-wait');
    await expect(success).toBeInTheDocument();
    await expect(success).toHaveTextContent(args.success || '');
    await expect(wait).not.toBeInTheDocument();
  },
};

export const NotSubmitted: Story = {
  name: 'NotSubmitted',
  args: {
    head: 'Sie haben noch Fragen?',
    main: 'Vereinbaren Sie jetzt kostenlos und unverbindliches Erstgepräch',
    button: 'Kontaktieren Sie uns',
    submitted: false,
  },
  play: async ({ canvasElement, args }) => {
    const success = within(canvasElement).queryByTestId('landing-page-contact-success');
    const wait = within(canvasElement).getByTestId('landing-page-contact-wait');
    const button = within(canvasElement).getByTestId('landing-page-contact-button');
    await expect(success).not.toBeInTheDocument();
    await expect(wait).toBeInTheDocument();
    await expect(wait).toHaveClass(css.LandingPageContactWait);
    await expect(wait).not.toHaveClass(css.LandingPageContactWaitSidebar);
    await expect(wait).toHaveTextContent(args.head || '');
    await expect(wait).toHaveTextContent(args.main || '');
    await expect(button).toHaveTextContent(args.button || '');
    await userEvent.click(button);
    await expect(button).not.toHaveFocus();
    await expect(args.onClick).toHaveBeenNthCalledWith(1);
  },
};

export const NotSidebarVersion: Story = {
  name: 'Not sidebar version',
  args: {
    ...NotSubmitted.args,
    sidebar: false,
  },
  play: async ({ canvasElement }) => {
    const wait = within(canvasElement).getByTestId('landing-page-contact-wait');
    await expect(wait).toHaveClass(css.LandingPageContactWait);
    await expect(wait).not.toHaveClass(css.LandingPageContactWaitSidebar);
  },
};

export const SidebarVersion: Story = {
  name: 'Sidebar version',
  args: {
    ...NotSubmitted.args,
    sidebar: true,
  },
  play: async ({ canvasElement }) => {
    const wait = within(canvasElement).getByTestId('landing-page-contact-wait');
    await expect(wait).toHaveClass(css.LandingPageContactWait);
    await expect(wait).toHaveClass(css.LandingPageContactWaitSidebar);
  },
};

export const CustomClassName: Story = {
  name: 'Custom className',
  args: {
    className: 'custom-class-name',
  },
  play: async ({ canvasElement }) => {
    const contact = within(canvasElement).getByTestId('landing-page-contact');
    await expect(contact.className).toEqual(css.LandingPageContact + ' custom-class-name');
  },
};
