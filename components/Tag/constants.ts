export const TAG_SIZES = ['sm', 'md', 'lg'] as const;
export const TAG_TYPES = ['outline', 'solid'] as const;

export type TagSize = (typeof TAG_SIZES)[number];
export type TagType = (typeof TAG_TYPES)[number];
