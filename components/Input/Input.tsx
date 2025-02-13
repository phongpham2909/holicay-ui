import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import clsx from 'clsx';
import { PREFIX_CLASS } from '@/variables/app';

import './input.css';

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  status?: 'error' | 'warning';
  isFloating?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  prefixCls?: string;
  helperText?: string;
}

/** A text field is an input that allows a user to write or edit text. */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      name,
      label,
      status,
      size = 'md',
      required = false,
      disabled = false,
      readOnly = false,
      isFloating = false,
      prefix,
      suffix,
      prefixCls = PREFIX_CLASS,
      placeholder,
      helperText,
      className,
      ...rest
    },
    ref
  ) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const handleFocus = () => {
      setIsFocused(true);
      inputRef?.current?.focus();
    };

    // Expose textareaRef to parent
    useImperativeHandle(ref, () => inputRef.current!);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
          setIsFocused(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const input = (
      <input
        {...rest}
        ref={inputRef}
        id={name}
        type="text"
        readOnly={readOnly}
        disabled={disabled}
        placeholder={placeholder}
        className={clsx(`${prefixCls}-input`, `${prefixCls}-input-size-${size}`, {
          [`${prefixCls}-input-disabled`]: disabled,
          [`${prefixCls}-input-readOnly`]: readOnly,
          [className as string]: !!className,
        })}
      />
    );
    return (
      <div
        className={clsx(`${prefixCls}-input-wrapper`, {
          [`${prefixCls}-input-status-${status}`]: !!status,
        })}
      >
        {label && (
          <label
            htmlFor={name}
            className={clsx(`${prefixCls}-input-label`, {
              [`${prefixCls}-input-required`]: required,
            })}
          >
            {label} {required && <span className="text-brand-red-primary">*</span>}
          </label>
        )}
        {!!prefix || !!suffix ? (
          <div
            ref={wrapperRef}
            className={clsx(
              `${prefixCls}-input-affix-wrapper`,
              `${prefixCls}-input-affix-wrapper-${size}`,
              {
                [`${prefixCls}-input-affix-wrapper-focused`]: isFocused,
              }
            )}
            onClick={handleFocus}
          >
            {prefix && <span className={`${prefixCls}-input-prefix`}>{prefix}</span>}
            {input}
            {suffix && <span className={`${prefixCls}-input-suffix`}>{suffix}</span>}
          </div>
        ) : (
          <>{input}</>
        )}
        {helperText && <p className={`${prefixCls}-helper-text`}>{helperText}</p>}
      </div>
    );
  }
);
