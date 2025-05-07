export type Property =
  | 'brightness'
  | 'contrast'
  | 'saturate'
  | 'grayscale'
  | 'opacity'
  | 'sepia'
  | 'hueRotate'
  | 'blur'
  | 'color';
export type InputControlProps = {
  label: string;
  value?: number | string;
};
type MinMaxProps = {
  min?: number;
  max?: number;
  defaultValue?: number | string;
};

export type DefaultControlProps = Record<Property, MinMaxProps>;
export type ControlProps = Partial<Record<Property, InputControlProps>>;

export type SupportedFileFormat = 'png' | 'jpeg' | 'jpg' | 'bmp' | 'webp';
export type MimeTypes = Record<SupportedFileFormat, string>;

export type FilterOptions = Record<Property, number | string | undefined>;

// Define an interface for the event detail
export interface ImageEditorEventDetail {
  toDataURL: (type?: SupportedFileFormat, quality?: number) => string;
  toBlob: (type?: SupportedFileFormat, quality?: number) => Promise<Blob>;
  download: (type?: SupportedFileFormat, quality?: number) => void;
  metadata: {
    canvas: HTMLCanvasElement;
    controls: Record<Property, InputControlProps>;
    eventType: string;
  };
  bubbles?: boolean;
  composed?: boolean;
}
