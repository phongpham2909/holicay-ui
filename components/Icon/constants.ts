export const DEFAULT_NAME = 'icon-rocket-01';
export const ICON_SIZES = ['sm', 'md', 'lg', 'xl', '2xl'] as const;

export type IconSize = (typeof ICON_SIZES)[number];
