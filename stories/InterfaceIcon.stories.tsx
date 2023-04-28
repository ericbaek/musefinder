import type { Meta, StoryObj } from '@storybook/react';
import { InterfaceIcon } from './InterfaceIcon';

const meta: Meta<typeof InterfaceIcon> = {
  title: 'HDS/InterfaceIcon',
  component: InterfaceIcon,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof InterfaceIcon>;

export const Primary: Story = {
  args: {
    Icon: '',
  },
};