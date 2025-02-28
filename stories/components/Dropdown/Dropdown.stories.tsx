import React from 'react';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Avatar, Button, Dropdown, DropdownMenuItem, DropdownProps, Icon } from '@/components';
import { images } from '@/variables/images';

const items: DropdownMenuItem[] = [
  {
    key: '1',
    type: 'header',
    label: (
      <Avatar.LabelGroup
        label={'Holicay'}
        helperText={'holicay@gmail.com'}
        src={images.HLC_AVATAR_0}
        badge={{
          isOnline: true,
        }}
      />
    ),
  },
  {
    key: '2',
    label: 'View Profile',
    disabled: true,
    icon: <Icon name="icon-user-01" />,
  },
  {
    key: '3',
    label: 'My Bookings',
    icon: <Icon name="icon-clipboard" />,
  },
  {
    key: '4',
    label: 'My Itineraries',
    icon: <Icon name="icon-file-04" />,
  },
  {
    type: 'divider',
  },
  {
    key: '5',
    label: 'Log Out',
    icon: <Icon name="icon-log-out-01" />,
  },
];

const itemsPlaceholder: DropdownMenuItem[] = [
  {
    key: '1',
    type: 'button',
    label: (
      <Button fullWidth size="sm" type="secondary" color="gray">
        Sign in with Google
      </Button>
    ),
  },
  {
    type: 'divider',
  },
  {
    key: '2',
    type: 'button',
    label: (
      <Button fullWidth type="primary">
        Log In
      </Button>
    ),
  },
  {
    key: '3',
    type: 'button',
    label: (
      <Button fullWidth type="secondary" color="gray">
        Register
      </Button>
    ),
  },
];

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
    chromatic: { disableSnapshot: false },
  },
  tags: ['autodocs'],
  args: {
    // onClick: fn(),
  },
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    menu: {
      items: items,
    },
  },
  render: (args) => {
    return (
      <div className="flex items-center gap-x-3xl">
        <Dropdown {...args}>
          <Button
            size="md"
            type="secondary"
            color="gray"
            suffixIcon={<Icon name="icon-chevron-down" size="xl" />}
          >
            Account
          </Button>
        </Dropdown>

        <Dropdown {...args}>
          <Button
            size="sm"
            type="link"
            color="gray"
            icon={<Icon name="icon-dots-vertical" size="xl" />}
          />
        </Dropdown>

        <Dropdown {...args}>
          <Avatar src={images.HLC_AVATAR_0} />
        </Dropdown>

        <Dropdown
          {...args}
          menu={{ items: itemsPlaceholder, itemsClassName: 'flex flex-col gap-y-md !py-lg' }}
        >
          <Avatar icon={<Icon name="icon-user-01" size="2xl" />} />
        </Dropdown>
      </div>
    );
  },
};

export const Checkbox: Story = {
  args: {
    menu: {
      items: items,
    },
  },
  render: (args) => {
    return (
      <div className="flex items-center gap-x-3xl">
        <Dropdown {...args}>
          <Button
            size="md"
            type="secondary"
            color="gray"
            suffixIcon={<Icon name="icon-chevron-down" size="xl" />}
          >
            Account
          </Button>
        </Dropdown>

        <Dropdown {...args}>
          <Button
            size="sm"
            type="link"
            color="gray"
            icon={<Icon name="icon-dots-vertical" size="xl" />}
          />
        </Dropdown>

        <Dropdown {...args}>
          <Avatar src={images.HLC_AVATAR_0} />
        </Dropdown>

        <Dropdown {...args}>
          <Avatar icon={<Icon name="icon-user-01" size="2xl" />} />
        </Dropdown>
      </div>
    );
  },
};
