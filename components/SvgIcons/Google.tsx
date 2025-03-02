import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'fill' | 'stroke'> {
  /**
   * @default "currentColor"
   */
  fill?: string & {};
  stroke?: string & {};
}
const SvgGoogle = (
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
      <g clipPath="url(#Google_svg__a)">
        <path
          fill={fill}
          fillRule="evenodd"
          d="M16.842 6.548a6.52 6.52 0 0 0-4.603-1.8c-3.13 0-5.79 2.113-6.737 4.957a7.2 7.2 0 0 0 0 4.594h.004c.952 2.84 3.607 4.952 6.737 4.952 1.616 0 3.004-.413 4.08-1.143v-.003a5.55 5.55 0 0 0 2.398-3.647h-6.482v-4.62h11.319c.14.802.207 1.622.207 2.438 0 3.65-1.304 6.735-3.574 8.825l.002.002C18.205 22.937 15.475 24 12.24 24a12 12 0 0 1-10.724-6.61 12.01 12.01 0 0 1 0-10.776A12 12 0 0 1 12.24 0a11.53 11.53 0 0 1 8.03 3.122z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="Google_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgGoogle);
export default ForwardRef;
