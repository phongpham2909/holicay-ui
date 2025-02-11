import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // 👇 All Button stories expect a label arg
    label: {
      control: 'text',
      description: 'Overwritten description',
    },
    type: {
      control: 'inline-radio',
      options: ['primary', 'secondary', 'text', 'link'],
      description: 'Can be set to primary secondary link text',
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Set the size of button',
    },
    color: {
      control: 'inline-radio',
      options: ['primary', 'gray'],
      description: 'Set the color of button',
    },
    icon: {
      control: 'object',
      description: 'Set the icon component of button',
    },
    iconLeft: {
      control: 'object',
      description: 'Set the left icon component of button',
    },
    iconRight: {
      control: 'object',
      description: 'Set the right icon component of button',
    },
    danger: {
      control: 'boolean',
      description: 'Set the danger status of button',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state of button',
    },
    className: {
      control: 'text',
      description:
        'CSS Class Name which will be appended to the most outer element of a component. Use this prop carefully, overwriting CSS rules might break the component.',
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    size: 'md',
    type: 'primary',
    color: 'primary',
    label: 'Button CTA',
    disabled: false,
    htmlType: 'button',
    icon: React.createElement('i', { className: 'icon icon-rocket-01' }, null),
  },
};

export const Secondary: Story = {
  args: {
    type: 'secondary',
    color: 'primary',
    label: 'Button CTA',
  },
};

export const SecondaryGray: Story = {
  args: {
    type: 'secondary',
    color: 'gray',
    label: 'Button CTA',
  },
};

export const Text: Story = {
  args: {
    type: 'text',
    color: 'primary',
    label: 'Button CTA',
  },
};

export const TextGray: Story = {
  args: {
    type: 'text',
    color: 'gray',
    label: 'Button CTA',
  },
};

export const Link: Story = {
  args: {
    type: 'link',
    color: 'primary',
    label: 'Button CTA',
  },
};

export const LinkGray: Story = {
  args: {
    type: 'link',
    color: 'gray',
    label: 'Button CTA',
  },
};

export const Danger: Story = {
  args: {
    danger: true,
    disabled: false,
    size: 'md',
    type: 'primary',
    color: 'primary',
    label: 'Button CTA',
    htmlType: 'button',
    icon: React.createElement('i', { className: 'icon icon-rocket-01' }, null),
  },
};

export const IconButton: Story = {
  args: {
    size: 'md',
    type: 'primary',
    color: 'primary',
    htmlType: 'button',
    icon: React.createElement('i', { className: 'icon icon-rocket-01' }, null),
  },
};
