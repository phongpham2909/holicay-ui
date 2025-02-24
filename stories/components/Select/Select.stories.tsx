import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { MultiSelect, SingleSelect, Select, MultiSelectValue, Option } from '@/components';

const options: Option[] = [
  { label: 'Holicay Team', subLabel: '@holicay', value: 'option1' },
  { label: 'Holicay Team 2', subLabel: '@holicay', value: 'option2', disabled: true },
  { label: 'Holicay Team 3', value: 'option3', disabled: false },
  { label: 'Holicay Team 4', value: 'option4' },
  { label: 'Holicay Team 5', value: 'option5' },
  { label: 'Holicay Team 6', value: 'option6' },
  { label: 'Holicay Team 7', value: 'option7' },
  { label: 'Holicay Team 8', value: 'option8' },
  { label: 'Holicay', value: 'option9' },
  { label: 'Holicay', value: 'option10' },
];

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    chromatic: { disableSnapshot: false },
  },
};

export default meta;

export const SelectProps = {
  tags: ['!dev'],
  argTypes: {
    mode: {
      control: 'radio',
      options: ['single', 'multiple', 'tags'],
      description: 'Defines the selection mode.',
      table: {
        type: { summary: "'single' | 'multiple' | 'tags'" },
        defaultValue: { summary: 'single' },
      },
    },
    name: {
      control: false,
      description: 'The `name` attribute for the select component.',
      table: {
        type: { summary: 'string' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the select component, preventing user interaction.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    readOnly: {
      control: 'boolean',
      description: 'Makes the select component read-only, preventing value changes.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text displayed when no value is selected.',
      table: {
        type: { summary: 'string' },
      },
    },
    size: {
      control: 'radio',
      options: ['sm', 'md'],
      description: 'Determines the size of the select component.',
      table: {
        type: { summary: "'sm' | 'md'" },
        defaultValue: { summary: 'md' },
      },
    },
    allowClear: {
      control: 'boolean',
      description: 'Enables a clear button for clearing the selection.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    clearIcon: {
      control: false, // ReactNode cannot be controlled via Storybook UI
      description: 'Custom clear icon to display when `allowClear` is `true`.',
      table: {
        type: { summary: 'React.ReactNode' },
        disable: true, // Initially hidden, dynamically enabled via Storybook args
      },
      if: { arg: 'allowClear', truthy: true }, // Shows only when `allowClear` is true
    },
    options: {
      control: 'object', // Allows Storybook UI to edit options
      description: 'Array of selectable options.',
      table: {
        type: {
          summary: 'Option[]',
          detail: JSON.stringify(
            [
              { label: 'Option 1', value: 'option-1' },
              { label: 'Option 2', value: 'option-2' },
            ],
            null,
            2
          ),
        },
      },
      defaultValue: [
        { label: 'Option 1', value: 'option-1' },
        { label: 'Option 2', value: 'option-2' },
      ],
    },
    onClear: {
      control: false,
      description: 'Callback function triggered when the clear button is clicked.',
      table: {
        type: { summary: '() => void' },
      },
    },
    onSearch: {
      control: false,
      description: 'Callback function triggered when the input value changes.',
      table: {
        type: { summary: '(value: string) => void' },
      },
    },
  },
};

type SingleSelectStory = StoryObj<typeof SingleSelect>;

export const Base: SingleSelectStory = {
  name: 'Single Select',
  args: {
    options,
    showSearch: true,
    placeholder: 'Search to Select',
  },
};

export const SingleSelectSearchInDropdown: SingleSelectStory = {
  name: 'Single Select - Search In Dropdown',
  args: {
    options,
    disabled: false,
    readOnly: false,
    dropdownShowSearch: true,
    placeholder: 'Select item',
  },
};

export const SingleSelectProps = {
  tags: ['!dev'],
  argTypes: {
    mode: {
      table: {
        disable: true, // Correctly disables 'mode' since it's irrelevant in single select
      },
    },
    onChange: {
      control: false,
      action: 'value changed',
      description:
        'Callback function invoked when the selected value changes. Receives the new value as an argument.',
      table: {
        type: { summary: '(value: string | number) => void' },
      },
    },
    value: {
      control: 'text',
      description: 'The currently selected value. If `null`, no option is selected.',
      type: { name: 'string | number | null' }, // Fixed incorrect 'function' type
      table: {
        type: { summary: 'string | number | null' },
        defaultValue: { summary: null }, // Optional: set this if the default state is no selection
      },
    },
  },
};

type MultipleSelectStory = StoryObj<typeof MultiSelect>;

export const MultipleSelect: MultipleSelectStory = {
  args: {
    options,
    disabled: false,
    readOnly: false,
    showSearch: true,
    allowClear: true,
    placeholder: 'Search to Select items',
  },
  render: ({ ...props }) => {
    const [values, setValues] = React.useState<MultiSelectValue>([]);

    return <MultiSelect {...props} value={values} onChange={setValues} />;
  },
};

export const MultipleSelectSearchInDropdown: MultipleSelectStory = {
  name: 'Multiple Select - Search In Dropdown',
  args: {
    options,
    disabled: false,
    readOnly: false,
    allowClear: true,
    dropdownShowSearch: true,
    placeholder: 'Select items',
  },
  render: ({ ...props }) => {
    const [values, setValues] = React.useState<MultiSelectValue>([]);

    return <MultiSelect {...props} value={values} onChange={setValues} />;
  },
};

export const MultipleSelectProps = {
  tags: ['!dev'],
  argTypes: {
    mode: {
      table: {
        disable: true,
      },
    },
    value: {
      control: 'object', // Allows editing selected values in Storybook
      description:
        'The selected values of the MultiSelect component. If `null`, no option is selected.',
      table: {
        type: { summary: 'string[] | null' },
        defaultValue: { summary: 'null' },
      },
      defaultValue: [],
    },
    onChange: {
      action: 'values changed',
      description: 'Callback function triggered when the selected values change.',
      table: {
        type: { summary: '(value: string[]) => void' },
      },
    },
  },
};
