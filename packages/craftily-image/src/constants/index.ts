import { DefaultControlProps, FilterOptions, MimeTypes } from '../types';

export const DEFAULT_CONTROL_VALUES: FilterOptions = {
  brightness: 100,
  contrast: 100,
  saturate: 100,
  grayscale: 0,
  opacity: 100,
  sepia: 0,
  hueRotate: 0,
  blur: 0,
  color: undefined,
};
export const DEFAULT_CONTROL_OPTIONS: DefaultControlProps = {
  brightness: { defaultValue: 100, min: 0, max: 200 },
  contrast: { defaultValue: 100, min: 0, max: 200 },
  saturate: { defaultValue: 100, min: 0, max: 300 },
  grayscale: { defaultValue: 0, min: 0, max: 1 },
  opacity: { defaultValue: 100, min: 0, max: 100 },
  sepia: { defaultValue: 0, min: 0, max: 100 },
  hueRotate: { defaultValue: 0, min: 0, max: 360 },
  blur: { defaultValue: 0, min: 0, max: 10 },
  color: { defaultValue: undefined },
};
export const MIME_TYPES: MimeTypes = {
  png: 'image/png',
  jpeg: 'image/jpeg',
  jpg: 'image/jpg',
  bmp: 'image/bmp',
  webp: 'image/webp',
};

export const EVENT_TYPE_EDITED = 'image-edited';
export const EVENT_TYPE_RESET = 'image-reset';
