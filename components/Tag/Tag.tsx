import React from 'react';
import clsx from 'clsx';
import { PREFIX_CLASS } from '@/variables/app';

import './tag.css';

type PropsWithOptionalChildren<P = unknown> = P & { children?: React.ReactNode };

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  label?: string;
  size?: 'sm' | 'md' | 'lg';
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
  size = 'md',
  bordered = true,
  closable = false,
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
      className={clsx(`${prefixCls}-tag`, `${prefixCls}-tag-${size}`, {
        [`${prefixCls}-tag-borderless`]: !bordered,
        [className as string]: !!className,
      })}
    >
      {withPrefixIcon}

      {children || label}

      {withSuffixIcon || withCloseIcon}
    </span>
  );
};
