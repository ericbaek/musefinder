import type { Meta, StoryObj } from '@storybook/react';

import { Alert } from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'HDS/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Primary: Story = {
  args: {
    Icon: '',
    Title: '공지사항',
    Paragraph: '날짜',
  },
};