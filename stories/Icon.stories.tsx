import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'HDS/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Primary: Story = {
  args: {
    Icon: '',
  },
};