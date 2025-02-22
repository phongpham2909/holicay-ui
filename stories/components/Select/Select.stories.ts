import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Select } from '@/components';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Select',
  component: Select,
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
      description: 'Defines the label text of the component.',
    },
    name: {
      control: 'text',
      description:
        'Determines the name by which the component will be identified upon submission in an HTML form.',
    },
    value: {
      control: 'text',
      description: 'Defines the value of the component.',
    },
    placeholder: {
      control: 'text',
      description:
        'Defines a short hint intended to aid the user with data entry when the component has no value.',
    },
    // helperText: {
    //   control: 'text',
    //   description:
    //     'Use helper text to provide imperative information regarding an input, such as character limits, password expectations, and more.',
    // },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onChange: fn() },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
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

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const SingleSelect: Story = {
  name: 'Base - Single Select',
  args: {
    mode: 'single',
    options,
    label: 'Select Label',
    required: true,
    disabled: false,
    readOnly: false,
    showSearch: true,
    dropdownShowSearch: false,
    placeholder: 'Placeholder',
    helperText: 'Hint text',
  },
};

export const SingleSelectSearchInDropdown: Story = {
  name: 'Single Select - Search In Dropdown',
  args: {
    mode: 'single',
    options,
    label: 'Select Label',
    required: true,
    disabled: false,
    readOnly: false,
    dropdownShowSearch: true,
    placeholder: 'Placeholder',
    helperText: 'Hint text',
  },
};

export const MultipleSelect: Story = {
  args: {
    mode: 'multiple',
    options,
    label: 'Select Label',
    required: true,
    disabled: false,
    readOnly: false,
    showSearch: true,
    placeholder: 'Placeholder',
    helperText: 'Hint text',
  },
};

export const MultipleSelectSearchInDropdown: Story = {
  name: 'Multiple Select - Search In Dropdown',
  args: {
    mode: 'multiple',
    options,
    label: 'Select Label',
    required: true,
    disabled: false,
    readOnly: false,
    showSearch: true,
    placeholder: 'Placeholder',
    helperText: 'Hint text',
  },
};
