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
    strokeLinecap: {
      control: 'inline-radio',
      options: ['butt', 'round', 'square'],
      description: 'The type of end cap for the progress bar line',
      table: {
        type: { summary: 'butt | round | square' },
        defaultValue: { summary: 'round' },
      },
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
} satisfies Meta<typeof ProgressHalfCircle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProgressHalfCircleBase: Story = {
  name: 'Progress Half Circle',
  args: {
    percentage: 80,
    fontStyle: {
      fontSize: '16px',
    },
  },
};
