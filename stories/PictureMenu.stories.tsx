import type { Meta, StoryObj } from '@storybook/react';

import { PictureMenu } from './PictureMenu';

const meta: Meta<typeof PictureMenu> = {
  title: 'HDS/PictureMenu',
  component: PictureMenu,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof PictureMenu>;

export const Primary: Story = {
  args: {
    Href: 'https://go.develoid.net/gate/bestphoto/BESTPHOTO.html',
    Image: 'https://go.develoid.net/gate/bestphoto/BESTPHOTO.png',
  },
};