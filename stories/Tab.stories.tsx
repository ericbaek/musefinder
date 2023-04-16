import type { Meta, StoryObj } from '@storybook/react';

import { Tab } from './Tab';

const meta: Meta<typeof Tab> = {
  title: 'HDS/Tab',
  component: Tab,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Tab>;

export const Primary: Story = {
  args: {
    Href: '/',
    Title: 'Title',
  },
};