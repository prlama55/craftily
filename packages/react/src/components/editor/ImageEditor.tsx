import React, { useRef, useState, useEffect } from "react";
import {
  FilterOptions,
  applyImageFilters,
  loadImageFromFile
} from "@craftily/image";

const initialFilters: FilterOptions = {
  brightness: 1,
  contrast: 1,
  opacity: 1,
  grayscale: 0,
  saturate: 1,
  sepia: 0,
  hueRotate: 0,
  blur: 0,
  color: undefined
};

const rangeMap: Record<
  keyof FilterOptions,
  { min: number; max: number; defaultValue: number } | null
> = {
  brightness: { min: 0, max: 2, defaultValue: 1 }, // 1 is normal, <1 is darker, >1 is brighter
  contrast: { min: 0, max: 2, defaultValue: 1 }, // 1 is normal, <1 is low contrast, >1 is high contrast
  opacity: { min: 0, max: 1, defaultValue: 1 }, // 1 is normal, <1 is transparent, >1 is opaque
  grayscale: { min: 0, max: 1, defaultValue: 0 }, // 0 is color, 1 is full grayscale
  saturate: { min: 0, max: 3, defaultValue: 1 }, // 1 is normal, <1 desaturates, >1 oversaturates
  sepia: { min: 0, max: 1, defaultValue: 0 }, // 0 is no effect, 1 is full sepia
  hueRotate: { min: 0, max: 360, defaultValue: 0 }, // Full range of hue rotation
  blur: { min: 0, max: 10, defaultValue: 0 }, // Pixel blur radius
  color: null
};

export default function ImageEditor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const [filters, setFilters] = useState<FilterOptions>(initialFilters);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const img = await loadImageFromFile(file);
    setImage(img);
  };

  useEffect(() => {
    if (!canvasRef.current || !image) return;
    const ctx = canvasRef.current.getContext("2d", {
      willReadFrequently: true
    });
    if (!ctx) return;
    applyImageFilters(ctx, image, canvasRef.current, filters);
  }, [image, filters]);

  const handleFilterChange = (
    key: keyof FilterOptions,
    value: number | string
  ) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div style={{ padding: "1rem", maxWidth: 600 }}>
      <input type="file" accept="image/*" onChange={handleFileChange} />

      <canvas
        ref={canvasRef}
        width={400}
        height={300}
        style={{ border: "1px solid #ccc", marginTop: "1rem" }}
      />

      {image && (
        <div style={{ marginTop: "1rem" }}>
          {Object.entries(filters).map(([key, value]) => (
            <div key={key} style={{ marginBottom: "0.5rem" }}>
              <label>
                {key}: {value}
                <input
                  type={key === "color" ? "color" : "range"}
                  min={rangeMap[key as keyof FilterOptions]?.min ?? 0}
                  max={rangeMap[key as keyof FilterOptions]?.max ?? 1}
                  step={0.01}
                  value={value}
                  onChange={(e) =>
                    handleFilterChange(
                      key as keyof FilterOptions,
                      key === "color"
                        ? e.target.value
                        : parseFloat(e.target.value)
                    )
                  }
                  style={{ width: "100%" }}
                />
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
