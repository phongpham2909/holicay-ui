import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Badge, Avatar, Icon, Dot } from '@/components';
import { images } from '@/variables/images';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Badge',
  component: Badge,
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
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Base: Story = {
  tags: ['!dev'],
  args: {
    size: 'md',
    type: 'pill',
    shape: 'rounded',
    label: 'Holicay',
  },
};

export const BadgeRoundedPill: Story = {
  name: 'Rounded - Pill',
  args: {
    size: 'md',
    type: 'pill',
    shape: 'rounded',
    label: 'Holicay',
  },
  render: ({ ...props }) => {
    return (
      <div className="flex flex-col gap-y-4">
        <div className="flex items-center gap-x-4">
          <Badge {...props} color="gray" prefixIcon={<Icon name="icon-VN" size="md" />} />
          <Badge {...props} color="gray" prefixIcon={<Dot color="gray" size="md" />} />
          <Badge
            {...props}
            color="gray"
            prefixIcon={<Avatar size="xxs" src={images.HLC_AVATAR_0} alt="" />}
          />
          <Badge {...props} color="gray" prefixIcon={<Icon name="icon-car-02" size="md" />} />
        </div>

        <div className="flex items-center gap-x-4">
          <Badge {...props} color="primary" prefixIcon={<Icon name="icon-VN" size="md" />} />
          <Badge {...props} color="primary" prefixIcon={<Dot color="primary" size="md" />} />
          <Badge
            {...props}
            color="primary"
            prefixIcon={<Avatar size="xxs" src={images.HLC_AVATAR_0} alt="" />}
          />
          <Badge {...props} color="primary" prefixIcon={<Icon name="icon-car-02" size="md" />} />
        </div>

        <div className="flex items-center gap-x-4">
          <Badge {...props} color="error" prefixIcon={<Icon name="icon-VN" size="md" />} />
          <Badge {...props} color="error" prefixIcon={<Dot color="error" size="md" />} />
          <Badge
            {...props}
            color="error"
            prefixIcon={<Avatar size="xxs" src={images.HLC_AVATAR_0} alt="" />}
          />
          <Badge {...props} color="error" prefixIcon={<Icon name="icon-car-02" size="md" />} />
        </div>

        <div className="flex items-center gap-x-4">
          <Badge {...props} color="warning" prefixIcon={<Icon name="icon-VN" size="md" />} />
          <Badge {...props} color="warning" prefixIcon={<Dot color="warning" size="md" />} />
          <Badge
            {...props}
            color="warning"
            prefixIcon={<Avatar size="xxs" src={images.HLC_AVATAR_0} alt="" />}
          />
          <Badge {...props} color="warning" prefixIcon={<Icon name="icon-car-02" size="md" />} />
        </div>

        <div className="flex items-center gap-x-4">
          <Badge {...props} color="success" prefixIcon={<Icon name="icon-VN" size="md" />} />
          <Badge {...props} color="success" prefixIcon={<Dot color="success" size="md" />} />
          <Badge
            {...props}
            color="success"
            prefixIcon={<Avatar size="xxs" src={images.HLC_AVATAR_0} alt="" />}
          />
          <Badge {...props} color="success" prefixIcon={<Icon name="icon-car-02" size="md" />} />
        </div>

        <div className="flex items-center gap-x-4">
          <Badge {...props} color="additional" prefixIcon={<Icon name="icon-VN" size="md" />} />
          <Badge {...props} color="additional" prefixIcon={<Dot color="additional" size="md" />} />
          <Badge
            {...props}
            color="additional"
            prefixIcon={<Avatar size="xxs" src={images.HLC_AVATAR_0} alt="" />}
          />
          <Badge {...props} color="additional" prefixIcon={<Icon name="icon-car-02" size="md" />} />
        </div>

        <div className="flex items-center gap-x-4">
          <Badge {...props} color="info" prefixIcon={<Icon name="icon-VN" size="md" />} />
          <Badge {...props} color="info" prefixIcon={<Dot color="info" size="md" />} />
          <Badge
            {...props}
            color="info"
            prefixIcon={<Avatar size="xxs" src={images.HLC_AVATAR_0} alt="" />}
          />
          <Badge {...props} color="info" prefixIcon={<Icon name="icon-car-02" size="md" />} />
        </div>
      </div>
    );
  },
};

