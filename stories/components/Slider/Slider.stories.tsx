import type { Meta, StoryObj } from '@storybook/react';

import { Slider } from '@/components';
import { useState } from 'react';

const meta = {
  title: 'In-Progress/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
    chromatic: { disableSnapshot: false },
  },
  argTypes: {
    min: { control: { type: 'number' }, description: 'Minimum value of the slider.' },
    max: { control: { type: 'number' }, description: 'Maximum value of the slider.' },
    value: {
      control: { type: 'object' },
      description: 'Current value(s) of the slider as an array.',
    },
    tooltip: {
      control: { type: 'object' },
      description: 'Tooltip settings (placement, formatter, formatterLabel).',
    },
    onChange: { action: 'changed', description: 'Callback when the slider value changes.' },
    className: { control: { type: 'text' }, description: 'Custom class for styling.' },
    prefixCls: {
      control: { type: 'text' },
      description: 'CSS prefix class for custom styles.',
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
  render: () => {
    const [value, setValue] = useState([25]);

    return (
      <div className="my-10">
        <Slider value={value} onChange={setValue} />
      </div>
    );
  },
};

export const Range: Story = {
  args: {
    max: 100,
    step: 5,
  },
  render: (args) => {
    const [value, setValue] = useState([25, 50]);

    return (
      <div className="my-10">
        <Slider {...args} value={value} onChange={setValue} />
      </div>
    );
  },
};

export const RangeWithLabel: Story = {
  args: {
    max: 100,
    step: 5,
  },
  render: (args) => {
    const [value, setValue] = useState([25, 75]);

    const formatterLabel = (value: number) => `${value}%`;

    return (
      <div className="my-10">
        <div className="flex flex-col gap-y-6">
          <Slider
            {...args}
            tooltip={{ placement: 'top', formatterLabel }}
            value={value}
            onChange={setValue}
          />

          <Slider
            {...args}
            tooltip={{ placement: 'bottom', formatterLabel }}
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
    );
  },
};

export const RangeWithTooltip: Story = {
  args: {
    max: 100,
    step: 5,
  },
  render: (args) => {
    const [value, setValue] = useState([50, 100]);

    const formatter = (value: number) => `${value}%`;

    return (
      <div className="my-10">
        <div className="flex flex-col gap-y-6">
          <Slider {...args} tooltip={{ formatter }} value={value} onChange={setValue} />

          <Slider
            {...args}
            tooltip={{ formatter, placement: 'bottom' }}
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
    );
  },
};
