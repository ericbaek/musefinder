import type { Meta, StoryObj } from '@storybook/react';

import { FilterSet } from './FilterSet';

const meta: Meta<typeof FilterSet> = {
  title: 'HDS/FilterSet',
  component: FilterSet,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof FilterSet>;

export const Primary: Story = {
  args: {
    Title: '필터',
  },
};