export const BadgeRoundedOutline: Story = {
  name: 'Rounded - Outline',
  args: {
    size: 'md',
    type: 'outline',
    shape: 'rounded',
    label: 'Holicay',
  },
  render: ({ ...props }) => {
    return (
      <div className="flex flex-col gap-y-4">
        <div className="flex items-center gap-x-4">
          <Badge {...props} color="gray" prefixIcon={<Icon name="icon-VN" size="md" />} />
          <Badge {...props} color="gray" prefixIcon={<Dot color="gray" size="md" />} />
          <Badge
            {...props}
            color="gray"
            prefixIcon={<Avatar size="xxs" src={images.HLC_AVATAR_0} alt="" />}
          />
          <Badge {...props} color="gray" prefixIcon={<Icon name="icon-car-02" size="md" />} />
        </div>

        <div className="flex items-center gap-x-4">
          <Badge {...props} color="primary" prefixIcon={<Icon name="icon-VN" size="md" />} />
          <Badge {...props} color="primary" prefixIcon={<Dot color="primary" size="md" />} />
          <Badge
            {...props}
            color="primary"
            prefixIcon={<Avatar size="xxs" src={images.HLC_AVATAR_0} alt="" />}
          />
          <Badge {...props} color="primary" prefixIcon={<Icon name="icon-car-02" size="md" />} />
        </div>

        <div className="flex items-center gap-x-4">
          <Badge {...props} color="error" prefixIcon={<Icon name="icon-VN" size="md" />} />
          <Badge {...props} color="error" prefixIcon={<Dot color="error" size="md" />} />
          <Badge
            {...props}
            color="error"
            prefixIcon={<Avatar size="xxs" src={images.HLC_AVATAR_0} alt="" />}
          />
          <Badge {...props} color="error" prefixIcon={<Icon name="icon-car-02" size="md" />} />
        </div>

        <div className="flex items-center gap-x-4">
          <Badge {...props} color="warning" prefixIcon={<Icon name="icon-VN" size="md" />} />
          <Badge {...props} color="warning" prefixIcon={<Dot color="warning" size="md" />} />
          <Badge
            {...props}
            color="warning"
            prefixIcon={<Avatar size="xxs" src={images.HLC_AVATAR_0} alt="" />}
          />
          <Badge {...props} color="warning" prefixIcon={<Icon name="icon-car-02" size="md" />} />
        </div>

        <div className="flex items-center gap-x-4">
          <Badge {...props} color="success" prefixIcon={<Icon name="icon-VN" size="md" />} />
          <Badge {...props} color="success" prefixIcon={<Dot color="success" size="md" />} />
          <Badge
            {...props}
            color="success"
            prefixIcon={<Avatar size="xxs" src={images.HLC_AVATAR_0} alt="" />}
          />
          <Badge {...props} color="success" prefixIcon={<Icon name="icon-car-02" size="md" />} />
        </div>

        <div className="flex items-center gap-x-4">
          <Badge {...props} color="additional" prefixIcon={<Icon name="icon-VN" size="md" />} />
          <Badge {...props} color="additional" prefixIcon={<Dot color="additional" size="md" />} />
          <Badge
            {...props}
            color="additional"
            prefixIcon={<Avatar size="xxs" src={images.HLC_AVATAR_0} alt="" />}
          />
          <Badge {...props} color="additional" prefixIcon={<Icon name="icon-car-02" size="md" />} />
        </div>

        <div className="flex items-center gap-x-4">
          <Badge {...props} color="info" prefixIcon={<Icon name="icon-VN" size="md" />} />
          <Badge {...props} color="info" prefixIcon={<Dot color="info" size="md" />} />
          <Badge
            {...props}
            color="info"
            prefixIcon={<Avatar size="xxs" src={images.HLC_AVATAR_0} alt="" />}
          />
          <Badge {...props} color="info" prefixIcon={<Icon name="icon-car-02" size="md" />} />
        </div>
      </div>
    );
  },
};

