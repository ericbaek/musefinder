import type { Meta, StoryObj } from '@storybook/react';
import { LargeTitle } from './LargeTitle';

const meta: Meta<typeof LargeTitle> = {
  title: 'HDS/LargeTitle',
  component: LargeTitle,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof LargeTitle>;

export const Primary: Story = {
  args: {
    Title: 'Title',
  },
};