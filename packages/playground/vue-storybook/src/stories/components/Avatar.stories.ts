import type { Meta, StoryObj } from '@storybook/vue3';
import { Avatar } from '@craftily/ui-vue';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'The `Avatar` component is used to display user profile pictures or initials as a visual representation. It supports different sizes, shapes (circle or square), and a fallback display if the image source is invalid or not provided.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      defaultValue: 'md',
    },
    shape: {
      control: 'select',
      options: ['circle', 'square'],
      defaultValue: 'circle',
    },
    className: {
      control: 'text',
      description: 'Additional CSS class names',
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => ({
    components: { Avatar },
    setup() {
      return { args };
    },
    template: `
      <Avatar v-bind="args" src="https://i.pravatar.cc/300" alt="User avatar" className="basic-avatar" />
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'This is the basic usage of the `Avatar` component with a sample image source. You can adjust its `size` and `shape` using the controls. The `className` prop allows adding custom CSS classes.',
      },
    },
  },
};

export const Sizes: Story = {
  render: (args) => ({
    components: { Avatar },
    setup() {
      const baseArgs = { ...args, src: "https://i.pravatar.cc/300" };
      return { baseArgs };
    },
    template: `
      <div style="display: flex; gap: 1rem; align-items: center;">
        <Avatar v-bind="baseArgs" size="sm" alt="Small avatar" className="avatar-sm" />
        <Avatar v-bind="baseArgs" size="md" alt="Medium avatar" className="avatar-md" />
        <Avatar v-bind="baseArgs" size="lg" alt="Large avatar" className="avatar-lg" />
        <Avatar v-bind="baseArgs" size="xl" alt="Extra large avatar" className="avatar-xl" />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'This story demonstrates the different sizes available for the `Avatar` component: `sm`, `md`, `lg`, and `xl`. Each size has a custom class name for additional styling.',
      },
    },
  },
};

export const Shapes: Story = {
  render: (args) => ({
    components: { Avatar },
    setup() {
      const baseArgs = { ...args, src: "https://i.pravatar.cc/300" };
      return { baseArgs };
    },
    template: `
      <div style="display: flex; gap: 1rem; align-items: center;">
        <Avatar v-bind="baseArgs" shape="circle" alt="Circle avatar" className="avatar-circle" />
        <Avatar v-bind="baseArgs" shape="square" alt="Square avatar" className="avatar-square" />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'This story shows the two available shapes for the `Avatar`: `circle` (default) and `square`. Each shape has a custom class name for additional styling.',
      },
    },
  },
};

export const Fallback: Story = {
  render: (args) => ({
    components: { Avatar },
    setup() {
      const noSrcArgs = { ...args, className: 'no-src-avatar' };
      const invalidSrcArgs = { ...args, src: "invalid-url.jpg", className: 'invalid-src-avatar' };
      return { noSrcArgs, invalidSrcArgs };
    },
    template: `
      <div style="display: flex; gap: 1rem; align-items: center;">
        <Avatar v-bind="noSrcArgs" alt="Fallback avatar" />
        <Avatar v-bind="invalidSrcArgs" alt="Fallback avatar" />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'This story demonstrates the fallback behavior of the `Avatar` component. If the `src` prop is missing or the image fails to load, a default fallback (e.g., initials from `alt` text or a generic icon) is displayed. Custom class names are applied to each avatar for additional styling.',
      },
    },
  },
};
