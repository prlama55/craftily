<template>
  <craftily-switch
    :checked="modelValue"
    :disabled="disabled"
    :name="name"
    :class="className"
    v-bind="attrs"
    @change="handleChange"
  ></craftily-switch>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue';
import '@craftily/ui/switch';

defineOptions({
  name: 'CraftilySwitch',
  inheritAttrs: false,
});

export interface SwitchProps {
  modelValue?: boolean;
  disabled?: boolean;
  name?: string;
  className?: string;
}

const props = withDefaults(defineProps<SwitchProps>(), {
  modelValue: false,
  disabled: false,
  name: '',
  className: '',
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
}>();

// Access attributes not defined as props
const attrs = useAttrs();

const handleChange = (event: Event) => {
  // The craftily-switch emits a CustomEvent with detail: { checked: boolean }
  if (event instanceof CustomEvent && event.detail && typeof event.detail.checked === 'boolean') {
    emit('update:modelValue', event.detail.checked);
  }
};
</script>
