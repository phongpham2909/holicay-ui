import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'fill' | 'stroke'> {
  /**
   * @default "currentColor"
   */
  fill?: string & {};
  stroke?: string & {};
}
const SvgLayers = (
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
      <g fill={fill} clipPath="url(#Layers_svg__a)">
        <path
          d="m.363 13.695.059-8.726c.01-1.58 1.114-2.934 2.64-3.236l8.426-1.67c2.025-.402 3.904 1.183 3.891 3.28l-.058 8.727c-.01 1.579-1.115 2.932-2.64 3.235l-8.427 1.67c-2.025.402-3.904-1.183-3.89-3.28"
          opacity={0.2}
        />
        <path
          d="m4.492 17.176.058-8.727c.01-1.578 1.115-2.932 2.64-3.234l8.427-1.67c2.025-.402 3.904 1.182 3.89 3.28l-.058 8.727c-.01 1.579-1.115 2.932-2.64 3.235l-8.427 1.67c-2.024.401-3.904-1.183-3.89-3.28z"
          opacity={0.5}
        />
        <path
          d="m8.621 20.658.058-8.728c.01-1.58 1.115-2.932 2.64-3.235l8.427-1.67c2.025-.402 3.904 1.183 3.89 3.28l-.058 8.727c-.01 1.58-1.115 2.933-2.64 3.235l-8.427 1.67c-2.024.402-3.904-1.183-3.89-3.28"
          opacity={0.8}
        />
      </g>
      <defs>
        <clipPath id="Layers_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgLayers);
export default ForwardRef;
