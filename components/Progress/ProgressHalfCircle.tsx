import React from 'react';

type ISemiCircleProgress = {
  strokeWidth?: number;
  strokeLinecap?: 'butt' | 'round' | 'square' | 'inherit';
  percentage: number;
  percentageSeperator?: string;
  size?: number;
  strokeColor?: string;
  fontStyle?: {
    fontSize?: string;
    fontFamily?: string;
    fontWeight?: string;
    fill?: string;
  };
  hasBackground?: boolean;
  bgStrokeColor?: string;
};

export const ProgressHalfCircle = ({
  size = 200,
  percentage,
  percentageSeperator,
  strokeWidth = 10,
  strokeLinecap = 'round',
  strokeColor = '#f25142',
  bgStrokeColor = '#F5F5F5',
  hasBackground = false,
  fontStyle,
}: ISemiCircleProgress) => {
  if (percentage < 0 || percentage > 100) {
    throw new Error('Percentage must be between 0 and 100');
  }

  if (isNaN(strokeWidth) || strokeWidth <= 0) {
    throw new Error('Stroke width must be a positive number');
  }

  if (isNaN(size) || size <= 0 || isNaN(size) || size <= 0) {
    throw new Error('Size must be a positive number');
  }

  const radius = 50 - strokeWidth / 2;
  const circumference = 1.1 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  const bgStrokeDashoffset = circumference - 1 * circumference;
  const pathDescription = 'M5,64 a1,1 0 0,1 90,0';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {hasBackground && (
        <path
          cx={size / 2}
          cy={size / 2}
          r={radius}
          d={pathDescription}
          style={{
            transition: 'stroke-dashoffset 0.35s',
            stroke: bgStrokeColor,
            strokeLinecap: strokeLinecap,
            strokeDasharray: `${circumference}`,
            strokeDashoffset: `${bgStrokeDashoffset}`,
            strokeWidth: `${strokeWidth}`,
          }}
          fill="none"
        />
      )}
      <path
        cx={size / 2}
        cy={size / 2}
        r={radius}
        d={pathDescription}
        style={{
          transition: 'stroke-dashoffset 0.35s',
          stroke: strokeColor,
          strokeLinecap: strokeLinecap,
          strokeDasharray: `${circumference}`,
          strokeDashoffset: `${strokeDashoffset}`,
          strokeWidth: `${strokeWidth}`,
        }}
        fill="none"
      />
      <animate attributeName="stroke-dashoffset" from="283" to="0" dur="1s" fill="freeze" />

      <text
        x="52%"
        y="60%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="20"
        fontWeight="600"
        fontFamily="Inter"
        fill="#101828"
        style={{
          ...fontStyle,
        }}
      >
        {percentage}
        {percentageSeperator || '%'}
      </text>
    </svg>
  );
};
