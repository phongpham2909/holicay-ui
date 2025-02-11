import React from 'react';
import clsx from 'clsx';
import { PREFIX_CLASS } from '@/stories/variables/app';

import './button.css';

export interface ButtonProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'type' | 'color'> {
  label?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  type?: 'primary' | 'secondary' | 'text' | 'link';
  color?: 'primary' | 'gray';
  danger?: boolean;
  disabled?: boolean;
  prefixCls?: string;
  icon?: React.ReactElement;
  iconLeft?: React.ReactElement;
  iconRight?: React.ReactElement;
  htmlType?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  onClick?: () => void;
}

/** A button triggers an event or action. They let users know what will happen next. */
export const Button = ({
  size = 'md',
  type = 'primary',
  color = 'primary',
  htmlType = 'button',
  prefixCls = PREFIX_CLASS,
  label,
  icon,
  className,
  iconLeft,
  iconRight,
  danger = false,
  disabled = false,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <button
      {...rest}
      type={htmlType}
      disabled={disabled}
      className={clsx(
        `${prefixCls}-btn`,
        `${prefixCls}-btn-${type}`,
        `${prefixCls}-btn-color-${color}`,
        `${prefixCls}-btn-size-${size}`,
        {
          [`${prefixCls}-btn-icon-only`]: !children && !label,
          [`${prefixCls}-btn-icon ${prefixCls}-btn-icon-left`]: !!iconLeft || !!icon,
          [`${prefixCls}-btn-icon ${prefixCls}-btn-icon-right`]: !!iconRight,
          [`${prefixCls}-btn-danger`]: danger,
          [`${prefixCls}-btn-disabled`]: disabled,
          [className as string]: !!className,
        }
      )}
    >
      {icon || iconLeft}
      {children || label}
      {iconRight && iconRight}
    </button>
  );
};
