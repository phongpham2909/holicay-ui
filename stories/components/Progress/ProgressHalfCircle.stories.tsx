import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ProgressHalfCircle } from '@/components';

const meta = {
  title: 'In-Progress/Progress',
  component: ProgressHalfCircle,
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
} satisfies Meta<typeof ProgressHalfCircle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProgressHalfCircleBase: Story = {
  name: 'Progress Half Circle',
  args: {
    percentage: 80,
    strokeWidth: 10,
    size: 200,
    fontStyle: {
      fontSize: '16px',
      fontWeight: '600',
      fill: '#101828',
    },
    strokeLinecap: 'round',
    hasBackground: true,
  },
};
