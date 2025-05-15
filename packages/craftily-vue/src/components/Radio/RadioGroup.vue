<template>
  <craftily-radio-group
    :name="name"
    :value="modelValue"
    :horizontal="horizontal"
    v-bind="$attrs"
    @change="handleChange"
  >
    <slot></slot>
  </craftily-radio-group>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import '@craftily/ui/radio';

export interface RadioGroupProps {
  modelValue?: string;
  name?: string;
  horizontal?: boolean;
}

export default defineComponent({
  name: 'CraftilyRadioGroup',
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    horizontal: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {
    const handleChange = (event: CustomEvent<{ value: string }>) => {
      emit('update:modelValue', event.detail.value);
      emit('change', event);
    };

    return {
      handleChange,
    };
  },
  inheritAttrs: false,
});
</script>
