import Avatar from '@/components/Avatar/Avatar';
import { AvatarBadge } from '@/components/Avatar/AvatarBadge';
import { images } from '@/variables/images';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import React from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  subcomponents: {
    'Avatar.LabelGroup': Avatar.LabelGroup,
    'Avatar.Profile': Avatar.Profile,
    'Avatar.Group': Avatar.Group,
    AvatarBadge,
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // 👇 All Avatar stories expect a label arg
    label: {
      control: 'text',
      description: 'Customize label',
    },
    helperText: {
      control: 'text',
      description: 'Customize helper text',
    },
    className: {
      control: 'text',
      description: 'The additional class to Avatar',
    },
    rootClassName: {
      control: 'text',
      description: 'The additional root class to Avatar',
    },
    alt: {
      description: 'This attribute defines the alternative text describing the image',
    },
    size: {
      control: 'inline-radio',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Set the size of avatar',
    },
    isOnline: {
      description: 'Set the status online of avatar',
    },
    srcSet: {
      description: 'A list of sources to use for different screen resolutions	',
    },
    crossOrigin: {
      control: 'inline-radio',
      options: ['anonymous', 'use-credentials', ''],
      description: 'CORS settings attributes',
    },
    onError: {
      description: 'Handler when img load error, return false to prevent default fallback behavior',
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const AvatarWithImage: Story = {
  args: {
    src: images.HLC_AVATAR_0,
  },
};

export const AvatarWithIcon: Story = {
  args: {
    icon: React.createElement('i', { className: 'icon icon-user-01' }, null),
  },
};

export const AvatarWithChildren: Story = {
  args: {
    children: 'OR',
  },
};

export const AvatarWithStatusOnline: Story = {
  args: {
    src: images.HLC_AVATAR_0,
    badge: {
      isOnline: true,
    },
  },
};

export const AvatarWithLogo: Story = {
  args: {
    src: images.HLC_AVATAR_0,
    badge: {
      src: images.HLC_AVATAR_LOGO,
    },
  },
};
