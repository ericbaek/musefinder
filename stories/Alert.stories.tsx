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
    V_LeftIcon: true,
    V_Paragraph: true,
    LeftIcon: '',
    Title: 'Title',
    Paragraph: 'Paragraph',
  },
};