export const BadgeRoundedSolid: Story = {
  name: 'Rounded - Solid',
  args: {
    size: 'md',
    type: 'solid',
    shape: 'rounded',
    label: 'Holicay',
  },
  render: ({ ...props }) => {
    return (
      <div className="flex flex-col gap-y-4">
        <div className="flex items-center gap-x-4">
          <Badge {...props} color="gray" prefixIcon={<Icon name="icon-VN" size="md" />} />
          <Badge {...props} color="gray" prefixIcon={<Dot color="white" size="md" />} />
          <Badge
            {...props}
            color="gray"
            prefixIcon={<Avatar size="xxs" src={images.HLC_AVATAR_0} alt="" />}
          />
          <Badge {...props} color="gray" prefixIcon={<Icon name="icon-car-02" size="md" />} />
        </div>

        <div className="flex items-center gap-x-4">
          <Badge {...props} color="primary" prefixIcon={<Icon name="icon-VN" size="md" />} />
          <Badge {...props} color="primary" prefixIcon={<Dot color="white" size="md" />} />
          <Badge
            {...props}
            color="primary"
            prefixIcon={<Avatar size="xxs" src={images.HLC_AVATAR_0} alt="" />}
          />
          <Badge {...props} color="primary" prefixIcon={<Icon name="icon-car-02" size="md" />} />
        </div>

        <div className="flex items-center gap-x-4">
          <Badge {...props} color="error" prefixIcon={<Icon name="icon-VN" size="md" />} />
          <Badge {...props} color="error" prefixIcon={<Dot color="white" size="md" />} />
          <Badge
            {...props}
            color="error"
            prefixIcon={<Avatar size="xxs" src={images.HLC_AVATAR_0} alt="" />}
          />
          <Badge {...props} color="error" prefixIcon={<Icon name="icon-car-02" size="md" />} />
        </div>

        <div className="flex items-center gap-x-4">
          <Badge {...props} color="warning" prefixIcon={<Icon name="icon-VN" size="md" />} />
          <Badge {...props} color="warning" prefixIcon={<Dot color="white" size="md" />} />
          <Badge
            {...props}
            color="warning"
            prefixIcon={<Avatar size="xxs" src={images.HLC_AVATAR_0} alt="" />}
          />
          <Badge {...props} color="warning" prefixIcon={<Icon name="icon-car-02" size="md" />} />
        </div>

        <div className="flex items-center gap-x-4">
          <Badge {...props} color="success" prefixIcon={<Icon name="icon-VN" size="md" />} />
          <Badge {...props} color="success" prefixIcon={<Dot color="white" size="md" />} />
          <Badge
            {...props}
            color="success"
            prefixIcon={<Avatar size="xxs" src={images.HLC_AVATAR_0} alt="" />}
          />
          <Badge {...props} color="success" prefixIcon={<Icon name="icon-car-02" size="md" />} />
        </div>

        <div className="flex items-center gap-x-4">
          <Badge {...props} color="additional" prefixIcon={<Icon name="icon-VN" size="md" />} />
          <Badge {...props} color="additional" prefixIcon={<Dot color="white" size="md" />} />
          <Badge
            {...props}
            color="additional"
            prefixIcon={<Avatar size="xxs" src={images.HLC_AVATAR_0} alt="" />}
          />
          <Badge {...props} color="additional" prefixIcon={<Icon name="icon-car-02" size="md" />} />
        </div>

        <div className="flex items-center gap-x-4">
          <Badge {...props} color="info" prefixIcon={<Icon name="icon-VN" size="md" />} />
          <Badge {...props} color="info" prefixIcon={<Dot color="white" size="md" />} />
          <Badge
            {...props}
            color="info"
            prefixIcon={<Avatar size="xxs" src={images.HLC_AVATAR_0} alt="" />}
          />
          <Badge {...props} color="info" prefixIcon={<Icon name="icon-car-02" size="md" />} />
        </div>
      </div>
    );
  },
};

