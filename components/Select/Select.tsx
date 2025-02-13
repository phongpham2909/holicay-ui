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
  name?: string;
  label?: string;
  placeholder?: string;
  helperText?: string;
  prefixCls?: string;
  disabled?: boolean;
  required?: boolean;
  allowClear?: boolean;
  clearIcon?: React.ReactElement;
  showArrow?: boolean;
  showSearch?: boolean;
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
  required = false,
  showArrow = true,
  showSearch = false,
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
    setValueSearch(val);
    const filteredOptions = options.filter(
      (option) =>
        option.label.toLowerCase().includes(val.toLowerCase()) ||
        option?.subLabel?.toLowerCase().includes(val.toLowerCase())
    );
    setIsOpen(!isEmpty(filteredOptions));
    setOptionsFromProp(filteredOptions);
    onSearch?.(val);
  };

  const resetStates = () => {
    setIsOpen(false);
    setIsFocused(false);
    setValueSearch('');
    setOptionsFromProp(options);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        resetStates();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && selectRef.current) {
      const rect = selectRef.current.getBoundingClientRect();
      setDropdownStyle({
        position: 'absolute',
        top: rect.bottom + window.scrollY + 'px',
        left: rect.left + window.scrollX + 'px',
        width: rect.width + 'px',
        zIndex: 1000,
      });
      setOptionsFromProp(options);
    }
  }, [isOpen]);

  const handleSelect = (val: string) => {
    setSelectedValue(val);
    onChange?.(val);
    resetStates();
  };

  const itemSelected = optionsFromProp.find((o) => o.value === selectedValue);

  return (
    <>
      <div
        className={clsx(`${prefixCls}-select-wrapper`, {
          [`${prefixCls}-select-status-${status}`]: !!status,
          [`${prefixCls}-select-wrapper-disabled`]: disabled,
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
                  'text-brand-red-primary_disabled': disabled,
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
            [`${prefixCls}-select-disabled`]: disabled,
            [`${prefixCls}-select-single`]: mode === 'single',
            [`${prefixCls}-select-multiple`]: mode === 'multiple' || mode === 'tags',
            [`${prefixCls}-select-show-arrow`]: showArrow,
            [`${prefixCls}-select-show-search`]: showSearch,
          })}
        >
          <div className={`${prefixCls}-select-selector`} onClick={handleFocus}>
            <span className={`${prefixCls}-select-selection-search`}>
              <input
                type="text"
                autoComplete="off"
                disabled={disabled}
                value={valueSearch}
                onChange={(e) => handleSearch(e.target.value)}
                className={`${prefixCls}-select-selection-search-input`}
              />
            </span>
            {!!itemSelected && (
              <span
                className={clsx(`${prefixCls}-select-selection-item`, {
                  invisible: !!valueSearch,
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
                  invisible: !!valueSearch,
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
          <div className={`${prefixCls}-select-dropdown`} ref={dropdownRef} style={dropdownStyle}>
            <ul className={`${prefixCls}-select-menu`}>
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
            </ul>
          </div>,
          document.body
        )}
    </>
  );
};
