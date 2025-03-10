import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ProgressBar, ProgressCircle, ProgressHalfCircle } from '@/components';
import { repeat } from '@/utilities';

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
    className: { control: { type: 'text' }, description: 'Custom class for styling.' },
    prefixCls: {
      control: { type: 'text' },
      description: 'CSS prefix class for custom styles.',
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof ProgressBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  tags: ['!dev'],
  name: 'All Progress',
  args: {
    value: 10,
  },
  render: (args) => {
    return (
      <div className="my-10">
        <div className="flex flex-col gap-y-6">
          <ProgressBar
            {...args}
            value={40}
            tooltip={{ placement: 'right', formatterLabel: (v) => `${v}%` }}
          />
          <div className="flex items-center gap-x-6">
            <ProgressHalfCircle
              {...args}
              percentage={40}
              hasBackground
              fontStyle={{
                fontSize: '16px',
                fontWeight: '600',
                fill: '#101828',
              }}
            />
            <ProgressCircle
              {...args}
              percentage={40}
              fontStyle={{
                fontSize: '32px',
                fontWeight: '600',
                fill: '#101828',
              }}
            />
          </div>
        </div>
      </div>
    );
  },
};

export const ProgressBarBase: Story = {
  name: 'Progress Bar',
  args: {
    value: 10,
  },
  render: (args) => {
    return (
      <div className="my-10">
        <div className="flex flex-col gap-y-6 w-80">
          {repeat(10).map((_, index) => (
            <ProgressBar key={index} {...args} value={10 * index} />
          ))}
        </div>
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
        <div className="flex flex-col gap-y-6 w-80">
          <ProgressBar {...args} />
          <ProgressBar
            {...args}
            tooltip={{
              ...args.tooltip,
              placement: 'bottom',
            }}
          />
        </div>
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
        <div className="flex flex-col gap-y-6 w-80">
          <ProgressBar
            {...args}
            tooltip={{
              ...args.tooltip,
              placement: 'left',
            }}
          />
          <ProgressBar {...args} />
          <ProgressBar
            {...args}
            tooltip={{
              ...args.tooltip,
              placement: 'bottomRight',
            }}
          />
          <ProgressBar
            {...args}
            tooltip={{
              ...args.tooltip,
              placement: 'bottomLeft',
            }}
          />
        </div>
      </div>
    );
  },
};
