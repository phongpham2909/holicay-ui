export const BADGE_SIZES = ['sm', 'md', 'lg'] as const;
export const BADGE_TYPES = ['outline', 'solid', 'pill'] as const;
export const BADGE_COLORS = [
  'primary',
  'gray',
  'error',
  'warning',
  'success',
  'additional',
  'info',
  'unknown',
] as const;
export const BADGE_SHAPES = ['rounded', 'square'] as const;

export type BadgeSize = (typeof BADGE_SIZES)[number];
export type BadgeType = (typeof BADGE_TYPES)[number];
export type BadgeColor = (typeof BADGE_COLORS)[number];
export type BadgeShape = (typeof BADGE_SHAPES)[number];
