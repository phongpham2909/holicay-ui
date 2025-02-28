import React, { useState } from 'react';
import clsx from 'clsx';
import { PREFIX_CLASS } from '@/variables/app';
import { ButtonGroupSize } from './constants';
import { Icon } from '../Icon';

import './button-group.css';

type PropsWithOptionalChildren<P = unknown> = P & { children?: React.ReactNode };

export type ButtonGroupOption = {
  label: string;
  value: string;
  icon?: string | React.ReactNode;
  disabled?: boolean;
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
};

export interface ButtonGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  size?: ButtonGroupSize;
  options?: ButtonGroupOption[];
  prefixCls?: string;
  multiple?: boolean;
  value?: string[];
  onChange?: (selected: string[]) => void;
}

export const ButtonGroup = ({
  size,
  multiple = false,
  options = [],
  value = [],
  onChange,
  className,
  prefixCls = PREFIX_CLASS,
  children,
  ...rest
}: PropsWithOptionalChildren<ButtonGroupProps>) => {
  const [selected, setSelected] = useState<string[]>(value || []);

  const handleClick = (option: string) => {
    let newSelected: string[];

    if (multiple) {
      newSelected = selected.includes(option)
        ? selected.filter((item) => item !== option)
        : [...selected, option];
    } else {
      newSelected = selected.includes(option) ? [] : [option];
    }

    setSelected(newSelected);
    onChange?.(newSelected);
  };

  return (
    <div
      {...rest}
      role="group"
      className={clsx(`${prefixCls}-btn-group`, `${prefixCls}-btn-group-${size}`, className)}
    >
      {children ||
        options.map((option, oIndex) => (
          <button
            type="button"
            key={option.value || oIndex}
            onClick={() => !option.disabled && handleClick(option.value)}
            className={clsx(`${prefixCls}-btn-group-item`, {
              [`${prefixCls}-btn-group-item-disabled`]: option.disabled,
              [`${prefixCls}-btn-group-item-selected`]: selected.includes(option.value),
            })}
          >
            {option.prefix ||
              (typeof option.icon === 'string' ? (
                <Icon name={option.icon} size={size === 'sm' ? 'md' : 'xl'} />
              ) : (
                option.icon
              ))}

            {option.label}

            {option.suffix}
          </button>
        ))}
    </div>
  );
};
