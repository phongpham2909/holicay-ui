import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button, DatePicker, DatePickerValue } from '@/components';
import moment from 'moment';

const meta = {
  title: 'In-Progress/DatePicker',
  component: DatePicker,
  parameters: {
    chromatic: { disableSnapshot: false },
  },
  argTypes: {
    value: {
      control: false,
      description: 'The selected date value',
      table: {
        type: { summary: 'Date | null' },
        defaultValue: { summary: 'null' },
      },
    },
    onChange: {
      action: 'Date changed',
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
        type: { summary: 'sm | md | lg' },
        defaultValue: { summary: 'lg' },
      },
    },
    minDate: {
      control: false,
      description: 'The minimum selectable date.',
      table: {
        type: { summary: 'Date' },
      },
    },
    maxDate: {
      control: false,
      description: 'The maximum selectable date.',
      table: {
        type: { summary: 'Date' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the date picker will be disabled.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
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
  args: {
    size: 'md',
    onChange: fn(),
  },
} satisfies Meta<typeof DatePicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base = {
  tags: ['!dev'],
} satisfies Story;

export const Default: Story = {
  render: (args) => {
    const [dateSelected, setDateSelected] = useState<DatePickerValue>(new Date());

    return <DatePicker {...args} value={dateSelected} onChange={setDateSelected} />;
  },
};

export const Disabled = {
  args: {
    value: new Date(),
    disabled: true,
  },
} satisfies Story;

export const MinMaxDate = {
  name: 'Min & Max Date',
  args: {
    value: new Date(),
    minDate: moment().toDate(),
    maxDate: moment().add(3, 'years').toDate(),
  },
} satisfies Story;

const defaultDate = moment().toDate();

export const ExtraFooter = {
  name: 'Extra Footer',
  args: {
    value: new Date(),
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    const [originalDate, setOriginalDate] = useState<DatePickerValue>(defaultDate);
    const [dateSelected, setDateSelected] = useState<DatePickerValue>(originalDate);

    const handleClickOutside = () => {
      setIsOpen(false);
      setDateSelected(originalDate);
    };

    const handleCancel = () => {
      handleClickOutside();
    };

    const handleChange = (date: DatePickerValue) => {
      setDateSelected(date);
    };

    const handleApply = () => {
      setOriginalDate(dateSelected);
      setIsOpen(false);
    };

    return (
      <DatePicker
        {...args}
        open={isOpen}
        value={dateSelected}
        onChange={handleChange}
        onClickOutside={handleClickOutside}
        onInputClick={() => setIsOpen(true)}
        shouldCloseOnSelect={false}
        renderExtraFooter={() => (
          <div className="inline-flex items-center justify-between gap-x-lg w-full">
            <Button type="secondary" color="gray" fullWidth onClick={handleCancel}>
              Cancel
            </Button>
            <Button type="primary" fullWidth onClick={handleApply}>
              Apply
            </Button>
          </div>
        )}
      />
    );
  },
} satisfies Story;
