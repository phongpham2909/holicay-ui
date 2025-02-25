import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Tag, Avatar, Icon, Dot } from '@/components';
import { images } from '@/variables/images';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // 👇 All Button stories expect a label arg
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
      description: 'Set the size of tag',
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Base: Story = {
  args: {
    size: 'md',
    label: 'Holicay',
  },
};

export const Solid: Story = {
  args: {
    size: 'md',
    type: 'solid',
    label: 'Holicay',
  },
  render: ({ ...props }) => {
    return (
      <div className="flex flex-col gap-y-4">
        <div className="flex items-center gap-x-4">
          <Tag {...props} prefixIcon={<Avatar size="xxs" src={images.HLC_AVATAR_0} alt="" />} />
          <Tag {...props} prefixIcon={<Dot color="success" size="md" />} />
          <Tag {...props} prefixIcon={<Icon name="icon-car-02" size="md" />} />
        </div>
        <div className="flex items-center gap-x-4">
          <Tag
            {...props}
            selected
            prefixIcon={<Avatar size="xxs" src={images.HLC_AVATAR_0} alt="" />}
          />
          <Tag {...props} selected prefixIcon={<Dot color="success" size="md" />} />
          <Tag {...props} selected prefixIcon={<Icon name="icon-car-02" size="md" />} />
        </div>
      </div>
    );
  },
};

export const LeadingIcon: Story = {
  args: {
    size: 'md',
    label: 'Holicay',
  },
  render: ({ ...props }) => {
    return (
      <div className="flex items-center gap-x-4">
        <Tag {...props} prefixIcon={<Icon name="icon-VN" size="md" />} />
        <Tag {...props} prefixIcon={<Avatar size="xxs" src={images.HLC_AVATAR_0} alt="" />} />
        <Tag {...props} prefixIcon={<Dot color="success" size="md" />} />
        <Tag {...props} prefixIcon={<Icon name="icon-car-02" size="md" />} />
      </div>
    );
  },
};

export const TrailingIcon: Story = {
  args: {
    size: 'md',
    label: 'Holicay',
  },
  render: ({ ...props }) => {
    return (
      <div className="flex items-center gap-x-4">
        <Tag {...props} suffixIcon={<Avatar size="xxs" src={images.HLC_AVATAR_0} alt="" />} />
        <Tag {...props} suffixIcon={<Dot color="success" size="md" />} />
        <Tag {...props} suffixIcon={<Icon name="icon-car-02" size="md" />} />
      </div>
    );
  },
};

export const Closable: Story = {
  args: {
    size: 'md',
    label: 'Holicay',
    closable: true,
  },
  render: ({ ...props }) => {
    return (
      <div className="flex items-center gap-x-4">
        <Tag {...props} prefixIcon={<Avatar size="xxs" src={images.HLC_AVATAR_0} alt="" />} />
        <Tag {...props} prefixIcon={<Dot color="success" size="md" />} />
        <Tag {...props} prefixIcon={<Icon name="icon-car-02" size="md" />} />
      </div>
    );
  },
};

export const WithCount: Story = {
  args: {
    size: 'md',
    label: 'Holicay',
    count: 9,
  },
  render: ({ ...props }) => {
    return (
      <div className="flex items-center gap-x-4">
        <Tag {...props} prefixIcon={<Avatar size="xxs" src={images.HLC_AVATAR_0} alt="" />} />
        <Tag {...props} prefixIcon={<Dot color="success" size="md" />} />
        <Tag {...props} prefixIcon={<Icon name="icon-car-02" size="md" />} />
      </div>
    );
  },
};
