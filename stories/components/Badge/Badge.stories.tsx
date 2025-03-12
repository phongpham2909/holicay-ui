import type { Meta, StoryObj } from '@storybook/react';

import { Badge, BadgeProps } from '@/components';
import { BADGE_SIZES, BADGE_TYPES, BADGE_COLORS, BADGE_SHAPES } from '@/components/Badge/constants';
import { images } from '@/variables/images';

const meta = {
  title: 'Testing/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: { control: 'text', description: 'Text content inside the badge' },
    type: {
      control: 'select',
      options: BADGE_TYPES,
      description: 'Type of the badge',
      table: {
        type: { summary: 'outline | solid | pill' },
        defaultValue: { summary: 'pill' },
      },
    },
    size: {
      control: 'select',
      options: BADGE_SIZES,
      description: 'Size of the badge',
      table: {
        type: { summary: 'sm | md | lg' },
        defaultValue: { summary: 'md' },
      },
    },
    color: {
      control: 'select',
      options: BADGE_COLORS,
      description: 'Color of the badge',
      table: {
        type: { summary: 'primary | gray | error | warning | success | additional | info' },
        defaultValue: { summary: 'primary' },
      },
    },
    shape: {
      control: 'select',
      options: BADGE_SHAPES,
      description: 'Shape of the badge',
      table: {
        type: { summary: 'rounded | square' },
        defaultValue: { summary: 'rounded' },
      },
    },
    selected: {
      control: 'boolean',
      description: 'Whether the badge is selected',
    },
    bordered: {
      control: 'boolean',
      description: 'Whether the badge has a border',
    },
    closable: {
      control: 'boolean',
      description: 'Whether the badge has a close button',
    },
    icon: {
      control: 'object',
      description: 'Icon to be displayed inside the badge',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    closeIcon: {
      control: 'object',
      description: 'Close icon for the badge',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    prefixIcon: {
      control: 'object',
      description: 'Prefix icon for the badge',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    suffixIcon: {
      control: 'object',
      description: 'Suffix icon for the badge',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    dotProps: {
      control: 'object',
      description: 'Props for the Dot component',
    },
    iconProps: {
      control: 'object',
      description: 'Props for the Icon component',
    },
    avatarProps: {
      control: 'object',
      description: 'Props for the Avatar component',
    },
    prefixCls: {
      control: 'text',
      description: 'Prefix class name for styling',
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
    onClose: {
      action: 'closed',
      description: 'Callback fired when the close icon is clicked',
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

const BadgeItems = (props: BadgeProps) => (
  <div className="flex flex-col gap-y-4">
    <div className="flex items-center gap-x-4">
      <Badge {...props} color="gray" />
      <Badge
        {...props}
        color="gray"
        dotProps={{
          color: 'gray',
        }}
      />
      <Badge
        {...props}
        color="gray"
        avatarProps={{
          src: images.HLC_AVATAR_0,
          alt: '',
        }}
      />
      <Badge
        {...props}
        color="gray"
        iconProps={{
          name: 'icon-car-02',
        }}
      />
    </div>

    <div className="flex items-center gap-x-4">
      <Badge {...props} color="primary" />
      <Badge
        {...props}
        color="primary"
        dotProps={{
          color: 'primary',
        }}
      />
      <Badge
        {...props}
        color="primary"
        avatarProps={{
          src: images.HLC_AVATAR_1,
          alt: '',
        }}
      />
      <Badge
        {...props}
        color="primary"
        iconProps={{
          name: 'icon-car-02',
        }}
      />
    </div>

    <div className="flex items-center gap-x-4">
      <Badge {...props} color="error" />
      <Badge
        {...props}
        color="error"
        dotProps={{
          color: 'error',
        }}
      />
      <Badge
        {...props}
        color="error"
        avatarProps={{
          src: images.HLC_AVATAR_2,
          alt: '',
        }}
      />
      <Badge
        {...props}
        color="error"
        iconProps={{
          name: 'icon-car-02',
        }}
      />
    </div>

    <div className="flex items-center gap-x-4">
      <Badge {...props} color="warning" />
      <Badge
        {...props}
        color="warning"
        dotProps={{
          color: 'warning',
        }}
      />
      <Badge
        {...props}
        color="warning"
        avatarProps={{
          src: images.HLC_AVATAR_3,
          alt: '',
        }}
      />
      <Badge
        {...props}
        color="warning"
        iconProps={{
          name: 'icon-car-02',
        }}
      />
    </div>

    <div className="flex items-center gap-x-4">
      <Badge {...props} color="success" />
      <Badge
        {...props}
        color="success"
        dotProps={{
          color: 'success',
        }}
      />
      <Badge
        {...props}
        color="success"
        avatarProps={{
          src: images.HLC_AVATAR_4,
          alt: '',
        }}
      />
      <Badge
        {...props}
        color="success"
        iconProps={{
          name: 'icon-car-02',
        }}
      />
    </div>

    <div className="flex items-center gap-x-4">
      <Badge {...props} color="additional" />
      <Badge
        {...props}
        color="additional"
        dotProps={{
          color: 'additional',
        }}
      />
      <Badge
        {...props}
        color="additional"
        avatarProps={{
          src: images.HLC_AVATAR_5,
          alt: '',
        }}
      />
      <Badge
        {...props}
        color="additional"
        iconProps={{
          name: 'icon-car-02',
        }}
      />
    </div>

    <div className="flex items-center gap-x-4">
      <Badge {...props} color="info" />
      <Badge
        {...props}
        color="info"
        dotProps={{
          color: 'info',
        }}
      />
      <Badge
        {...props}
        color="info"
        avatarProps={{
          src: images.HLC_AVATAR_6,
          alt: '',
        }}
      />
      <Badge
        {...props}
        color="info"
        iconProps={{
          name: 'icon-car-02',
        }}
      />
    </div>
  </div>
);

export const Base: Story = {
  tags: ['!dev'],
  args: {
    size: 'md',
    type: 'pill',
    shape: 'rounded',
    color: 'primary',
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
    return <BadgeItems {...props} />;
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
    return <BadgeItems {...props} />;
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
    return <BadgeItems {...props} />;
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
    return <BadgeItems {...props} />;
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
    return <BadgeItems {...props} />;
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
    return <BadgeItems {...props} />;
  },
};
