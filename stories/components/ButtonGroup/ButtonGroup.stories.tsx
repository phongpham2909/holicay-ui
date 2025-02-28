import React, { useState } from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { fn } from '@storybook/test';

import { ButtonGroup, ButtonGroupOption, ButtonGroupProps } from '@/components';

const options: ButtonGroupOption[] = [
  { label: 'Holicay 1', value: 'option1', icon: 'icon-rocket-01' },
  { label: 'Holicay 2', value: 'option2', icon: 'icon-rocket-01' },
  { label: 'Holicay 3', value: 'option3', icon: 'icon-rocket-01' },
  { label: 'Holicay 4', value: 'option4', icon: 'icon-rocket-01' },
];

const meta = {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A flexible button group component that allows single or multiple selections. Supports prefixes, suffixes, and disabled states.',
      },
    },
    chromatic: { disableSnapshot: false },
  },
  tags: ['autodocs'],
  args: {
    size: 'md',
    options: options,
    onClick: fn(),
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the button group.',
    },
    multiple: {
      control: 'boolean',
      description: 'Allows multiple selections when true.',
    },
    prefixCls: {
      control: 'text',
      description: 'Optional prefix for class names.',
    },
    options: {
      control: 'object',
      description:
        'Array of button options including label, value, and optional icon, suffix, prefix, or disabled state.',
    },
    value: {
      description: 'Currently selected values.',
    },
    onChange: {
      action: 'changed',
      description: 'Callback function triggered when selection changes.',
    },
  },
} satisfies Meta<typeof ButtonGroup>;

export default meta;

const Template: StoryFn<ButtonGroupProps> = (args) => {
  const [selected, setSelected] = useState<string[]>(args.value || []);
  return (
    <ButtonGroup
      {...args}
      value={selected}
      onChange={(newSelected) => {
        setSelected(newSelected);
        args.onChange && args.onChange(newSelected);
      }}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  size: 'md',
  multiple: false,
  options,
};

export const MultipleSelection = Template.bind({});
MultipleSelection.args = {
  size: 'md',
  multiple: true,
  options,
};
