import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { fn } from '@storybook/test';

import { ButtonSocialProps, ButtonSocial } from '@/components';

const meta = {
  title: 'Testing/Button',
  component: ButtonSocial,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A flexible button group component that allows single or multiple selections. Supports prefixes, suffixes, and disabled states.',
      },
    },
    options: {
      controls: {
        sort: 'alpha', // Change to 'requiredFirst', 'none', or a custom order function if needed
      },
    },
    chromatic: { disableSnapshot: false },
  },
  argTypes: {
    type: {
      control: 'radio',
      options: ['google', 'facebook', 'apple', 'twitter'],
      description: 'Defines the button style.',
      table: {
        type: { summary: "'google' | 'facebook' | 'apple' | 'twitter'" },
      },
    },
    variant: {
      control: 'radio',
      options: ['solid', 'outlined', 'default'],
      description: 'Defines the button style.',
      table: {
        type: { summary: "'solid' | 'outlined' | 'default'" },
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
      description: 'Controls the size of the button.',
      table: {
        type: { summary: "'sm' | 'md' | 'lg'" },
        defaultValue: { summary: 'md' },
      },
    },
    icon: {
      control: 'object',
      description: 'Optional icon component inside the button.',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    loadingIcon: {
      control: 'object',
      description: 'Icon displayed when the button is loading.',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    loading: {
      control: 'boolean',
      description: 'Displays a loading state on the button.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Expands button width to 100% of its parent.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes for custom styling.',
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
} satisfies Meta<typeof ButtonSocial>;

export default meta;

const Template: StoryFn<ButtonSocialProps> = (args) => {
  return (
    <div className="p-6">
      <div className="flex flex-row flex-wrap gap-6">
        <div className="flex flex-col gap-y-lg">
          <ButtonSocial {...args} type="google" variant="solid">
            Sign in with Google
          </ButtonSocial>
          <ButtonSocial {...args} type="facebook" variant="solid">
            Sign in with Facebook
          </ButtonSocial>
          <ButtonSocial {...args} type="apple" variant="solid">
            Sign in with Apple
          </ButtonSocial>
          <ButtonSocial {...args} type="twitter" variant="solid">
            Sign in with Twitter
          </ButtonSocial>
        </div>

        <div className="flex flex-col gap-y-lg ">
          <ButtonSocial {...args} type="google" variant="solid" />
          <ButtonSocial {...args} type="facebook" variant="solid" />
          <ButtonSocial {...args} type="apple" variant="solid" />
          <ButtonSocial {...args} type="twitter" variant="solid" />
        </div>

        <div className="flex flex-col gap-y-lg">
          <ButtonSocial {...args} type="google" variant="outlined">
            Sign in with Google
          </ButtonSocial>
          <ButtonSocial {...args} type="facebook" variant="outlined">
            Sign in with Facebook
          </ButtonSocial>
          <ButtonSocial {...args} type="apple" variant="outlined">
            Sign in with Apple
          </ButtonSocial>
          <ButtonSocial {...args} type="twitter" variant="outlined">
            Sign in with Twitter
          </ButtonSocial>
        </div>

        <div className="flex flex-col gap-y-lg ">
          <ButtonSocial {...args} type="google" variant="outlined" />
          <ButtonSocial {...args} type="facebook" variant="outlined" />
          <ButtonSocial {...args} type="apple" variant="outlined" />
          <ButtonSocial {...args} type="twitter" variant="outlined" />
        </div>

        <div className="flex flex-col gap-y-lg">
          <ButtonSocial {...args} type="google">
            Sign in with Google
          </ButtonSocial>
          <ButtonSocial {...args} type="facebook">
            Sign in with Facebook
          </ButtonSocial>
          <ButtonSocial {...args} type="apple">
            Sign in with Apple
          </ButtonSocial>
          <ButtonSocial {...args} type="twitter">
            Sign in with Twitter
          </ButtonSocial>
        </div>

        <div className="flex flex-col gap-y-lg ">
          <ButtonSocial {...args} type="google" />
          <ButtonSocial {...args} type="facebook" />
          <ButtonSocial {...args} type="apple" />
          <ButtonSocial {...args} type="twitter" />
        </div>
      </div>
    </div>
  );
};

export const Social = Template.bind({});
Social.args = {
  size: 'md',
};
