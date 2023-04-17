import type { Meta, StoryObj } from '@storybook/react';
import { Filter } from './Filter';

const meta: Meta<typeof Filter> = {
  title: 'HDS/Filter',
  component: Filter,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Filter>;

export const Primary: Story = {
  args: {
    Title: 'Filter',
  },
};