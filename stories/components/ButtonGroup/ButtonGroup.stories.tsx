import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ButtonGroup, ButtonGroupOption } from '@/components';

const options: ButtonGroupOption[] = [
  { label: 'Holicay Team', value: 'option1', icon: 'icon-rocket-01' },
  { label: 'Holicay Team 2', value: 'option2', icon: 'icon-rocket-01' },
  { label: 'Holicay Team 3', value: 'option3', icon: 'icon-rocket-01' },
  { label: 'Holicay Team 4', value: 'option4', icon: 'icon-rocket-01' },
];

const meta = {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
    chromatic: { disableSnapshot: false },
  },
  tags: ['autodocs'],
  args: {
    size: 'md',
    options: options,
    onClick: fn(),
  },
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    size: 'md',
    color: 'primary',
  },
};
