import type { Meta, StoryObj } from '@storybook/react';
import { NavTop } from './NavTop';

const meta: Meta<typeof NavTop> = {
  title: 'HDS/NavTop',
  component: NavTop,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof NavTop>;

export const Primary: Story = {
  args: {
    V_Icon: false,
    Icon: '',
    Title: 'Title',
  },
};