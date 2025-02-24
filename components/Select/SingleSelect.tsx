import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';
import { isEmpty } from 'lodash';
import { PREFIX_CLASS } from '@/variables/app';

import { Option, RawValue } from './Select';
import { SelectSize, SelectStatus, SIZE_MD } from './constants';

export type SingleSelectValue = RawValue | null;

export interface SingleSelectProps {
  status?: SelectStatus;
  size?: SelectSize;
  name?: string;
  label?: string;
  placeholder?: string;
  helperText?: string;
  prefixCls?: string;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  allowClear?: boolean;
  clearIcon?: React.ReactNode;
  showArrow?: boolean;
  showSearch?: boolean;
  dropdownShowSearch?: boolean;
  dropdownSearchPlaceholder?: string;
  dropdownClassName?: string;
  className?: string;
  /**
   * @default (value) => value.toString()
   */
  value?: SingleSelectValue;
  options: Option[];
  onChange?: (value: SingleSelectValue) => void;
  onSearch?: (value: string) => void;
  onClear?: () => void;
}

export const SingleSelect = ({
  value,
  onChange,
  onSearch,
  onClear,
  options = [],
  size = SIZE_MD,
  status,
  name,
  label,
  helperText,
  clearIcon,
  allowClear = false,
  disabled = false,
  readOnly = false,
  required = false,
  showArrow = true,
  showSearch = true,
  dropdownShowSearch = false,
  dropdownSearchPlaceholder = 'Search...',
  placeholder = 'Select...',
  className,
  dropdownClassName,
  prefixCls = PREFIX_CLASS,
}: SingleSelectProps) => {
  // * Hooks
  const selectRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const optionRefs = useRef<(HTMLLIElement | HTMLDivElement | null)[]>([]);
  // * States
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [valueSearch, setValueSearch] = useState('');
  const [selectedValue, setSelectedValue] = useState(value || null);
  const [optionsFromProp, setOptionsFromProp] = useState<Option[]>([]);
  const [dropdownStyle, setDropdownStyle] = useState({});
  const [highlightedIndex, setHighlightedIndex] = useState(-1); // Track highlighted option

  const showSearchInDropdown =
    (dropdownShowSearch && !showSearch) || (dropdownShowSearch && showSearch);

  useEffect(() => {
    if (isOpen && !valueSearch) {
      setOptionsFromProp(options);
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (
        (!selectRef.current?.contains(event.target as Node) &&
          !dropdownRef.current?.contains(event.target as Node)) ||
        (!selectRef.current?.contains(event.target as Node) && !dropdownRef.current)
      ) {
        resetStates();
      }
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

    updateDropdownPosition();
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('resize', updateDropdownPosition);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', updateDropdownPosition);
    };
  }, [isOpen]);

  useEffect(() => {
    // ✅ Arrow Down (↓) → Moves the selection down
    // ✅ Arrow Up (↑) → Moves the selection up
    // ✅ Enter (↵) → Selects the highlighted option
    // ✅ Escape (Esc) → Closes the dropdown
    // ✅ Loop Navigation → When at the bottom, pressing ↓ moves to the top; when at the top, pressing ↑ moves to the bottom
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;

      switch (event.key) {
        case 'ArrowDown':
          // Move down
          setHighlightedIndex((prev) => {
            const newIndex = (prev + 1) % options.length;
            scrollToHighlighted(newIndex);
            return newIndex;
          });
          break;
        case 'ArrowUp':
          // Move up
          setHighlightedIndex((prev) => {
            const newIndex = (prev - 1 + options.length) % options.length;
            scrollToHighlighted(newIndex);
            return newIndex;
          });
          break;
        case 'Enter':
          if (highlightedIndex >= 0) {
            if (optionsFromProp[highlightedIndex].disabled) return;
            handleSelect(optionsFromProp[highlightedIndex].value);
          }
          break;
        case 'Escape':
          resetStates();
          break;
        default:
          break;
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, highlightedIndex, optionsFromProp, showSearchInDropdown]);

  const resetStates = () => {
    setIsOpen(false);
    setIsFocused(false);
    setValueSearch('');
    setOptionsFromProp(options);
    setHighlightedIndex(-1);
    inputRef.current?.blur();
  };

  const scrollToHighlighted = (index: number) => {
    if (optionRefs.current[index]) {
      optionRefs.current[index]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  };

  const handleFocus = () => {
    if (disabled) return;
    setIsOpen(!isOpen);
    setIsFocused(true);
    selectRef.current?.focus();
    inputRef.current?.focus();
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

  const handleSelect = (val: string) => {
    setSelectedValue(val);
    onChange?.(val);
    resetStates();
  };

  const handleClearAll = () => {
    setSelectedValue(null);
    onChange?.(null);
    onClear?.();
    resetStates();
  };

  const itemSelected = useMemo(() => {
    return options.find((o) => o.value === selectedValue);
  }, [options, selectedValue]);

  const renderSearch = showSearch && !dropdownShowSearch && (
    <div className={`${prefixCls}-select-selection-search`}>
      <input
        ref={inputRef}
        type="text"
        autoComplete="off"
        disabled={disabled || readOnly}
        value={valueSearch}
        onChange={(e) => handleSearch(e.target.value)}
        className={`${prefixCls}-select-selection-search-input`}
      />
    </div>
  );

  const renderPlaceholder = !!placeholder && !itemSelected && (
    <span
      className={clsx(`${prefixCls}-select-selection-placeholder`, {
        invisible: !!valueSearch && !dropdownShowSearch,
      })}
    >
      {placeholder}
    </span>
  );

  const renderItemSelected = !!itemSelected && (
    <span
      className={clsx(`${prefixCls}-select-selection-item`, {
        invisible: !!valueSearch && !dropdownShowSearch,
      })}
    >
      {itemSelected?.subLabel ? (
        <span className={clsx(`${prefixCls}-select-selection-item-content`, 'flex gap-x-md')}>
          <span>{itemSelected?.label}</span>
          <span className={`${prefixCls}-select-selection-item-content-sub`}>
            {itemSelected?.subLabel}
          </span>
        </span>
      ) : (
        itemSelected?.label
      )}
    </span>
  );

  const renderArrow = showArrow && (
    <span aria-hidden="true" className={`${prefixCls}-select-arrow`}>
      <i className="icon icon-chevron-down" />
    </span>
  );

  const renderClearIcon = allowClear && !isEmpty(selectedValue) && (
    <span
      title="Clear"
      aria-hidden="true"
      className={`${prefixCls}-select-clear`}
      onClick={(e) => {
        e.stopPropagation();
        handleClearAll();
      }}
    >
      {clearIcon || <i className="icon icon-x-close" />}
    </span>
  );

  const renderLabel = !!label && (
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
  );

  const renderHint = !!helperText && <p className={`${prefixCls}-helper-text`}>{helperText}</p>;

  return (
    <>
      <div
        className={clsx(`${prefixCls}-select-wrapper`, {
          [`${prefixCls}-select-status-${status}`]: !!status,
          [`${prefixCls}-select-wrapper-disabled`]: disabled && !readOnly,
        })}
      >
        {renderLabel}

        <div
          ref={selectRef}
          className={clsx(
            `${prefixCls}-select`,
            `${prefixCls}-select-single`,
            `${prefixCls}-select-size-${size}`,
            {
              [`${prefixCls}-select-open`]: isOpen,
              [`${prefixCls}-select-focused`]: isFocused,
              [`${prefixCls}-select-disabled`]: disabled && !readOnly,
              [`${prefixCls}-select-readOnly`]: readOnly,
              [`${prefixCls}-select-show-arrow`]: showArrow,
              [`${prefixCls}-select-allow-clear`]: allowClear,
              [`${prefixCls}-select-show-search`]: showSearch && !dropdownShowSearch,
              [className as string]: !!className,
            }
          )}
        >
          <div className={`${prefixCls}-select-selector`} onClick={handleFocus}>
            {renderSearch}

            {renderItemSelected}

            {renderPlaceholder}
          </div>

          {renderArrow}

          {renderClearIcon}
        </div>

        {renderHint}
      </div>

      {isOpen &&
        createPortal(
          <div
            ref={dropdownRef}
            style={dropdownStyle}
            className={clsx(`${prefixCls}-select-dropdown`, 'scroller', {
              [`${prefixCls}-select-dropdown-show-search`]: showSearchInDropdown,
              [dropdownClassName as string]: !!dropdownClassName,
            })}
          >
            {showSearchInDropdown && (
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
              {optionsFromProp.map((option, optionIndex) => (
                <li
                  key={option.value}
                  title={option.label}
                  ref={(el) => {
                    optionRefs.current[optionIndex] = el;
                  }}
                  className={clsx(`${prefixCls}-select-menu-item`, {
                    [`${prefixCls}-select-menu-item-selected`]: selectedValue === option.value,
                    [`${prefixCls}-select-menu-item-disabled`]: option?.disabled,
                    [`${prefixCls}-select-menu-item-highlighted`]: highlightedIndex === optionIndex,
                  })}
                  onMouseEnter={() => setHighlightedIndex(optionIndex)}
                  onMouseLeave={() => setHighlightedIndex(-1)}
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
