import type { Meta, StoryObj } from '@storybook/react';
import { Picture } from './Picture';

const meta: Meta<typeof Picture> = {
  title: 'HDS/Picture',
  component: Picture,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Picture>;

export const Primary: Story = {
  args: {
    Image: 'https://go.develoid.net/gate/bestphoto/BESTPHOTO.png',
  },
};