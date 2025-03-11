import React from 'react';

interface ProgressCircleProps {
  size?: number;
  percentage: number; // 0 to 100
  percentageSeperator?: string;
  strokeWidth?: number;
  strokeColor?: string;
  hasBackground?: boolean;
  bgStrokeColor?: string;
  fontStyle?: {
    fontSize?: string;
    fontFamily?: string;
    fontWeight?: string;
    fill?: string;
  };
}

export const ProgressCircle = ({
  size = 200,
  percentage,
  percentageSeperator,
  strokeWidth = 20,
  strokeColor = '#f25142',
  bgStrokeColor = '#F5F5F5',
  hasBackground = true,
  fontStyle,
}: ProgressCircleProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {hasBackground && (
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={bgStrokeColor}
          strokeWidth={strokeWidth}
        />
      )}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />

      <text
        x="52%"
        y="50%"
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
