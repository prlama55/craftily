import { FilterOptions } from "../types";
import { rgba } from "./rgba";

export function applyImageFilters(
  ctx: CanvasRenderingContext2D,
  image: HTMLImageElement,
  canvas: HTMLCanvasElement,
  filters: FilterOptions = {}
): void {
  const {
    brightness = 1,
    contrast = 1,
    grayscale = 0,
    saturate = 1,
    sepia = 0,
    hueRotate = 0,
    blur = 0,
    color,
    opacity = 1
  } = filters;
  const filterString = `
        brightness(${brightness})
        contrast(${contrast})
        grayscale(${grayscale})
        saturate(${saturate})
        sepia(${sepia})
        hue-rotate(${hueRotate}deg)
        blur(${blur}px)
        opacity(${opacity})
      `.trim();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.filter = filterString;
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  ctx.filter = "none";
  if (color) {
    const { rgbaValues } = rgba(color);
    ctx.globalAlpha = opacity;
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = `rgba(${rgbaValues.r}, ${rgbaValues.g}, ${rgbaValues.b})`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 1.0;
  }
}
