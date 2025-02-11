import React, { useRef, useState, useEffect, useImperativeHandle, forwardRef } from 'react';
import clsx from 'clsx';
import { PREFIX_CLASS } from '@/stories/variables/app';

import './textarea.css';

export interface TextAreaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'prefix'> {
  label?: string;
  resize?: 'vertical' | 'horizontal' | 'auto' | 'none';
  status?: 'error' | 'warning';
  autoSize?: Record<string, number> | boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  prefixCls?: string;
  helperText?: string;
  wrapperClassName?: string;
}

const LINE_HEIGHT = 24;
const PADDING_TB = 18; // padding top and bottom

/** A text area lets users enter long form text which spans over multiple lines. When empty, it can hold a placeholder similar to a Input. You can define the rows of the TextArea and also determine specific behavior when handling long texts. */
/** Using forwardRef to allow parent access to textareaRef */
export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      name,
      label,
      status,
      required = false,
      disabled = false,
      readOnly = false,
      autoSize,
      resize = 'vertical',
      rows = 4,
      prefix,
      suffix,
      prefixCls = PREFIX_CLASS,
      placeholder,
      helperText,
      className,
      wrapperClassName,
      onChange,
      ...rest
    },
    ref
  ) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const isResizing = useRef(false);
    const [size, setSize] = useState({
      width: 300,
      height: rows * LINE_HEIGHT + PADDING_TB,
    });
    const [value, setValue] = useState('');

    // Expose textareaRef to parent
    useImperativeHandle(ref, () => textareaRef.current!);

    useEffect(() => {
      if (textareaRef.current && !!autoSize) {
        textareaRef.current.style.height = 'auto'; // Reset height
        const scrollHeight = textareaRef.current.scrollHeight;
        textareaRef.current.style.height = `${scrollHeight}px`; // Set new height
      }
    }, [value, autoSize]); // Update height on value change

    const handleMouseDown = (event: React.MouseEvent) => {
      event.preventDefault();
      isResizing.current = true;

      const startX = event.clientX;
      const startY = event.clientY;
      const startWidth = size.width;
      const startHeight = size.height;

      const handleMouseMove = (e: MouseEvent) => {
        if (isResizing.current) {
          setSize({
            width: Math.max(150, startWidth + (e.clientX - startX)), // Prevent shrinking too much
            height: Math.max(LINE_HEIGHT * 2 + PADDING_TB, startHeight + (e.clientY - startY)),
          });
        }
      };

      const handleMouseUp = () => {
        isResizing.current = false;
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    };

    const getStyles = () => {
      let style = {
        ...rest.style,
      };
      if (!!autoSize) {
        if (typeof autoSize === 'boolean') {
          style = {
            ...style,
            minHeight: `${rows * LINE_HEIGHT}px`,
          };
        }
        if (typeof autoSize === 'object') {
          style = {
            ...style,
            minHeight: `${autoSize?.minRows * LINE_HEIGHT}px`, // Adjust for default line height
            maxHeight: `${autoSize?.maxRows * LINE_HEIGHT}px`, // Limit max expansion
          };
        }
        return style;
      }
      if (resize === 'vertical') {
        style = {
          ...style,
          height: size.height,
        };
      }
      if (resize === 'horizontal') {
        style = {
          ...style,
          width: size.width,
        };
      }
      if (resize === 'auto') {
        style = {
          ...style,
          width: size.width,
          height: size.height,
        };
      }
      return style;
    };

    const inputStyle = getStyles();

    const inputRows = !autoSize ? rows : typeof autoSize === 'boolean' ? rows : autoSize?.minRows;

    const input = (
      <textarea
        {...rest}
        id={name}
        ref={textareaRef}
        style={inputStyle}
        rows={inputRows}
        readOnly={readOnly}
        disabled={disabled}
        placeholder={placeholder}
        className={clsx(`${prefixCls}-textarea`, {
          [`${prefixCls}-textarea-disabled`]: disabled,
          [`${prefixCls}-textarea-readOnly`]: readOnly,
          [`${prefixCls}-textarea-autoSize`]: !!autoSize,
          'overflow-y-hidden': typeof autoSize === 'boolean',
          [className as string]: !!className,
        })}
        onChange={(e) => {
          setValue(e.target.value);
          !!onChange && onChange(e);
        }}
      />
    );

    const btnResize = (
      <button
        className={clsx(`${prefixCls}-textarea-btn-resize`, {
          'cursor-nwse-resize': resize === 'auto',
          'cursor-ns-resize': resize === 'vertical',
          'cursor-ew-resize': resize === 'horizontal',
        })}
        onMouseDown={handleMouseDown}
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.82417 8.26693C2.58985 8.03261 2.58985 7.65271 2.82417 7.4184L7.41828 2.82429C7.65259 2.58997 8.03249 2.58997 8.26681 2.82429C8.50112 3.0586 8.50112 3.4385 8.26681 3.67282L3.67269 8.26693C3.43838 8.50124 3.05848 8.50124 2.82417 8.26693Z"
            fill="#A4A7AE"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.82416 8.96987C5.58985 8.73556 5.58985 8.35566 5.82416 8.12134L8.12122 5.82429C8.35554 5.58997 8.73543 5.58997 8.96975 5.82429C9.20406 6.0586 9.20406 6.4385 8.96975 6.67282L6.67269 8.96987C6.43838 9.20419 6.05848 9.20419 5.82416 8.96987Z"
            fill="#A4A7AE"
          />
        </svg>
      </button>
    );

    return (
      <div
        className={clsx(`${prefixCls}-textarea-wrapper`, {
          [`${prefixCls}-textarea-status-${status}`]: !!status,
          [wrapperClassName as string]: !!wrapperClassName,
        })}
      >
        {label && (
          <label
            htmlFor={name}
            className={clsx(`${prefixCls}-textarea-label`, {
              [`${prefixCls}-textarea-required`]: required,
            })}
          >
            {label} {required && <span className="text-brand-red-primary">*</span>}
          </label>
        )}
        {resize !== 'none' && !autoSize ? (
          <div className={clsx(`${prefixCls}-textarea-affix-wrapper`)}>
            {input}
            {btnResize}
          </div>
        ) : (
          <>{input}</>
        )}
        {helperText && <p className={`${prefixCls}-helper-text`}>{helperText}</p>}
      </div>
    );
  }
);
