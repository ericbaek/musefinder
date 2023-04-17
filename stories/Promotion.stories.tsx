import type { Meta, StoryObj } from '@storybook/react';
import { Promotion } from './Promotion';

const meta: Meta<typeof Promotion> = {
  title: 'HDS/Promotion',
  component: Promotion,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Promotion>;

export const Primary: Story = {
  args: {
    V_Paragraph: true,
    Title: 'Title',
    Paragraph: 'Paragraph',
    Image: 'https://go.develoid.net/gate/bestphoto/BESTPHOTO.png',
    Distribute: 'Start',
  },
};