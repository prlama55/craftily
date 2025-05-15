import type { Meta, StoryObj } from '@storybook/vue3';
import { Checkbox } from '@craftily/ui-vue';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'The `Checkbox` component allows users to select one or more options from a set. It can be used individually or in groups. Key features include different sizes, disabled state, and checked state. The label for the checkbox is provided as its default slot content.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      defaultValue: 'md',
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
    checked: {
      control: 'boolean',
      defaultValue: false,
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => ({
    components: { Checkbox },
    setup() {
      return { args };
    },
    template: `
      <Checkbox v-bind="args" class="basic-checkbox">
        Basic checkbox
      </Checkbox>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'This story demonstrates the basic usage of the `Checkbox` component. It shows a single checkbox with a label provided via the default slot. The `v-bind="args"` allows for interactive control through Storybook Controls addon. The `class` attribute allows adding custom CSS classes.'
      },
    },
  },
};

export const Sizes: Story = {
  render: (args) => ({
    components: { Checkbox },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <Checkbox v-bind="args" size="sm" class="checkbox-sm">
          Small checkbox
        </Checkbox>
        <Checkbox v-bind="args" size="md" class="checkbox-md">
          Medium checkbox
        </Checkbox>
        <Checkbox v-bind="args" size="lg" class="checkbox-lg">
          Large checkbox
        </Checkbox>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'This story showcases the different `size` options available for the `Checkbox` component: `sm` (small), `md` (medium), and `lg` (large). The size affects the visual scale of the checkbox and its label. Each size has a custom CSS class for additional styling.'
      },
    },
  },
};

export const States: Story = {
  render: (args) => ({
    components: { Checkbox },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <Checkbox v-bind="args" class="default-checkbox">
          Default checkbox
        </Checkbox>
        <Checkbox v-bind="args" checked class="checked-checkbox">
          Checked checkbox
        </Checkbox>
        <Checkbox v-bind="args" disabled class="disabled-checkbox">
          Disabled checkbox
        </Checkbox>
        <Checkbox v-bind="args" checked disabled class="checked-disabled-checkbox">
          Checked and disabled
        </Checkbox>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'This story demonstrates the various states of the `Checkbox` component: default (unchecked), `checked`, `disabled`, and `checked` + `disabled`. These states provide visual feedback about the interactivity and selection status of the checkbox. Custom CSS classes are applied to each checkbox for additional styling.'
      },
    },
  },
};

export const Group: Story = {
  render: (args) => ({
    components: { Checkbox },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <Checkbox v-bind="args" name="fruits" value="apple" class="apple-checkbox">
          Apple
        </Checkbox>
        <Checkbox v-bind="args" name="fruits" value="banana" class="banana-checkbox">
          Banana
        </Checkbox>
        <Checkbox v-bind="args" name="fruits" value="orange" class="orange-checkbox">
          Orange
        </Checkbox>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'This story shows how multiple `Checkbox` components can be grouped together by assigning them the same `name` attribute. This is a common pattern for allowing multiple selections within a related set of options. Each checkbox still maintains its individual `value`. Custom CSS classes are applied to each checkbox for additional styling.'
      },
    },
  },
};
