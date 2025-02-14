import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';
import { isEmpty } from 'lodash';
import { PREFIX_CLASS } from '@/variables/app';

import './select.css';

export type Option = {
  label: string;
  value: string;
  subLabel?: string;
  disabled?: boolean;
  suffix?: React.ReactElement;
  prefix?: React.ReactElement;
};

export interface SelectProps {
  type?: 'icon' | 'dot' | 'avatar';
  mode: 'single' | 'multiple' | 'tags';
  status?: 'error' | 'warning';
  size?: 'sm' | 'md' | 'lg';
  name?: string;
  label?: string;
  placeholder?: string;
  helperText?: string;
  prefixCls?: string;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  allowClear?: boolean;
  clearIcon?: React.ReactElement;
  showArrow?: boolean;
  showSearch?: boolean;
  dropdownShowSearch?: boolean;
  dropdownSearchPlaceholder?: string;
  value?: string;
  options: Option[];
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
}

export const Select = ({
  value,
  onChange,
  onSearch,
  options = [],
  mode = 'single',
  status,
  name,
  label,
  helperText,
  disabled = false,
  readOnly = false,
  required = false,
  showArrow = true,
  showSearch = true,
  dropdownShowSearch = false,
  dropdownSearchPlaceholder = 'Search...',
  placeholder = 'Select...',
  prefixCls = PREFIX_CLASS,
}: SelectProps) => {
  // * Hooks
  const selectRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  // * States
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [valueSearch, setValueSearch] = useState('');
  const [selectedValue, setSelectedValue] = useState(value || '');
  const [optionsFromProp, setOptionsFromProp] = useState<Option[]>([]);
  const [dropdownStyle, setDropdownStyle] = useState({});

  const handleFocus = () => {
    if (disabled) return;
    setIsOpen(!isOpen);
    setIsFocused(true);
    selectRef?.current?.focus();
  };

  const handleSearch = (val: string) => {
    setValueSearch(val.trimStart());
    const filteredOptions = options.filter(
      (option) =>
        option.label.toLowerCase().includes(val.toLowerCase()) ||
        option?.subLabel?.toLowerCase().includes(val.toLowerCase())
    );
    if (!dropdownShowSearch) {
      setIsOpen(!isEmpty(filteredOptions));
    }
    setOptionsFromProp(filteredOptions);
    onSearch?.(val);
  };

  const resetStates = () => {
    setIsOpen(false);
    setIsFocused(false);
    setValueSearch('');
    setOptionsFromProp(options);
  };

  const updateDropdownPosition = () => {
    if (selectRef.current) {
      const rect = selectRef.current.getBoundingClientRect();
      setDropdownStyle({
        position: 'absolute',
        top: rect.bottom + window.scrollY + 'px',
        left: rect.left + window.scrollX + 'px',
        width: rect.width + 'px',
        zIndex: 1000,
      });
    }
  };

  useEffect(() => {
    if (isOpen && !valueSearch) {
      setOptionsFromProp(options);
    }
    updateDropdownPosition();
    window.addEventListener('resize', updateDropdownPosition);
    return () => window.removeEventListener('resize', updateDropdownPosition);
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        (!selectRef.current?.contains(event.target as Node) &&
          !dropdownRef.current?.contains(event.target as Node)) ||
        (!selectRef.current?.contains(event.target as Node) && !dropdownRef.current)
      ) {
        resetStates();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (val: string) => {
    setSelectedValue(val);
    onChange?.(val);
    resetStates();
  };

  const itemSelected = options.find((o) => o.value === selectedValue);

  return (
    <>
      <div
        className={clsx(`${prefixCls}-select-wrapper`, {
          [`${prefixCls}-select-status-${status}`]: !!status,
          [`${prefixCls}-select-wrapper-disabled`]: disabled && !readOnly,
        })}
      >
        {label && (
          <label
            htmlFor={name}
            className={clsx(`${prefixCls}-select-label`, {
              [`${prefixCls}-select-required`]: required,
            })}
          >
            {label}{' '}
            {required && (
              <span
                className={clsx('text-brand-red-primary', {
                  'text-brand-red-primary_disabled': disabled && !readOnly,
                })}
              >
                *
              </span>
            )}
          </label>
        )}
        <div
          ref={selectRef}
          className={clsx(`${prefixCls}-select`, {
            [`${prefixCls}-select-open`]: isOpen,
            [`${prefixCls}-select-focused`]: isFocused,
            [`${prefixCls}-select-disabled`]: disabled && !readOnly,
            [`${prefixCls}-select-readOnly`]: readOnly,
            [`${prefixCls}-select-single`]: mode === 'single',
            [`${prefixCls}-select-multiple`]: mode === 'multiple' || mode === 'tags',
            [`${prefixCls}-select-show-arrow`]: showArrow,
            [`${prefixCls}-select-show-search`]: showSearch && !dropdownShowSearch,
          })}
        >
          <div className={`${prefixCls}-select-selector`} onClick={handleFocus}>
            {showSearch && !dropdownShowSearch && (
              <span className={`${prefixCls}-select-selection-search`}>
                <input
                  type="text"
                  autoComplete="off"
                  disabled={disabled || readOnly}
                  value={valueSearch}
                  onChange={(e) => handleSearch(e.target.value)}
                  className={`${prefixCls}-select-selection-search-input`}
                />
              </span>
            )}
            {!!itemSelected && (
              <span
                className={clsx(`${prefixCls}-select-selection-item`, {
                  invisible: !!valueSearch && !dropdownShowSearch,
                })}
              >
                {itemSelected?.subLabel ? (
                  <span
                    className={clsx(`${prefixCls}-select-selection-item-content`, 'flex gap-x-md')}
                  >
                    <span>{itemSelected?.label}</span>
                    <span className={`${prefixCls}-select-selection-item-content-sub`}>
                      {itemSelected?.subLabel}
                    </span>
                  </span>
                ) : (
                  itemSelected?.label
                )}
              </span>
            )}
            {placeholder && !itemSelected && (
              <span
                className={clsx(`${prefixCls}-select-selection-placeholder`, {
                  invisible: !!valueSearch && !dropdownShowSearch,
                })}
              >
                {placeholder}
              </span>
            )}
          </div>
          {showArrow && (
            <span className={`${prefixCls}-select-arrow`} aria-hidden="true">
              <i className="icon icon-chevron-down" />
            </span>
          )}
        </div>
        {helperText && <p className={`${prefixCls}-helper-text`}>{helperText}</p>}
      </div>

      {isOpen &&
        createPortal(
          <div
            ref={dropdownRef}
            style={dropdownStyle}
            className={clsx(`${prefixCls}-select-dropdown`, 'scroller', {
              [`${prefixCls}-select-dropdown-show-search`]:
                (dropdownShowSearch && !showSearch) || (dropdownShowSearch && showSearch),
            })}
          >
            {((dropdownShowSearch && !showSearch) || (dropdownShowSearch && showSearch)) && (
              <div className={clsx(`${prefixCls}-select-dropdown-search-box`)}>
                <span className={`${prefixCls}-select-dropdown-search-icon`}>
                  <i className="icon icon-search-md" />
                </span>
                <input
                  type="text"
                  autoComplete="off"
                  placeholder={dropdownSearchPlaceholder}
                  value={valueSearch}
                  onChange={(e) => handleSearch(e.target.value)}
                  className={`${prefixCls}-select-dropdown-search-input`}
                />
              </div>
            )}
            <ul className={clsx(`${prefixCls}-select-menu`, 'scroller')}>
              {optionsFromProp.map((option) => (
                <li
                  key={option.value}
                  className={clsx(`${prefixCls}-select-menu-item`, {
                    [`${prefixCls}-select-menu-item-selected`]: selectedValue === option.value,
                    [`${prefixCls}-select-menu-item-disabled`]: option?.disabled,
                  })}
                  onClick={() => !option?.disabled && handleSelect(option.value)}
                >
                  {!!option?.subLabel ? (
                    <div className={clsx(`${prefixCls}-select-menu-item-content`, 'flex gap-x-md')}>
                      <span>{option.label}</span>
                      <span className={`${prefixCls}-select-menu-item-content-sub`}>
                        {option?.subLabel}
                      </span>
                    </div>
                  ) : (
                    <div className={`${prefixCls}-select-menu-item-content`}>{option.label}</div>
                  )}
                  {selectedValue === option.value && (
                    <span className={`${prefixCls}-select-menu-item-state`}>
                      <i className="icon icon-check" />
                    </span>
                  )}
                </li>
              ))}

              {isEmpty(optionsFromProp) && (
                <li
                  key={`${prefixCls}-select-menu-empty-state`}
                  className={clsx(`${prefixCls}-select-menu-empty-state`)}
                >
                  <p>No results</p>
                </li>
              )}
            </ul>
          </div>,
          document.body
        )}
    </>
  );
};
