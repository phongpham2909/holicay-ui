import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Icon, Button, Tooltip } from '@/components';

const meta = {
  title: 'Testing/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    chromatic: { disableSnapshot: false },
  },
  argTypes: {
    title: { control: 'text', description: 'Main content displayed inside the tooltip.' },
    description: { control: 'text', description: 'Additional descriptive text below the title.' },
    color: { control: 'radio', options: ['dark', 'light'], description: 'Tooltip theme color.' },
    placement: {
      control: 'select',
      options: [
        'top',
        'topLeft',
        'topRight',
        'bottom',
        'bottomLeft',
        'bottomRight',
        'left',
        'leftTop',
        'leftBottom',
        'right',
        'rightTop',
        'rightBottom',
      ],
      description: 'Defines the position of the tooltip relative to the trigger element',
    },
    trigger: {
      control: 'radio',
      options: ['hover', 'click', 'focus'],
      description:
        'Specifies how the tooltip is triggered. `hover` displays on mouseover, `click` toggles visibility on click, and `focus` shows when the element is focused.',
    },
    showArrow: {
      control: 'boolean',
      description:
        'Determines whether the tooltip includes a small arrow pointing to the trigger element.',
    },
    disabled: {
      control: 'boolean',
      description: 'If `true`, disables the tooltip, preventing it from opening.',
    },
    defaultOpen: { control: 'boolean', description: 'If `true`, the tooltip is open by default.' },
    tooltipClassName: {
      control: 'text',
      description: 'Additional class names for styling the tooltip container.',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    title: 'This is a tooltip',
    description:
      'Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand the meaning, function or alt-text of an element.',
    defaultOpen: true,
  },
  render: (args) => {
    return (
      <div className="flex flex-col">
        <Tooltip {...args}>
          <Button
            size="sm"
            type="link"
            color="gray"
            icon={<Icon name="icon-help-circle" />}
            className="!py-0"
          />
        </Tooltip>
      </div>
    );
  },
};

export const HideArrow: Story = {
  args: {
    title: 'This is a tooltip',
    description:
      'Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand the meaning, function or alt-text of an element.',
    showArrow: false,
  },
  render: (args) => {
    return (
      <div className="flex flex-col gap-y-4">
        <Tooltip {...args} placement="top">
          <Button
            size="sm"
            type="link"
            color="gray"
            icon={<Icon name="icon-help-circle" />}
            className="!py-0"
          />
        </Tooltip>
        <Tooltip {...args} placement="right">
          <Button
            size="sm"
            type="link"
            color="gray"
            icon={<Icon name="icon-help-circle" />}
            className="!py-0"
          />
        </Tooltip>
        <Tooltip {...args} placement="left">
          <Button
            size="sm"
            type="link"
            color="gray"
            icon={<Icon name="icon-help-circle" />}
            className="!py-0"
          />
        </Tooltip>
        <Tooltip {...args} placement="bottom">
          <Button
            size="sm"
            type="link"
            color="gray"
            icon={<Icon name="icon-help-circle" />}
            className="!py-0"
          />
        </Tooltip>
      </div>
    );
  },
};

export const Placement: Story = {
  args: {
    trigger: 'hover',
    title: 'This is a tooltip',
    description:
      'Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand the meaning, function or alt-text of an element.',
  },
  render: (args) => {
    return (
      <div className="grid grid-cols-3 gap-2">
        <div className="col-span-1">
          <Tooltip {...args} placement="topLeft">
            <Button type="secondary" color="gray" className="min-w-32">
              Top Left
            </Button>
          </Tooltip>
        </div>
        <div className="col-span-1">
          <Tooltip {...args} placement="top">
            <Button type="secondary" color="gray" className="min-w-32">
              Top
            </Button>
          </Tooltip>
        </div>
        <div className="col-span-1">
          <Tooltip {...args} placement="topRight">
            <Button type="secondary" color="gray" className="min-w-32">
              Top Right
            </Button>
          </Tooltip>
        </div>

        <div className="col-span-1">
          <Tooltip {...args} placement="leftTop">
            <Button type="secondary" color="gray" className="min-w-32">
              Left Top
            </Button>
          </Tooltip>
        </div>
        <div className="col-span-1" />
        <div className="col-span-1">
          <Tooltip {...args} placement="rightTop">
            <Button type="secondary" color="gray" className="min-w-32">
              Right Top
            </Button>
          </Tooltip>
        </div>

        <div className="col-span-1">
          <Tooltip {...args} placement="left">
            <Button type="secondary" color="gray" className="min-w-32">
              Left
            </Button>
          </Tooltip>
        </div>
        <div className="col-span-1" />
        <div className="col-span-1">
          <Tooltip {...args} placement="right">
            <Button type="secondary" color="gray" className="min-w-32">
              Right
            </Button>
          </Tooltip>
        </div>

        <div className="col-span-1">
          <Tooltip {...args} placement="leftBottom">
            <Button type="secondary" color="gray" className="min-w-32">
              Left Bottom
            </Button>
          </Tooltip>
        </div>
        <div className="col-span-1" />
        <div className="col-span-1">
          <Tooltip {...args} placement="rightBottom">
            <Button type="secondary" color="gray" className="min-w-32">
              Right Bottom
            </Button>
          </Tooltip>
        </div>

        <div className="col-span-1">
          <Tooltip {...args} placement="bottomLeft">
            <Button type="secondary" color="gray" className="min-w-32">
              Bottom Left
            </Button>
          </Tooltip>
        </div>
        <div className="col-span-1">
          <Tooltip {...args} placement="bottom">
            <Button type="secondary" color="gray" className="min-w-32">
              Bottom
            </Button>
          </Tooltip>
        </div>
        <div className="col-span-1">
          <Tooltip {...args} placement="bottomRight">
            <Button type="secondary" color="gray" className="min-w-32">
              Bottom Right
            </Button>
          </Tooltip>
        </div>
      </div>
    );
  },
};

