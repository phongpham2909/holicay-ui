import React, { useState } from 'react';
import moment from 'moment';
import clsx from 'clsx';
import ReactDatePicker, { DatePickerProps as ReactDatePickerProps } from 'react-datepicker';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { PREFIX_CLASS } from '@/variables/app';

import 'react-datepicker/dist/react-datepicker.css';

import './date-picker.css';

export type DatePickerSize = 'sm' | 'md' | 'lg';
export type DatePickerValue = Date | null;

export interface DatePickerProps extends Omit<ReactDatePickerProps, 'value' | 'onChange'> {
  size?: DatePickerSize;
  value?: DatePickerValue;
  onChange?: (date: DatePickerValue) => void;
  prefixCls?: string;
  renderExtraFooter?: () => React.ReactNode;
}

export const DatePicker = ({
  open,
  size = 'lg',
  value,
  placeholderText = 'Select date',
  renderExtraFooter,
  popperClassName,
  wrapperClassName,
  prefixCls = PREFIX_CLASS,
  ...rest
}: DatePickerProps) => {
  return (
    // @ts-ignore
    <ReactDatePicker
      {...rest}
      portalId="root"
      dateFormat="DD-MM-YYYY"
      open={open}
      selected={value}
      calendarStartDay={1}
      showPopperArrow={false}
      renderCustomHeader={({
        date,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => {
        return (
          <div className="flex items-center justify-between">
            <Button
              size="sm"
              type="text"
              color="gray"
              prefixIcon={<Icon name="icon-chevron-left" size="xl" />}
              onClick={decreaseMonth}
              disabled={prevMonthButtonDisabled}
            />
            <p className="text-base font-semibold font-primary text-base-secondary">
              {moment(date).format('MMMM YYYY')}
            </p>
            <Button
              size="sm"
              type="text"
              color="gray"
              prefixIcon={<Icon name="icon-chevron-right" size="xl" />}
              onClick={increaseMonth}
              disabled={nextMonthButtonDisabled}
            />
          </div>
        );
      }}
      customInput={
        <Button
          size={size}
          type="secondary"
          color="gray"
          prefixIcon={<Icon name="icon-calendar" size="xl" />}
          className={clsx({
            [`${prefixCls}-range-picker-open`]: open,
          })}
        >
          {!!value ? moment(value).format('MMM DD, YYYY') : placeholderText}
        </Button>
      }
      popperPlacement="bottom-end"
      popperClassName={clsx(`${prefixCls}-date-picker-popper`, popperClassName)}
      wrapperClassName={clsx(`${prefixCls}-date-picker-wrapper`, wrapperClassName)}
      className={clsx(`${prefixCls}-date-picker-input`)}
    >
      {!!renderExtraFooter && (
        <div
          className="inline-flex border-t border-base-secondary rounded-b-lg p-xl w-full"
          onMouseDown={(e) => e.stopPropagation()}
        >
          {renderExtraFooter()}
        </div>
      )}
    </ReactDatePicker>
  );
};
