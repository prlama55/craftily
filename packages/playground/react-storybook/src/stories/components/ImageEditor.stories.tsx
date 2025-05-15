import type { Meta, StoryObj } from '@storybook/react';

import { ImageEditor } from '@craftily/ui-react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/ImageEditor',
  component: ImageEditor,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof ImageEditor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    controls: {
      brightness: { label: 'Brightness', value: 100 },
      contrast: { label: 'Contrast', value: 100 },
      opacity: { label: 'Opacity', value: 100 },
      grayscale: { label: 'Grayscale', value: 0 },
      saturate: { label: 'Saturate', value: 100 },
      sepia: { label: 'Sepia', value: 0 },
      hueRotate: { label: 'Hue Rotate', value: 0 },
      blur: { label: 'Blur', value: 0 },
    },
    showUpload: true,
    showDownload: true,
  },
};
