# @craftily/image

A lightweight, powerful image editing web component with advanced canvas filtering capabilities.

## 🌟 Features

- 🖼️ Advanced image filtering
- 🌈 Multiple filter controls
- 🔧 Web Component compatible
- 💻 Framework-agnostic
- 📦 Lightweight and typed
- 🛠️ Flexible image utility methods

## 📦 Installation

```bash
npm install @craftily/image
```

## 🚀 Quick Start

### 🖼️ Image Utility Methods

#### Converting Images

```typescript
// Image Utility
import { imageUtils } from '@craftily/image';

// Convert to different formats
const pngBlob = await imageUtils.toPng();
const jpegBlob = await imageUtils.toJpeg(0.8);
const webpBlob = await imageUtils.toWebp();

// Get base64 data URL
const dataUrl = imageUtils.toDataURL('png');

// Download image directly
imageUtils.download('png');
```

#### Applying Filters Manually

```typescript
// Image Utility
import { imageUtils } from '@craftily/image';

// Apply filters manually
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const image = new Image();

imageUtils.applyImageFilters(ctx, image, canvas, {
  brightness: 120,
  contrast: 110,
  saturate: 150,
  color: '#ff0000'  // Red tint
});
```

### 🛠️ Web Component

```html
<craftily-image-editor
  src="path/to/image.jpg"
  controls='{
    "brightness": { "label": "Brightness", "value": 100 },
    "contrast": { "label": "Contrast", "value": 100 }
  }'
  showUpload
  showDownload
></craftily-image-editor>
```

### 📦 React

```typescript
import '@craftily/image/editor';

function ImageEditorComponent() {
  return (
    <craftily-image-editor
      src="path/to/image.jpg"
      controls={{
        brightness: { label: 'Brightness', value: 100 },
        contrast: { label: 'Contrast', value: 100 }
      }}
      showUpload
      showDownload
    />
  );
}
```

### 📦 Vue

```vue
<template>
  <craftily-image-editor
    :controls="{
      brightness: { label: 'Brightness', value: 100 },
      contrast: { label: 'Contrast', value: 100 }
    }"
    showUpload
    showDownload
  />
</template>

<script setup>
import '@craftily/image/editor';
</script>
```

## 🎨 Supported Filters

- Brightness
- Contrast
- Saturate
- Grayscale
- Opacity
- Sepia
- Hue Rotate
- Blur
- Color Tint

## 🔍 API Reference

### Props

- `src`: Initial image source
- `controls`: Customize image editing controls
- `showUpload`: Toggle upload button
- `showDownload`: Toggle download button

### Events

- `imageEdited`: Triggered when image is modified
  - Provides methods:
    - `toDataURL()`: Get base64 image
    - `toBlob()`: Get image as Blob
    - `download()`: Download edited image

## 🌐 Compatibility

- Web Components
- React
- Vue
- TypeScript
- Modern Browsers

## 📡 Importing

```typescript
// Image Utility
import { imageUtils } from '@craftily/image';

// Only editor component
import '@craftily/image/editor';
```

## 📝 License

MIT License

## 🏷️ Keywords

canvas, image-filters, typescript, image-processing, web, lit
