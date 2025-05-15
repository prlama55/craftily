import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
// Attempt to import TabItem, if this fails due to ongoing TS server/build issues,
// the TabItem interface definition below will serve as a fallback.
import { Tabs, type TabItem as ImportedTabItem } from '@craftily/ui-vue';

// Local fallback definition if import fails or for clarity
interface TabItem extends ImportedTabItem {}
// If ImportedTabItem is not resolved by TS, uncomment and use this:
// interface TabItem {
//   value: string;
//   label: string;
//   disabled?: boolean;
// }

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'The `Tabs` component allows for organizing content into multiple sections, where only one section is visible at a time. It supports data-driven tab creation via a `tabs` prop or manual tab creation using slots. Tabs can have different visual `variant` styles (default, pills, underline) and `size` options. Active tab state can be managed with `v-model` or `defaultValue`.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'text', description: 'Bound active tab value (use with v-model)' },
    defaultValue: { control: 'text', description: 'Initial active tab if modelValue is not used' },
    variant: {
      control: 'select',
      options: ['default', 'pills', 'underline'], // Matches Tabs.vue props
      description: 'Visual style of the tabs',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the tabs',
    },
    tabs: { control: 'object', description: 'Array of TabItem objects for data-driven tabs' },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleTabs: TabItem[] = [
  { value: 'tab1', label: 'Tab 1' },
  { value: 'tab2', label: 'Tab 2' },
  { value: 'tab3', label: 'Tab 3', disabled: true },
  { value: 'tab4', label: 'Tab 4' },
];

export const Basic: Story = {
  args: {
    tabs: sampleTabs,
    defaultValue: 'tab1',
    variant: 'underline',
    size: 'md',
  },
  render: (args) => ({
    components: { Tabs },
    setup() {
      const activeTab = ref(
        args.defaultValue || (args.tabs && args.tabs.length > 0 ? args.tabs[0].value : '')
      );
      // If using v-model, ensure args.modelValue is handled or activeTab is passed as modelValue prop
      return { args, activeTab, currentTabs: args.tabs || [] };
    },
    template: `
      <Tabs v-model="activeTab" :tabs="currentTabs" :variant="args.variant" :size="args.size" class="basic-tabs-example">
        <template v-for="tab in currentTabs" :key="tab.value" #[tab.value]>
          <div>Content of {{ tab.label }} (Value: {{ tab.value }})</div>
          <p>Active tab is: {{ activeTab }}</p>
        </template>
      </Tabs>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          "This story demonstrates the basic data-driven usage of the `Tabs` component. It uses the `tabs` prop to define tab items and `v-model` to manage the active tab. Content for each tab is provided via named slots corresponding to each tab's `value`.",
      },
    },
  },
};

const variantTabs: TabItem[] = [
  { value: 'vtab1', label: 'Tab A' },
  { value: 'vtab2', label: 'Tab B' },
];

export const Variants: Story = {
  render: (args) => ({
    components: { Tabs },
    setup() {
      const activeUnderline = ref('vtab1');
      const activePills = ref('vtab1');
      const activeDefault = ref('vtab1');
      return { args, variantTabs, activeUnderline, activePills, activeDefault };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem; width: 400px;">
        <h4>Variant: underline (mapped from 'line')</h4>
        <Tabs v-model="activeUnderline" :tabs="variantTabs" variant="underline" class="underline-tabs">
          <template #vtab1>Panel A for Underline</template>
          <template #vtab2>Panel B for Underline</template>
        </Tabs>

        <h4>Variant: pills (mapped from 'pill')</h4>
        <Tabs v-model="activePills" :tabs="variantTabs" variant="pills" class="pills-tabs">
          <template #vtab1>Panel A for Pills</template>
          <template #vtab2>Panel B for Pills</template>
        </Tabs>

        <h4>Variant: default</h4>
        <Tabs v-model="activeDefault" :tabs="variantTabs" variant="default" class="default-tabs">
          <template #vtab1>Panel A for Default</template>
          <template #vtab2>Panel B for Default</template>
        </Tabs>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'This story showcases the different visual styles (`variant` prop) for the `Tabs` component: `underline`, `pills`, and `default`. Each variant offers a distinct look and feel for the tab navigation.',
      },
    },
  },
};

export const WithIcons: Story = {
  args: {
    variant: 'underline',
    defaultValue: 'profile',
  },
  render: (args) => ({
    components: { Tabs },
    setup() {
      const activeTab = ref(args.defaultValue);
      return { args, activeTab };
    },
    // Using slot-driven approach for icons by placing web-component tags directly
    template: `
      <Tabs v-model="activeTab" :variant="args.variant" :size="args.size" class="icon-tabs">
        <TabsList>
          <TabsTrigger value="profile" class="profile-tab">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 8px;">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            Profile
          </TabsTrigger>
          <TabsTrigger value="settings" class="settings-tab">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 8px;">
              <circle cx="12" cy="12" r="3"/>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
            </svg>
            Settings
          </TabsTrigger>
          <TabsTrigger value="messages" class="messages-tab">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 8px;">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            Messages
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" class="profile-content">Content of Profile (Active: {{ activeTab === 'profile' }})</TabsContent>
        <TabsContent value="settings" class="settings-content">Content of Settings (Active: {{ activeTab === 'settings' }})</TabsContent>
        <TabsContent value="messages" class="messages-content">Content of Messages (Active: {{ activeTab === 'messages' }})</TabsContent>
      </Tabs>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'This story demonstrates how to include icons within tab triggers. It uses a slot-driven approach by directly embedding the web components (`<TabsList>`, `<TabsTrigger>`, and `<TabsContent>`), allowing for custom content like SVGs within the triggers. This approach provides more granular control over the trigger content while still using the Vue `Tabs` wrapper component. Custom CSS classes are applied to each tab component for additional styling.',
      },
    },
  },
};
