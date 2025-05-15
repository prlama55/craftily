import type { Meta, StoryObj } from '@storybook/vue3';

import { ImageEditor } from '@craftily/ui-vue';
import type { ImageEditorEventDetail } from '@craftily/image';

const meta = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/configure/#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/ImageEditor',
  component: ImageEditor,
  render: (args: any) => ({
    components: { ImageEditor },
    setup() {
      return { args };
    },
    methods: {
      handleControlChange(value: ImageEditorEventDetail) {},
    },
    template: `<ImageEditor @onControlChange="handleControlChange" v-bind="args" />`,
  }),
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof ImageEditor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    controls: {
      brightness: {
        label: 'Brightness',
        value: 100,
      },
      contrast: {
        label: 'Contrast',
        value: 100,
      },
      saturate: {
        label: 'Saturate',
        value: 100,
      },
      opacity: {
        label: 'Opacity',
        value: 100,
      },
      color: {
        label: 'Color',
      },
    },
    showUpload: true,
    showDownload: true,
  },
};
