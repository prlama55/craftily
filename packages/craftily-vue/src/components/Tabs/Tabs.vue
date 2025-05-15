<template>
  <craftily-tabs
    :value="modelValue"
    :default-value="defaultValue"
    :variant="variant"
    :size="size"
    :class="className"
    v-bind="attrs"
    @change="handleChange"
  >
    <TabsList v-if="tabs && tabs.length">
      <TabsTrigger v-for="tab in tabs" :key="tab.value" :value="tab.value" :disabled="tab.disabled">
        {{ tab.label }}
      </TabsTrigger>
    </TabsList>
    <template v-if="tabs && tabs.length">
      <TabsContent v-for="tab in tabs" :key="tab.value" :value="tab.value">
        <slot :name="tab.value"></slot>
      </TabsContent>
    </template>
    <template v-else>
      <!-- Fallback for manual slotting -->
      <slot></slot>
    </template>
  </craftily-tabs>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue';
import '@craftily/ui/tabs'; // For the root <craftily-tabs> custom element
import TabsList from './TabsList.vue';
import TabsTrigger from './TabsTrigger.vue';
import TabsContent from './TabsContent.vue';

defineOptions({
  name: 'Tabs',
  inheritAttrs: false,
});

export interface TabItem {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface TabsProps {
  modelValue?: string;
  defaultValue?: string;
  variant?: 'default' | 'pills' | 'underline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  tabs?: TabItem[];
}

const props = withDefaults(defineProps<TabsProps>(), {
  variant: 'default',
  size: 'md',
  tabs: () => [],
  modelValue: undefined,
  defaultValue: undefined,
  className: undefined,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'change', value: string): void;
}>();

// Access attributes not defined as props
const attrs = useAttrs();

const handleChange = (event: Event) => {
  // The craftily-tabs emits a CustomEvent with detail: { value: string }
  if (event instanceof CustomEvent && event.detail && typeof event.detail.value === 'string') {
    emit('update:modelValue', event.detail.value);
    emit('change', event.detail.value);
  }
};
</script>
