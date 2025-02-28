import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';
import { PREFIX_CLASS } from '@/variables/app';
import { cloneElement } from '@/utilities';

import './dropdown.css';

type PropsWithChildren<P> = P & { children?: React.ReactNode };

export interface DropdownMenuItem {
  key?: string;
  label?: React.ReactNode;
  disabled?: boolean;
  type?: 'header' | 'footer' | 'divider' | 'button';
  icon?: React.ReactNode;
}

export type MenuClickProps = {
  key?: string;
  item?: DropdownMenuItem;
  domEvent?: React.MouseEvent<HTMLElement, MouseEvent>;
};

export interface DropdownMenu {
  items?: DropdownMenuItem[];
  onClick?: ({ key, item, domEvent }: MenuClickProps) => void;
  className?: string;
  itemsClassName?: string;
}

export interface DropdownProps {
  menu?: DropdownMenu;
  disabled?: boolean;
  prefixCls?: string;
  className?: string;
  dropdownClassName?: string;
}

export const Dropdown = ({
  menu = {
    items: [],
  },
  disabled = false,
  className,
  dropdownClassName,
  prefixCls = PREFIX_CLASS,
  children,
}: PropsWithChildren<DropdownProps>) => {
  // * Hooks
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  // * States
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [dropdownStyle, setDropdownStyle] = useState({});

  const resetStates = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        (!buttonRef.current?.contains(event.target as Node) &&
          !dropdownRef.current?.contains(event.target as Node)) ||
        (!buttonRef.current?.contains(event.target as Node) && !dropdownRef.current)
      ) {
        resetStates();
      }
    };

    const updateDropdownPosition = () => {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        setDropdownStyle({
          position: 'absolute',
          top: rect.bottom + window.scrollY + 'px',
          left: rect.left + window.scrollX + 'px',
          minWidth: rect.width + 'px',
          zIndex: 1000,
        });
      }
    };

    updateDropdownPosition();
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('resize', updateDropdownPosition);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', updateDropdownPosition);
    };
  }, [isOpen]);

  const handleTrigger = () => {
    if (disabled) return;
    setIsOpen(!isOpen);
  };

  const handleMenuClick = ({ key, item, domEvent }: MenuClickProps) => {
    menu?.onClick?.({ key, item, domEvent });
    resetStates();
  };

  if (!children || !React.isValidElement(children)) return null;

  const enhancedChildren = cloneElement(children, {
    ref: buttonRef,
    className: clsx(
      (children.props as Record<string, any>)?.className,
      `${prefixCls}-dropdown-trigger`,
      className,
      {
        [`${prefixCls}-dropdown-open`]: isOpen,
      }
    ),
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      event.stopPropagation();
      (children.props as Record<string, any>)?.onClick?.(event);
      handleTrigger();
    },
  });

  const { menuItems, menuHeaderItems } = useMemo(() => {
    return {
      menuItems: menu.items?.filter((item) => item.type !== 'header') || [],
      menuHeaderItems: menu.items?.filter((item) => item.type === 'header') || [],
    };
  }, [menu.items]);

  return (
    <>
      {enhancedChildren}

      {isOpen &&
        createPortal(
          <div
            ref={dropdownRef}
            style={dropdownStyle}
            className={clsx(`${prefixCls}-dropdown`, 'scroller', dropdownClassName)}
          >
            <div className={clsx(`${prefixCls}-dropdown-menu`, menu?.className)}>
              {menuHeaderItems.map((item, headerItemIndex) => (
                <div
                  key={item.key || headerItemIndex}
                  className={clsx(`${prefixCls}-dropdown-menu-header`)}
                >
                  {item.label}
                </div>
              ))}

              {!!menuItems.length && (
                <ul className={clsx(`${prefixCls}-dropdown-menu-items`, menu?.itemsClassName)}>
                  {menuItems.map((item, itemIndex) => {
                    if (item.type === 'divider') {
                      return (
                        <li
                          key={itemIndex}
                          className={clsx(`${prefixCls}-dropdown-menu-item-divider`)}
                        />
                      );
                    }
                    if (item.type === 'button') {
                      return (
                        <li
                          key={item.key || itemIndex}
                          className={clsx(`${prefixCls}-dropdown-menu-item`, {
                            [`${prefixCls}-dropdown-menu-item-button`]: item.type === 'button',
                            [`${prefixCls}-dropdown-menu-item-disabled`]: item.disabled,
                          })}
                        >
                          {cloneElement(item.label, {
                            onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
                              if (!item.disabled) {
                                handleMenuClick({
                                  key: item.key,
                                  item: item,
                                  domEvent: event,
                                });
                              }
                            },
                          })}
                        </li>
                      );
                    }
                    return (
                      <li
                        key={item.key || itemIndex}
                        className={clsx(`${prefixCls}-dropdown-menu-item`, {
                          [`${prefixCls}-dropdown-menu-item-disabled`]: item.disabled,
                        })}
                      >
                        <div
                          onClick={(event) => {
                            if (!item.disabled) {
                              handleMenuClick({
                                key: item.key,
                                item: item,
                                domEvent: event,
                              });
                            }
                          }}
                          className={clsx(`${prefixCls}-dropdown-menu-item-content`)}
                        >
                          {item.icon}
                          {item.label}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>,
          document.body
        )}
    </>
  );
};
