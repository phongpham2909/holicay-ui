import React from 'react';
import toArray from '@/utilities/toArray';
import { cloneElement } from '@/utilities/reactNode';
import clsx from 'clsx';
import { PREFIX_CLASS } from '@/variables/app';
import AvatarContext, { AvatarContextType, AvatarSize } from './AvatarContext';
import './avatar-group.css';
import Avatar from './Avatar';

interface ContextProps {
  children?: React.ReactNode;
}

export interface AvatarGroupProps {
  className?: string;
  rootClassName?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  prefixCls?: string;
  maxCount?: number;
  size?: AvatarSize;
  button?: React.HTMLAttributes<HTMLButtonElement>;
}

const AvatarContextProvider: React.FC<AvatarContextType & ContextProps> = (props) => {
  const { size } = React.useContext<AvatarContextType>(AvatarContext);
  const avatarContextValue = React.useMemo<AvatarContextType>(
    () => ({ size: props.size || size }),
    [props.size, size]
  );
  return (
    <AvatarContext.Provider value={avatarContextValue}>{props.children}</AvatarContext.Provider>
  );
};

const AvatarGroup = (props: AvatarGroupProps) => {
  const {
    prefixCls = PREFIX_CLASS,
    rootClassName,
    size = 'md',
    maxCount,
    children,
    button,
    ...others
  } = props;

  const avatarGroupWrapperClasses = clsx(`${prefixCls}-avatar-group-wrapper`, rootClassName, {
    [`${prefixCls}-avatar-group-wrapper-md`]: size === 'md',
    [`${prefixCls}-avatar-group-wrapper-sm`]: size === 'sm',
    [`${prefixCls}-avatar-group-wrapper-xs`]: size === 'xs',
  });

  const childrenWithProps = toArray(children).map((child, index) =>
    cloneElement(child, { key: `avatar-key-${index}` })
  );

  const numOfChildren = childrenWithProps.length;

  if (maxCount && maxCount < numOfChildren) {
    const childrenShow = childrenWithProps.slice(0, maxCount);
    const childrenHidden = numOfChildren - maxCount;
    if (childrenHidden > 0) {
      childrenShow.push(<Avatar size={size}>{`+${childrenHidden}`}</Avatar>);
    }

    return (
      <AvatarContextProvider size={size}>
        <div className={avatarGroupWrapperClasses} {...others}>
          <div className={`${prefixCls}-avatar-group`}>{childrenShow}</div>
          {button && (
            <button className={`${prefixCls}-avatar-group-button`}>
              <i className="icon icon-plus" />
            </button>
          )}
        </div>
      </AvatarContextProvider>
    );
  }

  return (
    <AvatarContextProvider size={size}>
      <div className={avatarGroupWrapperClasses} {...others}>
        <div className={`${prefixCls}-avatar-group`}>{childrenWithProps}</div>
        {button && (
          <button className={`${prefixCls}-avatar-group-button`} {...button}>
            <i className="icon icon-plus" />
          </button>
        )}
      </div>
    </AvatarContextProvider>
  );
};

export default AvatarGroup;
