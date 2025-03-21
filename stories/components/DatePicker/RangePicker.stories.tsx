import React, { useState } from 'react';
import moment from 'moment';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button, RangePicker, RangePickerValue } from '@/components';

const meta = {
  title: 'In-Progress/DatePicker',
  component: RangePicker,
  parameters: {
    chromatic: { disableSnapshot: false },
  },
  argTypes: {
    value: {
      control: false,
      description: 'The selected date value',
      table: {
        type: { summary: '[Date | null, Date | null]' },
        defaultValue: { summary: '[null, null]' },
      },
    },
    onChange: {
      action: 'Date changed',
      description: 'Callback function triggered when the date changes',
      table: {
        type: { summary: '(date: [Date | null, Date | null]) => void' },
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
    onChange: fn(),
  },
} satisfies Meta<typeof RangePicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const RangeDatePicker: Story = {
  name: 'Range Picker - Single month',
  args: {
    size: 'md',
    monthsShown: 1,
  },
  render: (args) => {
    const [dateSelected, setDateSelected] = useState<RangePickerValue>([null, null]);

    return (
      <RangePicker {...args} value={dateSelected} onChange={setDateSelected} className="min-w-64" />
    );
  },
};

export const RangeDatePickerWithMultipleMonths: Story = {
  name: 'Range Picker - Multiple months',
  args: {
    size: 'md',
    monthsShown: 2,
  },
  render: (args) => {
    const [dateSelected, setDateSelected] = useState<RangePickerValue>([null, null]);

    return (
      <RangePicker {...args} value={dateSelected} onChange={setDateSelected} className="min-w-64" />
    );
  },
};

const defaultStartDate = moment().toDate();
const defaultEndDate = moment(defaultStartDate).startOf('day').add(7, 'days').toDate();
const defaultDates: RangePickerValue = [defaultStartDate, defaultEndDate];

export const RangeDatePickerWithExtraFooter = {
  name: 'Range Picker- Extra Footer',
  args: {
    size: 'md',
    monthsShown: 2,
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    const [originalDates, setOriginalDates] = useState<RangePickerValue>(defaultDates);
    const [datesSelected, setDatesSelected] = useState<RangePickerValue>(originalDates);

    const handleClickOutside = () => {
      setIsOpen(false);
      setDatesSelected(originalDates);
    };

    const handleCancel = () => {
      handleClickOutside();
    };

    const handleChange = (dates: RangePickerValue) => {
      setDatesSelected(dates);
    };

    const handleApply = () => {
      setOriginalDates(datesSelected);
      setIsOpen(false);
    };

    return (
      <RangePicker
        {...args}
        open={isOpen}
        value={datesSelected}
        onChange={handleChange}
        onClickOutside={handleClickOutside}
        onInputClick={() => setIsOpen(true)}
        shouldCloseOnSelect={false}
        renderExtraFooter={() => (
          <div className="inline-flex items-center justify-end gap-x-lg w-full">
            <Button type="secondary" color="gray" className="min-w-28" onClick={handleCancel}>
              Cancel
            </Button>
            <Button type="primary" className="min-w-28" onClick={handleApply}>
              Apply
            </Button>
          </div>
        )}
      />
    );
  },
} satisfies Story;
