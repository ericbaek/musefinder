import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'HDS/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  args: {
    Primary: true,
    Title: '제목',
    Paragraph: '내용',
    Paragraph2_True: false,
    Paragraph2: '정보',
    AccentText: '정보',
    AccentBG: 'var(--color-dynamic-muse)',
    BG: 'var(--color-dynamic-muse)',
    Accent: true,
    RadiusAll: true,
  },
};

export const Secondary: Story = {
  args: {
    Primary: false,
    Title: '제목',
    Paragraph: '내용',
    Paragraph2_True: false,
    Paragraph2: '정보',
    Accent: false,
    BG: 'var(--color-dynamic-muse)',
    RadiusAll: true,
  },
};