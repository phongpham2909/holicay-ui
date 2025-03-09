import React from 'react';
import clsx from 'clsx';
import * as RadixUIProgress from '@radix-ui/react-progress';
import { PREFIX_CLASS } from '@/variables/app';

import './progress-bar.css';

export interface ProgressBarProps extends RadixUIProgress.ProgressProps {
  prefixCls?: string;
}

export const ProgressBar = ({
  value,
  className,
  prefixCls = PREFIX_CLASS,
  ...rest
}: ProgressBarProps) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(value || 0), 500);
    return () => clearTimeout(timer);
  }, [value]);

  return (
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
  );
};
