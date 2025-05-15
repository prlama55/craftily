import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { Radio, RadioGroup, type RadioGroupProps } from '@craftily/ui-vue';

const meta = {
  title: 'Components/Radio',
  component: RadioGroup,
  subcomponents: { Radio },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'The `RadioGroup` and `Radio` components work together to allow users to select a single option from a set. `RadioGroup` manages the overall selection, while individual `Radio` components represent each choice. They support `v-model` for data binding, `disabled` states, and different `size` attributes (styled via CSS).',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      // For RadioGroup
      control: 'text',
      description: 'The value of the selected radio button in the group (used with v-model).',
    },
    name: {
      // For RadioGroup
      control: 'text',
      description: 'The common name for all radio buttons in the group.',
    },
    horizontal: {
      // For RadioGroup
      control: 'boolean',
      description: 'Display radio buttons horizontally.',
      defaultValue: false,
    },
    // Args for individual Radio, though less common to control globally here
    // For individual radio 'value' (string), 'disabled' (boolean), 'size' (sm, md, lg)
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    name: 'fruits',
    modelValue: 'apple', // Default selected value for the group
  },
  render: (args: RadioGroupProps) => ({
    components: { RadioGroup, Radio },
    setup() {
      // Use args.modelValue for initial, v-model will handle updates
      const selectedFruit = ref(args.modelValue);
      return { args, selectedFruit };
    },
    template: `
      <RadioGroup v-model="selectedFruit" :name="args.name">
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <Radio value="apple">Apple</Radio>
          <Radio value="banana">Banana</Radio>
          <Radio value="orange">Orange</Radio>
        </div>
      </RadioGroup>
      <p style="margin-top: 1rem; font-size: 0.9rem; color: #333;">Selected: {{ selectedFruit }}</p>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'This story demonstrates the basic usage of `RadioGroup` and `Radio` components. A `RadioGroup` wraps multiple `Radio` options. The `v-model` on `RadioGroup` tracks the `value` of the selected `Radio`.',
      },
    },
  },
};

export const Sizes: Story = {
  args: {
    name: 'sizes-group',
  },
  render: (args: RadioGroupProps) => ({
    components: { RadioGroup, Radio },
    setup() {
      const selectedSizeSm = ref('1');
      const selectedSizeMd = ref('1');
      const selectedSizeLg = ref('1');
      return { args, selectedSizeSm, selectedSizeMd, selectedSizeLg };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        <RadioGroup v-model="selectedSizeSm" :name="args.name + '-sm'">
          <Radio value="1" size="sm">Small radio</Radio>
        </RadioGroup>
        <RadioGroup v-model="selectedSizeMd" :name="args.name + '-md'">
          <Radio value="1" size="md">Medium radio</Radio>
        </RadioGroup>
        <RadioGroup v-model="selectedSizeLg" :name="args.name + '-lg'">
          <Radio value="1" size="lg">Large radio</Radio>
        </RadioGroup>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'This story shows `Radio` components with different `size` attributes: `sm`, `md`, and `lg`. The size attribute is typically styled via global CSS or a theming system to affect the visual scale of the radio button and its label.',
      },
    },
  },
};

export const States: Story = {
  args: {
    name: 'states-group',
    modelValue: 'default', // Initial selected value
  },
  render: (args: RadioGroupProps) => ({
    components: { RadioGroup, Radio },
    setup() {
      const selectedState = ref(args.modelValue);
      return { args, selectedState };
    },
    template: `
      <RadioGroup v-model="selectedState" :name="args.name">
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <Radio value="default">Default radio</Radio>
          <Radio value="checked-option">Pre-checked radio (via v-model)</Radio>
          <Radio value="disabled" disabled>Disabled radio</Radio>
          <Radio value="checked-disabled" :disabled="selectedState === 'checked-disabled' || true"> 
            Initially checked & disabled (select this to see disabled checked state)
          </Radio>
          <Radio value="another-disabled" disabled>Another Disabled radio</Radio>
        </div>
      </RadioGroup>
      <p style="margin-top: 1rem; font-size: 0.9rem; color: #333;">Selected: {{ selectedState }}</p>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'This story demonstrates various states of `Radio` components within a `RadioGroup`. It includes default, pre-selected (controlled by `v-model` on the group), and disabled states. Note that to have a radio appear "checked and disabled", its value must match the `RadioGroup`\'s `v-model` AND it must have the `disabled` prop.',
      },
    },
  },
};
