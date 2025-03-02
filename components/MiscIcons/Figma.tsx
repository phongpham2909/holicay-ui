import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgFigma = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <g clipPath="url(#Figma_svg__a)">
      <path fill="#24CB71" d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4" />
      <path fill="#874FFF" d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4" />
      <path fill="#FF3737" d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4" />
      <path fill="#FF7237" d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4z" />
      <path fill="#00B6FF" d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4" />
    </g>
    <defs>
      <clipPath id="Figma_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SvgFigma);
export default ForwardRef;
