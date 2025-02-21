import Avatar from '@/components/Avatar/Avatar';
import { images } from '@/variables/images';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import React from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Avatar',
  component: Avatar.Profile,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // 👇 All Avatar stories expect a label arg
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
      description: 'Set the size of avatar',
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Avatar.Profile>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const AvatarProfileWithImage: Story = {
  args: {
    src: images.HLC_AVATAR_0,
  },
};

export const AvatarProfileWithIcon: Story = {
  args: {
    icon: React.createElement('i', { className: 'icon icon-user-01' }, null),
  },
};

export const AvatarProfileWithText: Story = {
  args: {
    children: 'OR',
  },
};

export const AvatarProfileWithLogo: Story = {
  args: {
    src: images.HLC_AVATAR_0,
    badge: {
      src: images.HLC_AVATAR_BADGE,
    },
  },
};
