export const SINGLE = 'single';
export const MULTIPLE = 'multiple';
export const ERROR = 'error';
export const WARNING = 'warning';
export const TAGS = 'tags';
export const SIZE_SM = 'sm';
export const SIZE_MD = 'md';

export const SELECT_MODES = [SINGLE, MULTIPLE, TAGS] as const;
export const SELECT_SIZES = [SIZE_SM, SIZE_MD] as const;
export const SELECT_STATUS = [ERROR, WARNING] as const;

export type SelectMode = (typeof SELECT_MODES)[number];
export type SelectSize = (typeof SELECT_SIZES)[number];
export type SelectStatus = (typeof SELECT_STATUS)[number];
