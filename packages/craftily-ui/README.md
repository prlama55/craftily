# CraftilyUI Core

CraftilyUI is the foundational package for the CraftilyUI component library. Built on top of Tailwind CSS, it provides essential utilities, base components, and shared functionality to build modern, scalable, and customizable user interfaces.

## Features

- **Reusable Components**: A collection of base components to kickstart your UI development.
- **Customizable**: Easily extend and customize components to fit your design system.
- **Lightweight**: Optimized for performance and minimal footprint.
- **TypeScript Support**: Fully typed for better developer experience.

## Installation

Use npm or yarn to install the package:

```bash
npm install @craftily/ui
# or
yarn add @craftily/ui
```

## Usage
#### import in your main css file. e.g. index.css
```css
@import "tailwindcss";
@plugin "@craftily/ui" {
  name: "light";
  default-theme: true;
  color-scheme: "light";
  selector: "<css_selector>";
  --color-base-100: oklch(92% 0.006 264.531);
  --color-base-200: oklch(97% 0.001 106.424);
  --color-base: oklch(92% 0.003 48.717);
  --color-base-content: oklch(21% 0.006 56.043);
  --color-primary: oklch(72% 0.219 149.579);
  --color-primary-content: oklch(98% 0.018 155.826);
  --color-secondary: oklch(64% 0.246 16.439);
  --color-secondary-content: oklch(98% 0.026 102.212);
  --color-accent: oklch(62% 0.265 303.9);
  --color-accent-content: oklch(97% 0.014 308.299);
  --color-neutral: oklch(14% 0.004 49.25);
  --color-neutral-content: oklch(98% 0.001 106.423);
  --color-info: oklch(60% 0.126 221.723);
  --color-info-content: oklch(98% 0.019 200.873);
  --color-success: oklch(62% 0.194 149.214);
  --color-success-content: oklch(98% 0.018 155.826);
  --color-warning: oklch(68% 0.162 75.834);
  --color-warning-content: oklch(98% 0.026 102.212);
  --color-error: oklch(59% 0.249 0.584);
  --color-error-content: oklch(97% 0.014 343.198);
}
```

#### use utility classes
```tsx
<button class="btn btn-primary">Button</button>
```

## Documentation

For detailed documentation and examples, visit the [CraftilyUI Documentation](https://craftilyui.com).

## Contributing

We welcome contributions! Please read our [Contributing Guide](https://craftilyui.com) to get started.

## License

This project is licensed under the [MIT License](LICENSE).

---
CraftilyUI Core - Build better UIs, faster.