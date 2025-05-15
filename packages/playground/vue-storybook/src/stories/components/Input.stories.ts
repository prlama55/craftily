import type { Meta, StoryObj } from '@storybook/vue3';
import { Input } from '@craftily/ui-vue';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'The `Input` component is a fundamental form element allowing users to enter and edit text-based data. It supports various types (text, password, email, etc.), states (disabled, error, success), and can be augmented with labels and help text externally. Sizing is typically handled via CSS classes. The component uses `v-model` for two-way data binding via the `modelValue` prop and an `update:modelValue` event.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'text', description: 'Binding for v-model' },
    placeholder: { control: 'text' },
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'tel', 'url'],
    },
    disabled: { control: 'boolean' },
    name: { control: 'text' },
    error: { control: 'text', description: 'Error message string. Empty for no error.' }, // Changed from boolean
    success: { control: 'boolean' },
    // 'size', 'label', 'helpText' are not direct props of craftily-vue Input.
    // Label & helpText are handled externally. Size via CSS classes.
  },
  args: {
    // Default args for all stories
    modelValue: '',
    placeholder: 'Enter text...',
    type: 'text',
    disabled: false,
    name: 'default-input',
    error: '', // Default to no error message
    success: false,
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    placeholder: 'Enter text...',
  },
  render: (args) => ({
    components: { Input },
    setup() {
      return { args };
    },
    // We can use v-bind for props and v-model for the value
    template: '<Input v-bind="args" v-model="args.modelValue" />', // Removed :label and :help-text props
  }),
  parameters: {
    docs: {
      description: {
        story:
          'This story showcases the `Input` component in its most basic form. It uses `v-bind` to pass all relevant props and `v-model` for two-way data binding with `args.modelValue`. A simple placeholder is provided via `args`.',
      },
    },
  },
};

export const Types: Story = {
  render: (args) => ({
    components: { Input },
    setup() {
      const textArgs = { ...args, type: 'text', placeholder: 'Text input', name: 'text-input' };
      const passwordArgs = {
        ...args,
        type: 'password',
        placeholder: 'Password input',
        name: 'password-input',
      };
      const emailArgs = { ...args, type: 'email', placeholder: 'Email input', name: 'email-input' };
      const numberArgs = {
        ...args,
        type: 'number',
        placeholder: 'Number input',
        name: 'number-input',
      };
      const telArgs = { ...args, type: 'tel', placeholder: 'Tel input', name: 'tel-input' };
      const urlArgs = { ...args, type: 'url', placeholder: 'URL input', name: 'url-input' };

      return { textArgs, passwordArgs, emailArgs, numberArgs, telArgs, urlArgs };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <Input v-bind="textArgs" v-model="textArgs.modelValue" />
        <Input v-bind="passwordArgs" v-model="passwordArgs.modelValue" />
        <Input v-bind="emailArgs" v-model="emailArgs.modelValue" />
        <Input v-bind="numberArgs" v-model="numberArgs.modelValue" />
        <Input v-bind="telArgs" v-model="telArgs.modelValue" />
        <Input v-bind="urlArgs" v-model="urlArgs.modelValue" />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'This story demonstrates the different `type` attributes that the `Input` component can accept, such as `text`, `password`, `email`, `number`, `tel`, and `url`. Each input type may have different behaviors and validation in the browser.',
      },
    },
  },
};

export const Sizes: Story = {
  render: (args) => ({
    components: { Input },
    setup() {
      const smallArgs = { ...args, placeholder: 'Small input (via class)', name: 'small-input' };
      const mediumArgs = {
        ...args,
        placeholder: 'Medium input (default/via class)',
        name: 'medium-input',
      };
      const largeArgs = { ...args, placeholder: 'Large input (via class)', name: 'large-input' };

      return { smallArgs, mediumArgs, largeArgs };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem; align-items: flex-start;">
        <!-- Size is controlled by external CSS classes or theme -->
        <Input v-bind="smallArgs" v-model="smallArgs.modelValue" class="input-sm" />
        <Input v-bind="mediumArgs" v-model="mediumArgs.modelValue" class="input-md" />
        <Input v-bind="largeArgs" v-model="largeArgs.modelValue" class="input-lg" />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'This story illustrates how input sizes can be managed. While the `Input` component itself does not have a direct `size` prop, different sizes (e.g., small, medium, large) are achieved by applying external CSS classes like `input-sm`, `input-md`, and `input-lg`. These classes would typically be defined in a global stylesheet or theme.',
      },
    },
  },
};

