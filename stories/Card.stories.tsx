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

  export const Var1: Story = {
    args: {
      V_LeftIcon: false,
      V_Paragraph: true,
      V_Paragraph2: false,
      V_RightIcon: false,
      V_Accent: true,
      V_LeftIconBG: false,
      V_BG: false,
      Title: 'Title',
      Paragraph: 'Paragraph',
      Paragraph2: 'Paragraph2',
      LeftIcon: '',
      LeftIconBG: 'var(--box-icon-color)',
      LeftIconImage: '',
      RightIcon: '',
      AccentBG: 'var(--color-dynamic-muse)',
      AccentText: 'Dist',
      BG: 'var(--bg-color)',
    },
  };

  export const Var2: Story = {
    args: {
      V_LeftIcon: true,
      V_Paragraph: true,
      V_Paragraph2: false,
      V_RightIcon: true,
      V_Accent: false,
      V_LeftIconBG: false,
      V_BG: false,
      Title: 'Title',
      Paragraph: 'Paragraph',
      Paragraph2: 'Paragraph2',
      LeftIcon: '',
      LeftIconBG: 'var(--box-icon-color)',
      LeftIconImage: '',
      RightIcon: '',
      AccentBG: 'var(--color-dynamic-muse)',
      AccentText: 'Dist',
      BG: 'var(--bg-color)',
    },
  };

  export const Var3: Story = {
    args: {
      V_LeftIcon: true,
      V_Paragraph: false,
      V_Paragraph2: false,
      V_RightIcon: true,
      V_Accent: false,
      V_LeftIconBG: false,
      V_BG: false,
      Title: 'Title',
      Paragraph: 'Paragraph',
      Paragraph2: 'Paragraph2',
      LeftIcon: '',
      LeftIconBG: 'var(--box-icon-color)',
      LeftIconImage: 'https://go.develoid.net/gate/image/dancerush.png',
      RightIcon: '',
      AccentBG: 'var(--color-dynamic-muse)',
      AccentText: 'Dist',
      BG: 'var(--bg-color)',
    },
  };