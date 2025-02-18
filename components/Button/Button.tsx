import React from 'react';
import clsx from 'clsx';
import { PREFIX_CLASS } from '@/variables/app';

import './button.css';

export interface ButtonProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'type' | 'color'> {
  label?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  type?: 'primary' | 'secondary' | 'text' | 'link';
  color?: 'primary' | 'gray';
  danger?: boolean;
  loading?: boolean;
  disabled?: boolean;
  prefixCls?: string;
  icon?: React.ReactNode;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  loadingIcon?: React.ReactNode;
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
  prefixIcon,
  suffixIcon,
  loadingIcon = <i className="icon icon-loading-01 animate-spin" />,
  loading = false,
  danger = false,
  disabled = false,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <button
      {...rest}
      type={htmlType}
      disabled={disabled || loading}
      className={clsx(
        `${prefixCls}-btn`,
        `${prefixCls}-btn-${type}`,
        `${prefixCls}-btn-color-${color}`,
        `${prefixCls}-btn-size-${size}`,
        {
          [`${prefixCls}-btn-icon-only`]: !children && !label,
          [`${prefixCls}-btn-icon ${prefixCls}-btn-icon-left`]: !!icon || !!prefixIcon || loading,
          [`${prefixCls}-btn-icon ${prefixCls}-btn-icon-right`]: !!suffixIcon,
          [`${prefixCls}-btn-danger`]: danger,
          [`${prefixCls}-btn-disabled`]: disabled || loading,
          [className as string]: !!className,
        }
      )}
    >
      {loading ? (
        <span className={`${prefixCls}-btn-icon-loading`}>{loadingIcon}</span>
      ) : (
        icon || prefixIcon
      )}
      {children || label}
      {suffixIcon}
    </button>
  );
};
