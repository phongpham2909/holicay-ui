import React from "react";
import clsx from "clsx";

import "./input.css";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "prefix"> {
  name?: string;
  label?: string;
  required?: boolean;
  size?: "sm" | "md" | "lg";
  status?: "error" | "warning";
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  helperText?: string;
}

/** A text field is an input that allows a user to write or edit text. */
export const Input = ({
  name,
  label,
  required = false,
  disabled = false,
  readOnly = false,
  size = "md",
  status,
  placeholder,
  prefix,
  suffix,
  helperText,
  className,
  ...rest
}: InputProps) => {
  const input = (
    <input
      {...rest}
      type="text"
      id={name}
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
          className={clsx(
            "hlc-input-affix-wrapper",
            `hlc-input-affix-wrapper-${size}`
          )}
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
};
