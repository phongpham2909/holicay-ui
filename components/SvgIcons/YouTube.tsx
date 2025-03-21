import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'fill' | 'stroke'> {
  /**
   * @default "currentColor"
   */
  fill?: string & {};
  stroke?: string & {};
}
const SvgYouTube = (
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
      <path
        fill={fill}
        d="M23.76 7.2s-.233-1.655-.955-2.381c-.914-.956-1.936-.961-2.405-1.017-3.356-.244-8.395-.244-8.395-.244h-.01s-5.039 0-8.395.244c-.469.056-1.49.06-2.405 1.017C.473 5.545.244 7.2.244 7.2S0 9.145 0 11.086v1.819c0 1.94.24 3.886.24 3.886s.233 1.654.95 2.38c.915.957 2.115.924 2.65 1.027 1.92.183 8.16.24 8.16.24s5.044-.01 8.4-.249c.469-.056 1.49-.06 2.405-1.017.722-.727.956-2.381.956-2.381S24 14.85 24 12.905v-1.819c0-1.94-.24-3.886-.24-3.886M9.52 15.113V8.367l6.483 3.385z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgYouTube);
export default ForwardRef;