export const BadgeSquarePill: Story = {
  name: 'Square - Pill',
  args: {
    size: 'md',
    type: 'pill',
    shape: 'square',
    label: 'Holicay',
  },
  render: ({ ...props }) => {
    return (
      <div className="flex flex-col gap-y-4">
        <div className="flex items-center gap-x-4">
          <Badge {...props} color="gray" prefixIcon={<Icon name="icon-VN" size="md" />} />
          <Badge {...props} color="gray" prefixIcon={<Dot color="gray" size="md" />} />
          <Badge
            {...props}
            color="gray"
            prefixIcon={<Avatar size="xxs" src={images.HLC_AVATAR_0} alt="" />}
          />
          <Badge {...props} color="gray" prefixIcon={<Icon name="icon-car-02" size="md" />} />
        </div>

        <div className="flex items-center gap-x-4">
          <Badge {...props} color="primary" prefixIcon={<Icon name="icon-VN" size="md" />} />
          <Badge {...props} color="primary" prefixIcon={<Dot color="primary" size="md" />} />
          <Badge
            {...props}
            color="primary"
            prefixIcon={<Avatar size="xxs" src={images.HLC_AVATAR_0} alt="" />}
          />
          <Badge {...props} color="primary" prefixIcon={<Icon name="icon-car-02" size="md" />} />
        </div>

        <div className="flex items-center gap-x-4">
          <Badge {...props} color="error" prefixIcon={<Icon name="icon-VN" size="md" />} />
          <Badge {...props} color="error" prefixIcon={<Dot color="error" size="md" />} />
          <Badge
            {...props}
            color="error"
            prefixIcon={<Avatar size="xxs" src={images.HLC_AVATAR_0} alt="" />}
          />
          <Badge {...props} color="error" prefixIcon={<Icon name="icon-car-02" size="md" />} />
        </div>

        <div className="flex items-center gap-x-4">
          <Badge {...props} color="warning" prefixIcon={<Icon name="icon-VN" size="md" />} />
          <Badge {...props} color="warning" prefixIcon={<Dot color="warning" size="md" />} />
          <Badge
            {...props}
            color="warning"
            prefixIcon={<Avatar size="xxs" src={images.HLC_AVATAR_0} alt="" />}
          />
          <Badge {...props} color="warning" prefixIcon={<Icon name="icon-car-02" size="md" />} />
        </div>

        <div className="flex items-center gap-x-4">
          <Badge {...props} color="success" prefixIcon={<Icon name="icon-VN" size="md" />} />
          <Badge {...props} color="success" prefixIcon={<Dot color="success" size="md" />} />
          <Badge
            {...props}
            color="success"
            prefixIcon={<Avatar size="xxs" src={images.HLC_AVATAR_0} alt="" />}
          />
          <Badge {...props} color="success" prefixIcon={<Icon name="icon-car-02" size="md" />} />
        </div>

        <div className="flex items-center gap-x-4">
          <Badge {...props} color="additional" prefixIcon={<Icon name="icon-VN" size="md" />} />
          <Badge {...props} color="additional" prefixIcon={<Dot color="additional" size="md" />} />
          <Badge
            {...props}
            color="additional"
            prefixIcon={<Avatar size="xxs" src={images.HLC_AVATAR_0} alt="" />}
          />
          <Badge {...props} color="additional" prefixIcon={<Icon name="icon-car-02" size="md" />} />
        </div>

        <div className="flex items-center gap-x-4">
          <Badge {...props} color="info" prefixIcon={<Icon name="icon-VN" size="md" />} />
          <Badge {...props} color="info" prefixIcon={<Dot color="info" size="md" />} />
          <Badge
            {...props}
            color="info"
            prefixIcon={<Avatar size="xxs" src={images.HLC_AVATAR_0} alt="" />}
          />
          <Badge {...props} color="info" prefixIcon={<Icon name="icon-car-02" size="md" />} />
        </div>
      </div>
    );
  },
};

