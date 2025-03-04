import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Avatar, Button, ButtonSocial, Dropdown, DropdownMenuItem, Icon } from '@/components';
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
      <ButtonSocial fullWidth size="sm" type="google" variant="solid">
        Sign in with Google
      </ButtonSocial>
    ),
  },
  {
    type: 'divider',
  },
  {
    key: '2',
    type: 'button',
    label: (
      <Button fullWidth size="sm" type="primary">
        Log In
      </Button>
    ),
  },
  {
    key: '3',
    type: 'button',
    label: (
      <Button fullWidth size="sm" type="secondary" color="gray">
        Register
      </Button>
    ),
  },
];

const checkboxItems: DropdownMenuItem[] = [
  {
    key: 'Planning',
    label: 'Planning',
    type: 'checkbox',
  },
  {
    key: 'Published',
    label: 'Published',
    type: 'checkbox',
    disabled: true,
  },
  {
    key: 'Saved',
    label: 'Saved',
    type: 'checkbox',
  },
];

const radioItems: DropdownMenuItem[] = [
  {
    key: 'Board View',
    label: 'Board View',
  },
  {
    key: 'Calendar',
    label: 'Calendar',
  },
  {
    key: 'Map',
    label: 'Map',
  },
];

const meta = {
  title: 'Testing/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
    chromatic: { disableSnapshot: false },
  },
  argTypes: {
    menu: {
      description: 'Configuration for dropdown menu items',
      control: 'object',
      table: {
        type: { summary: 'DropdownMenu' },
        defaultValue: { summary: '{}' },
      },
    },
    disabled: {
      description: 'Disables the dropdown trigger button',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    placement: {
      description: 'Dropdown position relative to trigger button',
      control: 'select',
      options: ['bottom', 'bottomLeft', 'bottomRight', 'top', 'topLeft', 'topRight'],
      table: {
        type: { summary: 'DropdownPlacement' },
        defaultValue: { summary: 'bottomRight' },
      },
    },
    className: {
      description: 'Custom class for the dropdown trigger',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    dropdownClassName: {
      description: 'Custom class for the dropdown container',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    prefixCls: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  name: 'Basic Menu',
  args: {
    menu: {
      items: radioItems,
      className: 'w-[240px]',
    },
  },
  render: (args) => {
    return (
      <Dropdown {...args}>
        <Button
          size="md"
          type="secondary"
          color="gray"
          suffixIcon={<Icon name="icon-chevron-down" size="xl" />}
        >
          Views
        </Button>
      </Dropdown>
    );
  },
};

export const Account: Story = {
  name: 'Account Menu',
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
            type="secondary"
            color="gray"
            suffixIcon={<Icon name="icon-chevron-down" size="xl" />}
          >
            Account
          </Button>
        </Dropdown>

        <Dropdown {...args}>
          <Button type="link" color="gray" icon={<Icon name="icon-dots-vertical" size="xl" />} />
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
  name: 'Checkbox Menu',
  args: {
    menu: {
      items: checkboxItems,
      className: 'w-[240px]',
    },
  },
  render: (args) => {
    return (
      <Dropdown {...args}>
        <Button
          size="md"
          type="secondary"
          color="gray"
          suffixIcon={<Icon name="icon-chevron-down" size="xl" />}
        >
          Status
        </Button>
      </Dropdown>
    );
  },
};

export const Variants = {
  tags: ['!dev'],
  name: 'Variants',
  render: () => {
    return (
      <div className="p-6 min-h-56">
        <div className="flex items-center gap-x-3xl">
          <Dropdown menu={{ items }} placement="bottomLeft">
            <Button
              type="secondary"
              color="gray"
              suffixIcon={<Icon name="icon-chevron-down" size="xl" />}
            >
              Account
            </Button>
          </Dropdown>

          <Dropdown menu={{ items }} placement="bottomLeft">
            <Button type="link" color="gray" icon={<Icon name="icon-dots-vertical" size="xl" />} />
          </Dropdown>

          <Dropdown menu={{ items }} placement="bottomLeft">
            <Avatar src={images.HLC_AVATAR_0} />
          </Dropdown>

          <Dropdown
            menu={{ items: itemsPlaceholder, itemsClassName: 'flex flex-col gap-y-md !py-lg' }}
            placement="bottomLeft"
          >
            <Avatar icon={<Icon name="icon-user-01" size="2xl" />} />
          </Dropdown>
          <Dropdown
            menu={{
              items: checkboxItems,
              className: 'w-[240px]',
            }}
            placement="bottomLeft"
          >
            <Button
              size="md"
              type="secondary"
              color="gray"
              suffixIcon={<Icon name="icon-chevron-down" size="xl" />}
            >
              Status
            </Button>
          </Dropdown>
          <Dropdown
            menu={{
              items: radioItems,
              className: 'w-[240px]',
            }}
            placement="bottomLeft"
          >
            <Button
              size="md"
              type="secondary"
              color="gray"
              suffixIcon={<Icon name="icon-chevron-down" size="xl" />}
            >
              Views
            </Button>
          </Dropdown>
        </div>
      </div>
    );
  },
};
