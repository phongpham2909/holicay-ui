import React, { Fragment } from 'react';
import clsx from 'clsx';
import * as RadixUISlider from '@radix-ui/react-slider';

import { PREFIX_CLASS } from '@/variables/app';

import './slider.css';

type TooltipPlacement = 'top' | 'bottom';

interface SliderTooltip {
  placement?: TooltipPlacement;
  formatter?: (value: number) => React.ReactNode | null;
  formatterLabel?: (value: number) => React.ReactNode | null;
}

export interface SliderProps extends Omit<RadixUISlider.SliderProps, 'onChange'> {
  tooltip?: SliderTooltip;
  prefixCls?: string;
  className?: string;
  onChange?(value: number[]): void;
}

export const Slider: React.FC<SliderProps> = ({
  tooltip = {
    placement: 'top',
  },
  min = 0,
  max = 100,
  value: sliderValues = [],
  onChange,
  className,
  prefixCls = PREFIX_CLASS,
  ...rest
}) => {
  const renderThumb = (value?: number) => {
    const sliderValue = Number(value);
    return (
      <RadixUISlider.Thumb className={`${prefixCls}-slider-thumb`}>
        {!tooltip?.formatterLabel && !!tooltip?.formatter && (
          <div
            className={clsx(`${prefixCls}-tooltip`, {
              [`${prefixCls}-tooltip-placement-${tooltip?.placement}`]: !!tooltip?.placement,
            })}
          >
            {tooltip?.formatter(sliderValue)}

            <div className={`${prefixCls}-tooltip-arrow`} />
          </div>
        )}
        {!!tooltip?.formatterLabel && !tooltip?.formatter && (
          <div
            style={{
              left: sliderValue === max ? '-20px' : sliderValue === min ? '0px' : '-5px',
            }}
            className={clsx(`${prefixCls}-tooltip-label`, {
              [`${prefixCls}-tooltip-placement-${tooltip?.placement}`]: !!tooltip?.placement,
            })}
          >
            {tooltip?.formatterLabel(sliderValue)}
          </div>
        )}
      </RadixUISlider.Thumb>
    );
  };

  return (
    <RadixUISlider.Root
      {...rest}
      min={min}
      max={max}
      value={sliderValues}
      onValueChange={onChange}
      className={clsx(`${prefixCls}-slider`, className)}
    >
      <RadixUISlider.Track className={`${prefixCls}-slider-track`}>
        <RadixUISlider.Range className={`${prefixCls}-slider-range`} />
      </RadixUISlider.Track>

      {sliderValues.map((v, index) => (
        <Fragment key={index}>{renderThumb(v)}</Fragment>
      ))}
    </RadixUISlider.Root>
  );
};
