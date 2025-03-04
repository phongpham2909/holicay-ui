import { Avatar } from '@/components';
import { images } from '@/variables/images';
import type { Meta, StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Testing/Avatar',
  component: Avatar.LabelGroup,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // 👇 All AvatarLabelGroup stories expect a label arg
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Set the size of avatar',
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof Avatar.LabelGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const AvatarWithLabel: Story = {
  args: {
    label: 'Kevin Loh',
    helperText: 'kevin@holicay.com',
    src: images.HLC_AVATAR_0,
  },
};

export const AvatarWithLabelAndStatusOnline: Story = {
  args: {
    label: 'Kevin Loh',
    helperText: 'kevin@holicay.com',
    src: images.HLC_AVATAR_0,
    badge: {
      isOnline: true,
    },
  },
};

export const AvatarWithLabelAndLogo: Story = {
  args: {
    label: 'Kevin Loh',
    helperText: 'kevin@holicay.com',
    src: images.HLC_AVATAR_0,
    badge: {
      src: images.HLC_AVATAR_LOGO,
    },
  },
};
