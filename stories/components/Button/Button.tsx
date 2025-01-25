import React from "react";
import clsx from "clsx";

import "./button.css";

export interface ButtonProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, "type" | "color"> {
  label?: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  type?: "primary" | "secondary" | "text" | "link";
  color?: "primary" | "gray";
  danger?: boolean;
  disabled?: boolean;
  icon?: React.ReactElement;
  iconLeft?: React.ReactElement;
  iconRight?: React.ReactElement;
  htmlType?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick?: () => void;
}

/** A button triggers an event or action. They let users know what will happen next. */
export const Button = ({
  size = "md",
  type = "primary",
  color = "primary",
  htmlType = "button",
  label,
  icon,
  className,
  iconLeft,
  iconRight,
  danger = false,
  disabled = false,
  children,
  ...rest
}: ButtonProps) => {

  return (
    <button
      {...rest}
      type={htmlType}
      disabled={disabled}
      className={clsx(
        "hlc-btn",
        `hlc-btn-${type}`,
        `hlc-btn-color-${color}`,
        `hlc-btn-size-${size}`,
        {
          "hlc-btn-icon-only": !children && !label,
          "hlc-btn-icon hlc-btn-icon-left": !!iconLeft || !!icon,
          "hlc-btn-icon hlc-btn-icon-right": !!iconRight,
          "hlc-btn-danger": danger,
          "hlc-btn-disabled": disabled,
          [className as string]: !!className,
        }
      )}
    >
      {icon || iconLeft}
      {children || label}
      {iconRight &&  iconRight}
    </button>
  );
};
