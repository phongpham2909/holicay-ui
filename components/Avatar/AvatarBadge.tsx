/* eslint-disable @next/next/no-img-element */
import { PREFIX_CLASS } from '@/variables/app';
import clsx from 'clsx';
import React from 'react';
import './avatar-badge.css';

export type AvatarBadgeType = 'avatar' | 'profile-photo';

export type AvatarBadgeSize = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface AvatarBadgeProps {
  prefixCls?: string;
  borderless?: boolean;
  isOnline?: boolean;
  alt?: string;
  src?: React.ReactNode;
  srcSet?: string;
  rootClassName?: string;
  children?: React.ReactNode;
  crossOrigin?: '' | 'anonymous' | 'use-credentials';
  type?: AvatarBadgeType;
  size?: AvatarBadgeSize;
  onError?: () => boolean;
}

export const AvatarBadge = ({
  prefixCls = PREFIX_CLASS,
  borderless = false,
  isOnline,
  alt,
  src,
  srcSet,
  rootClassName,
  children,
  crossOrigin,
  type = 'avatar',
  size = 'md',
  onError,
}: AvatarBadgeProps) => {
  const [isImgExist, setIsImgExist] = React.useState(true);

  React.useEffect(() => {
    setIsImgExist(true);
  }, [src]);

  const handleImgLoadError = () => {
    const errorFlag = onError?.();
    if (errorFlag !== false) {
      setIsImgExist(false);
    }
  };

  const hasImageElement = React.isValidElement(src);

  console.log(src);

  const avatarBadgeClasses = clsx(`${prefixCls}-avatar-badge-wrapper`, rootClassName, {
    [`${prefixCls}-avatar-badge-2xl`]: size === '2xl',
    [`${prefixCls}-avatar-badge-xl`]: size === 'xl',
    [`${prefixCls}-avatar-badge-lg`]: size === 'lg',
    [`${prefixCls}-avatar-badge-md`]: size === 'md',
    [`${prefixCls}-avatar-badge-sm`]: size === 'sm',
    [`${prefixCls}-avatar-badge-xs`]: size === 'xs',
    [`${prefixCls}-avatar-badge-profile-photo`]: type === 'profile-photo',
    [`${prefixCls}-avatar-badge-online`]: isOnline,
    [`${prefixCls}-avatar-badge-border`]: !borderless,
    [`${prefixCls}-avatar-badge-with-image`]:
      (typeof src === 'string' && isImgExist) || hasImageElement,
    [`${prefixCls}-avatar-badge-border-with-image`]:
      !borderless && ((typeof src === 'string' && isImgExist) || hasImageElement),
  });

  let childrenToRender: React.ReactNode;
  if (isOnline) {
    childrenToRender = <span className={`${prefixCls}-avatar-badge`}></span>;
  } else if (typeof src === 'string' && isImgExist) {
    childrenToRender = (
      <span className={`${prefixCls}-avatar-badge`}>
        <img
          src={src}
          srcSet={srcSet}
          onError={handleImgLoadError}
          alt={alt}
          crossOrigin={crossOrigin}
        />
      </span>
    );
  } else if (hasImageElement) {
    childrenToRender = <span className={`${prefixCls}-avatar-badge`}>{src}</span>;
  } else {
    childrenToRender = children;
  }

  return <span className={avatarBadgeClasses}>{childrenToRender}</span>;
};
