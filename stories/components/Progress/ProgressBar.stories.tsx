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
  argTypes: {},
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
