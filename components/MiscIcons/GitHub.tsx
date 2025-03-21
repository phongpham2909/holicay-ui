import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgGitHub = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <g clipPath="url(#GitHub_svg__a)">
      <path
        fill="#000"
        fillRule="evenodd"
        d="M12 0C5.372 0 0 5.38 0 12.02a12.02 12.02 0 0 0 8.207 11.405c.6.11.818-.26.818-.58 0-.284-.01-1.041-.015-2.043-3.339.726-4.043-1.612-4.043-1.612-.545-1.39-1.332-1.759-1.332-1.759-1.09-.744.083-.73.083-.73 1.203.085 1.837 1.239 1.837 1.239 1.07 1.836 2.809 1.306 3.492.998.11-.776.42-1.305.763-1.605-2.664-.304-5.466-1.336-5.466-5.941 0-1.312.468-2.386 1.235-3.226-.124-.304-.535-1.526.117-3.18 0 0 1.008-.324 3.3 1.231A11.5 11.5 0 0 1 12 5.813c1.02.005 2.046.138 3.005.404 2.29-1.555 3.296-1.232 3.296-1.232.655 1.655.243 2.877.12 3.181.768.84 1.234 1.914 1.234 3.226 0 4.617-2.807 5.634-5.48 5.931.431.371.814 1.104.814 2.226 0 1.606-.014 2.903-.014 3.297 0 .321.216.696.825.578A12.02 12.02 0 0 0 24 12.02C24 5.38 18.626 0 12 0"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="GitHub_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SvgGitHub);
export default ForwardRef;
