import React from 'react';
import { Icon as IconNify } from '@iconify/react';
import CSS from 'csstype';
import clsx from 'clsx';
import { PREFIX_CLASS } from '@/variables/app';
import { IconSize, ICON_SIZES, DEFAULT_NAME } from './constants';

import './icon.css';

export interface IconProps {
  name: string;
  size?: IconSize;
  style?: CSS.Properties;
  className?: string;
  prefixCls?: string;
  onClick?: () => void;
}

export const Icon = ({
  name = DEFAULT_NAME,
  size = ICON_SIZES[1],
  prefixCls = PREFIX_CLASS,
  className,
  ...rest
}: IconProps) => {
  if (name.includes(':')) {
    return (
      <IconNify
        {...rest}
        icon={name}
        className={clsx('iconify', `${prefixCls}-icon-${size}`, className)}
      />
    );
  }
  return (
    <i
      {...rest}
      className={clsx('icon', `${prefixCls}-icon-${size}`, className, {
        [name]: !!name,
      })}
    />
  );
};
