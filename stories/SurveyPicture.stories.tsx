import type { Meta, StoryObj } from '@storybook/react';
import { SurveyPicture } from './SurveyPicture';

const meta: Meta<typeof SurveyPicture> = {
  title: 'HDS/SurveyPicture',
  component: SurveyPicture,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof SurveyPicture>;

export const Primary: Story = {
  args: {
    Image: 'https://go.develoid.net/gate/bestphoto/BESTPHOTO.png',
    V_Paragraph: true,
    Title: 'Title',
    Paragraph: 'Paragraph',
  },
};