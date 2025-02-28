import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { DatePicker } from '@/components';

const meta = {
  title: 'Pending/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
    chromatic: { disableSnapshot: false },
  },
  tags: ['autodocs'],
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof DatePicker>;

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
