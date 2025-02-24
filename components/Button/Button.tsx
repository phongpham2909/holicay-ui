import React from 'react';
import clsx from 'clsx';
import { PREFIX_CLASS } from '@/variables/app';
import { ButtonSize, ButtonType, ButtonColor, PRIMARY, BUTTON_SIZES } from './constants';

import './button.css';

export interface ButtonProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'type' | 'color'> {
  label?: string;
  size?: ButtonSize;
  type?: ButtonType;
  color?: ButtonColor;
  danger?: boolean;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  prefixCls?: string;
  icon?: React.ReactNode;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  loadingIcon?: React.ReactNode;
  htmlType?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

/** A button triggers an event or action. They let users know what will happen next. */
export const Button = ({
  label,
  size = BUTTON_SIZES[1],
  type = PRIMARY,
  color = PRIMARY,
  prefixCls = PREFIX_CLASS,
  htmlType = 'button',
  icon,
  prefixIcon,
  suffixIcon,
  loadingIcon = <i className="icon icon-loading-01" />,
  loading = false,
  danger = false,
  disabled = false,
  fullWidth = false,
  className,
  onClick,
  children,
  ...rest
}: ButtonProps) => {
  const isDisabled = disabled || loading;

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    if (!isDisabled && onClick) {
      onClick(e);
    }
  };

  return (
    <button
      {...rest}
      type={htmlType}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      className={clsx(
        `${prefixCls}-btn`,
        `${prefixCls}-btn-${type}`,
        `${prefixCls}-btn-color-${color}`,
        `${prefixCls}-btn-size-${size}`,
        {
          'w-full': fullWidth,
          [`${prefixCls}-btn-icon-only`]: !children && !label,
          [`${prefixCls}-btn-icon ${prefixCls}-btn-icon-left`]: !!icon || !!prefixIcon || loading,
          [`${prefixCls}-btn-icon ${prefixCls}-btn-icon-right`]: !!suffixIcon,
          [`${prefixCls}-btn-danger`]: danger,
          [`${prefixCls}-btn-disabled`]: isDisabled,
          [className as string]: !!className,
        }
      )}
      onClick={handleClick}
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
