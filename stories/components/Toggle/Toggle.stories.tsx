import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Toggle } from '@/components';

const meta = {
  title: 'Testing/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Customize label',
    },
    helperText: {
      control: 'text',
      description: 'Customize helper text',
    },
    checked: {
      control: 'boolean',
      description: 'Determine whether the Switch is checked',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'Whether to set the initial state',
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md'],
      description: 'The size of the Switch',
    },
    loading: {
      control: 'boolean',
      description: 'Loading state of switch',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable switch',
    },
    className: {
      control: 'text',
      description: 'The additional class to Switch',
    },
    onChange: {
      description: 'Trigger when the checked state is changing',
    },
    onClick: {
      description: 'Trigger when clicked',
    },
  },
  args: { onChange: fn() },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Checked: Story = {
  args: {
    checked: true,
  },
  render: (args) => {
    const [checked, setChecked] = useState(args.checked);
    return <Toggle {...args} checked={checked} onChange={(c) => setChecked(c)} />;
  },
};

export const Disabled: Story = {
  args: {
    checked: false,
    disabled: true,
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Remember Me',
  },
  render: (args) => {
    const [checked, setChecked] = useState(args.checked);
    return <Toggle {...args} checked={checked} onChange={(c) => setChecked(c)} />;
  },
};

export const WithLabelAndHelperText: Story = {
  args: {
    label: 'Remember Me',
    helperText: 'Save my login details for next time',
  },
  render: (args) => {
    const [checked, setChecked] = useState(args.checked);
    return <Toggle {...args} checked={checked} onChange={(c) => setChecked(c)} />;
  },
};
