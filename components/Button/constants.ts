export const PRIMARY = 'primary';
export const SECONDARY = 'secondary';
export const GRAY = 'gray';
export const TEXT = 'text';
export const LINK = 'link';

export const BUTTON_TYPES = [PRIMARY, SECONDARY, TEXT, LINK] as const;
export const BUTTON_SIZES = ['sm', 'md', 'lg', 'xl', '2xl'] as const;
export const BUTTON_COLORS = [PRIMARY, GRAY] as const;
export const BUTTON_SOCIAL_SIZES = ['sm', 'md', 'lg'] as const;
export const BUTTON_SOCIAL_VARIANTS = ['solid', 'outlined', 'default'] as const;
export const BUTTON_SOCIAL_TYPES = ['google', 'facebook', 'apple', 'twitter'] as const;

export type ButtonType = (typeof BUTTON_TYPES)[number];
export type ButtonSize = (typeof BUTTON_SIZES)[number];
export type ButtonColor = (typeof BUTTON_COLORS)[number];
export type ButtonSocialType = (typeof BUTTON_SOCIAL_TYPES)[number];
export type ButtonSocialSize = (typeof BUTTON_SOCIAL_SIZES)[number];
export type ButtonSocialVariant = (typeof BUTTON_SOCIAL_VARIANTS)[number];
