import type { Meta, StoryObj } from '@storybook/vue3';
import { Spinner } from '@craftily/ui-vue';

const meta = {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    docs: {
      description: {
        component:
          'The `Spinner` component is used to indicate a loading or processing state. It provides visual feedback that an action is ongoing. It supports different sizes (`sm`, `md`, `lg`, `xl`), custom colors, and an accessible label for screen readers.',
      },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'], // Spinner.vue supports 'xl'
      description: 'Size of the spinner',
    },
    color: {
      control: 'color',
      description: 'Color of the spinner (e.g., CSS color name or hex code)',
    },
    label: {
      control: 'text',
      description: 'Accessible label for the spinner',
    },
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    size: 'md',
    label: 'Loading...',
  },
  render: (args) => ({
    components: { Spinner },
    setup() {
      return { args };
    },
    template: `
      <Spinner v-bind="args" />
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'This story shows the basic `Spinner` component. It uses the default medium size and includes an accessible label. You can adjust props like `size`, `color`, and `label` using the Storybook controls.',
      },
    },
  },
};

export const Sizes: Story = {
  render: (args) => ({
    components: { Spinner },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; gap: 1rem; align-items: center;">
        <Spinner size="sm" label="Loading small" />
        <Spinner size="md" label="Loading medium" />
        <Spinner size="lg" label="Loading large" />
        <Spinner size="xl" label="Loading extra large" />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'This story demonstrates the different `size` options available for the `Spinner` component: `sm`, `md`, `lg`, and `xl`. Each spinner is also given a unique accessible label.',
      },
    },
  },
};

export const Colors: Story = {
  name: 'With Different Colors',
  render: (args) => ({
    components: { Spinner },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; gap: 1rem; align-items: center;">
        <Spinner color="blue" label="Loading blue" />
        <Spinner color="#4CAF50" label="Loading green" />
        <Spinner color="var(--craftily-color-warning-500, orange)" label="Loading warning (CSS var or orange)" />
        <Spinner color="rgb(255, 0, 0)" label="Loading red" />
        <Spinner :color="args.color || 'purple'" label="Loading (from control or purple)" />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'This story shows how the `Spinner` component can be styled with different `color` values. Colors can be specified as CSS color names, hex codes, RGB values, or CSS variables. The last spinner in this example can have its color adjusted via the Storybook controls.',
      },
    },
  },
};

export const WithCustomLabel: Story = {
  name: 'With Custom Label',
  args: {
    label: 'Processing data...',
    size: 'md',
  },
  render: (args) => ({
    components: { Spinner },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem; align-items: center;">
        <Spinner :label="args.label" :size="args.size" />
        <Spinner label="Please wait" size="sm" color="grey" />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'This story highlights the use of the `label` prop to provide custom accessible text for the `Spinner`. The first spinner uses a label from Storybook controls, while the second one has a hardcoded label. Providing a descriptive label is important for accessibility.',
      },
    },
  },
};
