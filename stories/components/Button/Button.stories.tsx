import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button, ButtonProps, ButtonSocial, Icon } from '@/components';
import { ButtonColor, ButtonSize, ButtonType } from '@/components/Button/constants';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    chromatic: { disableSnapshot: false },
  },
  argTypes: {
    // 👇 All Button stories expect a label arg
    label: {
      control: 'text',
      description: 'Overwritten description',
    },
    type: {
      control: 'select',
      options: ['primary', 'secondary', 'text', 'link'],
      description: 'Can be set to primary secondary link text',
      table: {
        type: { summary: "'primary' | 'secondary' | 'text' | 'link'" },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Determines the size of the button component.',
      table: {
        type: { summary: "'sm' | 'md' | 'lg' | 'xl' | '2xl'" },
        defaultValue: { summary: 'md' },
      },
    },
    color: {
      control: 'inline-radio',
      options: ['primary', 'gray'],
      description: 'Set the color of button',
      table: {
        type: { summary: "'primary' | 'gray'" },
        defaultValue: { summary: 'primary' },
      },
    },
    icon: {
      control: 'object',
      description: 'Set the icon component of button',
    },
    prefixIcon: {
      control: 'object',
      description: 'Set the left icon component of button',
    },
    suffixIcon: {
      control: 'object',
      description: 'Set the right icon component of button',
    },
    danger: {
      control: 'boolean',
      description: 'Set the danger status of button',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state of button',
    },
    className: {
      control: 'text',
      description:
        'CSS Class Name which will be appended to the most outer element of a component. Use this prop carefully, overwriting CSS rules might break the component.',
    },
  },
  args: {
    size: 'md',
    type: 'primary',
    color: 'primary',
    htmlType: 'button',
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: 'md',
    type: 'primary',
    label: 'Button CTA',
  },
};

export const Secondary: Story = {
  args: {
    size: 'md',
    type: 'secondary',
    label: 'Button CTA',
  },
};

export const Disabled: Story = {
  args: {
    size: 'md',
    color: 'primary',
    label: 'Button CTA',
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    size: 'md',
    color: 'primary',
    label: 'Button CTA',
    loading: true,
  },
};

export const LeadingIcon: Story = {
  args: {
    size: 'md',
    color: 'primary',
    label: 'Button CTA',
    icon: React.createElement('i', { className: 'icon icon-rocket-01' }, null),
    prefixIcon: React.createElement('i', { className: 'icon icon-rocket-01' }, null),
  },
};

export const TrailingIcon: Story = {
  args: {
    size: 'md',
    color: 'primary',
    label: 'Button CTA',
    suffixIcon: React.createElement('i', { className: 'icon icon-rocket-01' }, null),
  },
};

export const OnlyIcon: Story = {
  args: {
    size: 'md',
    color: 'primary',
    icon: React.createElement('i', { className: 'icon icon-rocket-01' }, null),
  },
};

export const Text: Story = {
  args: {
    type: 'text',
    color: 'primary',
    label: 'Button CTA',
  },
};

export const Link: Story = {
  args: {
    type: 'link',
    color: 'primary',
    label: 'Button CTA',
  },
};

export const Destructive: Story = {
  args: {
    size: 'md',
    color: 'primary',
    label: 'Button CTA',
    danger: true,
    disabled: false,
  },
};

type ButtonSocialStory = StoryObj<typeof ButtonSocial>;

export const Social: ButtonSocialStory = {
  args: {
    size: 'md',
  },
  render: ({ ...props }) => {
    return (
      <div className="p-6">
        <div className="flex flex-row flex-wrap gap-6">
          <div className="flex flex-col gap-y-lg">
            <ButtonSocial {...props} type="google" variant="solid">
              Sign in with Google
            </ButtonSocial>
            <ButtonSocial {...props} type="facebook" variant="solid">
              Sign in with Facebook
            </ButtonSocial>
            <ButtonSocial {...props} type="apple" variant="solid">
              Sign in with Apple
            </ButtonSocial>
            <ButtonSocial {...props} type="twitter" variant="solid">
              Sign in with Twitter
            </ButtonSocial>
          </div>

          <div className="flex flex-col gap-y-lg ">
            <ButtonSocial {...props} type="google" variant="solid" />
            <ButtonSocial {...props} type="facebook" variant="solid" />
            <ButtonSocial {...props} type="apple" variant="solid" />
            <ButtonSocial {...props} type="twitter" variant="solid" />
          </div>

          <div className="flex flex-col gap-y-lg">
            <ButtonSocial {...props} type="google" variant="outlined">
              Sign in with Google
            </ButtonSocial>
            <ButtonSocial {...props} type="facebook" variant="outlined">
              Sign in with Facebook
            </ButtonSocial>
            <ButtonSocial {...props} type="apple" variant="outlined">
              Sign in with Apple
            </ButtonSocial>
            <ButtonSocial {...props} type="twitter" variant="outlined">
              Sign in with Twitter
            </ButtonSocial>
          </div>

          <div className="flex flex-col gap-y-lg ">
            <ButtonSocial {...props} type="google" variant="outlined" />
            <ButtonSocial {...props} type="facebook" variant="outlined" />
            <ButtonSocial {...props} type="apple" variant="outlined" />
            <ButtonSocial {...props} type="twitter" variant="outlined" />
          </div>

          <div className="flex flex-col gap-y-lg">
            <ButtonSocial {...props} type="google">
              Sign in with Google
            </ButtonSocial>
            <ButtonSocial {...props} type="facebook">
              Sign in with Facebook
            </ButtonSocial>
            <ButtonSocial {...props} type="apple">
              Sign in with Apple
            </ButtonSocial>
            <ButtonSocial {...props} type="twitter">
              Sign in with Twitter
            </ButtonSocial>
          </div>

          <div className="flex flex-col gap-y-lg ">
            <ButtonSocial {...props} type="google" />
            <ButtonSocial {...props} type="facebook" />
            <ButtonSocial {...props} type="apple" />
            <ButtonSocial {...props} type="twitter" />
          </div>
        </div>
      </div>
    );
  },
};

