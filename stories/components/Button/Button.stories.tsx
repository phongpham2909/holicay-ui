import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button, ButtonProps, ButtonSocial, Icon } from '@/components';
import { ButtonColor, ButtonSize, ButtonType } from '@/components/Button/constants';

const meta = {
  title: 'Testing/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    chromatic: { disableSnapshot: false },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Text content inside the button.',
      table: {
        type: { summary: 'string' },
      },
    },
    type: {
      control: 'radio',
      options: ['primary', 'secondary', 'text', 'link'],
      description: 'Defines the button style.',
      table: {
        type: { summary: "'primary' | 'secondary' | 'text' | 'link'" },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Controls the size of the button.',
      table: {
        type: { summary: "'sm' | 'md' | 'lg' | 'xl' | '2xl'" },
        defaultValue: { summary: 'md' },
      },
    },
    color: {
      control: 'inline-radio',
      options: ['primary', 'gray'],
      description:
        'Sets the button color scheme. This is only applicable if the type is not `primary`.',
      table: {
        type: { summary: "'primary' | 'gray'" },
        defaultValue: { summary: 'primary' },
      },
      if: { arg: 'type', neq: 'primary' },
    },
    icon: {
      control: 'object',
      description: 'Optional icon component inside the button.',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    prefixIcon: {
      control: 'object',
      description: 'Left-side icon inside the button.',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    suffixIcon: {
      control: 'object',
      description: 'Right-side icon inside the button.',
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
    danger: {
      control: 'boolean',
      description: 'Applies a danger (destructive) style to the button.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
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
  args: {
    size: 'md',
    type: 'primary',
    color: 'primary',
    htmlType: 'button',
    disabled: false,
    danger: false,
    loading: false,
    fullWidth: false,
    label: 'Button CTA',
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;

type ButtonStory = StoryObj<typeof meta>;

export const Primary: ButtonStory = {
  args: {
    size: 'md',
    type: 'primary',
    label: 'Button CTA',
  },
};

export const Secondary: ButtonStory = {
  args: {
    size: 'md',
    type: 'secondary',
    label: 'Button CTA',
  },
};

export const Disabled: ButtonStory = {
  args: {
    size: 'md',
    color: 'primary',
    label: 'Button CTA',
    disabled: true,
  },
};

export const Loading: ButtonStory = {
  args: {
    size: 'md',
    color: 'primary',
    label: 'Button CTA',
    loading: true,
  },
};

export const LeadingIcon: ButtonStory = {
  args: {
    size: 'md',
    color: 'primary',
    label: 'Button CTA',
    icon: React.createElement('i', { className: 'icon icon-rocket-01' }, null),
    prefixIcon: React.createElement('i', { className: 'icon icon-rocket-01' }, null),
  },
};

export const TrailingIcon: ButtonStory = {
  args: {
    size: 'md',
    color: 'primary',
    label: 'Button CTA',
    suffixIcon: React.createElement('i', { className: 'icon icon-rocket-01' }, null),
  },
};

export const OnlyIcon: ButtonStory = {
  args: {
    size: 'md',
    color: 'primary',
    icon: React.createElement('i', { className: 'icon icon-rocket-01' }, null),
  },
};

export const Text: ButtonStory = {
  args: {
    type: 'text',
    color: 'primary',
    label: 'Button CTA',
  },
};

export const Link: ButtonStory = {
  args: {
    type: 'link',
    color: 'primary',
    label: 'Button CTA',
  },
};

export const Destructive: ButtonStory = {
  args: {
    size: 'md',
    color: 'primary',
    label: 'Button CTA',
    danger: true,
    disabled: false,
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
