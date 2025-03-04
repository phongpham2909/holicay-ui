import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';
import { PREFIX_CLASS } from '@/variables/app';
import { cloneElement } from '@/utilities';
import { Checkbox } from '../Checkbox';
import { Icon } from '../Icon';

import './dropdown.css';

type PropsWithChildren<P> = P & { children?: React.ReactNode };

export type DropdownPlacement =
  | 'bottom'
  | 'bottomLeft'
  | 'bottomRight'
  | 'top'
  | 'topLeft'
  | 'topRight';

export type DropdownMenuItemType = 'header' | 'footer' | 'divider' | 'button' | 'checkbox';

export interface DropdownMenuItem {
  key?: string;
  label?: React.ReactNode;
  disabled?: boolean;
  type?: DropdownMenuItemType;
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
  activeKey?: string;
  activeKeys?: string[];
  onMultipleSelect?: (keys: string[]) => void;
  className?: string;
  itemsClassName?: string;
}

export interface DropdownProps {
  menu?: DropdownMenu;
  disabled?: boolean;
  prefixCls?: string;
  className?: string;
  dropdownClassName?: string;
  placement?: DropdownPlacement;
}

export const Dropdown = ({
  menu = {
    activeKeys: [],
    items: [],
  },
  disabled = false,
  className,
  dropdownClassName,
  placement = 'bottomRight',
  prefixCls = PREFIX_CLASS,
  children,
}: PropsWithChildren<DropdownProps>) => {
  // * Hooks
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  // * States
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [dropdownStyle, setDropdownStyle] = useState({});
  const [selectedKey, setSelectedKey] = useState(menu.activeKey);
  const [selectedKeys, setSelectedKeys] = useState(menu.activeKeys || []);

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
        let top = rect.bottom + window.scrollY;
        let left = rect.left + window.scrollX;

        const dropdownWidth = dropdownRef.current?.offsetWidth || rect.width;
        const dropdownHeight = dropdownRef.current?.offsetHeight || 0;

        switch (placement) {
          case 'bottomLeft':
            left = rect.left + window.scrollX;
            break;
          case 'bottomRight':
            left = rect.right + window.scrollX - dropdownWidth;
            break;
          case 'top':
            top = rect.top + window.scrollY - dropdownHeight;
            break;
          case 'topLeft':
            top = rect.top + window.scrollY - dropdownHeight;
            left = rect.left + window.scrollX;
            break;
          case 'topRight':
            top = rect.top + window.scrollY - dropdownHeight;
            left = rect.right + window.scrollX - dropdownWidth;
            break;
        }

        setDropdownStyle({
          position: 'absolute',
          top: `${top}px`,
          left: `${left}px`,
          minWidth: `${rect.width}px`,
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
    setSelectedKey(key);
    menu?.onClick?.({ key, item, domEvent });
    resetStates();
  };

  const handleMultipleSelect = (val: string) => {
    const newSelectedValues = selectedKeys.includes(val)
      ? selectedKeys.filter((v) => v !== val)
      : [...selectedKeys, val];

    setSelectedKeys(newSelectedValues);
    menu?.onMultipleSelect?.(newSelectedValues);
  };

  if (!children || !React.isValidElement(children)) return null;

  const enhancedChildren = cloneElement(children, {
    ref: buttonRef,
    disabled,
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

      {createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={dropdownRef}
              style={dropdownStyle}
              className={clsx(`${prefixCls}-dropdown`, 'scroller', dropdownClassName)}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
              exit={{ opacity: 0, y: -8 }}
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
                            className={clsx(
                              `${prefixCls}-dropdown-menu-item`,
                              `${prefixCls}-dropdown-menu-item-${item.type}`,
                              {
                                [`${prefixCls}-dropdown-menu-item-disabled`]: item.disabled,
                              }
                            )}
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
                      if (item.type === 'checkbox') {
                        return (
                          <li
                            key={item.key || itemIndex}
                            className={clsx(
                              `${prefixCls}-dropdown-menu-item`,
                              `${prefixCls}-dropdown-menu-item-${item.type}`,
                              {
                                [`${prefixCls}-dropdown-menu-item-checked`]: selectedKeys.includes(
                                  item.key || ''
                                ),
                                [`${prefixCls}-dropdown-menu-item-disabled`]: item.disabled,
                              }
                            )}
                          >
                            <div className={clsx(`${prefixCls}-dropdown-menu-item-content`)}>
                              <Checkbox
                                size="sm"
                                value={item.key}
                                checked={selectedKeys.includes(item.key || '')}
                                disabled={item.disabled}
                                onChange={(e) => handleMultipleSelect(e.target.value)}
                                rootClassName="w-full !items-center"
                              >
                                <span className={`${prefixCls}-select-menu-item-content`}>
                                  {item.label}
                                </span>
                              </Checkbox>
                            </div>
                          </li>
                        );
                      }
                      return (
                        <li
                          key={item.key || itemIndex}
                          className={clsx(`${prefixCls}-dropdown-menu-item`, {
                            [`${prefixCls}-dropdown-menu-item-selected`]: selectedKey === item.key,
                            [`${prefixCls}-dropdown-menu-item-disabled`]: item.disabled,
                          })}
                          onClick={(event) => {
                            if (!item.disabled) {
                              handleMenuClick({
                                key: item.key,
                                item: item,
                                domEvent: event,
                              });
                            }
                          }}
                        >
                          <div
                            className={clsx(`${prefixCls}-dropdown-menu-item-content`, {
                              'items-center justify-between': selectedKey === item.key,
                            })}
                          >
                            {selectedKey === item.key ? (
                              <>
                                <span>
                                  {item.icon}
                                  {item.label}
                                </span>
                                <span className={`${prefixCls}-dropdown-menu-item-state`}>
                                  <Icon name="icon-check" size="xl" />
                                </span>
                              </>
                            ) : (
                              <>
                                {item.icon}
                                {item.label}
                              </>
                            )}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};
