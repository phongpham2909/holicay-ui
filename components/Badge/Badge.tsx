import React from 'react';
import clsx from 'clsx';
import { PREFIX_CLASS } from '@/variables/app';
import {
  BADGE_SIZES,
  BADGE_TYPES,
  BADGE_COLORS,
  BADGE_SHAPES,
  BadgeSize,
  BadgeType,
  BadgeColor,
  BadgeShape,
} from './constants';

import './badge.css';

type PropsWithOptionalChildren<P = unknown> = P & { children?: React.ReactNode };

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  label?: string;
  type?: BadgeType;
  size?: BadgeSize;
  color?: BadgeColor;
  shape?: BadgeShape;
  count?: number;
  selected?: boolean;
  bordered?: boolean;
  closable?: boolean;
  icon?: React.ReactNode;
  closeIcon?: React.ReactNode;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  prefixCls?: string;
  onClose?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export const Badge = ({
  label,
  size = BADGE_SIZES[1],
  type = BADGE_TYPES[0],
  color = BADGE_COLORS[0],
  shape = BADGE_SHAPES[0],
  selected = false,
  bordered = true,
  closable = false,
  count,
  icon,
  closeIcon,
  prefixIcon,
  suffixIcon,
  prefixCls = PREFIX_CLASS,
  className,
  onClose,
  children,
  ...rest
}: PropsWithOptionalChildren<BadgeProps>) => {
  const withPrefixIcon = (icon || prefixIcon) && (
    <span className={`${prefixCls}-badge-prefix-icon`}>{icon || prefixIcon}</span>
  );

  const withCount = !!count && <span className={`${prefixCls}-badge-count`}>{count}</span>;

  const withSuffixIcon = !!suffixIcon && (
    <span className={`${prefixCls}-badge-suffix-icon`}>{suffixIcon}</span>
  );

  const withCloseIcon = (closable || !!closeIcon) && (
    <span className={`${prefixCls}-badge-close-icon`} onClick={onClose}>
      {closeIcon || <i className="icon icon-x-close" />}
    </span>
  );

  return (
    <span
      {...rest}
      className={clsx(
        `${prefixCls}-badge`,
        `${prefixCls}-badge-${size}`,
        `${prefixCls}-badge-${type}`,
        `${prefixCls}-badge-${color}`,
        `${prefixCls}-badge-${shape}`,
        {
          [`${prefixCls}-badge-selected`]: selected,
          [`${prefixCls}-badge-borderless`]: !bordered,
          [className as string]: !!className,
        }
      )}
    >
      {withPrefixIcon}

      {children || label}

      {withCount}

      {withSuffixIcon || withCloseIcon}
    </span>
  );
};
