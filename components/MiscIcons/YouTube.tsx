import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgYouTube = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <g clipPath="url(#YouTube_svg__a)">
      <path
        fill="#FF0302"
        d="M23.522 6.185A3.02 3.02 0 0 0 21.4 4.05c-1.877-.505-9.377-.505-9.377-.505s-7.5 0-9.376.505A3.02 3.02 0 0 0 .525 6.185C.023 8.07.023 12 .023 12s0 3.93.502 5.815a3.02 3.02 0 0 0 2.122 2.135c1.876.505 9.376.505 9.376.505s7.5 0 9.377-.505a3.02 3.02 0 0 0 2.122-2.135c.501-1.885.501-5.815.501-5.815s0-3.93-.501-5.815"
      />
      <path fill="#FEFEFE" d="M9.57 15.569V8.43L15.841 12z" />
    </g>
    <defs>
      <clipPath id="YouTube_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SvgYouTube);
export default ForwardRef;
