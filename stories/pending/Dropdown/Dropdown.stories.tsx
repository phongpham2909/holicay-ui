import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Dropdown } from '@/components';

const meta = {
  title: 'Pending/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
    chromatic: { disableSnapshot: false },
  },
  tags: ['autodocs'],
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Dropdown>;

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
