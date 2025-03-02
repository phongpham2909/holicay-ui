import React, { useMemo } from 'react';
import clsx from 'clsx';
import { forwardRef } from '@/utilities';
import { PREFIX_CLASS } from '@/variables/app';
import {
  ButtonSocialType,
  ButtonSocialSize,
  ButtonSocialVariant,
  BUTTON_SOCIAL_SIZES,
  BUTTON_SOCIAL_TYPES,
  BUTTON_SOCIAL_VARIANTS,
} from './constants';
import { Google as MiscGoogle } from '../MiscIcons';
import { Google, Apple, Facebook, XTwitter } from '../SvgIcons';

import './button-social.css';

export interface ButtonSocialProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'type' | 'color'> {
  type?: ButtonSocialType;
  variant?: ButtonSocialVariant;
  size?: ButtonSocialSize;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  prefixCls?: string;
  icon?: React.ReactNode;
  loadingIcon?: React.ReactNode;
  htmlType?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const ButtonSocial = forwardRef<HTMLButtonElement, ButtonSocialProps>(
  (
    {
      type,
      size = BUTTON_SOCIAL_SIZES[1],
      variant = BUTTON_SOCIAL_VARIANTS[2],
      htmlType,
      disabled = false,
      loading = false,
      fullWidth = false,
      icon,
      loadingIcon = <i className="icon icon-loading-01" />,
      onClick,
      className,
      prefixCls = PREFIX_CLASS,
      children,
      ...rest
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
      if (!isDisabled && onClick) {
        onClick(e);
      }
    };

    const prefixIcon = useMemo(() => {
      switch (type) {
        case BUTTON_SOCIAL_TYPES[0]:
          return variant === BUTTON_SOCIAL_VARIANTS[2] ? <Google /> : <MiscGoogle />;
        case BUTTON_SOCIAL_TYPES[1]:
          return <Facebook />;
        case BUTTON_SOCIAL_TYPES[2]:
          return <Apple />;
        case BUTTON_SOCIAL_TYPES[3]:
          return <XTwitter />;
        default:
          return icon;
      }
    }, [type, variant, icon]);

    return (
      <button
        {...rest}
        ref={ref}
        type={htmlType}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        className={clsx(
          `${prefixCls}-btn-social`,
          `${prefixCls}-btn-social-${type}`,
          `${prefixCls}-btn-social-${size}`,
          `${prefixCls}-btn-social-${variant}`,
          {
            'w-full': fullWidth,
            [`${prefixCls}-btn-social-icon-only`]: !children,
            [`${prefixCls}-btn-social-icon ${prefixCls}-btn-social-icon-left`]:
              !!prefixIcon || loading,
            [`${prefixCls}-btn-social-disabled`]: isDisabled,
          },
          className
        )}
        onClick={handleClick}
      >
        {loading ? (
          <span className={`${prefixCls}-icon-loading`}>{loadingIcon}</span>
        ) : (
          prefixIcon && <span className={`${prefixCls}-social-icon`}>{prefixIcon}</span>
        )}

        {children}
      </button>
    );
  }
);
