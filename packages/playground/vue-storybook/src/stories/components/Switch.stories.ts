import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { Switch } from '@craftily/ui-vue';

const meta = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'The `Switch` component is a toggle control that allows users to turn a setting on or off. It is typically used for binary choices. The component supports `v-model` for its checked state, a `disabled` state, and can be associated with a label. Sizes (`sm`, `md`, `lg`) can be applied via HTML attributes, styled through global CSS or a theme.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'boolean',
      description: 'Use v-model to bind the checked state',
    },
    disabled: {
      control: 'boolean',
    },
    name: {
      control: 'text',
    },
    // Size is not an explicit prop of Switch.vue, but can be passed as an attribute.
    // It's demonstrated in the 'Sizes' story directly.
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => ({
    components: { Switch },
    setup() {
      const isChecked = ref(args.modelValue || false);
      return { args, isChecked };
    },
    template: `
      <label style="display: flex; align-items: center; gap: 0.5rem;">
        <Switch v-bind="args" v-model="isChecked" />
        Toggle me (State: {{ isChecked }})
      </label>
    `,
  }),
  args: {
    modelValue: false,
    disabled: false,
    name: 'basic-switch',
  },
  parameters: {
    docs: {
      description: {
        story:
          'This story shows the basic `Switch` component. It is bound to an `isChecked` ref using `v-model` and associated with a label that also displays its current boolean state. Props like `disabled` and `name` can be passed through `args`.',
      },
    },
  },
};

export const Sizes: Story = {
  render: (args) => ({
    components: { Switch },
    setup() {
      const smallChecked = ref(false);
      const mediumChecked = ref(true);
      const largeChecked = ref(false);
      
      const smallArgs = { ...args, size: 'sm', name: 'small-switch' };
      const mediumArgs = { ...args, size: 'md', name: 'medium-switch' };
      const largeArgs = { ...args, size: 'lg', name: 'large-switch' };
      
      return { smallArgs, mediumArgs, largeArgs, smallChecked, mediumChecked, largeChecked };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <label style="display: flex; align-items: center; gap: 0.5rem;">
          <Switch v-bind="smallArgs" v-model="smallChecked" />
          Small switch
        </label>
        <label style="display: flex; align-items: center; gap: 0.5rem;">
          <Switch v-bind="mediumArgs" v-model="mediumChecked" />
          Medium switch
        </label>
        <label style="display: flex; align-items: center; gap: 0.5rem;">
          <Switch v-bind="largeArgs" v-model="largeChecked" />
          Large switch
        </label>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'This story demonstrates different sizes for the `Switch` component by applying `size="sm"`, `size="md"`, and `size="lg"` as HTML attributes. These sizes are typically defined by global CSS or a theming system to control the visual scale of the switch.',
      },
    },
  },
};

export const States: Story = {
  render: (args) => ({
    components: { Switch },
    setup() {
      const defaultVal = ref(false);
      const checkedVal = ref(true);
      const disabledVal = ref(false);
      const checkedDisabledVal = ref(true);
      
      const defaultArgs = { ...args, name: 'default-switch' };
      const checkedArgs = { ...args, name: 'checked-switch' };
      const disabledArgs = { ...args, disabled: true, name: 'disabled-switch' };
      const checkedDisabledArgs = { ...args, checked: true, disabled: true, name: 'checked-disabled-switch' };
      
      return { 
        defaultArgs, checkedArgs, disabledArgs, checkedDisabledArgs,
        defaultVal, checkedVal, disabledVal, checkedDisabledVal 
      };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <label style="display: flex; align-items: center; gap: 0.5rem;">
          <Switch v-bind="defaultArgs" v-model="defaultVal" />
          Default switch
        </label>
        <label style="display: flex; align-items: center; gap: 0.5rem;">
          <Switch v-bind="checkedArgs" v-model="checkedVal" />
          Checked switch
        </label>
        <label style="display: flex; align-items: center; gap: 0.5rem;">
          <Switch v-bind="disabledArgs" v-model="disabledVal" />
          Disabled switch
        </label>
        <label style="display: flex; align-items: center; gap: 0.5rem;">
          <Switch v-bind="checkedDisabledArgs" v-model="checkedDisabledVal" />
          Checked and disabled
        </label>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'This story shows the `Switch` component in various states: default (unchecked), checked, disabled (unchecked), and checked & disabled. The `disabled` attribute prevents interaction, and the `checked` attribute (though typically controlled by `v-model`) can set the initial checked state for disabled switches.',
      },
    },
  },
};

export const WithDescription: Story = {
  render: (args) => ({
    components: { Switch },
    setup() {
      const notificationsEnabled = ref(true);
      const marketingEnabled = ref(false);
      
      const notificationsArgs = { ...args, name: 'notifications-switch' };
      const marketingArgs = { ...args, name: 'marketing-switch' };
      
      return { notificationsArgs, marketingArgs, notificationsEnabled, marketingEnabled };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        <label style="display: flex; align-items: flex-start; gap: 0.75rem; cursor: pointer;">
          <Switch v-bind="notificationsArgs" v-model="notificationsEnabled" style="margin-top: 0.125rem;" />
          <div style="display: flex; flex-direction: column;">
            <span>Notifications</span>
            <span style="font-size: 0.875rem; color: #6b7280;">
              Receive notifications about important updates.
            </span>
          </div>
        </label>
        <label style="display: flex; align-items: flex-start; gap: 0.75rem; cursor: pointer;">
          <Switch v-bind="marketingArgs" v-model="marketingEnabled" style="margin-top: 0.125rem;" />
          <div style="display: flex; flex-direction: column;">
            <span>Marketing emails</span>
            <span style="font-size: 0.875rem; color: #6b7280;">
              Receive emails about new features and promotions.
            </span>
          </div>
        </label>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'This story demonstrates how to use the `Switch` component with a more detailed label that includes a title and a description. This pattern is common in settings or preferences UIs where each toggle needs clear context. The entire area (switch and text) is wrapped in a `<label>` to make it clickable.',
      },
    },
  },
};
