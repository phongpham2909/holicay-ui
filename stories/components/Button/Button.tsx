import React from "react";
import clsx from "clsx";

import "./button.css";

export interface ButtonProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, "type" | "color"> {
  label: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  type?: "primary" | "secondary" | "text" | "link";
  color?: "primary" | "gray";
  iconLeft?: React.ReactElement;
  iconRight?: React.ReactElement;
  htmlType?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
  label,
  size = "md",
  type = "primary",
  color = "primary",
  iconLeft,
  iconRight,
  htmlType = "button",
  className = "",
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      type={htmlType}
      className={clsx(
        "btn-base",
        `btn-${type}`,
        `btn-color-${color}`,
        `btn-${size}`,
        {
          "bth-icon-left": !!iconLeft,
          "btn-icon-right": !!iconRight,
          [className]: !!className,
        }
      )}
    >
      {children || label}
    </button>
  );
};
