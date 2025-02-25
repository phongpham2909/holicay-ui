import { PREFIX_CLASS } from '@/variables/app';
import React from 'react';
import clsx from 'clsx';
import './avatar-label-group.css';
import { AvatarBadgeProps } from './AvatarBadge';
import Avatar from './Avatar';

export type AvatarLabelGroupSize = 'xl' | 'lg' | 'md' | 'sm';

export interface AvatarLabelGroupProps {
  rootClassName?: string;
  /** Src of image avatar */
  src?: React.ReactNode;
  /** Srcset of image avatar */
  srcSet?: string;
  /** Icon to be used in avatar */
  icon?: React.ReactNode;
  style?: React.CSSProperties;
  prefixCls?: string;
  avatarClassName?: string;
  avatarRootClassName?: string;
  children?: React.ReactNode;
  alt?: string;
  label?: string;
  helperText?: string;
  crossOrigin?: '' | 'anonymous' | 'use-credentials';
  isOnline?: boolean;
  badge?: AvatarBadgeProps;
  size?: AvatarLabelGroupSize;
  onClick?: (e?: React.MouseEvent<HTMLElement>) => void;
  /* callback when img load error */
  /* return false to prevent Avatar show default fallback behavior, then you can do fallback by yourself */
  onError?: () => boolean;
}

const AvatarLabelGroup = (props: AvatarLabelGroupProps) => {
  const {
    prefixCls = PREFIX_CLASS,
    size = 'md',
    src,
    srcSet,
    icon,
    avatarClassName,
    rootClassName,
    alt,
    children,
    crossOrigin,
    avatarRootClassName,
    label,
    helperText,
    badge,
    ...others
  } = props;

  const avatarProps = {
    size,
    src,
    srcSet,
    icon,
    className: avatarClassName,
    rootClassName: avatarRootClassName,
    alt,
    children,
    crossOrigin,
    badge,
  };

  const avatarLabelGroupClasses = clsx(`${prefixCls}-avatar-label-group`, rootClassName, {
    [`${prefixCls}-avatar-label-group-xl`]: size === 'xl',
    [`${prefixCls}-avatar-label-group-lg`]: size === 'lg',
    [`${prefixCls}-avatar-label-group-md`]: size === 'md',
    [`${prefixCls}-avatar-label-group-sm`]: size === 'sm',
  });

  return (
    <span {...others} className={avatarLabelGroupClasses}>
      <Avatar {...avatarProps} />
      {(label || helperText) && (
        <div className="flex flex-col">
          {label && <span className={`${prefixCls}-avatar-label`}>{label}</span>}
          {helperText && <span className={`${prefixCls}-avatar-helper-text`}>{helperText}</span>}
        </div>
      )}
    </span>
  );
};

export default AvatarLabelGroup;
