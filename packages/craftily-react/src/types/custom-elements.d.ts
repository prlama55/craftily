import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'craftily-image-editor': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
        controls?: boolean;
        showUpload?: boolean;
        showDownload?: boolean;
        ref?: React.Ref<HTMLElement>;
      };
    }
  }
}

export {};
