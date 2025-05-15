import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { Select, Option } from '@craftily/ui-vue';

// Option type for select components
type SelectOption = {
  value: string;
  label: string;
  disabled?: boolean;
}

const meta = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'The `Select` component provides a dropdown list for users to choose one option from a predefined set. It supports `v-model` for data binding, placeholder text, various states (disabled, error, loading), and can display options passed as an array or via native `<option>` and `<optgroup>` tags within its default slot. Sizes can be controlled by applying standard size attributes (e.g., `sm`, `md`, `lg`).',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'text', description: 'Binding for v-model' },
    placeholder: { control: 'text' },
    // 'size' is not an explicit prop of Select.vue; it's passed as an attribute.
    // Removing from global argTypes to satisfy Meta<typeof Select> typing.
    // The 'Sizes' story demonstrates size usage by direct attribute binding.
    disabled: { control: 'boolean' },
    error: { control: 'text', description: 'Error message string or boolean for error state' }, // Assuming error can be string for message or boolean for state
    loading: { control: 'boolean' },
    loadingText: { control: 'text' },
    options: { control: 'object', description: 'Array of options to display' },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

// We'll use inline options in each story

export const Basic: Story = {
  args: {
    placeholder: 'Select an option',
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ] as SelectOption[],
    modelValue: '',
  },
  render: (args) => ({
    components: { Select },
    setup() {
      const selectedValue = ref(args.modelValue);
      return { args, selectedValue };
    },
    template: `
      <div>
        <h4>Selected value: {{ selectedValue }}</h4>
        <Select 
          v-model="selectedValue" 
          :options="args.options" 
          :placeholder="args.placeholder"
          :disabled="args.disabled"
          :error="args.error"
          style="width: 200px;"
        />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'This story showcases the basic `Select` component. It uses `v-model` for two-way data binding with a `selectedValue` ref. Options are provided via the `options` prop, and a placeholder is set. The `style` attribute is used here to control the width for demonstration purposes.',
      },
    },
  },
};

export const Sizes: Story = {
  render: () => ({
    components: { Select },
    setup() {
      const selectedSm = ref('');
      const selectedMd = ref('');
      const selectedLg = ref('');
      const options = [
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' },
      ];

      return { options, selectedSm, selectedMd, selectedLg };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem; width: 200px;">
        <div>
          <h4>Small: {{ selectedSm }}</h4>
          <Select 
            v-model="selectedSm" 
            :options="options" 
            placeholder="Small select" 
            size="sm" 
          />
        </div>
        
        <div>
          <h4>Medium: {{ selectedMd }}</h4>
          <Select 
            v-model="selectedMd" 
            :options="options" 
            placeholder="Medium select" 
            size="md" 
          />
        </div>
        
        <div>
          <h4>Large: {{ selectedLg }}</h4>
          <Select 
            v-model="selectedLg" 
            :options="options" 
            placeholder="Large select" 
            size="lg" 
          />
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'This story demonstrates different sizes for the `Select` component. Although `size` is not an explicit prop of the underlying Vue component and is passed as a standard HTML attribute, this story shows how `size="sm"`, `size="md"`, and `size="lg"` can be used to control the select field\'s height, typically styled via global CSS or a theming system.',
      },
    },
  },
};

export const States: Story = {
  render: () => ({
    components: { Select },
    setup() {
      const selectedDefault = ref('');
      const selectedDisabled = ref('');
      const selectedErrorMsg = ref('');
      const selectedErrorBool = ref('');
      
      const options = [
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' },
      ];
      
      return { 
        options,
        selectedDefault, 
        selectedDisabled, 
        selectedErrorMsg, 
        selectedErrorBool 
      };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem; width: 250px;">
        <div>
          <h4>Default: {{ selectedDefault }}</h4>
          <Select 
            v-model="selectedDefault" 
            placeholder="Default state"
            :options="options"
          />
        </div>
        
        <div>
          <h4>Disabled: {{ selectedDisabled }}</h4>
          <Select 
            v-model="selectedDisabled" 
            placeholder="Disabled state" 
            :disabled="true"
            :options="options"
          />
        </div>
        
        <div>
          <h4>Error with message: {{ selectedErrorMsg }}</h4>
          <Select 
            v-model="selectedErrorMsg" 
            placeholder="Error with message" 
            error="Please select a valid option"
            :options="options"
          />
        </div>
        
        <div>
          <h4>Error as boolean: {{ selectedErrorBool }}</h4>
          <Select 
            v-model="selectedErrorBool" 
            placeholder="Error as boolean" 
            :error="true"
            :options="options"
          />
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          "This story illustrates different states of the `Select` component: default, `disabled`, and `error`. The error state can be triggered by passing a string (as an error message) or `true` to the `error` prop. These states provide visual cues and control interactivity based on the select field's current status.",
      },
    },
  },
};

export const WithGroups: Story = {
  render: () => ({
    components: { Select, Option },
    setup() {
      const selectedFruit = ref('');
      // Group the options by their group property
      const citrusOptions = [
        { label: 'Orange', value: 'orange' },
        { label: 'Lemon', value: 'lemon' },
        { label: 'Lime', value: 'lime' },
      ];
      const berryOptions = [
        { label: 'Strawberry', value: 'strawberry' },
        { label: 'Blueberry', value: 'blueberry' },
        { label: 'Raspberry', value: 'raspberry' },
      ];
      return { selectedFruit, citrusOptions, berryOptions };
    },
    template: `
      <div>
        <h3>Selected fruit: {{ selectedFruit }}</h3>
        <Select 
          v-model="selectedFruit" 
          placeholder="Select a fruit" 
          style="width: 200px;"
        >
          <optgroup label="Citrus Fruits">
            <Option v-for="option in citrusOptions" :key="option.value" :value="option.value">{{ option.label }}</Option>
          </optgroup>
          <optgroup label="Berry Fruits">
            <Option v-for="option in berryOptions" :key="option.value" :value="option.value">{{ option.label }}</Option>
          </optgroup>
        </Select>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'This story demonstrates how to use native HTML `<optgroup>` and `<option>` elements within the default slot of the `Select` component to group related options. This is useful for organizing longer lists of choices into logical categories. The placeholder is still set via the placeholder prop.',
      },
    },
  },
};

export const WithLabelAndHint: Story = {
  render: () => ({
    components: { Select },
    setup() {
      const selectedCountry = ref('');
      const selectId = 'country-select';
      const countryOptions = [
        { value: 'us', label: 'United States' },
        { value: 'uk', label: 'United Kingdom' },
        { value: 'ca', label: 'Canada' },
        { value: 'au', label: 'Australia' },
      ];
      return { selectedCountry, selectId, countryOptions };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 0.25rem; width: 250px;">
        <h4>Selected country: {{ selectedCountry }}</h4>
        <label :for="selectId">Choose a country</label>
        <Select 
          :id="selectId" 
          v-model="selectedCountry" 
          placeholder="Select a country"
          :options="countryOptions"
          :aria-describedby="selectId + '-hint'"
        />
        <small :id="selectId + '-hint'" style="font-size: 0.875em; color: #666;">
          Please select your country of residence.
        </small>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          "This story demonstrates how to pair a `Select` component with an external `<label>` and a hint text (using a `<small>` tag). The `label` uses the `for` attribute matching the `Select` component's `id` for accessibility. The hint text is associated via the `aria-describedby` attribute on the `Select` component, pointing to the `id` of the hint element. This provides important context and accessibility for the select field.",
      },
    },
  },
};
