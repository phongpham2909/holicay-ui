export const BUTTON_GROUP_SIZES = ['sm', 'md', 'lg'] as const;

export type ButtonGroupSize = (typeof BUTTON_GROUP_SIZES)[number];
