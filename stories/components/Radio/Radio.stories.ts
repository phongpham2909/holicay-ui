import { Radio } from '@/components/Radio';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // 👇 All Checkbox stories expect a label arg
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
      description: 'Determine whether the Checkbox is checked',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'Whether to set the initial state',
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md'],
      description: 'The size of the Checkbox',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable checkbox',
    },
    className: {
      control: 'text',
      description: 'The additional class to Checkbox',
    },
    onChange: {
      description: 'The callback function that is triggered when the state changes',
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    checked: false,
    disabled: true,
  },
};

export const CheckedAndDisabled: Story = {
  args: {
    checked: true,
    disabled: true,
  },
};

export const LabelAndHelperText: Story = {
  args: {
    label: 'Remember Me',
    helperText: 'Save my login details for next time',
  },
};