export const States: Story = {
  render: (args) => ({
    components: { Input },
    setup() {
      const defaultArgs = { ...args, placeholder: 'Default input', name: 'default-state-input' };
      const disabledArgs = {
        ...args,
        placeholder: 'Disabled input',
        disabled: true,
        name: 'disabled-state-input',
      };
      const errorArgs = {
        ...args,
        placeholder: 'Error input',
        error: 'This is an error message.',
        name: 'error-state-input',
      };
      const readonlyArgs = {
        ...args,
        value: 'Read-only input',
        readonly: true,
        placeholder: 'Read-only',
        name: 'readonly-state-input',
      };

      return { defaultArgs, disabledArgs, errorArgs, readonlyArgs };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <Input v-bind="defaultArgs" v-model="defaultArgs.modelValue" />
        <Input v-bind="disabledArgs" v-model="disabledArgs.modelValue" />
        <Input v-bind="errorArgs" v-model="errorArgs.modelValue" />
        <Input v-bind="readonlyArgs" v-model="readonlyArgs.modelValue" />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          "This story shows different states of the `Input` component: default, `disabled`, `error` (with an error message), and `readonly`. These states provide visual cues and control interactivity based on the input's current status or context.",
      },
    },
  },
};

export const WithLabel: Story = {
  args: {
    // Only props for the Input component itself
    placeholder: 'Enter your email',
    type: 'email',
    name: 'labelled-input',
    modelValue: '',
  },
  render: (args) => {
    // storyLabel is specific to this story's template, not an Input prop
    const storyLabel = 'Email Address';
    const inputId = `${args.name}-id`;
    return {
      components: { Input },
      setup() {
        return { args, storyLabel, inputId };
      },
      template: `
        <div style="display: flex; flex-direction: column; gap: 0.25rem; align-items: flex-start; width: 300px;">
          <label :for="inputId">{{ storyLabel }}</label>
          <Input :id="inputId" v-bind="args" v-model="args.modelValue" />
        </div>
      `,
    };
  },
  parameters: {
    docs: {
      description: {
        story:
          "This story demonstrates how to associate an external `<label>` with the `Input` component. The label uses the `for` attribute, which matches the `id` of the input field. This is crucial for accessibility, linking the label text descriptively to its corresponding input. The label itself is not part of the `Input` component but is implemented in the story's template.",
      },
    },
  },
};

export const WithHelpText: Story = {
  args: {
    // Only props for the Input component itself
    placeholder: 'Enter your password',
    type: 'password',
    name: 'input-with-help',
    modelValue: '',
  },
  render: (args) => {
    // storyLabel and storyHelpText are specific to this story's template
    const storyLabel = 'Password';
    const storyHelpText = 'Must be at least 8 characters.';
    const inputId = `${args.name}-id`;
    const helpTextId = `${args.name}-help-id`;

    return {
      components: { Input },
      setup() {
        return { args, storyLabel, storyHelpText, inputId, helpTextId };
      },
      template: `
        <div style="display: flex; flex-direction: column; gap: 0.25rem; align-items: flex-start; width: 300px;">
          <label :for="inputId">{{ storyLabel }}</label>
          <Input :id="inputId" v-bind="args" v-model="args.modelValue" :aria-describedby="storyHelpText ? helpTextId : undefined" />
          <small v-if="storyHelpText" :id="helpTextId">{{ storyHelpText }}</small>
        </div>
      `,
    };
  },
  parameters: {
    docs: {
      description: {
        story:
          'This story illustrates how to provide help text alongside an `Input` component. Similar to the label, the help text (often a `<small>` tag) is external to the `Input` itself. It is associated with the input via the `aria-describedby` attribute on the `Input` component, which points to the `id` of the help text element. This enhances accessibility by providing users with additional context or instructions for the input field.',
      },
    },
  },
};

export const WithPrefixSuffix: Story = {
  args: {
    placeholder: 'your_username',
    modelValue: '',
    name: 'prefix-suffix-input',
  },
  render: (args) => ({
    components: { Input },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem; align-items: flex-start; width: 300px;">
        <Input v-bind="args" v-model="args.modelValue">
          <template #prefix>
            <span style="padding-left: 0.5rem; color: #888;">@</span>
          </template>
        </Input>
        <Input v-bind="args" v-model="args.modelValue">
          <template #suffix>
            <span style="padding-right: 0.5rem; color: #888;">.com</span>
          </template>
        </Input>
        <Input v-bind="args" v-model="args.modelValue">
          <template #prefix>
            <span style="padding-left: 0.5rem; color: #888;">$</span>
          </template>
          <template #suffix>
            <span style="padding-right: 0.5rem; color: #888;">.00</span>
          </template>
        </Input>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'This story demonstrates the use of `#prefix` and `#suffix` slots to add inline adornments to the `Input` component. Prefixes appear before the input field text (e.g., `@` for a username, `$` for currency), and suffixes appear after (e.g., `.com` for a domain, `.00` for cents). These slots allow for richer input formatting and context directly within the component.',
      },
    },
  },
};
