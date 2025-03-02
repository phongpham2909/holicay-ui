import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'fill' | 'stroke'> {
  /**
   * @default "currentColor"
   */
  fill?: string & {};
  stroke?: string & {};
}
const SvgFacebook = (
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
      <g clipPath="url(#Facebook_svg__a)">
        <path
          fill={fill}
          d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854V15.47H7.078V12h3.047V9.356c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.234 2.686.234v2.953H15.83c-1.491 0-1.956.925-1.956 1.875V12h3.328l-.532 3.469h-2.796v8.385C19.612 22.954 24 17.99 24 12"
        />
      </g>
      <defs>
        <clipPath id="Facebook_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFacebook);
export default ForwardRef;
