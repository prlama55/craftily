<template>
  <craftily-select
    :value="modelValue"
    :placeholder="placeholder"
    :disabled="disabled || loading"
    :name="name"
    :error="error"
    :options="loading ? [] : options"
    :data-multiple="multiple"
    v-bind="attrs"
    @change="handleChange"
  >
    <template v-if="loading">
      <option value="" disabled>{{ loadingText }}</option>
    </template>
    <template v-else>
      <!-- Allow manual slotting of options if desired -->
      <slot></slot>
    </template>
  </craftily-select>
</template>

<script setup lang="ts">
import { useAttrs, defineOptions, withDefaults } from 'vue';
import '@craftily/ui/select'; // Registers craftily-select
import {
  DisabledProps,
  ErrorProps,
  NameProps,
  PlaceholderProps,
  SelectOption,
} from '../../types/common';

// Note: The 'multiple' prop's functionality depends on the underlying
// craftily-select web component supporting the 'multiple' attribute on its native select.
// Currently, craftily-select does not appear to have this, so 'multiple' may not enable true multi-select.

// Use the SelectOption interface from common types
export interface SelectOptionItem extends SelectOption {}

export interface SelectProps extends PlaceholderProps, DisabledProps, NameProps, ErrorProps {
  modelValue?: string | string[];
  options?: SelectOptionItem[];
  loading?: boolean;
  loadingText?: string;
  multiple?: boolean; // Kept for API, but see note above.
}

const props = withDefaults(defineProps<SelectProps>(), {
  modelValue: '',
  placeholder: '',
  disabled: false,
  name: '',
  error: '',
  options: () => [],
  loading: false,
  loadingText: 'Loading...',
  multiple: false,
});

const emit = defineEmits(['update:modelValue', 'change']);

const attrs = useAttrs();

const handleChange = (event: Event) => {
  // The craftily-select emits a CustomEvent with detail: { value: string | string[] }
  if (event instanceof CustomEvent && event.detail && typeof event.detail.value !== 'undefined') {
    const value = event.detail.value;
    emit('update:modelValue', value);
    emit('change', event); // Forward the original event as well
  }
};

defineOptions({
  name: 'Select',
  inheritAttrs: false,
});
</script>
