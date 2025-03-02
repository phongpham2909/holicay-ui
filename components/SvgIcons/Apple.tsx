import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'fill' | 'stroke'> {
  /**
   * @default "currentColor"
   */
  fill?: string & {};
  stroke?: string & {};
}
const SvgApple = (
  { fill: fillProp = 'currentColor', stroke: strokeProp, ...props }: IconProps,
  ref: Ref<SVGSVGElement>
) => {
  const fill = fillProp;
  const stroke = strokeProp;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill={fill}
      viewBox="0 0 24 24"
      stroke={stroke}
      ref={ref}
      {...props}
    >
      <path
        fill={fill}
        d="M20.843 17.145a12 12 0 0 1-1.183 2.127q-.934 1.33-1.524 1.841-.912.839-1.958.862-.753.001-1.809-.432-1.058-.43-1.947-.43-.933 0-2.003.43-1.07.434-1.73.455-1.005.043-2.003-.885-.638-.555-1.593-1.907-1.025-1.441-1.685-3.347-.708-2.06-.708-3.99 0-2.212.957-3.811A5.6 5.6 0 0 1 5.66 6.03a5.4 5.4 0 0 1 2.71-.764q.795.001 2.095.487 1.295.488 1.661.489.275 0 1.843-.576 1.481-.532 2.505-.444 2.777.223 4.166 2.193-2.482 1.506-2.458 4.21.023 2.107 1.525 3.5.68.645 1.524 1-.183.53-.388 1.019M16.598.44q0 1.651-1.204 3.079c-.966 1.13-2.136 1.783-3.404 1.68a3 3 0 0 1-.026-.417c0-1.056.46-2.186 1.277-3.11A4.9 4.9 0 0 1 14.796.504q.94-.46 1.778-.504.024.22.023.44"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgApple);
export default ForwardRef;
