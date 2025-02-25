import React from 'react';
import clsx from 'clsx';
import { PREFIX_CLASS } from '@/variables/app';
import { TAG_SIZES, TAG_TYPES, TagSize, TagType } from './constants';

import './tag.css';

type PropsWithOptionalChildren<P = unknown> = P & { children?: React.ReactNode };

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  label?: string;
  type?: TagType;
  size?: TagSize;
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

export const Tag = ({
  label,
  type = TAG_TYPES[0],
  size = TAG_SIZES[1],
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
}: PropsWithOptionalChildren<TagProps>) => {
  const withPrefixIcon = (icon || prefixIcon) && (
    <span className={`${prefixCls}-tag-prefix-icon`}>{icon || prefixIcon}</span>
  );

  const withCount = !!count && <span className={`${prefixCls}-tag-count`}>{count}</span>;

  const withSuffixIcon = !!suffixIcon && (
    <span className={`${prefixCls}-tag-suffix-icon`}>{suffixIcon}</span>
  );

  const withCloseIcon = (closable || !!closeIcon) && (
    <span className={`${prefixCls}-tag-close-icon`} onClick={onClose}>
      {closeIcon || <i className="icon icon-x-close" />}
    </span>
  );

  return (
    <span
      {...rest}
      className={clsx(`${prefixCls}-tag`, `${prefixCls}-tag-${size}`, `${prefixCls}-tag-${type}`, {
        [`${prefixCls}-tag-selected`]: selected,
        [`${prefixCls}-tag-borderless`]: !bordered,
        [className as string]: !!className,
      })}
    >
      {withPrefixIcon}

      {children || label}

      {withCount}

      {withSuffixIcon || withCloseIcon}
    </span>
  );
};
