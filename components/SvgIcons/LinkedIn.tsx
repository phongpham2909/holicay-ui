import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'fill' | 'stroke'> {
  /**
   * @default "currentColor"
   */
  fill?: string & {};
  stroke?: string & {};
}
const SvgLinkedIn = (
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
      <g clipPath="url(#LinkedIn_svg__a)">
        <path
          fill={fill}
          d="M22.223 0H1.772C.792 0 0 .773 0 1.73v20.536C0 23.222.792 24 1.772 24h20.451c.98 0 1.777-.778 1.777-1.73V1.73C24 .773 23.203 0 22.223 0M7.12 20.452H3.558V8.995H7.12zM5.34 7.434a2.064 2.064 0 1 1 0-4.125 2.063 2.063 0 0 1 0 4.125m15.112 13.018h-3.558v-5.57c0-1.326-.024-3.037-1.852-3.037-1.851 0-2.133 1.449-2.133 2.944v5.663H9.356V8.995h3.413v1.566h.047c.473-.9 1.636-1.852 3.365-1.852 3.605 0 4.27 2.372 4.27 5.457z"
        />
      </g>
      <defs>
        <clipPath id="LinkedIn_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgLinkedIn);
export default ForwardRef;
