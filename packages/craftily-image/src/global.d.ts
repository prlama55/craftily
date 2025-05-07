// Declare Web Component interface
declare global {
  interface HTMLElementTagNameMap {
    'craftily-image-editor': HTMLElement;
  }
}

export declare namespace JSX {
  interface IntrinsicElements {
    'craftily-image-editor': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      showColor?: boolean;
      showBrightness?: boolean;
      showContrast?: boolean;
      showGrayscale?: boolean;
      showOpacity?: boolean;
      showSaturate?: boolean;
      showSepia?: boolean;
      showHueRotate?: boolean;
      showBlur?: boolean;
      controls?: any[];
      showUpload?: boolean;
      showDownload?: boolean;
      src?: string;
    };
  }
}

export {};
