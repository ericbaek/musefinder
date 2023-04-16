import type { Meta, StoryObj } from '@storybook/react';

import { AccountIcon } from './AccountIcon';

const meta: Meta<typeof AccountIcon> = {
  title: 'HDS/AccountIcon',
  component: AccountIcon,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof AccountIcon>;

export const Primary: Story = {
  args: {
    Href: 'https://go.develoid.net/gate/bestphoto/BESTPHOTO.html',
    Image: 'https://go.develoid.net/gate/bestphoto/BESTPHOTO.png',
  },
};