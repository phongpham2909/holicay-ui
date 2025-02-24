export const PRIMARY = 'primary';
export const SECONDARY = 'secondary';
export const GRAY = 'gray';
export const TEXT = 'text';
export const LINK = 'link';

export const BUTTON_TYPES = [PRIMARY, SECONDARY, TEXT, LINK] as const;
export const BUTTON_SIZES = ['sm', 'md', 'lg', 'xl', '2xl'] as const;
export const BUTTON_COLORS = [PRIMARY, GRAY] as const;

export type ButtonType = (typeof BUTTON_TYPES)[number];
export type ButtonSize = (typeof BUTTON_SIZES)[number];
export type ButtonColor = (typeof BUTTON_COLORS)[number];
