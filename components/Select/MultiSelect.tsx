import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';
import { isEmpty } from 'lodash';
import { PREFIX_CLASS } from '@/variables/app';

import { Tag } from '../Tag';
import { Checkbox } from '../Checkbox';
import { Option, RawValue } from './Select';
import { SelectSize, SelectStatus, SIZE_MD } from './constants';

export type MultiSelectValue = RawValue[] | null;

export interface MultiSelectProps {
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
   * @default (value) => value.join(',')
   */
  value?: MultiSelectValue;
  options: Option[];
  onChange?: (value: MultiSelectValue) => void;
  onSearch?: (value: string) => void;
  onClear?: () => void;
}

export const MultiSelect = ({
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
}: MultiSelectProps) => {
  // * Hooks
  const selectRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);
  const selectedTagsRef = useRef<(HTMLDivElement | null)[]>([]);
  const optionRefs = useRef<(HTMLLIElement | HTMLDivElement | null)[]>([]);
  // * States
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [valueSearch, setValueSearch] = useState('');
  const [selectedValues, setSelectedValues] = useState(value || []);
  const [visibleTags, setVisibleTags] = useState<RawValue[]>([]);
  const [hiddenTagCount, setHiddenTagCount] = useState(0); // Dynamically updated
  const [optionsFromProp, setOptionsFromProp] = useState<Option[]>([]);
  const [dropdownStyle, setDropdownStyle] = useState({});
  const [highlightedIndex, setHighlightedIndex] = useState(-1); // Track highlighted option

  const showSearchInDropdown =
    (dropdownShowSearch && !showSearch) || (dropdownShowSearch && showSearch);

  useEffect(() => {
    const updateVisibleTags = () => {
      if (!tagsRef.current || !selectedTagsRef.current) return;

      const containerWidth = tagsRef.current.getBoundingClientRect().width;
      const selectedTags = selectedTagsRef.current as HTMLElement[];

      let totalTagsWidth = 0;
      let visibleCount = 0;

      // Get the width of the hidden count indicator (if present)
      const hiddenTagIndicator = tagsRef.current.querySelector(
        '.hlc-select-selection-overflow-item-rest'
      ) as HTMLElement;
      const hiddenTagIndicatorWidth = hiddenTagIndicator?.getBoundingClientRect().width || 0;

      // Get the width of the search indicator (if present)
      const searchIndicator = tagsRef.current.querySelector(
        '.hlc-select-selection-overflow-item-suffix'
      ) as HTMLElement;
      searchIndicator.style.width = '4px';
      const searchIndicatorWidth = searchIndicator?.getBoundingClientRect().width || 0;

      for (const tag of selectedTags) {
        const tagWidth = tag.getBoundingClientRect().width;
        // Check if the next tag can fit within the available space
        if (
          totalTagsWidth + tagWidth + hiddenTagIndicatorWidth + searchIndicatorWidth >
          containerWidth
        ) {
          break;
        }
        totalTagsWidth += tagWidth;
        visibleCount++;
      }

      const selectedTagValues = (selectedValues as RawValue[]) || [];
      setVisibleTags(selectedTagValues.slice(0, visibleCount));
      setHiddenTagCount(selectedTagValues.length - visibleCount);
    };

    updateVisibleTags();
    window.addEventListener('resize', updateVisibleTags);

    return () => window.removeEventListener('resize', updateVisibleTags);
  }, [selectedValues]);

  useEffect(() => {
    const updateSearchIndicator = () => {
      if (!tagsRef.current || !selectedTagsRef.current) return;

      const containerWidth = tagsRef.current.getBoundingClientRect().width;
      const selectedTags = selectedTagsRef.current as HTMLElement[];

      // Get the width of the search indicator (if present)
      const searchIndicator = tagsRef.current.querySelector(
        '.hlc-select-selection-overflow-item-suffix'
      ) as HTMLElement;

      if (searchIndicator) {
        let totalTagsWidth = 0;

        // Get the width of the hidden count indicator (if present)
        const hiddenTagIndicator = tagsRef.current.querySelector(
          '.hlc-select-selection-overflow-item-rest'
        ) as HTMLElement;
        const hiddenTagIndicatorWidth = hiddenTagIndicator?.getBoundingClientRect().width || 0;
        const searchIndicatorWidth = searchIndicator?.getBoundingClientRect().width || 0;

        for (const tag of selectedTags) {
          const tagWidth = tag.getBoundingClientRect().width;
          // Check if the next tag can fit within the available space
          if (
            totalTagsWidth + tagWidth + hiddenTagIndicatorWidth + searchIndicatorWidth >
            containerWidth
          ) {
            break;
          }
          totalTagsWidth += tagWidth;
        }

        if (hiddenTagIndicator) {
          searchIndicator.style.width = `${containerWidth - (totalTagsWidth + hiddenTagIndicatorWidth)}px`;
        }
        if (!hiddenTagIndicator) {
          searchIndicator.style.width = `${containerWidth - totalTagsWidth}px`;
        }
      }
    };

    updateSearchIndicator();
  }, [visibleTags]);

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
            handleMultipleSelect(optionsFromProp[highlightedIndex].value);
          }
          break;
        case 'Backspace':
          if (!showSearchInDropdown && !isEmpty(selectedValues)) {
            setSelectedValues((prevState) => {
              const _selectedValues = prevState as RawValue[];
              return _selectedValues.splice(0, _selectedValues.length - 1);
            });
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
  }, [isOpen, highlightedIndex, optionsFromProp, selectedValues, showSearchInDropdown]);

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

  const handleMultipleSelect = (val: any) => {
    const _selectedValues = selectedValues as RawValue[];
    const newSelectedValues = _selectedValues.includes(val)
      ? _selectedValues.filter((v) => v !== val)
      : [..._selectedValues, val];

    inputRef.current?.focus();

    setSelectedValues(newSelectedValues);
    onChange?.(newSelectedValues);
  };

  const handleRemoveSelected = (val: string) => {
    const _selectedValues = selectedValues as RawValue[];
    const newSelectedValues = _selectedValues.filter((v) => v !== val);

    setSelectedValues(newSelectedValues);
    onChange?.(newSelectedValues);
  };

  const handleClearAll = () => {
    resetStates();
    setVisibleTags([]);
    setHiddenTagCount(0);

    setSelectedValues([]);
    onChange?.([]);
    onClear?.();
  };

  const selectedOptions = useMemo(() => {
    const _selectedValues = selectedValues as RawValue[];
    const _selectedOptions: Option[] = [];

    if (!isEmpty(_selectedValues)) {
      _selectedValues.forEach((v) => {
        const selectedOption = options.find((o) => o.value === v);
        if (!!selectedOption) _selectedOptions.push(selectedOption);
      });
    }

    return _selectedOptions;
  }, [options, selectedValues]);

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

  const renderPlaceholder = !!placeholder && isEmpty(selectedValues) && (
    <span
      className={clsx(`${prefixCls}-select-selection-placeholder`, {
        invisible: !!valueSearch && !dropdownShowSearch,
      })}
    >
      {placeholder}
    </span>
  );

  const renderItemsSelected = useMemo(() => {
    if (!isEmpty(selectedOptions)) {
      const tags: React.JSX.Element[] = selectedOptions.map((tag, tagIndex) => {
        const isVisible = visibleTags.includes(tag.value);
        return (
          <div
            key={tagIndex}
            ref={(el) => {
              if (el) {
                selectedTagsRef.current[tagIndex] = el;
              }
            }}
            style={
              isVisible
                ? {
                    opacity: 1,
                    order: tagIndex,
                  }
                : {
                    opacity: 0,
                    order: tagIndex,
                    height: 0,
                    overflowY: 'hidden',
                    pointerEvents: 'none',
                    position: 'absolute',
                  }
            }
            className={`${prefixCls}-select-selection-overflow-item`}
          >
            <Tag
              size="md"
              label={tag.label}
              title={tag.label}
              closable
              onClose={(e) => {
                e.stopPropagation();
                handleRemoveSelected(tag.value);
              }}
              className={`${prefixCls}-select-selection-item`}
            />
          </div>
        );
      });
      return tags;
    }
    return <></>;
  }, [selectedOptions, visibleTags, handleRemoveSelected]);

  const renderArrow = showArrow && (
    <span aria-hidden="true" className={`${prefixCls}-select-arrow`}>
      <i className="icon icon-chevron-down" />
    </span>
  );

  const renderClearIcon = allowClear && !isEmpty(selectedValues) && (
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
            `${prefixCls}-select-multiple`,
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
            <div ref={tagsRef} className={clsx(`${prefixCls}-select-selection-overflow`)}>
              {renderItemsSelected}

              {hiddenTagCount > 0 && (
                <div
                  style={{ order: selectedOptions.length + 1 }}
                  className={clsx(
                    `${prefixCls}-select-selection-overflow-item`,
                    `${prefixCls}-select-selection-overflow-item-rest`
                  )}
                >
                  <Tag
                    size="md"
                    label={`+${hiddenTagCount}`}
                    title={`+${hiddenTagCount}`}
                    className={`${prefixCls}-select-selection-item`}
                  />
                </div>
              )}

              <div
                style={{ opacity: 1, order: selectedOptions.length + 2, width: 4 }}
                className={clsx(
                  `${prefixCls}-select-selection-overflow-item`,
                  `${prefixCls}-select-selection-overflow-item-suffix`
                )}
              >
                <div className="h-6">{renderSearch}</div>
              </div>
            </div>

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
                    [`${prefixCls}-select-menu-item-selected`]: (
                      selectedValues as RawValue[]
                    ).includes(option.value),
                    [`${prefixCls}-select-menu-item-disabled`]: option?.disabled,
                    [`${prefixCls}-select-menu-item-highlighted`]: highlightedIndex === optionIndex,
                  })}
                  onMouseEnter={() => setHighlightedIndex(optionIndex)}
                  onMouseLeave={() => setHighlightedIndex(-1)}
                >
                  <Checkbox
                    size={size}
                    value={option.value}
                    checked={(selectedValues as RawValue[]).includes(option.value)}
                    disabled={option.disabled}
                    onChange={(e) => handleMultipleSelect(e.target.value)}
                  >
                    {!!option?.subLabel ? (
                      <span
                        className={clsx(`${prefixCls}-select-menu-item-content`, 'flex gap-x-md')}
                      >
                        <span>{option.label}</span>
                        <span className={`${prefixCls}-select-menu-item-content-sub`}>
                          {option?.subLabel}
                        </span>
                      </span>
                    ) : (
                      <span className={`${prefixCls}-select-menu-item-content`}>
                        {option.label}
                      </span>
                    )}
                  </Checkbox>
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
