import type { Meta, StoryObj } from '@storybook/react';

import { Search } from './Search';

const meta: Meta<typeof Search> = {
  title: 'HDS/Search',
  component: Search,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Search>;

export const Primary: Story = {
  args: {
    LeftIcon: '',
    Input: 'Placeholder',
    RightIcon: '',
  },
};