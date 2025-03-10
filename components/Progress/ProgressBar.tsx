import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import * as RadixUIProgress from '@radix-ui/react-progress';
import { PREFIX_CLASS } from '@/variables/app';

import './progress-bar.css';

type TooltipPlacement = 'top' | 'bottom' | 'right' | 'left' | 'bottomRight';

interface ProgressBarTooltip {
  showArrow?: boolean;
  placement?: TooltipPlacement;
  formatter?: (value: number) => React.ReactNode | null;
  formatterLabel?: (value: number) => React.ReactNode | null;
}

export interface ProgressBarProps extends RadixUIProgress.ProgressProps {
  tooltip?: ProgressBarTooltip;
  prefixCls?: string;
  wrapperClassName?: string;
}

export const ProgressBar = ({
  tooltip = {
    showArrow: true,
    placement: 'bottom',
    formatter: (v) => `${v}%`,
  },
  value,
  className,
  wrapperClassName,
  prefixCls = PREFIX_CLASS,
  ...rest
}: ProgressBarProps) => {
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  const progressZero = 2.5;

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(value === 0 ? progressZero : value || progressZero);
    }, 500);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div className={clsx(`${prefixCls}-progress-bar-wrapper`, wrapperClassName)}>
      {!!tooltip?.formatter && (
        <div
          ref={tooltipRef}
          className={clsx(`${prefixCls}-progress-bar-tooltip`, {
            [`${prefixCls}-tooltip-placement-${tooltip?.placement}`]: !!tooltip?.placement,
          })}
          style={{
            left:
              progress === progressZero
                ? -16
                : `calc(${progress}% - ${Math.round(Number(tooltipRef.current?.offsetWidth) / 2)}px)`,
          }}
        >
          {tooltip?.formatter(progress === progressZero ? 0 : progress)}

          {!!tooltip?.showArrow && <div className={`${prefixCls}-tooltip-arrow`} />}
        </div>
      )}

      <RadixUIProgress.Root
        {...rest}
        value={progress}
        className={clsx(`${prefixCls}-progress-bar`, className)}
      >
        <RadixUIProgress.Indicator
          className={`${prefixCls}-progress-bar-indicator`}
          style={{ transform: `translateX(-${100 - progress}%)` }}
        />
      </RadixUIProgress.Root>

      {!!tooltip?.formatterLabel && (
        <div
          ref={tooltipRef}
          className={clsx(`${prefixCls}-progress-bar-tooltip-label`, {
            [`${prefixCls}-tooltip-label-placement-${tooltip?.placement}`]: !!tooltip?.placement,
          })}
        >
          {tooltip?.formatterLabel(progress === progressZero ? 0 : progress)}
        </div>
      )}
    </div>
  );
};
