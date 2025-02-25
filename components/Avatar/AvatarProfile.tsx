/* eslint-disable @next/next/no-img-element */
import React from 'react';
import clsx from 'clsx';

import './avatar-profile.css';
import { PREFIX_CLASS } from '@/variables/app';
import { AvatarBadge, AvatarBadgeProps } from './AvatarBadge';
import { AvatarProps } from './InternalAvatar';

export type AvatarProfileSize = 'lg' | 'md' | 'sm';

export interface AvatarProfileProps {
  size?: AvatarProfileSize;
  /** Src of image avatar */
  src?: React.ReactNode;
  /** Srcset of image avatar */
  srcSet?: string;
  /** Icon to be used in avatar */
  icon?: React.ReactNode;
  style?: React.CSSProperties;
  prefixCls?: string;
  className?: string;
  rootClassName?: string;
  children?: React.ReactNode;
  alt?: string;
  label?: string;
  helperText?: string;
  crossOrigin?: '' | 'anonymous' | 'use-credentials';
  isOnline?: boolean;
  badge?: AvatarBadgeProps;
  onClick?: (e?: React.MouseEvent<HTMLElement>) => void;
  /* callback when img load error */
  /* return false to prevent Avatar show default fallback behavior, then you can do fallback by yourself */
  onError?: () => boolean;
}

const AvatarProfile = React.forwardRef<HTMLSpanElement, AvatarProfileProps>((props, ref) => {
  const {
    prefixCls = PREFIX_CLASS,
    size = 'md',
    src,
    srcSet,
    icon,
    className,
    rootClassName,
    alt,
    children,
    crossOrigin,
    badge,
    ...others
  } = props;

  const avatarBadgeProps: AvatarProps['badge'] = {
    src: badge?.src,
    srcSet: badge?.srcSet,
    alt: badge?.alt,
    rootClassName: badge?.rootClassName,
    children: badge?.children,
    crossOrigin: badge?.crossOrigin,
    onError: badge?.onError,
    type: 'profile-photo',
    borderless: true,
    size,
  };

  const [isImgExist, setIsImgExist] = React.useState(true);

  React.useEffect(() => {
    setIsImgExist(true);
  }, [props.src]);

  const handleImgLoadError = () => {
    const { onError } = props;
    const errorFlag = onError?.();
    if (errorFlag !== false) {
      setIsImgExist(false);
    }
  };

  const hasImageElement = React.isValidElement(src);

  const avatarProfileWrapperClasses = clsx(`${prefixCls}-avatar-profile-wrapper`, rootClassName);
  const avatarProfileClasses = clsx(`${prefixCls}-avatar-profile`, className, {
    [`${prefixCls}-avatar-profile-lg`]: size === 'lg',
    [`${prefixCls}-avatar-profile-md`]: size === 'md',
    [`${prefixCls}-avatar-profile-sm`]: size === 'sm',
    [`${prefixCls}-avatar-profile-image`]: hasImageElement || (src && isImgExist),
    [`${prefixCls}-avatar-profile-icon`]: !!icon,
  });

  let childrenToRender: React.ReactNode;
  if (typeof src === 'string' && isImgExist) {
    childrenToRender = (
      <img
        src={src}
        srcSet={srcSet}
        onError={handleImgLoadError}
        alt={alt}
        crossOrigin={crossOrigin}
      />
    );
  } else if (hasImageElement) {
    childrenToRender = src;
  } else if (icon) {
    childrenToRender = icon;
  } else {
    childrenToRender = children;
  }
  return (
    <span className={avatarProfileWrapperClasses} ref={ref} {...others}>
      <span className={avatarProfileClasses}>{childrenToRender}</span>
      {typeof badge !== 'undefined' && <AvatarBadge {...avatarBadgeProps} />}
    </span>
  );
});

export default AvatarProfile;
