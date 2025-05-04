import { DEFAULT_CONTROL_VALUES, MIME_TYPES } from '../constants';
import { FilterOptions, SupportedFileFormat } from '../types';

class ImageUtils {
  canvas: HTMLCanvasElement | null = null;
  applyImageFilters(
    ctx: CanvasRenderingContext2D,
    image: HTMLImageElement,
    canvas: HTMLCanvasElement,
    options: FilterOptions = DEFAULT_CONTROL_VALUES
  ): void {
    if (!ctx || !image || !canvas) return;

    this.canvas = canvas;
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Apply filters and draw image
    ctx.filter = `
          brightness(${options.brightness}%) 
          contrast(${options.contrast}%) 
          grayscale(${options.grayscale}) 
          saturate(${options.saturate}%) 
          sepia(${options.sepia}) 
          hue-rotate(${parseFloat(options.hueRotate as string) * 100}deg)
          blur(${options.blur}px)
          opacity(${options.opacity}%) 
        `.trim();

    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

    // Apply color tint
    if (options.color) {
      ctx.globalCompositeOperation = 'source-atop';
      ctx.fillStyle = options.color as string;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'source-over';
    }
  }

  toBlob(type: SupportedFileFormat = 'png', quality = 1.0): Promise<Blob> {
    const format = MIME_TYPES[type];
    if (!format) {
      throw new Error(`Unsupported format: ${type}`);
    }
    return new Promise((resolve, reject) => {
      this.canvas.toBlob(
        (blob) => {
          if (!blob) {
            reject(new Error('Failed to create blob'));
            return;
          }
          resolve(blob);
        },
        format,
        quality
      );
    });
  }

  toPng(quality = 1.0): Promise<Blob> {
    return this.toBlob('png', quality);
  }

  toJpeg(quality = 1.0): Promise<Blob> {
    return this.toBlob('jpeg', quality);
  }

  toJpg(quality = 1.0): Promise<Blob> {
    return this.toBlob('jpg', quality);
  }

  toBmp(quality = 1.0): Promise<Blob> {
    return this.toBlob('bmp', quality);
  }

  toWebp(quality = 1.0): Promise<Blob> {
    return this.toBlob('webp', quality);
  }

  toDataURL(type: SupportedFileFormat = 'png', quality = 1.0): string {
    const format = MIME_TYPES[type];
    if (!format) {
      throw new Error(`Unsupported format: ${type}`);
    }
    return this.canvas.toDataURL(format, quality);
  }

  downloadImage(format: SupportedFileFormat = 'png', quality = 1.0) {
    const dataUrl = this.toDataURL(format, quality);
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = 'image';
    a.click();
  }

  download(format: SupportedFileFormat = 'png', quality = 1.0) {
    this.downloadImage(format, quality);
  }
}
const imageUtils = new ImageUtils();
export { imageUtils };
