import React, { useState } from 'react';
// import clsx from "clsx";

import './toggle.css';
import clsx from 'clsx';
import { PREFIX_CLASS } from '@/stories/variables/app';
import useMergedState from '@/stories/hooks/useMergedState';

export type ToggleChangeEventHandler = (
  checked: boolean,
  event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>
) => void;
export type ToggleClickEventHandler = ToggleChangeEventHandler;

interface ToggleProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'onChange' | 'onClick'> {
  label?: string;
  helperText?: string;
  className?: string;
  prefixCls?: string;
  size?: 'md' | 'sm';
  disabled?: boolean;
  onChange?: ToggleChangeEventHandler;
  onClick?: ToggleClickEventHandler;
  checked?: boolean;
  defaultChecked?: boolean;
  loading?: boolean;
  style?: React.CSSProperties;
}

export const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
  (
    {
      prefixCls = PREFIX_CLASS,
      size = 'md',
      label,
      helperText,
      className,
      checked = false,
      defaultChecked = false,
      disabled = false,
      loading = false,
      onClick,
      onChange,
      ...restProps
    },
    ref
  ) => {
    const [innerChecked, setInnerChecked] = useMergedState<boolean>(false, {
      value: checked, // Controlled prop
      defaultValue: defaultChecked, // Default uncontrolled state
    });

    const loadingIcon = (
      <div className={`${prefixCls}-toggle-handle`}>
        {loading && (
          <svg
            aria-hidden="true"
            className={`${prefixCls}-toggle-loading-icon`}
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        )}
      </div>
    );

    function triggerChange(
      newChecked: boolean,
      event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>
    ) {
      let mergedChecked = innerChecked;

      if (!disabled) {
        mergedChecked = newChecked;
        setInnerChecked(mergedChecked);
        onChange?.(mergedChecked, event);
      }

      return mergedChecked;
    }

    function onInternalClick(e: React.MouseEvent<HTMLButtonElement>) {
      const ret = triggerChange(!innerChecked, e);
      // [Legacy] trigger onClick with value
      onClick?.(ret, e);
    }

    const toggleClassName = clsx(`${prefixCls}-toggle`, className, {
      [`${prefixCls}-toggle-md`]: size === 'md',
      [`${prefixCls}-toggle-sm`]: size === 'sm',
      [`${prefixCls}-toggle-checked`]: innerChecked,
      [`${prefixCls}-toggle-disabled`]: disabled,
      [`${prefixCls}-toggle-loading`]: loading,
    });

    const toggleLabelClassName = clsx(`${prefixCls}-toggle-label`, {
      [`${prefixCls}-toggle-label-md`]: size === 'md',
      [`${prefixCls}-toggle-label-sm`]: size === 'sm',
    });

    const toggleHelperTextClassName = clsx(`${prefixCls}-toggle-helper-text`, {
      [`${prefixCls}-toggle-helper-text-md`]: size === 'md',
      [`${prefixCls}-toggle-helper-text-sm`]: size === 'sm',
    });

    return (
      <div className={`${prefixCls}-toggle-wrapper`}>
        <button
          {...restProps}
          type="button"
          role="switch"
          aria-checked={innerChecked}
          disabled={disabled || loading}
          className={toggleClassName}
          ref={ref}
          onClick={onInternalClick}
        >
          {loadingIcon}
        </button>
        {(label || helperText) && (
          <div className="flex flex-col">
            {label && <span className={toggleLabelClassName}>{label}</span>}
            {helperText && <span className={toggleHelperTextClassName}>{helperText}</span>}
          </div>
        )}
      </div>
    );
  }
);
