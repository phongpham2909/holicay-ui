import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { DatePicker } from '@/components';

const meta = {
  title: 'Components/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
    chromatic: { disableSnapshot: false },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'date',
      description: 'The selected date value',
      table: {
        type: { summary: 'Date | null' },
        defaultValue: { summary: 'null' },
      },
    },
    onChange: {
      action: 'changed',
      description: 'Callback function triggered when the date changes',
      table: {
        type: { summary: '(date: Date | null) => void' },
      },
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the date picker button',
      table: {
        type: { summary: '"sm" | "md" | "lg"' },
        defaultValue: { summary: '"lg"' },
      },
    },
    popperClassName: {
      control: 'text',
      description: 'Custom class name for the popper',
      table: {
        type: { summary: 'string' },
      },
    },
    wrapperClassName: {
      control: 'text',
      description: 'Custom class name for the wrapper',
      table: {
        type: { summary: 'string' },
      },
    },
    dateFormat: {
      control: 'text',
      description: 'Date format string',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'DD-MM-YYYY' },
      },
    },
    placeholderText: {
      control: 'text',
      description: 'Placeholder text when no date is selected',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Select date' },
      },
    },
    calendarStartDay: {
      control: 'number',
      description: 'Start day of the week (0 = Sunday, 1 = Monday, etc.)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1' },
      },
    },
    showPopperArrow: {
      control: 'boolean',
      description: 'Show or hide the popper arrow',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    popperPlacement: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right', 'bottom-start', 'bottom-end'],
      description: 'Placement of the popper',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'bottom-end' },
      },
    },
    customInput: {
      control: false,
      description: 'Custom input component for the date picker',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    renderCustomHeader: {
      control: false,
      description: 'Custom header renderer for the date picker calendar',
      table: {
        type: { summary: '(props) => ReactNode' },
      },
    },
    prefixCls: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
