import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import clsx from "clsx";

import "./input.css";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "prefix"> {
  label?: string;
  size?: "sm" | "md" | "lg";
  status?: "error" | "warning";
  helperText?: string;
  isFloating?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

/** A text field is an input that allows a user to write or edit text. */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      name,
      label,
      status,
      size = "md",
      required = false,
      disabled = false,
      readOnly = false,
      isFloating = false,
      prefix,
      suffix,
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
        if (
          wrapperRef.current &&
          !wrapperRef.current.contains(event.target as Node)
        ) {
          setIsFocused(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
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
        className={clsx("hlc-input", `hlc-input-size-${size}`, {
          "hlc-input-disabled": disabled,
          "hlc-input-readOnly": readOnly,
          [className as string]: !!className,
        })}
      />
    );
    return (
      <div
        className={clsx("hlc-input-wrapper", {
          [`hlc-input-status-${status}`]: !!status,
        })}
      >
        {label && (
          <label
            htmlFor={name}
            className={clsx("hlc-input-label", {
              "hlc-input-required": required,
            })}
          >
            {label}{" "}
            {required && <span className="text-brand-red-primary">*</span>}
          </label>
        )}
        {!!prefix || !!suffix ? (
          <div
            ref={wrapperRef}
            className={clsx(
              "hlc-input-affix-wrapper",
              `hlc-input-affix-wrapper-${size}`,
              {
                "hlc-input-affix-wrapper-focused": isFocused,
              }
            )}
            onClick={handleFocus}
          >
            {prefix && <span className="hlc-input-prefix">{prefix}</span>}
            {input}
            {suffix && <span className="hlc-input-suffix">{suffix}</span>}
          </div>
        ) : (
          <>{input}</>
        )}
        {helperText && <p className="hlc-helper-text">{helperText}</p>}
      </div>
    );
  }
);
