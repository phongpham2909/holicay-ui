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
    tooltip: {
      control: { type: 'object' },
      description: 'Configures tooltip behavior (placement, formatting).',
      table: {
        type: {
          summary: `{
            showArrow?: boolean;
            placement?: "top" | "bottom";
            formatter?: (value: number) => React.ReactNode | null;
            formatterLabel?: (value: number) => React.ReactNode | null;
          }`,
        },
      },
    },
  },
  // args: { onClick: fn() },
} satisfies Meta<typeof ProgressBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ProgressBarBase: Story = {
  name: 'Progress Bar',
  args: {
    value: 10,
  },
  render: (args) => {
    return (
      <div className="my-10">
        <ProgressBar {...args} className="w-80" />
      </div>
    );
  },
};

export const ProgressBarWithTooltip: Story = {
  name: 'Progress Bar With Tooltip',
  args: {
    value: 20,
    tooltip: {
      showArrow: true,
      placement: 'top',
      formatter: (value) => `${value}%`,
    },
  },
  render: (args) => {
    return (
      <div className="my-10">
        <ProgressBar {...args} className="w-80" />
      </div>
    );
  },
};

export const ProgressBarWithLabel: Story = {
  name: 'Progress Bar With Label',
  args: {
    value: 20,
    tooltip: {
      showArrow: true,
      placement: 'right',
      formatterLabel: (value) => `${value}%`,
    },
  },
  render: (args) => {
    return (
      <div className="my-10">
        <ProgressBar {...args} className="w-80" />
      </div>
    );
  },
};
