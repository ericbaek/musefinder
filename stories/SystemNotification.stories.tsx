import type { Meta, StoryObj } from '@storybook/react';
import { SystemNotification } from './SystemNotification';

const meta: Meta<typeof SystemNotification> = {
  title: 'HDS/SystemNotification',
  component: SystemNotification,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof SystemNotification>;

export const Primary: Story = {
  args: {
    V_LeftIcon: true,
    LeftIcon: '',
    Title: 'Title',
  },
};