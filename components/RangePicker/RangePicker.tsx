import React from 'react';
import moment from 'moment';
import clsx from 'clsx';
import ReactDatePicker, { DatePickerProps as ReactDatePickerProps } from 'react-datepicker';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { PREFIX_CLASS } from '@/variables/app';

import 'react-datepicker/dist/react-datepicker.css';

import './range-picker.css';

export type RangePickerSize = 'sm' | 'md' | 'lg';
export type RangePickerValue = [Date | null, Date | null];

export interface RangeDatePickerProps extends Omit<ReactDatePickerProps, 'value' | 'onChange'> {
  size?: RangePickerSize;
  value?: RangePickerValue;
  onChange?: (date: RangePickerValue) => void;
  prefixCls?: string;
  renderExtraFooter?: () => React.ReactNode;
}

export const RangePicker = ({
  size = 'lg',
  open,
  value = [null, null],
  renderExtraFooter,
  monthsShown = 2,
  className,
  popperClassName,
  wrapperClassName,
  prefixCls = PREFIX_CLASS,
  ...rest
}: RangeDatePickerProps) => {
  const [startDate, endDate] = value;

  return (
    // @ts-ignore
    <ReactDatePicker
      {...rest}
      portalId="root"
      dateFormat="DD-MM-YYYY"
      open={open}
      selected={startDate}
      startDate={startDate}
      endDate={endDate}
      selectsRange
      monthsShown={monthsShown}
      calendarStartDay={1}
      disabledKeyboardNavigation
      focusSelectedMonth={false}
      showPopperArrow={false}
      renderCustomHeader={({
        monthDate,
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
              {moment(monthDate).format('MMMM YYYY')}
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
          <span className="flex items-center gap-x-xs">
            <span
              className={clsx({
                'text-base-subtle': !startDate,
              })}
            >
              {!!startDate ? moment(startDate).format('MMM DD, YYYY') : 'Start date'}
            </span>
            <span>-</span>
            <span
              className={clsx({
                'text-base-subtle': !endDate,
              })}
            >
              {!!endDate ? moment(endDate).format('MMM DD, YYYY') : 'End date'}
            </span>
          </span>
        </Button>
      }
      popperPlacement="bottom-end"
      popperClassName={clsx(`${prefixCls}-range-picker-popper`, popperClassName)}
      wrapperClassName={clsx(`${prefixCls}-range-picker-wrapper`, wrapperClassName)}
      className={clsx(`${prefixCls}-range-picker-input`, className)}
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
