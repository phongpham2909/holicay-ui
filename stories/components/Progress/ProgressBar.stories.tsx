import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ProgressBar } from '@/components';

const meta = {
  title: 'In-Progress/Progress',
  component: ProgressBar,
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
} satisfies Meta<typeof ProgressBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ProgressBarBase: Story = {
  name: 'Progress Bar',
  args: {},
};
