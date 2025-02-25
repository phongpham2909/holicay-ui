export const DOT_SIZES = ['sm', 'md', 'lg', 'xl', '2xl'] as const;
export const DOT_COLORS = [
  'gray',
  'primary',
  'error',
  'warning',
  'success',
  'additional',
  'info',
] as const;

export type DotSize = (typeof DOT_SIZES)[number];
export type DotColor = (typeof DOT_COLORS)[number];
