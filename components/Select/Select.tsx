import React from 'react';

import { MultiSelect, MultiSelectProps, MultiSelectValue } from './MultiSelect';
import { SingleSelect, SingleSelectProps, SingleSelectValue } from './SingleSelect';

import { SelectMode, SINGLE, MULTIPLE, TAGS } from './constants';

import './select.css';

export type RawValue = string | number;

export type Option = {
  label: string;
  value: string;
  subLabel?: string;
  avatar?: string;
  icon?: string;
  dot?: string | boolean;
  disabled?: boolean;
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
};

export interface SelectProps extends Omit<SingleSelectProps & MultiSelectProps, 'value'> {
  mode?: SelectMode;
  value?: SingleSelectValue | MultiSelectValue;
}

export const Select = ({ mode = SINGLE, value, ...otherProps }: SelectProps) => {
  if (mode === MULTIPLE || mode === TAGS) {
    return <MultiSelect {...otherProps} value={Array.isArray(value) ? value : null} />;
  }

  return <SingleSelect {...otherProps} />;
};
