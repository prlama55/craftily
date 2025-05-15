import React, { useEffect, useRef } from 'react';
import '@craftily/image/editor';
import { ControlProps } from '@craftily/image';

// Define props interface for the component
interface ImageEditorProps {
  onImageEdit?: (editedImage: string) => void;
  initialImage?: string;
  controls?: ControlProps;
  showUpload?: boolean;
  showDownload?: boolean;
}

export const ImageEditor: React.FC<ImageEditorProps> = ({
  onImageEdit,
  initialImage,
  controls,
  showUpload,
  showDownload,
}) => {
  const editorRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const editorElement = editorRef.current as HTMLElement;

    if (editorElement) {
      // Add event listener for image editing
      const handleImageEdit = (event: Event) => {
        const customEvent = event as CustomEvent<string>;
        onImageEdit?.(customEvent.detail);
      };

      editorElement.addEventListener('image-edited', handleImageEdit);

      // Cleanup event listener
      return () => {
        editorElement.removeEventListener('image-edited', handleImageEdit);
      };
    }
  }, [initialImage, onImageEdit]);

  return React.createElement('craftily-image-editor', {
    ref: editorRef,
    src: initialImage || '',
    controls,
    showUpload,
    showDownload,
  });
};
ImageEditor.displayName = 'ImageEditor';
export default ImageEditor;
