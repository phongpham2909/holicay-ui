import clsx from 'clsx';
import * as React from 'react';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import './radio.css';
import { PREFIX_CLASS } from '@/variables/app';
import useMergedState from '@/hooks/useMergedState';

export interface RadioChangeEvent {
  target: RadioChangeEventTarget;
  stopPropagation: () => void;
  preventDefault: () => void;
  nativeEvent: React.ChangeEvent<HTMLInputElement>['nativeEvent'];
}

export interface RadioChangeEventTarget extends RadioProps {
  checked: boolean;
}

export interface RadioRef {
  focus: (options?: FocusOptions) => void;
  blur: () => void;
  input: HTMLInputElement | null;
  nativeElement: HTMLElement | null;
}

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'size'> {
  prefixCls?: string;
  rootClassName?: string;
  label?: string;
  size?: 'md' | 'sm';
  helperText?: string;
  onChange?: (e: RadioChangeEvent) => void;
}

export const Radio = forwardRef<RadioRef, RadioProps>((props, ref) => {
  const {
    prefixCls = PREFIX_CLASS,
    rootClassName,
    className,
    style,
    size = 'md',
    checked,
    disabled,
    defaultChecked,
    title,
    label,
    helperText,
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
        type: 'radio',
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

  const radioWrapperClasses = clsx(
    `${prefixCls}-radio-wrapper`,
    {
      [`${prefixCls}-radio-wrapper-with-label`]: label || helperText,
      [`${prefixCls}-radio-wrapper-checked`]: !!rawValue,
      [`${prefixCls}-radio-wrapper-disabled`]: disabled,
    },
    rootClassName
  );

  const radioClasses = clsx(`${prefixCls}-radio`, className, {
    [`${prefixCls}-radio-md`]: size === 'md',
    [`${prefixCls}-radio-sm`]: size === 'sm',
    [`${prefixCls}-radio-checked`]: !!rawValue,
    [`${prefixCls}-radio-disabled`]: disabled,
  });

  const radioLabelClasses = clsx(`${prefixCls}-radio-label`, {
    [`${prefixCls}-radio-label-md`]: size === 'md',
    [`${prefixCls}-radio-label-sm`]: size === 'sm',
  });

  const radioHelperTextClasses = clsx(`${prefixCls}-radio-helper-text`, {
    [`${prefixCls}-radio-helper-text-md`]: size === 'md',
    [`${prefixCls}-radio-helper-text-sm`]: size === 'sm',
  });

  return (
    <label className={radioWrapperClasses}>
      <span className={radioClasses} title={title} style={style} ref={holderRef}>
        <input
          {...inputProps}
          className={`${prefixCls}-radio-input`}
          ref={inputRef}
          onChange={handleChange}
          disabled={disabled}
          checked={!!rawValue}
          type="radio"
        />
        <span className={`${prefixCls}-radio-inner`}>
          <span className={`${prefixCls}-radio-icon`} />
        </span>
      </span>
      {(label || helperText) && (
        <div className="flex flex-col">
          {label && <span className={radioLabelClasses}>{label}</span>}
          {helperText && <span className={radioHelperTextClasses}>{helperText}</span>}
        </div>
      )}
    </label>
  );
});

export default Radio;
