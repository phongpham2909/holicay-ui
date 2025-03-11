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
      options: ['xxs', 'xs', 'sm', 'md', 'lg'],
      description: 'Set the size of progress',
    },
    fontStyle: {
      control: 'object',
      description: 'The style of the label text',
      table: {
        type: {
          summary: '{ fontSize: string, fontFamily: string, fontWeight: string, fill: string }',
        },
      },
    },
    strokeColor: {
      control: 'text',
      description: 'The color of the progress bar line in CSS',
    },
    strokeWidth: {
      control: 'number',
      description: 'The width of the progress bar line in pixels',
    },
    percentage: {
      control: 'number',
      description: 'The percentage of the progress bar filled',
    },
    percentageSeperator: {
      control: 'text',
      description: 'The separator to use between the percentage and label text (default is "of")',
    },
    hasBackground: {
      control: 'boolean',
      description: 'The background of the progress bar',
    },
    bgStrokeColor: {
      control: 'text',
      description: 'The color of the progress bar background line in CSS',
    },
  },
  // args: { onClick: fn() },
} satisfies Meta<typeof ProgressCircle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProgressCircleBase: Story = {
  name: 'Progress Circle',
  args: {
    percentage: 20,
    size: 200,
    fontStyle: {
      fontSize: '32px',
      fontWeight: '600',
      fill: '#101828',
    },
  },
};