const BUTTON_VARIANTS = [
  'primary',
  'secondary',
  'secondary gray',
  'text',
  'text gray',
  'link',
  'link gray',
] as const;

const OPTIONS = [
  'default',
  'disabled',
  'loading',
  'size sm',
  'size md',
  'size lg',
  'size xl',
  'size 2xl',
  'prefixIcon',
  'suffixIcon',
  'withDot',
  'only Icon',
];

export const Variants = {
  tags: ['!dev'],
  name: 'Variants',
  render: () => {
    return (
      <div className="p-6">
        <div className="grid grid-cols-[repeat(13,1fr)] gap-y-6 gap-x-4">
          <div className="col-span-1 min-w-32">
            <p className="text-sm font-medium uppercase text-base-primary">Variant</p>
          </div>
          {OPTIONS.map((opt) => (
            <div className="col-span-1 min-w-32 text-center" key={opt}>
              <p className="text-sm font-medium uppercase text-base-primary">{opt}</p>
            </div>
          ))}
          {BUTTON_VARIANTS.map((variant) => {
            return (
              <React.Fragment key={variant}>
                <div className="col-span-1">
                  <p className="text-sm font-normal capitalize text-base-primary">{variant}</p>
                </div>
                {OPTIONS.map((opt) => {
                  let props: ButtonProps = {
                    size: 'md',
                    color: 'primary',
                    type: variant as ButtonType,
                  };
                  if (variant.includes('gray')) {
                    props = {
                      ...props,
                      type: variant.split(' ')[0] as ButtonType,
                      color: variant.split(' ')[1] as ButtonColor,
                    };
                  }
                  if (['withDot', 'disabled', 'loading'].includes(opt)) {
                    props[opt as keyof ButtonProps] = true;
                  }

                  if (opt.startsWith('size')) {
                    props.size = opt.split(' ')[1] as ButtonSize;
                  }

                  if (['prefixIcon', 'suffixIcon'].includes(opt)) {
                    props[opt as keyof ButtonProps] = <i className="icon icon-rocket-01" />;
                  }

                  if (['only Icon'].includes(opt)) {
                    return (
                      <div className="col-span-1" key={`${variant}-${opt}`}>
                        <div className="flex items-center justify-center min-h-14">
                          <Button {...props} icon={<Icon name="icon-rocket-01" size="xl" />} />
                        </div>
                      </div>
                    );
                  }

                  return (
                    <div className="col-span-1" key={`${variant}-${opt}`}>
                      <div className="flex items-center justify-center min-h-14">
                        <Button {...props}>Holicay</Button>
                      </div>
                    </div>
                  );
                })}
              </React.Fragment>
            );
          })}

          {BUTTON_VARIANTS.map((variant) => {
            if (variant.includes('gray')) return;

            return (
              <React.Fragment key={variant}>
                <div className="col-span-1">
                  <p className="text-sm font-normal capitalize text-base-primary">
                    {variant} Danger
                  </p>
                </div>
                {OPTIONS.map((opt) => {
                  const props: ButtonProps = {
                    danger: true,
                    size: 'md',
                    type: variant as ButtonType,
                  };
                  if (['withDot', 'disabled', 'loading'].includes(opt)) {
                    props[opt as keyof ButtonProps] = true;
                  }

                  if (opt.startsWith('size')) {
                    props.size = opt.split(' ')[1] as ButtonSize;
                  }

                  if (['prefixIcon', 'suffixIcon'].includes(opt)) {
                    props[opt as keyof ButtonProps] = <Icon name="icon-rocket-01" size="xl" />;
                  }

                  if (['only Icon'].includes(opt)) {
                    return (
                      <div className="col-span-1" key={`${variant}-${opt}`}>
                        <div className="flex items-center justify-center min-h-14">
                          <Button {...props} icon={<Icon name="icon-rocket-01" size="xl" />} />
                        </div>
                      </div>
                    );
                  }

                  return (
                    <div className="col-span-1" key={`${variant}-${opt}`}>
                      <div className="flex items-center justify-center min-h-14">
                        <Button {...props}>Holicay</Button>
                      </div>
                    </div>
                  );
                })}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    );
  },
};
