import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgLinkedIn = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <g clipPath="url(#LinkedIn_svg__a)">
      <path
        fill="#0A66C2"
        d="M22.228 0H1.772A1.77 1.77 0 0 0 0 1.772v20.456A1.77 1.77 0 0 0 1.772 24h20.456A1.77 1.77 0 0 0 24 22.228V1.772A1.77 1.77 0 0 0 22.228 0M7.153 20.445H3.545V8.983h3.608zM5.347 7.395a2.072 2.072 0 1 1 2.083-2.07 2.04 2.04 0 0 1-2.083 2.07m15.106 13.06h-3.606v-6.262c0-1.846-.785-2.416-1.799-2.416-1.07 0-2.12.806-2.12 2.463v6.215H9.32V8.992h3.47v1.588h.047c.348-.705 1.568-1.91 3.43-1.91 2.013 0 4.188 1.195 4.188 4.695z"
      />
    </g>
    <defs>
      <clipPath id="LinkedIn_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SvgLinkedIn);
export default ForwardRef;
