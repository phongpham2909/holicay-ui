import React from 'react';
import clsx from 'clsx';
import { PREFIX_CLASS } from '@/variables/app';
import { ButtonGroupSize } from './constants';

import './button-group.css';

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: ButtonGroupSize;
  prefixCls?: string;
}

export const ButtonGroup = ({
  size,
  prefixCls = PREFIX_CLASS,
  className,
  ...rest
}: ButtonGroupProps) => {
  return (
    <div
      {...rest}
      role="group"
      className={clsx(`${prefixCls}-btn-group`, `${prefixCls}-btn-group-${size}`, className)}
    >
      <button type="button" className="btn btn-secondary">
        Text
      </button>
      <button type="button" className="btn btn-secondary">
        Text
      </button>
      <button type="button" className="btn btn-secondary">
        Text
      </button>
      <button type="button" className="btn btn-secondary">
        Text
      </button>
    </div>
  );
};
