import useMergedState from '@/stories/hooks/useMergedState';
import { PREFIX_CLASS } from '@/stories/variables/app';
import clsx from 'clsx';
import * as React from 'react';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import './checkbox.css';

export interface CheckboxChangeEvent {
  target: CheckboxChangeEventTarget;
  stopPropagation: () => void;
  preventDefault: () => void;
  nativeEvent: React.ChangeEvent<HTMLInputElement>['nativeEvent'];
}

export interface CheckboxChangeEventTarget extends CheckboxProps {
  checked: boolean;
}

export interface CheckboxRef {
  focus: (options?: FocusOptions) => void;
  blur: () => void;
  input: HTMLInputElement | null;
  nativeElement: HTMLElement | null;
}

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'size'> {
  prefixCls?: string;
  rootClassName?: string;
  label?: string;
  size?: 'md' | 'sm';
  helperText?: string;
  indeterminate?: boolean;
  onChange?: (e: CheckboxChangeEvent) => void;
}

export const Checkbox = forwardRef<CheckboxRef, CheckboxProps>((props, ref) => {
  const {
    prefixCls = PREFIX_CLASS,
    rootClassName,
    className,
    style,
    size = 'md',
    checked,
    disabled,
    defaultChecked,
    indeterminate,
    type = 'checkbox',
    title,
    label = 'Remember me',
    helperText = 'Save my login details for next time',
    onChange,
    ...inputProps
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const holderRef = useRef<HTMLElement>(null);

  const [rawValue, setRawValue] = useMergedState(defaultChecked, {
    value: checked,
  });

  useImperativeHandle(ref, () => ({
    focus: (options) => {
      inputRef.current?.focus(options);
    },
    blur: () => {
      inputRef.current?.blur();
    },
    input: inputRef.current,
    nativeElement: holderRef.current,
  }));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) {
      return;
    }

    if (!('checked' in props)) {
      setRawValue(e.target.checked);
    }

    onChange?.({
      target: {
        ...props,
        type,
        checked: e.target.checked,
      },
      stopPropagation() {
        e.stopPropagation();
      },
      preventDefault() {
        e.preventDefault();
      },
      nativeEvent: e.nativeEvent,
    });
  };

  const checkboxWrapperClasses = clsx(
    `${prefixCls}-checkbox-wrapper`,
    {
      [`${prefixCls}-checkbox-wrapper-with-label`]: label || helperText,
      [`${prefixCls}-checkbox-wrapper-checked`]: !!rawValue || !!indeterminate,
      [`${prefixCls}-checkbox-wrapper-disabled`]: disabled,
    },
    rootClassName
  );

  const checkboxClasses = clsx(`${prefixCls}-checkbox`, className, {
    [`${prefixCls}-checkbox-md`]: size === 'md',
    [`${prefixCls}-checkbox-sm`]: size === 'sm',
    [`${prefixCls}-checkbox-checked`]: !!rawValue || !!indeterminate,
    [`${prefixCls}-checkbox-disabled`]: disabled,
  });

  const checkboxIconClasses = clsx(`${prefixCls}-checkbox-icon icon`, {
    'icon-check': !!rawValue,
    [`${prefixCls}-checkbox-indeterminate icon-minus`]: !rawValue && !!indeterminate,
  });

  const checkboxLabelClasses = clsx(`${prefixCls}-checkbox-label`, {
    [`${prefixCls}-checkbox-label-md`]: size === 'md',
    [`${prefixCls}-checkbox-label-sm`]: size === 'sm',
  });

  const checkboxHelperTextClasses = clsx(`${prefixCls}-checkbox-helper-text`, {
    [`${prefixCls}-checkbox-helper-text-md`]: size === 'md',
    [`${prefixCls}-checkbox-helper-text-sm`]: size === 'sm',
  });

  return (
    <label className={checkboxWrapperClasses}>
      <span className={checkboxClasses} title={title} style={style} ref={holderRef}>
        <input
          {...inputProps}
          className={`${prefixCls}-checkbox-input`}
          ref={inputRef}
          onChange={handleChange}
          disabled={disabled}
          checked={!!rawValue || !!indeterminate}
          type={type}
        />
        <span className={`${prefixCls}-checkbox-inner`}>
          <span className={checkboxIconClasses} />
        </span>
      </span>
      {(label || helperText) && (
        <div className="flex flex-col">
          {label && <span className={checkboxLabelClasses}>{label}</span>}
          {helperText && <span className={checkboxHelperTextClasses}>{helperText}</span>}
        </div>
      )}
    </label>
  );
});

export default Checkbox;
