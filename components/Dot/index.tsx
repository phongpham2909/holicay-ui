import React from 'react';
import clsx from 'clsx';
import { PREFIX_CLASS } from '@/variables/app';
import { DotColor, DotSize, DOT_SIZES, DOT_COLORS } from './constants';

import './dot.css';

export interface DotProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: DotSize;
  color?: DotColor;
  className?: string;
  prefixCls?: string;
}

export const Dot = ({
  size = DOT_SIZES[1],
  color = DOT_COLORS[0],
  prefixCls = PREFIX_CLASS,
  className,
  ...rest
}: DotProps) => {
  return (
    <span
      className={clsx(
        `${prefixCls}-dot`,
        `${prefixCls}-dot-size-${size}`,
        `${prefixCls}-dot-color-${color}`,
        className
      )}
      {...rest}
    />
  );
};
