export type RGBA = { r: number; g: number; b: number; a: number };

export function rgba(color: string): {
  rgbaValues: RGBA;
  rgbaString: () => string;
} {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 1;
  const ctx = canvas.getContext("2d");

  if (!ctx) throw new Error("Canvas 2D context not supported.");

  ctx.clearRect(0, 0, 1, 1);
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 1, 1);

  const pixel = ctx.getImageData(0, 0, 1, 1).data;

  const rgbaValues = {
    r: pixel[0],
    g: pixel[1],
    b: pixel[2],
    a: pixel[3] / 255
  };

  return {
    rgbaValues,
    rgbaString: () =>
      `rgba(${rgbaValues.r}, ${rgbaValues.g}, ${rgbaValues.b}, ${rgbaValues.a})`
  };
}
