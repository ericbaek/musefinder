import type { Meta, StoryObj } from '@storybook/react';
import { DragPill } from './DragPill';

const meta: Meta<typeof DragPill> = {
  title: 'HDS/DragPill',
  component: DragPill,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof DragPill>;

export const Primary: Story = {
  args: {
  },
};