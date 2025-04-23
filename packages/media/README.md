# Craftily Image

A lightweight image filter utility for canvas using TypeScript.

## Installation

Use npm to install the package:

```bash
npm install @craftily/image
```

## Usage

Import the package in your JavaScript or TypeScript file:

```typescript
import { loadImageFromFile, applyImageFilters } from "@craftily/image";
```

### loadImageFromFile

```typescript
const image = await loadImageFromFile(file);
```

### applyImageFilters

```typescript
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
applyImageFilters(ctx, image, canvas, filters);
```

### Filters

```typescript
interface FilterOptions {
  brightness?: number;
  contrast?: number;
  grayscale?: number;
  saturate?: number;
  sepia?: number;
  hueRotate?: number;
  blur?: number;
  color?: string;
  opacity?: number;
}
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