export const Trigger: Story = {
  args: {
    title: 'This is a tooltip',
    description:
      'Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand the meaning, function or alt-text of an element.',
  },
  render: (args) => {
    return (
      <div className="flex flex-row gap-x-2">
        <Tooltip {...args} trigger="hover">
          <Button type="secondary" color="gray">
            Hover
          </Button>
        </Tooltip>
        <Tooltip {...args} trigger="click">
          <Button type="secondary" color="gray">
            Click
          </Button>
        </Tooltip>
        <Tooltip {...args} trigger="focus">
          <Button type="secondary" color="gray">
            Focus
          </Button>
        </Tooltip>
      </div>
    );
  },
};

export const Color: Story = {
  args: {
    title: 'This is a tooltip',
    description:
      'Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand the meaning, function or alt-text of an element.',
  },
  render: (args) => {
    return (
      <div className="flex flex-row gap-x-2">
        <Tooltip {...args} trigger="hover" color="light">
          <Button type="secondary" color="gray">
            Light
          </Button>
        </Tooltip>
        <Tooltip {...args} trigger="hover" color="dark">
          <Button type="secondary" color="primary">
            Dark
          </Button>
        </Tooltip>
      </div>
    );
  },
};

export const OnlyTitle: Story = {
  args: {
    trigger: 'hover',
    title: 'This is a tooltip',
  },
  render: (args) => {
    return (
      <div className="grid grid-cols-3 gap-2">
        <div className="col-span-1">
          <Tooltip {...args} placement="topLeft">
            <Button type="secondary" color="gray" className="min-w-32">
              Top Left
            </Button>
          </Tooltip>
        </div>
        <div className="col-span-1">
          <Tooltip {...args} placement="top">
            <Button type="secondary" color="gray" className="min-w-32">
              Top
            </Button>
          </Tooltip>
        </div>
        <div className="col-span-1">
          <Tooltip {...args} placement="topRight">
            <Button type="secondary" color="gray" className="min-w-32">
              Top Right
            </Button>
          </Tooltip>
        </div>

        <div className="col-span-1">
          <Tooltip {...args} placement="leftTop">
            <Button type="secondary" color="gray" className="min-w-32">
              Left Top
            </Button>
          </Tooltip>
        </div>
        <div className="col-span-1" />
        <div className="col-span-1">
          <Tooltip {...args} placement="rightTop">
            <Button type="secondary" color="gray" className="min-w-32">
              Right Top
            </Button>
          </Tooltip>
        </div>

        <div className="col-span-1">
          <Tooltip {...args} placement="left">
            <Button type="secondary" color="gray" className="min-w-32">
              Left
            </Button>
          </Tooltip>
        </div>
        <div className="col-span-1" />
        <div className="col-span-1">
          <Tooltip {...args} placement="right">
            <Button type="secondary" color="gray" className="min-w-32">
              Right
            </Button>
          </Tooltip>
        </div>

        <div className="col-span-1">
          <Tooltip {...args} placement="leftBottom">
            <Button type="secondary" color="gray" className="min-w-32">
              Left Bottom
            </Button>
          </Tooltip>
        </div>
        <div className="col-span-1" />
        <div className="col-span-1">
          <Tooltip {...args} placement="rightBottom">
            <Button type="secondary" color="gray" className="min-w-32">
              Right Bottom
            </Button>
          </Tooltip>
        </div>

        <div className="col-span-1">
          <Tooltip {...args} placement="bottomLeft">
            <Button type="secondary" color="gray" className="min-w-32">
              Bottom Left
            </Button>
          </Tooltip>
        </div>
        <div className="col-span-1">
          <Tooltip {...args} placement="bottom">
            <Button type="secondary" color="gray" className="min-w-32">
              Bottom
            </Button>
          </Tooltip>
        </div>
        <div className="col-span-1">
          <Tooltip {...args} placement="bottomRight">
            <Button type="secondary" color="gray" className="min-w-32">
              Bottom Right
            </Button>
          </Tooltip>
        </div>
      </div>
    );
  },
};
