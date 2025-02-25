import Avatar from '@/components/Avatar/Avatar';
import { images } from '@/variables/images';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import React from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Avatar',
  component: Avatar.Group,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // 👇 All Avatar Group stories expect a label arg
    size: {
      control: 'inline-radio',
      options: ['xs', 'sm', 'md'],
      description: 'Set the size of avatar',
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Avatar.Group>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const AvatarGroup: Story = {
  args: {
    size: 'md',
    maxCount: 10,
    children: [
      React.createElement(Avatar, { src: images.HLC_AVATAR_1 }),
      React.createElement(Avatar, { src: images.HLC_AVATAR_2 }),
      React.createElement(Avatar, { src: images.HLC_AVATAR_3 }),
      React.createElement(Avatar, { src: images.HLC_AVATAR_4 }),
      React.createElement(Avatar, { src: images.HLC_AVATAR_5 }),
      React.createElement(Avatar, { src: images.HLC_AVATAR_6 }),
      React.createElement(Avatar, { src: images.HLC_AVATAR_7 }),
      React.createElement(Avatar, { src: images.HLC_AVATAR_8 }),
      React.createElement(Avatar, { src: images.HLC_AVATAR_9 }),
      React.createElement(Avatar, { src: images.HLC_AVATAR_10 }),
      React.createElement(Avatar, { src: images.HLC_AVATAR_11 }),
      React.createElement(Avatar, { src: images.HLC_AVATAR_12 }),
      React.createElement(Avatar, { src: images.HLC_AVATAR_13 }),
      React.createElement(Avatar, { src: images.HLC_AVATAR_14 }),
      React.createElement(Avatar, { src: images.HLC_AVATAR_15 }),
    ],
  },
};

export const AvatarGroupWithButton: Story = {
  args: {
    size: 'md',
    maxCount: 10,
    button: {
      onClick: () => {},
    },
    children: [
      React.createElement(Avatar, { src: images.HLC_AVATAR_1 }),
      React.createElement(Avatar, { src: images.HLC_AVATAR_2 }),
      React.createElement(Avatar, { src: images.HLC_AVATAR_3 }),
      React.createElement(Avatar, { src: images.HLC_AVATAR_4 }),
      React.createElement(Avatar, { src: images.HLC_AVATAR_5 }),
      React.createElement(Avatar, { src: images.HLC_AVATAR_6 }),
      React.createElement(Avatar, { src: images.HLC_AVATAR_7 }),
      React.createElement(Avatar, { src: images.HLC_AVATAR_8 }),
      React.createElement(Avatar, { src: images.HLC_AVATAR_9 }),
      React.createElement(Avatar, { src: images.HLC_AVATAR_10 }),
      React.createElement(Avatar, { src: images.HLC_AVATAR_11 }),
      React.createElement(Avatar, { src: images.HLC_AVATAR_12 }),
      React.createElement(Avatar, { src: images.HLC_AVATAR_13 }),
      React.createElement(Avatar, { src: images.HLC_AVATAR_14 }),
      React.createElement(Avatar, { src: images.HLC_AVATAR_15 }),
    ],
  },
};
