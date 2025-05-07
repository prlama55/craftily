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

export const ImageEditorComponent: React.FC<ImageEditorProps> = ({
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

  return (
    <craftily-image-editor
      ref={editorRef}
      src={initialImage || ''}
      controls={controls}
      showUpload={showUpload}
      showDownload={showDownload}
    />
  );
};
ImageEditorComponent.displayName = 'ImageEditorComponent';
export default ImageEditorComponent;
