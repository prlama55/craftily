<template>
  <craftily-radio
    :checked="modelValue"
    :disabled="disabled"
    :name="name"
    :value="value"
    v-bind="$attrs"
    @change="handleChange"
  >
    <slot></slot>
  </craftily-radio>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import '@craftily/ui/radio';

export interface RadioProps {
  modelValue?: boolean;
  disabled?: boolean;
  name?: string;
  value?: string;
}

export default defineComponent({
  name: 'CraftilyRadio',
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
  },
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {
    const handleChange = (event: CustomEvent<{ checked: boolean; value: string }>) => {
      emit('update:modelValue', event.detail.checked);
      emit('change', event);
    };

    return {
      handleChange,
    };
  },
  inheritAttrs: false,
});
</script>