export const BadgeSquareOutline: Story = {
  name: 'Square - Outline',
  args: {
    size: 'md',
    type: 'outline',
    shape: 'square',
    label: 'Holicay',
  },
  render: ({ ...props }) => {
    return (
      <div className="flex flex-col gap-y-4">
        <div className="flex items-center gap-x-4">
          <Badge {...props} color="gray" prefixIcon={<Icon name="icon-VN" size="md" />} />
          <Badge {...props} color="gray" prefixIcon={<Dot color="gray" size="md" />} />
          <Badge
            {...props}
            color="gray"
            prefixIcon={<Avatar size="xxs" src={images.HLC_AVATAR_0} alt="" />}
          />
          <Badge {...props} color="gray" prefixIcon={<Icon name="icon-car-02" size="md" />} />
        </div>

        <div className="flex items-center gap-x-4">
          <Badge {...props} color="primary" prefixIcon={<Icon name="icon-VN" size="md" />} />
          <Badge {...props} color="primary" prefixIcon={<Dot color="primary" size="md" />} />
          <Badge
            {...props}
            color="primary"
            prefixIcon={<Avatar size="xxs" src={images.HLC_AVATAR_0} alt="" />}
          />
          <Badge {...props} color="primary" prefixIcon={<Icon name="icon-car-02" size="md" />} />
        </div>

        <div className="flex items-center gap-x-4">
          <Badge {...props} color="error" prefixIcon={<Icon name="icon-VN" size="md" />} />
          <Badge {...props} color="error" prefixIcon={<Dot color="error" size="md" />} />
          <Badge
            {...props}
            color="error"
            prefixIcon={<Avatar size="xxs" src={images.HLC_AVATAR_0} alt="" />}
          />
          <Badge {...props} color="error" prefixIcon={<Icon name="icon-car-02" size="md" />} />
        </div>

        <div className="flex items-center gap-x-4">
          <Badge {...props} color="warning" prefixIcon={<Icon name="icon-VN" size="md" />} />
          <Badge {...props} color="warning" prefixIcon={<Dot color="warning" size="md" />} />
          <Badge
            {...props}
            color="warning"
            prefixIcon={<Avatar size="xxs" src={images.HLC_AVATAR_0} alt="" />}
          />
          <Badge {...props} color="warning" prefixIcon={<Icon name="icon-car-02" size="md" />} />
        </div>

        <div className="flex items-center gap-x-4">
          <Badge {...props} color="success" prefixIcon={<Icon name="icon-VN" size="md" />} />
          <Badge {...props} color="success" prefixIcon={<Dot color="success" size="md" />} />
          <Badge
            {...props}
            color="success"
            prefixIcon={<Avatar size="xxs" src={images.HLC_AVATAR_0} alt="" />}
          />
          <Badge {...props} color="success" prefixIcon={<Icon name="icon-car-02" size="md" />} />
        </div>

        <div className="flex items-center gap-x-4">
          <Badge {...props} color="additional" prefixIcon={<Icon name="icon-VN" size="md" />} />
          <Badge {...props} color="additional" prefixIcon={<Dot color="additional" size="md" />} />
          <Badge
            {...props}
            color="additional"
            prefixIcon={<Avatar size="xxs" src={images.HLC_AVATAR_0} alt="" />}
          />
          <Badge {...props} color="additional" prefixIcon={<Icon name="icon-car-02" size="md" />} />
        </div>

        <div className="flex items-center gap-x-4">
          <Badge {...props} color="info" prefixIcon={<Icon name="icon-VN" size="md" />} />
          <Badge {...props} color="info" prefixIcon={<Dot color="info" size="md" />} />
          <Badge
            {...props}
            color="info"
            prefixIcon={<Avatar size="xxs" src={images.HLC_AVATAR_0} alt="" />}
          />
          <Badge {...props} color="info" prefixIcon={<Icon name="icon-car-02" size="md" />} />
        </div>
      </div>
    );
  },
};

