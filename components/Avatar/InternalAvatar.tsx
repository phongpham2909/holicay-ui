/* eslint-disable @next/next/no-img-element */
import React from 'react';
import clsx from 'clsx';

import './avatar.css';
import { PREFIX_CLASS } from '@/variables/app';
import { AvatarBadge, AvatarBadgeProps } from './AvatarBadge';
import AvatarContext, { AvatarContextType, AvatarSize } from './AvatarContext';

export interface AvatarProps {
  size?: AvatarSize;
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

const InternalAvatar = React.forwardRef<HTMLSpanElement, AvatarProps>((props, ref) => {
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

  const avatarCtx = React.useContext<AvatarContextType>(AvatarContext);

  const customSize = avatarCtx?.size || size;

  const avatarBadgeProps = { ...badge, size: customSize };

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

  const avatarWrapperClasses = clsx(`${prefixCls}-avatar-wrapper`, rootClassName);
  const avatarClasses = clsx(`${prefixCls}-avatar`, className, {
    [`${prefixCls}-avatar-2xl`]: customSize === '2xl',
    [`${prefixCls}-avatar-xl`]: customSize === 'xl',
    [`${prefixCls}-avatar-lg`]: customSize === 'lg',
    [`${prefixCls}-avatar-md`]: customSize === 'md',
    [`${prefixCls}-avatar-sm`]: customSize === 'sm',
    [`${prefixCls}-avatar-xs`]: customSize === 'xs',
    [`${prefixCls}-avatar-image`]: hasImageElement || (src && isImgExist),
    [`${prefixCls}-avatar-icon`]: !!icon,
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
    <span className={avatarWrapperClasses} ref={ref} {...others}>
      <span className={avatarClasses}>{childrenToRender}</span>
      {typeof badge !== 'undefined' && <AvatarBadge {...avatarBadgeProps} />}
    </span>
  );
});

export default InternalAvatar;
