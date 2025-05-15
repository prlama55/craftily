import type { Meta, StoryObj } from '@storybook/vue3';
import { Button, ButtonGroup } from '@craftily/ui-vue';

const meta = {
  title: 'Components/ButtonGroupVertical',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'The `ButtonGroup` component, when configured with the `vertical` prop, groups related buttons together in a vertical stack. This arrangement is useful for toolbars or action lists where vertical space is preferred. Individual buttons within the group retain their own styling options for variants and sizes.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    vertical: {
      control: 'boolean',
      defaultValue: true,
    },
    // variant and size are props of individual Button components, not ButtonGroup
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => ({
    components: { Button, ButtonGroup },
    setup() {
      return { args };
    },
    template: `
      <ButtonGroup vertical v-bind="args">
        <Button v-bind="args" label="Top"></Button>
        <Button v-bind="args" label="Middle"></Button>
        <Button v-bind="args" label="Bottom"></Button>
      </ButtonGroup>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'This story demonstrates the basic usage of the `ButtonGroup` component with the `vertical` prop. Buttons are stacked vertically and styled to appear connected.',
      },
    },
  },
};

export const Variants: Story = {
  render: (args) => ({
    components: { Button, ButtonGroup },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; gap: 1rem;">
        <ButtonGroup v-bind="args" vertical>
          <Button v-bind="args" variant="primary" label="Top"></Button>
          <Button v-bind="args" variant="primary" label="Middle"></Button>
          <Button v-bind="args" variant="primary" label="Bottom"></Button>
        </ButtonGroup>
        
        <ButtonGroup v-bind="args" vertical>
          <Button v-bind="args" variant="secondary" label="Top"></Button>
          <Button v-bind="args" variant="secondary" label="Middle"></Button>
          <Button v-bind="args" variant="secondary" label="Bottom"></Button>
        </ButtonGroup>
        
        <ButtonGroup v-bind="args" vertical>
          <Button v-bind="args" variant="outline" label="Top"></Button>
          <Button v-bind="args" variant="outline" label="Middle"></Button>
          <Button v-bind="args" variant="outline" label="Bottom"></Button>
        </ButtonGroup>
        
        <ButtonGroup v-bind="args" vertical>
          <Button v-bind="args" variant="ghost" label="Top"></Button>
          <Button v-bind="args" variant="ghost" label="Middle"></Button>
          <Button v-bind="args" variant="ghost" label="Bottom"></Button>
        </ButtonGroup>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'This story shows how different button `variant`s look within a vertically oriented `ButtonGroup`. Each group demonstrates a different variant: primary, secondary, outline, and ghost.',
      },
    },
  },
};

export const Sizes: Story = {
  render: (args) => ({
    components: { Button, ButtonGroup },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; gap: 1rem;">
        <ButtonGroup v-bind="args" vertical>
          <Button v-bind="args" size="sm" label="Top"></Button>
          <Button v-bind="args" size="sm" label="Middle"></Button>
          <Button v-bind="args" size="sm" label="Bottom"></Button>
        </ButtonGroup>
        
        <ButtonGroup v-bind="args" vertical>
          <Button v-bind="args" size="md" label="Top"></Button>
          <Button v-bind="args" size="md" label="Middle"></Button>
          <Button v-bind="args" size="md" label="Bottom"></Button>
        </ButtonGroup>
        
        <ButtonGroup v-bind="args" vertical>
          <Button v-bind="args" size="lg" label="Top"></Button>
          <Button v-bind="args" size="lg" label="Middle"></Button>
          <Button v-bind="args" size="lg" label="Bottom"></Button>
        </ButtonGroup>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'This story illustrates how different button `size`s (sm, md, lg) are rendered within a vertical `ButtonGroup`. Each group uses buttons of a consistent size.',
      },
    },
  },
};
