<template>
  <craftily-checkbox
    :checked="modelValue"
    :disabled="disabled"
    :name="name"
    :value="value"
    :class="className"
    v-bind="attrs"
    @change="handleChange"
  >
    <slot></slot>
  </craftily-checkbox>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue';
import '@craftily/ui/checkbox'; // Ensures craftily-checkbox web component is registered

// Define component name and attribute inheritance behavior
defineOptions({
  name: 'CraftilyCheckbox',
  inheritAttrs: false, // Non-prop attributes will be available in `attrs`
});

// Define props with types and default values
// The exported interface is good for external typing if needed, but not strictly necessary for defineProps here.
export interface CheckboxProps {
  modelValue?: boolean; // For v-model
  disabled?: boolean;
  name?: string;
  value?: string; // The value attribute of the checkbox, not the v-model value
  className?: string; // Custom CSS class name
}

const props = withDefaults(defineProps<CheckboxProps>(), {
  modelValue: false,
  disabled: false,
  name: '',
  value: '', // Default to empty string, web component might handle this
  className: '',
});

// Define emits for v-model and change event
const emit = defineEmits<{
  (e: 'update:modelValue', checked: boolean): void;
  (e: 'change', event: Event): void; // Or more specific CustomEvent if known
}>();

// Access attributes not defined as props
const attrs = useAttrs();

const handleChange = (event: Event) => {
  // The craftily-checkbox emits a CustomEvent with detail: { checked: boolean; value: string }
  if (event instanceof CustomEvent && event.detail) {
    const { checked } = event.detail;
    emit('update:modelValue', checked);
    emit('change', event); // Forward the original event
  }
};
</script>
