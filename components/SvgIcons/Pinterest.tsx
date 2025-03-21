import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'fill' | 'stroke'> {
  /**
   * @default "currentColor"
   */
  fill?: string & {};
  stroke?: string & {};
}
const SvgPinterest = (
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
      <g clipPath="url(#Pinterest_svg__a)">
        <path
          fill={fill}
          d="M12 0C5.372 0 0 5.372 0 12c0 5.086 3.164 9.427 7.627 11.175-.104-.952-.202-2.405.042-3.44.22-.938 1.406-5.963 1.406-5.963s-.36-.717-.36-1.781c0-1.67.965-2.916 2.17-2.916 1.021 0 1.518.769 1.518 1.692 0 1.031-.656 2.569-.994 3.994-.28 1.195.6 2.17 1.777 2.17 2.133 0 3.773-2.25 3.773-5.494 0-2.873-2.062-4.884-5.01-4.884-3.413 0-5.42 2.56-5.42 5.208 0 1.031.4 2.137.896 2.737a.36.36 0 0 1 .084.343c-.089.38-.295 1.195-.332 1.359-.052.22-.174.267-.404.16-1.5-.7-2.437-2.888-2.437-4.65 0-3.788 2.752-7.262 7.926-7.262 4.163 0 7.397 2.968 7.397 6.933 0 4.135-2.606 7.463-6.225 7.463-1.214 0-2.357-.633-2.751-1.378 0 0-.6 2.292-.745 2.854-.272 1.04-1.004 2.349-1.491 3.146C9.572 23.812 10.763 24 12 24c6.628 0 12-5.372 12-12S18.628 0 12 0"
        />
      </g>
      <defs>
        <clipPath id="Pinterest_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPinterest);
export default ForwardRef;
