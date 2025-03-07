import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Slider } from '@/components';

const meta = {
  title: 'In-Progress/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
    chromatic: { disableSnapshot: false },
  },

  tags: ['autodocs'],

  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
      description: 'Set the size of tag',
    },
  },
  // args: { onClick: fn() },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    size: 'md',
    label: 'Holicay',
  },
};
