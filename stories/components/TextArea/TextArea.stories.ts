import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { TextArea } from './TextArea';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/TextArea',
  component: TextArea,
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
    helperText: {
      control: 'text',
      description:
        'Use helper text to provide imperative information regarding an input, such as character limits, password expectations, and more.',
    },
    required: {
      control: 'boolean',
      description: 'Defines whether the component is required.',
    },
    disabled: {
      control: 'boolean',
      description: 'Defines whether the component is in disabled state.',
    },
    readOnly: {
      control: 'boolean',
      description: 'Defines whether the component is read-only.',
    },
    resize: {
      control: 'inline-radio',
      options: ['vertical', 'horizontal', 'auto', 'none'],
      description:
        'Use the resize prop to set whether the text area expands when the user enters text that exceeds the size of the text area.',
    },
    autoSize: {
      control: 'object',
      description:
        'Height autosize feature, can be set to true | false or an object { minRows: 2, maxRows: 6 }',
    },
    className: {
      control: 'text',
      description:
        'CSS Class Name which will be appended to the most outer element of a component. Use this prop carefully, overwriting CSS rules might break the component.',
    },
    wrapperClassName: {
      control: 'text',
      description: 'A specific CSS class for the wrapping div to enhance CSS control.',
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onChange: fn() },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    label: 'Description',
    required: true,
    placeholder: 'Enter a description...',
    helperText: 'This is a hint text to help user.',
    wrapperClassName: 'w-[320px]',
  },
};

export const AutoSize: Story = {
  args: {
    label: 'Description',
    required: true,
    placeholder: 'Enter a description...',
    helperText: 'This is a hint text to help user.',
    autoSize: {
      minRows: 3,
      maxRows: 6,
    },
    wrapperClassName: 'w-[320px]',
  },
};