export const BadgeSquareSolid: Story = {
  name: 'Square - Solid',
  args: {
    size: 'md',
    type: 'solid',
    shape: 'square',
    label: 'Holicay',
  },
  render: ({ ...props }) => {
    return (
      <div className="flex flex-col gap-y-4">
        <div className="flex items-center gap-x-4">
          <Badge {...props} color="gray" prefixIcon={<Icon name="icon-VN" size="md" />} />
          <Badge {...props} color="gray" prefixIcon={<Dot color="white" size="md" />} />
          <Badge
            {...props}
            color="gray"
            prefixIcon={<Avatar size="xxs" src={images.HLC_AVATAR_0} alt="" />}
          />
          <Badge {...props} color="gray" prefixIcon={<Icon name="icon-car-02" size="md" />} />
        </div>

        <div className="flex items-center gap-x-4">
          <Badge {...props} color="primary" prefixIcon={<Icon name="icon-VN" size="md" />} />
          <Badge {...props} color="primary" prefixIcon={<Dot color="white" size="md" />} />
          <Badge
            {...props}
            color="primary"
            prefixIcon={<Avatar size="xxs" src={images.HLC_AVATAR_0} alt="" />}
          />
          <Badge {...props} color="primary" prefixIcon={<Icon name="icon-car-02" size="md" />} />
        </div>

        <div className="flex items-center gap-x-4">
          <Badge {...props} color="error" prefixIcon={<Icon name="icon-VN" size="md" />} />
          <Badge {...props} color="error" prefixIcon={<Dot color="white" size="md" />} />
          <Badge
            {...props}
            color="error"
            prefixIcon={<Avatar size="xxs" src={images.HLC_AVATAR_0} alt="" />}
          />
          <Badge {...props} color="error" prefixIcon={<Icon name="icon-car-02" size="md" />} />
        </div>

        <div className="flex items-center gap-x-4">
          <Badge {...props} color="warning" prefixIcon={<Icon name="icon-VN" size="md" />} />
          <Badge {...props} color="warning" prefixIcon={<Dot color="white" size="md" />} />
          <Badge
            {...props}
            color="warning"
            prefixIcon={<Avatar size="xxs" src={images.HLC_AVATAR_0} alt="" />}
          />
          <Badge {...props} color="warning" prefixIcon={<Icon name="icon-car-02" size="md" />} />
        </div>

        <div className="flex items-center gap-x-4">
          <Badge {...props} color="success" prefixIcon={<Icon name="icon-VN" size="md" />} />
          <Badge {...props} color="success" prefixIcon={<Dot color="white" size="md" />} />
          <Badge
            {...props}
            color="success"
            prefixIcon={<Avatar size="xxs" src={images.HLC_AVATAR_0} alt="" />}
          />
          <Badge {...props} color="success" prefixIcon={<Icon name="icon-car-02" size="md" />} />
        </div>

        <div className="flex items-center gap-x-4">
          <Badge {...props} color="additional" prefixIcon={<Icon name="icon-VN" size="md" />} />
          <Badge {...props} color="additional" prefixIcon={<Dot color="white" size="md" />} />
          <Badge
            {...props}
            color="additional"
            prefixIcon={<Avatar size="xxs" src={images.HLC_AVATAR_0} alt="" />}
          />
          <Badge {...props} color="additional" prefixIcon={<Icon name="icon-car-02" size="md" />} />
        </div>

        <div className="flex items-center gap-x-4">
          <Badge {...props} color="info" prefixIcon={<Icon name="icon-VN" size="md" />} />
          <Badge {...props} color="info" prefixIcon={<Dot color="white" size="md" />} />
          <Badge
            {...props}
            color="info"
            prefixIcon={<Avatar size="xxs" src={images.HLC_AVATAR_0} alt="" />}
          />
          <Badge {...props} color="info" prefixIcon={<Icon name="icon-car-02" size="md" />} />
        </div>
      </div>
    );
  },
};
