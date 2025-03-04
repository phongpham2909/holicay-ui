import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { TimePicker } from '@/components';

const meta = {
  title: 'Components/TimePicker',
  component: TimePicker,
  parameters: {
    layout: 'centered',
    chromatic: { disableSnapshot: false },
  },
  tags: ['autodocs'],
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof TimePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  tags: ['!dev'],
  args: {
    size: 'md',
    type: 'pill',
    shape: 'rounded',
    label: 'Holicay',
  },
};
