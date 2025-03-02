import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgTwitter = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <path
      fill="#242E36"
      fillRule="evenodd"
      d="m15.946 23-5.55-7.91L3.449 23H.509l8.583-9.769L.51 1h7.546l5.23 7.455L19.839 1h2.94l-8.185 9.317L23.491 23zm3.272-2.23H17.24L4.718 3.23h1.98l5.014 7.023.867 1.219z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgTwitter);
export default ForwardRef;
