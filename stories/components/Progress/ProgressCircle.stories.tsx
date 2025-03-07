import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ProgressCircle } from '@/components';

const meta = {
  title: 'In-Progress/Progress',
  component: ProgressCircle,
  parameters: {
    layout: 'centered',
    chromatic: { disableSnapshot: false },
  },
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
      description: 'Set the size of tag',
    },
  },
  // args: { onClick: fn() },
} satisfies Meta<typeof ProgressCircle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProgressCircleBase: Story = {
  name: 'Progress Circle',
  args: {
    size: 'md',
    label: 'Holicay',
  },
};
