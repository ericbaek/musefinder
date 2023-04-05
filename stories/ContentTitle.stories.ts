import type { Meta, StoryObj } from '@storybook/react';

import { ContentTitle } from './ContentTitle';

const meta: Meta<typeof ContentTitle> = {
  title: 'HDS/ContentTitle',
  component: ContentTitle,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ContentTitle>;

export const Primary: Story = {
  args: {
    Title: '제목',
    Paragraph: '버튼',
  },
};